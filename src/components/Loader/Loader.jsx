/*import styles*/
import "bootstrap/dist/css/bootstrap.min.css"
import "./Loader.css"

/*import dependencies*/
import React from "react";
import {Spinner} from "reactstrap"


function Loader() {
  return (
    <div className="spinnerContainer">
          <Spinner className="spinnerItem"/>
    </div>
  );
}

export default Loader;