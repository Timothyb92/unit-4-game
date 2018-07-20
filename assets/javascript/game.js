var computerNumber = function() {
    var randomNumber = Math.floor(Math.random()* 120) + 19;
    if ((randomNumber >= 19) && (randomNumber <= 120)){
        return randomNumber;
    }
    else {
        computerNumber();
    }
}

// $("#computerNumber").on("click", computerNumber());
// $("#computerNumber").on("click", function(){
//     $("#computerNumber").append(computerNumber);
// });

$("#computerNumber").on("click", function(){
    $("this").text("This click worked");
})