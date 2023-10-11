import React from 'react'
import BreadCrumb from '../Components/BreadCrumbComonent/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromWishList } from '../Redux/cartSlice'
import { Link } from 'react-router-dom';
function WishList() {
    const { wishListItems } = useSelector((state) => state.wishlist);
    const dispatch = useDispatch()
    return (
        <>
            <section>
                <div className="container">
                    <BreadCrumb breadPrev="Home" breadCurrent="Wishlist" />
                    <h4 className='border-bottom p-2 my-2'>My Wishlist</h4>
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-md-10 col-md-offset-1">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th></th>
                                        <th></th>
                                        <th>Price</th>
                                        <th></th>
                                        <th>Delete</th>
                                        <th></th>
                                        <th>Cart</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {wishListItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <div className="media">
                                                <Link to={`/single-product/${item.id}`} className="thumbnail pull-left"> <img className="media-object" src={item.productImage} style={{ width: 100, height: 100 }} /> </Link>
                                                    <div className="media-body">
                                                        <h4 className="media-heading"><a href="#">{item.productTitle}</a></h4>
                                                        <span>Status: </span><span className="text-success"><strong>{item.productStock}</strong></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td className="col-sm-1 col-md-1 text-center"><strong>{item.productPrice}</strong></td>
                                            <td></td>
                                            <td className="col-sm-1 col-md-1">
                                                <button type="button" className="btn btn-danger btn-sm" onClick={() => dispatch(removeFromWishList(item))}>
                                                    <span className="glyphicon glyphicon-remove" /> <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                            <td></td>
                                            <td className="col-sm-1 col-md-1">
                                                <button type="button" className="btn btn-primary btn-sm" onClick={()=>dispatch(addToCart(item))}>
                                                    <span className="glyphicon glyphicon-remove" /> <i className="fa-solid fa-cart-plus"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default WishList
