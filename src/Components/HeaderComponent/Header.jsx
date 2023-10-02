import React from 'react'
import "./header.scss"
import logo from "/images/logo.png"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <header>
        <div className="container my-1">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4 col-sm-6">
              <Link to="/"><img className='logo img-fluid thumbnails' src={logo} alt="" /></Link>
            </div>
            <div className="col-lg-4">
              <form action="">
                <div className='position-relative search'>
                  <input type="text" className='form-control' placeholder='Search Item' />
                  <i className="fa-solid fa-magnifying-glass position-absolute"></i>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <ul className='d-flex fs-4 gap-5 justify-content-end text-center align-items-center header-icon'>
                <li><i className="fa-solid fa-heart"></i>
                  <p>wishlist</p>
                </li>
                <li className='position-relative'><i className="fa-solid fa-cart-shopping"></i>
                  <p>My Cart</p>
                  <p className='position-absolute cart-badge'>0</p>
                </li>
                <li><i className="fa-solid fa-user"></i>
                  <p>My account</p>
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
