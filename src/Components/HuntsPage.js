import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Utilities/AuthContext';
import Footer from './Footer';


export default function HuntsPage() {

    const { hunts } = useAuth();

    console.log(hunts)

    return (
        <div className="my-5">
            <div class="row row-cols-1 row-cols-md-3 m-5 g-4">
                {hunts.map((hunt) => <div className="col">
                    <div class="col">
                        <div className="card h-100">
                            <img src={`/img/Hunt_Thumb${hunt.photoNumber}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body">

                                <Link className="card-title fs-3 fw-bold" to={`/hunt/${hunt.id}`}>{hunt.label}</Link>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">{hunt.status}</small>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
            <Footer />
        </div>
    )
}
