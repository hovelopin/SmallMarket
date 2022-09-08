import styled from "styled-components"
import Grid from "../../atoms/grid/grid"
import Container from "../../atoms/container/container"
import Text from "../../atoms/text/text"
import Button from "../../atoms/button/button"
import Theme from "../../../../util/style/theme"

const InfoCard = ({ user }) => {
    const { uuid, created, name, status } = user

    return (
        <StyledWrapper>
            <Grid
                repeat={5}
                axis="column"
                bgColor={Theme.colors.whiteGray}
                color={Theme.colors.black}
                border="8px"
                shadow={true}
            >
                <Container display="flex">
                    <Text type="default" context={uuid} />
                </Container>
                <Container display="flex">
                    <Text type="default" context={created} />
                </Container>
                <Container display="flex">
                    <Text type="default" context={name} />
                </Container>
                <Container>
                    <Button
                        type="contrast"
                        height="100%"
                        width="100%"
                        value="Detail"
                    />
                </Container>
                <Container display="flex">
                    <Text type="default" context={status} />
                </Container>
            </Grid>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    display: grid;
    place-items: center;
    margin: 0 auto;
    margin-top: 1rem;
`

export default InfoCard
