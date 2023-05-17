import React from "react";

function Alert(props) {

  const capitalizeFirstLowercaseRest = str => {
    return (
      str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    );
  };
  return (
    props.alert && (
      <div
      // className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        {capitalizeFirstLowercaseRest(props.alert.type)} : {props.alert.msg}
       
      </div>
    )
  );
}

export default Alert;
