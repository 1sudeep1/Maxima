import React from 'react'
import { Link } from 'react-router-dom'
import "./breadCrumb.scss"
function BreadCrumb(props) {
    return (
        <>
            <section>
                <div className="container py-3 fs-5">
                    <div aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">{props.breadPrev}</Link></li>
                            <li className="breadcrumb-item active text-primary" aria-current="page">{props.breadCurrent}</li>
                        </ol>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BreadCrumb
