import Container from "@components/UI/atoms/container/container"
import Input from "@components/UI/atoms/input/input"
import Button from "@components/UI/atoms/button/button"

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
                type="text"
                name="search"
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
