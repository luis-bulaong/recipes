import React, { Fragment, useState } from 'react';
import moment from 'moment';
import { addRecipe } from '../../services/api';
import serverConfig from '../../config/server';

const AddRecipe = props => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [serving, setServing] = useState("");
    const [preparation, setPreparation] = useState("");
    const [cooking, setCooking] = useState("");
  
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const recipe = {
            title: title,
            description: description,
            servings: serving,
            prepTime: preparation,
            cookTime: cooking,
            images: {},
            ingredients: [],
            directions: [],
            postDate: moment().format('MM/DD/YYYY hh:mm:ss A'),
            editDate: moment().format('MM/DD/YYYY hh:mm:ss A'),
        }

        addRecipe(recipe).then(response => {
            if (Object.keys(response).length > 0 && 'uuid' in response) {
                window.location.href = `http://${serverConfig.host}:${serverConfig.port}/view/${response.uuid}`;
            }
        });
    }

    const goToList = () => {
        window.location.href = `http://${serverConfig.host}:${serverConfig.port}`;
    }

    return (
        <Fragment>
            <div>
                <div className="d-flex justify-content-end bd-highlight mb-3">
                    <input className="btn btn-primary" type="submit" value="Go back to List" onClick={goToList} />
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Title:
                        <input className="form-control" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Description:
                        <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Serving:
                        <input className="form-control" type="text" value={serving} onChange={e => setServing(e.target.value)} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Preparation Time:
                        <input className="form-control" type="text" value={preparation} onChange={e => setPreparation(e.target.value)} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Cooking Time:
                        <input className="form-control" type="text" value={cooking} onChange={e => setCooking(e.target.value)} />
                    </label>
                </div>
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        </Fragment>
    );
}

export default AddRecipe;