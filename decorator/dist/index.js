"use strict";
/*
  object의 속성은 값 외에도 숨겨진 정보를 갖고 있다.
  이는 다음과 같이 속성설명자를 통해 확인해 볼 수 있다
*/
var user = {
    name: 'minsu',
    age: 20,
};
console.log(Object.getOwnPropertyDescriptor(user, 'name'));
/*
{
  value: 'minsu', // 할당된 값
  writable: true, // '='을 통해 값 할당할 수 있는지 여부
  enumerable: true, //Object.keys나 for로 열거할 수 있는지 여부
  configurable: true //유형 변경및 속성 삭제 가능 여부
  // 여긴 안나오지만 get, set또한 존재한다.
}
*/
/*
  속성 설명자를 다음과 같이 다룰수 있다.
*/
Object.defineProperty(user, 'name', { writable: false });
// user.name = 'sumin' // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
console.log(user);
//# sourceMappingURL=index.js.map