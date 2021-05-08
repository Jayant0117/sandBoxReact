import React from "react";
import "./Navbar.css";
import Ngen from "../images/ngen.png";
import { MdNotificationsNone } from 'react-icons/md';
import { AiOutlineSearch} from "react-icons/ai";
import { BsPeopleCircle} from "react-icons/bs";
import Sidebar from "../Components/Sidebar/Sidebar";
import {Link} from "react-router-dom";


function Navbar() {
    return (
      <>
      <div className="container1">
      <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
      <Link to="/home"><img src={Ngen} alt="ngen logo" title="ngen Logo" height="50px" width="155px"/></Link>
    
        
        <input className="form" type="search" id="search" aria-label="Search"  />
        <span className="input-group-text" >
        <AiOutlineSearch size="1.5rem" />
        </span>   

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item1">
          <Link className="nav-link active" aria-current="page" to="/time"><span className="time">HH:MM:SS</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="notification"><MdNotificationsNone size="2rem" color="cornflowerblue"/></Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link " to="/account" ><BsPeopleCircle size="2rem" color="cornflowerblue"/></Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

</div>
<Sidebar/>

      </>
     );
  }
  
  export default Navbar;