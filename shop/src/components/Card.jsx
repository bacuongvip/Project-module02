import React, { useState } from 'react'

function Card({listItem, quatityUpdate}) {
    const [quatity, setQuatity] = useState(0);
    const handleDown = (i) => {
        setQuatity((pre) => {
            const counter = pre > 0 ? pre - 1 : 0;
            quatityUpdate(counter, i);
            return counter;
        });
    };
    const handleUp = (i) => {
        setQuatity((pre) => {
            const counter = pre + 1;
            quatityUpdate(counter, i);
            return counter;
        });
    };
    return (
        <div className="row">
            {listItem.map((element, index) => {
                return (<div className="card" key={index}>
                <img src={element.imageUrl} />
                <p>{element.name}</p>
                <p>{element.heading}</p>
                <p>{element.des}</p>
                <div className="footer">
                    <div>${element.price}</div>
                    <div className="form">
                        <button className="sell" onClick={()=> handleDown(index)}>&lt;</button>
                        <span className="number">{element.qty}</span>
                        <button className="buy" onClick={()=> handleUp(index)}>&gt;</button>
                    </div>
                </div>
            </div>)
            })}
            
        </div>
    )
}

export default Card