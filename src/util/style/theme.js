const Theme = {
    colors: {
        black: "#000",
        darkBlack: "#303030",
        lightBlack: "rgba(0, 0, 0, 0.55)",
        white: "#fff",
        whiteGray: "#F5F5F5",
        lightGray: "#E0E0E0",
        silverGray: "#ccc",
        darkRed: "#DF2A04",
        lightOrange: "#ffc800",
        darkOrange: "#d9aa00",
    },
    fontSizes: {
        small: "0.85rem",
        default: "1.2rem",
        large: "1.8rem",
    },
    fontWeight: {
        thin: 300,
        medium: 700,
        bold: "bold",
    },
    inputs: {
        vertical: "middle",
        padding: "8px 10px 8px 10px",
        lineHeight: "28px",
        border: "3px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        display: "inline-block",
    },
    selects: {
        textAlign: "center",
        padding: "0.875rem 1.125rem",
        border: "2px solid black",
        borderRadius: "0.35rem",
    },
    buttons: {
        borderRadius: "0.35rem",
        padding: "0.875rem 1.125rem",
        border: "1px solid transparent",
    },
    grid: {
        width: "80%",
        gap: "10px",
        padding: "1rem",
    },
    modal: {
        padding: "15px",
        background: "rgba(0, 0, 0, 0.14)",
        translate: "translate(-50%, -50%)",
        borderRadius: "8px",
    },
    menus: {
        padding: "1rem",
    },
    card: {
        borderRadius: "0.25rem",
    },
    header: {
        paddingLeft: "4rem",
        paddingRight: "4rem",
    },
}

Object.freeze(Theme)
export default Theme
