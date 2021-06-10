import "reflect-metadata";

const abcd = (a: number, b: string) => 1;
// console.log(abcd.name) // 함수명 (브라우저에서는 찍히는데 왜안되는지 몰겟)
console.log(abcd.length); // 매개변수의 길이

// ========================

function validate<T>(
  target: any,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<T>
) {
  const set = descriptor.set!;
  descriptor.set = function (value: T) {
    const type = Reflect.getMetadata("design:type", target, propertyKey);
    console.log(type);
    console.log(value);
    if (!(value instanceof type)) {
      throw new TypeError("Invalid type.");
    }
    set.call(target, value);
  };
}

class Test1 {}

class Test2 {
  private _member!: Test1;

  @validate
  @Reflect.metadata("design:type", Test1)
  set member(value: Test1) {
    this._member = value;
  }

  get member(): Test1 {
    return this._member;
  }
}

const test2 = new Test2();
console.log("1", test2.member);
test2.member = new Test1();
console.log("2", test2.member);
// test2.member = new Test2();
// console.log("3", test2.member);

// ====================

function logType(target: any, key: string) {
  var t = Reflect.getMetadata("design:type", target, key);
  console.log(`${key} type: ${t.name}`);
}
class Demo {
  @logType // apply property decorator
  public attr1: string = "";
}

//=====================
function logParameters(target: any, key: string) {
  var types = Reflect.getMetadata("design:paramtypes", target, key);
  var s = types.map((a: any) => a.name).join();
  console.log(`${key} param types: ${s}`);

  const a = eval(`new Foo()`);
  console.log(a);
}

class Foo {}
interface IFoo {}

class Demo2 {
  @logParameters // apply parameter decorator
  doSomething(
    param1: string,
    param2: number,
    param3: Foo,
    param4: { test: string },
    param5: IFoo,
    param6: Function,
    param7: (a: number) => void
  ): number {
    return 1;
  }
}
