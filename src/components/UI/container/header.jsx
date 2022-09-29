import { useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import Container from "@components/UI/atoms/container/container"
import LinkGroup from "@components/UI/blocks/linkGroup/linkGroup"
import SearchBar from "@components/UI/blocks/searchBar/searchBar"
import DropdownList from "@components/UI/blocks/dropdown/dropdownList"
import SessionStorage from "@/storage/sessionStorage"
import Icon from "@/icon/icon"
import Theme from "@util/style/theme"
import AuthService from "@/service/authService"

const Header = () => {
    const [isMouseOver, setIsMouseOver] = useState(false)
    const [search, setSearch] = useState("")
    const [isLogin, setIsLogin] = useState(
        SessionStorage.getItem() ? true : false
    )

    const history = useHistory()

    const userMenuItems = [
        {
            name: "cart",
            handleClick: () => {
                history.push("/cart")
            },
        },
        {
            name: isLogin ? "signout" : "user",
            handleClick: () => {
                if (isLogin) {
                    history.push("/")
                    AuthService.firebaseLogoutRequest().then(() => {
                        setIsLogin(false)
                    })
                } else {
                    history.push("/login")
                }
            },
        },
    ]

    const menuItems = [
        {
            name: "My page",
            path: "/mypage",
        },
        {
            name: "Item category",
            path: "/items",
            items: () => {
                const handleCategoryClick = (itemsPath) => () => {
                    history.push(`/items/${itemsPath.toLowerCase()}`)
                }
                return (
                    <MenuItemsList>
                        {["Vegetable", "Drink", "Meat", "Normal"].map((c) => (
                            <ItemCategory
                                key={c}
                                onClick={handleCategoryClick(c)}
                            >
                                <DropdownList menuItems={c} />
                            </ItemCategory>
                        ))}
                    </MenuItemsList>
                )
            },
        },
        {
            name: "Fair trade",
            path: "/about",
        },
        {
            name: "Contact",
            path: "/contact",
        },
    ]
    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearchClick = () => {
        history.push(`/items/search/${search}`)
    }

    const handleMenuItemsOver = () => {
        setIsMouseOver(true)
    }

    const handleMenuItemsLeave = () => {
        setIsMouseOver(false)
    }

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
                        onChangeEvent={handleSearchChange}
                        onClickEvent={handleSearchClick}
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
                    {menuItems.map((m) => {
                        return (
                            <Item
                                key={m.name}
                                onMouseOver={
                                    m.name === "Item category"
                                        ? handleMenuItemsOver
                                        : null
                                }
                                onMouseLeave={
                                    m.name === "Item category"
                                        ? handleMenuItemsLeave
                                        : null
                                }
                            >
                                <LinkGroup
                                    path={m.path}
                                    type="default"
                                    context={m.name}
                                />
                                {m.items && isMouseOver && m.items()}
                            </Item>
                        )
                    })}
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

const MenuItemsList = styled.ul`
    position: absolute;
    text-align: left;
    background-color: ${Theme.colors.white};
    border-radius: 5px;
    padding-left: 0px;
    width: 140px;
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

const ItemCategory = styled.div`
    width: auto;
`

const SearchItemSection = styled.div`
    white-space: nowrap;
    width: auto;
    padding: ${Theme.menus.padding};
`

export default Header
