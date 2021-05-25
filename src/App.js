import Axios from "axios";
import "./App.css";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    var headers = {
      coId: 3,
      "x-functions-key":
        "yRQWgvSEnzpRb36y/tfaP7Ogc65hsaaf/JDFU5zHaut8wrbCm6Gqzw==",
    };
    Axios.post(
      "https://soffos-dev.azurewebsites.net/api/discussion/open/start",
      {},
      {
        headers: headers,
        withCredentials: true,
        credentials: "same-origin",
      }
    )
      .then((res) => {
        console.log("response success ==> ", res);
      })
      .catch((err) => {
        console.log("response failed ==> ", err);
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Pure Testing</h1>
      {/* <h2>{_cookie}</h2> */}
    </div>
  );
}

export default App;
