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

document.getElementById("videoThumbnail").addEventListener("click", function() {
    let video = document.getElementById("myVideo");
    this.style.display = "none"; // Hide thumbnail
    video.play();
});

