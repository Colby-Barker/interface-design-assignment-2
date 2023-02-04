//This function changes the styling of the header when the user scrolls
$(document).ready(function () {
    $(function () {
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 75) {
                $(".header").addClass("scrolled-menu");
            } else {
                $(".header").removeClass("scrolled-menu");
            }
        });
    });
});

//This function gives the "show" and "stop" buttons functionality.
window.onload = function() {
    //Variables
    var video = document.getElementById("video");  
    var control = document.getElementById("video-controls");
    var show = document.querySelector(".show");
    var stop = document.querySelector(".stop");
    var music = document.querySelector(".music-vid");

    //Hides the "show" button
    show.classList.add("hide");

    //Variables for the buttons, this time I grab the id name instead of the class name
    var playButton = document.getElementById("show");
    var stopHideButton = document.getElementById("stop");

    //I added an event listener to both buttons, when clicked certian classes will be added or removed

    //Play button
    playButton.addEventListener("click", function() {
      //displays the video in the corner
      video.classList.remove("close");
      //changes the position of the button on the screen
      control.classList.remove("close");
      //hides the "show" button
      show.classList.add("hide");
      //shows the "hide" button
      stop.classList.remove("hide");
      //shows the "Music Video" text
      music.classList.remove("hide");
    });
    stopHideButton.addEventListener("click", function() {
      //pauses the video, this prevents it from playing while it is hidden
      video.pause();
      //hides the video in the corner
      video.classList.add("close");
      //changes the position of the button on the screen
      control.classList.add("close");
      //shows the "show" button
      show.classList.remove("hide");
      //hides the "hide" button
      stop.classList.add("hide");
      //hides the "Music Video" text
      music.classList.add("hide");
      //This was for the function commented below. It would restart the video. This prevents the function below from activating while the video was hidden.
      //video.currentTime = 0;
    });
}




//This function was designed to scroll while the song played, it used the ids of the divs and a timer to do so.
//In the end I didn't like it and decided the website would be better without it.
/*
//variables
var videoElement = document.getElementById("video");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var ten = document.getElementById("ten");

videoElement.addEventListener("timeupdate", function(event) {
    var newTime = videoElement.currentTime;
    document.getElementById("video_counter").innerText = newTime + " seconds played.";
    if (newTime > 17 && newTime < 20){
        one.scrollIntoView({block: "center"});
    }
    if (newTime > 20 && newTime < 80){
        two.scrollIntoView({block: "center"});
    } 
    if (newTime > 80 && newTime < 89.7){
        three.scrollIntoView({block: "center"});
    }
    if (newTime > 89.7 && newTime < 158.35){
        four.scrollIntoView({block: "center"});
    }
    if (newTime > 158.35 && newTime < 168.05){
        five.scrollIntoView({block: "center"});
    }
    if (newTime > 168.05 && newTime < 236.5){
        six.scrollIntoView({block: "center"});
    }
    if (newTime > 236.5 && newTime < 246.35){
        seven.scrollIntoView({block: "center"});
    }
    if (newTime > 246.35 && newTime < 255.75){
        eight.scrollIntoView({block: "center"});
    } 
    if (newTime > 255.75 && newTime < 295.4){
        nine.scrollIntoView({block: "center"});
    } 
    if (newTime > 295.4 && newTime < 315){
        ten.scrollIntoView({block: "center"});
    } 
});
*/