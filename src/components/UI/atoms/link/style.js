import styled from "styled-components"
import Theme from "../../../../util/style/theme"
import { Link } from "react-router-dom"

const StyledLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    color: ${Theme.colors.lightBlack};
`
export default StyledLink
