/*
process.env는 컴퓨터의 환경변수를 가지고 온다.

환경변수는 os별로 다음과 같이 설정가능하다
window
  설정: set NODE_ENV=dev
  확인: set NODE_ENV
  전체확인: set
linux/unix
  설정: export NODE_ENV=dev
(window기준으로 cmd에서 실행해야 하고(git bash ㄴㄴ) cmd창 끄면 set한게 없어짐)

cross-env를 이용하면 os와 무관하게 다음과 같이 환경변수를 적용시켜서 실행할 수 있다.
[package.json]
"script": {
  "start": "cross-env NODE_ENV=dev TEST_MODE=false node index.js"
  ...
}
*/

console.log(process.env.NODE_ENV, process.env.TEST_MODE) // 결과는 문자열로 온다.