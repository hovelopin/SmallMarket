import styled from "styled-components"
import Container from "../atoms/container/container"
import Text from "../atoms/text/text"
import Link from "../atoms/link/link"
import Theme from "../../../util/style/theme"

const Header = () => {
    const menuItems = [
        {
            name: "미정1",
            path: "/미정1",
        },
        {
            name: "미정2",
            path: "/미정2",
        },
        {
            name: "미정3",
            path: "/미정3",
        },
    ]

    return (
        <Container width="100%" height="20px">
            <NavigationSection>
                <MenuItemSection>
                    {menuItems.map((m) => (
                        <Item key={m.name}>
                            <Link path={m.path}>
                                <ItemText context={m.name} />
                            </Link>
                        </Item>
                    ))}
                </MenuItemSection>
                <SearchItemSection>
                    <ItemText context="검색" />
                </SearchItemSection>
            </NavigationSection>
        </Container>
    )
}

const NavigationSection = styled.div`
    justify-content: flex-start;
    display: flex;
    align-items: center;
    flex: 1;
`

const MenuItemSection = styled.ul`
    justify-content: flex-start;
    display: flex;
    flex: 1;
`

const Item = styled.li`
    list-style: none;
    position: relative;
    width: auto;
    padding: ${Theme.menus.padding};
`

const ItemText = styled(Text)`
    font-weight: ${Theme.fontWeight.bold};
`

const SearchItemSection = styled.div`
    display: inline-block;
    white=space: nowrap;
    flex-basis: auto;
    width: auto;
    padding: ${Theme.menus.padding};
`

export default Header
