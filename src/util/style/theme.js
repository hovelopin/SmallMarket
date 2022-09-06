const Theme = {
    colors: {
        black: "#000",
        white: "#fff",
        silverGray: "#ccc",
    },
    fontSizes: {
        small: "0.5rem",
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
    grid: {
        width: "80%",
        gap: "10px",
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
}

Object.freeze(Theme)
export default Theme
