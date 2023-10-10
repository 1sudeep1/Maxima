import React from 'react'
import BreadCrumb from '../BreadCrumbComonent/BreadCrumb'
import "./registerForm.scss"
import { Link } from 'react-router-dom'
function RegisterForm() {
    return (
        <>
            <BreadCrumb breadPrev="Home" breadCurrent="Register" />
            <div className="container">
            <div className="row my-4 mb-5 justify-content-center">
                    <div className="col-lg-6">
                        <div className='register-div form-text-size'>
                            <h3>Maxima Collection</h3>
                            <p>Create an Account</p>

                            <form action="" >
                                <div className='d-flex gap-2 my-2 '>
                                    <input type="text" placeholder='Full Name' className='form-control form-text-size ' required/>
                                    <input type="text" placeholder='User Name' className='form-control form-text-size' required />
                                </div>
                                <div className='d-flex gap-2 my-2'>
                                    <input type="text" placeholder='Permanent Address' className='form-control form-text-size' required />
                                    <input type="text" placeholder='Current Address' className='form-control form-text-size' required/>
                                </div>
                                <div className='d-flex gap-2 my-2'>
                                    <input type="email" placeholder='a@gmail' className='form-control form-text-size' required />
                                    <input type="text" placeholder='98********' className='form-control form-text-size' />
                                </div>
                                <div className='d-flex gap-2 my-2'>
                                    <input type="password" placeholder='password' className='form-control form-text-size' required/>
                                    <input type="password" placeholder='confirm password' className='form-control form-text-size' required/>
                                </div>
                                <button className='btn btn-primary p-0 mb-2 form-text-size form-control'>Continue</button>
                            </form>
                            <p>Already have account? <Link to="/login">Login</Link></p>
                            <p>By creating an account, you agree to All In One's Conditions of Use and Privacy Notice.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterForm
