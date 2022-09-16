import AuthContext from "@/context/auth/authContext"
import CustomRouter from "@components/router/customRouter"
import Footer from "@components/UI/container/footer"

function App() {
    return (
        <AuthContext>
            <CustomRouter />
            <Footer />
        </AuthContext>
    )
}

export default App
