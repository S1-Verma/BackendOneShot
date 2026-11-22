import React from 'react';
import {BrowserRouter as Router ,Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';


const App = () => {
  return (
    <div className='max-w-md mx-auto' >
       <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
