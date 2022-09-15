import styled from "styled-components"
import Container from "@components/UI/atoms/container/container"
import Text from "@components/UI/atoms/text/text"
import Theme from "@/util/style/theme"
import Button from "@components/UI/atoms/button/button"

const CartSidebar = ({
    productPrice,
    discountPrice,
    delivery,
    expectedPrice,
}) => {
    return (
        <Container width="100%">
            <CartSidebarMainContainer>
                <CartSidebarHeader>
                    <Text type="default" context="결제하실금액" />
                </CartSidebarHeader>
                <CartSidebarBody>
                    <CartSidebarContextContainer>
                        <CartSidebarContext>
                            <Text type="default" context="상품금액" />
                        </CartSidebarContext>
                        <CartSidebarContext>
                            <Text type="default" context="￦ 26000" />
                        </CartSidebarContext>
                    </CartSidebarContextContainer>
                    <CartSidebarContextContainer>
                        <CartSidebarContext>
                            <Text type="default" context="할인금액" />
                        </CartSidebarContext>
                        <CartSidebarContext>
                            <Text type="default" context="￦ 6000" />
                        </CartSidebarContext>
                    </CartSidebarContextContainer>
                    <CartSidebarContextContainer>
                        <CartSidebarContext>
                            <Text type="default" context="총 수량" />
                        </CartSidebarContext>
                        <CartSidebarContext>
                            <Text type="default" context="3" />
                        </CartSidebarContext>
                    </CartSidebarContextContainer>
                </CartSidebarBody>
                <CartSidebarFooter>
                    <CartSidebarContext>
                        <Text type="default" context="결제예상 금액" />
                    </CartSidebarContext>
                    <CartSidebarContext>
                        <Text type="default" context="￦ 20000" />
                    </CartSidebarContext>
                </CartSidebarFooter>
            </CartSidebarMainContainer>
            <CartSidebarButton>
                <Button type="default" width="100%" value="PAY" />
            </CartSidebarButton>
        </Container>
    )
}

const CartSidebarMainContainer = styled.div`
    margin-right: 1rem;
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);
`

const CartSidebarHeader = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-align: center;
    border-bottom: 2px solid ${Theme.colors.lightGray};
`

const CartSidebarBody = styled.div`
    padding-top: 2rem;
    padding-bottom: 1rem;
    border-bottom: 0.8px solid ${Theme.colors.lightGray};
`

const CartSidebarContextContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const CartSidebarContext = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
`

const CartSidebarFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
    padding-bottom: 1rem;
`

const CartSidebarButton = styled.div`
    margin-right: 1rem;
    margin-top: 1rem;
`

export default CartSidebar
