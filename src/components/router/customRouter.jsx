import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Main from "@components/UI/container/main"
import Carousel from "../UI/blocks/carousel/carousel"
const CustomRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Carousel} />
            </Switch>
        </Router>
    )
}

export default CustomRouter
