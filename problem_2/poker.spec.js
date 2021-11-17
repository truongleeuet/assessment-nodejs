import { PokerGame } from './poker-game.mjs';
import * as sinon from 'sinon';
import { expect } from 'chai';
import { fiveCardsMock } from './mock-data.mjs';
describe('determineHighestPokerHandType test suite', () => {
  it('#RoyalFlush', () => {
    const pokerGame = new PokerGame();
    const handType = pokerGame.determineHighestPokerHandType(
      fiveCardsMock.royalFlush
    );
    expect(handType).equal('RoyalFlush');
  });
  it('#StraightFlush', () => {
    const pokerGame = new PokerGame();
    const handType = pokerGame.determineHighestPokerHandType(
      fiveCardsMock.straightFlush
    );
    expect(handType).equal('StraightFlush');
  });

  it('#FourOfAKind', () => {
    const pokerGame = new PokerGame();
    const handType = pokerGame.determineHighestPokerHandType(
      fiveCardsMock.fourOfAKind
    );
    expect(handType).equal('FourOfAKind');
  });

  it('#FullHouse', () => {
    const pokerGame = new PokerGame();
    const handType = pokerGame.determineHighestPokerHandType(
      fiveCardsMock.fullHouse
    );
    expect(handType).equal('FullHouse');
  });

  it('#Flush', () => {
    const pokerGame = new PokerGame();
    const handType = pokerGame.determineHighestPokerHandType(
      fiveCardsMock.flush
    );
    expect(handType).equal('Flush');
  });

  it('#Straight', () => {
    const pokerGame = new PokerGame();
    const handType = pokerGame.determineHighestPokerHandType(
      fiveCardsMock.straight
    );
    expect(handType).equal('Straight');
  });

  it('#ThreeOfAKind', () => {
    const pokerGame = new PokerGame();
    const handType = pokerGame.determineHighestPokerHandType(
      fiveCardsMock.threeOfAKind
    );
    expect(handType).equal('ThreeOfAKind');
  });

  it('#TwoPair', () => {
    const pokerGame = new PokerGame();
    const handType = pokerGame.determineHighestPokerHandType(
      fiveCardsMock.twoPair
    );
    expect(handType).equal('TwoPair');
  });

  it('#OnePair', () => {
    const pokerGame = new PokerGame();
    const handType = pokerGame.determineHighestPokerHandType(
      fiveCardsMock.onePair
    );
    expect(handType).equal('OnePair');
  });

  it('#HighCard', () => {
    const pokerGame = new PokerGame();
    const handType = pokerGame.determineHighestPokerHandType(
      fiveCardsMock.highCard
    );
    expect(handType).equal('HighCard');
  });
});
