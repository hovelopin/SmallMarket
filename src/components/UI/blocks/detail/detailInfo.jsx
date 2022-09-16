import Container from "@/components/UI/atoms/container/container"
import Button from "@/components/UI/atoms/button/button"
import Text from "@/components/UI/atoms/text/text"
import Select from "@/components/UI/atoms/select/select"
import styled from "styled-components"
import Theme from "@/util/style/theme"

const DetailInfo = ({
    detailItem,
    onPayButtonClickEvent,
    onToCartButtonClickEvent,
    onQuntityChangeEvent,
}) => {
    return (
        <Container width="100%">
            <DetailInfoMainContainer>
                <DetailInfoHeader>
                    <Text type="large" context="오렌지 마말레이드" />
                    <Text type="large" context={`￦ ${detailItem.price}`} />
                </DetailInfoHeader>
                <DetailInfoBody>
                    <DetailInfoContextContainer>
                        <DetailInfoContextLeft>
                            <Text type="default" context="판매자" />
                        </DetailInfoContextLeft>
                        <DetailInfoContextRight>
                            <Text type="default" context={detailItem.seller} />
                        </DetailInfoContextRight>
                    </DetailInfoContextContainer>
                    <DetailInfoContextContainer>
                        <DetailInfoContextLeft>
                            <Text type="default" context="원산지" />
                        </DetailInfoContextLeft>
                        <DetailInfoContextRight>
                            <Text type="default" context={detailItem.origin} />
                        </DetailInfoContextRight>
                    </DetailInfoContextContainer>
                    <DetailInfoContextContainer>
                        <DetailInfoContextLeft>
                            <Text type="default" context="중량/용량" />
                        </DetailInfoContextLeft>
                        <DetailInfoContextRight>
                            <Text
                                type="default"
                                context={detailItem.capacity}
                            />
                        </DetailInfoContextRight>
                    </DetailInfoContextContainer>
                    <DetailInfoContextContainer>
                        <DetailInfoContextLeft>
                            <Text type="default" context="상품설명" />
                        </DetailInfoContextLeft>
                        <DetailInfoContextRight>
                            <Text
                                type="default"
                                context={detailItem.description}
                            />
                        </DetailInfoContextRight>
                    </DetailInfoContextContainer>
                </DetailInfoBody>
                <DetailInfoFooter>
                    <DetailInfoContextLeft>
                        <Text type="default" context="수량선택" />
                    </DetailInfoContextLeft>
                    <DetailInfoContextRight>
                        <Select
                            width="4.5rem"
                            options={detailItem.quantity}
                            onChangeEvent={onQuntityChangeEvent}
                        />
                    </DetailInfoContextRight>
                </DetailInfoFooter>
            </DetailInfoMainContainer>
            <DetailInfoButton>
                <Button
                    type="default"
                    width="40%"
                    value="PAY"
                    onClickEvent={onPayButtonClickEvent}
                />
                <Button
                    type="default"
                    width="40%"
                    value="Add to cart"
                    onClickEvent={onToCartButtonClickEvent}
                />
            </DetailInfoButton>
        </Container>
    )
}

const DetailInfoMainContainer = styled.div`
    margin-right: 1rem;
`

const DetailInfoHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 2rem;
    border-bottom: 2px solid ${Theme.colors.lightGray};
`

const DetailInfoBody = styled.div`
    padding-top: 2rem;
    padding-bottom: 1rem;
`

const DetailInfoContextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    vertical-align: middle;
    border-bottom: 0.8px solid ${Theme.colors.lightGray};
`

const DetailInfoContextLeft = styled.div`
    width: 20%;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
`

const DetailInfoContextRight = styled.div`
    width: 80%;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
`

const DetailInfoFooter = styled.div`
    display: flex;
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 1rem;
`

const DetailInfoButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-right: 1rem;
    margin-top: 1rem;
`

export default DetailInfo
