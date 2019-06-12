import React, { Component } from 'react';
import axios from 'axios';


class Auth extends Component {

    state = {
        username: '',
        password: '',        
        newUsername: '',
        newPassword: '',
    
    }

    handleInput(name, value) {
        this.setState({
            [name]: value,
        })
    }

    handleRegister() {
        if ( this.state.newUsername.length === 0 || this.state.newPassword.length === 0 ) {
            alert('Please fill in Username, and Password input fields')
        } else {
            const { newUsername, newPassword } = this.state;
            const body = { newUsername, newPassword };

            axios.post(`/auth/register`, body ).then()
        }
    }

    handleLogin() {
        if (this.state.username.length === 0 || this.state.password.length === 0) {
            alert('Please fill in Username, and Password input fields')
        } else {
            const { username, password } = this.state
            const body = { username, password }

            axios.post(`/auth/login`, body).then((res) => {
                console.log(res)
                // this.props.login(res.data)
                // this.props.history.goBack()
            })
        }
    }


    render() {
        // console.log()
        return (
            <div >
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
                                The Exclusive Online Site
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
                                <br />
                                <span className='buttons is-right'>
                                    <button className="button is-dark " onClick={() => this.handleLogin()}>Login</button>
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
                                {/* <div className="field is-horizontal">
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
                                </div> */}
                                <br />
                                <span className='buttons is-right'>
                                    <button className="button is-dark" onClick={() => this.handleRegister()}>Register</button>
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