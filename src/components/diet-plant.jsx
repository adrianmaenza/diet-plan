import React from 'react';
import { useHistory } from 'react-router-dom';

const DietPlan = props => {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="#">Dashboard</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">My Profile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="jumbotron">
                                <h1>Welcome { props.user.firstname ? props.user.firstname : 'User' }</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="alert alert-primary" role="alert">
                                <p class="lead">Please find the recommended diet plan document below for your Health condition.</p>
                            </div>
                            <button class="btn btn-primary">Diet Plan PDF</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default DietPlan;