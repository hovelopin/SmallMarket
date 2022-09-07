import Link from "../../atoms/link/link"
import Text from "../../atoms/text/text"

const LinkGroup = ({ path, type, context }) => {
    return (
        <Link path={path}>
            <Text type={type} context={context} />
        </Link>
    )
}

export default LinkGroup
