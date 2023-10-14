import React from 'react'
import BreadCrumb from '../Components/BreadCrumbComonent/BreadCrumb'
import PartnersHome from '../Components/PartnersComponent/PartnersHome'

function Partners() {
    return (
        <>
            <BreadCrumb breadPrev="Home" breadCurrent="Partners" />
            <PartnersHome/>
        </>
    )
}

export default Partners
