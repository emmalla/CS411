const express = require('express');
const router = express.Router();
var request = require("request");

// make sure all is well push


router.get('/:destination', (req, res, next) => {
    var go_url =  'https://api.flightstats.com/flex/schedules/rest/v1/json/from/BOS/to/' + req.params.destination + '/departing/2019/12/11'
    var options = {
        method: 'GET',
        url: go_url,
        qs:
        {
            appId: 'b8b20992',
            appKey: 'c2a78b3617c7e40265cb7c06e964aa65'
        },
        headers:
        {
            'cache-control': 'no-cache',
            Connection: 'keep-alive',
            Host: 'api.flightstats.com',
            'Postman-Token': 'b8077019-7177-42e9-b74a-142b5d8de866,b4c73878-8aab-4ac1-b612-8622d84308b2',
            'Cache-Control': 'no-cache',
            Accept: '*/*',
        },
        json:true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        res.status(200).json(body)
    });

})

module.exports = router;
