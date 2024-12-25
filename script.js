const text =

"¡Feliz Navidad amor!🎄 Que todo lo que llegue a ti sea mejor que lo que buscas✨, dure más de lo que esperas y te haga más feliz de lo que pudiste imaginar❤️. Gracias por coincidir y ser parte de mi vida. Deseo que tu vida se llene de amor❤️, luz y cariño, y que estés siempre feliz. Atentamente: Yo♡🎀. ¡Te amoOOOOOo!"

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ":" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 300 + 300);
  } else {
    return Math.floor(Math.random() * 100 + 50);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();

class musicPlayer {
  constructor() {
      this.play = this.play.bind(this);
      this.playBtn = document.getElementById('play');
      this.playBtn.addEventListener('click', this.play);
      this.controlPanel = document.getElementById('control-panel');
      this.infoBar = document.getElementById('info');
      this.status = false;
  }

  play() {
      var audio = document.getElementById('Music'); 
      let controlPanelObj = this.controlPanel;
      let infoBarObj = this.infoBar;

      Array.from(controlPanelObj.classList).find(function(element){   
          return element !== "active" ? controlPanelObj.classList.add('active') : controlPanelObj.classList.remove('active');       
      });

      Array.from(infoBarObj.classList).find(function(element){
          return element !== "active" ? infoBarObj.classList.add('active') : infoBarObj.classList.remove('active');
      });

      this.status = !this.status;

      if (this.status) {
          audio.play();
          let progressBar = document.getElementById('progress-bar');
          let bar = progressBar.querySelector('.bar');
          let progressInterval = setInterval(() => {
              let audioDuration = audio.duration;
              let audioCurrentTime = audio.currentTime;
              let progressPercentage = (audioCurrentTime / audioDuration) * 100;
              bar.style.width = `${progressPercentage}%`;
              if (audioCurrentTime === audioDuration) {
                  clearInterval(progressInterval);
              }
          }, 1000);
      } else {
          audio.pause();
      }
  }
}

let player = new musicPlayer();
