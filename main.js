var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textBox").innerHTML = ""
    recognition.start()

}

recognition.onresult = function (event) {
    console.log(event);

    content = event.results[0][0].transcript
    document.getElementById("textBox").innerHTML = content
    if (content.includes("selfie")) {
        for (i = 1; i < 4; i++) {

            speak(i)
        }
    }
}
function speak(i) {
    synth = window.speechSynthesis;
    speakData = "taking your selfie in 5 seconds";
    utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis)
    Webcam.attach(camera)
    setTimeout(function () {
        snapShot(i)
        save()
    }, 5000);
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
})
camera = document.getElementById("camera")

function snapShot(i) {
    Webcam.snap(function (data) {
        document.getElementById("result" + i).innerHTML = "<img id='selfie_image' src='" + data + "'>;"
    })
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src
    link.href = image
    link.click()
}