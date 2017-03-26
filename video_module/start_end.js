
var fs = require('fs');
var request = require('request');
var athlete = {
    name: 'sui lu',
    url: 'http://media.gettyimages.com/photos/sui-lu-of-china-competes-in-the-balance-beam-final-during-day-ten-of-picture-id129337938?s=594x594'
};
var athlete2 = {
    name: 'ya boi',
    url: 'https://pbs.twimg.com/profile_images/453327085034295296/9ELm1oy_.jpeg'
};

var frames = [
    {
        frame_second: 1,
        body_vision: {
            "language": "en",
            "textAngle": 0,
            "orientation": "Up",
            "regions": [
                {
                    "boundingBox": "791,118,592,838",
                    "lines": [
                        {
                            "boundingBox": "799,118,453,58",
                            "words": [
                                {
                                    "boundingBox": "799,118,102,58",
                                    "text": "IF"
                                },
                                {
                                    "boundingBox": "937,119,109,57",
                                    "text": "WE"
                                },
                                {
                                    "boundingBox": "1087,118,165,58",
                                    "text": "DID"
                                }
                            ]
                        },
                        {
                            "boundingBox": "792,184,512,176",
                            "words": [
                                {
                                    "boundingBox": "792,184,512,176",
                                    "text": "ALL"
                                }
                            ]
                        },
                        {
                            "boundingBox": "796,368,515,60",
                            "words": [
                                {
                                    "boundingBox": "796,368,155,59",
                                    "text": "THE"
                                },
                                {
                                    "boundingBox": "993,368,318,60",
                                    "text": "THINGS"
                                }
                            ]
                        },
                        {
                            "boundingBox": "791,441,312,57",
                            "words": [
                                {
                                    "boundingBox": "791,441,108,57",
                                    "text": "si"
                                },
                                {
                                    "boundingBox": "937,441,166,57",
                                    "text": "lu"
                                }
                            ]
                        },
                        {
                            "boundingBox": "797,508,586,87",
                            "words": [
                                {
                                    "boundingBox": "797,508,586,87",
                                    "text": "CAPABLE"
                                }
                            ]
                        },
                        {
                            "boundingBox": "795,607,452,72",
                            "words": [
                                {
                                    "boundingBox": "795,607,106,59",
                                    "text": "OF"
                                },
                                {
                                    "boundingBox": "941,607,306,72",
                                    "text": "DOING,"
                                }
                            ]
                        },
                        {
                            "boundingBox": "791,678,424,60",
                            "words": [
                                {
                                    "boundingBox": "791,680,108,57",
                                    "text": "WE"
                                },
                                {
                                    "boundingBox": "937,678,278,60",
                                    "text": "WOULD"
                                }
                            ]
                        },
                        {
                            "boundingBox": "793,750,498,59",
                            "words": [
                                {
                                    "boundingBox": "793,750,498,59",
                                    "text": "LITERALLY"
                                }
                            ]
                        },
                        {
                            "boundingBox": "791,821,390,60",
                            "words": [
                                {
                                    "boundingBox": "791,821,390,60",
                                    "text": "ASTOUND"
                                }
                            ]
                        },
                        {
                            "boundingBox": "795,893,531,63",
                            "words": [
                                {
                                    "boundingBox": "795,893,531,63",
                                    "text": "OURSELVES."
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        frame_second: 21,
        body_vision: {
            "language": "en",
            "textAngle": 0,
            "orientation": "Up",
            "regions": [
                {
                    "boundingBox": "791,118,592,838",
                    "lines": [
                        {
                            "boundingBox": "799,118,453,58",
                            "words": [
                                {
                                    "boundingBox": "799,118,102,58",
                                    "text": "IF"
                                },
                                {
                                    "boundingBox": "937,119,109,57",
                                    "text": "WE"
                                },
                                {
                                    "boundingBox": "1087,118,165,58",
                                    "text": "DID"
                                }
                            ]
                        },
                        {
                            "boundingBox": "792,184,512,176",
                            "words": [
                                {
                                    "boundingBox": "792,184,512,176",
                                    "text": "ALL"
                                }
                            ]
                        },
                        {
                            "boundingBox": "796,368,515,60",
                            "words": [
                                {
                                    "boundingBox": "796,368,155,59",
                                    "text": "THE"
                                },
                                {
                                    "boundingBox": "993,368,318,60",
                                    "text": "THINGS"
                                }
                            ]
                        },
                        {
                            "boundingBox": "791,441,312,57",
                            "words": [
                                {
                                    "boundingBox": "791,441,108,57",
                                    "text": "si"
                                },
                                {
                                    "boundingBox": "937,441,166,57",
                                    "text": "lu"
                                }
                            ]
                        },
                        {
                            "boundingBox": "797,508,586,87",
                            "words": [
                                {
                                    "boundingBox": "797,508,586,87",
                                    "text": "CAPABLE"
                                }
                            ]
                        },
                        {
                            "boundingBox": "795,607,452,72",
                            "words": [
                                {
                                    "boundingBox": "795,607,106,59",
                                    "text": "OF"
                                },
                                {
                                    "boundingBox": "941,607,306,72",
                                    "text": "DOING,"
                                }
                            ]
                        },
                        {
                            "boundingBox": "791,678,424,60",
                            "words": [
                                {
                                    "boundingBox": "791,680,108,57",
                                    "text": "WE"
                                },
                                {
                                    "boundingBox": "937,678,278,60",
                                    "text": "WOULD"
                                }
                            ]
                        },
                        {
                            "boundingBox": "793,750,498,59",
                            "words": [
                                {
                                    "boundingBox": "793,750,498,59",
                                    "text": "LITERALLY"
                                }
                            ]
                        },
                        {
                            "boundingBox": "791,821,390,60",
                            "words": [
                                {
                                    "boundingBox": "791,821,390,60",
                                    "text": "ASTOUND"
                                }
                            ]
                        },
                        {
                            "boundingBox": "795,893,531,63",
                            "words": [
                                {
                                    "boundingBox": "795,893,531,63",
                                    "text": "OURSELVES."
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        frame_second: 21,
        body_vision: {
            "language": "en",
            "textAngle": 0,
            "orientation": "Up",
            "regions": [
                {
                    "boundingBox": "791,118,592,838",
                    "lines": [
                        {
                            "boundingBox": "799,118,453,58",
                            "words": [
                                {
                                    "boundingBox": "799,118,102,58",
                                    "text": "ya"
                                },
                                {
                                    "boundingBox": "937,119,109,57",
                                    "text": "OI"
                                },
                                {
                                    "boundingBox": "1087,118,165,58",
                                    "text": "DID"
                                }
                            ]
                        },
                        {
                            "boundingBox": "792,184,512,176",
                            "words": [
                                {
                                    "boundingBox": "792,184,512,176",
                                    "text": "ALL"
                                }
                            ]
                        },
                        {
                            "boundingBox": "796,368,515,60",
                            "words": [
                                {
                                    "boundingBox": "796,368,155,59",
                                    "text": "THE"
                                },
                                {
                                    "boundingBox": "993,368,318,60",
                                    "text": "THINGS"
                                }
                            ]
                        },
                        {
                            "boundingBox": "791,441,312,57",
                            "words": [
                                {
                                    "boundingBox": "791,441,108,57",
                                    "text": "ui"
                                },
                                {
                                    "boundingBox": "937,441,166,57",
                                    "text": "lu"
                                }
                            ]
                        },
                        {
                            "boundingBox": "797,508,586,87",
                            "words": [
                                {
                                    "boundingBox": "797,508,586,87",
                                    "text": "CAPABLE"
                                }
                            ]
                        },
                        {
                            "boundingBox": "795,607,452,72",
                            "words": [
                                {
                                    "boundingBox": "795,607,106,59",
                                    "text": "OF"
                                },
                                {
                                    "boundingBox": "941,607,306,72",
                                    "text": "DOING,"
                                }
                            ]
                        },
                        {
                            "boundingBox": "791,678,424,60",
                            "words": [
                                {
                                    "boundingBox": "791,680,108,57",
                                    "text": "WE"
                                },
                                {
                                    "boundingBox": "937,678,278,60",
                                    "text": "WOULD"
                                }
                            ]
                        },
                        {
                            "boundingBox": "793,750,498,59",
                            "words": [
                                {
                                    "boundingBox": "793,750,498,59",
                                    "text": "LITERALLY"
                                }
                            ]
                        },
                        {
                            "boundingBox": "791,821,390,60",
                            "words": [
                                {
                                    "boundingBox": "791,821,390,60",
                                    "text": "ASTOUND"
                                }
                            ]
                        },
                        {
                            "boundingBox": "795,893,531,63",
                            "words": [
                                {
                                    "boundingBox": "795,893,531,63",
                                    "text": "OURSELVES."
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        frame_second: 40,
        body_vision: {
            "language": "en",
            "textAngle": 0,
            "orientation": "Up",
            "regions": [
                {
                    "boundingBox": "791,118,592,838",
                    "lines": [
                        {
                            "boundingBox": "799,118,453,58",
                            "words": [
                                {
                                    "boundingBox": "799,118,102,58",
                                    "text": "ya"
                                },
                                {
                                    "boundingBox": "937,119,109,57",
                                    "text": "bI"
                                },
                                {
                                    "boundingBox": "1087,118,165,58",
                                    "text": "DID"
                                }
                            ]
                        },
                        {
                            "boundingBox": "792,184,512,176",
                            "words": [
                                {
                                    "boundingBox": "792,184,512,176",
                                    "text": "ALL"
                                }
                            ]
                        },
                        {
                            "boundingBox": "796,368,515,60",
                            "words": [
                                {
                                    "boundingBox": "796,368,155,59",
                                    "text": "THE"
                                },
                                {
                                    "boundingBox": "993,368,318,60",
                                    "text": "THINGS"
                                }
                            ]
                        },
                        {
                            "boundingBox": "791,441,312,57",
                            "words": [
                                {
                                    "boundingBox": "791,441,108,57",
                                    "text": "su"
                                },
                                {
                                    "boundingBox": "937,441,166,57",
                                    "text": "lu"
                                }
                            ]
                        },
                        {
                            "boundingBox": "797,508,586,87",
                            "words": [
                                {
                                    "boundingBox": "797,508,586,87",
                                    "text": "CAPABLE"
                                }
                            ]
                        },
                        {
                            "boundingBox": "795,607,452,72",
                            "words": [
                                {
                                    "boundingBox": "795,607,106,59",
                                    "text": "OF"
                                },
                                {
                                    "boundingBox": "941,607,306,72",
                                    "text": "DOING,"
                                }
                            ]
                        },
                        {
                            "boundingBox": "791,678,424,60",
                            "words": [
                                {
                                    "boundingBox": "791,680,108,57",
                                    "text": "WE"
                                },
                                {
                                    "boundingBox": "937,678,278,60",
                                    "text": "WOULD"
                                }
                            ]
                        },
                        {
                            "boundingBox": "793,750,498,59",
                            "words": [
                                {
                                    "boundingBox": "793,750,498,59",
                                    "text": "LITERALLY"
                                }
                            ]
                        },
                        {
                            "boundingBox": "791,821,390,60",
                            "words": [
                                {
                                    "boundingBox": "791,821,390,60",
                                    "text": "ASTOUND"
                                }
                            ]
                        },
                        {
                            "boundingBox": "795,893,531,63",
                            "words": [
                                {
                                    "boundingBox": "795,893,531,63",
                                    "text": "OURSELVES."
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }];

var athletes = [athlete, athlete2];

const buffer = 15;
const threshold = 0.4;

function find_frames(frames, athletes){
    var athframes = new Array(frames.length);
    var counter = 0;
    for(var i=0; i<frames.length; i++){
        for(var j=0; j<frames[i].body_vision.regions.length; j++){
            var linematch = false;
            for(var k=0; k<frames[i].body_vision.regions[j].lines.length; k++){
                for(var l=0; l<frames[i].body_vision.regions[j].lines[k].words.length-1; l++){
                    for(var m=0; m<athletes.length; m++){
                        if((frames[i].body_vision.regions[j].lines[k].words[l].text + " " + frames[i].body_vision.regions[j].lines[k].words[l+1].text).toUpperCase() == athletes[m].name.toUpperCase()){
                            athframes[i] = athletes[m].name;
                            break;
                        }
                    }
                }
            }
        }

        if(athframes[i] === undefined){
            for(var m=0; m<athletes.length; m++){
                (function(frame,athlete,i,cb){
                    var formData = {
                        file : fs.createReadStream('./images/' + i + '.png')
                    };

                    var options = {
                        url: 'https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false',
                        headers: {
                            'Ocp-Apim-Subscription-Key' : '369a407ac8d74dbcbe95f1462891f819',
                            'content-type' : 'multipart/form-data'
                        },
                        formData : formData,
                        method: 'POST'

                    };

                    var verified = false;
                    function callback(err, response, body){
                        if(err){
                            console.log(err);
                        }
                        console.log(body);

                        request.post({url:'https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false', form:{url:athlete.url}},
                            function(err2, response2, body2){
                                if(err2){
                                    console.log(err2);
                                }
                                request.post({url:'https://westus.api.cognitive.microsoft.com/face/v1.0/verify', form:{faceId1:body.faceId, faceId2:body2.faceId}},
                                    function(err3, response3, body3){
                                        counter++;
                                        if(err3){
                                            console.log(err3);
                                        }
                                        if(body3.confidence>threshold){
                                            verified = true;
                                        }
                                        cb(verified,i);
                                    })
                            })
                    }

                    request(options, callback);


                })(frames[i],athletes[m],i,function(verified,i){
                    athframes[i] = verified;
                    if(counter==athletes.length * frames.length) {
                        start_end(athframes, athletes, frames);
                    }
                });
            }
        }
    }
}

function start_end(athframes, athletes, frames){
    var ath_count = 0;
    var start = 0;
    var start_sec = 0;
    var find_start = true;
    var array = [];
    for(var i = 0; i<athframes.length; i++){
        if(ath_count == athletes.length) break;
        if(athframes[i] === athletes[ath_count].name){
            if(find_start) {
                start = i;
                start_sec = frames[i].frame_second;
                find_start = false;
            }else if(start_sec+buffer < frames[i].frame_second){
                array.push({start: start, end: i});
                find_start = true;
                ath_count++;
            }
        }
    }

    console.log(array);
}

find_frames(frames, athletes);
/*
function image_verify(frame, athlete, cb){
    var formData = {
        file : fs.createReadStream('./images/' + frame.frame_second + '.png')
    };

    var options = {
        url: 'https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false',
        headers: {
            'Ocp-Apim-Subscription-Key' : '5efc050d45394636be4f9920691d180c'
        },
        formData : formData,
        method: 'POST'

    };
    var counter = 0;
    var verified = false;
    function callback(err, response, body){
        if(err){
            console.log(err);
        }

        request.post({url:'https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false', form:{url:athlete.url}},
            function(err2, response2, body2){
                if(err2){
                    console.log(err2);
                }
                request.post({url:'https://westus.api.cognitive.microsoft.com/face/v1.0/verify', form:{faceId1:body.faceId, faceId2:body2.faceId}},
                    function(err3, response3, body3){
                        counter++;
                        if(err3){
                            console.log(err3);
                        }
                        if(body3.confidence>threshold){
                            verified = true;
                        }
                        if(counter==athlete.urls.length-1){
                            cb(verified);
                        }
                    })
            })
    }

    request(options, callback);
}

*/