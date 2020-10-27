import React from 'react';
import Header from '../elements/Header/Header'
import Home from '../Home/Home'
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import NotFound from "../elements/NotFound/NotFound";
import Movie from "../Movie/Movie";


const App = () => {

    console.log("This is the process.env", process.env.PUBLIC_URL);
    return (
        <BrowserRouter>
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path={"/"} component={Home} exact />
                    <Route path={"/not-found"} component={NotFound} exact />
                    <Route path={"/:movieId"} component={Movie} exact />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    )
}

export default App;