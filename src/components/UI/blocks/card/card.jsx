import Container from "@components/UI/atoms/container/container"
import Text from "@components/UI/atoms/text/text"
import Button from "@components/UI/atoms/button/button"
import * as MyCard from "@components/UI/blocks/card/style"

const Card = ({ name, description, price, img, onClickEvent }) => {
    return (
        <Container width="100%">
            <MyCard.StyledCardContainer>
                <MyCard.StyledCardImage src={img} />
                <MyCard.StyledCardBody>
                    <Text type="large" context={name.substring(0, 16)} />
                </MyCard.StyledCardBody>
                <MyCard.StyledCardBody>
                    <Text
                        type="small"
                        context={
                            description.length > 20
                                ? `${description.substring(0, 18)}...`
                                : description
                        }
                    />
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
