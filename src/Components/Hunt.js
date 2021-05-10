import React from 'react'
import { useParams } from 'react-router-dom';
import { useHunt } from '../Utilities/HuntContext';
import Footer from './Footer';


export default function Hunt() {

    const { huntsList, createHuntData } = useHunt();
    // console.log(huntsList);

    let { id } = useParams();
    const hunt = huntsList.find(item => item.id === parseInt(id));

    return (
        <div className="col my-5">
            {/* {console.log(hunt)} */}
            {hunt ? <div className="card h-100 border-0">
                <img src={`/img/HuntHero${hunt.photoNumber}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                <h1 className="card-title">{hunt.label}</h1>
                <p className="card-text">{hunt.description}</p>
                <button className="btn btn-primary mb-5" to={"/map/"} onClick={() => createHuntData(id)}>Get Started</button>
                </div>
            </div>
            : 'Loading'}
            <Footer />
        </div>
    )
}
