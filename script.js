const encryptBtn = document.querySelector(".encrypt");
const decryptBtn = document.querySelector(".decrypt");
const inputText = document.querySelector(".input-text");
const outputText = document.querySelector(".output-text");
const copyBtn = document.querySelector(".copy");

function encryptText(text) {
  let encryptedText = text;
  encryptedText = encryptedText.replaceAll("i", "imes");
  encryptedText = encryptedText.replaceAll("a", "ai");
  encryptedText = encryptedText.replaceAll("e", "enter");
  encryptedText = encryptedText.replaceAll("o", "ober");
  encryptedText = encryptedText.replaceAll("u", "ufat");
  return encryptedText;
}

function decryptText(text) {
  let decryptedText = text;
  decryptedText = decryptedText.replaceAll("imes", "i");
  decryptedText = decryptedText.replaceAll("ai", "a");
  decryptedText = decryptedText.replaceAll("enter", "e");
  decryptedText = decryptedText.replaceAll("ober", "o");
  decryptedText = decryptedText.replaceAll("ufat", "u");
  return decryptedText;
}

encryptBtn.addEventListener("click", () => {
  outputText.value = encryptText(inputText.value);
  inputText.value = "";
  document.querySelector(".show").classList.add("no-show");
});

decryptBtn.addEventListener("click", () => {
  inputText.value = decryptText(outputText.value);
  outputText.value = "";
  document.querySelector(".show").classList.add("no-show");
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(outputText.value);
});
