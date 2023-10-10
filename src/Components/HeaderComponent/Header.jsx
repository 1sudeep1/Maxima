import React, { useEffect, useState } from 'react'
import "./header.scss"
import logo from "/images/logo.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header() {
  const { quantity } = useSelector((state) => state.cart)
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  return (
    <>
      <header className={`${isScrolled ? 'header-fix' : ''}`}>
        <div className="container my-1">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4 col-sm-6">
              <Link to="/"><img className='logo img-fluid thumbnails' src={logo} alt="" /></Link>
            </div>
            <div className="col-lg-4">
              <form action="">
                <div className='position-relative search'>
                  <input type="text" className='form-control' placeholder='Search Item' />
                  <Link to="/search-product"> <i className="fa-solid fa-magnifying-glass position-absolute"></i></Link>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <ul className='d-flex fs-4 gap-5 justify-content-end text-center align-items-center header-icon'>
                <li><Link to="/wishlist" title='wishlist'><i className="fa-solid fa-heart"></i>
                  <p>wishlist</p></Link>
                </li>
                <li className='position-relative'><Link to="/cart-items" title='cart'><i className="fa-solid fa-cart-shopping"></i>
                  <p>My Cart</p>
                  <p className='position-absolute cart-badge'>{quantity}</p></Link>
                </li>
                <li><Link to="/login" title='signup/signin'><i className="fa-solid fa-user"></i>
                  <p>My account</p></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header
