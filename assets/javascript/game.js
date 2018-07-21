//Object holding most important aspects of the game
var game = {
        //Object that holds and assigns values to elements in the game
        values: {
            wins: 0,
            losses: 0,
            playerScore: 0,
            computerScore: Math.floor(Math.random()*(120 - 19 + 1) + 19),
            // getComputerScore :function() {
            //     return Math.floor(Math.random()*(120 - 19 + 1) + 19);
            // },

            // buttonValue: Math.floor(Math.random() * 12) + 1,
            getButtonValue: function() {
                return Math.floor(Math.random() * 12) + 1;
            }
        },
        
        //Object that assigns each button in HTML to a property to be targeted when the player interacts with themn
        // elementButtons: {
        //     earthIcon: $("#earthIcon"),
        //     fireIcon: $("#fireIcon"),
        //     lightningIcon: $("#lightningIcon"),
        //     waterIcon: $("#waterIcon"),

        // },

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
            },
            assignButtonVals: function(){
                var initButtonValue = game.values.getButtonValue();
                $("#earthIcon").attr("value", (initButtonValue));
                initButtonValue = game.values.getButtonValue();
                $("#fireIcon").attr("value", (initButtonValue));
                initButtonValue = game.values.getButtonValue();
                $("#lightningIcon").attr("value", (initButtonValue));
                initButtonValue = game.values.getButtonValue();
                $("#waterIcon").attr("value", (initButtonValue));
            }
        }


};

window.onload = function(){
    game.renderScreen.renderWins();
    game.renderScreen.renderLosses();
    game.renderScreen.renderComputerScore();
    game.renderScreen.renderPlayerScore();
    game.renderScreen.assignButtonVals();
}