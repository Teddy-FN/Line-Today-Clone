import React from 'react'
import './style/Login.css'
import { Link } from 'react-router-dom'

function Login() {

    return (
        <div className="header-login-card">
            <div className="card-position">
                <div class="card login-card">
                    <div class="card-body">
                        <h1 class="card-title line">LINE</h1>
                        <form>
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" name="email" placeholder="Alamat Email" required />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="password" name="password" placeholder="Kata Sandi" required />
                            </div>
                            <button type="submit" class="btn btn-submit">Submit</button>
                        </form>
                        <h4>Don't have account?<Link to="/signup">Register</Link></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login