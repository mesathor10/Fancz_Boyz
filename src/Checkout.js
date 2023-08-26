import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import "./Checkout.css"
import Subtotal from './Subtotal';


function Checkout() {
    const [{basket}] = useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout_left">
             <img className='checkout_ad' src="header101.svg" alt="" />
    
    {basket?.length === 0 ? (
        <div>
            <h2>This Basket is empty</h2>
            <hr />
        </div>
    ) : ( 
        <div>
            <h2 className='chechout_title'>Your Shopping Basket</h2>
            <hr />
            {basket?.map((item => (
                
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
            )))}
        </div>
        
     )}
    
        </div>
        {basket.length > 0 && (
        <div className="checkout_right">
            <Subtotal />
        </div>
    )}
   
    </div>
    );
}

export default Checkout