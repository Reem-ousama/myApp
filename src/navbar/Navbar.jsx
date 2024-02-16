import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'



export default function 
() {

      

  return (
    <div>
        <nav className="navbar navbar-expand-lg text-light py-4">
                    <div className="container-fluid vh-25 ">
                        {/* <Link className="navbar-brand" to="#">Navbar</Link> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="logo">
                                <Link className="nav-link active p-3"><h2>START FRAMEWORK</h2></Link>
                            </div>
                            <div className="navs ">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4 ">
                                {/* <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                                </li> */}
                                <li className="nav-item ">
                                    <Link className="nav-link active text-light " aria-current="page" to="about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-light" aria-current="page" to="protopholio">Portopholio</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link active text-light" aria-current="page" to="contact">Contact </Link>
                                </li>
                               
                            </ul>
                            </div>
                        
                        </div>
                    </div>
                </nav>
    </div>

)

}
