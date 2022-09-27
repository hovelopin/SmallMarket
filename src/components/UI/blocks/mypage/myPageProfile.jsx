import React from "react"
import styled from "styled-components"
import Text from "@components/UI/atoms/text/text"
import Button from "@components/UI/atoms/button/button"
import LabeledInput from "@components/UI/blocks/labeledInput/labeledInput"
import Theme from "@util/style/theme"

const MyPageProfile = ({ onEditInfoSubmitEvent, onEditInfoClickEvent }) => {
    return (
        <MyPageProfileMainContainer>
            <MyPageProfileHeader>
                <Text type="large" context="Edit Profile Information" />
            </MyPageProfileHeader>
            <MyPageProfileCard>
                <StyledInputContainer>
                    <StyledProfileInput>
                        <LabeledInput
                            inputType="tet"
                            labelText="* Username"
                            name="username"
                            placeholder="4 or more letters"
                            onChangeEvent={onEditInfoSubmitEvent}
                        />
                    </StyledProfileInput>
                    <Button
                        width="100%"
                        value="Edit"
                        onClickEvent={onEditInfoClickEvent}
                    />
                </StyledInputContainer>
            </MyPageProfileCard>
        </MyPageProfileMainContainer>
    )
}

const MyPageProfileMainContainer = styled.div`
    width: 100%;
    height: 100%;
`

const MyPageProfileHeader = styled.div`
    width: 100%;
    padding-bottom: 1rem;
    font-weight: ${Theme.fontWeight.bold};
    border-bottom: 3px solid ${Theme.colors.silverGray};
`

const MyPageProfileCard = styled.div`
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    border-radius: ${Theme.card.borderRadius};
`

const StyledInputContainer = styled.div`
    width: 50%;
`

const StyledProfileInput = styled.div`
    width: 100%;
    margin-bottom: 1rem;
`

export default MyPageProfile
