import React from "react";
import form_image from "../../src/images/google-forms-new-logo-1.png";
import { AiOutlineEye } from "react-icons/ai";
import { IconButton } from "@material-ui/core";
import avatarimage from "../../src/images/2.jpg";
import { IoMdFolderOpen } from "react-icons/io";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { useParams } from "react-router";

const Formheader = () => {
  const history = useHistory();
  const [{ doc_name }] = useStateValue();
  let { id } = useParams();

  const navigates = () => {
    history.push(`/response/${id}`)
  }

  return (
    <>
      <div className="form_header">
        <div className="form_header_left">
          <img src={form_image} alt="form-img" />
          <input
            type="text"
            placeholder="Untitled form"
            className="form_name"
            value={doc_name}
            disabled
          ></input>
          <IoMdFolderOpen className="form_header_icon"></IoMdFolderOpen>
        </div>

        <div className="form_header_right">
          <span className="eye_icon">Submit the form after data is saved...</span>
          <IconButton onClick={() => navigates()}>
            <AiOutlineEye className="form_header_icon" />
          </IconButton>

          <IconButton>
            <Avatar className="avatar_img" src={avatarimage} />
          </IconButton>
        </div>
      </div>

    </>
  );
}

export default Formheader;
