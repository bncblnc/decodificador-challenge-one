const input = document.querySelector(".input-textarea");
const output = document.querySelector(".result-textarea");
const resultOn = document.querySelector(".result-on");
const resultOff = document.querySelector(".result-off");
const inputArea = document.querySelector(".input");
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
  let result = changeText("encrypt");
  if (result != undefined) displayResult(result);
}

function decrypt() {
  let result = changeText("decrypt");
  if (result != undefined) displayResult(result);
}

function copy() {
  if (btnCopy.classList.contains("copy")) return;

  const text = output;
  text.select();
  text.setSelectionRange(0, 99999);
  document.execCommand("copy");

  changeCopy("copied");
  btnPaste.classList.remove("hidden");
}

function paste() {
  input.value = output.value;
  toggleResult();
  btnPaste.classList.add("hidden");
  changeCopy("copy");
}

function clearPaste() {
  if (!btnPaste.classList.contains("hidden")) btnPaste.classList.add("hidden");
}

function changeText(method) {
  if (!checkInvalid()) return;
  clearPaste();
  const text = input.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  let result;
  let originalChars = ["a", "e", "i", "o", "u"];
  let changedChars = ["ai", "enter", "imes", "ober", "ufat"];

  if (method == "encrypt")
    result = text.replace(/(a)|(e)|(i)|(o)|(u)/g, (char) =>
      switchChar(char, originalChars, changedChars)
    );
  if (method == "decrypt")
    result = text.replace(/(ai)|(enter)|(imes)|(ober)|(ufat)/g, (char) =>
      switchChar(char, changedChars, originalChars)
    );
  return result;
}

function displayResult(result) {
  output.textContent = result;
  if (btnCopy.classList.contains("copy")) changeCopy("copy");
  if (!resultOff.classList.contains("hidden")) toggleResult();
}

function changeCopy(condition) {
  if (condition == "copied")
    copyBtnUpdate("btn-secondary", "copied", "✔ Copiado");
  if (condition == "copy") copyBtnUpdate("copied", "btn-secondary", "Copiar");
}

function toggleResult() {
  resultOff.classList.toggle("hidden");
  resultOn.classList.toggle("hidden");
}

function checkInvalid() {
  const text = isEmpty(input.value);

  if (text == "") {
    inputArea.classList.add("invalid");
    input.value = "";
    input.focus();
    return false;
  } else {
    inputArea.classList.remove("invalid");
    return true;
  }
}

function isEmpty(text) {
  return text.replace(/\s/g, "");
}

function switchChar(char, defaultText, newText) {
  switch (char) {
    case defaultText[0]:
      return newText[0];
    case defaultText[1]:
      return newText[1];
    case defaultText[2]:
      return newText[2];
    case defaultText[3]:
      return newText[3];
    case defaultText[4]:
      return newText[4];
  }
}

function copyBtnUpdate(classRemove, classAdd, text) {
  btnCopy.classList.remove(classRemove);
  btnCopy.classList.add(classAdd);
  btnCopy.textContent = text;
}
