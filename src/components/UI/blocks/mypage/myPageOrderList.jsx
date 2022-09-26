import styled from "styled-components"
import Text from "@components/UI/atoms/text/text"
import Button from "@components/UI/atoms/button/button"
import Theme from "@util/style/theme"

const MyPageOrderList = ({ productItem, onClickDetailEvnet }) => {
    return (
        <MyPageInfoMain>
            <MyPageInfoHeader>
                <Text type="large" context="Order List" />
            </MyPageInfoHeader>
            <MyPageInfoBody>
                {productItem.map((p) => {
                    return (
                        <StyledBodyBar key={p.name}>
                            <StyledBodyImg src={p.img} />
                            <StyledBodyContent>
                                <StyledBodyContentTitle>
                                    <Text type="default" context={p.name} />
                                </StyledBodyContentTitle>
                                <StyledBodyContentTitle>
                                    <Text
                                        type="default"
                                        context={p.createdAt
                                            .split("T")
                                            .join(" ")}
                                    />
                                </StyledBodyContentTitle>
                                <StyledBodyContentDesc>
                                    <Text
                                        type="default"
                                        context={`${p.price} ￦`}
                                    />
                                </StyledBodyContentDesc>
                                <StyledBodyContentState>
                                    <Text
                                        type="default"
                                        context="Payment completion"
                                    />
                                </StyledBodyContentState>
                            </StyledBodyContent>
                            <StyledBodyDetail>
                                <Button
                                    type="default"
                                    value="Detail"
                                    onClickEvent={onClickDetailEvnet(p)}
                                />
                            </StyledBodyDetail>
                        </StyledBodyBar>
                    )
                })}
            </MyPageInfoBody>
        </MyPageInfoMain>
    )
}

const MyPageInfoMain = styled.div`
    width: 100%;
`
const MyPageInfoHeader = styled.div`
    width: 100%;
    padding-bottom: 1rem;
    font-weight: ${Theme.fontWeight.bold};
    border-bottom: 3px solid ${Theme.colors.silverGray};
`

const MyPageInfoBody = styled.div`
    width: 100%;
`

const StyledBodyBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #f9f9f9;
    margin-top: 2rem;
    margin-bottom: 1rem;
    border: 3px solid ${Theme.colors.silverGray};
`
const StyledBodyImg = styled.img`
    width: 20%;
`

const StyledBodyContent = styled.div`
    width: 100%;
`

const StyledBodyContentTitle = styled.div`
    width: 100%;
    padding-left: 1rem;
`

const StyledBodyContentDesc = styled.div`
    width: 100%;
    padding-left: 1rem;
`

const StyledBodyContentState = styled.div`
    width: 100%;
    padding-left: 1rem;
`

const StyledBodyDetail = styled.div`
    width: 20%;
`

export default MyPageOrderList
