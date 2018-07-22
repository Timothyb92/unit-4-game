$(document).ready(function() {

    //Object holding most important aspects of the game
    var game = {
            //Object that holds and assigns values to elements in the game
            values: {
                wins: 0,
                losses: 0,
                playerScore: 0,
                computerScore: 0,
                getComputerScore: function() {
                    game.values.computerScore = Math.floor(Math.random()*(120 - 19 + 1) + 19);
                    return game.values.computerScore;
                },
        
                getButtonValue: function() {
                    return Math.floor(Math.random() * 12) + 1;
                }
            },

            //Object that holds methods to render game's starting information
            renderScreen: {
                renderWins: function(){
                    var winsDiv = $("#wins");
                    winsDiv.text("Wins: " + game.values.wins);
                },
                renderLosses: function(){
                    var lossesDiv = $("#losses");
                    lossesDiv.text("Losses: " + game.values.losses);
                },
                renderComputerScore: function(){
                    game.values.getComputerScore();
                    var computerScoreDiv = $("#computerScore");
                    computerScoreDiv.text("Target Score: " + game.values.computerScore);
                },
                renderPlayerScore: function(){
                    var playerScoreDiv = $("#playerScore");
                    playerScoreDiv.text(game.values.playerScore);
                }
            },

            gameFunctionality: {

                //Gives each button a random value (1 through 12)
                assignButtonVals: function(){
                    var initButtonValue = game.values.getButtonValue();
                    $("#earthIcon").attr("value", (initButtonValue));
                    initButtonValue = game.values.getButtonValue();
                    $("#fireIcon").attr("value", (initButtonValue));
                    initButtonValue = game.values.getButtonValue();
                    $("#lightningIcon").attr("value", (initButtonValue));
                    initButtonValue = game.values.getButtonValue();
                    $("#waterIcon").attr("value", (initButtonValue));
                },

                //Checks player score against computer score and adds wins or losses accordingly
                gameOverCheck: function(){
                    if (game.values.playerScore === game.values.computerScore){
                        game.values.wins++;
                        $("#winLossAnnounce").text("You win!!");
                        game.values.playerScore = 0;
                        game.gameFunctionality.assignButtonVals();
                        game.values.getComputerScore();
                        console.log("Player wins");
                    }
                    else if (game.values.playerScore > game.values.computerScore){
                        game.values.losses++;
                        $("#winLossAnnounce").text("You lose..");
                        game.values.playerScore = 0;
                        game.gameFunctionality.assignButtonVals();
                        game.values.getComputerScore();
                        console.log(game.values.playerScore);
                        console.log("Computer wins");
                    }
                }
            }


    };
    window.onload = function(){
        game.renderScreen.renderWins();
        game.renderScreen.renderLosses();
        game.renderScreen.renderComputerScore();
        game.renderScreen.renderPlayerScore();
        game.gameFunctionality.assignButtonVals();
    }

    //Event listener that handles player's clicks and adds point to their score accordingly
    $("#buttonHolder").on("click", function(){
        var targetId = (event.target.id);
        if (targetId == "earthIcon"){
            game.values.playerScore += parseInt($("#earthIcon").attr("value"));
            console.log("Earth value is: " + $("#earthIcon").attr("value"))
        }
        else if (targetId == "fireIcon"){
            game.values.playerScore += parseInt($("#fireIcon").attr("value"));
            console.log("Fire value is: " + $("#fireIcon").attr("value"))
        }
        else if (targetId == "lightningIcon"){
            game.values.playerScore += parseInt($("#lightningIcon").attr("value"));
            console.log("Lightning value is: " + $("#lightningIcon").attr("value"))
        }
        else if (targetId == "waterIcon"){
            game.values.playerScore += parseInt($("#waterIcon").attr("value"));
            console.log("Water value is: " + $("#waterIcon").attr("value"))
        }
        console.log(game.values.playerScore);
        console.log(game.values.computerScore);
        game.gameFunctionality.gameOverCheck();
        game.renderScreen.renderPlayerScore();
        game.renderScreen.renderComputerScore;
        game.renderScreen.renderWins();
        game.renderScreen.renderLosses();
    })
})