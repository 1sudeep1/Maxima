import React from 'react'
import BreadCrumb from '../BreadCrumbComonent/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../Redux/cartSlice';
import { selectTotalAmountFormatted } from '../../Redux/cartSlice';
import { Link } from 'react-router-dom';
function CartItem() {
    const { cartItems, totalAmount, quantity } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const handleQuantityChange = (itemId, newQuantity) => {
        // Dispatch an action to update the quantity for the specific item
        dispatch(updateCartItemQuantity(itemId, newQuantity));
    };
    const totalAmountFormatted = useSelector(selectTotalAmountFormatted);
    return (
        <>
            <BreadCrumb breadPrev="Home" breadCurrent="Shopping Cart" />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-12 col-md-offset-1">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th className="text-center">Price</th>
                                    <th className="text-center">Total</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td className="col-sm-8 col-md-6">
                                            <div className="media">
                                                <Link to={`/single-product/${item.id}`} className="thumbnail pull-left"> <img className="media-object" src={item.productImage} style={{ width: 100, height: 100 }} /> </Link>
                                                <div className="media-body">
                                                    <h4 className="media-heading"><Link to={`/single-product/${item.id}`}>{item.productTitle}</Link></h4>
                                                    <span>Status: </span><span className="text-success"><strong>{item.productStock}</strong></span>
                                                </div>
                                            </div></td>
                                        <td className="col-sm-1 col-md-1" style={{ textAlign: 'center' }}>
                                            <input type="number" className="form-control" id="quantity" defaultValue={item.quantity} readOnly onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} />
                                        </td>
                                        <td className="col-sm-1 col-md-1 text-center"><strong>{item.productPrice}</strong></td>
                                        <td className="col-sm-1 col-md-1 text-center"><strong>{(parseFloat(item.productPrice.replace(/,/g, '')) * item.quantity).toLocaleString()}</strong></td>

                                        <td className="col-sm-1 col-md-1">
                                            <button type="button" className="btn btn-danger" onClick={() => dispatch(removeFromCart(item))}>
                                                <span className="glyphicon glyphicon-remove" /> Remove
                                            </button></td>
                                    </tr>
                                ))}

                                <tr>
                                    <td> &nbsp; </td>
                                    <td> &nbsp; </td>
                                    <td> &nbsp; </td>
                                    <td><h3>Total</h3></td>
                                    <td className="text-right"><h3><strong>{totalAmount.toLocaleString()}</strong></h3></td>
                                </tr>
                                <tr>
                                    <td> &nbsp; </td>
                                    <td> &nbsp; </td>
                                    <td> &nbsp; </td>
                                    <td>
                                        <button type="button" className="btn btn-default">
                                            <span className="glyphicon glyphicon-shopping-cart" /> Continue Shopping
                                        </button></td>
                                    <td>
                                        <button type="button" className="btn btn-success">
                                            Checkout <span className="glyphicon glyphicon-play" />
                                        </button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CartItem
