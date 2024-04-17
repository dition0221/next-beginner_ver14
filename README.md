# Next - Beginner_ver14

### NextJS ver.14에 대한 입문입니다.

##### Begin NextJS ver.14

- "react": "^18"
- "react-dom": "^18"
- "next": "14.1.4"

<img src="https://img.shields.io/badge/Next.js-000?style=flat-square&logo=nextdotjs&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/>

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
- **24-03-30 : #2.7 ~ #2.10 + #3.0 ~ #3.3 / App Router (2) + Data Fetching (1)**
  - <a href="https://app.quicktype.io/" target="_blank">빠르고 쉽게 interface를 만드는 사이트</a>
  - Route Groups
    - URL주소를 생성하지 않으면서, 폴더로 파일들을 묶을 수 있는 기능
    - 사용법 : 폴더명을 소괄호로 묶어서 사용
      - ex. `(home)/page.tsx`
    - App 전체에 대한 `layout.tsx`와 `not-found.tsx`는 app 폴더 최상단에 위치해야 함
  - Layout.tsx
    - metadata와 RootLayout을 가지고 있음
    - Layout은 App 전체를 담당하지만, 특정 page에 대한 layout 생성 가능
      - layout들은 중첩됨 (상쇄 x)
      - 생성법 : 사용할 URL 폴더 내에 layout.tsx 파일을 생성
      - 사용법 : html, body 태그 등은 불필요
      - ex.
        ```
        export default function AboutUsLayout({
          children,
        }: Readonly<{
          children: React.ReactNode;
        }>) {
          return (
            <div>
              {children}
              <span>&copy; NextJS is good</span>
            </div>
          );
        }
        ```
  - Metadata
    - 내보내야하는 object 형식이며, HTML의 head 부분에 정의 됨
      - page 또는 layout에서만 정의 가능 (일반 component는 불가)
      - server component에서만 가능 (client component에서 사용 불가)
      - 여러 개의 metadata가 있을 시 병합됨
    - 기본형
      ```
      export const metadata: Metadata = {
        title: 제목,
        description: 설명,
        ......
      };
      ```
    - RootLayout에서 title에 대해 반복되는 문자열 template를 설정할 수 있음
      - 기본형
        ```
        title: {
          template: "%s 반복문자열",
          default: "기본값",
        },
        ```
      - `%s` : Page title 문자열 값이 들어가는 자리
      - `default` : 페이지가 없는 경우 등에서의 title 값
      - ex.
        ```
        title : {
          template: "%s | Next Movies",
          default: "Next Movies",
        },
        ```
    - <a href="https://nextjs.org/docs/app/building-your-application/optimizing/metadata" target="_blank">공식문서</a>
    - <a href="https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata" target="_blank">dynamic metadata 공식문서</a>
  - Dynamic Route
    - 생성법 : 폴더명을 대괄호로 묶어서 사용
      - ex. `app/movies/[id]/page.tsx`
    - props를 통해 params와 searchParams 값을 가져올 수 있음
      - ex.
        ```
        interface IMovieDetailProps {
          params: {
            id: string;
          };
        }
        export default function MovieDetail({ params: { id } }: IMovieDetailProps) {
          return <div>Movie {id}</div>;
        }
        ```
  - client component (use client)에서의 data fetch
    - API 키 등 보안요소를 숨길 수 없음
    - 로딩 상태가 존재함 (로딩 상태를 직접 구현해야 함)
  - server component에서의 data fetch
    - client component와는 다르게 `useState`, `useEffect`, 로딩 등을 사용하지 않아도 됨
      - framework가 알아서 해줌
    - NextJS가 자동으로 data를 캐싱시켜 줌 (캐싱을 위해 다른 라이브러리를 사용할 필요 x)
      - 로딩 상태가 없는 것은 아니지마, 캐싱이 있기 때문에 빠르게 느껴짐
        - 로딩 상태가 Back-End에서 이루어짐
        - 단점 : 로딩 중에는 사용자를 위한 UI가 없음
      - 첫 번째 요청에서 fetch된 캐싱 data만 받음
        - 최신 data가 필요 시 revalidation 등을 이용
    - 사용법
      1. fetch 함수를 React 컴포넌트 밖에서 정의하기
      2. React 컴포넌트는 async로 사용하며, 내에서 fetch 함수 실행하기
    - ex.
      ```
      async function getMovies() {
        return await fetch(URL).then((res) => res.json())
      }
      export default async function Home() {
        const movies = await getMovies();
        return <div>{JSON.stringify(movies)}</div>;
      }
      ```
  - Loading Component
    - server component에서 로딩 UI를 만들 수 있음
      - 콘텐츠가 로딩되는 동안 서버에서 즉시 로딩 상태를 표시하며, rendering 완료 시 새 콘텐츠가 자동으로 교체됨
    - 사용법 : `loading.tsx` 파일을 생성하여 사용 (`page.tsx` 옆에 위치해야 함)
- **24-04-02 : #3.4 ~ #3.8 / Data Fetching (2)**
  - Parallel Requests
    - 한 컴포넌트 내에서 여러 개의 API를 사용 시 순차적으로 실행되기 떄문에, 요청 시간에 대한 문제가 발생함
    - 해결 : 병렬로 요청을 동시에 실행하기
    - (React) 기본형 : `await Promise.all([요청함수1, 요청함수2, ...]);`
      - ex.
        ```
        const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
        ```
    - 단점 : 여러 개의 요청들이 모두 끝나야지만, UI를 볼 수 있음
  - Suspense
    - 여러 개의 요청들을 병렬로 동시에 시작하여, 각각의 결과에 따라 UI에 보여줌
    - (React) 기본형
      1. 각각의 API 컴포넌트를 생성하기
      2. page 컴포넌트에서 API 컴포넌트를 `<Suspense>`로 감싸주기
         - ex.
           ```
           <Suspense fallback={<h1>Loading movie info..</h1>}>
            <MovieInfo id={id} />
           </Suspense>
           <Suspense fallback={<h1>Loading movie videos..</h1>}>
            <MovieVideos id={id} />
           </Suspense>
           ```
         - `fallback` : component가 await되는 동안 표시할 메시지를 render함
         - `loading.tsx`와는 별개로 동작함
  - Error Handling
    - API 요청 error 시 App이 망가지는 것을 대신에, 다른 UI를 rendering할 수 있음
    - 기본형 : `error.tsx` 파일을 생성해 사용 (`page.tsx` 파일 옆에서 사용)
      - `"use client"`를 사용해야 함
- **24-04-12 : #4.0 ~ #4.2 / Deployment (1)**
  - CSS modules
    - NextJS에서 별도의 설치/설정 없이 CSS modules를 사용 가능
    - 먼저, global style을 설정하는 CSS 파일을 생성하여 사용
      - 파일 경로는 상관없음
      - RootLayout에서 global style을 import하여 사용
    - 사용법
      1. `파일명.module.css`로 파일 생성하기
         - 파일 경로는 상관없음
      2. [module.css] class명을 사용하여 CSS 작성하기
         - ex.
           ```
           .nav {
             background-color: red;
           }
           ```
      3. [component] CSS파일을 불러와서 className 적용하기
         - ex.
           ```
           import styles from "CSS모듈파일경로";
           <nav className={styles.nav} />
           ```
    - 장점
      1. 랜덤한 class명을 가지므로, class 충돌이 없음
      2. 다른 파일에서 중복 사용 가능
    - 단점 : 자동완성기능이 없음
- **24-04-16 : #4.3 ~ #4.6 / Deployment (2)**
  - Dynamic Metadata
    - 기본형
      ```
      export async function generateMetadata({ params, searchParams }) {
        return {
          title: 제목,
          ......,
        };
      }
      ```
    - ex.
      ```
      export async function generateMetadata({ params: { id }}) {
        constr movie = await getMovie(id);
        return {
          title: movie.title,
        };
      }
      ```
    - 같은 API를 2번 실행하지만, 데이터가 캐시에 저장하므로 상관 없음
    - <a href="https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function" target="_blank">공식문서</a>
  - Deployment (Vercel)
    - 사용법
      1. 현재 프로젝트를 GitHub에 commit 및 push하기
      2. Vercel 홈페이지에서 `Add New... - Project`를 클릭하기
      3. 배포할 프로젝트를 선택 및 설정하기
- **24-04-17 : [Code Challenge] Extra pages (1)**
