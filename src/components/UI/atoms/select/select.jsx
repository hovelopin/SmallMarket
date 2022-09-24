import * as Selector from "@components/UI/atoms/select/syle"

const Select = ({ width, options, defaultSelected, onChangeEvent }) => {
    return (
        <Selector.StyledSelect width={width} onChange={onChangeEvent}>
            {options.map((value) => (
                <Selector.StyledOption
                    key={value}
                    value={value}
                    selected={value === defaultSelected}
                >
                    {value}
                </Selector.StyledOption>
            ))}
        </Selector.StyledSelect>
    )
}

export default Select
