//Created an objects to store the cards
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png",
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
  },
];
//created another array to store the cards that are in play
var cardsInPlay = [];

//created a function to check for a match
var checkForMatch = function() {
  //check t see if two cards match and provide feedback to user
  if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");
}
}

//created a function to repeate a user flipping card
var flipCard = function (cardId) {
  //dislay the card the user just flipped
console.log("User flipped" + cards[cardId].rank);

//add card to array of cards that is in play
cardsInPlay.push(cards[cardId].rank);

//dispaly path to image in the console
console.log(cards[cardId].cardImage)
//display the suit in the console
console.log(cards[cardId].suit)

  //check to see if two cards were played
  if (cardsInPlay.length === 2) {
    //is so, call the checkForMatch function
    checkForMatch();
    //empty cards in play array for next try
    cardsInPlay = [];
  }
};
//for now, we are manually calling the flipCard function
//to represent a users play
//call the flipCard function, passing in an index as the argument
flipCard(0);
//call the flipCard function, as well.
flipCard(2);
