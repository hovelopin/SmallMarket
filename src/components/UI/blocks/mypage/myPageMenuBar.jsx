import React from "react"
import Container from "@components/UI/atoms/container/container"
import Text from "@components/UI/atoms/text/text"
import Input from "@components/UI/atoms/input/input"
import Paginate from "@components/UI/blocks/paginate/paginate"
import styled from "styled-components"
import Theme from "@/util/style/theme"

const MyPageMenuBar = ({
    limit,
    page,
    offset,
    sellerItems,
    onPageChangeButtonClickEvent,
}) => {
    return (
        <Container width="100%">
            {sellerItems.slice(offset, offset + limit).map((item) => {
                return (
                    <StyledMenuBarContainer key={item.uuid}>
                        <Container width="10%">
                            <Input type="checkbox" zoom={2.25} />
                        </Container>
                        <Container width="10%">
                            <StyledMenuBarImg src={item.img} />
                        </Container>
                        <Container width="40%">
                            <StyledMenuBarContent>
                                <Text type="large" context={item.name} />
                            </StyledMenuBarContent>
                        </Container>
                        <StyledMenuBarQuantity>
                            <StyledTextBox>
                                <Text type="default" context={item.quantity} />
                            </StyledTextBox>
                        </StyledMenuBarQuantity>
                        <StyledMenuBarPrice>
                            <Text
                                type="default"
                                context={`${Number(item.price).toLocaleString(
                                    "ko-KR"
                                )} ₩`}
                            />
                        </StyledMenuBarPrice>
                    </StyledMenuBarContainer>
                )
            })}
            <Paginate
                limit={limit}
                page={page}
                total={sellerItems.length}
                onPageChangeButtonClickEvent={onPageChangeButtonClickEvent}
            />
        </Container>
    )
}

const StyledMenuBarContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    background-color: ${Theme.colors.white};
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);
`

const StyledMenuBarImg = styled.img`
    width: 100%;
`

const StyledMenuBarContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const StyledMenuBarQuantity = styled.div`
    width: 15%;
    display: flex;
    align-items: center;
`

const StyledTextBox = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
`

const StyledMenuBarPrice = styled.div`
    width: 20%;
    text-align: center;
    font-size: ${Theme.fontSizes.large};
    font-weight: ${Theme.fontWeight.bold};
`

export default MyPageMenuBar
