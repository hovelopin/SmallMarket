import Container from "@/components/UI/atoms/container/container"
import Button from "@/components/UI/atoms/button/button"
import Text from "@/components/UI/atoms/text/text"
import Select from "@/components/UI/atoms/select/select"
import styled from "styled-components"
import Theme from "@/util/style/theme"

const DetailInfo = ({
    detailItem,
    onPayButtonClickEvent,
    onCartButtonClickEvent,
    onQuntityChangeEvent,
}) => {
    const optionsItem = Array.from({ length: detailItem.quantity }).map(
        (_, i) => i + 1
    )

    const { name, seller, origin, description, price } = detailItem
    const detailNames = ["Seller", "Origin", "Description", "Price"]

    return (
        <Container width="100%">
            <DetailInfoMainContainer>
                <DetailInfoHeader>
                    <Text type="large" context={name} />
                </DetailInfoHeader>
                <DetailInfoBody>
                    {[seller, origin, description, price].map((item, i) => (
                        <DetailInfoContextContainer key={i}>
                            <DetailInfoContextLeft>
                                <Text type="default" context={detailNames[i]} />
                            </DetailInfoContextLeft>
                            <DetailInfoContextRight>
                                <Text type="default" context={item} />
                            </DetailInfoContextRight>
                        </DetailInfoContextContainer>
                    ))}
                </DetailInfoBody>
                <DetailInfoFooter>
                    <DetailInfoContextLeft>
                        <Text type="default" context="Quantity" />
                    </DetailInfoContextLeft>
                    <DetailInfoContextRight>
                        <Select
                            width="5rem"
                            options={optionsItem}
                            onChangeEvent={onQuntityChangeEvent}
                        />
                    </DetailInfoContextRight>
                </DetailInfoFooter>
            </DetailInfoMainContainer>
            <DetailInfoButton>
                <Button
                    type="contrast"
                    width="40%"
                    value="PAY"
                    onClickEvent={onPayButtonClickEvent}
                />
                <Button
                    type="contrast"
                    width="40%"
                    value="Add to cart"
                    onClickEvent={onCartButtonClickEvent}
                />
            </DetailInfoButton>
        </Container>
    )
}

const DetailInfoMainContainer = styled.div`
    width: 100%;
`

const DetailInfoHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 2rem;
    border-bottom: 2px solid ${Theme.colors.lightGray};
    font-weight: ${Theme.fontWeight.bold};
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
    font-weight: ${Theme.fontWeight.bold};
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
`

const DetailInfoButton = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 1rem;
    margin-top: 1rem;
`

export default DetailInfo
