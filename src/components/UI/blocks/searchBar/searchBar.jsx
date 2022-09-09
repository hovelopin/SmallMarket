import Container from "../../atoms/container/container"
import Input from "../../atoms/input/input"
import Button from "../../atoms/button/button"

const SearchBar = ({
    width,
    buttonType,
    placeholder,
    value,
    onChangeEvent,
    onClickEvent,
}) => {
    return (
        <Container width={width} display="flex">
            <Input
                tpye="text"
                placeholder={placeholder}
                onChangeEvent={onChangeEvent}
            />
            <Button
                type={buttonType}
                width="auto"
                value={value}
                onClickEvent={onClickEvent}
            />
        </Container>
    )
}

export default SearchBar
