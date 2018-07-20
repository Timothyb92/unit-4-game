var computerNumber = function() {
    var randomNumber = Math.floor(Math.random()* 120) + 19;
    if ((randomNumber >= 19) && (randomNumber <= 120)){
        return randomNumber;
    }
    else {
        computerNumber();
    }
}