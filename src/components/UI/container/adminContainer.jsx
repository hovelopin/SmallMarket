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
            uuid: "123foxmon1234!@#$!",
            created: "2022-09-09",
            name: "FoxMon2",
        },
    ]

    const options = ["ONLINE", "OFF"]

    return (
        <Container width="100%">
            <InfoHeader headerItems={headerItems} />
            {users.map((u) => (
                <InfoCard key={u.uuid} user={u} options={options} />
            ))}
        </Container>
    )
}

export default AdminContainer
