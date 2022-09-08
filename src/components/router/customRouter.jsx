import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Main from "@components/UI/container/main"

const CustomRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
            </Switch>
        </Router>
    )
}

export default CustomRouter
