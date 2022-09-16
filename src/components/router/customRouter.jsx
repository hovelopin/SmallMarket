import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AuthContext from "@/context/auth/authContext"
import Main from "@components/UI/container/main"
import LoginContainer from "@components/UI/container/loginContainer"
import RegisterContainer from "@components/UI/container/registerContainer"
import AdminContainer from "@components/UI/container/adminContainer"
import CartContainer from "@components/UI/container/cartContainer"
import ProductContainer from "@components/UI/container/productContainer"
import DetailContainer from "@components/UI/container/detailContainer"
import NotFound from "@components/UI/container/NotFound"

const CustomRouter = () => {
    return (
        <AuthContext>
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/login" component={LoginContainer} />
                    <Route
                        exact
                        path="/register"
                        component={RegisterContainer}
                    />
                    <Route exact path="/admin" component={AdminContainer} />
                    <Route exact path="/cart" component={CartContainer} />
                    <Route exact path="/items" component={ProductContainer} />
                    <Route exact path="/detail" component={DetailContainer} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </AuthContext>
    )
}

export default CustomRouter
