class Card {
    constructor(suit, stringVal) {
        this._suit = suit;
        this._stringVal = stringVal;
        const numValMap = {
            'Ace': 1,
            'Two': 2,
            'Three': 3,
            'Four': 4,
            'Five': 5,
            'Six': 6,
            'Seven': 7,
            'Eight': 8,
            'Nine': 9,
            'Ten': 10,
            'Jack': 11,
            'Queen': 12,
            'King': 13
        }
        this._numVal = numValMap[stringVal];
    }

    show() {
        console.log(`Suit: ${this._suit}, String value: ${this._stringVal}, Numeric value: ${this._numVal}`);
    }
}

class Deck {
    constructor() {
        this.deck = [];
        this.reset();
        }

    reset() {
        this.deck = [];
        const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
        const stringValues = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
        
        for (let suit in suits ) {
            for (let v in stringValues) {
                this.deck.push(`${stringValues[v]} of ${suits[suit]}`);
            }
        }
    }

    shuffle() {
        const { deck } = this;
        let m = deck.length, t, i;

        while (m) {
            i = Math.floor(Math.random() * m--);

            t = deck[m];
            deck[m] = deck[i];
            deck[i] = t;
        }
        return deck;
    }

    deal() {
        return this.deck.pop();
    }

    cardCount() {
        return this.deck.length;
    }
}

class Player {
    constructor(name) {
        this._name = name;
        this._hand = [];
    }

    makeHand(deck, numCards) {
        this.deck = deck;
        this.numCards = numCards;

        for (let count = 1; count < numCards + 1; count++ ) {
            let newCard = deck.deal();
            this._hand.push(`${newCard}`);
        }
    }

    takeCard(deck) {
        this.deck = deck;
        let newCard = deck.deal();
        this._hand.push(`${newCard}`);
    }

    discardCard() {
        this._hand.pop();
    }
}