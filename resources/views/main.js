import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RecipeList from './recipe/index';
import RecipeView from './recipe/view';

const Main = props => {
    return (
        <Fragment>
            <Router>
                <Route exact path="/">
                    <RecipeList />
                </Route>
                <Route 
                    exact path="/view/:id"
                    render={
                        (props) => <RecipeView {...props} />
                    }
                >
                </Route>
            </Router>
        </Fragment>
    );
}

export default Main;