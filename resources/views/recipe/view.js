import React, { useEffect, useState, Fragment } from 'react';
import { getRecipeById, getSpecials } from '../../services/api';
import apiConfig from '../../config/api';
import Profile from '../components/profile';

const RecipeView = props => {
    
    const uuid = props.match.params.id;
    const apiHost = apiConfig.host;
    const [recipe, setRecipe] = useState({});
    const [specials, setSpecials] = useState({});

    useEffect(() => {
        getSpecials().then((response) => {
            setSpecials(response);
        });

        getRecipeById(uuid).then((response) => {

            if (Object.keys(response).length > 0) {
                if ('images' in response && Object.keys(response.images).length > 0) {
                    response.images.full = `${apiHost}${response.images.full}`;
                    response.images.medium = `${apiHost}${response.images.medium}`;
                    response.images.small = `${apiHost}${response.images.small}`;
                } else {
                    response["images"]["full"] = `http://localhost:3000/public/img/missing.png`;
                    response["images"]["medium"] = `http://localhost:3000/public/img/missing.png`;
                    response["images"]["small"] = `http://localhost:3000/public/img/missing.png`;
                }

                setRecipe(response);
            }
        });
    }, []);

    return (
        <Profile
            recipe={recipe}
            specials={specials}
        />
    );
}

export default RecipeView;