## npm의 명령어

---

🐥 `npm prune` : 불필요한 패키지(라이브러리)를 지워준다

🐥 `npm update` : 자동으로 라이브러리 최신버전 업데이트

🐥 `npm i 라이브러리 이름@버전명` : 특정 버전의 라이브러리를 받고 싶을 때 쓴다

🐥 `npm install local web-server--global` : global 옵션은 어디서든지 해당 패키지를 쓰겠다는 뜻

​

### 생성하기

🐤 `npm start`

🐤 `npm init`

🐤 `npm dedupe` : npm의 중복된 패키지 정리

🐤 `npm docs` : 패키지에 대한 설명

​

### 조회하기

🐤 `npm root` : node_modules의 위치를 알려줌

🐤 `npm outdated` : 오래된 패키지가 있는지 알려줌. 오래되었고 package버전과 일치함 = 빨강, 오래되었고 버전이 일치하지 않음= 노랑

🐤 `npm ls` : 패키지를 조회함. 현재 설치된 패키지의 버전과 dependencies를 트리 구조로 표현

🐤 `npm search` : npm 저장소에서 패키지를 검색.

🐤 `npm owner` : 패키지의 주인이 누구인지 알려줌.

🐤 `npm bugs` : 버그가 발생했을 때 어떻게 패키지의 주인에게 연락을 취할지 알려줌.

​

### 실행하기

🐤 `npm start`

🐤 `npm stop`

🐤 `npm restart`

🐤 `npm test`

🐤 `npm run` : scripts를 실행

​

### 출시하기

🐤 `npm publish` : 패키지를 직접 출시하거나 버전 업그레이드 하기

🐤 `npm star` : 자신이 좋아하는 패키지를 표시하기
