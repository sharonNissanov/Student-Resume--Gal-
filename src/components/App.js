import React from "react";
import Particless from "./Particless";

const styles = {
    root: {
      height: "auto",
      background: "black",
      position:"fixed"
    }
  };
  
  const App = () => (
    <div style={styles.root}>
      <Particless height="auto"/>
    </div>
  );
  export default App