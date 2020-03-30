import React, { Fragment } from 'react';
import renderHTML from 'react-render-html';

const Profile = props => {

    const basicInfo = recipe => {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <h1>{recipe.title}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <h2>{recipe.description}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Servings: {recipe.servings} persons</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Preparation Time: {recipe.prepTime} minutes</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Cooking Time: {recipe.cookTime} minutes</h3>
                    </div>
                </div>
            </div>
        );
    }

    const ingredients = (recipe, specials) => {
        return recipe.ingredients.map((ingredient, index) => {

            const special = specials.filter(data => {
                return data.ingredientId == ingredient.uuid;
            });

            return (
                <div>
                    <ul>
                        <li key={ingredient.uuid}>
                            {ingredient.amount} {ingredient.measurement} {ingredient.name}
                            {special.length > 0 ?
                                <div className="special">
                                    <div>{special[0].title}</div>
                                    <div>{special[0].type} </div>
                                    <div>{renderHTML(special[0].text)}</div>
                                </div>
                            : ""}
                        </li>
                    </ul>
                </div>
            );
        });
    }

    const directions = recipe => {
        return recipe.directions.map((instruction, index) => {
            return (
                <li key={index}>
                    {instruction.instructions} <i>{(instruction.optional) ? "(optional)" : ""}</i>
                </li>
            );
        });
    }

    return (
        <Fragment>
            { (Object.keys(props.recipe).length > 0) ?
                <div>
                    <div className="row">
                        <div className="col-sm-4">
                            <img className="medium-img" src={props.recipe.images.medium} alt="recipe image"/>
                        </div>
                        <div className="col-sm-8">
                            {basicInfo(props.recipe)}
                        </div>
                    </div>
                    <div className="row second-row">
                        <div className="col-sm-4">
                            <h3>Ingredients</h3>
                            {ingredients(props.recipe, props.specials)}
                        </div>
                        <div className="col-sm-8">
                            <h3>How to cook</h3>
                            <ol>
                                {directions(props.recipe)}
                            </ol>
                        </div>
                    </div>
                </div>
            :
                <h3>Loading recipe...</h3>
            }
        </Fragment>
    );
}

export default Profile;