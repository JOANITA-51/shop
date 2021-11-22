var axios = require('axios');
var express = require('express');
var router = express.Router();

const URL = 'https://patasente.me/phantom-api/send-transaction-token/0634vhfoP/e8ad92b8b2629b0db4651612a24099b7'
router.post('/', async function(req, res, next){
    try{
        const results = await axios.post(URL, req.body)
        //console.log (results.data)
        if(results.data.indexOf('four')){
            res.json({
                'result':'success',
                //'msg' : 'Api reached!'
            })
        } else {
            res.json({
                'result':'fail', 
            })
        }


    } catch(error){
        console.log(error)
        res.json({
            'msg':'Api not reached',
            'your_body':req.body
        })
    }

});

module.exports = router;
