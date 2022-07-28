import React from "react"
import styles from "./app.module.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Appbar from "./components/navbar/appbar"
import Main from "./components/main/main"
import Footer from "./components/footer/footer"
import Login from "./components/login/login"
import Register from "./components/login/register"
import Cart from "./components/cart/cart"
import ItemList from "./components/item_list/item_list"
import ProductDetail from "./components/product/product_detail"
import Pay from "./components/pay/pay"

function App() {
    return (
        <div className={styles.app}>
            <Router>
                <Switch>
                    <React.Fragment>
                        <Appbar />
                        <Route exact path="/" component={Main} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/items" component={ItemList} />
                        <Route exact path="/cart" component={Cart} />
                        <Route
                            exact
                            path="/items/detail/:id"
                            component={ProductDetail}
                        />
                        <Route exact path="/pay" component={Pay} />
                        <Footer />
                    </React.Fragment>
                </Switch>
            </Router>
        </div>
    )
}

export default App
