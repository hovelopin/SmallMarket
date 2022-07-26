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
            - ex) **_onNameButtonClickEventHandler_**
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
