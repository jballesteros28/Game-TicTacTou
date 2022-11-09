function getMinutesAndSeconds(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);

    if (minutes < 10)  minutes = `0${ minutes }`;
    
    if (seconds < 10)  seconds = `0${ seconds }`;
    


    return `${minutes}:${seconds}`

}

const video = document.querySelector('video');
const play  = document.getElementById('play');
const pause  = document.getElementById('pause');
const full  = document.getElementById('full');
const volume  = document.getElementById('volume');
const time  = document.getElementById('time');
const pip  = document.getElementById('pip');
const current  = document.getElementById('current');
const duration  = document.getElementById('duration');



video.addEventListener('loadedmetadata', e => {
    duration.textContent = getMinutesAndSeconds(video.duration);
})

play.addEventListener('click', e=> {
    video.play();
});

pause.addEventListener('click', e=> {
    video.pause();
});

full.addEventListener('click', e=> {
    video.requestFullscreen();
});

volume.addEventListener('change', e=> {
    video.volume = volume.value / 100;
});

video.addEventListener('timeupdate', e=> {

    time.value = Math.floor(video.currentTime * 100 / video.duration);

    current.textContent = getMinutesAndSeconds(video.currentTime);
});

time.addEventListener('input', e => {
    video.currentTime = time.value * video.duration / 100
});

pip.addEventListener('click', e=> {
    video.requestPictureInPicture();
    video.style.display = 'none';
});

video.addEventListener('leavepictureinpicture', e => {
    video.style.display = 'block';
})

