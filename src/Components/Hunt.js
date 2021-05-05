import React from 'react'

export default function Hunt(props) {
    console.log(props.hunt)
    return (
        <div className="col">
        {console.log(props.hunt)}
            <div className="card h-100">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.label}</h5>
                </div>
            </div>
        </div>
    )
}
