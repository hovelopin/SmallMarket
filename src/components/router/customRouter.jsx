import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "@components/UI/container/header"
import Main from "@components/UI/container/main"
import LoginContainer from "@components/UI/container/loginContainer"
import RegisterContainer from "@components/UI/container/registerContainer"
import AdminContainer from "@components/UI/container/adminContainer"
import CartContainer from "@components/UI/container/cartContainer"
import ProductContainer from "@components/UI/container/productContainer"
import DetailContainer from "@components/UI/container/detailContainer"
import FairTradeContainer from "@components/UI/container/fairTradeContainer"
import ContactContainer from "@components/UI/container/contactContainer"
import NotFound from "@components/UI/container/NotFound"

const CustomRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/login" component={LoginContainer} />
                <Route exact path="/register" component={RegisterContainer} />
                <Route exact path="/admin" component={AdminContainer} />
                <Route exact path="/cart" component={CartContainer} />
                <Route
                    exact
                    path="/items/:category"
                    component={ProductContainer}
                />
                <Route exact path="/detail" component={DetailContainer} />
                <Route exact path="/about" component={FairTradeContainer} />
                <Route exact path="/contact" component={ContactContainer} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default CustomRouter
