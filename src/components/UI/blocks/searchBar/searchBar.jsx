import Container from "../../atoms/container/container"
import Input from "../../atoms/input/input"
import Button from "../../atoms/button/button"

const SearchBar = ({ width, placeholder, value, onChangeEvent }) => {
	return (
		<Container width={width} display="flex">
			<Input tpye="text" placeholder={placeholder} onChangeEvent={onChangeEvent} />
			<Button width={width} value={value} />
		</Container>
	)
}

export default SearchBar