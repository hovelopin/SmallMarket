import React from "react"
import styled from "styled-components"
import Text from "@components/UI/atoms/text/text"
import Container from "@components/UI/atoms/container/container"
import Theme from "@util/style/theme"

const MyPageSidebar = ({ menuItem, onClickSelectedClick }) => {
    return (
        <Container width="100%">
            <MyPageSidebarHeader>
                <Text type="large" context="My Page" />
            </MyPageSidebarHeader>
            <MyPageSidebarBody>
                <Text type="large" context="Information" />
                <MyPageSidebarUl>
                    {menuItem.map((n, i) => {
                        return (
                            <MyPageSidebarList
                                key={i}
                                onClick={onClickSelectedClick(n)}
                            >
                                <Text type="default" context={n} />
                            </MyPageSidebarList>
                        )
                    })}
                </MyPageSidebarUl>
            </MyPageSidebarBody>
        </Container>
    )
}

const MyPageSidebarHeader = styled.div`
    width: 100%;
    border-bottom: 3px solid ${Theme.colors.silverGray};
    font-size: ${Theme.fontSizes.large};
    font-weight: ${Theme.fontWeight.bold};
    margin-left: 1rem;
    padding-bottom: 1rem;
`

const MyPageSidebarBody = styled.div`
    width: 100%;
    padding-top: 1rem;
    padding-left: 1rem;
`

const MyPageSidebarUl = styled.ul`
    width: 100%;
    padding-bottom: 2rem;
`

const MyPageSidebarList = styled.li`
    width: 100%;
    list-style: none;
    padding-bottom: 1rem;
    &:hover {
        cursor: pointer;
    }
`

export default MyPageSidebar
