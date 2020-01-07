import React from 'react';
import { useHistory } from 'react-router-dom';

const PromptSuccess = props => {
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
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="alert alert-success" role="alert">
                                <p className="lead">
                                    Thank you for completing the quiz. click next to get the diet plan.
                        </p>
                            </div>
                            <button onClick={() => history.push('/diet-plan')} className="btn btn-primary">Next</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default PromptSuccess;