import React, { useEffect, useState, Fragment } from 'react';
import { getRecipeById } from '../../services/api';

const RecipeView = props => {
    
    const uuid = props.match.params.id;

    useEffect(() => {
        getRecipeById(uuid).then((response) => {
            console.log(response);
        });
    }, []);

    return (
        <Fragment>
            <div>
                <p>Test</p>
            </div>
        </Fragment>
    );
}

export default RecipeView;