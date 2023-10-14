import React from 'react'
import { Link } from 'react-router-dom'
import "./contactInqueryForm.scss"
import Iframe from 'react-iframe'
function ContactInqueryForm() {
    return (
        <>
            <section className='py-5'>
                <div className="container d-flex flex-column row-gap-5">
                    <div className="row justify-content-between row-gap-3">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <h4 className='fw-bold'>Any Inquery</h4>
                            <form action="" className='d-flex flex-column row-gap-2'>
                                <div className='d-flex gap-2'>
                                    <input className='form-control w-75' name='' type="text" placeholder='Your Name' required />
                                    <input className='form-control w-75' name='' type="email" placeholder='Your Email' required />
                                </div>
                                <textarea className='form-control' name="" id="" cols="30" rows="5" placeholder='your messages...'></textarea>
                                <button className='btn btn-primary w-25 btn-sm' type='submit'>Send</button>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <h4 className='fw-bold'>Location</h4>
                            <p>Hikvision-Nepal Tower, Bu.Na.Pa-02, Kathmandu  </p>
                            <h4 className='fw-bold'>Phone</h4>
                            <p> +977-1-4372908, +977-1-5329988</p>
                            <h4 className='fw-bold'>Email</h4>
                            <p>maxima.multinationaltrading@gmail.com</p>
                            <div className='d-flex gap-2 align-items-center'>
                                <h4 className='fw-bold m-0'>Follow Us: </h4>
                                <ul className='d-flex gap-3 p-0 m-0 icon-center '>
                                    <li> <Link to="https://www.facebook.com/HikvisionNepalOfficial" target='_blank'> <i className="fa-brands fa-facebook text-white" title='facebook'></i></Link></li>
                                    <li> <Link to="" target='_blank'> <i className="fa-brands fa-twitter  text-white"></i></Link></li>
                                    <li> <Link to="" target='_blank'> <i className="fa-brands fa-instagram  text-white"></i></Link></li>
                                    <li> <Link to="" target='_blank'> <i className="fa-brands fa-youtube  text-white"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className='fw-bold'>View on Map</h4>
                        <Iframe url="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d56493.00710122838!2d85.359429!3d27.753915!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1690702423146!5m2!1sen!2snp" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                            id=""
                            display="block"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactInqueryForm
