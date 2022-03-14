
import React, { useState } from 'react'
import {useNavigate, Link } from 'react-router-dom'
import axios from "../../axios";


function ForgetPasswordPage(props) {
    const [email_address, setEmail_address] = useState('');
    const navigate = useNavigate();
    function resetHandler(event){
        axios.post("/resetPassword",{email_address}).then(res=>{console.log(res.data);
          navigate('/log-in');
        }).catch(err=>console.log(err))
        
    }
    return (
        <div>
            <h2>Reset your password</h2>
            <h5>Enter your email address and we will send you a link to reset the password</h5>
            <form action="/log-in">
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" required onChange={(e) => setEmail_address(e.target.value)} />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={resetHandler}>Reset Password</button>
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