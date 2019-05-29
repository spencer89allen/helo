import React from 'react';

import Nav from './Components/Nav/Nav';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';
import Auth from './Components/Auth/Auth';

function App() {
  return (
    <div >
      <Nav />
      <Auth />
      <Dashboard />
      <Form />
      <Post />
    </div>
  );
}

export default App;
