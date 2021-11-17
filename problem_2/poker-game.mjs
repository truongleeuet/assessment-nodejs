import { Deck } from './deck.mjs';
export class PokerGame {
  isFlush(cards) {
    return cards.every((card) => card.suit === cards[0].suit);
  }
  isStraight(cards) {
    if (cards.length !== 5) {
      return false;
    }
    // Case you hands 10 J Q K Ace
    if (
      cards[0][0].value === 2 &&
      cards[3][0].value === 5 &&
      cards[4][0].value === 14
    ) {
      return true;
    }
    // Case you hands continuously increasing
    return cards[4][0].value - cards[0][0].value === 4;
  }
  init() {
    const deck = new Deck([]);
    deck.shuffle();

    return deck.drawFirstFiveCards();
  }
  startGame() {
    let fiveCardsFirst = this.init();
    console.log('fiveCardsFirst: ', fiveCardsFirst);
    console.log(this.showPokerHand(fiveCardsFirst));
  }
  orderCard(cards) {
    const result = [];
    for (let card of cards) {
      const value = card.value;
      result[value] = result[value] || [];
      result[value].push(card);
    }
    //clear empty card
    return result.filter((r) => r);
  }
  determineHighestPokerHandType(cards) {
    const cardSort = this.orderCard(cards);
    console.log('cardSort :>> ', cardSort);
    const isFlush = this.isFlush(cards);
    const isStraight = this.isStraight(cardSort);
    if (isFlush && isStraight && cardSort[0][0].value === 10) {
      return 'RoyalFlush';
    }
    if (isFlush && isStraight) {
      return 'StraightFlush';
    }
    if (cardSort.length === 2) {
      if (cardSort[0].length === 4 || cardSort[1].length === 4) {
        return 'FourOfAKind';
      } else {
        return 'FullHouse';
      }
    }
    if (isFlush) {
      return 'Flush';
    }

    if (isStraight) {
      return 'Straight';
    }

    if (cardSort.length === 3) {
      if (cardSort.some((card) => card.length === 3)) {
        return 'ThreeOfAKind';
      } else {
        return 'TwoPair';
      }
    }
    if (cardSort.length === 4) {
      return 'OnePair';
    }

    return 'HighCard';
  }
  convertHandToEmoji(hand) {
    return hand.map(this.convertCardToEmoji).join(' ');
  }
  convertCardToEmoji(card) {
    let rank = card.value;
    let suit = card.suit;

    if (rank === 14) {
      rank = 'Ace';
    }
    if (rank === 13) {
      rank = 'King';
    }
    if (rank === 12) {
      rank = 'Queen';
    }
    if (rank === 11) {
      rank = 'Jack';
    }

    if (suit === 'Spades') {
      suit = '♠️';
    } else if (suit === 'Diamonds') {
      suit = '♦️';
    } else if (suit === 'Club') {
      suit = '♣️';
    } else if (suit === 'Heart') {
      suit = '♥️';
    }

    return `${rank}${suit}`;
  }
  showPokerHand(cards) {
    const handType = this.determineHighestPokerHandType(cards);
    const formatCards = this.convertHandToEmoji(cards);
    return `Your hand: ${formatCards} and the highest poker hand is: ${handType}`;
  }
}
