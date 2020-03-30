import React, { useEffect, useState } from 'react';
import Table from '../components/table';
import { getRecipes } from '../../services/api';
import apiConfig from '../../config/api';

const RecipeList = props => {

    const [recipes, setRecipes] = useState({});
    const apiHost = apiConfig.host;

    useEffect(() => {
        getRecipes().then((response) => {
            response.map((recipe, index) => {
                response[index].images.full = `${apiHost}/${recipe.images.full}`;
                response[index].images.medium = `${apiHost}/${recipe.images.medium}`;
                response[index].images.small = `${apiHost}/${recipe.images.small}`;
            });

            setRecipes(response);
        });
    }, []);

    return (
        <Table
            tableName="Recipes"
            tableData={recipes}
        />
    );
}

export default RecipeList;