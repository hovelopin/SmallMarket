import { useCallback } from "react"
import useForm from "@/hooks/useForm"
import useModal from "@/hooks/useModal"
import styled from "styled-components"
import Text from "@components/UI/atoms/text/text"
import Form from "@components/UI/atoms/form/form"
import Button from "@components/UI/atoms/button/button"
import LabeledInput from "@components/UI/blocks/labeledInput/labeledInput"
import Modal from "@components/UI/blocks/modal/modal"
import Theme from "@util/style/theme"
import Validation from "@util/validation/validation"

const RegisterContainer = () => {
    const [registerFormValue, handleFormValueChange] = useForm({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    })

    const [isOpen, handleOpenButtonClick, handleCloseButtonClick] =
        useModal(false)

    const handleRegisterSubmit = useCallback((e) => {
        e.preventDefault()
        const { email, username, password, confirmPassword } = registerFormValue
        const isValidEmail = Validation.validateEmail(email)
        const isValidUsernme = Validation.validateUsername(username)
        const isValidPassword = Validation.validatePassword(password)
        const isValidRegisterInformation = Validation.validateAll([
            isValidEmail,
            isValidUsernme,
            isValidPassword,
            password === confirmPassword,
        ])

        if (!isValidRegisterInformation) {
            handleOpenButtonClick(true)
            return
        }
    }, [])

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

export default RegisterContainer
