import React from 'react'
import { Link } from 'react-router-dom'
import "./partnersHome.scss"
function PartnersHome() {
    return (
        <>
            <section className='my-3 channel-partners'>
                <div className="container">
                    <h3>Partners Home</h3>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                            <button type='button' className='channel-btn'>Channels Partners</button>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-6 col-12">
                            <div className='d-flex align-items-center gap-2'>
                                <i className="fa-solid fa-circle" style={{ fontSize: '6px' }}></i>
                                <Link to="/channel-partners/authorized-dealer-partner" className='text-dark'>Find a Authorized Dealer Partner</Link>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <i className="fa-solid fa-circle" style={{ fontSize: '6px' }}></i>
                                <Link to="/channel-partners/vasp-partner" className='text-dark'>Find a VASP Partner</Link>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default PartnersHome
