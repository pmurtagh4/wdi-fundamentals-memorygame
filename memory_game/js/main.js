
//Created an array to store the cards
var cards = ["queen", "queen", "king", "king"];
//created another array to store the cards that are in play
var cardsInPlay = [];

//created a function to check for a match
var checkForMatch = function() {
  //check t see if two cards match and provide feedback to user
  if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}

//created a function to repeate a user flipping card
var flipCard = function (cardId) {
  //dislay the card the user just flipped
console.log("User flipped" + cards[cardId]);
//add card to array of cards that is in play
cardsInPlay.push(cards[cardId]);
  //check to see if two cards were played
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
};
//for now, we are manually calling the flipCard function
//to represent a users play
//call the flipCard function, passing in an index as the argument
flipCard(0);
//call the flipCard function, as well.
flipCard(2);
