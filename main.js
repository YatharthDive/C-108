Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
prediction1 = "";
prediction2 = "";
camera = document.getElementById("camera");
Webcam.attach("#camera");

function takesnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Hyw5zdGnP/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
    
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data1 = "The first Prediction is " + prediction1;
    speak_data2 = "The scecond Prediction is " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis);
}
function check() {
    img = document.getElementById("capture_image");
    classifier.classify(img, gotresult);
}

function gotresult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        if (results[0].label == "Nice") {
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        if (results[0].label == "Thumbs Up") {
            document.getElementById("update_emoji").innerHTML = " &#128077;";
        }
        if (results[0].label == "Clap") {
            document.getElementById("update_emoji").innerHTML = "&#128079;";
        }
        if (results[0].label == "Thumbs Down") {
            document.getElementById("update_emoji").innerHTML = "&#128078;";
        }
        if (results[0].label == "YO") {
            document.getElementById("update_emoji").innerHTML = "&#129311;";
        }
        if (results[0].label == "Peace") {
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }

        if (results[1].label == "Nice") {
            document.getElementById("update_emoji2").innerHTML = "&#128076;";
        }
        if (results[1].label == "Thumbs Up") {
            document.getElementById("update_emoji2").innerHTML = " &#128077;";
        }
        if (results[1].label == "Clap") {
            document.getElementById("update_emoji2").innerHTML = "&#128079;";
        }
        if (results[1].label == "Thumbs Down") {
            document.getElementById("update_emoji2").innerHTML = "&#128078;";
        }
        if (results[1].label == "YO") {
            document.getElementById("update_emoji2").innerHTML = "&#129311;";
        }
        if (results[1].label == "Peace") {
            document.getElementById("update_emoji2").innerHTML = "&#9996;";
        }
    }
}