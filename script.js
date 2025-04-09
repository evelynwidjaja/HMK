function togglePlay() {
    var video = document.querySelector("#videoperkenalan video");
    var button = document.querySelector(".play-button");

    if (video.paused) {
        video.play();
        button.innerHTML = "⏸";
    } else {
        video.pause();
        button.innerHTML = "▶";
    }
}


