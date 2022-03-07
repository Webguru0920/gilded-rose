export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
/**
 * item names
 */
const ITEM_NAMES = {
  AGED_BRIE: 'Aged Brie',
  BACKSTAGE: 'Backstage passes to a TAFKAL80ETC concert',
  SULFURAS: 'Sulfuras, Hand of Ragnaros',
  CONJURED: 'Conjured Mana Cake',
};
/**
 * quality values
 */
const QUALITY_VALUES = {
  MIN: 0,
  MAX: 50,
  STEP: 1,
};
/**
 * CLASS GildedRose
 */
export class GildedRose {
  constructor(items = []) {
    this.items = items;
  }

  /**
   * decrease sellIn by step
   * @param item
   * @param step
   */
  decreaseSellIn(item, step) {
    if (item.name !== ITEM_NAMES.SULFURAS) item.sellIn = item.sellIn - step;
  }

  /**
   * increase quality by step
   * @param item
   * @param step
   */
  increaseQuality(item, step) {
    const value = item.quality + step;
    item.quality = value > QUALITY_VALUES.MAX ? QUALITY_VALUES.MAX : value;
  }

  /**
   * decrease quality by step
   * @param item
   * @param step
   */
  decreaseQuality(item, step) {
    const value = item.quality - step;
    item.quality = value < QUALITY_VALUES.MIN ? QUALITY_VALUES.MIN : value;
  }

  /**
   * handle item if sellIn is available
   * @param item
   */
  updateSellInItem(item) {
    switch (item.name) {
      case ITEM_NAMES.AGED_BRIE:
        this.increaseQuality(item, 1);
        break;
      case ITEM_NAMES.BACKSTAGE:
        if (item.sellIn < 5) {
          this.increaseQuality(item, 3);
        } else if (item.sellIn < 10) {
          this.increaseQuality(item, 2);
        } else {
          this.increaseQuality(item, 1);
        }
        break;
      case ITEM_NAMES.SULFURAS:
        break;
      case ITEM_NAMES.CONJURED:
        this.decreaseQuality(item, 2 * QUALITY_VALUES.STEP);
        break;
      default:
        this.decreaseQuality(item, 1);
        break;
    }
  }

  /**
   * handle item if sellIn is expired
   * @param item
   */
  updateExpiredItem(item) {
    switch (item.name) {
      case ITEM_NAMES.AGED_BRIE:
        this.increaseQuality(item, 1);
        break;
      case ITEM_NAMES.BACKSTAGE:
        item.quality = QUALITY_VALUES.MIN;
        break;
      case ITEM_NAMES.SULFURAS:
        break;
      case ITEM_NAMES.CONJURED:
        this.decreaseQuality(item, 4 * QUALITY_VALUES.STEP);
        break;
      default:
        this.decreaseQuality(item, 2 * QUALITY_VALUES.STEP);
        break;
    }
  }

  /**
   * update quality of items
   */
  updateQuality() {
    this.items.forEach((item) => {
      this.decreaseSellIn(item, 1);
      if (item.sellIn >= 0) {
        this.updateSellInItem(item);
      } else {
        this.updateExpiredItem(item);
      }
    });

    return this.items;
  }
}
