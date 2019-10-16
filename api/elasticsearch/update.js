var client = require('./connection.js');

update = (data) => {
    console.log(new Date(), data)
	if (data) {
		if (data.operationType === 'insert' || data.operationType === 'update' || data.operationType === 'replace') {
			client.index({  
				index: 'trips',
				id: data.fullDocument._id.toString(),
				type: '_doc',
				body: {
				  "title": data.fullDocument.title,
				  "description": data.fullDocument.description,
				  "published": data.fullDocument.published,
				  "user": data.fullDocument.user,
				  "places": data.fullDocument.places.map(place => { 
					return {
					  "placeTitle": place.placeTitle,
					  "placeDescription": place.placeDescription,
					  "location": place.location
				  	}
				  })
				}
			  },function(err,resp,status) {
				  console.log("err-"+err);
				  console.log("result-"+resp);
				  console.log("status-"+status);
			  });
		}
		if (data.operationType === 'delete') {
			client.delete({  
				index: 'trips',
				id: data.fullDocument._id.toString(),
				type: '_doc'
			  },function(err,resp,status) {
				  console.log(resp);
			  });
		}
	}
};

module.exports = update;