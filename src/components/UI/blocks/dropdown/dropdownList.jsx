import styled from "styled-components"
import Text from "@components/UI/atoms/text/text"
import Theme from "@util/style/theme"

const DropdownList = ({ menuItems }) => {
    return (
        <DropdownMenuList>
            <Text type="default" context={menuItems} />
        </DropdownMenuList>
    )
}

const DropdownMenuList = styled.li`
    list-style: none;
    margin-top: 20px;
    margin-bottom: 15px;
    padding: 6px 20px 6px 20px;
    border-bottom: 2px dotted ${Theme.colors.silverGray};
    font-weight: ${Theme.fontWeight.thin};
    &:hover {
        cursor: pointer;
        background-color: ${Theme.colors.darkRed};
        color: ${Theme.colors.white};
        transition: 0.3s;
    }
`

export default DropdownList
