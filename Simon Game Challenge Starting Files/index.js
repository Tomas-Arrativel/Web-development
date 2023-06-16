let started = false;

const buttonColours = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];

let level = 0;

document.addEventListener('keypress', function (e) {
  if (!started) {
    if (e.key === 'a') {
      started = true;
      $('h1').text(`Level ${level}`);
      nextSequence();
    }
  }
});

const playSound = (soundName) => {
  var btnAudio = new Audio(`sounds/${soundName}.mp3`);
  btnAudio.play();
};

const animatePress = (curColour) => {
  $(`#${curColour}`).addClass('pressed');
  setTimeout(function () {
    $(`#${curColour}`).removeClass('pressed');
  }, 100);
};

const nextSequence = () => {
  userClickedPattern = [];

  let randomNumber = Math.trunc(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  level++;
  $('h1').text(`Level ${level}`);

  gamePattern.push(randomChosenColour);

  setTimeout(() => {
    $(`#${randomChosenColour}`).fadeOut(200).fadeIn(200);
    playSound(randomChosenColour);
  }, 1000);
};

const checkAnswer = function (currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    $('body').addClass('game-over');
    let sound = new Audio('sounds/wrong.mp3');
    sound.play();
    $('h1').text('Game Over, Press A Key to Restart');
    setTimeout(() => {
      $('body').removeClass('game-over');
    }, 200);
    level = 0;
    gamePattern = [];
    started = false;
  }
};

//Click handler

$('.btn').click(function (e) {
  if (started) {
    const userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
  }
});
