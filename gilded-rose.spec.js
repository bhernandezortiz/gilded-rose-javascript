import { expect, describe, it } from "vitest";
import { Item, AgedItem, LegendaryItem, LimitedItem, items, updateQuality, ConjuredItem } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });

  it("Quality of item is never negative", () => {
    const testItem = new Item ("basic", 5, -1);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
  })

  it ("Aged Brie Increase in Quality the Older it gets", () => {
    const testItem = new AgedItem ("Aged Brie", 5, 7);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(8)
  })

  it ("The quality of an item is never more than 50", () => {
    const testItem = new Item ("basic" , 6, 52)
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(50)
  })

  it ("Sulfuras, Hand of Ragnaros, being a legendary item, never has to be sold nor does it decrease in quality.", () => {
    const testItem = new LegendaryItem("basic" , 6, 52)
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(52)
    expect(testItem.sellIn).toBe(6)
  })

  it ("Limited items quality + 2 when less than 10 sellin, +3 when less than 5 sellin, and quality = 0 after 0 sellin", () => {
    const testItem = new LimitedItem("basic" , 12, 31)
    items.push(testItem);
    const testItem1 = new LimitedItem("basic" , 7, 12)
    items.push(testItem1);
    const testItem2 = new LimitedItem("basic" , 4, 12)
    items.push(testItem2);
    const testItem3 = new LimitedItem("basic" , 0, 52)
    items.push(testItem3);

    updateQuality();

    expect(testItem.quality).toBe(30)
    expect(testItem1.quality).toBe(14)
    expect(testItem2.quality).toBe(15)
    expect(testItem3.quality).toBe(0)
  })

  it ("Conjured item quality degrades twice as fast", () => {
    const testItem = new ConjuredItem("basic" , 6, 12)
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(10)
  })
});