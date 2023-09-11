import React, { Component } from 'react';
import Nav from '../Nav/nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

class MasterLayout extends Component {
  render() {
    return (
      <div>
    <Nav/>
      <div className='container-container-fluid'>
          <Outlet/>
      </div>
      <Footer/>
    
    
      </div>
      
    );
  }
}

export default MasterLayout;


