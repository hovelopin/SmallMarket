import styled from "styled-components"
import Text from "@components/UI/atoms/text/text"
import Form from "@components/UI/atoms/form/form"
import Button from "@components/UI/atoms/button/button"
import LabeledInput from "@components/UI/blocks/labeledInput/labeledInput"
import Theme from "@util/style/theme"

const RegisterContainer = () => {
    const handleRegisterSubmit = (e) => {
        e.preventDefault()
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
                            placeholder="Please enter your email"
                        />
                    </StyledFormContainer>
                    <StyledFormContainer>
                        <LabeledInput
                            width="100%"
                            labelText="Username"
                            inputType="text"
                            name="username"
                            placeholder="Please enter your username"
                        />
                    </StyledFormContainer>
                    <StyledFormContainer>
                        <LabeledInput
                            width="100%"
                            labelText="Password"
                            inputType="password"
                            name="password"
                            placeholder="Please enter your password"
                        />
                    </StyledFormContainer>
                    <StyledFormContainer>
                        <LabeledInput
                            width="100%"
                            labelText="Confirm Password"
                            inputType="password"
                            name="confirmPassword"
                            placeholder="Please enter your password"
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
