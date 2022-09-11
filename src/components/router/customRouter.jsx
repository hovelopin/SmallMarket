import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Main from "@components/UI/container/main"
import LoginContainer from "@components/UI/container/loginContainer"
import AdminContainer from "@components/UI/container/adminContainer"

const CustomRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/login" component={LoginContainer} />
                <Route exact path="/admin" component={AdminContainer} />
            </Switch>
        </Router>
    )
}

export default CustomRouter
