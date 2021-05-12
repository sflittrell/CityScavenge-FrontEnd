import React from 'react'
import Footer from './Footer.js';


export default function howItWorks() {
    return (
        <div className="container-xxl p-0">
            <div className="row row-cols-1 row-cols-md-2 mt-5">
                <div className="p-1 col d-flex">
                    <img className="img-fluid d-none d-sm-none d-md-block" src="/img/Hunt3_Dt.jpg" alt="" />
                    <img className="img-fluid d-sm-block d-md-none" src="/img/Hunt3_mobile.jpg" alt="" />
                </div>
                <div className="col mt-2 ps-4 pe-5 text-start">
                    <h1 className="text-center fw-bold">
                        How it Works
                    </h1>
                    <p className="text-center">
                    Buckle your seatbelt and hold onto your hats. Your in for a wild ride. City Scavenge is a fun and amazing time. Here's how it works.
                    </p> 
                    <ul>
                    <li>Make your choice and pick from a selection of excellent adventures. Once started, you may be asked to allow location services on your device. This is required for the app to work so please select allow. Your scavenger hunt might take a moment or two to load. Please be patient. We do this so that there won't be any interruptions during your hunt by spotty service.</li>
                    <li>During your hunt you will be given clues that lead you to various locations. As you near a specific location you will be given either a new clue to help you find your way or be asked a question. You can find the answer to these questions by solving riddles of finding hidden clues. Once you answer a question correctly, you will be given a clue to the next location.</li>
                    <li>Once you have reached the last location and solved all the riddles you have won. Yay for you!</li>
                    </ul>
                    <p>
                    {/* Gravida arcu ac tortor dignissim convallis. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Nunc sed velit dignissim sodales ut eu sem integer vitae. Adipiscing elit ut aliquam purus sit amet. Pulvinar mattis nunc sed blandit libero volutpat. Turpis massa sed elementum tempus egestas sed. Egestas pretium aenean pharetra magna ac placerat vestibulum. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Pellentesque id nibh tortor id aliquet. Sit amet porttitor eget dolor morbi non arcu risus. */}
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
