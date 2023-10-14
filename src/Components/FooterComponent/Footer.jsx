import React from 'react'
import "./footer.scss"
import { Link } from 'react-router-dom'
import logo from "/images/logo.png"
import Iframe from 'react-iframe'
function Footer() {
    return (
        <>
            <footer>
                <div className="container py-5">
                    <div className="row justify-content-between row-gap-4">
                        <div className="col-lg-3 col-12 col-md-6">
                            <Link to="/"><img className='w-75 logo img-fluid thumbnails my-2' src={logo} alt="" /></Link>
                            <h4 className='text-white'>Maxima Multinational</h4>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-6 col-12">
                            <h5 className='text-white'>CONTACT-US</h5>
                            <div className='contact'>
                                <div className='d-flex align-items-center gap-3 my-3'>
                                    <i className="fa-solid fa-location-dot"></i> <Link to="">Maxima Multinational Trading Pvt. Ltd.</Link>
                                </div>
                                <div className='d-flex align-items-center gap-3 my-3'>
                                    <i className="fa-solid fa-envelope"></i> <Link to="mailto:maxima.multinationaltrading@gmail.com">maxima.multinationaltrading@gmail.com</Link>
                                </div>
                                <div className='d-flex align-items-center gap-3'>
                                    <i className="fa-solid fa-phone"></i> <Link to="">+977-1-4372908, +977-1-5329988</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-4 col-md-6 col-12">
                            <h5 className='text-white'>INFORMATION</h5>
                            <div className='d-flex flex-column row-gap-2'>
                                <div className='d-flex align-items-center gap-2'>
                                    <i className="fa-solid fa-arrow-right"></i>
                                    <Link to="">Partners</Link>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <i className="fa-solid fa-arrow-right"></i>
                                    <Link to="/contact">Contact Us</Link>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <i className="fa-solid fa-arrow-right"></i>
                                    <Link to="/new-arrivals">New Arrivals</Link>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <i className="fa-solid fa-arrow-right"></i>
                                    <Link to="/cameras">Cameras</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-lg-1 col-sm-12 col-12 col-md-6">
                            <h5 className='text-white'>MAP</h5>
                            <Iframe url="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d56493.00710122838!2d85.359429!3d27.753915!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1690702423146!5m2!1sen!2snp" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                id=""
                                className=" map"
                                display="block"
                                position="relative" />
                        </div>
                    </div>
                </div>

                <div className='footer-border-top py-2'>
                    <div className="container ps-2">
                        <div className="row justify-content-between align-items-center row-gap-2">
                            <div className="col-lg-1 col-sm-4 col-12 col-md-3">
                                <ul className='d-flex gap-3 p-0 m-0 icon-center'>
                                    <li> <Link to="https://www.facebook.com/HikvisionNepalOfficial" target='_blank'> <i className="fa-brands fa-facebook  text-white" title='facebook'></i></Link></li>
                                    <li> <Link to="" target='_blank'> <i className="fa-brands fa-twitter  text-white"></i></Link></li>
                                    <li> <Link to="" target='_blank'> <i className="fa-brands fa-instagram  text-white"></i></Link></li>
                                    <li> <Link to="" target='_blank'> <i className="fa-brands fa-youtube  text-white"></i></Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-6 text-end col-sm-12 col-12 col-md-9 copyright">
                                <Link to="https://radiantnepal.com/" target='_blank'>©2023 Maxima Pvt. Ltd. All Right Reserved. Developed by Radiant Infotech</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer
