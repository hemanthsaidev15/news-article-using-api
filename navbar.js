import React from "react";


const Navbar = () => {
return (
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><b>MY NEWS-APP</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><b>ABOUT</b></a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><b>NEWS TODAY</b></a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
</div>

    )

}

export default Navbar;