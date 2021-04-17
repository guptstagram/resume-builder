import React from "react";
import FormComponent from "./components/formComponent";
import ResumeComponent from "./components/resumeComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/homeComponent";

const App = () => {

  const [resumeDetails, setResumeDetails] = React.useState({
    name: "",
    title: "",
    about: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    twitter: "",
    web: "",
    expertise: "",
    exp: [{ role: "", org: "", desc: "", from: "", to: "" }],
    cert: [{ name: "", org: "", date: "" }],
    skills: "",
    edu: [{ degree: "", institute: "", from: "", to: "" }],
  });

  const handleResumeDetails = (obj) => {
    console.log(obj);
    setResumeDetails({
      ...resumeDetails,
      ...obj,
    })
  }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/create-resume" component={() => <FormComponent
            resumeDetails={resumeDetails}
            handleResumeDetails={handleResumeDetails}
          />} />
          <Route exact path="/print-resume" component={() => <ResumeComponent resumeDetails={resumeDetails} />} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
