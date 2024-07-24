require('dotenv').config({ path: "../.env" })
const express = require('express');
const connectDB = require('./db/index')
const cors = require('cors')
const cookieparser = require('cookie-parser')
const userRoutes = require('./routes/signup');

const app = express();
const port = process.env.PORT || 8000
connectDB()
    .then(()=>{
        app.listen(port,()=>{
            console.log(`Server is running on ${port}`);
        })
    })


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(cookieparser())

app.use('/api', userRoutes);
