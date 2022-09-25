import { useState } from "react"
import { useHistory } from "react-router-dom"
import useForm from "@/hooks/useForm"
import useModal from "@/hooks/useModal"
import styled from "styled-components"
import Form from "@components/UI/atoms/form/form"
import Text from "@components/UI/atoms/text/text"
import Button from "@components/UI/atoms/button/button"
import LabeledInput from "@/components/UI/blocks/labeledInput/labeledInput"
import Modal from "@/components/UI/blocks/modal/modal"
import Theme from "@util/style/theme"
import Validation from "@util/validation/validation"
import AuthService from "@/service/authService"
import SessionStorage from "@/storage/sessionStorage"

const LoginContainer = () => {
    const [modalMsg, setModalMsg] = useState("")

    const [loginFormValue, handleFormValueChange] = useForm({
        email: "",
        password: "",
    })
    const [isOpen, handleOpenButtonClick, handleCloseButtonClick] =
        useModal(false)

    const history = useHistory()

    const { email, password } = loginFormValue
    const isValidEmail = Validation.validateEmail(email)
    const isValidPassword = Validation.validatePassword(password)

    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        const isValidUserInformation = Validation.validateAll([
            isValidEmail,
            isValidPassword,
        ])
        if (!isValidUserInformation) {
            setModalMsg("Please check your email or password")
            handleOpenButtonClick(true)
            return
        }
        const res = await AuthService.firebaseLoginRequest(email, password)
        if (!res) {
            setModalMsg("Please check your email or password")
            handleOpenButtonClick(true)
            return
        }
        const { emailVerified } = res
        if (!emailVerified) {
            await AuthService.firebaseLogoutRequest()
            setModalMsg("Please verify your email")
            handleOpenButtonClick(true)
            return
        }
        location.replace("/")
    }

    const handleRegisterButtonClick = () => {
        history.push("/register")
    }

    if (SessionStorage.getItem()) {
        history.push("/")
    }

    return (
        <StyledWrapper>
            <StyledContainer>
                <StyledTextContainer>
                    <Text type="default" context="ACCOUNT LOGIN" />
                </StyledTextContainer>
                <Form onSubmitEvent={handleLoginSubmit}>
                    <StyledFormContainer>
                        <LabeledInput
                            width="100%"
                            labelText="Email"
                            inputType="text"
                            name="email"
                            value={loginFormValue.email}
                            placeholder="Please enter your email"
                            onChangeEvent={handleFormValueChange}
                        />
                        {!isValidEmail && (
                            <StyledErrorText>
                                Invalid email format
                            </StyledErrorText>
                        )}
                    </StyledFormContainer>
                    <StyledFormContainer>
                        <LabeledInput
                            width="100%"
                            labelText="Password"
                            inputType="password"
                            name="password"
                            value={loginFormValue.password}
                            placeholder="Please enter your password"
                            onChangeEvent={handleFormValueChange}
                        />
                        {!isValidPassword && (
                            <StyledErrorText>
                                Invalid password format
                            </StyledErrorText>
                        )}
                    </StyledFormContainer>
                    <StyledSmallTextContainer>
                        <StyledSpanContainer>
                            <Text type="small" context="FORGOT USERNAME?" />
                        </StyledSpanContainer>
                        <StyledSpanContainer>
                            <Text type="small" context="FORGOT PASSWORD?" />
                        </StyledSpanContainer>
                    </StyledSmallTextContainer>
                    <StyledButtonContainer>
                        <Button
                            type="default"
                            bType="submit"
                            width="100%"
                            value="LOGIN"
                        />
                    </StyledButtonContainer>
                    <StyledButtonContainer>
                        <Button
                            type="default"
                            bType="button"
                            width="100%"
                            value="REGISTER"
                            onClickEvent={handleRegisterButtonClick}
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
    height: 100vh;
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: ${Theme.colors.lightGray};
`

const StyledTextContainer = styled.div`
    padding-top: 1.25rem;
    padding-bottom: 2rem;
`

const StyledContainer = styled.div`
    width: 500px;
    height: auto;
    margin: 0 auto;
    padding: 1rem;
    background-color: ${Theme.colors.white};
`

const StyledSmallTextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
`

const StyledSpanContainer = styled.div`
    &:hover {
        cursor: pointer;
    }
`

const StyledFormContainer = styled.div`
    margin-bottom: 1.75rem;
`

const StyledButtonContainer = styled.div`
    margin-bottom: 0.5rem;
`

const StyledImgContainer = styled.img`
    display: block;
    width: 70%;
    margin: 0 auto;
    padding-bottom: 2rem;
`

const StyledErrorText = styled.p`
    color: ${Theme.colors.darkRed};
`

export default LoginContainer
