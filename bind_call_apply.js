const person = { name: "minsu" };

function say(str, str2) {
  console.log(`${this.name}: ${str}${str2}`);
}

say('hello world', '!')
say.call(person, 'hello world', '!')
say.apply(person, ['hello world', '!']) // 인자를 배열로 보내는거 빼고 call과 같음
say.bind(person, 'hello world', '!')() // 함수를 반환함


// 활용1: array-like가 Array함수 사용
const str = '스트링 타입은 map함수가 없다.'
console.log(Array.prototype.map.call(str, e => `${e}${e}`).join(''))



