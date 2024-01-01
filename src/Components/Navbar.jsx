import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function App() {


  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
          <Link to="/">All Products</Link>
          </span>
        <MDBBtn color='dark'> 
       <Link to='cart'>Cart (0) </Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}