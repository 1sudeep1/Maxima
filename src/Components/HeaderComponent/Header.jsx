import React, { useEffect, useState } from 'react'
import "./header.scss"
import logo from "/images/logo.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header() {
  const { quantity } = useSelector((state) => state.cart)
  const { quantity1 } = useSelector((state) => state.wishlist)
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
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
            <div className="col-lg-4 col-sm-4 col-4 col-md-4">
              <Link to="/"><img className='logo img-fluid thumbnails' src={logo} alt="" /></Link>
            </div>
            <div className="col-lg-4 col-8 col-sm-8 col-md-4">
              <form action="">
                <div className='position-relative search'>
                  <input type="text" className='form-control' placeholder='Search Item' />
                  <Link to="/search-product"> <i className="fa-solid fa-magnifying-glass position-absolute"></i></Link>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-12 col-sm-12 col-md-4">
              <ul className='d-flex fs-4 gap-5 justify-content-end text-center align-items-center header-icon'>

                <li className='hambergur'>
                  <div>
                    <Link className="btn btn-primary text-white" data-bs-toggle="offcanvas" to="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                      <i className="fa-solid fa-bars"></i>
                    </Link>
                    <div className="offcanvas offcanvas-start w-75" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                      <div className="offcanvas-header m-0 ps-2 border">
                        <h3 className="offcanvas-title fw-bold" id="offcanvasExampleLabel">Category</h3>
                        <button type="button" className="btn-close fs-6" data-bs-dismiss="offcanvas" aria-label="Close" />
                      </div>
                      <div className="offcanvas-body p-0 text-start">
                        <div className="dropdown border ps-2">
                          <Link to="/new-arrivals"><div className="btn m-0 p-0" type="button">
                            New Arrivals
                          </div></Link>
                        </div>
                        <div className="dropdown border ps-2">
                          <div className="btn dropdown-toggle m-0 p-0" type="button" data-bs-toggle="dropdown">
                            Laptops and Computers
                          </div>
                          <ul className="dropdown-menu m-0 p-0">
                            <Link to="/laptop-computer-category/monitor-tv"><li className='border'>Monitors and TV</li></Link>
                            <Link to="/laptop-computer-category/macbooks"><li className='border'>Macbooks</li></Link>
                            <Link to="/laptop-computer-category/acer-laptops"><li className='border'>Acer Laptops</li></Link>
                            <Link to="/laptop-computer-category/asus-laptops"><li className='border'>Asus Laptops</li></Link>
                            <Link to="/laptop-computer-category/hp-laptops"><li className='border'>HP Laptops</li></Link>
                            <Link to="/laptop-computer-category/dell-laptops"><li className='border'>Dell Laptops</li></Link>
                          </ul>
                        </div>
                        <div className="dropdown border ps-2">
                          <div className="btn dropdown-toggle m-0 p-0" type="button" data-bs-toggle="dropdown">
                            Mobile and Tablets
                          </div>
                          <ul className="dropdown-menu m-0 p-0">
                            <Link to="/mobile-tablet-category/apple-phones"><li className='border'>Apple Phones</li></Link>
                            <Link to="/mobile-tablet-category/samsung-phones"><li className='border'>Samsung Phones</li></Link>
                            <Link to="/mobile-tablet-category/xiaomi-phones"><li className='border'>Xiaomi Phones</li></Link>
                            <Link to="/mobile-tablet-category/mobile-accessories"><li className='border'>Mobile Accessories</li></Link>
                            <Link to="/mobile-tablet-category/tablets"><li className='border'>Tablets</li></Link>
                          </ul>
                        </div>
                        <div className="dropdown border ps-2">
                          <div className="btn dropdown-toggle m-0 p-0" type="button" data-bs-toggle="dropdown">
                            Audios
                          </div>
                          <ul className="dropdown-menu m-0 p-0">
                            <Link to="/audio-category/headphones-headsets"><li className='border'>Headphones and Headsets</li></Link>
                            <Link to="/audio-category/gaming-headphones"><li className='border'>Gaming Headphones</li></Link>
                            <Link to="/audio-category/speakers"><li className='border'>Speakers</li></Link>
                            <Link to="/audio-category/earbuds"><li className='border'>Earbuds</li></Link>
                          </ul>
                        </div>
                        <div className="dropdown border ps-2">
                          <div className="btn dropdown-toggle m-0 p-0" type="button" data-bs-toggle="dropdown">
                            Storage
                          </div>
                          <ul className="dropdown-menu m-0 p-0">
                            <Link to="/storage-category/external-hard-drives"><li className='border'>External Harddrives</li></Link>
                            <Link to="/storage-category/internal-hard-drives"><li className='border'>Internal Harddrives</li></Link>
                            <Link to="/storage-category/flash-drives"><li className='border'>Flash Drives</li></Link>
                          </ul>
                        </div>
                        <div className="dropdown border ps-2">
                          <div className="btn dropdown-toggle m-0 p-0" type="button" data-bs-toggle="dropdown">
                            Wearable
                          </div>
                          <ul className="dropdown-menu m-0 p-0">
                            <Link to="/wearable-category/smart-watches"><li className='border'>Smartwatches</li></Link>
                            <Link to="/wearable-category/virtual-reality"><li className='border'>Virtual reality</li></Link>
                            <Link to="/wearable-category/fitness-activity-tracker"><li className='border'>Fitness and Activity Trackers</li></Link>
                          </ul>
                        </div>
                        <div className="dropdown border ps-2">
                          <div className="btn dropdown-toggle m-0 p-0" type="button" data-bs-toggle="dropdown">
                            Cameras
                          </div>
                          <ul className="dropdown-menu m-0 p-0">
                            <Link to="/camera-category/webcams"><li className='border'>Webcams</li></Link>
                            <Link to="/camera-category/home-security-cameras"><li className='border'>Home Security Cameras</li></Link>
                            <Link to="/camera-category/drones"><li className='border'>Drones</li></Link>
                            <Link to="/camera-category/dslr-cameras"><li className='border'>DSLR Cameras</li></Link>
                            <Link to="/camera-category/camera-accessories"><li className='border'>Camera Accessories</li></Link>
                          </ul>
                        </div>
                        <div className="dropdown border ps-2">
                          <div className="btn dropdown-toggle m-0 p-0" type="button" data-bs-toggle="dropdown">
                            Network Products
                          </div>
                          <ul className="dropdown-menu m-0 p-0">
                            <Link to="/network-category/routers"><li className='border'>Routers</li></Link>
                            <Link to="/network-category/ethernet-cables"><li className='border'>Ethernet Cables</li></Link>
                            <Link to="/network-category/network-switches"><li className='border'>Network Switches</li></Link>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </li>


                <li className='position-relative'><Link to="/wishlist" title='wishlist'><i className="fa-solid fa-heart"></i>
                  <p>wishlist</p>
                  {quantity1>0 && <p className={`position-absolute cart-badge`}>{quantity1}</p>} </Link>
                </li>
                <li className='position-relative'><Link to="/cart-items" title='cart'><i className="fa-solid fa-cart-shopping"></i>
                  <p>My Cart</p>
                  {quantity>0 && <p className={`position-absolute cart-badge`}>{quantity}</p>}</Link>
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
