var easyimg = require('easyimage');

function getAthleteNames(frames, startListFrame){
    var frame = frames[startListFrame];
    var leftX = (frame['regions'][0].boundingBox.split(','))[0];
    var leftY = (frame['regions'][0].boundingBox.split(','))[1];

    var regions = frame['regions'];
    var rightX = leftX;
    var rightY = leftY;
    for(var i = 0; i < regions.length; i++){
        var valx = regions[i].boundingBox.split(',')[2];
        var valy = regions[i].boundingBox.split(',')[3];

        if(valx >= rightX){
            rightX = valx;
            rightY = valy;
        }
    }

    easyimg.crop({
        src
    })
}