$(document).ready(function() {


    //Object holding most important aspects of the game
    var game = {
            //Object that holds and assigns values to elements in the game
            values: {
                wins: 0,
                losses: 0,
                playerScore: 0,
                computerScore: Math.floor(Math.random()*(120 - 19 + 1) + 19),
                getButtonValue: function() {
                    return Math.floor(Math.random() * 12) + 1;
                }
            },

            //Object that holds methods to render game's starting information
            renderScreen: {
                renderWins: function(){
                    var winsDiv = $("<div>");
                    $("#scoreBoard").append(winsDiv);
                    winsDiv.text("Wins: " + game.values.wins);
                },
                renderLosses: function(){
                    var lossesDiv = $("<div>");
                    $("#scoreBoard").append(lossesDiv);
                    lossesDiv.text("Losses: " + game.values.losses);
                },
                renderComputerScore: function(){
                    var computerScoreDiv = $("<div>");
                    $("#computerScore").append(computerScoreDiv);
                    computerScoreDiv.text("Target Score: " + game.values.computerScore);
                },
                renderPlayerScore: function(){
                    var playerScoreDiv = $("<div>");
                    $("#playerScore").append(playerScoreDiv);
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
                    if (this.playerScore === this.computerScore){
                        this.wins++;
                        $("#playerScore").prepend("You win!!");
                        console.log("Player wins");
                    }
                    else if (this.playerScore > this.computerScore){
                        this.losses++;
                        $("#playerScore").prepend("You lose..");
                        console.log("Computer wins");
                    }
                }
            }


    };

    var clickedItem;

    window.onload = function(){
        game.renderScreen.renderWins();
        game.renderScreen.renderLosses();
        game.renderScreen.renderComputerScore();
        game.renderScreen.renderPlayerScore();
        game.gameFunctionality.assignButtonVals();
    }

    $("#buttonHolder").on("click", function(){
        var targetId = (event.target.id);
        console.log(targetId);
    })
})