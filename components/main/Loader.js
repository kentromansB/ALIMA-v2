import React from "react";
import { Image } from "react-native";
import loader from "../../assets/LOAD.gif";

const Loader = () => {
  return (
    // eslint-disable-next-line
    <Image
      src={loader}
      style={{
        width: "200px",
        margin: "auto",
        display: "block",
        alt: "Loading",
      }}
    />
  );
};

export default Loader;
