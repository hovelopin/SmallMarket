import Select from "@components/UI/atoms/select/select"
import Button from "@components/UI/atoms/button/button"
import Container from "@components/UI/atoms/container/container"

const SelectButton = ({
    width,
    sWidth,
    options,
    value,
    onChangeEvent,
    onClickEvent,
}) => {
    return (
        <Container width={width} display="flex">
            <Select
                width={sWidth}
                options={options}
                onChangeEvent={onChangeEvent}
            />
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
