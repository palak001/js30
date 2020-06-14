window.addEventListener('keydown', (e) => {
    console.log(e);
    const playing = document.querySelectorAll(".playing");
    playing.forEach(play => {
        play.classList.remove("playing");
    });
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(audio !== null) {
        audio.currentTime = 0;
        audio.play();
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`).classList.add("playing");
    }

});