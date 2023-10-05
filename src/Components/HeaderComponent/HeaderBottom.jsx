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
function HeaderBottom() {
    return (
        <>
            <section className='menu'>
                <div className="container py-3">
                    <div className="row justify-content-between">
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className='d-flex align-items-center gap-2'>
                                        <i className="fa-solid fa-star fs-6"></i>
                                        <Link to="new-arrivals"><h5 className='m-0'>New Arrival</h5></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className='d-flex align-items-center gap-2'>
                                        <i className="fa-solid fa-handshake-simple"></i>
                                        <h5 className='m-0'>Partners</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 text-end">
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
            </Routes>
        </>
    )
}

export default HeaderBottom
