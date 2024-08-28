const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const outputImage = document.getElementById("outputImage");
const copyButton = document.getElementById("copyButton");
const notification = document.getElementById("notification");

function encryptText() {
    if (inputText.value.trim() === "") return "";
    const encryptedText = inputText.value
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}

function decryptText() {
    if (inputText.value.trim() === "") return "";
    const decryptedText = inputText.value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return decryptedText;
}

function handleEncrypt() {
    const encrypted = encryptText();
    outputText.value = encrypted;
    outputImage.style.display = "none";
}

function handleDecrypt() {
    const decrypted = decryptText();
    outputText.value = decrypted;
}

function clearFields() {
    inputText.value = "";
    outputText.value = "";
    outputImage.style.display = "";
}

function copyText() {
    navigator.clipboard.writeText(outputText.value);
    notification.style.display = "block"; // Muestra la notificación
    setTimeout(() => {
        notification.style.display = "none"; // Oculta la notificación después de 2 segundos
    }, 2000);
}
