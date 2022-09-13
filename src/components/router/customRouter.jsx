import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Main from "@components/UI/container/main"
import LoginContainer from "@components/UI/container/loginContainer"
import RegisterContainer from "@components/UI/container/registerContainer"
import AdminContainer from "@components/UI/container/adminContainer"
import CartContainer from "@components/UI/container/cartContainer"
import NotFound from "@components/UI/container/NotFound"

const CustomRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/login" component={LoginContainer} />
                <Route exact path="/register" component={RegisterContainer} />
                <Route exact path="/admin" component={AdminContainer} />
                <Route exact path="/cart" component={CartContainer} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default CustomRouter
