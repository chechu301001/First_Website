import React from 'react';
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                     <div className=" row"> 
                        <div className="col-10 mx-auto">
                            <div className="row"> 
                            <div className="col-md-6 mt-md-0 pt-0 pt-lg-0 order-2 order-lg-1 d-flex justify-content-lg-evenly flex-column">
                                <h1 >{props.name} <strong className="brand-name">I'mProWise</strong></h1>
                                <h2 className="my-0">This is the place meant for Talented Musicians!</h2>
                                <div className="mt-0">
                                    <NavLink to={props.visit} className="btn btn-outline-primary rounded-pill">
                                        {props.btname}
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-2 pt-5 pt-lg-0 order-lg-2 header-img">
                                <img src={props.imgsrc} className="img-fluid animated" alt="home img"/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;