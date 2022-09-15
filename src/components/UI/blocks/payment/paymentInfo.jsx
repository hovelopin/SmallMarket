import styled from "styled-components"
import Label from "@components/UI/atoms/label/label"
import Text from "@components/UI/atoms/text/text"
import Input from "@components/UI/atoms/input/input"
import Carousel from "@components/UI/blocks/carousel/carousel"
import Container from "@components/UI/atoms/container/container"
import Theme from "@/util/style/theme"
const PaymentInfo = () => {
    const event3 = () => {}
    const sampleItem = [
        { id: 11, value: "value1" },
        { id: 12, value: "value2" },
        { id: 13, value: "value3" },
        { id: 14, value: "value4" },
        { id: 15, value: "value5" },
        { id: 16, value: "value1" },
        { id: 17, value: "value2" },
        { id: 18, value: "value3" },
        { id: 19, value: "value4" },
        { id: 20, value: "value5" },
    ]
    return (
        <CustomContainer width="50%" bColor={Theme.colors.whiteGray}>
            <CustomContainer margin="5% 5% 5% 5%">
                <CustomContainer margin="0 0 5% 0" padding="10px 0 0 0">
                    <GridContainer fr="0.2fr 2fr">
                        <ProfileContiner>
                            <ProfileImg
                                src={`${process.env.PUBLIC_URL}/img/maincover.png`}
                            ></ProfileImg>
                        </ProfileContiner>
                        <CustomContainer padding="0.8rem 0 0 0">
                            <Label labelText="USER NAME"></Label>
                        </CustomContainer>
                    </GridContainer>
                </CustomContainer>
                <CustomContainer>
                    <Label
                        labelText={
                            <Text
                                type="large"
                                context="Check Your Products"
                            ></Text>
                        }
                    ></Label>
                </CustomContainer>
                <CustomContainer margin="5% 0 0 0">
                    <Carousel margin="0 0 10% 0"></Carousel>
                    <CustomContainer margin="0 0 10% 0">
                        <Label labelText="아래는 당신이 고른 제품이다 체크를 해서 넣거나 뺄수있다 확인해라"></Label>
                    </CustomContainer>
                    <CustomContainer maxHeight="20rem" overFlow="scroll">
                        {sampleItem.map((e) => (
                            <CustomContainer
                                key={e.id}
                                display="grid"
                                width="100%"
                            >
                                <StyledLabel>{e.value}</StyledLabel>
                                <Input
                                    key={e.id}
                                    type="checkbox"
                                    onChangeEvent={event3}
                                ></Input>
                            </CustomContainer>
                        ))}
                    </CustomContainer>
                </CustomContainer>
            </CustomContainer>
        </CustomContainer>
    )
}

const CustomContainer = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    background-color: ${(props) => props.bColor};
    max-height: ${(props) => props.maxHeight};
    overflow: ${(props) => props.overFlow};
    dispaly: ${(props) => props.display};
`
const GridContainer = styled.div`
    display: grid;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    grid-template-columns: ${(props) => props.fr || "1fr 1fr"};
`

const StyledLabel = styled.label`
    outline: none;
    width: 80%;
    border: ${Theme.inputs.border};
    border-radius: ${Theme.inputs.borderRadius};
    box-sizing: ${Theme.inputs.boxSizing};
    padding: ${Theme.inputs.padding};
    display: ${Theme.inputs.display};
    background-color: ${Theme.colors.white};
`
const ProfileContiner = styled.div`
    margin-left: 5%;
    width: 3rem;
    height: 3rem;
    border-radius: 70%;
    overflow: hidden;
`
const ProfileImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export default PaymentInfo
