import StyledInput from "./style"

const Input = ({ width, height, placeholder, onChange }) => {
    return (
        <StyledInput
            width={width}
            height={height}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

export default Input
