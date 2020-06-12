import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./App.css";
import APODCard from "./components/APODCard.js";
import APODList from "./components/APODList";
import styled from 'styled-components';
import Button from "./components/Button"

const WrapperDiv = styled.div`
font-family: sans-serif;
text-align: center;
color: purple;
`;

function App() {
  const [image, setImage] = useState({});
  useEffect(() => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=qcrT3FxbkWyc5bOnw4P1Z5v2SuvrgOjmvuTVnv9U")
      .then(response => {
      console.log(response.data);
      setImage(response.data)
      })
      .catch(error => {
      console.log("Problem, the data was not returned", error);  
      });
  }, []);

  return (
    <WrapperDiv>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun okay sounds good! <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {/* //<Button></Button> */}
      <APODCard image={image} />
      <Button type="primary">Primary</Button>
    </WrapperDiv>
  );
}

export default App;
