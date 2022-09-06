import StyledLink from "./style"

const Link = ({ path, children }) => {
    return <StyledLink to={path}>{children}</StyledLink>
}

export default Link
