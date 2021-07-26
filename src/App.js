import React from "react";
import FormComponent from "./components/formComponent";
import ResumeComponent from "./components/resumeComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/homeComponent";
import CreateCoverComponent from "./components/createCoverComponent";
import FooterComponent from "./components/footerComponent";
import NavComponent from "./components/navComponent";

const App = () => {
  return (
    <>
      <NavComponent />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/create-resume" component={() => <FormComponent />} />
          <Route exact path="/create-cover-letter" component={() => <CreateCoverComponent />} />
          <Route exact path="/print-resume" component={() => <ResumeComponent />} />
        </Switch>
      </BrowserRouter>
      <FooterComponent />
    </>
  )
}

export default App;
