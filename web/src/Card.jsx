import React from 'react';
import { NavLink } from 'react-router-dom';


const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
            <div className="card">
                <img src={props.imgsrc} className="card-img-top" alt="Music-Production"/>
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">Get a great kick start to you music production career. 3 projects to learn 3 steps to Success. Plus Certification! </p>
                    <NavLink to="#" className="btn btn-outline-primary rounded-pill">
                        More..
                    </NavLink>
                </div>
            </div>
            </div>            
        </>
    );
};

export default Card;