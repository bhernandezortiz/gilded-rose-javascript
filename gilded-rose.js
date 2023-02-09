
export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class AgedItem extends Item {
  constructor (name, sellIn, quality) {
    super(name, sellIn, quality)
  }
  uniqueUpdate() {
    this.quality = this.quality + 1
    this.sellIn = this.sellIn - 1
    if (this.quality < 0) {
      this.quality = 0;
    }
    if (this.quality > 50) {
      this.quality = 50;
    }
  }
}

export class LegendaryItem extends Item {
  constructor (name, sellIn, quality) {
    super(name, sellIn, quality)
  }
  uniqueUpdate() {
    this.quality = this.quality
    this.sellIn = this.sellIn
  }
}

export class LimitedItem extends Item {
  constructor (name, sellIn, quality) {
    super(name, sellIn, quality)
  }
  uniqueUpdate() {
    if ( this.sellIn === 0) {
      this.quality = 0
    } else if(this.sellIn <= 5){
      this.quality = this.quality + 3
    } else if (this.sellIn <= 10) {
      this.quality = this.quality + 2
    } else if (this.sellIn > 10) {
      this.sellIn = this.sellIn - 1
      this.quality = this.quality - 1
    }
    if (this.quality < 0) {
      this.quality = 0;
    }
    if (this.quality > 50) {
      this.quality = 50;
    }
  }
}

export class ConjuredItem extends Item {
  constructor (name, sellIn, quality) {
    super(name, sellIn, quality)
  }
  uniqueUpdate() {
    this.quality = this.quality - 2
    this.sellIn = this.sellIn - 1
    if (this.quality < 0) {
      this.quality = 0;
    }
    if (this.quality > 50) {
      this.quality = 50;
    }
  }
}



export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new AgedItem("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new LimitedItem("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new ConjuredItem("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    if (item.uniqueUpdate) {
      item.uniqueUpdate()
    } else {
      if (item.sellIn === 0) {
        item.quality = item.quality - 2
      } else {
        item.sellIn = item.sellIn - 1
        item.quality = item.quality - 1
      }
      if (item.quality < 0) {
        item.quality = 0;
      }
      if (item.quality > 50) {
        item.quality = 50;
      }
    }
  }
}
// export const updateQuality = () => {
//   for (let item of items) {
//     if (item.quality < 0) {
//       item.quality = 0;
//     }
//     if (item.name !== "Sulfuras, Hand of Ragnaros" && item.quality > 50) {
//       item.quality = 50
//     }
//     if (
//       item.name != "Aged Brie" &&
//       item.name != "Backstage passes to a TAFKAL80ETC concert"
//     ) {
//       if (item.quality > 0) {
//         if (item.name != "Sulfuras, Hand of Ragnaros") {
//           item.quality = item.quality - 1;
//         }
//       }
//     } else {
//       if (item.quality < 50) {
//         item.quality = item.quality + 1;
//         if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.sellIn < 11) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1;
//             }
//           }
//           if (item.sellIn < 6) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1;
//             }
//           }
//         }
//       }
//     }
//     if (item.name != "Sulfuras, Hand of Ragnaros") {
//       item.sellIn = item.sellIn - 1;
//     }
//     if (item.sellIn < 0) {
//       if (item.name != "Aged Brie") {
//         if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.quality > 0) {
//             if (item.name != "Sulfuras, Hand of Ragnaros") {
//               item.quality = item.quality - 1;
//             }
//           }
//         } else {
//           item.quality = item.quality - item.quality;
//         }
//       } else {
//         if (item.quality < 50) {
//           item.quality = item.quality + 1;
//         }
//       }
//     }
//   }
// };