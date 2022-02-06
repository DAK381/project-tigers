import { Link } from 'react-router-dom';

import classes from './Nav.module.css';

function Nav(){
return (
    <header className = {classes.header}>
        <div className = {classes.logo}>NAFA</div>
        <nav>
            <ul>
                <li>
                    <Link to = '/'> Home Page</Link>
                </li>

                <li>
                    <Link to = '/sign-up'> Sign Up</Link>
                </li>

                <li>
                    <Link to = '/log-in'> Log In </Link>
                </li>

            </ul>
        </nav>
    </header>
)
}

export default Nav;