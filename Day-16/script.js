
function toTitleCase(str) {
    return str
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(" ");
}
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
function secretMessage(str) {
    let bannedWords = ["secret", "confidential", "private"];

    return str
        .split(" ")
        .map(word =>
            bannedWords.includes(word.toLowerCase()) ? "***" : word
        )
        .join(" ");
}
function handleTitleCase() {
    let text = document.getElementById("textInput").value;
    document.getElementById("output").innerHTML =
        "Title Case: " + toTitleCase(text);
}

function handleVowelCount() {
    let text = document.getElementById("textInput").value;
    document.getElementById("output").innerHTML =
        "Vowel Count: " + countVowels(text);
}

function handleSecretMessage() {
    let text = document.getElementById("textInput").value;
    document.getElementById("output").innerHTML =
        "Secret Message: " + secretMessage(text);
}