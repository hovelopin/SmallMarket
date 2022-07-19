# 📖 SmallMarket Project

-   Client

## :clock3: Project Period

2021.09.17 ~ 2021.10.14

## Refactoring Period

`SmallMarket V2`

2022.07.19 ~ ...?

# Deploy

https://smallmarket.netlify.app

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

## TODO

```
Pay
Responsive web site
```

## Now Testing

```
Login Authorization
Socket -> Small Market SNS Testing -> Beta version.
```

## Complete

```
Main ✔
Main Design ✔
Main Cover ✔
Footer ✔
Navbar ✔
Contact ✔
About ✔
Login ( Authentication Redux, action ) ✔
Register ( Authentication Redux, action ) ✔
Cart Function ( Cart Redux, action ) ✔
Cart design ✔
Item List design ✔
Item detail design ✔
Board Post and Reads ✔
Refactoring design & bug ✔
```

## Refactoring

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
