import React, { useEffect, useState } from 'react'
import "./singleProductDetails.scss"
import { Link, useParams } from 'react-router-dom'
import NewArrivalsData from '../../Data/NewArrivalsData';
import LaptopComputerData from '../../Data/LaptopComputerData';
import CamerasData from '../../Data/CamerasData';
import NetworkProductData from '../../Data/NetworkProductData';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function SingleProductDetails() {
    const { sid } = useParams();
    const [currentProduct, setCurrentProduct] = useState('');
    const [relatedProduct, setRelatedProduct] = useState([]);
    useEffect(() => {
        const findCurrentProduct = () => {
            const allProducts = [...NewArrivalsData, ...LaptopComputerData, ...CamerasData, ...NetworkProductData];
            return allProducts.find((product) => product.id == sid);
        };
        const product = findCurrentProduct();
        setCurrentProduct(product);

        const findRelatedProduct = (catData) => {
            return catData.filter((product) => product.id !== sid);
        };
        let catData = [];
        if (NewArrivalsData.find((item) => item.id === parseInt(sid))) {
            catData = NewArrivalsData;
        } else if (LaptopComputerData.find((item) => item.id === parseInt(sid))) {
            catData = LaptopComputerData;
        } else if (CamerasData.find((item) => item.id === parseInt(sid))) {
            catData = CamerasData;
        } else if (NetworkProductData.find((item) => item.id === parseInt(sid))) {
            catData = NetworkProductData;
        }
        const related = findRelatedProduct(catData)
        setRelatedProduct(related);
    }, [sid])




    const [star1, setStar1] = useState('');
    const [star2, setStar2] = useState('');
    const [star3, setStar3] = useState('');
    const [star4, setStar4] = useState('');
    const fillStar1 = () => {
        if (star1 == 'active') {
            setStar1('')
        } else {
            setStar1('active')
        }
    }
    const fillStar2 = () => {
        if (star2 == 'active') {
            setStar2('')
        } else {
            setStar2('active')
        }
    }
    const fillStar3 = () => {
        if (star3 == 'active') {
            setStar3('')
        } else {
            setStar3('active')
        }
    }
    const fillStar4 = () => {
        if (star4 == 'active') {
            setStar4('')
        } else {
            setStar4('active')
        }
    }

    const slider = {
        items: 5,
        nav: true,
        dots: false,
        margin: 5,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true,
            },
            600: {
                items: 3,
                nav: true,
                loop: true
            },
            1000: {
                items: 8,
                nav: true,
                loop: true
            }
        }
    }
    return (
        <>
            {currentProduct && (
                <section>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <img className='w-75 img-fluid thumbnails product-img' src={currentProduct.productImage} alt="" />
                            </div>
                            <div className="col-lg-6">
                                <h2>{currentProduct.productTitle}</h2>
                                <ul className='d-flex gap-1 justify-content-start p-0 text-secondary'>
                                    <li><i className="fa-regular fa-star"></i></li>
                                    <li><i className="fa-regular fa-star"></i></li>
                                    <li><i className="fa-regular fa-star"></i></li>
                                    <li><i className="fa-regular fa-star"></i></li>
                                    <li><i className="fa-regular fa-star"></i></li>
                                </ul>
                                <p>Availability: <span className='text-danger'>{currentProduct.productStock}</span></p>
                                <h3>{currentProduct.productCode}</h3>
                                <p>{currentProduct.productDescription}</p>
                                <h3>Rs. {currentProduct.productPrice}</h3>
                                <form action="" className='d-flex gap-2 align-items-center'>
                                    <label htmlFor="">Quantity:</label>
                                    <input type="number" min='1' defaultValue={'1'} style={{ width: '50px' }} />
                                    <Link to="" title='add to cart' className='cart-btn p-1' >Add to Cart</Link>
                                </form>
                            </div>
                        </div>

                        <div className="row my-5 bg-light">
                            <div className="col-lg-6 d-flex flex-column row-gap-2 p-4">
                                <h4>Features/Specifications</h4>
                                {currentProduct.productFeatures && (
                                    currentProduct.productFeatures.map((classification, index) => (
                                        <div className='d-flex align-items-center gap-2 features' key={index}>
                                            <i className="fa-solid fa-circle"></i>
                                            <p>{classification}</p>
                                        </div>
                                    ))
                                )}
                            </div>
                            <div className="col-lg-6 p-4">
                                <h4>Review</h4>
                                <form action="">
                                    <div className="row row-gap-3">
                                        <div className="col-lg-6">
                                            <div className='d-flex flex-column'>
                                                <label htmlFor="name" className='d-flex align-items-center'>Full Name <i className="fa-solid fa-asterisk text-danger"></i></label>
                                                <input type="text" id='name' required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className='d-flex flex-column'>
                                                <label htmlFor="email" className='d-flex align-items-center'>Email <i className="fa-solid fa-asterisk text-danger"></i></label>
                                                <input type="email" id='email' required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className='d-flex align-items-center gap-2'>
                                                <label htmlFor="rate" className='d-flex align-items-center'>Rate this product <i className="fa-solid fa-asterisk text-danger"></i></label>
                                                <ul className='d-flex gap-1 justify-content-start m-0 p-0 text-secondary rating-star'>
                                                    <li><i className="fa-solid fa-star active"></i></li>
                                                    <li><i className={`fa-solid fa-star ${star1}`} onClick={fillStar1}></i></li>
                                                    <li><i className={`fa-solid fa-star ${star2}`} onClick={fillStar2}></i></li>
                                                    <li><i className={`fa-solid fa-star ${star3}`} onClick={fillStar3}></i></li>
                                                    <li><i className={`fa-solid fa-star ${star4}`} onClick={fillStar4}></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <label htmlFor="review" className='d-flex align-items-center'>Review <i className="fa-solid fa-asterisk text-danger"></i></label>
                                            <textarea name="" id="review" cols="63" rows="5" required></textarea>
                                        </div>
                                        <div className="col-lg-3">
                                            <Link to="" className='cart-btn text-white p-2'>Send Review</Link>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>

                        <div>
                            <h4>Related Products</h4>
                            <div className="row">
                                {relatedProduct.length > 0 && (
                                    <OwlCarousel className='owl-theme px-2' {...slider}>
                                        {relatedProduct.map((item) => (
                                            <div className='d-flex flex-column text-center align-items-center product-card position-relative bg-white' key={item.id}>
                                                <div className='position-relative product-img-div'>
                                                    <Link to={`/single-product/${item.id}`} className='d-flex justify-content-center'><img className='img-fluid thumbnails product-img' src={item.productImage} alt="" /></Link>
                                                    <Link to=""><button className='cart-btn position-absolute fw-bold'>Add to Cart</button></Link>
                                                </div>
                                                <div className="leftservice-icon position-absolute">
                                                    <div className='d-flex align-items-center gap-2 justify-content-center'>
                                                        <Link to="" title='link'><i className="fa-solid fa-link"></i></Link>
                                                        <Link to="" title='add to cart'><i className="fa-solid fa-cart-shopping"></i></Link>
                                                        <Link to="" title='wishlist'><i className="fa-solid fa-heart"></i></Link>
                                                    </div>
                                                </div>
                                                <Link to={`/single-product/${item.id}`}><h6>{item.productTitle}</h6></Link>
                                                <Link to={`/single-product/${item.id}`}> <ul className='d-flex gap-1 justify-content-start p-0 text-secondary'>
                                                    <li><i className="fa-regular fa-star"></i></li>
                                                    <li><i className="fa-regular fa-star"></i></li>
                                                    <li><i className="fa-regular fa-star"></i></li>
                                                    <li><i className="fa-regular fa-star"></i></li>
                                                    <li><i className="fa-regular fa-star"></i></li>
                                                </ul></Link>
                                                <Link to={`/single-product/${item.id}`}><p className='text-danger'>Price Rs {item.productPrice}</p></Link>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default SingleProductDetails
