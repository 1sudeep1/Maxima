import React from 'react'
import "./top.scss"
import { Link } from 'react-router-dom';
function Top() {
  return (
    <>
    <section className='top'>
        <div className="container">
            <div className="row pt-2 text-light justify-content-between">
                <div className="col-lg-3 col-sm-4">
                    <h6 className='welcome'> <Link to="/"> Welcome To Maxima </Link> </h6>
                </div>
                <div className="col-lg-4 col-sm-7 track">
                    <div className="row justify-content-end">
                        <div className="col-lg-1 col-sm-1">                               
                        <Link to="/profile-login"><i className="fa-solid fa-van-shuttle"></i> </Link>                           
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <h6> <Link to="/profile-login"> Track Your Order </Link></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
  )
}

export default Top
