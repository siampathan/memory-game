document.addEventListener("DOMContentLoaded", () => {
  const cardList = [
    {
      name: "bat",
      image: "images/Bat.png",
    },
    {
      name: "bat",
      image: "images/Bat.png",
    },
    {
      name: "bones",
      image: "images/Bones.png",
    },
    {
      name: "bones",
      image: "images/Bones.png",
    },
    {
      name: "cauldron",
      image: "images/Cauldron.png",
    },
    {
      name: "cauldron",
      image: "images/Cauldron.png",
    },
    {
      name: "cobweb",
      image: "images/Cobweb.png",
    },
    {
      name: "cobweb",
      image: "images/Cobweb.png",
    },
    {
      name: "web",
      image: "images/web.png",
    },
    {
      name: "web",
      image: "images/web.png",
    },
    {
      name: "dracula",
      image: "images/Dracula.png",
    },
    {
      name: "dracula",
      image: "images/Dracula.png",
    },
    {
      name: "eye",
      image: "images/Eye.png",
    },
    {
      name: "eye",
      image: "images/Eye.png",
    },
    {
      name: "spider",
      image: "images/Spider.png",
    },
    {
      name: "spider",
      image: "images/Spider.png",
    },
    {
      name: "skull",
      image: "images/Skull.png",
    },
    {
      name: "skull",
      image: "images/Skull.png",
    },
    {
      name: "pumpkin",
      image: "images/Pumpkin.png",
    },
    {
      name: "pumpkin",
      image: "images/Pumpkin.png",
    },
  ];
  cardList.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".game-grid");
  const attemptHolder = document.querySelector(".attempt-holder");
  const foundHolder = document.querySelector(".found-holder");
  const cardsInGames = 10;

  var attempts = 0;
  var foundCard = 0;
  attemptHolder.textContent = attempts;
  foundHolder.textContent = foundCard;

  let chosenCards = [];
  let chosenCardsIds = [];

  function initiateBoard() {
    for (let i = 0; i < cardList.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/CardBack.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function flipCard() {
    if (chosenCards.length != 2) {
      var cardId = this.getAttribute("data-id");
      if (this.getAttribute("src") != "images/blank.png") {
        chosenCards.push(cardList[cardId].name);
        chosenCardsIds.push(cardId);
        this.setAttribute("src", cardList[cardId].image);
        if (chosenCards.length == 2) {
          setTimeout(checkForMatch, 500);
        }
      }
    }
  }

  function checkForMatch() {
    attempts++;
    var cards = document.querySelectorAll("img");
    var firstCard = chosenCardsIds[0];
    var secondCard = chosenCardsIds[1];

    if (chosenCards[0] == chosenCards[1]) {
      foundCard++;
      cards[firstCard].setAttribute("src", "images/blank.png");
      cards[secondCard].setAttribute("src", "images/blank.png");
    } else {
      cards[firstCard].setAttribute("src", "images/CardBack.png");
      cards[secondCard].setAttribute("src", "images/CardBack.png");
    }

    chosenCards = [];
    chosenCardsIds = [];

    attemptHolder.textContent = attempts;
    foundHolder.textContent = foundCard;

    if (foundCard == cardsInGames) alert("Well done !");
  }

  initiateBoard();
});
