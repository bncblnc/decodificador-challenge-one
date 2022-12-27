const input = document.querySelector(".input-textarea");
const output = document.querySelector(".result-textarea");
const resultOn = document.querySelector(".result-on");
const resultOff = document.querySelector(".result-off");
const btnEncrypt = document.getElementById("encrypt");
const btnDecrypt = document.getElementById("decrypt");
const btnCopy = document.getElementById("copy");
const btnPaste = document.getElementById("paste");

btnEncrypt.addEventListener("click", encrypt);
btnDecrypt.addEventListener("click", decrypt);
btnCopy.addEventListener("click", copy);
btnPaste.addEventListener("click", paste);
input.addEventListener("keypress", clearPaste);

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
  if (btnCopy.classList.contains("copy")) return;
  // input.value = "";

  const text = output;
  text.select();
  text.setSelectionRange(0, 99999);
  document.execCommand("copy");

  btnCopy.classList.remove("btn-secondary");
  btnCopy.classList.add("copy");
  btnCopy.textContent = "✔ Copiado";

  btnPaste.classList.remove("hidden");
}

function displayResult(result) {
  output.textContent = result;

  if (btnCopy.classList.contains("copy")) {
    btnCopy.classList.remove("copy");
    btnCopy.classList.add("btn-secondary");
    btnCopy.textContent = "Copiar";
  }

  if (!resultOff.classList.contains("hidden")) {
    resultOff.classList.toggle("hidden");
    resultOn.classList.toggle("hidden");
  }
}

function clearPaste() {
  if (!btnPaste.classList.contains("hidden")) btnPaste.classList.add("hidden");
}

function paste() {
  input.value = output.value;

  resultOff.classList.toggle("hidden");
  resultOn.classList.toggle("hidden");
  btnPaste.classList.add("hidden");
}
