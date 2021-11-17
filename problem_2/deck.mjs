const suits = ['Spades', 'Diamonds', 'Club', 'Heart'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
import { Card } from './card.mjs';
export class Deck {
  constructor(data) {
    this.cards = data;
    // create a deck of cards
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        const card = new Card(values[x], suits[i]);
        this.cards.push(card);
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
  drawFirstFiveCards() {
    return this.cards.slice(0, 5);
  }
}
