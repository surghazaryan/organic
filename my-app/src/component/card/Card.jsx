import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {deleteProduct, selectCard} from "../../features/ProductSlice.js";


const Card = () => {
    const card = useSelector(selectCard);
    const dispatch = useDispatch();
    return (
        <div>
            {
                card.length === 0 ? <p>Card is empty</p>:

                  <div>
                      {card.map((item, index) => (
                          <div className="card" key={item.id}>
                              <Link to={"/"}>{item.category}</Link>
                              <img src={item.img} alt="img"/>
                              <h3>{item.name}</h3>
                              <p>{item.price}</p>
                              <button style={{background:"red"}} onClick={()=>dispatch(deleteProduct(item.id))}>Delete</button>
                          </div>
                      ))}
                  </div>

            }
        </div>
    );
};

export default Card;