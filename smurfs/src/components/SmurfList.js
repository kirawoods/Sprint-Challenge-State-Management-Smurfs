import React, { useContext } from "react";

import { SmurfContext } from "../contexts/SmurfContext";
import { Smurf } from "./Smurf";

export const SmurfList = () => {
  const { smurfState, dispatch } = useContext(SmurfContext);

  return (
    <div>
      {smurfState.map((smurf, index) => {
        return <Smurf key={index} props={smurf} dispatch={dispatch} />;
      })}
    </div>
  );
};
