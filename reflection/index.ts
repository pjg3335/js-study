import "reflect-metadata";

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
test2.member = new Test2();
console.log("3", test2.member);
