import styled from "styled-components"
import Grid from "@components/UI/atoms/grid/grid"
import Container from "@components/UI/atoms/container/container"
import Text from "@components/UI/atoms/text/text"
import Theme from "@util/style/theme"

const InfoHeader = ({ headerItems }) => {
    return (
        <StyledWrapper>
            <Grid
                repeat={5}
                axis="column"
                bgColor={Theme.colors.black}
                color={Theme.colors.white}
                border="8px"
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
