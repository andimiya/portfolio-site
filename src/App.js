import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
// import HomepageContainer from './containers/HomepageContainer';
import WorkContainer from "./containers/WorkContainer";
import WorkShowcaseContainer from "./containers/WorkShowcaseContainer";
import ResumeContainer from "./containers/ResumeContainer";
import Footer from "./components/Footer";

let deferredPrompt;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLoad(e) {
    // For older browsers
    e.preventDefault();
    deferredPrompt = e;
    // See if the app is already installed, in that case, do nothing
  }

  componentDidMount() {
    window.addEventListener("beforeinstallprompt", this.handleLoad);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeinstallprompt");
  }

  onClick = e => {
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  };

  render() {
    return (
      <div>
        <div className="notification">
          <p>Install this app and get to it quickly, also enjoy it offline</p>
          <button
            id="installBtn"
            onClick={e => this.onClick(e)}
            className="button"
          >
            Install App
          </button>
        </div>
        <Router>
          <div className="app">
            <NavBar />
            <Route exact path="/" component={WorkContainer} />
            <Route exact path="/work" component={WorkContainer} />
            <Route exact path="/work/:work" component={WorkShowcaseContainer} />
            <Route exact path="/resume" component={ResumeContainer} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
