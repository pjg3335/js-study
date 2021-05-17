// require는 대충 다음과 같이 구현됨

const caches = {}; // 한번 불러온건 중복으로 불러오지 않게 하기위한 cache
function myRequire(src) {
  // cache에 있을경우 cache에 있는값 반환
  if (caches[src]) return caches[src];

  const fileString = require("fs").readFileSync(src, "utf-8"); // 파일 문자열로 읽어옴
  const module = {}; // module변수 선언
  eval(fileString); // 불러온 파일(문자열) 실행함

  // cache저장
  caches[src] = module.exports;

  return module.exports;
}

const _module1 = myRequire("./module1.js"); // [load] module1 출력
console.log(_module1); // { module1: "I'm module1" }

// 캐시를 타기 때문에 load되지 않음 == [load] module1 출력안함
const _module1_1 = myRequire("./module1.js");
const _module1_2 = myRequire("./module1.js");

console.log("\n=============================\n");
/* 실제로 위와같이 동작하는지 확인해 보기 */

const module1 = require("./module1"); // [load] module1 출력
const module2 = require("./module2"); // [load] module2 출력

console.log(module1, module2); // { module1: "I'm module1" } { module2: "I'm module2" }
console.log(Object.keys(require.cache)); // ['.../index.js', '.../module1.js', '.../module2.js']

// 캐시를 타기 때문에 load되지 않음 == [load] module2 출력안함
const module2_1 = require("./module2");
const module2_2 = require("./module2");
const module2_3 = require("./module2");

// 같은 reference갖기 때문에 하나 바꾸면 다 바뀜
module2.module2 = "changed module2";
console.log(module2_1); // { module2: 'changed module2' }
