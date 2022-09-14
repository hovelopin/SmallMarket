import React, { useCallback } from "react"
import DetailInfo from "@/components/UI/blocks/detail/detailInfo"
import styled from "styled-components"

const DetailContainer = () => {
    const detailItem = [
        {
            uuid: 1,
            seller: "Leo",
            origin: "국내산",
            capacity: "1L",
            name: "오렌지 마말레이드",
            img: `${process.env.PUBLIC_URL}/img/defaultImg.png`,
            description:
                "우리나라라면 마트에 가면 쉽게 볼 수 있는 유자청을 생각하면 된다. 이름은 '청'이라지만 만들어놓은 결과물은 마말레이드와 같다. 뜨거운 물에 타 유자차로 먹으라지만, 식빵에 발라 먹어도 된다. ",
            quantity: [1, 2, 3, 4, 5, 6],
            price: 5000,
        },
    ]

    const handlePayButtonClick = useCallback(() => {
        console.log("pay")
    }, [])

    const handleToCartButtonClick = useCallback(() => {
        console.log("toCart")
    }, [])

    const handleQuntityChange = useCallback((e) => {
        const quantity = e.target.value
        console.log(quantity)
    }, [])

    return (
        <DetailMainConetainer>
            <DetailHeadContainer />
            <DetailBodyContainer>
                <DetailImageContainer src={detailItem[0].img} />
            </DetailBodyContainer>
            <DetailSideContainer>
                <DetailInfo
                    detailItem={detailItem[0]}
                    onPayButtonClickEvent={handlePayButtonClick}
                    onToCartButtonClickEvent={handleToCartButtonClick}
                    onQuntityChangeEvent={handleQuntityChange}
                />
            </DetailSideContainer>
        </DetailMainConetainer>
    )
}

const DetailMainConetainer = styled.div`
    width: 100%;
    height: 140vh;
`

const DetailHeadContainer = styled.div`
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
    padding-top: 6rem;
`

const DetailBodyContainer = styled.div`
    width: 30%;
    float: left;
    padding-left: 10rem;
`

const DetailImageContainer = styled.img`
    width: 100%;
`

const DetailSideContainer = styled.div`
    width: 40%;
    float: right;
    padding-right: 10rem;
`

export default DetailContainer
