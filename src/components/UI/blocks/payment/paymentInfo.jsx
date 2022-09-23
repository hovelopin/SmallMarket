import styled from "styled-components"
import Text from "@components/UI/atoms/text/text"
import Carousel from "@components/UI/blocks/carousel/carousel"
import Container from "@components/UI/atoms/container/container"
import Theme from "@/util/style/theme"
import { useState } from "react"

const PaymentInfo = ({ cartItems }) => {
    const [checked, setChecked] = useState(true)
    const checkChangeHandler = () => {
        setChecked((prev) => !prev)
    }
    console.log(cartItems)
    return (
        <InfoWapper>
            <ProfileContainer>
                <ProfileImgContainer>
                    <ProfileImg
                        src={`${process.env.PUBLIC_URL}/img/maincover.png`}
                    />
                </ProfileImgContainer>
                <StyledSpan>VELO</StyledSpan>
            </ProfileContainer>
            <Container width="60%">
                <StyledSpan fontWeight="600">
                    Click slide to go product detail
                </StyledSpan>
                <CarouselContainer>
                    <Carousel></Carousel>
                </CarouselContainer>
            </Container>
            <Container width="60%">
                <Text
                    type="default"
                    context="아래는 당신이 고른물건이다. 체크해체하면 물건이 빠진다.
                    한 두줄정도 내용이 들어가면 좋을거 같다"
                />
            </Container>
            <CheckedboxContainer>
                <CheckedboxDiv>
                    <StyledInput
                        type="checkbox"
                        id="scales2"
                        name="scales2"
                        checked={checked}
                        onChange={checkChangeHandler}
                    />
                    <StyledLabel htmlFor="scales2" border={checked}>
                        <Container display="flex">
                            <Container width="50%">
                                <CheckerContainer>
                                    <Checker isChecked={checked}></Checker>
                                </CheckerContainer>
                                <StyledSpan fontWeight="500">
                                    Scales2
                                </StyledSpan>
                                <StyledP>15000$ x 5</StyledP>
                            </Container>
                            <Container width="50%">
                                <PriceCount>15000$ x 5</PriceCount>
                            </Container>
                        </Container>
                    </StyledLabel>
                </CheckedboxDiv>
                <CheckedboxDiv>
                    <StyledInput
                        type="checkbox"
                        id="scales2"
                        name="scales2"
                        checked={checked}
                        onChange={checkChangeHandler}
                    />
                    <StyledLabel htmlFor="scales2" border={checked}>
                        <Container display="flex">
                            <Container width="50%">
                                <CheckerContainer>
                                    <Checker isChecked={checked}></Checker>
                                </CheckerContainer>
                                <StyledSpan fontWeight="500">
                                    Scales2
                                </StyledSpan>
                                <StyledP>15000$ x 5</StyledP>
                            </Container>
                            <Container width="50%">
                                <PriceCount>15000$ x 5</PriceCount>
                            </Container>
                        </Container>
                    </StyledLabel>
                </CheckedboxDiv>
                <CheckedboxDiv>
                    <StyledInput
                        type="checkbox"
                        id="scales2"
                        name="scales2"
                        checked={checked}
                        onChange={checkChangeHandler}
                    />
                    <StyledLabel htmlFor="scales2" border={checked}>
                        <Container display="flex">
                            <Container width="50%">
                                <CheckerContainer>
                                    <Checker isChecked={checked}></Checker>
                                </CheckerContainer>
                                <StyledSpan fontWeight="500">
                                    Scales2
                                </StyledSpan>
                                <StyledP>15000$ x 5</StyledP>
                            </Container>
                            <Container width="50%">
                                <PriceCount>15000$ x 5</PriceCount>
                            </Container>
                        </Container>
                    </StyledLabel>
                </CheckedboxDiv>
            </CheckedboxContainer>
        </InfoWapper>
    )
}
const StyledP = styled.p`
    margin: 0 auto;
    margin-left: 12%;
`
const StyledInput = styled.input`
    display: none;
`
const CheckedboxDiv = styled.div`
    margin-bottom: 1.2rem;
    width: 99%;
`
const CheckerContainer = styled.div`
    margin: 10px 10px 10px 10px;
    width: 12px;
    height: 12px;
    display: inline-block;
`
const Checker = styled.span`
    display: inline-block;
    width: 12px;
    height: 12px;
    border: ${(props) =>
        props.isChecked ? "2px solid" + Theme.colors.darkRed : "none"};
    background-color: ${(props) =>
        props.isChecked ? Theme.colors.white : Theme.colors.silverGray};
    border-radius: 50%;
`
const StyledLabel = styled.label`
    background-color: ${Theme.colors.whiteGray};
    margin-bottom: 2%;
    width: 100%;
    display: ${Theme.inputs.display};
    border: ${(props) =>
        props.border
            ? "3px solid" + Theme.colors.darkRed
            : Theme.inputs.border};
    height: 5.2rem;
    border-radius: ${Theme.inputs.borderRadius};
`
const CheckedboxContainer = styled.div`
    width: 60%;
    height: auto;
    margin-bottom: 10%;
    margin-top: 5%;
    max-height: 25rem;
    overflow: scroll;
`

const PriceCount = styled.p`
    color: ${Theme.colors.darkBlack};
    text-align: right;
    width: 100%;
    height: 100%;
`
const InfoWapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    align-items: center;
    margin-bottom: 5%;
`
const ProfileContainer = styled.div`
    display: flex;
    width: 60%;
    margin-bottom: 5%;
    margin-top: 5%;
`
const ProfileImgContainer = styled.div`
    border-radius: 70%;
    overflow: hidden;
    width: 3rem;
    height: 3rem;
`
const ProfileImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const StyledSpan = styled.span`
    margin-top: 1%;
    margin-left: 2%;
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
