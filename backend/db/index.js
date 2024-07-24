const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_STRING}/EthSkillVerify`)
        console.log("Database connected...");
    } catch (error) {
        console.log("Error: ",error);
    }
}

module.exports = connectDB