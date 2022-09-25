import styled from "styled-components"
import Theme from "@util/style/theme"

const Paginate = ({ limit, total, page, onPageChangeButtonClickEvent }) => {
    const numPages = Math.ceil(total / limit)

    return (
        <StyledContainer>
            <StyledNav>
                <StyledButton
                    onClick={onPageChangeButtonClickEvent({
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
                            onClick={onPageChangeButtonClickEvent({
                                name: "page",
                                value: i + 1,
                            })}
                            aria-current={page === i + 1 ? "page" : null}
                        >
                            {i + 1}
                        </StyledButton>
                    ))}
                <StyledButton
                    onClick={onPageChangeButtonClickEvent({
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
    background: ${Theme.colors.black};
    border: 2px solid ${Theme.colors.darkBlack};
    border-radius: 8px;
    padding: 8px;
    margin: 0;
    color: ${Theme.colors.white};
    font-size: 1rem;

    &:hover {
        background: ${Theme.colors.white};
        color: ${Theme.colors.black};
        font-weight: ${Theme.fontWeight.bold};
        cursor: pointer;
        transition: 0.3s;
    }

    &[disabled] {
        background: ${Theme.colors.darkBlack};
        color: ${Theme.colors.white};
        cursor: pointer;
    }

    &[aria-current] {
        background: ${Theme.colors.white};
        color: ${Theme.colors.black};
        border: 2px solid ${Theme.colors.black};
        font-weight: ${Theme.fontWeight.bold};
        cursor: pointer;
    }
`
const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin: 16px;
`
