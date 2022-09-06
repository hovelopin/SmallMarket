import StyledLink from "./style"

const Link = ({ children, ...path }) => {
    return <StyledLink {...path}>{children}</StyledLink>
}

export default Link
