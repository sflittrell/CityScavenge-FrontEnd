import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../Utilities/AuthContext'

export default function Register(props) {

    const [formInputs, setFormInputs] = useState({});

    const handleChange = (e) => {
        setFormInputs(previousState => (
            {
                ...previousState,
                [e.target.name]: e.target.value
            }
        ))
    }

    const { register } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault();
        register(formInputs);
    }
    // console.log(formInputs)

    return (
        <div className="center-text">
            <div className="card col-md-5  col-sm-12 position-absolute top-50 start-50 translate-middle">
                <div className="card-body">
                    <form className="needs-validaton" noValidate onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="validationCustom01" className="form-label">First Name</label>
                            <input name="firstName" type="text" className="form-control" id="validationCustom01" required aria-describedby="firstName" value={formInputs.firstName || ''} onChange={handleChange} />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputLastName" className="form-label">Last Name</label>
                            <input name="lastName" type="text" className="form-control" id="exampleInputLastName" required aria-describedby="firstName" value={formInputs.lastName || ''} onChange={handleChange} />
                        </div>
                        <div className="valid-feedback">
                            Looks good!
                            </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                            <input name="phone" type="text" className="form-control" id="exampleInputPhone" aria-describedby="phone" value={formInputs.phone || ''} onChange={handleChange} />
                        </div>
                        <div className="valid-feedback">
                            Looks good!
                            </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input name="email" type="email" className="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" value={formInputs.email || ''} onChange={handleChange} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="valid-feedback">
                            Looks good!
                            </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input name="password" type="password" className="form-control" id="exampleInputPassword1" required value={formInputs.password || ''} onChange={handleChange} />
                        </div>
                        <div className="valid-feedback">
                            Looks good!
                            </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <div className="mt-3">
                            Already have an account? <Link to={'/login/'}>Click here to login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
