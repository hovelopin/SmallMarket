import { useCallback } from "react"
import styled from "styled-components"
import InfoHeader from "@components/UI/blocks/info/infoHeader"
import InfoCard from "@components/UI/blocks/info/infoCard"
import Container from "@components/UI/atoms/container/container"

const AdminContainer = () => {
    const headerItems = [
        {
            type: "default",
            context: "User ID",
        },
        {
            type: "default",
            context: "Created",
        },
        {
            type: "default",
            context: "Customer",
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

    const users = [
        {
            uuid: "foxmon1234!@#$!",
            created: "2022-09-08",
            name: "FoxMon",
        },
        {
            uuid: "123foxmon1234!@#$!aa",
            created: "2022-09-09",
            name: "FoxMon2",
        },
        {
            uuid: "foxmon1234!@#$!bbb",
            created: "2022-02-08",
            name: "FoxMon3",
        },
        {
            uuid: "123foxmon1234!@#$!!",
            created: "2022-01-09",
            name: "FoxMon4",
        },
        {
            uuid: "foxmon1234!@#$!!!",
            created: "2022-09-18",
            name: "FoxMon5",
        },
        {
            uuid: "123foxmon1234!@#$",
            created: "2022-04-29",
            name: "FoxMon6",
        },
        {
            uuid: "foxmon1234!@#$!12",
            created: "2022-11-08",
            name: "FoxMon7",
        },
        {
            uuid: "123foxmon1234!@#$!34",
            created: "2022-01-01",
            name: "FoxMon8",
        },
    ]

    const options = ["ONLINE", "OFF"]

    const handleSearchChange = useCallback((e) => {
        const { value } = e.target
        console.log(value)
    }, [])

    const handleSearchClick = useCallback(() => {
        console.log("click!")
    }, [])

    const handleStatusChange = useCallback((e) => {
        const { value } = e.target
        console.log(value)
    }, [])

    const handleStatusButtonClick = useCallback(() => {
        console.log("click!")
    }, [])

    return (
        <Container width="100%" height="100vh">
            <InfoHeader
                headerItems={headerItems}
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

export default AdminContainer
