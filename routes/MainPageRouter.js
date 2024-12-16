const {Router} = require('express')
const path = require('path')

const mainPageRouter = Router()

mainPageRouter.get('/',(req,res) => {
    res.sendFile(path.join(__dirname + "/public","index.html"))
})


module.exports = mainPageRouter