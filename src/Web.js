import './App.css';
import Heading from './Component/Heading';
import Navbar from './Component/Navbar';
import Form from './Component/Form';
import Text from './Component/Text';
import Test from './Component/Test';
import {Routes , Route , Link} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Npage from './Component/Npage';
import Fetchapi from './Component/Fetchapi';
import Profile from './Component/Profile';
import React from 'react'

function Web() {
  return(
    <>
          <Navbar title="Logo" info="About us"/>
          <Heading title="Hello React"/>
          <Text heading="Enter Text Below.."/>
          <Form email="hafizhamza@gmail.com"/>
          <Test/>
          <Fetchapi/>
          <Profile/>
          <br/>
          <Link to="/">Home</Link>
              <br/>
              <Link to="/about">About</Link>
           <div className='container my-3'>
           <Routes>
           <Route path='/history' element={<Npage/>}></Route>
            <Route path='/' exact={true} element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
           </Routes>
           </div>
    </>
  )
}

export default Web
