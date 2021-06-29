import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import Home from "../Routes/Home";
import Detail from "../Routes/Detail";
import Add from "../Routes/Add";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <Router>
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/add" component={Add} />
                <Route path="/edit/:id" exact component={Detail} />
            </Switch>
        </>
    </Router>
);
