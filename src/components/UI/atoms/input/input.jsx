import StyledInput from "./style"

const Input = ({ width, height, placeholder, type, onChange }) => {
    return (
        <StyledInput
            width={width}
            height={height}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
        />
    )
}

export default Input
