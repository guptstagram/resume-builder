import React from "react";
import "../styles/formComponent.css";
import 'semantic-ui-css/semantic.min.css'
import { Form, Button, Input, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {resumeDataSubmitAction} from "../actions/resumeDataSubmitAction";

const FormComponent = (props) => {
  let history = useHistory();
  let dispath=useDispatch();

  let resumeDetailsStore=useSelector(state=>state.resumeDetailsReducer);
  const [resumeDetails, setResumeDetails] = React.useState(resumeDetailsStore);

  const addExpRow = (e) => {
    e.preventDefault();
    setResumeDetails({
      ...resumeDetails,
      exp: [
        ...resumeDetails.exp,
        { role: "", org: "", desc: "", from: "", to: "" },
      ],
    });
  };
  const addCertRow = (e) => {
    e.preventDefault();
    setResumeDetails({
      ...resumeDetails,
      cert: [...resumeDetails.cert, { name: "", org: "", date: "" }],
    });
  };
  const addEduRow = (e) => {
    e.preventDefault();
    setResumeDetails({
      ...resumeDetails,
      edu: [
        ...resumeDetails.edu,
        { degree: "", institute: "", from: "", to: "" },
      ],
    });
  };

  const handleFormChange = (e) => {
    setResumeDetails({
      ...resumeDetails,
      [e.target.id]: e.target.value,
    });
  };

  const handleMultipleFields = (e, type, index) => {
    let newObj = { ...resumeDetails };
    newObj[type][index][e.target.name] = e.target.value;
    setResumeDetails({
      ...resumeDetails,
      ...newObj,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    props.handleResumeDetails(resumeDetails);
    dispath(resumeDataSubmitAction(resumeDetails));
    history.push("/print-resume");
  };

  return (
    <div className="form-wrapper">
      <div className="form-box">
        <Form onSubmit={handleSubmitForm}>
          <h1>Personal Details</h1>
          <Form.Field required>
            <label>Full Name</label>
            <input
              id="name"
              placeholder="Enter your name"
              value={resumeDetails.name}
              onChange={handleFormChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Title</label>
            <input
              id="title"
              placeholder="Title example: Software Developer, Sales Executive"
              value={resumeDetails.title}
              onChange={handleFormChange}
            />
          </Form.Field>
          <Form.TextArea
            required
            id="about"
            label="About"
            placeholder="Write about you and objectives towards the organization..."
            value={resumeDetails.about}
            onChange={handleFormChange}
          />
          <h1>Contact Details</h1>
          <Form.Field
            required
            id="phone"
            control={Input}
            label="Phone"
            placeholder="Enter your contact number..."
            value={resumeDetails.phone}
            onChange={handleFormChange}
            // error={{
            //     content: 'Please enter a valid email address',
            //     pointing: 'below',
            // }}
          />
          <Form.Field
            required
            id="email"
            control={Input}
            label="Email"
            placeholder="Enter your email id..."
            value={resumeDetails.email}
            onChange={handleFormChange}
            // error={{
            //     content: 'Please enter a valid email address',
            //     pointing: 'below',
            // }}
          />
          <Form.Field
            id="linkedin"
            control={Input}
            label="LinkedIn URL"
            placeholder="Enter your LinkedIn URL..."
            value={resumeDetails.linkedin}
            onChange={handleFormChange}
          />
          <Form.Field
            id="github"
            control={Input}
            label="GitHub URL"
            placeholder="Enter your GitHub URL..."
            value={resumeDetails.github}
            onChange={handleFormChange}
          />
          <Form.Field
            id="twitter"
            control={Input}
            label="Twitter Handle"
            placeholder="Enter your Twitter Handle..."
            value={resumeDetails.twitter}
            onChange={handleFormChange}
          />
          <Form.Field
            id="web"
            control={Input}
            label="Personal Portfolio / Other website"
            placeholder="Personal Portfolio or other website URL..."
            value={resumeDetails.web}
            onChange={handleFormChange}
          />

          <h1>Expertise</h1>
          <Form.TextArea
            required
            id="expertise"
            label="Expertise"
            placeholder="Write about your technical skills or expertise in a particular field separated by comma(,)..."
            value={resumeDetails.expertise}
            onChange={handleFormChange}
          />
          <h1>Work Experience (If any)</h1>

          {resumeDetails.exp.map((ex, index) => (
            <React.Fragment key={index}>
              <Form.Field
                name="role"
                control={Input}
                label="Role"
                placeholder="Your role in the organization..."
                value={ex.role}
                onChange={(e) => handleMultipleFields(e, "exp", index)}
              />
              <Form.Field
                name="org"
                control={Input}
                label="Organization"
                placeholder="Name of the organization you worked with..."
                value={ex.org}
                onChange={(e) => handleMultipleFields(e, "exp", index)}
              />
              <Form.TextArea
                name="desc"
                label="Description"
                placeholder="Describe your role in detail in the organisation..."
                value={ex.desc}
                onChange={(e) => handleMultipleFields(e, "exp", index)}
              />
              <p className="hint">
                Hint:{" "}
                {
                  "Put <br> in between the text in description to reflect the text in the next line."
                }
              </p>
              <Form.Group widths="equal">
                <Form.Field
                  name="from"
                  control={Input}
                  label="Start Month and Year"
                  placeholder="Feel free to write the way you want it to reflect July 2019 or 07-2019"
                  value={ex.from}
                  onChange={(e) => handleMultipleFields(e, "exp", index)}
                />
                <Form.Field
                  name="to"
                  control={Input}
                  label="End Month and Year"
                  placeholder="Write current or Pursuing if you are still working here..."
                  value={ex.to}
                  onChange={(e) => handleMultipleFields(e, "exp", index)}
                />
              </Form.Group>
            </React.Fragment>
          ))}
          <div className="add-button-wrapper">
            <Button animated="vertical" onClick={addExpRow}>
              <Button.Content hidden>Add</Button.Content>
              <Button.Content visible>
                <Icon name="add" />
              </Button.Content>
            </Button>
          </div>
          <h1>Certifications (If any)</h1>
          {resumeDetails.cert.map((cer, index) => (
            <React.Fragment key={index}>
              <Form.Field
                name="name"
                control={Input}
                label="Certificarion Name"
                placeholder="Certification Name..."
                value={cer.name}
                onChange={(e) => handleMultipleFields(e, "cert", index)}
              />
              <Form.Field
                name="org"
                control={Input}
                label="Issuing Organization"
                placeholder="Name of the Certificate Vendor..."
                value={cer.org}
                onChange={(e) => handleMultipleFields(e, "cert", index)}
              />
              <Form.Field
                name="date"
                control={Input}
                label="Issue Month and Year"
                placeholder="Feel free to write the way you want it to reflect July 2019 or 07-2019"
                value={cer.date}
                onChange={(e) => handleMultipleFields(e, "cert", index)}
              />
            </React.Fragment>
          ))}

          <div className="add-button-wrapper">
            <Button animated="vertical" onClick={addCertRow}>
              <Button.Content hidden>Add</Button.Content>
              <Button.Content visible>
                <Icon name="add" />
              </Button.Content>
            </Button>
          </div>
          <h1>Skills and Abilities</h1>
          <Form.TextArea
            required
            id="skills"
            label="Life Skills"
            placeholder="Write about your personal skills and abilities such as Leadership, Communication, Mentor etc inseparated by comma(,)..."
            value={resumeDetails.skills}
            onChange={handleFormChange}
          />
          <h1>Education</h1>
          {resumeDetails.edu.map((ed, index) => (
            <React.Fragment key={index}>
              <Form.Field
                name="degree"
                control={Input}
                label="Degree"
                placeholder="Degree"
                value={ed.degree}
                onChange={(e) => handleMultipleFields(e, "edu", index)}
              />
              <Form.Field
                name="institute"
                control={Input}
                label="Institute"
                placeholder="Name of the institute..."
                value={ed.institute}
                onChange={(e) => handleMultipleFields(e, "edu", index)}
              />
              <Form.Group widths="equal">
                <Form.Field
                  name="from"
                  control={Input}
                  label="Start Year"
                  placeholder="Feel free to write the way you want it to reflect July 2019 or 07-2019"
                  value={ed.from}
                  onChange={(e) => handleMultipleFields(e, "edu", index)}
                />
                <Form.Field
                  name="to"
                  control={Input}
                  label="End Year"
                  placeholder="If still studying you can mention Pursuing or Expected Year..."
                  value={ed.to}
                  onChange={(e) => handleMultipleFields(e, "edu", index)}
                />
              </Form.Group>
            </React.Fragment>
          ))}
          <div className="add-button-wrapper">
            <Button animated="vertical" onClick={addEduRow}>
              <Button.Content hidden>Add</Button.Content>
              <Button.Content visible>
                <Icon name="add" />
              </Button.Content>
            </Button>
          </div>
          <Button color="blue" type="submit">
            Create Resume
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default FormComponent;
