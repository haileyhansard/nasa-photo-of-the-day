import React from 'react';

const APODCard = (props) => {
    const {image} = props;
    return (
    <div>
        <h2>Astronomy Picture of the Day</h2>
    <h3>{image?.title}</h3>
    <img src={image?.url} alt={image?.title} />
    <p>{image?.explanation}</p>
    </div>

    )
}

export default APODCard;