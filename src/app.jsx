import React from "react"
import Header from "./components/UI/container/header"
import CustomRouter from "./components/router/customRouter"
import Footer from "./components/UI/container/footer"

function App() {
    return (
        <React.Fragment>
            <Header />
            <CustomRouter />
            <Footer />
        </React.Fragment>
    )
}

export default App
