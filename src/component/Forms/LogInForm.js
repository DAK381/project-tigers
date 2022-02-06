import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Breadcrumbs, Card} from "react-bootstrap";



function LogInPage() {
    return (
        <div>
            <Card className= "mb-3" style = {{ color: 'black'}}>
            <h2>Log in to your member account</h2>
            
            <form action="/.">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/sign-up">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
            </Card>
        </div>
    )
}

export default LogInPage;