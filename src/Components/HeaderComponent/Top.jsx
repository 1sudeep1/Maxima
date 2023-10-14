import React from 'react'
import "./top.scss"
import { Link } from 'react-router-dom';
function Top() {
    return (
        <>
            <section className='top pt-1'>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-3 col-sm-4 col-md-6 col-6">
                            <h6 className='welcome'> <Link to="/"> Welcome To Maxima </Link> </h6>
                        </div>
                        <div className="col-lg-4 col-sm-7 col-md-6 col-6">
                            <div className='d-flex align-items-center justify-content-end gap-2'>
                                <Link to=""><i className="fa-solid fa-van-shuttle fs-6"></i> </Link>
                                <Link to=""><h6 className='m-0'> Track Your Order </h6></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Top
