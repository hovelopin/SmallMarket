import styled, { css } from "styled-components"
import Theme from "../../../../util/style/theme"

const gridAxis = css`
    ${(props) =>
        props.axis === "row"
            ? css`
                  grid-template-rows: repeat(${props.repeat});
              `
            : css`
                  grid-template-columns: repeat(
                      ${(props) => props.repeat},
                      1fr
                  );
              `}
`

const StyledGrid = styled.div`
    display: grid;
    justify-items: center;
    width: ${Theme.grid.width};
    padding: ${Theme.grid.padding};
    gap: ${Theme.grid.gap};
    color: ${(props) => (props.color ? props.color : Theme.colors.black)};
    background-color: ${(props) =>
        props.bgColor ? props.bgColor : Theme.colors.white};
    ${gridAxis};
`

export default StyledGrid
