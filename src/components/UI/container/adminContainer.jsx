import { useEffect, useState, useCallback } from "react"
import styled from "styled-components"
import useModal from "@/hooks/useModal"
import Container from "@components/UI/atoms/container/container"
import Text from "@components/UI/atoms/text/text"
import InfoHeader from "@components/UI/blocks/info/infoHeader"
import InfoCard from "@components/UI/blocks/info/infoCard"
import Modal from "@components/UI/blocks/modal/modal"
import AuthService from "@/service/authService"
import Theme from "@util/style/theme"
import Validation from "@util/validation/validation"

const AdminContainer = () => {
    const [users, setUsers] = useState([])
    const [serchUserEmail, setSerchUserEmail] = useState("")
    const [userStatus, setUserStatus] = useState("")
    const [modalMsg, setModalMsg] = useState("")
    const [errMsg, setErrMsg] = useState("")

    const [isOpen, handleOpenButtonClick, handleCloseButtonClick] =
        useModal(false)

    const options = ["Delete"]
    const headerItems = [
        {
            type: "default",
            context: "Email",
        },
        {
            type: "default",
            context: "Username",
        },
        {
            type: "default",
            context: "IsSeller",
        },
        {
            type: "default",
            context: "Detail",
        },
        {
            type: "default",
            context: "Status",
        },
    ]

    useEffect(async () => {
        const res = await AuthService.firebaseAllUserInformationRequest()
        setUsers(res)
    }, [])

    const handleHistoryButtonClick = async () => {
        const res = await AuthService.firebaseAllUserInformationRequest()
        setUsers(res)
    }

    const handleSearchChange = useCallback((e) => {
        const { value } = e.target
        setSerchUserEmail(value)
        const isValidEamil = Validation.validateEmail(value)
        isValidEamil ? setErrMsg("") : setErrMsg("Invalid email format")
    }, [])

    const handleSearchClick = () => {
        if (errMsg) {
            setModalMsg("Invalid email foramt")
            handleOpenButtonClick(true)
            return
        }
        if (serchUserEmail) {
            const find = users.find((u) => u.email === serchUserEmail)
            !find ? setUsers([]) : setUsers([find])
        }
    }

    const handleStatusChange = useCallback((e) => {
        const { value } = e.target
        setUserStatus(value)
    }, [])

    const handleStatusButtonClick = useCallback(async () => {
        await AuthService.firebaseAdminUserRequest(userStatus)
    }, [])

    return (
        <Container width="100%" height="100%">
            <StyeldAdminInfoHeader>
                <Text type="large" context="SmallMarket'S Admin page" />
            </StyeldAdminInfoHeader>
            <InfoHeader
                headerItems={headerItems}
                errMsg={errMsg}
                onHistoryButtonClickEvent={handleHistoryButtonClick}
                onSearchChangeEvent={handleSearchChange}
                onSearchClickEvent={handleSearchClick}
            />
            <StyledCardContainer>
                {users.map((u) => (
                    <InfoCard
                        key={u.uuid}
                        user={u}
                        options={options}
                        onSelectChangeEvent={handleStatusChange}
                        onSelectButtonClickEvent={handleStatusButtonClick}
                    />
                ))}
            </StyledCardContainer>
            <Modal isOpen={isOpen} onClickEvent={handleCloseButtonClick}>
                <StyledImgContainer
                    src={`${process.env.PUBLIC_URL}/img/logo.png`}
                />
                <Text context={modalMsg} />
            </Modal>
        </Container>
    )
}

// pagination 추가 후 scroll 제거
const StyledCardContainer = styled.div`
    margin: 0 auto;
    height: 75%;
    overflow: auto;
    margin-bottom: 5rem;
`

const StyeldAdminInfoHeader = styled.div`
    background-color: ${Theme.colors.darkBlack};
    color: ${Theme.colors.white};
    text-align: left;
    padding: 3rem;
`

const StyledImgContainer = styled.img`
    display: block;
    width: 70%;
    margin: 0 auto;
    padding-bottom: 2rem;
`

export default AdminContainer
