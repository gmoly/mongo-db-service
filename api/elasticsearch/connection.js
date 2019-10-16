var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client({
    host: {
        protocol: 'http',
        host: 'elasticsearch',
        port: 9200

    },
    log: 'trace'
});

module.exports = client;