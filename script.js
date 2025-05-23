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

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });




