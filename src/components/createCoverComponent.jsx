import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Form, Button, Input, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const CreateCoverComponent = () => {

    const handleSubmitForm=()=>{}
    const handleFormChange=()=>{}

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
              // value={coverDetails.name}
              onChange={handleFormChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Title</label>
            <input
              id="title"
              placeholder="Title example: Software Developer, Sales Executive"
              // value={coverDetails.title}
              onChange={handleFormChange}
            />
          </Form.Field>
          <h1>Contact Details</h1>
          <Form.Field
            required
            id="phone"
            control={Input}
            label="Phone"
            placeholder="Enter your contact number..."
            // value={coverDetails.phone}
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
            // value={coverDetails.email}
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
            // value={coverDetails.linkedin}
            onChange={handleFormChange}
          />
          <Form.Field
            id="github"
            control={Input}
            label="GitHub URL"
            placeholder="Enter your GitHub URL..."
            // value={coverDetails.github}
            onChange={handleFormChange}
          />
          <Form.Field
            id="twitter"
            control={Input}
            label="Twitter Handle"
            placeholder="Enter your Twitter Handle..."
            // value={coverDetails.twitter}
            onChange={handleFormChange}
          />
          <Form.Field
            id="web"
            control={Input}
            label="Personal Portfolio / Other website"
            placeholder="Personal Portfolio or other website URL..."
            // value={coverDetails.web}
            onChange={handleFormChange}
          />
          <h1>Cover Letter</h1>
          <Form.Field required>
            <label>To</label>
            <input
              id="name"
              placeholder="Enter receiver's name"
              // value={coverDetails.name}
              onChange={handleFormChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>Title</label>
            <input
              id="name"
              placeholder="Enter receiver's title like Human Resource Manager / Talent Acquisition"
              // value={coverDetails.name}
              onChange={handleFormChange}
            />
          </Form.Field>
          
          <Form.Field required>
            <label>Organisation</label>
            <input
              id="name"
              placeholder="Enter receiver's organisation name"
              // value={coverDetails.name}
              onChange={handleFormChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>Address Line 1</label>
            <input
              id="name"
              placeholder="Enter organisation address"
              // value={coverDetails.name}
              onChange={handleFormChange}
            />
          </Form.Field>
          <Form.Field >
            <label>Address Line 2</label>
            <input
              id="name"
              placeholder="Enter organisation address"
              // value={coverDetails.name}
              onChange={handleFormChange}
            />
          </Form.Field>

          <Form.Field required>
            <label>Dear</label>
            <input
              id="name"
              placeholder="Salutation like Dear John, Dear Mr. Doe or Dear Sir"
              // value={coverDetails.name}
              onChange={handleFormChange}
            />
          </Form.Field>
          
          <Form.TextArea
            required
            id="msg"
            label="Message"
            placeholder="Write about your technical skills or expertise in a particular field separated by comma(,)..."
            // value={coverDetails.msg}
            onChange={handleFormChange}
          />
          <p className="hint">
                Hint: 
                {
                  " Put <br> in between the text in message to reflect the text in the next line."
                }
              </p>
        </Form>
      </div>
    </div>
  );
};

export default CreateCoverComponent;
