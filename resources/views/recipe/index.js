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
                if ('images' in response[index] && Object.keys(response[index].images).length > 0) {
                    response[index].images.full = `${apiHost}${recipe.images.full}`;
                    response[index].images.medium = `${apiHost}${recipe.images.medium}`;
                    response[index].images.small = `${apiHost}${recipe.images.small}`;
                } else {
                    response[index]["images"]["full"] = `http://localhost:3000/public/img/missing.png`;
                    response[index]["images"]["medium"] = `http://localhost:3000/public/img/missing.png`;
                    response[index]["images"]["small"] = `http://localhost:3000/public/img/missing.png`;
                }
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