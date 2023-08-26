import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket, user}] = useStateValue();
    console.log(basket);
    const login = () => {
        if (user) {
            auth.signOut();
        }
    }
  return (
    
        <nav className='header'>
       
            <Link to="/">
              <img className='logo' src='fzb_logo.svg' alt='' />

          </Link>
       
          

          <div className="search_bar">
              <input type='text' className='header_search' />
              <SearchIcon className="search_icon" />
          </div>

          <div className='header_nav'>
              <Link to={!user && "/login"} className='header_link'>
                  <div onClick={login} className='header_option'>
                      <span className='option1'>Hello {user?.email}</span>
                      <span className='option2'>{user ? "Sign Out" : "Sign In"}</span>
                  </div>
              </Link>

              <Link to="/login" className='header_link'>
                  <div className='header_option'>
                      <span className='option1'>Return</span>
                      <span className='option2'>Orders</span>
                  </div>
              </Link>

              <Link to="/checkout" className='basket_link'>
                  <div className='basket'>
                      <ShoppingCartOutlinedIcon className='cart_icon'/>
                      <span className=' basket_count'>{basket.length}</span>
                  </div>
              </Link>


          </div>
      </nav>  
  )
}

export default Header