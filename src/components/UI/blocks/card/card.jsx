import Container from "../../atoms/container/container"
import Text from "../../atoms/text/text"
import Button from "../../atoms/button/button"
import * as MyCard from "./style"

const Card = ({ uuid, name, description, price, quantity, img }) => {
    return (
        <Container width="100%">
            <MyCard.StyledCardContainer>
                <MyCard.StyledCardImage
                    src={`${process.env.PUBLIC_URL}/img/defaultImg.png`}
                />
                <MyCard.StyledCardBody>
                    <Text type="large" context="Product title" />
                </MyCard.StyledCardBody>
                <MyCard.StyledCardBody>
                    <Text type="default" context="Product subtitle" />
                </MyCard.StyledCardBody>
                <MyCard.StyledCardBody>
                    <Text type="default" context="Product price" />
                </MyCard.StyledCardBody>
                <MyCard.StyledCardFooter>
                    <Button
                        type="contrast"
                        width="auto"
                        height={100}
                        value="Button"
                    />
                </MyCard.StyledCardFooter>
            </MyCard.StyledCardContainer>
        </Container>
    )
}

export default Card
