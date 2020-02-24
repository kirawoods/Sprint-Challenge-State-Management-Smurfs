import React, { useState, useReducer, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { SmurfContext } from "../contexts/SmurfContext";
import { initialSmurfs } from "../data";
import { reducer } from "../reducers";
import { SmurfList } from "./SmurfList";
import { AddSmurf } from "./AddSmurf";
const App = () => {
  const [loader, setLoader] = useState([]);

  const getSmurfs = () => {
    return axios.get("http://localhost:3333/smurfs").then(res => {
      console.log("res in axios: ", res.data);
      setLoader(res.data);
    });
  };
  useEffect(() => {
    getSmurfs();
  }, []);

  const [smurfState, dispatch] = useReducer(reducer, initialSmurfs);

  return (
    <SmurfContext.Provider value={{ smurfState, dispatch }}>
      <div className="App">
        <h1>SMURFS! Using Redux</h1>
        <SmurfList />
        <AddSmurf />
      </div>
    </SmurfContext.Provider>
  );
};

export default App;
