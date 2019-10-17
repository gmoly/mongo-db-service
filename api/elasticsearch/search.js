var client = require('./connection.js');

search = (req,res,body) => {
    // short-circuit favicon requests for easier debugging
    console.log('req.method: ' + req.method);
    console.log('req.url: ' + req.url);
    console.log('request: ' + body);

    // Request method handling: exit if not GET or POST
    if ( ! (req.method == 'GET' || req.method == 'POST') ) {
        errMethod = { error: req.method + " request method is not supported. Use GET or POST." };
        console.log("ERROR: " + req.method + " request method is not supported.");
        res.write(JSON.stringify(errMethod));
        res.end();
        return;
    }

    client.search({  
    index: 'trips',
    type: '_doc',
    body: body
    },function (error,response,status) {
        if (error){
            console.log("search error: "+error)
        }
        else {
            console.log("--- Response ---");
            console.log(response);
            res.send(response.hits);
        }
    });
}

module.exports = search;