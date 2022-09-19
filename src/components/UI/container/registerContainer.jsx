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
    const [customerType, setCustomertype] = useState("Seller")
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
        if (!isValidRegisterInformation) {
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
        if (res.accessToken) history.push("/login")
    }

    const handleSelectChange = (e) => {
        const { value } = e.target
        setCustomertype(value)
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
                                Invalid password format
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
                    <Button
                        type="default"
                        bType="submit"
                        width="100%"
                        value="REGISTER"
                    />
                </Form>
            </StyledContainer>
            <Modal isOpen={isOpen} onClickEvent={handleCloseButtonClick}>
                <Text context="Please check your information" />
            </Modal>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
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

const StyledErrorText = styled.p`
    color: ${Theme.colors.darkRed};
`

export default RegisterContainer
