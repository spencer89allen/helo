import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {

    render() {
        return (
            <nav className="navbar-end" role="navigation" aria-label="main navigation">
                <div className='container'>
                    <div className="buttons has-addons is-right ">
                        <span className="button is-dark is-outlined is-small">
                            <Link to='/dashboard'>
                                Home
                        </Link>
                        </span>
                        <span className="button is-dark is-outlined is-small">
                            <Link to='/new'>
                                New Post
                        </Link>
                        </span>
                        <span className="button is-dark is-outlined is-small">
                            <Link to='/'>
                                Logout
                        </Link>
                        </span>
                    </div>
                </div>
            </nav>
        )
    }
};

export default Nav;