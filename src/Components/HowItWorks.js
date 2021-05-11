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
                <div className="col mt-2 ps-4 pe-5">
                    <h1>
                        How it Works
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Mi eget mauris pharetra et ultrices neque ornare. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Ultrices neque ornare aenean euismod elementum. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.
                    </p> 
                    <p>
                    {/* Gravida arcu ac tortor dignissim convallis. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Nunc sed velit dignissim sodales ut eu sem integer vitae. Adipiscing elit ut aliquam purus sit amet. Pulvinar mattis nunc sed blandit libero volutpat. Turpis massa sed elementum tempus egestas sed. Egestas pretium aenean pharetra magna ac placerat vestibulum. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Pellentesque id nibh tortor id aliquet. Sit amet porttitor eget dolor morbi non arcu risus. */}
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
