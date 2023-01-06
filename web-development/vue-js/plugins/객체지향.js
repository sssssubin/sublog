let name = 'ICE CREAM STORE'

class Product {
  // 추상화
  name = '';
  price = 0;
  constructor(name, price) {
    this.name = name
    this.price = price
  }
  getPrice() {
    return this.price + '원'
  }
  setPrice(price) {
    if (price < 0) {
      throw Error('마이너스값 안됨')
    }
    this.price = price
  }
} //캡슐화

class baskinrobbins extends Product {
  //상속
  size = '';
  //생성자
  constructor(name, price, size) {
    super(name, price)
    this.size = size
  }
}

class sulbing extends Product {
  type = '';
  constructor(name, price, type) {
    super(name, price)
    this.type = type
  }
}

let ice1 = new baskinrobbins('엄마는 외계인', 5000, '파인트 사이즈')
let ice2 = new sulbing('민트 초코', 15000, '빙수')

ice1.setPrice(7900)
console.log(ice1.name, ice1.getPrice(), ice1.size, ice2)
