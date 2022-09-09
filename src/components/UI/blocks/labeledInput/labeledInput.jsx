import Container from "../../atoms/container/container"
import Label from "../../atoms/label/label"
import Input from "../../atoms/input/input"

const LabeledInput = ({
    width,
    labelText,
    inputType = "text",
    name,
    value,
    placeholder,
}) => {
    return (
        <Container width={width} display="block">
            <Label labelText={labelText} />
            <Input
                type={inputType}
                name={name}
                value={value}
                placeholder={placeholder}
            />
        </Container>
    )
}

export default LabeledInput
