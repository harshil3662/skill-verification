const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createHelia } = require('helia');
const { create } = require('@helia/ipfs');
const OrbitDB = require('orbit-db');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

let db;

const initialize = async () => {
    // Create Helia instance
    const helia = await createHelia();

    // Create IPFS instance using Helia
    const ipfs = create(helia);

    // Create OrbitDB instance
    const orbitdb = await OrbitDB.createInstance(ipfs);

    // Create or open a key-value database named 'profiles'
    db = await orbitdb.keyvalue('profiles');
    await db.load();
};

initialize();

// Route to save profile data
app.post('/api/profiles', async (req, res) => {
    const { profileData } = req.body;

    try {
        // Convert profile data to a JSON string
        const profileDataJson = JSON.stringify(profileData);

        // Add profile data to IPFS
        const { path } = await ipfs.add(profileDataJson);
        const ipfsHash = path;

        // Save IPFS hash and profile data to OrbitDB
        await db.put(ipfsHash, profileData);

        res.status(200).json({ message: 'Profile saved', ipfsHash });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to get profile data by IPFS hash
app.get('/api/profiles/:ipfsHash', async (req, res) => {
    const { ipfsHash } = req.params;

    try {
        // Fetch profile data from OrbitDB using the IPFS hash
        const profile = await db.get(ipfsHash);

        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }

        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to get all profiles
app.get('/api/profiles', async (req, res) => {
    try {
        // Fetch all profiles from OrbitDB
        const profiles = db.all;

        res.status(200).json(profiles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
