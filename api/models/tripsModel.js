'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TripSchema = new Schema({
    title: {
      type: String,
      required: 'Trip title should be populated'
    },
    description: {
    type: String,
    required: 'Trip description should be populated'
    },
    user: {
        id: {
            type: String,
            required: "user id should be defined"
        },
        logo: {
            type: String,
            required: "user logo should be defined"
        },
        name: {
            type: String,
            required: "user name should be defined"
        },
        nick: {
            type: String,
            required: "user nick should be defined"
        }
    },
    places: [{
        placeTitle: {
            type: String,
            required: "place title should be defined"
        },
        placeDescription: {
            type: String,
            required: "place description should be defined"
        },
        location: {
            id: String,
            latitude: Number,
            longitude: Number,
            name: String
        },
        media: {
            image: {
                images: {
                    low_resolution: {
                        height: {
                            type: Number,
                            required: 'image heihgt should be defined'
                        },
                        url: {
                            type: String,
                            required: 'image url should be defined'
                        },
                        width: {
                            type: Number,
                            required: 'image width should be defined'
                        }
                    },
                    standard_resolution:{
                        height: {
                            type: Number,
                            required: 'image heihgt should be defined'
                        },
                        url: {
                            type: String,
                            required: 'image url should be defined'
                        },
                        width: {
                            type: Number,
                            required: 'image width should be defined'
                        }
                    },
                    thumbnail:{
                        height: {
                            type: Number,
                            required: 'image heihgt should be defined'
                        },
                        url: {
                            type: String,
                            required: 'image url should be defined'
                        },
                        width: {
                            type: Number,
                            required: 'image width should be defined'
                        }
                    }
                },
                type: {
                    type: String,
                    require: 'type of object is required'
                }
            },
            carousel: [{
                images: {
                    low_resolution: {
                        height: {
                            type: Number,
                            required: 'image heihgt should be defined'
                        },
                        url: {
                            type: String,
                            required: 'image url should be defined'
                        },
                        width: {
                            type: Number,
                            required: 'image width should be defined'
                        }
                    },
                    standard_resolution:{
                        height: {
                            type: Number,
                            required: 'image heihgt should be defined'
                        },
                        url: {
                            type: String,
                            required: 'image url should be defined'
                        },
                        width: {
                            type: Number,
                            required: 'image width should be defined'
                        }
                    },
                    thumbnail:{
                        height: {
                            type: Number,
                            required: 'image heihgt should be defined'
                        },
                        url: {
                            type: String,
                            required: 'image url should be defined'
                        },
                        width: {
                            type: Number,
                            required: 'image width should be defined'
                        }
                    }
                },
                type: {
                    type: String,
                    require: 'type of object is required'
                }
            }]
        }
    }],
    published: {
        type: Number,
        required: 'Publishing date should be defined'
    }
});


module.exports = mongoose.model('trips', TripSchema)