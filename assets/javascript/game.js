
// crew array
var crew = ["Picard", "Riker", "Data", "Worf", "Geordi", "Troi", "Crusher", "Wesley", "Guinan"];
var winPicture = ["assets/images/picard.jpg", "assets/images/riker.jpg", "assets/images/data.jpg", "assets/images/worf.jpg", "assets/images/geordi.jpg", "assets/images/troi.jpg", "assets/images/crusher.jpg", "assets/images/wesley.jpg", "assets/images/guinan.jpg"];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var wins = 0;
var losses = 0;
// on key press, select one at random
document.getElementById("engage").onclick = function crewSelect() {
    // reset everything, disable button, and select random puzzle answer
    document.getElementById("engage").disabled = true;
    var guessed = [];
    var hullIntegrity = 10;
    var arrayPosition = Math.floor(Math.random() * crew.length);
    var crewMember = crew[arrayPosition];
    console.log(crewMember);
    document.getElementById('picture').src="assets/images/enterprise.jpg";
    document.getElementById("wins").innerHTML = "wins: ";
    document.getElementById("losses").innerHTML = "losses: ";
    document.getElementById("integrity").innerHTML = "Hull Integrity: 0%";
        // replace title in "wordContainer" div with div blanks for letters
    for (var i=0; i< crewMember.length; i++) {
        var insignia = document.createElement("img");
            insignia.setAttribute("src", "assets/images/insignia.png");
            insignia.setAttribute("alt", "?");
            insignia.setAttribute("class", "letterContainer");
            insignia.setAttribute("id", "letterContainer[" + i + "]");
            document.getElementById("wordContainer").appendChild(insignia);
    }




}

