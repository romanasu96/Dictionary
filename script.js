let dictionary = [];
let message = document.getElementById('message');
function saveWord() {
    let word = document.getElementById("word").value;
    dictionary.push(word);
    document.getElementById("word").value = "";
    message.innerHTML = 'The word has been saved in the dictionary.';
}

function searchWord() {
    let word = document.getElementById("word").value;
    if(dictionary.includes(word)) {
        document.getElementById("message").innerHTML = "The word " + word + " is in the dictionary.";
    } else {
        document.getElementById("message").innerHTML = "The word " + word + " is not in the dictionary.";
    }
    document.getElementById("word").value = "";
}
