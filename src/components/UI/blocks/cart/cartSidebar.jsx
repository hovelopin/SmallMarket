import styled from "styled-components"
import Container from "@components/UI/atoms/container/container"
import Text from "@components/UI/atoms/text/text"
import Theme from "@/util/style/theme"
import Button from "@components/UI/atoms/button/button"
import AuthService from "@/service/authService"
import { useHistory } from "react-router-dom"
import CartService from "@/service/cartService"

const CartSidebar = ({ totalPrice, discount, totalQuantity }) => {
    const discountedPrice = Math.floor(totalPrice / discount)
    const userAuth = AuthService.firebaseCurrentUserReuqest()
    const history = useHistory()

    const handlePayBtnClick = async () => {
        // cart 정보 불러오기
        const cartItems = await CartService.firebaseCartInformationRequest(
            userAuth.uid
        )
        // 페이지 이동 시켜주기 카트 데이터 담아서
        history.push({
            pathname: `/payment/${userAuth.uid}`,
            state: {
                ...cartItems,
            },
        })
    }
    return (
        <Container width="100%">
            <CartSidebarMainContainer>
                <CartSidebarHeader>
                    <Text type="large" context="Receipt" />
                </CartSidebarHeader>
                <CartSidebarBody>
                    <CartSidebarContextContainer>
                        <CartSidebarContext>
                            <Text type="default" context="Total" />
                        </CartSidebarContext>
                        <CartSidebarContext>
                            <Text type="default" context={`￦ ${totalPrice}`} />
                        </CartSidebarContext>
                    </CartSidebarContextContainer>
                    <CartSidebarContextContainer>
                        <CartSidebarContext>
                            <Text type="default" context="Discount" />
                        </CartSidebarContext>
                        <CartSidebarContext>
                            <Text
                                type="default"
                                context={`￦ ${discountedPrice}`}
                            />
                        </CartSidebarContext>
                    </CartSidebarContextContainer>
                    <CartSidebarContextContainer>
                        <CartSidebarContext>
                            <Text type="default" context="Quantity" />
                        </CartSidebarContext>
                        <CartSidebarContext>
                            <Text
                                type="default"
                                context={`${totalQuantity} pcs`}
                            />
                        </CartSidebarContext>
                    </CartSidebarContextContainer>
                </CartSidebarBody>
                <CartSidebarFooter>
                    <CartSidebarContext>
                        <Text type="default" context="Total price" />
                    </CartSidebarContext>
                    <CartSidebarContext>
                        <Text
                            type="default"
                            context={`￦ ${totalPrice - discountedPrice}`}
                        />
                    </CartSidebarContext>
                </CartSidebarFooter>
            </CartSidebarMainContainer>
            <CartSidebarButton>
                <Button
                    type="default"
                    width="100%"
                    value="PAYMENT"
                    onClickEvent={handlePayBtnClick}
                />
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
    padding-left: 1rem;
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
