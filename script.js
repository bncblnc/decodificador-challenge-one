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

  let result = text.replace(/(a)|(e)|(i)|(o)|(u)/g, (char) => {
    switch (char) {
      case "a":
        return "ai";
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "o":
        return "ober";
      case "u":
        return "ufat";
    }
  });

  displayResult(result);
}

function decrypt() {
  const text = input.value;

  let result = text.replace(/(ai)|(enter)|(imes)|(ober)|(ufat)/g, (char) => {
    switch (char) {
      case "ai":
        return "a";
      case "enter":
        return "e";
      case "imes":
        return "i";
      case "ober":
        return "o";
      case "ufat":
        return "u";
    }
  });
  displayResult(result);
}

function copy() {
  const text = output;

  console.log(text);
  text.select();
  text.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

function displayResult(result) {
  resultOff.style.display = "none";
  output.textContent = result;
  resultOn.style.display = "inherit";
}
