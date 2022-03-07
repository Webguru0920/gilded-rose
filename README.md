Entirety of code comes from: https://github.com/emilybache/GildedRose-Refactoring-Kata

Original description by Bobby Johnson: http://iamnotmyself.com/2011/02/14/refactor-this-the-gilded-rose-kata

> Complete in then next 4 days or over the weekend (whichever comes first)

> **Make sure you `Fork` from editor toolbar and `Save` all the files you changed before sending back link to solution**

> Unit test are continiously run against `src/GildedRose.js`.
  Each time you save that file, you will see jasmine spec running here ->

## Current specification

"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. (...)

- All items have a `sellIn` value which denotes the number of days we have to sell the item.
- All items have a `quality` value which denotes how valuable the item is.
- At the end of each day our system lowers both values for every item.

Pretty simple, right? Well this is where it gets interesting:

- Once the _sell by date_ has passed, `quality` degrades twice as fast.
- The `quality` of an item is never negative.
- “Aged Brie” actually increases in `quality` the older it gets.
- The `quality` of an item is never more than 50.
- “Sulfuras”, being a legendary item, never has to be sold or decreases in `quality`.
- “Backstage passes”, like aged brie, increases in `quality` as it’s `sellIn` value approaches; `quality` increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert."

## Tasks

### Refactor code

The goal is to make algorithm in `src/GildedRose.js` more human readable.
The existing test must all pass against the refactored code.

### Add new item (Conjured Mana Cake)

1. Create functionality as described below.
2. Create unit tests for new item.

"We have recently signed a supplier of conjured items. This requires an update to our system:

- “Conjured” items degrade in `quality` twice as fast as normal items.

Feel free to refactor and make any changes to the `updateQuality()` method and add any new code as long as everything still works correctly. However, do not alter the `Item` class or `items` property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the `updateQuality` method and Items property static if you like, we’ll cover for you)."

## On completition

1. Please ensure all your changes are saved.
2. Copy browser's url directly or use `Share` button.
3. Send link to solution back to us.
