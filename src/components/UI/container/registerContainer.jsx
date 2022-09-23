import { useState } from "react"
import { useHistory } from "react-router-dom"
import useForm from "@/hooks/useForm"
import useModal from "@/hooks/useModal"
import styled from "styled-components"
import Text from "@components/UI/atoms/text/text"
import Form from "@components/UI/atoms/form/form"
import Button from "@components/UI/atoms/button/button"
import LabeledInput from "@components/UI/blocks/labeledInput/labeledInput"
import Select from "@components/UI/atoms/select/select"
import Modal from "@components/UI/blocks/modal/modal"
import Theme from "@util/style/theme"
import Validation from "@util/validation/validation"
import AuthService from "@/service/authService"

const RegisterContainer = () => {
    const [customerType, setCustomertype] = useState("Customer")
    const [isEmailChecked, setIsEmailChecked] = useState(false)
    const [modalMsg, setModalMsg] = useState("")
    const [registerFormValue, handleFormValueChange] = useForm({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    })

    const [isOpen, handleOpenButtonClick, handleCloseButtonClick] =
        useModal(false)

    const history = useHistory()

    const options = ["Customer", "Seller"]
    const { email, username, password, confirmPassword } = registerFormValue
    const isValidEmail = Validation.validateEmail(email)
    const isValidUsernme = Validation.validateUsername(username)
    const isValidPassword = Validation.validatePassword(password)
    const isValidConfirmPassword = password === confirmPassword

    const handleRegisterSubmit = async (e) => {
        e.preventDefault()
        const isValidRegisterInformation = Validation.validateAll([
            isValidEmail,
            isValidUsernme,
            isValidPassword,
            isValidConfirmPassword,
        ])
        if (!isValidRegisterInformation || !isEmailChecked) {
            setModalMsg("Please check your information")
            handleOpenButtonClick(true)
            return
        }
        const { email, username, password } = registerFormValue
        const res = await AuthService.firebaseRegiserRequest(
            username,
            password,
            email,
            customerType
        )
        if (res) history.push("/login")
    }

    const handleEmailCheckClick = async () => {
        const { email } = registerFormValue
        const res = await AuthService.firebaseEmailCheckRequest(email)
        if (!res) {
            setIsEmailChecked(true)
            return
        }
        setIsEmailChecked(false)
    }

    const handleSelectChange = (e) => {
        const { value } = e.target
        setCustomertype(value)
    }

    const handleLoginButtonClick = () => {
        history.push("/login")
    }

    return (
        <StyledWrapper>
            <StyledContainer>
                <StyledTextContainer>
                    <Text type="default" context="ACCOUNT REGISTER" />
                </StyledTextContainer>
                <Form onSubmitEvent={handleRegisterSubmit}>
                    <StyledFormContainer>
                        <LabeledInput
                            width="100%"
                            labelText="Email"
                            inputType="email"
                            name="email"
                            value={registerFormValue.email}
                            placeholder="Please enter your email"
                            onChangeEvent={handleFormValueChange}
                        />
                        {!isValidEmail && (
                            <StyledErrorText>
                                Invalid password format
                            </StyledErrorText>
                        )}
                        <StyledEmailButtonContainer>
                            <Button
                                type="contrast"
                                bType="button"
                                width="100%"
                                value="EMAIL DUPLICATE CHECK"
                                onClickEvent={handleEmailCheckClick}
                            />
                        </StyledEmailButtonContainer>
                        {isEmailChecked === false ? (
                            <StyledErrorText>
                                Email duplicate check
                            </StyledErrorText>
                        ) : (
                            <StyledErrorText color="green">
                                Success
                            </StyledErrorText>
                        )}
                    </StyledFormContainer>
                    <StyledFormContainer>
                        <LabeledInput
                            width="100%"
                            labelText="Username"
                            inputType="text"
                            name="username"
                            value={registerFormValue.username}
                            placeholder="Please enter your username"
                            onChangeEvent={handleFormValueChange}
                        />
                        {!isValidUsernme && (
                            <StyledErrorText>
                                Invalid username format
                            </StyledErrorText>
                        )}
                    </StyledFormContainer>
                    <StyledFormContainer>
                        <LabeledInput
                            width="100%"
                            labelText="Password"
                            inputType="password"
                            name="password"
                            value={registerFormValue.password}
                            placeholder="Please enter your password"
                            onChangeEvent={handleFormValueChange}
                        />
                        {!isValidPassword && (
                            <StyledErrorText>
                                8 to 15 more special characters
                            </StyledErrorText>
                        )}
                    </StyledFormContainer>
                    <StyledFormContainer>
                        <LabeledInput
                            width="100%"
                            labelText="Confirm Password"
                            inputType="password"
                            name="confirmPassword"
                            value={registerFormValue.confirmPassword}
                            placeholder="Please enter your password"
                            onChangeEvent={handleFormValueChange}
                        />
                        {!isValidConfirmPassword && (
                            <StyledErrorText>
                                Please check your password
                            </StyledErrorText>
                        )}
                    </StyledFormContainer>
                    <StyledFormContainer>
                        <Select
                            options={options}
                            onChangeEvent={handleSelectChange}
                        />
                    </StyledFormContainer>
                    <StyledButtonContainer>
                        <Button
                            type="default"
                            bType="submit"
                            width="100%"
                            value="REGISTER"
                        />
                    </StyledButtonContainer>
                    <StyledButtonContainer>
                        <Button
                            type="default"
                            bType="button"
                            width="100%"
                            value="Login"
                            onClickEvent={handleLoginButtonClick}
                        />
                    </StyledButtonContainer>
                </Form>
            </StyledContainer>
            <Modal isOpen={isOpen} onClickEvent={handleCloseButtonClick}>
                <StyledImgContainer
                    src={`${process.env.PUBLIC_URL}/img/logo.png`}
                />
                <Text context={modalMsg} />
            </Modal>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: ${Theme.colors.lightGray};
`

const StyledContainer = styled.div`
    width: 500px;
    height: auto;
    margin: 0 auto;
    padding: 1rem;
    background-color: ${Theme.colors.white};
`

const StyledTextContainer = styled.div`
    padding-top: 1.25rem;
    padding-bottom: 2rem;
`

const StyledFormContainer = styled.div`
    margin-bottom: 1.75rem;
`

const StyledEmailButtonContainer = styled.div`
    display: inline-block;
    width: 100%;
    margin-top: 1.25rem;
`

const StyledErrorText = styled.p`
    color: ${(props) => (props.color ? props.color : Theme.colors.darkRed)};
`

const StyledImgContainer = styled.img`
    display: block;
    width: 70%;
    margin: 0 auto;
    padding-bottom: 2rem;
`

const StyledButtonContainer = styled.div`
    margin-bottom: 0.5rem;
`

export default RegisterContainer
