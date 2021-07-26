import React from 'react'

export default function GrayCard(props) {

    const {title, description, pic} = props;
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={pic}/>
        </div>
    )
}
