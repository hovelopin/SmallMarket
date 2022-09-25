import styled from "styled-components"
import Text from "@components/UI/atoms/text/text"
import Carousel from "@components/UI/blocks/carousel/carousel"
import Container from "@components/UI/atoms/container/container"
import Theme from "@util/style/theme"

const PaymentInfo = ({ userState, cartItems }) => {
    return (
        <InfoWapper>
            <Container width="100%">
                <Text type="large" context="Click slide to go product detail" />
                <CarouselContainer>
                    <Carousel width="80%" height="100%" items={cartItems} />
                </CarouselContainer>
            </Container>
            <CheckedboxContainer>
                {cartItems.map((c) => (
                    <CheckedboxDiv key={c.uuid}>
                        <StyledLabel>
                            <Container width="100%" display="flex">
                                <TextContainer width="100%">
                                    <StyledSpan fontWeight="500">
                                        {c.name}
                                    </StyledSpan>
                                    <StyledP>{`${c.price} x ${c.quantity}`}</StyledP>
                                    <Text
                                        type="small"
                                        context={c.description}
                                    />
                                </TextContainer>
                                <PriceCount>
                                    {`${c.price * c.quantity} ￦`}
                                </PriceCount>
                            </Container>
                        </StyledLabel>
                    </CheckedboxDiv>
                ))}
            </CheckedboxContainer>
        </InfoWapper>
    )
}

const InfoWapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    align-items: center;
    margin-bottom: 1rem;
    padding: 1rem;
`

const StyledP = styled.p`
    display: inline-block;
    margin-left: 1rem;
`

const CheckedboxDiv = styled.div`
    width: 100%;
`
const StyledLabel = styled.div`
    width: 100%;
    background-color: ${Theme.colors.whiteGray};
    margin-bottom: 1rem;
    display: ${Theme.inputs.display};
    border: ${(props) =>
        props.border
            ? "3px solid" + Theme.colors.darkRed
            : Theme.inputs.border};
    height: 100%;
    border-radius: ${Theme.inputs.borderRadius};
`
const CheckedboxContainer = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 10%;
    margin-top: 5%;
    max-height: 25rem;
    overflow: auto;
`

const PriceCount = styled.p`
    color: ${Theme.colors.darkBlack};
    text-align: right;
    padding-right: 0.8rem;
    width: 100%;
    height: 100%;
`

const TextContainer = styled.div`
    width: 100%;
    padding-left: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
`

const ProfileContainer = styled.div`
    display: flex;
    width: 60%;
    margin-bottom: 5%;
    margin-top: 5%;
`

const StyledSpan = styled.span`
    display: inline-block;
    margin-top: 1%;
    font-size: 1.4rem;
    font-weight: ${(props) => props.fontWeight || Theme.fontWeight.medium};
    text-align: "left";
`
const CarouselContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 3rem;
    margin-bottom: 15%;
`
export default PaymentInfo
