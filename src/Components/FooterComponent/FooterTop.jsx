import React from 'react'
import "./footerTop.scss"
function FooterTop() {
    return (
        <>
            <section className='feature-box text-white py-3'>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-lg-3 col-sm-12 col-12 col-md-3">
                                <div className='text-center'>
                                    <i className="fa-solid fa-truck"></i>
                                    <p>We ship Nepal</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12 col-12 col-md-3">
                                <div className='text-center'>
                                    <i className="fa-solid fa-phone"></i>
                                    <p>+977-1-4372908, +977-1-5329988</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12 col-12 col-md-3">
                                <div className='text-center'>
                                    <i className="fa-solid fa-dollar-sign"></i>
                                    <p>Money Back Guarantee</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12 col-12 col-md-3">
                                <div className='text-center'>
                                    <i className="fa-solid fa-briefcase"></i>
                                    <p>7 days return</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FooterTop
