import AuthContext from "@/context/auth/authContext"
import Header from "@components/UI/container/header"
import CustomRouter from "@components/router/customRouter"
import Footer from "@components/UI/container/footer"

function App() {
    return (
        <AuthContext>
            <Header />
            <CustomRouter />
            <Footer />
        </AuthContext>
    )
}

export default App
