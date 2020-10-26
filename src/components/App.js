import React from "react";
import Particless from "./Particless";

const styles = {
    root: {
      //textAlign: "center",
       // height: "100%",
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
      <Particless />
    </div>
  );
  export default App