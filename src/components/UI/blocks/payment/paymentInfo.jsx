import Container from "../../atoms/container/container"
import styled from "styled-components"
import Label from "../../atoms/label/label"
import Theme from "@/util/style/theme"
import Carousel from "../carousel/carousel"
import Text from "../../atoms/text/text"
import Input from "../../atoms/input/input"
const PaymentInfo = () => {
    const sampleItem = [
        { id: 1, value: "value1" },
        { id: 2, value: "value2" },
        { id: 3, value: "value3" },
        { id: 4, value: "value4" },
        { id: 5, value: "value5" },
    ]
    return (
        <CustomContainer width="50%" bColor={Theme.colors.whiteGray}>
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
                        <Text type="large" context="Check Your Products"></Text>
                    }
                ></Label>
            </CustomContainer>
            <CustomContainer margin="5% 0 0 0">
                <Carousel margin="0 0 10% 0"></Carousel>
                <CustomContainer margin="0 0 10% 0">
                    <Label labelText="아래는 당신이 고른 제품이다 체크를 해서 넣거나 뺄수있다 확인해라"></Label>
                </CustomContainer>
                {sampleItem.map((item) => (
                    <GridContainer margin="0 0 10px 0" fr="6fr 1fr">
                        <Input key={item.id} value={item.value}></Input>
                        <Input key={item.id} type="checkbox"></Input>
                    </GridContainer>
                ))}
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
`
const GridContainer = styled.div`
    display: grid;
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    grid-template-columns: ${(props) => props.fr || "1fr 1fr"};
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
