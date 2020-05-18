import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import useAxiosWithAuth from "../hooks/useAxiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const axios = useAxiosWithAuth();

  useEffect( async () => {
    const response = await axios.get('http://localhost:5000/api/colors');
    setColorList(response.data); 
  }, [] );
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
