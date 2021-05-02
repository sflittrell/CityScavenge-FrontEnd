import React, {useState} from 'react'
import { useAuth } from '../Utilities/AuthContext'


export default function Login() {

    const [formInputs, setFormInputs] = useState({});

    const handleChange = (e) => {
        setFormInputs(previousState => (
            {
                ...previousState,
                [e.target.name]: e.target.value
            }
        ))
    }

    const { login } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formInputs);
    }
    console.log(formInputs)

    return (
        <div className="center-text">
            <div className="card col-5 position-absolute top-50 start-50 translate-middle">
                <div className="card-body">
                    <form className="needs-validaton" noValidate onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input name="email" type="email" className="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" value={formInputs.email || ''} onChange={handleChange} />
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
                    </form>
                </div>
            </div>
        </div>
    )
}