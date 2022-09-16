import styled from "styled-components"
import Button from "@components/UI/atoms/button/button"
import LabeledInput from "@components/UI/blocks/labeledInput/labeledInput"
import Container from "@components/UI/atoms/container/container"
import Theme from "@util/style/theme"
import useForm from "@/hooks/useForm"
import Form from "@components/UI/atoms/form/form"

const PaymentDetail = () => {
    const [deliveryValue, valueChangeHandler] = useForm({
        email: "",
        name: "",
        phoneNumber: "",
        address: "",
        detailAddress: "",
        zoneCode: "",
        order: "",
        price: "700$",
    })
    //일어나면 여기부터
    const handlePaySubmit = (e) => {
        e.preventDefault()
        console.log("ests")
    }
    return (
        <DetailWapper>
            <DetailHeadContainer>
                <DetailHeadText fontSize="2.2rem" fontWeight="bold">
                    Payment Detail
                </DetailHeadText>
                <DetailHeadText fontWeight="600">
                    Complete your purchase by providing your payment details
                </DetailHeadText>
            </DetailHeadContainer>
            <Container width="60%">
                <Form onSubmitEvent={handlePaySubmit}>
                    <FormContainer>
                        <LabeledInput
                            width="100%"
                            labelText="Enter your email"
                            inputType="text"
                            name="email"
                            value={deliveryValue.email}
                            placeholder="email@domain.topDomain"
                            onChangeEvent={valueChangeHandler}
                        />
                    </FormContainer>
                    <FormContainer>
                        <LabeledInput
                            width="100%"
                            labelText="Enter your name"
                            inputType="text"
                            name="name"
                            value={deliveryValue.name}
                            placeholder="Hong Gil Dong"
                            onChangeEvent={valueChangeHandler}
                        />
                    </FormContainer>
                    <FormContainer>
                        <LabeledInput
                            width="100%"
                            labelText="Enter your phone number"
                            inputType="text"
                            name="phoneNumber"
                            value={deliveryValue.phoneNumber}
                            placeholder="하이픈(-)을 입력하세요"
                            onChangeEvent={valueChangeHandler}
                        />
                    </FormContainer>
                    <AddressContainer>
                        <Container width="60%">
                            <LabeledInput
                                width="100%"
                                labelText="Address to be delivered"
                                inputType="text"
                                name="address"
                                value={deliveryValue.address}
                                placeholder="Click the button to find the address"
                                onChangeEvent={valueChangeHandler}
                            />
                        </Container>
                        <AddressSubContainer marginTop="20px">
                            <Button
                                type="contrast"
                                bType="button"
                                height="100%"
                                width="100%"
                                value="FIND ADDRESS"
                            />
                        </AddressSubContainer>
                    </AddressContainer>
                    <AddressContainer>
                        <Container width="60%">
                            <LabeledInput
                                width="100%"
                                labelText="Enter your Detailed Address"
                                inputType="text"
                                name="detailAddress"
                                value={deliveryValue.detailAddress}
                                placeholder="104-305"
                                onChangeEvent={valueChangeHandler}
                            />
                        </Container>
                        <AddressSubContainer>
                            <LabeledInput
                                width="100%"
                                labelText="Zone Code"
                                inputType="text"
                                name="zoneCode"
                                value={deliveryValue.zoneCode}
                                placeholder="11741"
                                onChangeEvent={valueChangeHandler}
                            />
                        </AddressSubContainer>
                    </AddressContainer>
                    <Container width="100%">
                        <GridContainer>
                            <DetailHeadText fontSize="1.4rem">
                                TOTAL PRICE
                            </DetailHeadText>
                            <DetailHeadText fontSize="1.4rem" textAlign="right">
                                {deliveryValue.price}
                            </DetailHeadText>
                        </GridContainer>
                    </Container>
                    <Container width="100%">
                        <Button
                            type="default"
                            bType="submit"
                            width="100%"
                            height="4rem"
                            value={`Pay $${deliveryValue.price}`}
                        />
                    </Container>
                </Form>
            </Container>
        </DetailWapper>
    )
}
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 1.75rem;
`
const AddressContainer = styled.div`
    display: flex;
    margin-bottom: 1.75rem;
    flex-direction: ${(props) => props.direction || "row"};
`
const AddressSubContainer = styled.div`
    width: 40%;
    height: 9%;
    align-items: right;
    margin-left: 5%;
    margin-top: ${(props) => props.marginTop || "0"};
`

const DetailHeadContainer = styled.div`
    width: 60%;
    margin-bottom: 5%;
`
const FormContainer = styled.div`
    margin-bottom: 1.75rem;
`
const DetailHeadText = styled.p`
    font-size: ${(props) => props.fontSize || Theme.fontSizes.default};
    font-weight: ${(props) => props.fontWeight || Theme.fontWeight.medium};
    text-align: ${(props) => props.textAlign || "left"};
`
const DetailWapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    align-items: center;
    margin-bottom: 5%;
`

export default PaymentDetail
