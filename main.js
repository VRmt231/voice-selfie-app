var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function Start(){
document.getElementById("textbox").innerHTML = ""
recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if(Content == "take my selfie"){
      speak();
    }
    setTimeout(function(){
     take_snapshot();
     save();
    },5000)
} 
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterThis);
    Webcam.attach(camera)
    
}
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality : 90
})
camera = document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="snapshot" src="'+data_uri+'">';
    });
}
function save(){
    link = document.getElementById("link");
image = document.getElementById("snapshot").src;
link.href = image;  
link.click();                                                                                                                                                                                                                                                                                                                                               
}