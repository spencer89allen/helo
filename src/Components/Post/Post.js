import React, { Component } from 'react';


class Post extends Component {

    state = {
        authenticated: false,
    }



render() {

    return (
        <div>
            {
                !this.state.authenticated ?

                (<p>Post not authenticated</p>)

                :

                (Post)
            }
        </div>
        )
    }
};

export default Post;