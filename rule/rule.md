# 폴더 및 파일

1. js

    - JavaScript
        - JavaScript 파일의 경우 소문자로 지정

2. jsx

    - jsx
        - React파일의 경우 camelCase 사용

3. 폴더

    - 폴더 이름의 경우 소문자 사용

# Programming Rule

1. 변수

    - 이름
        - carmelCase 사용.
        - boolean type의 경우 is~~~와 같이 사용
        - 변수의 이름으로 어떠한 역할 하는지 추측 가능하도록 명명.
    - var 사용 X
        - 이건 뭐 더 말할 것도 없을듯.
    - 최대한 let 사용 자제.
        - 불변성 유치 필요. 최대한 **_const_** 권장
        - let을 사용할 경우 즉시실행함수(IIFE) 활용하여 해결.
    - 세미콜론
        - 사용하지 않도록 함.
        - setup 확인
    - String
        - Double quote 사용. 추후에 eslint 설정할 것.

2. 함수

    - 이름
        - React Component 내에서 관리하는 이름의 경우 onClickEventHandler와 같이 명명
        - ex) **_handlePayButtonClick_**
    - 상위 컴포넌트에서 하위 컴포넌트로 이벤트를 전달하는 경우
        - ex) **_onPayButtonClickEvent_**
    - 굳이 컴포넌트내에 모든 함수를 정의할 필요 없음.
        - call, bind 권장
    - map, reduce, filter, forEach, some, every와 같은 JS Array 함수 최대한 활용.

3. state, props

    - 상위 컴포넌트와 하위 컴포넌트가 state나 props를 공유하게 될 경우, 이러한 state들은 상위 컴포넌트로 끌어올림.
    - props는 ReadOnly임. 절대 내려보낸 props를 변경하지 말 것.
    - 상위 컴포넌트의 함수가 하위 컴포넌트의 props로 전달되는 경우 useCallback을 사용.

4. Git & README

    - 본인이 작업하거나 변경하지 않은 File을 PR에 포함시키지 말 것.
    - 골때리는 문제 해결한거 README에 추가

5. Redux

    - Redux의 모든 state는 불변성을 유지하도록 한다.
        > "Mutable" means "changabble". If something is "immutable", it can never be changed.
    - Actions
        - Type field는 string으로 지정한다.
        - Action의 object는 다양한 Data field를 가질 수 있는데 이러한 action object의 이름은 payload라고 지정한다.
            ```
            const addTodoAction = {
                type: "todos/todoAdded",
                payload: "Buy something",
            }
            ```
    - Reducers
        - Reducer는 EventListener로서의 역할을 한다고 생각하면 쉽다. Action type에 알맞은 Event를 받고 이러한 이벤트의 처리를 담당한다.
    - Store
        - 현재 Redux에서 관리하고 있는 State 저장소.
