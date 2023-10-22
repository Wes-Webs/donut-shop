import React  from 'react';
import { Link } from 'react-router-dom';

function ErrorPage () {

    return (
        <section id="sign-up" className='container text-center'>
            <h4>Oh no! Looks like you're in the wrong place</h4>
            <div><Link class="nav-link" to="/">Return to home page</Link></div>
        </section>
    );
}

export default ErrorPage