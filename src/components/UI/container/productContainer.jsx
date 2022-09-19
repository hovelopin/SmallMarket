import React, { useState, useEffect, useContext } from "react"
import { useParams, useHistory } from "react-router-dom"
import styled from "styled-components"
import Container from "@components/UI/atoms/container/container"
import Carousel from "@components/UI/blocks/carousel/carousel"
import Grid from "@components/UI/atoms/grid/grid"
import Card from "@components/UI/blocks/card/card"
import Data from "@/dev/data"
import Theme from "@util/style/theme"
import { AuthStateContext } from "@/context/auth/authContext"

const ProductContainer = () => {
    const [items, setItems] = useState([])

    const { category } = useParams()
    const history = useHistory()
    const auth = useContext(AuthStateContext)
    console.log(auth)

    useEffect(() => {
        fetchFoodItems.call(this, category).then((res) => {
            console.log(res)
            setItems(res.$_foodItemListType)
        })
    }, [category])

    const handleDetailButtonClick = (item) => () => {
        history.push({
            pathname: `/detail/${item}`,
            state: {
                item: item,
            },
        })
    }

    return (
        <Container width="100%">
            <StyledItemHeaderContainer>
                <StyledItemFont>SmallMarket's items</StyledItemFont>
                <StyledItemSmallFont>
                    With SmallMarket's fresh items
                </StyledItemSmallFont>
            </StyledItemHeaderContainer>
            <StyledCarouselContainer>
                <Carousel />
            </StyledCarouselContainer>
            <StyledContainer width="100%">
                <Grid repeat={4} axis="column" gap="2rem">
                    {items.map((item) => (
                        <Card
                            key={item.uuid}
                            img={item.img}
                            uuid={item.uuid}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            onClickEvent={handleDetailButtonClick(item)}
                        />
                    ))}
                </Grid>
            </StyledContainer>
        </Container>
    )
}

function fetchFoodItems(category) {
    if (category === "vegetables") return Data.createVegetableItemData()
    else if (category === "drink") return Data.createDrinkItemType()
    else if (category === "meets") return Data.createMeatItemData()
    else if (category === "normal") return Data.createNormalItemType()
}

const StyledContainer = styled.div`
    width: 100%;
    display: grid;
    margin-top: 3rem;
    place-items: center;
`

const StyledItemHeaderContainer = styled.div`
    color: ${Theme.colors.white};
    background-color: ${Theme.colors.darkBlack};
    text-align: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
`

const StyledItemFont = styled.span`
    font-weight: bold;
    font-size: 3rem;
`

const StyledItemSmallFont = styled.p`
    font-weight: bold;
    font-size: 1.55rem;
    color: ${Theme.colors.silverGray};
`

const StyledCarouselContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 2rem;
`

export default ProductContainer
