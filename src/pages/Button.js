/* Write a button component */

import React from 'react';

const Button = (props) => {

  return (

    <button className="btn btn-warning btn-sm btn-outline-dark"  onClick={props.onClick}>{props.text}</button>

  );

}

export default Button;
