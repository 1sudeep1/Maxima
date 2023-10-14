import React from 'react'
import "./contactBanner.scss"
import { Link } from 'react-router-dom'
function ContactBanner(props) {
    return (
        <>
            <section className='position-relative banner-section'>
                <img className='w-100 img-fluid thumbnails banner-image' src="/images/pngtree-blue-e-commerce-technology-banner-background-picture-image_1033972.jpg" alt="" />
                <h2 className='position-absolute banner-title'>{props.bannerTitle}</h2>
                <div aria-label="breadcrumb" className='position-absolute breadcrumb-section'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{props.bannerTitle}</li>
                    </ol>
                </div>
                <div className='position-absolute dark'></div>
            </section>
        </>
    )
}

export default ContactBanner
