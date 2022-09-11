import StyledCheckBox from "./style"

const CheckBox = ({ checked, type, onClickEvnet }) => {
    return (
        <StyledCheckBox checked={checked} type={type} onClick={onClickEvnet} />
    )
}

export default CheckBox
