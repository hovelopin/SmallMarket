import Container from "@components/UI/atoms/container/container"
import Text from "@components/UI/atoms/text/text"
import Button from "@components/UI/atoms/button/button"
import Input from "@components/UI/atoms/input/input"
import IconButton from "@components/UI/blocks/iconButton/iconButton"
import styled from "styled-components"
import Theme from "@/util/style/theme"

const CartBar = ({
    checked,
    uuid,
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
            <StyledCartContainer>
                <Container width="5%">
                    <Input type="checkbox" zoom={2.25} />
                </Container>
                <Container width="10%">
                    <StyledCartImg src={img} />
                </Container>
                <Container width="45%">
                    <StyledCartContent>
                        <Text type="large" context={name} />
                        <Text type="small" context={description} />
                    </StyledCartContent>
                </Container>
                <StyledCartQuantity>
                    <Button
                        type="black"
                        width="3rem"
                        value="+"
                        onClickEvent={onAddButtonClickEvent(uuid)}
                    />
                    <StyledTextBox>
                        <Text type="default" context={quantity} />
                    </StyledTextBox>
                    <Button
                        type="black"
                        width="3rem"
                        value="-"
                        onClickEvent={onMinusButtonClickEvent(uuid)}
                    />
                </StyledCartQuantity>
                <StyledCartPrice>
                    <Text type="default" context={`￦ ${price}`} />
                </StyledCartPrice>
                <StyledCartIcon>
                    <IconButton
                        type="black"
                        width="auto"
                        name="trash"
                        onClickEvent={onDeleteButtonClickEvent(uuid)}
                    />
                </StyledCartIcon>
            </StyledCartContainer>
        </Container>
    )
}

const StyledCartContainer = styled.div`
    width: 95%;
    display: flex;
    padding-left: 1rem;
    margin-left: 1rem;
    align-items: center;
    justify-content: space-between;
    background-color: ${Theme.colors.white};
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);
`

const StyledCartImg = styled.img`
    width: 100%;
`

const StyledCartContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const StyledCartQuantity = styled.div`
    width: 15%;
    display: flex;
    align-items: center;
`

const StyledTextBox = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
`

const StyledCartPrice = styled.div`
    width: 10%;
    text-align: center;
    font-size: ${Theme.fontSizes.large};
    font-weight: ${Theme.fontWeight.bold};
`

const StyledCartIcon = styled.div`
    width: 10%;
    text-align: center;
    font-size: ${Theme.fontSizes.large};
`

export default CartBar
