class Client {
  constructor(request) {
    this.request = request;
  }

  getRequest() {
    if (this.request === "A") {
      return new RequestA();
    }
    if (this.request === "B") {
      return new RequestB();
    }
    if (this.request === "C") {
      return new RequestC();
    }

    return new NullObject();
  }
}

class RequestA {
  apply() {
    return "success A request";
  }
}
class RequestB {
  apply() {
    return "success B request";
  }
}

class RequestC {
  apply() {
    return "success C request";
  }
}

class NullObject {
  apply() {
    return new Error("request invalid ...");
  }
}

$input = new Client("C");
$input.getRequest().apply();
