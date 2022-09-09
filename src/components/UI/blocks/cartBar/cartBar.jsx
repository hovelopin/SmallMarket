import Container from "../../atoms/container/container"
import Text from "../../atoms/text/text"
import Button from "../../atoms/button/button"
import Icon from "../../../../icon/icon"
import * as MyCart from "./style"

const CartBar = ({
    uuid,
    number,
    name,
    description,
    img,
    price,
    quantity,
    onAddButtonClickEvent,
    onMinusButtonClickEvent,
    onDeleteButtonClickEvent,
}) => {
    return (
        <Container width="100%">
            <MyCart.StyledCartContainer>
                <Container width="15%">
                    <MyCart.StyledCartIcon>
                        <Button
                            type="contrast"
                            width="auto"
                            value="x"
                            onClickEvent={onDeleteButtonClickEvent}
                        />
                    </MyCart.StyledCartIcon>
                </Container>
                <Container width="10%">
                    <MyCart.StyledCartImg src={img} />
                </Container>
                <Container width="45%">
                    <MyCart.StyledCartContent>
                        <Text type="large" context={name} />
                        <Text type="default" context={description} />
                    </MyCart.StyledCartContent>
                </Container>
                <Container width="5%">
                    <MyCart.StyledCartIcon>
                        <Button
                            type="black"
                            width="auto"
                            value="+"
                            onClickEvent={onAddButtonClickEvent}
                        />
                    </MyCart.StyledCartIcon>
                </Container>
                <Container width="5%">
                    <MyCart.StyledCartCount>
                        <Text type="default" context={quantity} />
                    </MyCart.StyledCartCount>
                </Container>
                <Container width="5%">
                    <MyCart.StyledCartIcon>
                        <Button
                            type="black"
                            width="auto"
                            value="-"
                            onClickEvent={onMinusButtonClickEvent}
                        />
                    </MyCart.StyledCartIcon>
                </Container>
                <Container width="10%">
                    <MyCart.StyledCartCount>
                        <Text type="default" context={`${price}원`} />
                    </MyCart.StyledCartCount>
                </Container>
                <Container width="5%">
                    <MyCart.StyledCartIcon>
                        <Icon name="grip" />
                    </MyCart.StyledCartIcon>
                </Container>
            </MyCart.StyledCartContainer>
        </Container>
    )
}

export default CartBar
