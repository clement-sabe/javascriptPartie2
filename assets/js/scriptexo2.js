document.getElementById("input").onkeyup = recupValeur;

function recupValeur() {
    var text = document.getElementById("input").value;
    alert(text);
}