import Select from "../../atoms/select/select"
import Button from "../../atoms/button/button"
import Container from "../../atoms/container/container"

const SelectButton = ({
    width,
    options,
    value,
    onChangeEvent,
    onClickEvent,
}) => {
    return (
        <Container width={width} display="flex">
            <Select options={options} onChangeEvent={onChangeEvent} />
            <Button
                type="black"
                height="100%"
                width="100%"
                value={value}
                onClickEvent={onClickEvent}
            />
        </Container>
    )
}

export default SelectButton
