import styled from "styled-components"
import Grid from "../../atoms/grid/grid"
import Container from "../../atoms/container/container"
import Text from "../../atoms/text/text"
import Theme from "../../../../util/style/theme"

const InfoHeader = ({ headerItems }) => {
    return (
        <StyledWrapper>
            <Grid
                repeat={5}
                axis="column"
                bgColor={Theme.colors.black}
                color={Theme.colors.white}
            >
                {headerItems.map((h) => (
                    <Container key={h.context}>
                        <Text type={h.type} context={h.context} />
                    </Container>
                ))}
            </Grid>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
`

export default InfoHeader
