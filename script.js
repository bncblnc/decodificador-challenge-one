const input = document.querySelector(".input-textarea");
const output = document.querySelector(".result-textarea");
const resultOn = document.querySelector(".result-on");
const resultOff = document.querySelector(".result-off");
const btnEncrypt = document.getElementById("encrypt");
const btnDecrypt = document.getElementById("decrypt");
const btnCopy = document.getElementById("copy");

btnEncrypt.addEventListener("click", encrypt);
btnDecrypt.addEventListener("click", decrypt);
btnCopy.addEventListener("click", copy);

function encrypt() {
  const text = input.value;

  displayResult();
  //e = enter / i = imes / a = ai / o = ober / u = ufat
}

function decrypt() {
  const result = input.value;

  displayResult();

  //e = enter / i = imes / a = ai / o = ober / u = ufat
}

function copy() {
  const text = output;

  console.log(text);
  text.select();
  text.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

function displayResult() {
  resultOff.style.display = "none";
  resultOn.style.display = "inherit";
}
