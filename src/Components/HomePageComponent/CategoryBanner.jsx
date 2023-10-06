import React, { useState } from 'react'
import "./categoryBanner.scss"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import homeBannerSliderData from '../../Data/HomeBannerSliderData';
import { Link } from 'react-router-dom';
function CategoryBanner() {

    const [subCat, setSubCat] = useState(false);
    const [subCat1, setSubCat1] = useState(false);
    const [subCat2, setSubCat2] = useState(false);
    const [subCat3, setSubCat3] = useState(false);
    const [subCat4, setSubCat4] = useState(false);
    const [subCat5, setSubCat5] = useState(false);
    const [subCat6, setSubCat6] = useState(false);

    const options = {
        nav: true,
        autoplay: true,
        dots: false

    }
    return (
        <>
            <section className='category-section'>
                <div className="container my-3">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className='d-flex align-items-center gap-2 px-3 py-2 text-white category-title'>
                                <i className="fa-solid fa-bars"></i>
                                <h4 className='m-0'>Categories</h4>
                            </div>
                            <Link to="/new-arrivals"><div className='d-flex align-items-center gap-2 border py-2 px-3 category-item'>
                                <p className='m-0'>New Arrivals</p>
                                <i className="fa-solid fa-chevron-right"></i>
                            </div></Link>
                            <div className='d-flex align-items-center gap-2 border py-2 px-3 category-item position-relative' onMouseEnter={() => { setSubCat(true) }} onMouseLeave={() => setSubCat(false)}>
                                <p className='m-0'>Laptops and Computers</p>
                                <i className="fa-solid fa-chevron-right"></i>
                                {subCat && (
                                    <div className='position-absolute sub-cat'>
                                        <Link to="/laptop-computer-category/monitor-tv"><p>Monitors and TV</p></Link>
                                        <Link to="/laptop-computer-category/macbooks"><p>Macbooks</p></Link>
                                        <Link to="/laptop-computer-category/acer-laptops"><p>Acer Laptops</p></Link>
                                        <Link to="/laptop-computer-category/asus-laptops"><p>Asus Laptops</p></Link>
                                        <Link to="/laptop-computer-category/hp-laptops"><p>HP Laptops</p></Link>
                                        <Link to="/laptop-computer-category/dell-laptops"><p>Dell Laptops</p></Link>
                                    </div>
                                )}
                            </div>
                            <div className='d-flex align-items-center gap-2 border py-2 px-3 category-item position-relative' onMouseEnter={() => { setSubCat1(true) }} onMouseLeave={() => setSubCat1(false)}>
                                <p className='m-0'>Mobile and Tablets</p>
                                <i className="fa-solid fa-chevron-right"></i>
                                {subCat1 && (
                                    <div className='position-absolute sub-cat'>
                                        
                                        <Link to="/mobile-tablet-category/apple-phones"><p>Apple Phones</p></Link>
                                        <Link to="/mobile-tablet-category/samsung-phones"><p>Samsung Phones</p></Link>
                                        <Link to="/mobile-tablet-category/xiaomi-phones"><p>Xiaomi Phones</p></Link>
                                        <Link to="/mobile-tablet-category/mobile-accessories"><p>Mobile Accessories</p></Link>
                                        <Link to="/mobile-tablet-category/tablets"><p>Tablets</p></Link>
                                    </div>
                                )}
                            </div>
                            <div className='d-flex align-items-center gap-2 border py-2 px-3 category-item position-relative' onMouseEnter={() => { setSubCat2(true) }} onMouseLeave={() => setSubCat2(false)}>
                                <p className='m-0'>Audios</p>
                                <i className="fa-solid fa-chevron-right"></i>
                                {subCat2 && (
                                    <div className='position-absolute sub-cat'>
                                        <Link to="/audio-category/headphones-headsets"><p>Headphones and Headsets</p></Link>
                                        <Link to="/audio-category/gaming-headphones"><p>Gaming Headphones</p></Link>
                                        <Link to="/audio-category/speakers"><p>Speakers</p></Link>
                                        <Link to="/audio-category/earbuds"><p>Earbuds</p></Link>
                                    </div>
                                )}
                            </div>
                            <div className='d-flex align-items-center gap-2 border py-2 px-3 category-item position-relative' onMouseEnter={() => { setSubCat3(true) }} onMouseLeave={() => setSubCat3(false)}>
                                <p className='m-0'>Storage</p>
                                <i className="fa-solid fa-chevron-right"></i>
                                {subCat3 && (
                                    <div className='position-absolute sub-cat'>
                                        <Link to="/storage-category/external-hard-drives"><p>External Harddrives</p></Link>
                                        <Link to="/storage-category/internal-hard-drives"><p>Internal Harddrives</p></Link>
                                        <Link to="/storage-category/flash-drives"><p>Flash Drives</p></Link>
                                    </div>
                                )}
                            </div>
                            <div className='d-flex align-items-center gap-2 border py-2 px-3 category-item position-relative' onMouseEnter={() => { setSubCat4(true) }} onMouseLeave={() => setSubCat4(false)}>
                                <p className='m-0'>Wearable</p>
                                <i className="fa-solid fa-chevron-right"></i>
                                {subCat4 && (
                                    <div className='position-absolute sub-cat'>
                                        <Link to="/wearable-category/smart-watches"><p>Smartwatches</p></Link>
                                        <Link to="/wearable-category/virtual-reality"><p>Virtual reality</p></Link>
                                        <Link to="/wearable-category/fitness-activity-tracker"><p>Fitness and Activity Trackers</p></Link>
                                    </div>
                                )}
                            </div>
                            <div className='d-flex align-items-center gap-2 border py-2 px-3 category-item position-relative' onMouseEnter={() => { setSubCat5(true) }} onMouseLeave={() => setSubCat5(false)}>
                                <p className='m-0'>Cameras</p>
                                <i className="fa-solid fa-chevron-right"></i>
                                {subCat5 && (
                                    <div className='position-absolute sub-cat1'>
                                        <Link to="/camera-category/webcams"><p>Webcams</p></Link>
                                        <Link to="/camera-category/home-security-cameras"><p>Home Security Cameras</p></Link>
                                        <Link to="/camera-category/drones"><p>Drones</p></Link>
                                        <Link to="/camera-category/dslr-cameras"><p>DSLR Cameras</p></Link>
                                        <Link to="/camera-category/camera-accessories"><p>Camera Accessories</p></Link>
                                    </div>
                                )}
                            </div>
                            <div className='d-flex align-items-center gap-2 border py-2 px-3 category-item position-relative' onMouseEnter={() => { setSubCat6(true) }} onMouseLeave={() => setSubCat6(false)}>
                                <p className='m-0'>Network Products</p>
                                <i className="fa-solid fa-chevron-right"></i>
                                {subCat6 && (
                                    <div className='position-absolute sub-cat1'>
                                        <Link to="/network-category/routers"><p>Routers</p></Link>
                                        <Link to="/network-category/ethernet-cables"><p>Ethernet Cables</p></Link>
                                        <Link to="/network-category/network-switches"><p>Network Switches</p></Link>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <OwlCarousel className='owl-theme' loop margin={10} items={1} {...options}>
                                {homeBannerSliderData.map(a => (
                                    <div className="item banner" key={a.id}>
                                        <img className='w-100' src={a.bannerImg} alt="" />
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategoryBanner
