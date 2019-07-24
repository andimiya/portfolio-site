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
    window.removeEventListener("beforeinstallprompt", this.handleLoad);
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
      <div id="app-container">
        <Router>
          <div className="app">
            <NavBar />
            <Route exact path="/" component={WorkContainer} />
            <Route exact path="/work" component={WorkContainer} />
            <Route exact path="/work/:work" component={WorkShowcaseContainer} />
            <Route exact path="/resume" component={ResumeContainer} />
            <section id="installBanner" className="banner">
              <button id="installBtn" onClick={e => this.onClick(e)}>
                Install App
              </button>
            </section>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
