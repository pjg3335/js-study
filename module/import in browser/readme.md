
## 예제 실행방법

예제는 서버에 올려서 실행할 것. 간단한 예제이기 때문에 [live server](https://github.com/pjg3335/study/blob/4cb2620479aec1d18b63745a864552fa5e5d723d/vscode/extensions/live%20server.md)에서 테스트 해도 된다.

## browser에서 쓰는 import와 export

`import`와 `export`구문은 browser또한 지원한다. [관련링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)  
이 예제는 `talker.js`의 `say()`함수를 사용하는 예제이다. `export`와 `import`가 React에서 사용하는것과 똑같이 사용할 수 있다는 것을 예로 들기 위해서 맨 앞글자를 대문자로 만드는 모듈 `capitalizer`와 마지막에 마침표를 찍어주는 모듈 `period`를 만들었다.

## 성질

예제에는 나와있지 않지만, `import`는 `require()`와 마찬가지로 다음의 성질을 가진다. ([require예](https://github.com/pjg3335/js-study/blob/5d66016318ee2079ce38dfa056e267aef068a28d/module/require%20in%20nodejs/index.js))

- 여러번 `import`해도 한번만 평가된다.
- 객체는 동일한 reference를 갖기 때문에 같은 모듈을 한쪽에서 수정하면 다른쪽도 수정된다.

## 기타
[추가정보](https://ko.javascript.info/modules-intro)