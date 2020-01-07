import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import './css/main.css';

import Home from './components/home';
import Dashboard from './components/dashboard';
import Communicable from './components/communicable';
import NonCommunicable from './components/non-communicable';
import DietPlan from './components/diet-plant';
import PromptSuccess from './components/prompt-success';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };

  }

  onInputChange(name, value) {
    const { user } = this.state;
    user[name] = value;
    this.setState({ user });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/diet-plan" render={props => <DietPlan user={this.state.user} />} />
          <Route path="/prompt-success" render={props => <PromptSuccess user={this.state.user} />} />
          <Route path="/dashboard" render={props => <Dashboard user={this.state.user} />} />
          <Route path="/communicable" render={props => <Communicable user={this.state.user} />} />
          <Route path="/non-communicable" render={props => <NonCommunicable user={this.state.user} />} />
          <Route path="/">
            <Home
              onInputChange={(name, value) => this.onInputChange(name, value)}
              user={this.state.user}
              handleSubmit={(e) => this.handleSubmit(e)} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
