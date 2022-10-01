# 📖 SmallMarket Project

SmallMarket은 소상공인이 직접 직거래를 할 수 있는 쇼핑몰 입니다.

중간의 불필요한 거래를 최소화하여 최적화된 가격에 거래를 할 수 있도록 도와줍니다.

## :clock3: First project Period

Smallmarket V1: 2021.09.17 ~ 2021.10.14
SmallMarket V2: 2022.09.05 ~ 2022.09.29

## Refactoring Period

`SmallMarket V2`

2022.09.05 ~ 2022.09.29

# Proejct Start

```
## npm start
## Release: https://smallmarket.netlify.app
```

# Team

```
FrontEnd: FoxMon(김준호), Leo(이상원), Velo(박재현), hovelopin(김호진)
```

# :mag: Thchnical Skills

-   Library: React.js ( React hook )
-   Open source: Kakao pay api, React-daum-post, Fontawesome icon, axios
-   Main language: Javascript ES6+, JSX
-   Server & Database: firebase
-   Style: Styled Component
-   Design pattern: Atomic design pattern > 3 단계로 분리 ( atoms, blocks, container )
-   Deploy: netlify

# Directory

```
📦public
┣ 📂img
┣ 📂logo
📦src
┣ 📂components
┣ ┣ 📂router
┃ ┣ 📂UI
┃ ┃ ┣ 📂atoms
┃ ┃ ┣ 📂blocks
┃ ┃ ┣ 📂container
┣ 📂dev
┣ 📂hooks
┣ 📂icon
┣ 📂service
┣ 📂storage
┣ 📂rule
┣ 📂type
┣ 📂setup
┣ 📂util
┃ ┣ 📂style
┃ ┣ 📂validation
```

## Complete

```

Main ✔
Header ✔
Footer ✔
Signin, Signout ✔
Register, Check duplicate email, Confirm password ✔
Edit user information ✔
Unregister ✔
Seller page ✔
My page ✔
Admin page => Check user list and block user ✔
Item list & detail & divide item category ✔
Item Search ✔
Pagination ✔
Add to cart, remove cart, cart drag drop ✔
Payment page, Kakao pay api ✔
Refactoring design & bug ✔

```

## Refactoring -> SmallMarket V2

1년 전 우리에게 첫 수상 경력을 가지게 해준 SmallMarket V1. 그만큼 우리에게 많은 애정이 가는 프로젝트.

더욱 향상된 우리의 실력을 통해 새로운 디자인 패텬, 그리고 추가된 팀원과 함께 리팩토링을 하기로 결정했다.

### Atomic design pattern

```

기존의 SmallMarket v1 은 각각의 컴포넌트마다 모듈화 된 css 파일이 한 개 씩 존재했다.

따라서 컴포넌트마다 팀의 공통된 style을 갖기가 매우 힘들었다.

무엇보다도 우리 프로젝트 팀에서 사용하는 각각의 컴포넌트가 재사용되지 않는 것들이 많이 존재했다.

새로운 Input, Button을 추가할 때마다 해당 태그들이 가져야 하는 이벤트들의 공통성이 떨어졌고 새로운 페이지를

구성하기 위해선 그 페이지만의 독창적인 디자인을 필요로 했다. 이러한 단점을 보완하기 위해

Atomic design pattern을 우리만의 규칙을 통해 도입하기로 했다.
( 물론 제대로 적용이 됐는지는,,, 잘 모르겠다. )

```

### Service logic 분리 및 Eslint, Prettier

```

팀 내의 코딩 가이드라인을 정립하고 이를 지켜가며 다른 사람이 작업할 때 더욱 이해하기 쉽도록 우리만의 규칙을 정립했다.

또한 ESLint 및 Prettier를 통해 코드의 일관성 및 통일성을 증가 시켰다.

우리의 Service logic은 Container 안에서 작성하도록 규칙을 만들었다.

```
