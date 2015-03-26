// Put event listeners into place
window.addEventListener("DOMContentLoaded", function() {
    var localMediaStream;
    // Grab elements, create settings, etc.
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        video = document.getElementById("video"),
        videoObj = {
            "video": true
        },
        errBack = function(error) {
            console.log("Video capture error: ", error.code);
        };

    // Trigger photo take
    document.getElementById("snap").addEventListener("click", function() {
        context.drawImage(video, 0, 0, 640, 480);
        var image = new Image();
        //image.src = canvas.toDataURL("image/png");
        //console.log(image);
        document.getElementById('converted-image').src = canvas.toDataURL("image/png");
        canvas.style.display = "none";
        return image;
    });

    document.getElementById("stop").addEventListener("click", function() {
        video.pause();
        video.src = null;
        localMediaStream.stop();
    });

    document.getElementById("start").addEventListener("click", function() {
        //video.play();
        alert("will be implemented soon");
    });


    document.getElementById("filter").addEventListener("click", function() {
        document.getElementById('value').value = document.getElementById('converted-image').src;
        document.myform.submit();
    });
    // Put video listeners into place
    if (navigator.getUserMedia) { // Standard
        navigator.getUserMedia(videoObj, function(stream) {
            video.src = stream;
            video.play();
            localMediaStream = stream;
        }, errBack);
    } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
        navigator.webkitGetUserMedia(videoObj, function(stream) {
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
            localMediaStream = stream;
        }, errBack);
    } else if (navigator.mozGetUserMedia) { // Firefox-prefixed
        navigator.mozGetUserMedia(videoObj, function(stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
            localMediaStream = stream;
        }, errBack);
    }
}, false);