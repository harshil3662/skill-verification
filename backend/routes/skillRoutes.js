const express = require('express');
const multer = require('multer');

const router = express.Router();
const upload = multer({ dest: 'public/' });

let helia, orbitdb, db;

async function init() {
    try {
        const { createHelia } = await import('helia');
        const OrbitDBModule = await import('@orbitdb/core');
        const OrbitDB = OrbitDBModule.default;

        helia = await createHelia();
        orbitdb = await OrbitDB.createInstance(helia);
        db = await orbitdb.keyvalue('UnverifiedSkills', { accessController: { write: ['*'] } });
    } catch (err) {
        console.error('Error initializing OrbitDB:', err);
        process.exit(1);
    }
}

init();

router.post('/info', upload.array('files'), async (req, res) => {
    try {
        let skillData = req.body;
        const uid = skillData.uid;
        const files = req.files;

        const cids = await Promise.all(files.map(async (file) => {
            const { cid } = await helia.add(file.buffer);
            return cid.toString();
        }));

        skillData = { ...skillData, filesCID: cids };
        await db.put(uid, skillData);

        res.status(200).json({ message: "Skill stored successfully" });
    } catch (error) {
        console.error("Error storing profile data:", error);
        res.status(500).json({ error: "Failed to store profile data" });
    }
});

router.get('/getSkill/:id', async (req, res) => {
    try {
        const profileId = req.params.id;

        const profileData = db.get(profileId);

        if (profileData) {
            res.status(200).json(profileData);
        } else {
            res.status(404).json({ error: "Profile not found" });
        }
    } catch (error) {
        console.error("Error retrieving profile data:", error);
        res.status(500).json({ error: "Failed to retrieve profile data" });
    }
});

module.exports = router;
