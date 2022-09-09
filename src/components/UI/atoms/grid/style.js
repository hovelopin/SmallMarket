import styled, { css } from "styled-components"
import Theme from "@util/style/theme"

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
    border-radius: ${(props) => (props.border ? props.border : "none")};
    background-color: ${(props) =>
        props.bgColor ? props.bgColor : Theme.colors.white};
    box-shadow: ${(props) =>
        props.shadow ? `0px 4px 1px 0px ${Theme.colors.lightGray}` : "none"};
    ${gridAxis};
`

export default StyledGrid
