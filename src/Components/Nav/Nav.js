import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {

    render() {
        //console.log('the current path is:', typeof this.props.location.pathname, !this.props.location.pathname === '/')
        return (

            <div>
                {
                    this.props.location.pathname !== `/` ?

                        (
                            <nav className="navbar-end" role="navigation" aria-label="main navigation">
                                <div className="level-left">
                                    <div className="level-item">
                                        <p className="subtitle is-5">
                                            <strong> BAM!</strong>
                                        </p>
                                    </div>
                                </div>
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
                        :
                        (
                            <nav className="level">
                                <div className="level-left">
                                    <div className="level-item">
                                        <p className="subtitle is-5">
                                            <strong> BAM!</strong>
                                        </p>
                                    </div>
                                </div>
                            </nav>
                        )
                }
            </div>

        )
    }
};

export default Nav;