import React, { useRef, useState } from 'react'
import './style/Login.css'
import { Link } from 'react-router-dom'

import { useAuth } from '../contexts/AuthContext'

function SignUpComp() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    const handleSubmit = e => {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to Login')
        }
        setLoading(false)
    }

    return (
        <div className="header-login-card">
            <div className="card-position">
                <div class="card login-card">
                    <div class="card-body">
                        {/* Set Error */}
                        {
                            error &&
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>{error}</strong>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        }
                        <h1 class="card-title line">LINE</h1>
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" name="email" placeholder="Alamat Email" ref={emailRef} required />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="password" name="password" placeholder="Kata Sandi" ref={passwordRef} required />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="passwordConfirm" name="passwordConfirm" placeholder="Konfirmasi Kata Sandi" ref={passwordRef} required />
                            </div>
                            <button type="submit" class="btn btn-submit" disabled={loading}>Submit</button>
                        </form>
                        <h4>Already Account?<Link to="./Login">Login</Link></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpComp