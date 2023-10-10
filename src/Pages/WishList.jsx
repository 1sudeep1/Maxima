import React from 'react'
import BreadCrumb from '../Components/BreadCrumbComonent/BreadCrumb'

function WishList() {
    return (
        <>
        <section>
            <div className="container">
                <BreadCrumb breadPrev="Home" breadCurrent="Wishlist"/>
                <h4 className='border-bottom p-2 my-2'>My Wishlist</h4>
            </div>
        </section>
        </>
    )
}

export default WishList
