import styled from "styled-components"
import Theme from "../../../../util/style/theme"
import { Link } from "react-router-dom"
const StyledLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    &:hover {
        font-weight: bold;
    }
    color: ${Theme.colors.black};
`
export default StyledLink
