import styled from "styled-components"
import Grid from "@components/UI/atoms/grid/grid"
import Container from "@components/UI/atoms/container/container"
import Text from "@components/UI/atoms/text/text"
import Button from "@components/UI/atoms/button/button"
import SelectButton from "@components/UI/blocks/selectButton/selectButton"
import Theme from "@util/style/theme"

const InfoCard = ({
    user,
    options,
    onDetailButtonClickEvent,
    onSelectChangeEvent,
    onSelectButtonClickEvent,
}) => {
    const { uuid, created, name } = user

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
                        type="black"
                        height="100%"
                        width="100%"
                        value="Detail"
                        onClickEvent={onDetailButtonClickEvent}
                    />
                </Container>
                <SelectButton
                    width="auto"
                    sWidth="180px"
                    options={options}
                    value="OK"
                    onChangeEvent={onSelectChangeEvent}
                    onClickEvent={onSelectButtonClickEvent}
                />
            </Grid>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    display: grid;
    place-items: center;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

export default InfoCard
