import styled from "styled-components"

const Paginate = ({ limit, total, page, onPageChangeButtonClick }) => {
    const numPages = Math.ceil(total / limit)
    return (
        <StyledContainer>
            <StyledNav>
                <StyledButton
                    onClick={onPageChangeButtonClick({
                        name: "page",
                        value: page - 1,
                    })}
                    disabled={page === 1}
                >
                    &lt;
                </StyledButton>
                {Array(numPages)
                    .fill()
                    .map((_, i) => (
                        <StyledButton
                            key={i + 1}
                            onClick={onPageChangeButtonClick({
                                name: "page",
                                value: i + 1,
                            })}
                            aria-current={page === i + 1 ? "page" : null}
                        >
                            {i + 1}
                        </StyledButton>
                    ))}
                <StyledButton
                    onClick={onPageChangeButtonClick({
                        name: "page",
                        value: page + 1,
                    })}
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
