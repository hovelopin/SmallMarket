import styled from "styled-components"
import Label from "@components/UI/atoms/label/label"
import Text from "@components/UI/atoms/text/text"
import Button from "@components/UI/atoms/button/button"
import LabeledInput from "@components/UI/blocks/labeledInput/labeledInput"
import Theme from "@util/style/theme"
import { useState } from "react"
const PaymentDetail = (fullAddress, zoneCode) => {
    const event1 = () => {}
    const event2 = () => {}
    const [srt, setSrt] = useState("")
    return (
        <CustomContainer width="50%" bColor={Theme.colors.whiteGray}>
            <CustomContainer margin="5% 5% 5% 5%">
                <CustomContainer margin="0 0 2% 0">
                    <Text type="large" context="Payment Datails"></Text>
                </CustomContainer>
                <CustomContainer margin="0 0 3% 0">
                    <Text
                        type="default"
                        context="Complete your purchase by providing your payment details"
                    ></Text>
                </CustomContainer>
                <InputContainer>
                    <LabeledInput
                        width="100%"
                        labelText="Email address"
                        inputType="text"
                        placeholder="enter your email"
                        name="email"
                    ></LabeledInput>
                    <LabeledInput
                        width="100%"
                        labelText="Name"
                        inputType="text"
                        placeholder="박재현 짱짱맨"
                        name="name"
                    ></LabeledInput>
                    <LabeledInput
                        width="100%"
                        labelText="Phone number"
                        inputType="text"
                        placeholder="010-0000-0000"
                        name="phoneNumber"
                    ></LabeledInput>
                    <GridContainer fr="2fr 1fr">
                        <LabeledInput
                            width="100%"
                            labelText="Full address"
                            name="fullAddress"
                            value={srt}
                            onChangeEvent={event1}
                            readOnly
                        ></LabeledInput>
                        <CustomContainer width="100%" margin="20px 0 0 0">
                            <Button
                                value="Address search"
                                width="100%"
                                name="fullAddressBtn"
                                onClickEvent={event1}
                            ></Button>
                        </CustomContainer>
                    </GridContainer>
                    <GridContainer fr="2fr 1fr">
                        <LabeledInput
                            width="100%"
                            labelText="Extra address"
                            inputType="text"
                            name="extraAddress"
                        ></LabeledInput>
                        <LabeledInput
                            width="100%"
                            labelText="ZoneCode"
                            inputType="text"
                            name="zoneCode"
                            value={srt}
                            onChangeEvent={event2}
                            readOnly
                        ></LabeledInput>
                    </GridContainer>
                    <LabeledInput
                        width="100%"
                        labelText="Additional order"
                        placeholder="Additional order"
                        inputType="text"
                        name="additionalOrder"
                    ></LabeledInput>
                </InputContainer>
                <CustomContainer margin="2% 0 0 0">
                    <GridContainer fr="6fr 1fr">
                        <Label labelText="Products price"></Label>
                        <Label labelText="here price props"></Label>
                    </GridContainer>
                </CustomContainer>
                <CustomContainer margin="2% 0 0 0">
                    <GridContainer fr="6fr 1fr">
                        <Label labelText="Delivery price"></Label>
                        <Label labelText="here price props"></Label>
                    </GridContainer>
                </CustomContainer>
                <CustomContainer margin="2% 0 5% 0">
                    <GridContainer fr="6fr 1fr">
                        <Label labelText="Total price"></Label>
                        <Label labelText="here price props"></Label>
                    </GridContainer>
                </CustomContainer>
                <Button
                    width="100%"
                    value="Pay!"
                    onClickEvent={event1}
                ></Button>
            </CustomContainer>
        </CustomContainer>
    )
}
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: ${(props) => props.fr || "1fr 1fr"};
`
const CustomContainer = styled.div`
    width: ${(props) => props.width};
    heihht: ${(props) => props.heihht};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    background-color: ${(props) => props.bColor};
`

const InputContainer = styled.div`
    margin-top: 1rem;
`
export default PaymentDetail
