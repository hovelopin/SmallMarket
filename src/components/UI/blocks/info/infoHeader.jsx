import styled from "styled-components"
import Grid from "@components/UI/atoms/grid/grid"
import Container from "@components/UI/atoms/container/container"
import Text from "@components/UI/atoms/text/text"
import SearchBar from "@components/UI/blocks/searchBar/searchBar"
import Theme from "@util/style/theme"

const InfoHeader = ({
    headerItems,
    onSearchChangeEvent,
    onSearchClickEvent,
}) => {
    return (
        <Container width="100%">
            <StyledContainer>
                <Container>
                    <Text type="large" context="User list" />
                </Container>
                <Container>
                    <SearchBar
                        buttonType="black"
                        width="100%"
                        placeholder="Search user..."
                        value="Search"
                        onChangeEvent={onSearchChangeEvent}
                        onClickEvent={onSearchClickEvent}
                    />
                </Container>
            </StyledContainer>
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
        </Container>
    )
}

const StyledContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 3rem;
    justify-content: space-between;
    display: flex;
    flex: 1;
`

const StyledWrapper = styled.div`
    width: 100%;
    margin-top: 2rem;
    display: grid;
    place-items: center;
`

export default InfoHeader
