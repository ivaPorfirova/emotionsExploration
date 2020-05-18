//rough code on js functionality
const player = audioPlayer.getElementById("player");
  player.addEventListener("load", function () {
      
  });

  const audioPlayer = document.getElementById('player')
  const imgSource = audioPlayer.querySelector('source')

  console.log(imgSource)

  const img = "./media/trippy.gif"

  // let currAudio = 0

  loadImg(() => {
    audioPlayer.play();
    imgSource.setAttribute("src", "./media/oneness.mp3")
    imgSource.load();
})
