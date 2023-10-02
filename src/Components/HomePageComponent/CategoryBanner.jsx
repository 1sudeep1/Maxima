import React from 'react'
import "./categoryBanner.scss"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import homeBannerSliderData from '../../Data/HomeBannerSliderData';
function CategoryBanner() {

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
                            <div className='d-flex align-items-center gap-2 border py-2 px-3 category-item'>
                                <p className='m-0'>New Arrivals</p>
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className='d-flex align-items-center gap-2 border py-2 px-3 category-item'>
                                <p className='m-0'>Laptops and Computers</p>
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className='d-flex align-items-center gap-2 border py-2 px-3 category-item'>
                                <p className='m-0'>Mobile and Tablets</p>
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className='d-flex align-items-center gap-2 border py-2 px-3 category-item'>
                                <p className='m-0'>Audios</p>
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className='d-flex align-items-center gap-2 border py-2 px-3 category-item'>
                                <p className='m-0'>Storage</p>
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className='d-flex align-items-center gap-2 border py-2 px-3 category-item'>
                                <p className='m-0'>Wearable</p>
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className='d-flex align-items-center gap-2 border py-2 px-3 category-item'>
                                <p className='m-0'>Cameras</p>
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className='d-flex align-items-center gap-2 border py-2 px-3 category-item'>
                                <p className='m-0'>Network Products</p>
                                <i className="fa-solid fa-chevron-right"></i>
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
