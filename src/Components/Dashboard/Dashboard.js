import React, { Component } from 'react';


class Dashboard extends Component {
        
        state = {
            authenticated: false,
        }
    


    render() {

        return (
            <div>
                {
                    !this.state.authenticated ?

                    (<p>Dashboard not authenticated</p>)

                    :

                    (Dashboard)
                }
            </div>
        )
    }
};

export default Dashboard;