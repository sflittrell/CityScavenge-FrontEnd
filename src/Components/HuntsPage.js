import React from 'react';
import { Link } from 'react-router-dom';
import { useHunt } from '../Utilities/HuntContext';
import Footer from './Footer';


export default function HuntsPage() {

    const { huntsList } = useHunt();

    // console.log(huntsList)

    return (
        <div className="my-5">
            <div className="row row-cols-1 row-cols-md-3 m-5 g-4">
                {huntsList.map((hunt, index) => <div className="col" key={index}>
                    <div className="col">
                        <div className="card h-100">
                            <img src={`/img/Hunt_Thumb${hunt.photoNumber}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                {!hunt.status ? <Link className="card-title fs-3 fw-bold" to={`/hunt/${hunt.id}`}>{hunt.label}</Link> : <div className="card-title fs-3 fw-bold">{hunt.label}</div>}
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">{hunt.status}</small>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
            <Footer />
        </div>
    )
}
