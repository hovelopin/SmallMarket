import DaumPostcodeEmbed from "react-daum-postcode"
import styled from "styled-components"
import Container from "@components/UI/atoms/container/container"
import Button from "@components/UI/atoms/button/button"
import Form from "@components/UI/atoms/form/form"
import LabeledInput from "@components/UI/blocks/labeledInput/labeledInput"
import Theme from "@util/style/theme"

const PaymentDetail = ({
    totalPrice,
    isPostOpen,
    address,
    zoneCode,
    errorMsg,
    userInfoFormValue,
    onChangeFormValueEvent,
    onClickPostButtonEvent,
    onPostCompleteEvent,
    onPaymentSubmitEvent,
}) => {
    return (
        <DetailWapper>
            <DetailHeadContainer>
                <DetailHeadText fontSize="2.2rem" fontWeight="bold">
                    Payment Detail
                </DetailHeadText>
                <DetailHeadText fontSize="1.4rem" fontWeight="600">
                    Complete your purchase by providing your payment details
                </DetailHeadText>
            </DetailHeadContainer>
            <Container width="100%">
                <Form onSubmitEvent={onPaymentSubmitEvent}>
                    <FormContainer>
                        <LabeledInput
                            width="100%"
                            labelText="Enter your phone number"
                            inputType="tel"
                            name="phoneNumber"
                            value={userInfoFormValue.phoneNumber}
                            placeholder="010-1234-1234"
                            onChangeEvent={onChangeFormValueEvent}
                        />
                        {errorMsg.phoneNumber && (
                            <StyledErrorText>
                                {errorMsg.phoneNumber}
                            </StyledErrorText>
                        )}
                    </FormContainer>
                    <AddressContainer>
                        <Container width="60%">
                            <LabeledInput
                                width="100%"
                                labelText="Address to be delivered"
                                inputType="text"
                                name="address"
                                value={address}
                                readOnly
                                placeholder="Click the button to find the address"
                                onChangeEvent={onChangeFormValueEvent}
                            />
                            {isPostOpen && (
                                <DaumPostcodeEmbed
                                    onComplete={onPostCompleteEvent}
                                />
                            )}
                            {errorMsg.address && (
                                <StyledErrorText>
                                    {errorMsg.address}
                                </StyledErrorText>
                            )}
                        </Container>
                        <AddressSubContainer marginTop="20px">
                            <Button
                                type="contrast"
                                bType="button"
                                height="100%"
                                width="100%"
                                value="FIND ADDRESS"
                                onClickEvent={onClickPostButtonEvent}
                            />
                        </AddressSubContainer>
                    </AddressContainer>
                    <AddressContainer>
                        <Container width="60%">
                            <LabeledInput
                                width="100%"
                                labelText="Enter your detail address"
                                inputType="text"
                                name="detailAddress"
                                value={userInfoFormValue.detailAddress}
                                placeholder="104-305"
                                onChangeEvent={onChangeFormValueEvent}
                            />
                            {errorMsg.address && (
                                <StyledErrorText>
                                    {errorMsg.address}
                                </StyledErrorText>
                            )}
                        </Container>
                        <AddressSubContainer>
                            <LabeledInput
                                width="100%"
                                labelText="Zone code"
                                inputType="text"
                                name="zoneCode"
                                value={zoneCode}
                                readOnly
                                placeholder="11741"
                                onChangeEvent={onChangeFormValueEvent}
                            />
                            {errorMsg.address && (
                                <StyledErrorText>
                                    {errorMsg.address}
                                </StyledErrorText>
                            )}
                        </AddressSubContainer>
                    </AddressContainer>
                    <Container width="100%">
                        <GridContainer>
                            <DetailHeadText fontSize="1.4rem">
                                TOTAL PRICE
                            </DetailHeadText>
                            <DetailHeadText fontSize="1.4rem" textAlign="right">
                                {`${totalPrice} ￦`}
                            </DetailHeadText>
                        </GridContainer>
                    </Container>
                    <Container width="100%">
                        <Button
                            type="default"
                            bType="submit"
                            width="100%"
                            height="4rem"
                            value={`Pay ${totalPrice} ￦`}
                        />
                    </Container>
                </Form>
            </Container>
        </DetailWapper>
    )
}

const DetailWapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
    margin-bottom: 1rem;
    padding: 1rem;
`

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

const StyledErrorText = styled.p`
    color: ${Theme.colors.darkRed};
`

export default PaymentDetail
