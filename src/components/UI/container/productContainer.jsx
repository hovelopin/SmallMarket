import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import styled from "styled-components"
import Container from "@components/UI/atoms/container/container"
import Carousel from "@components/UI/blocks/carousel/carousel"
import Grid from "@components/UI/atoms/grid/grid"
import Card from "@components/UI/blocks/card/card"
import ProductService from "@/service/productService"
import Theme from "@util/style/theme"

const ProductContainer = () => {
    const [items, setItems] = useState([])

    const { category } = useParams()

    const history = useHistory()

    useEffect(async () => {
        const selectedItems = await ProductService.firebaseGetCategoryRequest(
            category
        )
        setItems(selectedItems)
    }, [category])

    const handleDetailButtonClick = (item) => () => {
        history.push({
            pathname: `/detail/${item.uuid}`,
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
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            img={item.img}
                            onClickEvent={handleDetailButtonClick(item)}
                        />
                    ))}
                </Grid>
            </StyledContainer>
        </Container>
    )
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
