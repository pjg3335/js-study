// https://www.typescriptlang.org/docs/handbook/decorators.html
function classDecorator() {
  /*
    { new (...args: any[]): {} }의 의미는 new를 할 수 있는 함수를 의미한다.
    (new (...args:any[]) => {} 로 적어도 같은거임)
  */
   return function <T extends { new (...args: any[]): {} }> (constructor:T) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    }
  }
}

@classDecorator()
class Test {
  property = "property";
  hello: string;

  constructor(m: string) {
      this.hello = m;
  }
}

let t = new Test("world")
console.log(t)