import React, { Component } from 'react';


class Auth extends Component {

    state = {
        username: '',
        password: '',        
        newUsername: '',
        newPassword: '',
        newEmail: '',
    
    }

    handleInput(name, value) {
        this.setState({
            [name]: value,
        })
    }


    render() {
        // console.log(this.state)
        return (
            <div>
                <section className="hero is-dark heroHeader is-medium ">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title "
                                style={
                                    {
                                        color: 'white',
                                        textShadow: '0 1px 3px #0008'
                                    }
                                }>
                                Helo!
                        </h1>
                            <h2 className="subtitle"
                                style={{ color: 'white' }}>
                                The Exclusive Online Chat Site
                        </h2>
                        </div>
                    </div>
                </section>
                <br />
                <div className='container'>
                    <div className="tile is-ancestor">
                        <div className="tile is-6">  
                            <article className="tile is-child box">
                                <p className="title">Login</p>
                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Username: </label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                            <p className="control">
                                                <input className="input" 
                                                    type="email" 
                                                    placeholder="username or email" 
                                                    name='username'
                                                    onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                                    />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Password: </label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                            <p className="control">
                                                <input className="input" 
                                                    type="email" 
                                                    placeholder="password" 
                                                    name='password'
                                                    onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                                    />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <span>
                                    <button className="button is-dark" >Login</button>
                                </span>
                            </article> 
                        </div>
                        <div className="tile">
                            <div className="tile is-child box">
                                <p className="title">Register</p>
                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Username: </label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                            <p className="control">
                                                <input className="input" 
                                                    type="email" 
                                                    placeholder="7 characters long please" 
                                                    name='newUsername'
                                                    onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                                    />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Password: </label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                            <p className="control">
                                                <input className="input" 
                                                    type="email" 
                                                    placeholder="7 characters long with at least one number please" 
                                                    name='newPassword'
                                                    onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                                    />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Email: </label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                            <p className="control">
                                                <input className="input" 
                                                    type="email" 
                                                    placeholder="email" 
                                                    name='newEmail'
                                                    onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                                    />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <span>
                                    <button className="button is-dark">Register</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Auth;