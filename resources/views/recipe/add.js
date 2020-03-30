import React, { Fragment, useState } from 'react';

const AddRecipe = props => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [serving, setServing] = useState("");
    const [preparation, setPreparation] = useState("");
    const [cooking, setCooking] = useState("");
  
    const handleSubmit = (evt) => {
        evt.preventDefault();
        
    }

    return (
        <Fragment>
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