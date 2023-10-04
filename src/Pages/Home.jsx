import React from 'react'
import CategoryBanner from '../Components/HomePageComponent/CategoryBanner'
import OurClients from '../Components/HomePageComponent/OurClients'
import NewArrivals from '../Components/CategoryWiseProductComponent/NewArrivals'
import LaptopComputer from '../Components/CategoryWiseProductComponent/LaptopComputer'
import Cameras from '../Components/CategoryWiseProductComponent/Cameras'
import NetworkProduct from '../Components/CategoryWiseProductComponent/NetworkProduct'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <>
            <CategoryBanner />
            <div className="container">
                <div className=" position-relative">
                    <NewArrivals />
                    <p className='position-absolute' style={{ top: "10px", right: "15px" }}><Link to="/new-arrivals">VIEW MORE</Link></p>
                </div>
                <div className=" position-relative">
                    <LaptopComputer />
                    <p className='position-absolute' style={{ top: "10px", right: "15px" }}><Link to="/laptop-computers">VIEW MORE</Link></p>
                </div>
                <div className=" position-relative">
                    <Cameras />
                    <p className='position-absolute' style={{ top: "10px", right: "15px" }}><Link to="/cameras">VIEW MORE</Link></p>
                </div>
                <div className=" position-relative">
                    <NetworkProduct />
                    <p className='position-absolute' style={{ top: "10px", right: "15px" }}><Link to="/network-products">VIEW MORE</Link></p>
                </div>
            </div>


            <OurClients />
        </>
    )
}

export default Home
