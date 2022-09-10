import styled from "styled-components"

const CheckBox = ({ checked, type, onClickEvnet }) => {
    return (
        <StyledCheckBox checked={checked} type={type} onClick={onClickEvnet} />
    )
}

const StyledCheckBox = styled.input`
    transform: scale(1.5);
`

export default CheckBox
