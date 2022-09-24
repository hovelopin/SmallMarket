import styled from "styled-components"
import Grid from "@components/UI/atoms/grid/grid"
import Card from "@components/UI/blocks/card/card"

const Paginate = ({
    items,
    limit,
    total,
    onDetailButtonClickEvent,
    page,
    setPage,
}) => {
    const numPages = Math.ceil(total / limit)
    const offset = (page - 1) * limit
    const pageUpButtonClick = () => {
        setPage(page + 1)
    }
    const pageDownButtonClick = () => {
        setPage(page - 1)
    }
    const pageButtonClick = (i) => () => {
        setPage(i + 1)
    }
    const handleDetailButtonClick = (item) => () => {
        onDetailButtonClickEvent(item)
    }
    return (
        <StyledContainer>
            <Grid repeat={4} axis="column" gap="2rem">
                {items.slice(offset, offset + limit).map((item) => (
                    <Card
                        key={item.uuid}
                        img={item.img}
                        uuid={item.uuid}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        onClickEvent={handleDetailButtonClick(item)}
                    />
                ))}
            </Grid>
            <StyledNav>
                <StyledButton
                    onClick={pageDownButtonClick}
                    disabled={page === 1}
                >
                    &lt;
                </StyledButton>
                {Array(numPages)
                    .fill()
                    .map((_, i) => (
                        <StyledButton
                            key={i + 1}
                            onClick={pageButtonClick(i)}
                            aria-current={page === i + 1 ? "page" : null}
                        >
                            {i + 1}
                        </StyledButton>
                    ))}
                <StyledButton
                    onClick={pageUpButtonClick}
                    disabled={page === numPages}
                >
                    &gt;
                </StyledButton>
            </StyledNav>
        </StyledContainer>
    )
}

export default Paginate

const StyledContainer = styled.div`
    width: 100%;
    display: grid;
    margin-top: 3rem;
    place-items: center;
`
const StyledButton = styled.button`
    border: none;
    border-radius: 8px;
    padding: 8px;
    margin: 0;
    background: black;
    color: white;
    font-size: 1rem;

    &:hover {
        background: tomato;
        cursor: pointer;
        transform: translateY(-2px);
    }

    &[disabled] {
        background: grey;
        cursor: revert;
        transform: revert;
    }

    &[aria-current] {
        background: deeppink;
        font-weight: bold;
        cursor: revert;
        transform: revert;
    }
`
const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin: 16px;
`
