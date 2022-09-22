import styled from "styled-components"
import Text from "@components/UI/atoms/text/text"
import Button from "@components/UI/atoms/button/button"
import Theme from "@util/style/theme"

const MyPageOrderList = ({ productItem, onClickRefundEvnet }) => {
    return (
        <MyPageInfoMain>
            <MyPageInfoHeader>
                <Text type="large" context="Order List" />
            </MyPageInfoHeader>
            <MyPageInfoBody>
                {productItem.map((p) => {
                    return (
                        <StyledBodyBar key={p.name}>
                            <StyledBodyImg
                                src={`${process.env.PUBLIC_URL}/img/${p.img}`}
                            />
                            <StyledBodyContent>
                                <StyledBodyContentTitle>
                                    <Text type="default" context={p.name} />
                                </StyledBodyContentTitle>
                                <StyledBodyContentDesc>
                                    <Text type="default" context={p.date} />
                                    <Text type="default" context={p.price} />
                                </StyledBodyContentDesc>
                                <StyledBodyContentState>
                                    <Text type="default" context={p.payState} />
                                </StyledBodyContentState>
                            </StyledBodyContent>
                            <StyledBodyRefund>
                                <Button
                                    type="default"
                                    value="Refund"
                                    onClickEvent={onClickRefundEvnet}
                                />
                            </StyledBodyRefund>
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
    width: 10%;
`

const StyledBodyContent = styled.div`
    width: 40%;
`

const StyledBodyContentTitle = styled.div`
    width: 100%;
`

const StyledBodyContentDesc = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const StyledBodyContentState = styled.div`
    width: 100%;
`

const StyledBodyRefund = styled.div`
    width: 20%;
`

export default MyPageOrderList
