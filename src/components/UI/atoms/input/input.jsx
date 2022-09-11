import StyledInput from "./style"

const Input = ({ placeholder, type, name, value, onChangeEvent }) => {
    return (
        <StyledInput
            placeholder={placeholder}
            type={type}
            name={name}
            value={value}
            onChange={onChangeEvent}
        />
    )
}

export default Input
