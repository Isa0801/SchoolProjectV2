import React from "react";

const Home = () => {


  const tempStyle = {
    textAlign: "center",
    width: "99vw",
    height: "100vh",
    paddingTop: "5%",
    backgroundColor: "rgb(27, 28, 34)"
  };

  return (
  <div style={tempStyle}>
    <h1 style={{color:"white"}}>
      Home is where localhost is
    </h1>
  </div>
  );
}

export default Home;
