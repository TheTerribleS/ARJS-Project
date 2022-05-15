const audio = new Audio('music.mp3');
audio.loop = true;

window.addEventListener("markerFound", (event) => 
{
    audio.currentTime = 0;
    audio.play();
})

window.addEventListener("markerLost", (event) => 
{
    audio.pause()
})