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
    gap: ${Theme.grid.gap};
    ${gridAxis}
`

export default StyledGrid
