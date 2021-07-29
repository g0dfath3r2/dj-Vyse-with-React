import React from "react";
import Home from "./components/Home";
import MediaCoverage from "./components/MediaCoverage";
import News from "./components/News";
import ContactMe from "./components/ContactMe";
import Photos from "./components/Photos";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";

import { useLocation, Switch, Route } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/dj-vyse-with-react" component={Home} />
          <Route path="/events" component={MediaCoverage} />
          <Route path="/photos" component={Photos} />
          <Route path="/news" component={News} />
          <Route path="/contactme" component={ContactMe} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
