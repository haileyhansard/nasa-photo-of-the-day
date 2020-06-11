import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./App.css";
import APODCard from "./components/APODCard.js";
import APODList from "./components/APODList";

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
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun okay sounds good! <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <APODCard image={image} />
    </div>
  );
}

export default App;
