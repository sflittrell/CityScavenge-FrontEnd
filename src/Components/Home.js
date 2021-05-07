import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from './Footer.js';


export default function Home() {
    return (
        <div className="container-xxl p-0">
            <div className="d-flex">
                <img className="img-fluid d-none d-sm-none d-md-block" src="./img/CityScavengeHero.png" />
                <img className="img-fluid d-sm-block d-md-none" src="./img/CityScavengeHero_mobile.png" />
            </div>
            <div className="orangeBar">
            </div>
            <div className="row mt-5 ">
                <div className="col">
                    <figure className="text-center">
                        <blockquote className="blockquote">
                            <p>An amazing adventure that took us all over the city. I can't wait to do it again!</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            Happy Customer <cite title="Source Title">Mark Trillo</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div className="row intro my-5 text-light">
                <div className="col p-5 col-md-6">
                    <p>
                        Get ready for the adventure of a lifetime. Out team has created carefully crafted experiences that will have you in giddy with laughter or screaming in fright. Every adventure is designed to help you explore, discover, connect, and laugh.
                    </p>
                </div>
                <div className="col col-md-6 p-0">
                    <img className="img-fluid" src="./img/CityScavengeHunt_Thumb.png" />
                </div>
            </div>
            <div className="row m-4 row-cols-1 row-cols-md-2 g-4">
                {/* <div className="col">
                    <div className="card h-100">
                        <i className="bi bi-binoculars-fill display-3 text-warning"></i>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">What We Do</h5>
                            <p className="card-text">Do you want a fun filled experience you can enjoy with friends and family? Check out all we offer. </p>
                            <Link to={"/map/"} className="btn btn-primary">See what we do</Link>
                        </div>
                    </div>
                </div> */}
                <div className="col">
                    <div className="card h-100">
                        <i className="bi bi-signpost-split-fill display-3 text-warning" />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">How it Works</h5>
                            <p className="card-text">Interested in joining in on an exciting scavenger hunt? Check out what a typical hunt looks like.</p>
                            <Link to={"/howitworks/"} className="btn btn-primary">See how it works</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <i className="bi bi-geo-alt-fill display-3 text-warning" />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Get Started</h5>
                            <p className="card-text">Are you ready for an amazing adventure? Can't wait to get started? Jump on in and start your hunt?</p>
                            <Link to={"/findahunt/"} className="btn btn-primary">Get started</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
