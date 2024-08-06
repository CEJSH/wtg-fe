## 🎺  공사 소음을 피하고 싶은 사람들을 위한 서비스  🔍 
<br/>

###  🏗️  프로젝트 소개
이사 한 집 옆건물이 공사를 하는 상황을 피하고 싶은 사용자를 위한 서비스
- 더 나은 주거 환경을 위한 추가 옵션이 필요하다면?
- 통제할 수 있는 여지가 있다면 통제하고 싶으신 분
- 집에 있는 시간이 많으신 분
- 소음에 예민하신 분

<br/>

###  🏗️  프로젝트의 필요성

공사장 소음이 차지하는 비중이 다른 생활 소음에 비해 압도적으로 높으며,<br/> 공사장 소음 민원이 증가하고 있다는 점과 실제 사례를 바탕으로 <br/>공사 소음으로 인한 피해를 줄이면서, <br/>쾌적한 주거환경의 선택에 도움을 주기 위한 도구를 개발하고자 합니다.

<br/>

###  🏗️  기획 의도와 방향성

![img](https://github.com/CEJSH/WhereToGo_project/assets/95568006/4e6c77ba-3517-44b5-9c84-09990a756b82)

- 소음이 싫은 사람들의 이사 지도

<br/>

###  🏗️  활용한 DATA API

- [ 국토교통부 ] 건축인허가정보서비스 API
- [ KAKAO ] KAKAO MAP API

<br/>

###  🏗️  API 명세

- [API Docs](https://github.com/CEJSH/wtg-fe/wiki/%08wtg-API-DOCS)
<br/>


###  ✔ 시퀀스 다이어그램

![image](https://github.com/CEJSH/WhereToGo_project/assets/95568006/53bd76dd-5e53-43ce-abee-c278e8d4dc3f)

<br/>
###  ✔ 사용해 보기
<br/>

http://34.118.200.178:3000

<br/>
### ✔ 실행 화면

![image](https://github.com/CEJSH/WhereToGo_project/assets/95568006/ec08141e-9052-4fb9-9f27-5cca64cf0a19)

<br/>
## [프로젝트 역할]
- 풀스택 웹 개발, 기여도 100%
- Nextjs, React, TS를 이용한 프론트 서버 개발 후 배포, Node기반의 NestJs를 사용하여 API 서버 개발 후 배포, MYSQL을 이용한 데이터베이스 스키마 제작
- Typescript 도입 : 정적 타이핑 및 개발 생산성 향상
- REST API : Nest.js 환경에서의 API 서버 구축, 데이터 베이스와 프론트로의 데이터 전송 및 가공 관리
- UI/UX : Antd, tailwind-css를 사용하여 사용자 경험 향상
- KAKAO MAP API : 사용자의 검색어로 쿼리하여 받아온 KAKAO MAP services libaray API를 통해 받아온 법정동 코드를 DB에 필터링한 데이터를 다시 KAKAO MAP API를 거쳐 지도에 마커 생성 

## [성과]
- 메모이제이션을 통해 API 호출 횟수를 줄이고 렌더링을 최소화시켜 LightHouse 성능 수치 91점 달성
- tailwind-css를 사용하여 개발 생산성 증대

##  ✔ 시작가이드
###  🏗️  For building and running the application you need :
- Node.js 20.3.1
- npm 10.1.0
- mysql2 3.10.0


###  🏗️  Installation
```
# git clone https://github.com/CEJSH/wtg-fe.git
```
###  🏗️  Server
```
# cd wtg-be
# npm install
# npm run start
```

###  🏗️  Client
```
# cd wtg-fe
# npm install
# npm run start
```

<br/>

### ✔ 기술스택

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) 
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

### ✔ DEV-Tool
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

### 보완점
* 시간이 지날수록 업데이트가 필요한 데이터라 db데이터를 업데이트하는 부분을 자동화 할 수 있는 부분을 설계해 볼 것.
* 우측 리스트에서 특정 주소를 클릭하면 그 주소에 해당되는 마커로 지도의 포커스가 움직이는 기능을 KAKAO API를 적용해서 구현해 보고 싶다.
* 쿼리 성능을 개선해 보고 싶다.
