import Container from "@components/UI/atoms/container/container"
import Label from "@components/UI/atoms/label/label"
import Input from "@components/UI/atoms/input/input"

const LabeledInput = ({
    width,
    labelText,
    inputType = "text",
    name,
    value,
    placeholder,
    onChangeEvent,
    readOnly,
}) => {
    return (
        <Container width={width} display="block">
            <Label labelText={labelText} />
            <Input
                type={inputType}
                name={name}
                value={value}
                placeholder={placeholder}
                readOnly={readOnly}
                onChangeEvent={onChangeEvent}
            />
        </Container>
    )
}

export default LabeledInput
