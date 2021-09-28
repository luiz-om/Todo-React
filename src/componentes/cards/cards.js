import React from 'react';
import "./cards.css"

const Card = (props) => {
    const { callback, item } = props;

    return (
        <div>
            <i className="fa fa-map-pin" aria-hidden="true"></i>
            <div
                className="card"
                style={{ background: item.color }}
                onDoubleClick={() => callback(item)}
            >
                
                <h3>{item.text}</h3>
            </div>

        </div>

    )
}



export default Card
