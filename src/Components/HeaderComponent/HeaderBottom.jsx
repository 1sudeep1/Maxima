import React from 'react'
import "./headerBottom.scss"
function HeaderBottom() {
    return (
        <>
            <section className='menu'>
                <div className="container py-3">
                    <div className="row justify-content-between">
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className='d-flex align-items-center gap-2'>
                                        <i className="fa-solid fa-star fs-6"></i>
                                        <h5 className='m-0'>New Arrival</h5>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className='d-flex align-items-center gap-2'>
                                    <i className="fa-solid fa-handshake-simple"></i>
                                        <h5 className='m-0'>Partners</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 text-end">
                            <div className='d-flex align-items-center gap-2'>
                                <i className="fa-solid fa-star fs-6"></i>
                                <p className='m-0'>Get upto 15% off on selected items.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeaderBottom
