// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import React from "react"
import MainPage from "./components/UI/container/mainPage"
import Footer from "./components/UI/container/footer"

function App() {
    return (
        <React.Fragment>
            <MainPage />
            <Footer />
        </React.Fragment>
        // <Router>
        //     <Switch>
        //         <Route exact path="/" component={Test} />
        //         <Route exact path="/test" component={Test2} />
        //     </Switch>
        // </Router>
    )
}

export default App
