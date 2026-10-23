// craete deck of cards and player hands 

// const deckOfCards = [
//     { suit: "diamond", rank: "1" },
//     { suit: "diamond", rank: "2" },
//     { suit: "diamond", rank: "3" },
//     { suit: "diamond", rank: "4" },
//     { suit: "diamond", rank: "5" },
//     { suit: "diamond", rank: "6" },
//     { suit: "diamond", rank: "7" },
//     { suit: "diamond", rank: "8" },
//     { suit: "diamond", rank: "9" },
//     { suit: "diamond", rank: "10" },
//     { suit: "diamond", rank: "11" },
//     { suit: "diamond", rank: "12" },
//     { suit: "diamond", rank: "13" },
//     { suit: "spade", rank: "1" },
//     { suit: "spade", rank: "2" },
//     { suit: "spade", rank: "3" },
//     { suit: "spade", rank: "4" },
//     { suit: "spade", rank: "5" },
//     { suit: "spade", rank: "6" },
//     { suit: "spade", rank: "7" },
//     { suit: "spade", rank: "8" },
//     { suit: "spade", rank: "9" },
//     { suit: "spade", rank: "10" },
//     { suit: "spade", rank: "11" },
//     { suit: "spade", rank: "12" },
//     { suit: "spade", rank: "13" },
//     { suit: "club", rank: "1" },
//     { suit: "club", rank: "2" },
//     { suit: "club", rank: "3" },
//     { suit: "club", rank: "4" },
//     { suit: "club", rank: "5" },
//     { suit: "club", rank: "6" },
//     { suit: "club", rank: "7" },
//     { suit: "club", rank: "8" },
//     { suit: "club", rank: "9" },
//     { suit: "club", rank: "10" },
//     { suit: "club", rank: "11" },
//     { suit: "club", rank: "12" },
//     { suit: "club", rank: "13" },
//     { suit: "hearts", rank: "1" },
//     { suit: "hearts", rank: "2" },
//     { suit: "hearts", rank: "3" },
//     { suit: "hearts", rank: "4" },
//     { suit: "hearts", rank: "5" },
//     { suit: "hearts", rank: "6" },
//     { suit: "hearts", rank: "7" },
//     { suit: "hearts", rank: "8" },
//     { suit: "hearts", rank: "9" },
//     { suit: "hearts", rank: "10" },
//     { suit: "hearts", rank: "11" },
//     { suit: "hearts", rank: "12" },
//     { suit: "hearts", rank: "13" },
// ]

function getDeck() {
    let deck = [];
    let suits = ["spades", "diamonds", "clubs", "hearts"];
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            let card = { Value: values[x], Suit: suits[i] };
            deck.push(card);
        }
    }
    return deck;
}

let myDeck = getDeck()

console.log(myDeck);

function shuffle(deck) {
    // for 1000 turns
    // switch the values of two random cards
    for (let i = 0; i < 1000; i++) {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }

}








// randomly split deck in 2 and shuffle order


// for(let i=0; i< deckOfCards.length; i++){
//    let randomCard = deckOfCards[Math.floor(Math.random()*deckOfCards.length)]
//     shuffledDeck.push(randomCard)
// }

// const shuffle = (deckOfCards) => {


// return shuffledDeck
// }


const deal = (shuffle) => {


    let playerHand = []
    let compuerHand = []

    for (let i = 0; i < shuffle.length; i++) {
        if (i % 2 == 1) {
            playerHand.push(shuffle[i])
        }
        else {
            compuerHand.push(shuffle[i])
        }
    }
    return playerHand + compuerHand
}




// const elements = ["rock", "paper", "scissors"]

// const computerInput = elements[Math.floor(Math.random()*elements.length)];
// console.log(`Computer chose ${computerInput}`);



// player and computer draw top card


// compare card values, include if statements to show higher card gets both and if statement for when someone runs out of cards


