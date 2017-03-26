var fs = require('fs');
var ytdl = require('ytdl-core');
var ffmpeg = require('fluent-ffmpeg');
var props = require('./properties');
var request = require('request');


/*
ytdl('https://www.youtube.com/watch?v=ke0iusvydl8',
    { quality: 22})
    .pipe(fs.createWriteStream('video.mp4'));
*/

function generateTimeInterval(){
    var arr = [];
    for(var i = props.startSeconds; i <= props.maxSeconds; i += props.interval){
        arr.push(i);
    }
    console.log(arr);
    return arr;
}

function grabFrames(link){
    ffmpeg(ytdl(link, { quality: 18}))
        .screenshots({
            timestamps: generateTimeInterval(),
            filename: '%s.png',
            folder: './images/'// + link.substr(link.length - 5)
        })
        .on('end', function(stdout, stderr){
            processFrames();
        });
}


function processFrames(){
    var startListFrame = -1;
    var relevantFrames = [];
    var numFrames = Math.floor((props.maxSeconds - props.startSeconds) / props.interval);
    var counter = 0;
    for(var i = props.startSeconds; i <= props.maxSeconds; i += props.interval){
        var formData = {
            file : fs.createReadStream('./images/' + i + '.png')
        };

        var options = {
            url: 'https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr?language=unk&detectOrientation=false',
            headers: {
                'Ocp-Apim-Subscription-Key' : '5efc050d45394636be4f9920691d180c'
            },
            formData : formData,
            method: 'POST'

        };

        function callback(err, response, body){
            if(err) {
                console.log(err);
            }
            else{
                counter++;
                if(imageContains(body)){
                    releventFrames.push({
                        'frame' : i,
                        'body' : body
                    });
                }
                if(imageFindWord(body, 'start')) {
                    console.log("found start frame at: " + i + " putting it at counter: " + counter);
                    startListFrame = counter;
                }
                if(counter == numFrames){
                    if(startListFrame == -1){
                        console.log('could not find a start list frame');
                    }
                    //var athleteNames = getAthleteNames(startListFrame);
                }
            }
        }
        request(options, callback);
    }
}

function imageFindWord(body, query){
    for(var i = 0; i < body['regions'].length; i++){
        for(var j = 0; j < body['regions'][i]['lines'].length; j++){
            for(var k = 0; k < body['regions'][i]['lines'][j]['words'].length; k++){
                if(body['regions'][i]['lines'][j]['words'][k].text.toUpperCase() === query.toUpperCase()){
                    return true;
                }
            }
        }
    }
    return false;
}

function imageContains(body){
    if(body['regions'].length == 0){
        return false;
    }
    return true;
}

grabFrames('https://www.youtube.com/watch?v=VZvoufQy8qc');