# 📖 SmallMarket Project

## :clock3: First project Period

2021.09.17 ~ 2021.10.14

## Refactoring Period

`SmallMarket V2`

2022.07.19 ~ ...?

# Proejct Start

```
## npm start
```

# :mag: Thchnical Skills

-   Library: React.js
-   Main language: Javascript ES6+, JSX
-   State manage: Redux
-   Server: webpack-dev-server (dev)
-   CSS: Post CSS
-   Deploy: netlify

## Complete

```
Main ✔
Footer ✔
Appbar ✔
Login ( Authentication Redux, action ) ✔
Register ( Authentication Redux, action ) ✔
Cart Function ( Cart Redux, action ) ✔
Cart design ✔
Item List design ✔
Item detail design ✔
Refactoring design & bug ✔
```

## Refactoring

### MUI 도입

```
컴포넌트의 유지보수성을 위해 UI 오픈소스 Material UI를 도입하기로 했다.
기존의 태그 및 컴포넌트는 하나하나 직접 작성해야 했으므로 일관성이 부족한 느낌이 있었다.
이러한 점을 보완하기 위해 오픈소스 라이브러리를 활용하도록 한다.
        먼저 불필요한 CSS파일을 삭제하면서 하나씩 바꿔나가도록 한다.
```

### navbar Refactoring

```
SmallMarket v1의 Navbar는 유지보수성 및 일반화에 있어서 매우 불편하다는 단점을 가지고 있었다.
이름을 Appbar로 바꾸고 메뉴 아이템들을 하나의 Array안에서 관리하도록 한다.
즉 Array의 요소가 추가될 때마다 메뉴의 아이템이 추가되도록 리팩토링한다.
```

### Fontaweesome의 재활용

```
매번 i 태그를 찾아서 활용하는 것보다 하나의 Icon 컴포넌트를 만들고 그 안에서 전달받은 props로 원하는 아이콘을
리턴할 수 있도록 재활용성을 증가시킨다.
```

### useCallback 도입

```
기존의 코드는 onChange 이벤트가 발생할 때마다 state가 변화되어 타이핑시 setState함수가 계속 실행됐다.
따라서 setState가 실행됨에 따라 state의 변화가 생기므로 컴포넌트는 계속해서 리렌더링 된다.
또한 리렌더링 되면서 함수 또한 재생성을 반복하게 된다. 이러한 상황을 방지하고 함수의 재사용성을 증가시키기 위해 useCallback을 사용하도록 한다.
    	const userNameChangeHandler = useCallback((event) => {
            setUserName(event.target.value)
        }, [])
```

### ItemType 및 각종 Util 설계

```
SmallMarket V1 에서는 서버에서 받아온 JSON 데이터 형태 그대로를 컴포넌트에 적용했다.
이러한 상황에서 서버의 Data spec과 프론트의 Data spec이 일치하지 않는다면 잘못된 형태의 데이터를 사용자에게 보여줄 우려가 있다.
따라서 ItemType을 설계하고 사이사이에 ErrorUtil을 활용해 데이터 spec을 맞추도록 한다.
또한 Item들의 Category가 분류되어 있지 않다. Item category의 다양성을 증가시키도록 Cateogry를 설계하도록 한다.
```

### TestData, ItemType 도입 및 ItemReducer 리팩토링

```
전에 만들었던 BackEnd를 대신해 Firebase를 도입할 생각이다. Firebase 컬렉션 설계가 완료되기 전까지 TestData를 활용하여
프로젝트 리팩토링을 진행할 생각이다. 제일 먼저 ItemReducer를 TestData로 교체하고 수정이 필요한 로직은 빠르게 수정할 생각이다.
```

### Storage, CartReducer 리팩토링

```
Stroage class를 제작하고 이를 통해 Cart에 대한 Item 항목들을 손쉽게 관리할 수 있도록 수정했다.
Cart component를 MUI의 UI를 활용해 보다 더욱 직관적인 UI로 수정했다.
```

### Login, Register, User관련 Redux 리팩토링

```
Login, Register Component를 MUI로 바꿨다. 개발용 Data에 임시 admin 계정 데이터를 생성하고, LocalStorage에 담긴 정보를 CookieStorage로 옮겼다.
또한 기존의 AuthService는 class형태로 작성이 됐는데, 사용할 때마다 객체를 생성할 필요없이 object 형태로 만들어 다른 곳에서도 언제든지
import만 한다면 사용할 수 있도록 리팩토링했다. firebase로 옮기면서 테스트 데이터를 하나씩 지워가며 실제 Data를 토대로 통신할 수 있도록
수정할 예정이다.
```
