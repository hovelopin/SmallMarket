import * as Selector from "@components/UI/atoms/select/syle"

const Select = ({ width, options, onChangeEvent }) => {
    return (
        <Selector.StyledSelect width={width} onChange={onChangeEvent}>
            {options.map((value) => (
                <Selector.StyledOption key={value} value={value}>
                    {value}
                </Selector.StyledOption>
            ))}
        </Selector.StyledSelect>
    )
}

export default Select
