import React from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../Utilities/AuthContext';


export default function Hunt() {

    const { hunts } = useAuth();

    let { id } = useParams();
    const hunt = hunts.find(item => item.id === parseInt(id));

    return (
        <div className="col mt-5">
            {console.log(hunt)}
            <div className="card h-100">
                <img src={`/img/Hunt_Thumb${hunt.photoNumber}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                <h1 className="card-title">{hunt.label}</h1>
                <p className="card-text">{hunt.description}</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}
