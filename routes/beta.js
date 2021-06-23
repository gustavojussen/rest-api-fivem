const express = require('express');
const router = express.Router();
const { lua } = require('./lua');

router.get('/:functoexec',(req,res,next) => {
    const id = req.params
    let results = []
    lua(req.params.functoexec).then(data => {
        results = data
        res.status(200).send({
            message: results
        })
    })
})


module.exports = router;