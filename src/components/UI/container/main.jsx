import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"
import Theme from "@util/style/theme"
import Grid from "@components/UI/atoms/grid/grid"
import Card from "@components/UI/blocks/card/card"
import ProductService from "@/service/productService"

const Main = () => {
    const [items, setItems] = useState([])

    const history = useHistory()

    useEffect(async () => {
        const res = await ProductService.firebaseGetCategoryRequest(null)
        setItems(res.slice(0, 3))
    }, [])

    const handleDetailButtonClick = (item) => () => {
        history.push({
            pathname: `/detail/${item.uuid}`,
            state: {
                item: item,
            },
        })
    }

    return (
        <React.Fragment>
            <MainContainer width="100%" height="100%">
                <TitleContainer>
                    <TitleText>Welcome to our Small Market</TitleText>
                    <SubTitleText>It's nice to meet you</SubTitleText>
                    <LinkButton to="/items">Try to shopping</LinkButton>
                </TitleContainer>
            </MainContainer>
            <InformationContainer>
                <InformationContentContainer>
                    <InformationTitle>01</InformationTitle>
                    <InformationSubTitle>High Quality</InformationSubTitle>
                    <InformationContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque dignissim magna et consectetur bibendum. Integer
                        auctor feugiat posuere.
                    </InformationContent>
                    <MoreButton to="/">More</MoreButton>
                </InformationContentContainer>
                <InformationContentContainer>
                    <InformationTitle>02</InformationTitle>
                    <InformationSubTitle>Innovations</InformationSubTitle>
                    <InformationContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque dignissim magna et consectetur bibendum. Integer
                        auctor feugiat posuere.
                    </InformationContent>
                    <MoreButton to="/">More</MoreButton>
                </InformationContentContainer>
                <InformationContentContainer>
                    <InformationTitle>03</InformationTitle>
                    <InformationSubTitle>Best Pricing</InformationSubTitle>
                    <InformationContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque dignissim magna et consectetur bibendum. Integer
                        auctor feugiat posuere.
                    </InformationContent>
                    <MoreButton to="/">More</MoreButton>
                </InformationContentContainer>
            </InformationContainer>
            <ProductContainer>
                <SubTitleText>BEST ITEMS</SubTitleText>
                <Grid repeat={3} axis="column">
                    {items.map((item) => (
                        <Card
                            key={item.uuid}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            quantity={item.quantity}
                            img={item.img}
                            onClickEvent={handleDetailButtonClick(item)}
                        />
                    ))}
                </Grid>
            </ProductContainer>
        </React.Fragment>
    )
}

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
`

const TitleContainer = styled.div`
    padding-top: 15rem;
    padding-bottom: 15rem;
    text-align: center;
    color: ${Theme.colors.white};
    background-image: url(${process.env.PUBLIC_URL}/logo/background.jpg);
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    background-size: cover;
`

const TitleText = styled.div`
    font-size: 3.25rem;
    font-weight: ${Theme.fontWeight.medium};
    font-style: italic;
    line-height: 3.25rem;
    margin-bottom: 4rem;
    font-family: "Roboto Slab";
`

const SubTitleText = styled.div`
    font-weight: ${Theme.fontWeight.medium};
    font-size: 5.25rem;
    line-height: 5.25rem;
    margin-bottom: 3rem;
    font-family: "Montserrat";
    text-transform: uppercase !important;
`

const LinkButton = styled(Link)`
    display: inline-block;
    font-weight: ${Theme.fontWeight.medium};
    font-family: "Montserrat";
    font-size: 1.5rem;
    line-height: 1.5rem;
    padding: 1.25rem 2.5rem;
    margin-top: 5rem;
    margin-bottom: 4rem;
    border: 1px solid transparent;
    border-radius: ${Theme.buttons.borderRadius};
    text-align: center;
    text-decoration: none;
    position: relative;
    color: ${Theme.colors.white};
    background-color: ${Theme.colors.lightOrange};
    text-transform: uppercase !important;
    z-index: 2;
    transition: 0.5s;
    &:hover {
        background-color: ${Theme.colors.darkOrange};
    }
`

const InformationContainer = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    background: ${Theme.colors.lightGray};
`

const InformationContentContainer = styled.div`
    width: 100%;
    height: 25rem;
    margin: 3rem;
    background-color: ${Theme.colors.white};
    box-sizing: border-box;
    padding: 1rem;
    border-radius: 10px;
    overflow: auto;
`

const InformationTitle = styled.span`
    display: block;
    padding: 20px;
    font-family: "Montserrat";
    font-size: 2.75rem;
    font-weight: ${Theme.fontWeight.medium};
    line-height: 1.5rem;
    color: ${Theme.colors.lightOrange};
`

const InformationSubTitle = styled.span`
    display: block;
    padding: 30px;
    font-family: "Montserrat";
    font-size: 2.05rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: ${Theme.colors.black};
`

const InformationContent = styled.p`
    font-size: 1.05rem;
    line-height: 2rem;
    color: ${Theme.colors.lightBlack};
`
const MoreButton = styled(Link)`
    display: inline-block;
    font-weight: ${Theme.fontWeight.medium};
    font-family: "Montserrat";
    font-size: 1.25rem;
    line-height: 1.25rem;
    padding: 0.4rem 0.6rem;
    margin-top: 1rem;
    margin-bottom: 1.2rem;
    border-bottom: 2.5px solid ${Theme.colors.black};
    color: ${Theme.colors.black};
    text-decoration: none;
    text-transform: uppercase !important;
    transition: 0.5s;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`

const ProductContainer = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin-left: auto;
`

export default Main
