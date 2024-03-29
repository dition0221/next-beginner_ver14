# Next - Beginner_ver14

### NextJS ver.14에 대한 입문입니다.

##### Begin NextJS ver.14

- "react": "^18"
- "react-dom": "^18"
- "next": "14.1.4"

<img src="https://img.shields.io/badge/Next.js-000?style=flat-square&logo=nextdotjs&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/>

<!-- <img src="https://img.shields.io/badge/React Hook Form-EC5990?style=flat-square&logo=reacthookform&logoColor=white"/> <img src="https://img.shields.io/badge/SWR-000?style=flat-square&logo=swr&logoColor=white"/> -->

---

- **24-03-26 : #1.2 ~ #1.6 / Introduction**
  - Library와 Framework
    - Library : 개발자가 필요한 기능을 사용할 수 있도록 제공되는 코드의 모음
      - 개발자가 원하는 아케텍처를 사용하여, 원하는 방식으로 코드를 작성함
        - 코드 내에서 사용하려고 설치하는 것이지만, 사용의 주체는 개발자 (개발자가 결정해야 함)
      - ex. ReactJS
    - Framework : App의 전체 구조를 정의하고, 개발에 필요한 뼈대를 제공하는 도구
      - 개발자가 framework의 규칙을 따라야 함
        - framework가 여러가지 결정을 개발자 대신 해주고 자동화하도록 할 수 있음
      - ex. NextJS
  - App Router
    - NextJS 14는 기존의 Pages Router와 더불어, 새로운 개념인 App Router가 등장함
      - 최신버전에서 Pages Router 사용 가능하며, 동시에도 사용 가능
  - NextJS 프로젝트를 시작하는 법
    - 자동 설치법 : `npx create-next-app@latest`
    - 수동 설치법
      1. 터미널에 `npn init -y`를 입력해 'package.json' 파일 생성하기
      2. 터미널에 `npm i react@latest next@latest react-dom@latest`를 입력해 프로젝트 설치하기
      3. 'package.json' 파일에서 script 생성하기
         - `"dev": "next dev"`
      4. `app/파일명.tsx` 화면 파일 생성하기
      5. `npm run dev` 실행하기
         - TypeScript 및 JSX 오류 등에 대해 자동으로 관련 라이브러리를 설치함
- **24-03-28**
  - _Fix: npx가 동작하지 않는 문제 해결_
    - _터미널에 `nvm use <Node.js버전>`을 입력해 Node.js 버전을 변경하여 해결_
- **24-03-29 : #2.0 ~ #2.6 / App Router (1)**
