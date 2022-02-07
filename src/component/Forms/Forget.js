
import React from 'react'
import { Link } from 'react-router-dom'


function ForgetPasswordPage() {
    return (
        <div>
            <h2>Reset your password</h2>
            <h5>Enter your email address and we will send you a link to reset the password</h5>
            <form action="/log-in">
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Send password reset email</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/sign-up">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}

export default  ForgetPasswordPage;