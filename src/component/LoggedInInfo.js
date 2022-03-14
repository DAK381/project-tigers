import React from "react";
import { NavLink } from "react-router-dom";

const LoggedInInfo = props => {
  const { username, email, password, } =
    (props.location && props.location.state) || {};
  return (
    <div>
      <NavLink to="/" activeClassName="active">
        Go to Home Page
      </NavLink>
      <div className="form-details">
        <div>
          <strong>Username:</strong> {username}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
        <div>
          <strong>Password:</strong> {password}
        </div>
      </div>
    </div>
  );
};

export default LoggedInInfo ;
