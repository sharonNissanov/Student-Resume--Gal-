import React from "react";
import Particless from "./Particless";

const styles = {
    root: {
      fontFamily: "sans-serif",
      textAlign: "center",
      height: "100%",
      minWidth:"100%",
      background: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  };
  
  const App = () => (
    <div style={styles.root}>
      <Particless />
    </div>
  );
  export default App