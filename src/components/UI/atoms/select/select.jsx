import * as Selector from "./syle"

const Select = ({ options, onChangeEvent }) => {
    return (
        <Selector.StyledSelect onChange={onChangeEvent}>
            {options.map((value) => (
                <Selector.StyledOption key={value} value={value}>
                    {value}
                </Selector.StyledOption>
            ))}
        </Selector.StyledSelect>
    )
}

export default Select
