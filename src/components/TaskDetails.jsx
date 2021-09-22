import React from 'react';
import { useHistory, useParams } from 'react-router';


import Button from './Button';

import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    };

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique in laborum quibusdam optio!
                    Aspernatur repellat ad doloribus exercitationem numquam autem, deserunt commodi assumenda, minima
                    optio accusamus, earum quae ratione pariatur.
                </p>
            </div>
        </>
    );
}

export default TaskDetails;