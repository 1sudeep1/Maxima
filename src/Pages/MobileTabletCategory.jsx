import React from 'react'
import { Link, useParams } from 'react-router-dom'
import mobileTabletData from '../Data/MobileTabletData';
function MobileTabletCategory() {
    const { subcat } = useParams();
    const mobileTabletProductFilter = mobileTabletData.filter((item) => (item.productCat === subcat));
    return (
        <>
            <section>
                <div className="container my-5">
                    <h3 className='text-uppercase'>{subcat}</h3>
                    {mobileTabletProductFilter && (
                        <div className="row">
                            {mobileTabletProductFilter.map((item) => (
                                <div className="col-lg-2" key={item.id}>
                                <div className='d-flex flex-column text-center align-items-center product-card position-relative bg-white'>
                                    <div className='product-img-div'>
                                        <Link to={`/single-product/${item.id}`}><img className='img-fluid thumbnails product-img' src={item.productImage} alt="" /></Link>
                                        <Link to={`/single-product/${item.id}`}><h6>{item.productTitle}</h6></Link>
                                    </div>
                                    <div className="leftservice-icon position-absolute">
                                        <div className='d-flex align-items-center gap-2 justify-content-center'>
                                            <Link to="" title='link'><i className="fa-solid fa-link"></i></Link>
                                            <Link to="" title='add to cart' onClick={() => dispatch(addToCart(item))}><i className="fa-solid fa-cart-shopping"></i></Link>
                                            <span title='wishlist' onClick={() => dispatch(addToWishList(item))}> <i className="fa-solid fa-heart"></i></span>
                                        </div>
                                    </div>
                                    <div className='position-absolute product-content d-flex flex-column'>
                                        <Link to={`/single-product/${item.id}`}> <ul className='d-flex gap-1 justify-content-start p-0 text-secondary'>
                                            <li><i className="fa-regular fa-star"></i></li>
                                            <li><i className="fa-regular fa-star"></i></li>
                                            <li><i className="fa-regular fa-star"></i></li>
                                            <li><i className="fa-regular fa-star"></i></li>
                                            <li><i className="fa-regular fa-star"></i></li>
                                        </ul></Link>
                                        <Link to={`/single-product/${item.id}`}><p className='text-danger'>Price Rs {item.productPrice}</p></Link>
                                        <button className='cart-btn  fw-bold' onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    )
                    }
                </div>
            </section>
        </>
    )
}

export default MobileTabletCategory
