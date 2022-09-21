import Container from "../../atoms/container/container"
import Text from "../../atoms/text/text"
import Button from "../../atoms/button/button"
import * as MyCard from "./style"

const Card = ({ name, description, price, img, onClickEvent }) => {
    return (
        <Container width="100%">
            <MyCard.StyledCardContainer>
                <MyCard.StyledCardImage
                    src={`${process.env.PUBLIC_URL}/img/${img}`}
                />
                <MyCard.StyledCardBody>
                    <Text type="large" context={name} />
                </MyCard.StyledCardBody>
                <MyCard.StyledCardBody>
                    <Text type="default" context={name} />
                </MyCard.StyledCardBody>
                <MyCard.StyledCardBody>
                    <Text type="default" context={description} />
                </MyCard.StyledCardBody>
                <MyCard.StyledCardBody>
                    <Text type="default" context={`${price} ￦`} />
                </MyCard.StyledCardBody>
                <MyCard.StyledCardFooter>
                    <Button
                        type="contrast"
                        width="auto"
                        height={100}
                        value="Detail"
                        onClickEvent={onClickEvent}
                    />
                </MyCard.StyledCardFooter>
            </MyCard.StyledCardContainer>
        </Container>
    )
}

export default Card
