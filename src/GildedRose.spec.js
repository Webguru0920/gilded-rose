import { GildedRose, Item } from './GildedRose';

function testItemHistory(expectedHistory) {
  const [initialItemState, ...remainingHistory] = expectedHistory;
  const gildedRose = new GildedRose([new Item(...initialItemState)]);
  for (const historyState of remainingHistory) {
    const items = gildedRose.updateQuality();
    const expectedItem = new Item(...historyState);
    expect(items[0]).toEqual(expectedItem);
  }
  const items = gildedRose.updateQuality();
}

describe('GildedRose', function () {
  it('Aged Brie', () => {
    const expectedHistory = [
      ['Aged Brie', 2, 0],
      ['Aged Brie', 1, 1],
      ['Aged Brie', 0, 2],
      // According to README.md, 'Aged Brie' increases one in regardless of whether sellIn is less than 0 or not.
      // So I fixed below values
      ['Aged Brie', -1, 3], // FIXED 4 to 3
      ['Aged Brie', -2, 4], // FIXED 6 to 4
      ['Aged Brie', -3, 5], // FIXED 8 to 5
      ['Aged Brie', -4, 6], // FIXED 10 to 6
      ['Aged Brie', -5, 7], // FIXED 12 to 7
      ['Aged Brie', -6, 8], // FIXED 14 to 8
    ];
    testItemHistory(expectedHistory);
  });

  it('+5 Dexterity Vest', () => {
    const expectedHistory = [
      ['+5 Dexterity Vest', 10, 20],
      ['+5 Dexterity Vest', 9, 19],
      ['+5 Dexterity Vest', 8, 18],
      ['+5 Dexterity Vest', 7, 17],
      ['+5 Dexterity Vest', 6, 16],
      ['+5 Dexterity Vest', 5, 15],
      ['+5 Dexterity Vest', 4, 14],
      ['+5 Dexterity Vest', 3, 13],
      ['+5 Dexterity Vest', 2, 12],
      ['+5 Dexterity Vest', 1, 11],
      ['+5 Dexterity Vest', 0, 10], // added
      ['+5 Dexterity Vest', -1, 8], // added
      ['+5 Dexterity Vest', -2, 6], // added
    ];
    testItemHistory(expectedHistory);
  });

  it('Elixir of the Mongoose', () => {
    const expectedHistory = [
      ['Elixir of the Mongoose', 5, 7],
      ['Elixir of the Mongoose', 4, 6],
      ['Elixir of the Mongoose', 3, 5],
      ['Elixir of the Mongoose', 2, 4],
      ['Elixir of the Mongoose', 1, 3],
      ['Elixir of the Mongoose', 0, 2],
      ['Elixir of the Mongoose', -1, 0],
      ['Elixir of the Mongoose', -2, 0],
      ['Elixir of the Mongoose', -3, 0],
      ['Elixir of the Mongoose', -4, 0],
    ];
    testItemHistory(expectedHistory);
  });

  it('Sulfuras, Hand of Ragnaros (expired)', () => {
    const expectedHistory = [
      ['Sulfuras, Hand of Ragnaros', -1, 80],
      ['Sulfuras, Hand of Ragnaros', -1, 80],
    ];
    testItemHistory(expectedHistory);
  });

  it('Sulfuras, Hand of Ragnaros', () => {
    const expectedHistory = [
      ['Sulfuras, Hand of Ragnaros', 0, 80],
      ['Sulfuras, Hand of Ragnaros', 0, 80],
    ];
    testItemHistory(expectedHistory);
  });

  it('Backstage passes to a TAFKAL80ETC concert (in 15 days)', () => {
    const expectedHistory = [
      ['Backstage passes to a TAFKAL80ETC concert', 15, 20],
      ['Backstage passes to a TAFKAL80ETC concert', 14, 21],
      ['Backstage passes to a TAFKAL80ETC concert', 13, 22],
      ['Backstage passes to a TAFKAL80ETC concert', 12, 23],
      ['Backstage passes to a TAFKAL80ETC concert', 11, 24],
      ['Backstage passes to a TAFKAL80ETC concert', 10, 25],
      ['Backstage passes to a TAFKAL80ETC concert', 9, 27],
      ['Backstage passes to a TAFKAL80ETC concert', 8, 29],
      ['Backstage passes to a TAFKAL80ETC concert', 7, 31],
      ['Backstage passes to a TAFKAL80ETC concert', 6, 33],
      ['Backstage passes to a TAFKAL80ETC concert', 5, 35], // added
      ['Backstage passes to a TAFKAL80ETC concert', 4, 38], // added
      ['Backstage passes to a TAFKAL80ETC concert', 3, 41], // added
    ];
    testItemHistory(expectedHistory);
  });

  it('Backstage passes to a TAFKAL80ETC concert (in 10 days)', () => {
    const expectedHistory = [
      ['Backstage passes to a TAFKAL80ETC concert', 10, 49],
      ['Backstage passes to a TAFKAL80ETC concert', 9, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 8, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 7, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 6, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 5, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 4, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 3, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 2, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 1, 50],
    ];
    testItemHistory(expectedHistory);
  });

  it('Backstage passes to a TAFKAL80ETC concert (in 5 days)', () => {
    const expectedHistory = [
      ['Backstage passes to a TAFKAL80ETC concert', 5, 49],
      ['Backstage passes to a TAFKAL80ETC concert', 4, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 3, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 2, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 1, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 0, 50],
      ['Backstage passes to a TAFKAL80ETC concert', -1, 0],
      ['Backstage passes to a TAFKAL80ETC concert', -2, 0],
      ['Backstage passes to a TAFKAL80ETC concert', -3, 0],
      ['Backstage passes to a TAFKAL80ETC concert', -4, 0],
    ];
    testItemHistory(expectedHistory);
  });

  it('Conjured Mana Cake', () => {
    const expectedHistory = [
      ['Conjured Mana Cake', 2, 30],
      ['Conjured Mana Cake', 1, 28],
      ['Conjured Mana Cake', 0, 26],
      ['Conjured Mana Cake', -1, 22],
      ['Conjured Mana Cake', -2, 18],
    ];
    testItemHistory(expectedHistory);
  });

  it('Conjured Mana Cake (min quality)', () => {
    const expectedHistory = [
      ['Conjured Mana Cake', 2, 1],
      ['Conjured Mana Cake', 1, 0],
      ['Conjured Mana Cake', 0, 0],
      ['Conjured Mana Cake', -1, 0],
      ['Conjured Mana Cake', -2, 0],
    ];
    testItemHistory(expectedHistory);
  });
});
