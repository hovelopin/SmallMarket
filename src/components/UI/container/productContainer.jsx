import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import styled from "styled-components"
import usePaginate from "@/hooks/usePaginate"
import Select from "@components/UI/atoms/select/select"
import Container from "@components/UI/atoms/container/container"
import Carousel from "@components/UI/blocks/carousel/carousel"
import Paginate from "@components/UI/blocks/paginate/paginate"
import Grid from "@components/UI/atoms/grid/grid"
import Card from "@components/UI/blocks/card/card"
import Theme from "@util/style/theme"
import ProductService from "@/service/productService"

const ProductContainer = () => {
    const [items, setItems] = useState([])

    const [pageValue, handlePageValueChange] = usePaginate({
        limit: 12,
        page: 1,
    })

    const { category } = useParams()
    const history = useHistory()

    const { limit, page } = pageValue
    const options = ["View 12 each", "View 16 each", "View 20 each"]
    const offset = (page - 1) * limit

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

    const handlePageChangeButtonClick = (changePage) => () => {
        handlePageValueChange(changePage)
    }

    const handleLimitChange = (e) => {
        const newLimit = parseInt(e.target.value.replace(/[^0-9]/g, ""))
        handlePageValueChange({ name: "limit", value: newLimit })
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
                <Carousel width="60" height="100%" items={items.slice(0, 8)} />
            </StyledCarouselContainer>
            <StyledContainer>
                <Select options={options} onChangeEvent={handleLimitChange} />
            </StyledContainer>
            <StyledProductContainer>
                <Grid repeat={4} axis="column" gap="2rem">
                    {items.slice(offset, offset + limit).map((item) => (
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
            </StyledProductContainer>
            <Paginate
                limit={limit}
                total={items.length}
                page={page}
                onPageChangeButtonClick={handlePageChangeButtonClick}
            />
        </Container>
    )
}

const StyledContainer = styled.div`
    width: 10%;
    margin-top: 3%;
    margin-left: 80%;
`
const StyledProductContainer = styled.div`
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
