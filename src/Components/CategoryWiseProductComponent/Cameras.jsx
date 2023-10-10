import React from 'react'
import "./newArrivals.scss"
import { Link } from 'react-router-dom'
import CamerasData from '../../Data/CamerasData'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/cartSlice'
function Cameras() {
    const dispatch = useDispatch()
    return (
        <>
            <section>
                <div className="container my-5 bg-white p-3">
                    <h5 className='text-uppercase fw-bold'>Cameras</h5>

                    <div className="row row-gap-3 my-3">
                        {CamerasData.slice(0, 12).map((item) => (
                            <div className="col-lg-2" key={item.id}>
                                <div className='d-flex flex-column text-center align-items-center product-card position-relative'>
                                    <div className='position-relative product-img-div'>
                                        <Link to={`/single-product/${item.id}`}><img className='w-75 img-fluid thumbnails product-img' src={item.productImage} alt="" /></Link>
                                        <Link to=""><button className='cart-btn position-absolute fw-bold' onClick={()=>dispatch(addToCart(item))}>Add to Cart</button></Link>
                                    </div>
                                    <div className="leftservice-icon position-absolute">
                                        <div className='d-flex align-items-center gap-2 justify-content-center'>
                                            <Link to="" title='link'><i className="fa-solid fa-link"></i></Link>
                                            <Link to="" title='add to cart' onClick={()=>dispatch(addToCart(item))}><i className="fa-solid fa-cart-shopping"></i></Link>
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cameras
