class Debt {
  constructor(name) {
    this.name = name;
  }

  request(amount) {
    let res = "aproved";

    if (!new Bank(this.name, this.amount).check()) {
      return "failed";
    } else if (!new Credit(this.name)) {
      return "failed";
    } else if (!new Background(this.name)) {
      return "failed";
    }

    return `${this.name} is status ${res} for ${amount} Debt ...`;
  }
}

class Bank {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }

  check() {
    return true;
  }
}

class Credit {
  constructor(name) {
    this.name = name;
  }

  check() {
    return true;
  }
}

class Background {
  constructor(name) {
    this.name = name;
  }

  check() {
    return true;
  }
}

const debt = new Debt("ali hamzehei");

console.log(debt.request(300000000));

// input
//  ali hamzehei is status aproved for 300000000 Debt ...
