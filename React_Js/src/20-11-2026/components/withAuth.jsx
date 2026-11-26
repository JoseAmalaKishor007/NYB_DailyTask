 
import React from "react";

function withAuth(WrappedComponent) {

  function EnhancedComponent(props) {

    if (props.isLoggedIn === true) {
      return <WrappedComponent />;
    } 
    else {
      return <h2>Please Login First!</h2>;
    }

  }

  return EnhancedComponent;
}

export default withAuth;
