const playlistContainerTag = document.getElementsByClassName("playlistContainer")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];
const currentAndTotleTimeTag = document.getElementsByClassName("currentAndTotleTime")[0];
const tracks = [
    { trackID: "Music/living life in the night by CAPRI VALENTINO-.mp3", title: "Living life in the night"},
    { trackID: "Music/rasputin by yutamakis.mp3", title:"Rasputin"},
    { trackID: "Music/My Head Is Spinning Like A Screw.mp3", title:"My Head Is Spinning Like A Screw"},
    { trackID: "Music/neon.mp3", title:"Neon Blade X TikTok Remix X Speed Up by BoBo"}
];

for (let i = 0; i < tracks.length; i++) {
    const trackTag = document.createElement("div");
    trackTag.addEventListener("click", () => {
        const trackID = tracks[i].trackID;
        audioTag.src = trackID;
        audioTag.play();
    });
    trackTag.classList.add("trackItem");
    const title = (i + 1).toString() + ". " + tracks[i].title;
    trackTag.textContent = title;
    playlistContainerTag.append(trackTag);
}
    let duration =0;
    let durationText = "00:00";
audioTag.addEventListener("loadeddata",() => {
    // console.log("Current track duration: ", audioTag.duration); 
     duration = Math.floor(audioTag.duration);
    // const minutes = Math.floor(duration / 60);
    // const seconds = duration % 60;

    // const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    // const secondText = seconds < 10 ? "0" +seconds.toString() : seconds;
    //     console.log(minuteText + ":" + secondText);
    // console.log("Total duration ",createMinuteAndSecondText(duration));
    durationText = createMinuteAndSecondText(duration);
});

audioTag.addEventListener("timeupdate", () => {
    // console.log("Current played time: ",audioTag.currentTime);
    const currentTime = Math.floor(audioTag.currentTime);
    // const minutes = Math.floor(duration / 60);
    // const seconds = duration % 60;

    // const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    // const secondText = seconds < 10 ? "0" +seconds.toString() : seconds;
    // console.log("Played time: ",createMinuteAndSecondText(currentTime));
    const currentTimeText = createMinuteAndSecondText(currentTime); 
    const currentTimeTextAndDurationText = currentTimeText + " /" + durationText;
    currentAndTotleTimeTag.textContent = currentTimeTextAndDurationText;
    // console.log(
    //     "currentTimeTextAndDurationText: ",
    //     currentTimeTextAndDurationText
    // );
    updateCurrentProgress(currentTime);
});

const updateCurrentProgress = (currentTime) => {
    
}
const createMinuteAndSecondText = (totalSecond) =>{
    const minutes = Math.floor(totalSecond / 60);
    const seconds = totalSecond % 60;

    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const secondText = seconds < 10 ? "0" +seconds.toString() : seconds;
    return minuteText + ":" + secondText;
}

