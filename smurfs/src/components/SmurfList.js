import React, { useContext } from "react";

import { SmurfContext } from "../contexts/SmurfContext";

export const SmurfList = () => {
  const { smurfState, dispatch } = useContext(SmurfContext);

  return (
    <div>
      {smurfState.map((smurf, index) => {
        return (
          <p key={index} props={smurf} dispatch={dispatch}>
            {smurf.name}
          </p>
        );
      })}
    </div>
  );
};
