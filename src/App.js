import React, { Component, fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { auth, provider } from "./firebase";

class App extends Component {
  state = {
    user: null
  };
  

 //What would be needed if this was not an arrow function?
  logout = () => {
   auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  };

  //how would you update this to use asnyc/await
  login = () => {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({
        user
      });
    });
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.user ? (
            <div>
            <button onClick={this.logout}>Log Out</button>
              <ul>
              <li>Home</li>
            </ul>
            </div>
            
          ) : (
            <button onClick={this.login}>Log In</button>
          )}
        </header>
        <div>
          {this.state.user ? <h1>I am logged in</h1> : <h1>I am logged out</h1>}
        </div>
      </div>
    );
  }
}

export default App;
