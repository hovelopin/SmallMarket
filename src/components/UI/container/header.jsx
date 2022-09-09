import styled from "styled-components"
import Container from "@components/UI/atoms/container/container"
import LinkGroup from "@components/UI/blocks/linkGroup/linkGroup"
import SearchBar from "@components/UI/blocks/searchBar/searchBar"
import Theme from "@util/style/theme"
import Icon from "@/icon/icon"

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
        {
            name: "미정4",
            path: "/미정4",
        },
        {
            name: "미정5",
            path: "/미정5",
        },
    ]

    return (
        <Container width="100%" height="100%">
            <NavigationSection>
                <StyledCardImage
                    src={`${process.env.PUBLIC_URL}/img/logo.png`}
                />
                <SearchItemSection>
                    <SearchBar
                        width="40rem"
                        placeholder="Please enter your content"
                        value="Search"
                    />
                </SearchItemSection>
                <SearchItemSection>
                    <UserItemSection>
                        <Icon name="cart" />
                    </UserItemSection>
                    <UserItemSection>
                        <Icon name="signin" />
                    </UserItemSection>
                    <UserItemSection>
                        <Icon name="signup" />
                    </UserItemSection>
                </SearchItemSection>
            </NavigationSection>
            <NavigationSection>
                <MenuItemSection>
                    {menuItems.map((m) => (
                        <Item key={m.name}>
                            <LinkGroup
                                path={m.path}
                                type="default"
                                context={m.name}
                            />
                        </Item>
                    ))}
                </MenuItemSection>
            </NavigationSection>
        </Container>
    )
}

const NavigationSection = styled.div`
    justify-content: space-between;
    display: flex;
    align-items: center;
    flex: 1;
    padding-left: ${Theme.header.paddingLeft};
    padding-right: ${Theme.header.paddingRight};
`

const MenuItemSection = styled.ul`
    justify-content: space-between;
    display: flex;
    flex: 1;
`

const UserItemSection = styled.div`
    display: inline-block;
    white-space: nowrap;
    flex-basis: auto;
    width: auto;
    margin-left: 0.225rem;
    font-size: ${Theme.fontSizes.large};
    padding: ${Theme.menus.padding};
    &:hover {
        cursor: pointer;
    }
`

const StyledCardImage = styled.img`
    width: 17%;
    align-items: center;
    object-fit: cover;
    vertical-align: middle;
    &:hover {
        cursor: pointer;
    }
`

const Item = styled.li`
    list-style: none;
    position: relative;
    width: auto;
    padding: ${Theme.menus.padding};
`

const SearchItemSection = styled.div`
    white-space: nowrap;
    width: auto;
    padding: ${Theme.menus.padding};
`

export default Header
