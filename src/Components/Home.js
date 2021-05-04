import React from 'react';
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
            <div className="row m-4 row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <i className="bi bi-binoculars-fill display-3 text-warning"></i>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">What We Do</h5>
                            <p className="card-text">Do you want a fun filled experience you can enjoy with friends and family? Check out all we offer. </p>
                            <a href="#" className="btn btn-primary">See what we do</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <i className="bi bi-signpost-split-fill display-3 text-warning" />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">How it Works</h5>
                            <p className="card-text">Interested in joining in on an exciting scavenger hunt? Check out what a typical hunt looks like.</p>
                            <a href="#" className="btn btn-primary">See how it works</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <i className="bi bi-geo-alt-fill display-3 text-warning" />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Get Started</h5>
                            <p className="card-text">Are you ready for an amazing adventure? Can't wait to get started? Jump on in and start your hunt?</p>
                            <a href="#" className="btn btn-primary">Get started</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
