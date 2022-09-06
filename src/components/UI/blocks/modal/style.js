import styled, { css } from "styled-components"
import Theme from "../../../../util/style/theme"

const isVisible = css`
    ${(props) =>
        props.isOpen
            ? css`
                  display: block;
              `
            : css`
                  display: none;
              `}
`

export const StyledModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    background: ${Theme.modal.background};
    ${isVisible};
`

export const StyledModalContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    text-align: "center";
    transform: ${Theme.modal.translate};
    padding: ${Theme.modal.padding};
    background: ${Theme.colors.white};
    border-radius: ${Theme.modal.borderRadius};
    ${isVisible};
`
