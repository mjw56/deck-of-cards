const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['C', 'S', 'D', 'H'];

const valuesMap = {
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
    '10': 'Ten',
    'J': 'Jack',
    'Q': 'Queen',
    'K': 'King',
    'A': 'Ace'
};

const suitsMap = {
    'C': 'Clubs',
    'S': 'Spades',
    'D': 'Diamonds',
    'H': 'Hearts'
};

function Deck() {
    this.cards = [];
    this.createDeck();
}

Deck.prototype.createDeck = function() {
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            this.cards.push(new Card(values[j], suits[i]));
        }
    }
}

Deck.prototype.print = function() {
    this.cards.map(card => {
        console.log(card.name);
    });
}

Deck.prototype.shuffle = function() {
    let currentIndex = this.cards.length;

    while (currentIndex > 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        let temp = this.cards[currentIndex];
        this.cards[currentIndex] = this.cards[randomIndex];
        this.cards[randomIndex] = temp;
    }
}

function Card(value, suit) {
    this.suit = suit;
    this.value = value;
    this.name = this.createName(value, suit);
}

Card.prototype.createName = function(value, suit) {
    return `${valuesMap[value]} of ${suitsMap[suit]}`;
}
