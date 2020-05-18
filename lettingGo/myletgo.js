const videoPlayer = document.getElementById('video-player')
const videoSource = videoPlayer.querySelector('source')

console.log(videoSource)

const listOfVids = [
  "./media/Chess_06_Videvo.mp4",
  "./media/Chess_03_Videvo.mp4",
  "./media/Chess_16_Videvo.mp4",
  "./media/Dense_fog_ahead_of_Forest.mp4",
  "./media/hd0970.mp4",
  "./media/hd1992.mp4",
  "./media/171124_C1_HD_012.mp4",
  "./media/hd0936.mp4",
  "./media/DSCN0569rain.mp4",
  "./media/Raindrops_Videvo.mp4",
  "./media/Dewdrops_1.mp4",
  "./media/JP_Park_Sakura_E_20180330.mp4"
]

let currVideo = 0

setInterval(() => {
  videoPlayer.pause();
  currVideo = (++currVideo) % listOfVids.length;
  videoSource.setAttribute("src", listOfVids[currVideo])
  videoPlayer.load();
  videoPlayer.play();

  console.log('ready')

}, 12000)
