
// crew array
var crew = ["PICARD", "RIKER", "DATA", "WORF", "GEORDI", "TROI", "CRUSHER", "WESLEY", "GUINAN"];
var winPicture = ["assets/images/picard.jpg", "assets/images/riker.jpg", "assets/images/data.jpg", "assets/images/worf.jpg", "assets/images/geordi.jpg", "assets/images/troi.jpg", "assets/images/crusher.jpg", "assets/images/wesley.jpg", "assets/images/guinan.jpg"];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var wins = 0;
var losses = 0;
var hullIntegrity = 10;
// on key press, select one at random
document.getElementById("engage").onclick = function crewSelect() {
    // reset everything, disable button, and select random puzzle answer
    
    document.getElementById("engage").disabled = true;
    var hullIntegrity = 10;
    var guessed = [];
    var arrayPosition = Math.floor(Math.random() * crew.length);
    var crewMember = crew[arrayPosition];
    var counterToVictory = 0;
    console.log(crewMember);
    var programComplete = document.getElementById("beginsound");
    programComplete.play();
    // display wins, losses, and hull left
    var winLoss = 
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>"
    console.log(hullIntegrity);
    var status =
        "<p>Hull Integrity: " + hullIntegrity + "0%</p>"
    document.getElementById('picture').src="assets/images/enterprise.jpg";
    document.getElementById("statusdisplay").innerHTML = status;
    document.getElementById("record").innerHTML = winLoss;
    var clearOut = " ";
    document.getElementById("wordContainer").innerHTML = clearOut;
    document.getElementById("guessed").innerHTML = clearOut;
        // replace title in "wordContainer" div with div blanks for letters
    for (var i=0; i< crewMember.length; i++) {
        var insignia = document.createElement("div");
            insignia.setAttribute("class", "letterContainer");
            insignia.setAttribute("id", "letterContainer[" + i + "]");
            document.getElementById("wordContainer").appendChild(insignia);
        var starfleet =
            "<img src='assets/images/insignia.png' alt='?' class='letterContainer'>"
            document.getElementById("letterContainer[" + i + "]").innerHTML = starfleet
        

    }

    document.onkeyup = function(event) {
        var guess = event.key.toUpperCase();
        var rightGuess = false;
        console.log(alphabet.indexOf(guess));
        if (alphabet.indexOf(guess) == -1 || guessed.indexOf(guess) !=-1) {
            var noletterforyou = document.getElementById("notLettersound");
            noletterforyou.play();
            alert("Please press a LETTER key that you have NOT guessed yet.");
                                    
        }
        else {
            for (var j = 0; j < crewMember.length; j++) {
                if (crewMember[j] === guess) {
                    var validLetter = "<p>" + guess + "</p>";
                    document.getElementById("letterContainer[" + j + "]").innerHTML = validLetter;
                    counterToVictory++
                    console.log(counterToVictory);
                    rightGuess = true;
                }
            }
            guessed.push(guess);
            var deadLetterList = document.getElementById("guessed");
            var deadLetter = document.createTextNode(" " + guess + " ");
            deadLetterList.appendChild(deadLetter);
            
            if (counterToVictory === crewMember.length) {
                var youWin = document.getElementById("youwinsound");
                youWin.play();
                document.getElementById("picture").src = winPicture[arrayPosition];
                wins++
                var again = "RE-ENGAGE?";
                document.getElementById("engage").innerHTML = again;
                // may need to put this in separate reset later in code
                document.getElementById("engage").disabled = false;
                document.getElementById("record").innerHTML = winLoss;
                hullIntegrity = 10;
                document.getElementById("statusdisplay").innerHTML = status;
                }
            else if (rightGuess) {
                var correctSound = document.getElementById("rightsound");
                correctSound.play();
                }
            else {
                
                hullIntegrity--;
                var status =
                "<p>Hull Integrity: " + hullIntegrity + "0%</p>"
                document.getElementById("statusdisplay").innerHTML = status;
                console.log(hullIntegrity);                
                console.log(guessed);
                
                if (hullIntegrity === 0) {
                    var gameOver = document.getElementById("gameoversound");
                    gameOver.play();
                    document.getElementById("picture").src = "assets/images/game-over.jpg";
                    document.getElementById("engage").disabled = false;
                    losses++;
                    var warpcorebreach = "WARP CORE BREACH!";
                    document.getElementById("wordContainer").innerHTML = warpcorebreach;
                    var again = "RE-ENGAGE?";
                    document.getElementById("engage").innerHTML = again;
                }

                else if (hullIntegrity > 3) {
                    var wrongGuess = document.getElementById("wrongsound");
                    wrongGuess.play();
                }
                
                else if (hullIntegrity < 4) {
                    var danger = document.getElementById("dangersound");
                    danger.play();
                }
            
                        
                    }
        }
      };



}

