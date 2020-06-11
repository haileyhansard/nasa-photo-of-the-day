import React, { useState, useEffect } from "react";
import axios from "axios";
import APODCard from "./APODCard";

export default function APODList() {
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=qcrT3FxbkWyc5bOnw4P1Z5v2SuvrgOjmvuTVnv9U")
        .then(response => {
        console.log(response.data);
        setPictures(response.data)
        })
        .catch(error => {
        console.log("Problem, the data was not returned", error);  
        });
    }, []);
    return (
    <div>
        <h3>Pictures</h3>
        {/* <img src={pictureOfApod}/> */}
    </div>
    );
}