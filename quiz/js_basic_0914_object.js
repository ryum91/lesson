class Shopping {
  constructor(name) {
    this._name = name;
    this._isInMyCart = false;
    this._price = [];
  }
  get name() {
    return this._name;
  }
  get isInMyCart() {
    return this._isInMyCart;
  }
  get price() {
    return this._price;
  }
  set inMyCart(value) {
    this._isInMyCart = value;
  }
  toggleMyCartStatus() {
    this._isInMyCart = !this._isInMyCart;
  }
  minPrice() {
    var minPriceNum = Math.min.apply(null, this._price);
    return `The lowest price of ${this._name} is ${minPriceNum}`;
  }
  addPrice(input) {
    this._price.push(input);
  }
}

class Groceries extends Shopping {
  constructor(name, quantity) {
    super(name);
    this._quantity = quantity;
  }
  get quantity() {
    return this._quantity;
  }
}

class Clothes extends Shopping {
  constructor(name, size, color) {
    super(name);
    this._size = size;
    this._color = color;
  }
  get size() {
    return this._size;
  }
  get color() {
    return this._color;
  }
}

const potatoChip = new Groceries("Potato Chip", 5);
potatoChip.toggleMyCartStatus();
potatoChip.addPrice(2000);
potatoChip.addPrice(1500);
potatoChip.addPrice(3000);
console.log(potatoChip);
console.log(potatoChip.minPrice());

const nikeShoes = new Clothes("Nike Shoes", 230, "white");
nikeShoes.toggleMyCartStatus();
nikeShoes.addPrice(200000);
nikeShoes.addPrice(100000);
nikeShoes.addPrice(130000);
console.log(nikeShoes);
console.log(nikeShoes.minPrice());
