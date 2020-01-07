import React from 'react';
import { useHistory } from "react-router-dom";

const handleSubmit = (e, history, user) => {
    e.preventDefault();
    const to = (new FormData(e.target)).get('condition');

    if (!to) alert('Please choose an option');

    history.push(`/${to}`);

}

const Dashboard = props => {
    let history = useHistory();
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Dashboard</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">My Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="jumbotron">
                                <h1>Welcome { props.user.firstname ? props.user.firstname : 'User' }</h1>
                                <p className="lead">Please take the quiz below in order to complete your diet plan recommandation diagnosis.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 offset-2">
                            <form onSubmit={(e) => handleSubmit(e, history, props.user)}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <p>Please select the health condition that you would like to have a diet plan reccomendation for.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input name="condition" className="form-check-input" type="radio" value="communicable" id="defaultCheck1" />
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    Communicable Diseases.
                                        </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input name="condition" className="form-check-input" type="radio" value="non-communicable" id="defaultCheck2"/>
                                                <label className="form-check-label" htmlFor="defaultCheck2">
                                                    Non-Communicable Diseases
                                        </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;