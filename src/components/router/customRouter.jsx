import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MainPage from "../UI/container/mainPage"

const CustomRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage} />
            </Switch>
        </Router>
    )
}

export default CustomRouter
