import styled from "styled-components"
import Grid from "../../atoms/grid/grid"
import Card from "../card/card"
const Paginate = ({
    limit,
    page,
    items,
    offset,
    total,
    onClickEvent,
    setPage,
}) => {
    const numPages = Math.ceil(total / limit)
    const pageUpChangeHandler = (page) => {
        setPage(page + 1)
    }
    const pageDownChangeHandler = (page) => {
        setPage(page - 1)
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
                    onClick={pageDownChangeHandler(page)}
                    disabled={page === 1}
                >
                    &lt;
                </StyledButton>
                {Array(numPages)
                    .fill()
                    .map((_, i) => (
                        <StyledButton
                            key={i + 1}
                            onClick={pageUpChangeHandler(page)}
                            aria-current={page === i + 1 ? "page" : null}
                        >
                            {i + 1}
                        </StyledButton>
                    ))}
                <Button
                    onClick={pageUpChangeHandler(page)}
                    disabled={page === numPages}
                >
                    &gt;
                </Button>
            </StyledNav>
        </StyledContainer>
    )
}

/*
<Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
*/
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
