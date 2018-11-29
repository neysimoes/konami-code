// https://www.myinstants.com/media/sounds/turn-down-for-what.mp3

function Konami(callback) {
  const pattern = "38384040373937396665";
  let input = "";
  let _keydownHandler = (e) => {
    input += e.keyCode;
    if (input.length > pattern.length) {
      input = input.substr((input.length - pattern.length));
    }
    if (input === pattern) {
      callback();
      input = '';
      e.preventDefault();
      return false;
    }
  };
  
  document.addEventListener("keydown", _keydownHandler, false);
};

let playTurnDownForWhat = () => {
  let audio = document.getElementById('turnDownForWhat');
  if (!audio) {
    let body = document.getElementsByTagName('body')[0];
    audio = document.createElement('audio');
    audio.volume = 1;
    audio.id = 'turnDownForWhat';
    audio.setAttribute('src', 'https://www.myinstants.com/media/sounds/turn-down-for-what.mp3');
    body.append(audio);
  }
  
  audio.play();
}

Konami(playTurnDownForWhat);
