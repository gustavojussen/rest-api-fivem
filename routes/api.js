const express = require('express');
const router = express.Router();
const { lua } = require('./lua');
const config = require('.././config.json')

router.get('/:functoexec/:sender_id',async (req, res, next) => {
    const id = req.params
    const func = id.functoexec
    const tokenreceive = id.sender_id
    const token = config.token
    if (tokenreceive === token) {
        const ExecLua = await lua(func)
        const results = ExecLua ? ExecLua : undefined
        res.status(200).send({
            message: results,
            import: req.connection.remoteAddress
         })
    } else res.status(404).send({
        message: "Vaza seu corno"
    })
})


module.exports = router;