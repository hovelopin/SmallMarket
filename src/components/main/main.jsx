import { Box, Typography } from "@mui/material"

function Main() {
    return (
        <Box sx={boxStyle}>
            <Box sx={boxHeaderStyle}>
                <Typography sx={titleStyle} variant="h1">
                    SMALL MARKET
                </Typography>
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        opacity: 0.78,
                    }}
                    src="img/1-index.jpg"
                    alt="main"
                />
            </Box>
            <Box sx={wrapStyle}>
                <Box sx={wrapContainerStyle}>
                    <Box sx={indexItemsStyle}>
                        <img
                            style={{
                                width: "400px",
                            }}
                            src="img/2-index.jpg"
                            alt="photo1"
                        />
                        <Typography sx={contentStyle} variant="h5">
                            The Most Fresh Product
                        </Typography>
                        <Typography variant="h6">
                            Buy directly from artisans all across Korea
                        </Typography>
                    </Box>
                    <Box sx={indexItemsStyle}>
                        <img
                            style={{
                                width: "400px",
                            }}
                            src="img/3-index.jpg"
                            alt="photo2"
                        />
                        <Typography sx={contentStyle} variant="h5">
                            The MarketPlace
                        </Typography>
                        <Typography variant="h6">
                            Most healthy foods and products
                        </Typography>
                    </Box>
                    <Box sx={indexItemsStyle}>
                        <img
                            style={{
                                width: "400px",
                            }}
                            src="img/4-index.jpg"
                            alt="photo3"
                        />
                        <Typography sx={contentStyle} variant="h5">
                            Reliable
                        </Typography>
                        <Typography variant="h6">
                            We sell only trusted products.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={sectionBoxStyle}>
                    <Box sx={sectionStyle}>
                        <img
                            style={{
                                width: "90%",
                            }}
                            src="img/5-index.jpg"
                            alt="photo4"
                        />
                        <h3>For the customer and For the producer</h3>
                        <h5>Buy food that is fair and trustworthy.</h5>
                    </Box>
                    <Box sx={sectionStyle}>
                        <img
                            style={{
                                width: "90%",
                            }}
                            src="img/6-index.jpg"
                            alt="photo5"
                        />
                        <Typography sx={contentStyle} variant="h5">
                            Because It's a Small Market
                        </Typography>
                        <Typography variant="h6">
                            That's why you should use it.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

const boxStyle = {
    margin: "0 auto",
}

const boxHeaderStyle = {
    minHeight: "100%",
    width: "100%",
    position: "relative",
}

const titleStyle = {
    position: "absolute",
    color: "#fff",
    top: "30%",
    left: "25%",
    zIndex: "10",
}

const wrapStyle = {
    width: "100%",
}

const wrapContainerStyle = {
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
}

const indexItemsStyle = {
    flexDirection: "row",
    margin: "3rem",
}

const contentStyle = {
    mt: 2,
    textAlign: "center",
}

const sectionBoxStyle = {
    width: "90%",
    display: "flex",
    margin: "0 auto",
    textAlign: "center",
    justifyContent: "space-between",
}

const sectionStyle = {
    flex: 1,
    flexDirection: "column",
}

export default Main
