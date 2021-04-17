import React from "react";
import FormComponent from "./components/formComponent";
import ResumeComponent from "./components/resumeComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/homeComponent";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/create-resume" component={() => <FormComponent/>} />
          <Route exact path="/print-resume" component={() => <ResumeComponent/>} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
