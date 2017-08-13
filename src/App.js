import React from "react";

import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./containers/HomepageContainer";
import AboutUs from "./containers/AboutUsContainer";
import ContactUs from "./containers/ContactUsContainer";
import Article from "./containers/ArticleContainer";
import ArticleLanding from "./containers/ArticleLandingContainer";
import Footer from "./components/Footer";

const App = () =>
  <div id="app-container">
    <Router>
      <div className="app">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/articles" component={ArticleLanding} />
        <Route path="/articles/:articleId" component={Article} />
        <Footer />
      </div>
    </Router>
  </div>;

export default App;
