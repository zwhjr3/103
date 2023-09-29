Webcam.set({ 
    width:350,
height:300,
img_format : 'png',
png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach( '#camera' );
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VCEr9gkIo/model.json',modelLoaded);

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src"'+data_uri+'"/>';
    });
    console.log(snapshot);

}

function modelLoaded() {
    console.log("model loaded");
}