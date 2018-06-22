// Get the video
var video = document.getElementById("liveFootage");

// Get the button
var btn = document.getElementById("myBtn");

// super simple function to Pause and play the video, and change the button text 
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

