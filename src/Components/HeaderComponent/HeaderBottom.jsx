import React from 'react'
import "./headerBottom.scss"
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import Login from '../../Pages/Login'
import Register from '../../Pages/Register'
import NewArrivals from '../CategoryWiseProductComponent/NewArrivals'
import LaptopComputer from '../CategoryWiseProductComponent/LaptopComputer'
import Cameras from '../CategoryWiseProductComponent/Cameras'
import NetworkProduct from '../CategoryWiseProductComponent/NetworkProduct'
import SingleProduct from '../../Pages/SingleProduct'
import NetworkCategory from '../../Pages/NetworkCategory'
import CameraCategory from '../../Pages/CameraCategory'
import WearableCategory from '../../Pages/WearableCategory'
import StorageCategory from '../../Pages/StorageCategory'
import AudioCategory from '../../Pages/AudioCategory'
import MobileTabletCategory from '../../Pages/MobileTabletCategory'
import LaptopComputerCategory from '../../Pages/LaptopComputerCategory'
import Contact from '../../Pages/Contact'
import SearchProduct from '../../Pages/SearchProduct'
import WishList from '../../Pages/WishList'
import MyCart from '../../Pages/MyCart'
import Partners from '../../Pages/Partners'
import SinglePartners from '../../Pages/SinglePartners'
function HeaderBottom() {
    return (
        <>
            <section className='menu'>
                <div className="container py-3">
                    <div className="row justify-content-between">
                        <div className="col-lg-4 col-12 col-md-6 col-sm-12">
                            <div className="row">
                                <div className="col-lg-6 col-6">
                                    <div className='d-flex align-items-center gap-2'>
                                        <i className="fa-solid fa-star fs-6"></i>
                                        <Link to="new-arrivals"><h5 className='m-0'>New Arrival</h5></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6">
                                    <div className='d-flex align-items-center gap-2'>
                                        <i className="fa-solid fa-handshake-simple"></i>
                                        <h5 className='m-0'><Link to="/partners">Partners</Link></h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 text-end col-12 discount-percent col-md-6 col-sm-12">
                            <div className='d-flex align-items-center gap-2'>
                                <i className="fa-solid fa-star fs-6"></i>
                                <p className='m-0'>Get upto 15% off on selected items.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/new-arrivals" element={<NewArrivals />} />
                <Route path="/laptop-computers" element={<LaptopComputer />} />
                <Route path="/cameras" element={<Cameras />} />
                <Route path="/network-products" element={<NetworkProduct />} />
                <Route path="/single-product/:sid" element={<SingleProduct />} />
                <Route path="/network-category/:subcat" element={<NetworkCategory />} />
                <Route path="/camera-category/:subcat" element={<CameraCategory />} />
                <Route path="/wearable-category/:subcat" element={<WearableCategory />} />
                <Route path="/storage-category/:subcat" element={<StorageCategory />} />
                <Route path="/audio-category/:subcat" element={<AudioCategory />} />
                <Route path="/mobile-tablet-category/:subcat" element={<MobileTabletCategory />} />
                <Route path="/laptop-computer-category/:subcat" element={<LaptopComputerCategory />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/search-product" element={<SearchProduct />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/cart-items" element={<MyCart />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/channel-partners/:pid" element={<SinglePartners />} />
            </Routes>
        </>
    )
}

export default HeaderBottom
