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
  - NextJS Routing
    - NextJS는 `app/layout.tsx` 파일과 `app/page.tsx` 파일을 참조함
    - 컴포넌트명은 상관없으나, 파일명은 무조건 규칙을 따라야 함
  - App Routing
    - Page Routing과 비슷한 방식으로 동작함
      - 같은점 : 폴더와 파일명으로 Routing 동작
      - 다른점 : `page.tsx` 파일명만 URL로 rendering 동작
        - 'app' 폴더 내에 다른 파일이 있어도 되지만, URL로는 동작하지 않음
    - ex. `app/about-us/company/page.tsx`
  - not-found
    - 404 페이지를 커스텀할 수 있는 페이지
    - 사용법 : `app/not-found.tsx`
  - usePathname()
    - 현재 URL의 pathname을 읽을 수 있게 해주는 client component hook
      - client component에서만 사용 가능 ➡ `"use client";`를 파일의 최상단에 기입
    - 사용법 : `const 변수명 = usePathname();`
  - CSR vs SSR
    - CSR (Client Side Rendering)
      - 일반적인 React는 CSR 방식으로 동작함
      - 단점
        1. 페이지의 실제 소스코드가 비어있음 (빈 화면)
           - 브라우저가 JavaScript 파일을 다운로드하고 실행한 후에 화면이 보이기 때문
        2. SEO에 부적합
           - 검색엔진은 HTML을 보는데, CSR 방식은 소스코드가 비어있기 때문
    - SSR (Server Side Rendering)
      - NextJS는 기본적으로 SSR을 사용함
        - render : NextJS가 React components를 HTML로 변환하는 작업
        - 사용자가 처음으로 페이지에 도달했을 때, UI를 build하는 데에 JavaScript가 필요하지 않음
        - client이든 server이든, 모든 page와 component는 Back-End에서 render 됨
          - `use client` 사용 여부와 상관없음
  - Hydration
    - SSR을 통해 만든 단순 HTML을 client 측 JavaScript를 사용하여, interactive한 React component로 변환하는 과정
      - 서버 환경에서 이미 렌더링된 HTML에 React를 붙이는 것
    - 사용자가 페이지에 도달했을 때 그냥 HTML을 보며, framework는 load를 시작해 React 코드를 가져와 덧붙임
  - "use client"
    - Hydration 과정은 `"use client"`를 사용한 component에서만 발생함
      - client 측에서만 render 된다는 것을 의미하지 않음, Hydration을 의미함
    - 사용법 : 파일의 최상단에 `"use client"`를 기입
    - use client 사용 여부 : error 발생 시 사용하는 것을 권장
      - 미 사용 시 자동으로 server component가 됨
    - server component에서 DB나 data fetch에 대해 보안을 신경쓰지 않아도 됨
      - 해당 코드는 client로는 절대 가지 않기 때문
- **24-03-30 : #2.7 ~ #2.10 / App Router (2)**
