import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { connect } from 'react-redux';
import { fetchSmurfs } from './actions/index'

class App extends Component {
  //2. Call the fetchSmurfs action when the component first loads.
  componentDidMount(){
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
export default connect(null, {fetchSmurfs})(App)

//export default App;