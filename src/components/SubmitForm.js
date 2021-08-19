import React from 'react'
import { Typography } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import { useHistory } from 'react-router-dom';

const SubmitForm = () => {
    var [{ doc_name, doc_id }] = useStateValue()
    let history = useHistory();

    const submit = () => {
        history.push(`/response/${doc_id}`)
    }
    const back = () => {
        history.push(`/`)
    }

    return (
        <div className="submit">
            <div className="user_form">
                <div className="user_form_section">
                    <div className="user_title_section">
                        <Typography className="form_name" >{doc_name}</Typography>
                        <br></br>
                        <Typography className="response_text" >Your response has been recorded.</Typography>
                        <br></br>
                        <button className="submit_text" onClick={() => submit()}>Submit another response</button>
                        &nbsp;&nbsp;
                        <a href="/#" className="submit_text" onClick={() => back()}>
                            Go back
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubmitForm;
