import React from 'react';
import { useHistory } from "react-router-dom";

const handleSubmit = (e, history) => {
    e.preventDefault();
    history.push('/dashboard');
}

const Home = props => {
    let history = useHistory();
    return (
        <main>
            <div className="container">

                <div className="row">
                    <div className="col-md-12">
                        <h1>
                            Please kindly enter your information
                        </h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 offset-3">

                        <form onSubmit={(e) => handleSubmit(e, history)}>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            onChange={({ target }) => props.onInputChange(target.name, target.value) }
                                            value={ props.name } 
                                            type="text" className="form-control form-control-lg" name="firstname" placeholder="First Name" required autoFocus />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input 
                                            onChange={({ target }) => props.onInputChange(target.name, target.value) }
                                            value={ props.name } 
                                            type="text" className="form-control form-control-lg" name="surname" placeholder="Surname" required />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input 
                                            onChange={({ target }) => props.onInputChange(target.name, target.value) }
                                            value={ props.name } 
                                            type="text" className="form-control form-control-lg" name="phoneNumber" placeholder="Phone Number" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input 
                                            onChange={({ target }) => props.onInputChange(target.name, target.value) }
                                            value={ props.name } 
                                            type="email" className="form-control form-control-lg" name="email" placeholder="Email Address" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input 
                                            onChange={({ target }) => props.onInputChange(target.name, target.value) }
                                            value={ props.name } 
                                            type="number" className="form-control form-control-lg" name="age" placeholder="Age" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <select 
                                            onChange={({ target }) => props.onInputChange(target.name, target.value) }
                                            value={ props.name } 
                                            name="gender" className="form-control form-control-lg" required>
                                            <option value="">Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input 
                                            onChange={({ target }) => props.onInputChange(target.name, target.value) }
                                            value={ props.name } 
                                            type="password" className="form-control form-control-lg" name="password" placeholder="New Password" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block btn-lg">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </main>
    )
}

export default Home;