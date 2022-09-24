import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import styled from "styled-components"
import Select from "@components/UI/atoms/select/select"
import Container from "@components/UI/atoms/container/container"
import Carousel from "@components/UI/blocks/carousel/carousel"
import Paginate from "@components/UI/blocks/paginate/paginate"
import ProductService from "@/service/productService"
import Theme from "@util/style/theme"

const ProductContainer = () => {
    const [items, setItems] = useState([])
    const [limit, setLimit] = useState(12)
    const [page, setPage] = useState(1)
    const { category } = useParams()
    const history = useHistory()
    const options = ["8개씩 보기", "12개씩 보기", "16개씩 보기"]
    useEffect(async () => {
        const selectedItems = await ProductService.firebaseGetCategoryRequest(
            category
        )
        setItems(selectedItems)
    }, [category])

    const handleDetailButtonClick = (item) => {
        history.push({
            pathname: `/detail/${item.uuid}`,
            state: {
                item: item,
            },
        })
    }

    const handleLimitChange = (e) => {
        const newLimit = parseInt(e.target.value.replace(/[^0-9]/g, ""))
        setLimit(newLimit)
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
            <StyledContainer>
                <Select
                    options={options}
                    onChangeEvent={handleLimitChange}
                    defaultSelected="12개씩 보기"
                ></Select>
            </StyledContainer>
            <Paginate
                items={items}
                limit={limit}
                total={items.length}
                onDetailButtonClickEvent={handleDetailButtonClick}
                page={page}
                setPage={setPage}
            ></Paginate>
        </Container>
    )
}

const StyledContainer = styled.div`
    width: 10%;
    margin-top: 3%;
    margin-left: 80%;
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
