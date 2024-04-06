import React from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { darkMode } from "../store/slices/NavSlice";
import Home from './CompressPdf';
import { Navbar,Container,Nav} from 'react-bootstrap';


const Navv = () => {
  // const dispatch=useDispatch();
  // const darkColor=(payload)=>{
  //     dispatch(darkMode(payload));
  // }
  // const data=useSelector((state)=>{
  //   return state.navs;
  // })
  // document.body.style.backgroundColor=data;
  // if(data === "white"){
  //   document.body.style.color="black";
  // }
  // else{
  //   document.body.style.Color="black";
  // }
  // if(data==="white"){
  //   document.body.style.color="black";

  // }
  // else{
  //   document.body.style.color="white";

  // }

  return (
    <>
      {/* <div className="nav">
        <header>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/compress-image">Compress Image</NavLink></li>
        <button className='btn-dark' onClick={()=>darkColor(data)}>🔅</button>
        </header>
    </div> */}
      {/* <nav className="navbar  navbar-expand-lg navbar-primary bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><h4>PDF❤️ER</h4></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" />
          <span className="navbar-toggler-icon"></span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <li className='nav-link'><NavLink className='nav-link' to="/"><h5>Home</h5></NavLink></li>
              <li className='nav-link' ><NavLink className='nav-link' to="/compress-Pdf"><h5>CompressPdf</h5></NavLink></li>
              <li className='nav-link' ><NavLink className='nav-link' to="/image-to-pdf"><h5>Image To Pdf</h5></NavLink></li>
              <li className='nav-link' ><NavLink className='nav-link' to="/docx-to-pdf"><h5>Docx To Pdf</h5></NavLink></li>
              <li className='nav-link' ><NavLink className='nav-link' to="/excel-to-pdf"><h5>Excel To Pdf</h5></NavLink></li>
              <li className='nav-link' ><NavLink className='nav-link' to="/ppt-to-pdf"><h5>Ppt To Pdf</h5></NavLink></li>
            </div>
          </div>
        </div>
      </nav> */}
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >PDF❤️ER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <li className='nav-link'><NavLink className='nav-link' to="/"><h5>Home</h5></NavLink></li>
          <li className='nav-link' ><NavLink className='nav-link' to="/compresspdf"><h5>CompressPdf</h5></NavLink></li>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navv;