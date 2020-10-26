import React from "react";
import Particless from "./Particless";

const styles = {
    root: {
      //textAlign: "center",
        height: "auto",
      // minWidth:"100%",
      background: "black",
      // display: "flex",
     //  justifyContent: "center",
      // alignItems: "center"
      position:"fixed"
    }
  };
  
  const App = () => (
    <div style={styles.root}>
      <Particless height="auto"/>
    </div>
  );
  export default App