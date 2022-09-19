import StyledInput from "./style"

const Input = ({
    placeholder,
    type,
    zoom,
    name,
    value,
    checked,
    onChangeEvent,
}) => {
    return (
        <StyledInput
            placeholder={placeholder}
            type={type}
            zoom={zoom}
            name={name}
            value={value}
            checked={checked}
            onChange={onChangeEvent}
        />
    )
}

export default Input
