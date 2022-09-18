import { useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import Container from "@components/UI/atoms/container/container"
import LinkGroup from "@components/UI/blocks/linkGroup/linkGroup"
import SearchBar from "@components/UI/blocks/searchBar/searchBar"
import { AuthStateContext, DispatchContext } from "@/context/auth/authContext"
import AuthTypes from "@/context/types/authRequestType"
import Icon from "@/icon/icon"
import Theme from "@util/style/theme"
import CookieStorage from "@/storage/cookieStorage"

const Header = () => {
    const authDispatch = useContext(DispatchContext)
    const authState = useContext(AuthStateContext)

    const history = useHistory()

    const userMenuItems = [
        {
            name: "cart",
            handleClick: () => {
                history.push("/cart")
            },
        },
        {
            name: CookieStorage.getItem() ? "signout" : "user",
            handleClick: () => {
                if (CookieStorage.getItem()) {
                    authDispatch({
                        type: AuthTypes.logout,
                        payload: null,
                    })
                    CookieStorage.clear()
                } else {
                    history.push("/login")
                }
            },
        },
    ]

    const menuItems = [
        {
            name: "My page",
            path: "/미정1",
        },
        {
            name: "Information",
            path: "/미정2",
        },
        {
            name: "Item category",
            path: "/items",
        },
        {
            name: "Fair trade",
            path: "/미정3",
        },
        {
            name: "Contact",
            path: "/contact",
        },
    ]

    useEffect(() => {
        authDispatch({
            type: AuthTypes.login,
            payload: authState,
        })
    }, [authDispatch])

    const handleLogoImgClick = () => {
        history.push("/")
    }

    return (
        <Container width="100%" height="100%">
            <NavigationSection>
                <StyledCardImage
                    src={`${process.env.PUBLIC_URL}/img/logo.png`}
                    onClick={handleLogoImgClick}
                />
                <SearchItemSection>
                    <SearchBar
                        width="40rem"
                        placeholder="Please enter your content"
                        value="Search"
                    />
                </SearchItemSection>
                <SearchItemSection>
                    {userMenuItems.map((menu, i) => (
                        <UserItemSection key={i} onClick={menu.handleClick}>
                            {menu.name && (
                                <Icon type="black" name={menu.name} />
                            )}
                        </UserItemSection>
                    ))}
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
