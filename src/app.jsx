import React from "react"
import AuthContext from "@/context/auth/authContext"
import CustomRouter from "@components/router/customRouter"
import Footer from "@components/UI/container/footer"

function App() {
    return (
        <React.Fragment>
            <AuthContext>
                <CustomRouter />
            </AuthContext>
            <Footer />
        </React.Fragment>
    )
}

export default App
