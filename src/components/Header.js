import { IconButton } from "@material-ui/core";
import React from "react";
import formimage from "../../src/images/forms_2020q4_48dp.png";
import Avatar from "@material-ui/core/Avatar";
import avatarimage from "../../src/images/2.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header_info">
        <img
          src={formimage}
          className="form_image"
          alt="form-img"
        />
        <div className="info">Form builder</div>
      </div>

      <div className="header_right">
        <IconButton>
          <Avatar className="avatar" src={avatarimage} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
