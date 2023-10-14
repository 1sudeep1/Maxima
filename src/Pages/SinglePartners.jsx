import React from 'react'
import BreadCrumb from '../Components/BreadCrumbComonent/BreadCrumb'
import { Link, useParams } from 'react-router-dom'
import PartnersData from '../Data/PartnersData';
import "./singlePartners.scss"
function SinglePartners() {
    const {pid}= useParams();
    const filterdPartners=PartnersData.filter((item)=>item.partnerType==pid)
    return (
        <>
            <section>
                <div className="container">
                    <BreadCrumb breadPrev="Home" breadCurrent={pid}/>
                    <h3 className='text-capitalize'>{pid}</h3>
                    <div className="row my-4">
                        {filterdPartners.map((item) => (
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 bg-white border d-flex flex-column align-items-center pt-4" key={item.id}>
                                
                                <div className="row align-items-center">
                                <p className='m-0 fw-bold text-center'>{item.partnerProvince} {item.partnerDistrict}</p>
                                    <div className="col-lg-6 col-md-3 col-sm-12 text-center">
                                        <img className='w-75 img-fluid thumbnails partner-image' src={item.partnerImage} alt="" />
                                    </div>
                                    <div className="col-lg-6 col-md-8 col-sm-12 partner-details">
                                        <p>{item.partnerCompany}</p>
                                        <p className='fw-bold'>{item.partnerSolutionTitle}</p>
                                        <p>{item.partnerLocation}</p>
                                        <p>Contact:{item.partnerContact}</p>
                                        <p>Email:{item.partnerEmail}</p>
                                        <p>{item.partnerWebsite}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default SinglePartners
