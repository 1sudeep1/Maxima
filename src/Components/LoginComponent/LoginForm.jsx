import React from 'react'
import BreadCrumb from '../BreadCrumbComonent/BreadCrumb'
import { Link } from 'react-router-dom'
import "./loginForm.scss"
function LoginForm() {
    return (
        <>
            <BreadCrumb breadPrev="Home" breadCurrent="Login" />
            <div className="container">
                <div className="row my-4 mb-5 justify-content-center">
                    <div className="col-lg-6">
                        <div className='login-div form-text-size'>
                            <h3>Maxima Collection</h3>
                            <p>Sign-In</p>
                            <form action="" className='d-flex flex-column row-gap-3 my-2'>
                                <input type="email" className='form-control form-text-size' placeholder='smc@gmail.com' />
                                <input type="password" className='form-control form-text-size' placeholder='password' />
                                <button className='btn btn-primary py-1 form-text-size w-100'>Continue</button>
                            </form>
                            <p>Don't have an account? <Link to="/register">SIGN UP</Link></p>
                            <p>By creating an account, you agree to Maxima Collection's Conditions of Use and Privacy Notice.</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default LoginForm
