import React from 'react'
import CategoryBanner from '../Components/HomePageComponent/CategoryBanner'
import NewArrivals from '../Components/HomePageComponent/NewArrivals'
import LaptopComputer from '../Components/HomePageComponent/LaptopComputer'
import Cameras from '../Components/HomePageComponent/Cameras'
import NetworkProduct from '../Components/HomePageComponent/NetworkProduct'
import OurClients from '../Components/HomePageComponent/OurClients'

function Home() {
    return (
        <>
            <CategoryBanner />
            <NewArrivals />
            <LaptopComputer />
            <Cameras />
            <NetworkProduct/>
            <OurClients/>
        </>
    )
}

export default Home
