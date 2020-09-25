var rangeA = null;
var rangeB = null;
var rangeC = null;
var inputA = null;
var inputB = null;
var inputC = null;

function start() {
  mapInputs();
  addEvents();
  calculate();
}

function mapInputs() {
  rangeA = document.querySelector('#rangeA');
  rangeB = document.querySelector('#rangeB');
  rangeC = document.querySelector('#rangeC');
  inputA = document.querySelector('#inputA');
  inputB = document.querySelector('#inputB');
  inputC = document.querySelector('#inputC');
}

function addEvents() {
  rangeA.addEventListener('input', handleInputAChange);
  rangeB.addEventListener('input', handleInputBChange);
  rangeC.addEventListener('input', handleInputCChange);
}

function handleInputAChange(event) {
  inputA.value = event.target.value;
  changeColor();
}

function handleInputBChange(event) {
  inputB.value = event.target.value;
  changeColor();
}

function handleInputCChange(event) {
  inputC.value = event.target.value;
  changeColor();
}

function changeColor() {
  r = rangeA.value;
  g = rangeB.value;
  b = rangeC.value;
  divColor = document.querySelector('.color');
  divColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

start();
