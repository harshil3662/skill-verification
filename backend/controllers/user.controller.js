const handler = require('../utills/handler')

const registerUser = handler( async (req,res) =>{
    res.status(200).json({
        message: "ok"
    })
})

module.exports = registerUser