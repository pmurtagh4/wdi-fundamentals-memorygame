
//Created an array to store the cards
var cards = ["queen", "queen", "king", "king"];
//created another array to store the cards that are in play
var cardsInPlay = [];
//created a variable cardOne to display the first card user flipped
var cardOne = cards[0];
//added cardOne to array of cards that are in play
cardsInPlay.push(cardOne);
//used console.log() to display the card the user flipped
console.log("User flipped" + " " + cardOne);

//created a second variable for cardTwo to represent the card the suer flipped
var cardTwo = cards[2];
//added card to array of cards that in play
cardsInPlay.push(cardTwo);
//used console.log() to display the card that the user flipped
console.log("User flipped" + " " + cardTwo);
//check to see if two cards were played
if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match");
  }
  else {
    alert("Sorry, try again.");
  }
}
