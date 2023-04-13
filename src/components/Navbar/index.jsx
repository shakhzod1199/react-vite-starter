import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./style.scss";
const index = () => {
  
   return (
      <>
         <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container-fluid container">     
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/user">User</NavLink>
                     </li>
                  </ul>
               </div>
               <div className="d-flex align-items-center">
                  

                  <div className="dropdown">
                     <a
                        className="text-reset me-3 dropdown-toggle hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                     >
                      En
                     </a>
                     <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuLink"
                     >
                        <li>
                           <a className="dropdown-item" id='langUz' href="#">O'zbek</a>
                        </li>
                        <li>
                           <a className="dropdown-item" id='langEn' href="#">English</a>
                        </li>
                     </ul>
                  </div>
                  <div className="dropdown">
                     <a
                        className="text-reset me-3 dropdown-toggle hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                     >
                     <i className="fa-solid fa-moon"></i>
                     <i className="fa-solid fa-sun"></i>
                     </a>
                  </div>
               </div>
            </div>
         </nav>
      </>
   );
};

export default index;