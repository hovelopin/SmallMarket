import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Main from "@components/UI/container/main"
import LoginContainer from "@components/UI/container/loginContainer"
import Carousel from "../UI/blocks/carousel/carousel"
const CustomRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Carousel} />
                <Route exact path="/login" component={LoginContainer} />
            </Switch>
        </Router>
    )
}

export default CustomRouter
