import React from 'react';
import {useSelector} from "react-redux";
import {selectCard} from "../../features/ProductSlice.js";

const Card = () => {
    const card = useSelector(selectCard);
    return (
        <div>
            {
                card.length === 0 ? <p>Card is empty</p>:
                    <ul>
                        {card.map((item, index) => (
                            <li key={index}>
                                <img src={item.img} alt={item.name} width="80" />
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>Price: ${item.price}</p>
                                    <p>Category: {item.category}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
            }
        </div>
    );
};

export default Card;