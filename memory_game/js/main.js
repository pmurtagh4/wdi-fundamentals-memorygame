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
};

//created a function to repeate a user flipping card
var flipCard = function () {
  //get the data-id of the card that was just flipped
   cardId = this.getAttribute('data-id');



  //dislay the card the user just flipped


//add card to array of cards that is in play
cardsInPlay.push(cards[cardId].rank);


//displat the cards image
this.setAttribute('src', cards[cardId].cardImage);

  //check to see if two cards were played
  if (cardsInPlay.length === 2) {
    //is so, call the checkForMatch function
    checkForMatch();
    //empty cards in play array for next try
    cardsInPlay = [];
  }
};

//function that creates board
var createBoard = function() {
  //loop through card array to create card elements for the board
  for (var i = 0; i < cards.length; i++){
    //created an img element which will be used
    var cardElement = document.createElement('img');
//set the src attribute to display back of card image
    cardElement.setAttribute('src', 'images/back.png');
        // Set the card's 'data-id' attribute to be the index of the current element
    // data- attributes are meant to store data about an element that is not tied to a style.
    cardElement.setAttribute('data-id', i);
      //added an event listener so that when a card is clicked,
//the function flipCard will be executed
    cardElement.addEventListener('click', flipCard);

    //appended the card to the board
    document.getElementById('game-board').appendChild(cardElement);
  }
};

//call the createBoard function to create the board.
createBoard();
