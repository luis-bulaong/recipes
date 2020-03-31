import React, { useEffect, useState, Fragment } from 'react';
import Table from '../components/table';
import { getRecipes } from '../../services/api';
import apiConfig from '../../config/api';
import serverConfig from '../../config/server';

const RecipeList = props => {

    const [recipes, setRecipes] = useState({});
    const apiHost = apiConfig.host;

    const goToAdd = () => {
        window.location.href = `http://${serverConfig.host}:${serverConfig.port}/add`;
    }

    useEffect(() => {
        getRecipes().then((response) => {
            response.map((recipe, index) => {
                if ('images' in response[index] && Object.keys(response[index].images).length > 0) {
                    response[index].images.full = `${apiHost}${recipe.images.full}`;
                    response[index].images.medium = `${apiHost}${recipe.images.medium}`;
                    response[index].images.small = `${apiHost}${recipe.images.small}`;
                } else {
                    response[index]["images"]["full"] = `http://${serverConfig.host}:${serverConfig.port}/public/img/missing.png`;
                    response[index]["images"]["medium"] = `http://${serverConfig.host}:${serverConfig.port}/public/img/missing.png`;
                    response[index]["images"]["small"] = `http://${serverConfig.host}:${serverConfig.port}/public/img/missing.png`;
                }
            });

            setRecipes(response);
        });
    }, []);

    return (
        <Fragment>
            <div>
                <div className="d-flex justify-content-end bd-highlight mb-3">
                    <input className="btn btn-primary" type="submit" value="Add Recipe" onClick={goToAdd} />
                </div>
            </div>
            <Table
                tableName="Recipes"
                tableData={recipes}
            />
        </Fragment>
    );
}

export default RecipeList;