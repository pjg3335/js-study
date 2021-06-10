## 설치 및 설정

babel을 이용할 수도 있고 typescript를 이용할 수도 있는데, typescript가 설정이 더 쉽기 때문에 이를 이용한다.

```bash
npm i typescript -g
# tsc == type script compiler
tsc --init
```

tsconfig.json 에 다음과 같이 설정

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "dist",
    "sourceMap": true, // 빌드 파일과 원본을 연결해주는 기능
    "experimentalDecorators": true, // decorator사용
    "emitDecoratorMetadata": true, // decorator에 대한 메타정보 남김 (reflect-metadata사용 시 필요)
    ...
  }
}
```

## 실행하기

```bash
# 이거 하면 현 폴더에 있는 ts파일을 컴파일 하고 dist폴더에 둠
tsc
# watch모드를 사용하면 파일 변경때 마다 tsc안해줘도 됨
# tsc -w

# 실행
node dist/index.js
```
