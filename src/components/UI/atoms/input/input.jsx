import StyledInput from "./style"

const Input = ({ placeholder, type, onChangeEvent }) => {
    return (
        <StyledInput
            placeholder={placeholder}
            type={type}
            onChange={onChangeEvent}
        />
    )
}

export default Input
