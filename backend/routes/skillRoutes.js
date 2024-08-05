import express from 'express';
import multer from 'multer';
import { createHelia } from 'helia'
import { createOrbitDB } from '@orbitdb/core'
import { gossipsub } from "@chainsafe/libp2p-gossipsub";
import { identify } from "@libp2p/identify";
import { createLibp2p } from 'libp2p'
import { MemoryBlockstore } from 'blockstore-core';
import dotenv from 'dotenv';
dotenv.config({ path: "../.env" });
import Web3 from 'web3';
import fs from 'fs-extra'
import * as IPFS from 'ipfs-core'

const INFURA_API_KEY = process.env.INFURA_PROJECT_ID
const PRIVATE_KEY = process.env.PRIVATE_KEY

const web3 = new Web3(new Web3.providers.HttpProvider(`https://sepolia.infura.io/v3/${INFURA_API_KEY}`));
const account = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
web3.eth.accounts.wallet.add(account);

const Libp2pOptions = {
    services: {
      pubsub: gossipsub({
        allowPublishToZeroTopicPeers: true
      }),
      identify: identify()
    }
}

const router = express.Router();
const upload = multer({ dest: 'uploads/' });
console.log(upload);


let db,helia;

;(async function () {
    const blockstore = new MemoryBlockstore();
    const libp2p = await createLibp2p({ ...Libp2pOptions });
    helia = await createHelia({ blockstore,libp2p });
    const orbitdb = await createOrbitDB({ ipfs: helia });
    db = await orbitdb.open('unverifiedSkills', { type: 'keyvalue' });
    
    const address = db.address
    console.log(address)
})()

router.post('/info', upload.single('file'), async (req, res) => {
    try {
        let skillData = req.body;
        const uid = skillData.uid;
        const file = req.file;
        
        const ipfs = await IPFS.create()
        const buffer = fs.readFileSync(file.path)
        const result = await ipfs.add(buffer)
        let cid = result.path
        console.log('cid :',result.path);

        fs.unlink(file.path, (err) => {
            if (err) {
              console.log('not deleted');
            }
            console.log('File deleted successfully.');
        });

        const storeMetadataOnEthereum = async () => {
            const cidString = JSON.stringify(cid);
            const data = web3.utils.toHex(cidString);

            const gasEstimate = await web3.eth.estimateGas({
                from: account.address,
                to: account.address,
                value: web3.utils.toWei('0.01', 'ether'),
                data: data,
            });

            const tx = {
                from: account.address,
                to: account.address,
                value: web3.utils.toWei('0.01', 'ether'),
                gas: gasEstimate,
                maxPriorityFeePerGas: web3.utils.toWei('2', 'gwei'),
                maxFeePerGas: web3.utils.toWei('50', 'gwei'),
                data: data,
            };

            const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
            const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            console.log('Transaction hash:', txReceipt.transactionHash);
            return txReceipt.transactionHash;
        };

        const txHash = await storeMetadataOnEthereum(cid);
        
        skillData = { ...skillData, fileCID: cid, txHash };
        await db.put(uid, skillData);

        res.status(200).json({ message: "Skill stored successfully" });
    } catch (error) {
        console.error("Error storing profile data:", error);
        res.status(500).json({ error: "Failed to store profile data" });
    }
});

router.get('/info', async (req, res) => {
    try {
        const {uid} = req.query
        const profileData = await db.get(uid);

        const dbName = db.address.path;
        
        if (profileData) {
            res.status(200).json(profileData);
        } else {
            res.status(404).json({ error: "Profile not found", name: dbName});
        }
    } catch (error) {
        console.error("Error retrieving profile data:", error);
        res.status(500).json({ error: "Failed to retrieve profile data" });
    }
});

export default router;
