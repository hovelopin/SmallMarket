import StyledInput from "./style"

const Input = ({
    placeholder,
    type,
    zoom,
    name,
    value,
    checked,
    onChangeEvent,
    readOnly,
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
            readOnly={readOnly}
        />
    )
}

export default Input
