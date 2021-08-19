import React from 'react'
import StorageIcon from '@material-ui/icons/Storage';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import doc_image from "../../src/images/form.png"
import { useHistory } from "react-router-dom";

const Card = (props) => {
    const history = useHistory();

    const navigate_to = () => {
        history.push("/form/" + props.formData.id)
    }

    return (
        <>
        {
            props.formData ? 
            <div className="doc_card" onClick={() => { navigate_to() }}>
                <img src={doc_image} className="doc_card_image" alt="New form"></img>
                <div className="doc_card_content">
                    <h5>{props.formData && props.formData.name ? props.formData.name : "Untitled Doc"}</h5>
                    <div className="doc_content">
                        <div className="content_left">
                            <StorageIcon className="storage_icon" />{props.formData && props.formData.date ? props.formData.date : "Date not available"}
                        </div>
                        <MoreVertIcon className="more_vert" />
                    </div>
                </div>
            </div> : ''
        }
        </>
    )
}

export default Card;
