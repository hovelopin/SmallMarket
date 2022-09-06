import StyledInput from "./style"

const Input = ({ width, height, placeholder, type, onChangeEvent }) => {
    return (
        <StyledInput
            width={width}
            height={height}
            placeholder={placeholder}
            type={type}
            onChange={onChangeEvent}
        />
    )
}

export default Input
