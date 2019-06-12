import React, { Component } from 'react';


class Form extends Component {

    state = {
        authenticated: false,
    }



render() {

    return (
        <div>
            {
                !this.state.authenticated ?

                (<p> Form not authenticated</p>)

                :

                (Form)
            }
        </div>
        )
    }
};

export default Form;