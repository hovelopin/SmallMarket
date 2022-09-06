import StyledLink from "./style"

const Link = ({ children, ...props }) => {
    return <StyledLink {...props}>{children}</StyledLink>
}

export default Link
