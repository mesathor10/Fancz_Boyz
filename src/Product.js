import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';

function Product({id, title, image, price,rating}) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => { 
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title:title,
        image:image,
        price:price,
        rating: rating,
      },
    })
  };
  return (
    <div className='product'>
        <div className="prod_info">
             <p>{title}</p>
        <p className='prod_price'>
            <small>₹ </small>
            <strong>{price}</strong>
        </p>
        <div className='prod_rating'>
            {
                Array(rating).fill().map(() => {
                   return <p>🌟</p>
                })
            }
        </div>
        <img className='prod_img' src={image} alt='' />
        <button onClick={addToBasket}>Add to cart</button>
        </div>
       
    </div>
  )
}

export default Product