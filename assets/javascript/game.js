var game = {
        values: {
            wins: 0,
            losses: 0,
            playerScore: 0,
            computerScore: Math.floor(Math.random()*(120 - 19 + 1) + 19),
            // getComputerScore :function() {
            //     return Math.floor(Math.random()*(120 - 19 + 1) + 19);
            // },
            getButtonValue: function() {
                return Math.floor(Math.random() * 12) + 1;
            }
        },

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
            }
        }

};