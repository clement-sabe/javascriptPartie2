document.getElementById("input").onkeypress = recupValeur;

function recupValeur() {
    var text = document.getElementById("input").value;
    alert(text);
}