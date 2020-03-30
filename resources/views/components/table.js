import React, { Fragment } from 'react';

const Table = props => {

    const goToRecipe = uuid => {
        window.location.href = `http://localhost:3000/view/${uuid}`;
    }

    const renderTableHeader = () => {
        return (
            <tr>
                <th>Photo</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
        );
    }

    const renderTableData = data => {
        if (Object.keys(data).length > 0) {
            return data.map((recipe, index) => {
                return (
                    <tr key={recipe.uuid}>
                       <td>
                           <img className="small-img" src={recipe.images.small} alt="recipe image"/>
                       </td>
                        <td>{recipe.title}</td>
                        <td>{recipe.description}</td>
                        <td>
                            <button onClick={() => { goToRecipe(recipe.uuid); }} type="button" className="btn btn-info">View</button>
                        </td>
                    </tr>
                );
            });
        } else {
            return (
                <tr><td span="5">No data</td></tr>
            );
        }
    }

    return (
        <Fragment>
            <div>
                <h1>{props.tableName}</h1>
                <table className="table" id={props.tableName}>
                    <thead className="thead-light">
                        {renderTableHeader()}
                    </thead>
                    <tbody>
                        {renderTableData(props.tableData)}
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}

export default Table;