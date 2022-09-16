import { useCallback } from "react"
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

const LoginContainer = () => {
    const [loginFormValue, handleFormValueChange] = useForm({
        email: "",
        password: "",
    })

    const [isOpen, handleOpenButtonClick, handleCloseButtonClick] =
        useModal(false)

    const handleLoginSubmit = useCallback((e) => {
        e.preventDefault()
        const { email, password } = loginFormValue
        const isValidEmail = Validation.validateEmail(email)
        const isValidPassword = Validation.validatePassword(password)
        const isValidUserInformation = Validation.validateAll([
            isValidEmail,
            isValidPassword,
        ])
        if (!isValidUserInformation) {
            handleOpenButtonClick(true)
            return
        }
        // add login...
    }, [])

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
                    </StyledFormContainer>
                    <StyledSmallTextContainer>
                        <StyledSpanContainer>
                            <Text type="small" context="FORGOT USERNAME?" />
                        </StyledSpanContainer>
                        <StyledSpanContainer>
                            <Text type="small" context="FORGOT PASSWORD?" />
                        </StyledSpanContainer>
                    </StyledSmallTextContainer>
                    <Button
                        type="default"
                        bType="submit"
                        width="100%"
                        value="LOGIN"
                    />
                </Form>
            </StyledContainer>
            <Modal isOpen={isOpen} onClickEvent={handleCloseButtonClick}>
                <Text context="Please check your email or password" />
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

export default LoginContainer
