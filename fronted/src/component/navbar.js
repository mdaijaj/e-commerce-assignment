import React, { useEffect, useState } from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import "../App.css"  //22

const Navbar = () => {
    const navigate= useNavigate()

    let localdata=localStorage.getItem("mytime")
    if(localdata){
        let userInf= JSON.parse(localdata).data
        localdata=userInf
    }else{
        localdata=""
    }

    useEffect(()=>{
        removeUser()
    }, [])

    const removeUser=()=>{
        const userdata=localStorage.removeItem("mytime");
        return userdata
    }

    const wishlist=()=>{
        navigate('/wishlist')
    }


    const cardlist=()=>{
        navigate('/cartlist')
    }

    return (
        <>
            <nav className="aijaj navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <NavLink className="icon-holder" to="/"> <img src="https://cdn.bbopokertables.com/template/common/images/2020/logo.png" width="120px" height="80px"/></NavLink>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/all_products">All Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/chairs">Chairs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tables">Tables</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dining_tops">Dining tops</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <br />
                    <button type="button" data-toggle="modal" data-target="#staticBackdrop"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    </button>
                   

                    <button type="button" onClick={wishlist}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg></button>

                    <button type="button" onClick={cardlist}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="currentColor" class="bi bi-bag-dash-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z" />
                    </svg>
                    </button>

                    {/* <!-- Profile Modal --> */}
                    <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Welcome</h5> <hr />
                                    <p className="p1">To access account and manage orders </p>

                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                {localdata ? 
                                    <div className="modal-body">
                                        <h6 style={{textAlign:'center'}}>Welcome {localdata.name }</h6>
                                        <span className="modal-body" style={{textAlign:"center"}}>
                                            <button style={{textAlign:'center'}} onClick={removeUser} type="button">Logout  </button>
                                        </span>
                                    </div>
                                    : 
                                    <div className="modal-body">
                                        <NavLink to="/register"><button type="button">Login / Register </button></NavLink>
                                        {/* {window.location.reload()} */}
                                    </div>
                                }
                               
                                
                                <div>
                                    <ul>
                                        <li><NavLink to="#">Orders</NavLink></li>
                                        <li><NavLink to="#"> Wishlist</NavLink></li>
                                        <li><NavLink to="#"> Gift Cards </NavLink></li>
                                        <li><NavLink to="#"> Contact Us</NavLink></li>
                                        <li><NavLink to="#"> Myntra InsiderNew </NavLink></li>
                                    </ul>
                                </div>

                                <div>
                                    <ul>
                                        <li> <NavLink to="#"> Myntra Credit </NavLink></li>
                                        <li> <NavLink to="#">Coupons</NavLink></li>
                                        <li> <NavLink to="#">Saved Cards</NavLink></li>
                                        <li> <NavLink to="#">Saved Addresses</NavLink></li>
                                    </ul>
                                </div>
                                <div className="modal-footer">
                                    <button 
                                        type="button" 
                                        className="btn btn-secondary" 
                                        data-dismiss="modal"> Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar;