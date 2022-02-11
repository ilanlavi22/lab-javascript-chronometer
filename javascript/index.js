const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerText = "Stop".toUpperCase();
}

function setSplitBtn() {
  btnRightElement.className = 'btn split';
  btnRightElement.innerText = "Split".toUpperCase();
}

function setStartBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerText = "Start".toUpperCase();
}

function setResetBtn() {
  btnRightElement.className = 'btn reset';
  btnRightElement.innerText = "Rest".toUpperCase();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
    printMinutes();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
