import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85vh;
  background: violet;
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

const Email = styled.p`
  margin-bottom: 10px;
`;

const PhoneNumber = styled.p`
  margin-bottom: 10px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 100px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  width: 100px;
  height: 30px;
`;

const SocialIcons = styled.div`
  display: flex;
`;

const SocialIconLink = styled.a`
  margin-right: 10px;
`;

const Contact = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post("/mikava365@gmail.com", values);
      console.log("Email sent successfully!");
      resetForm();
    } catch (error) {
      console.log("Error sending email:", error);
    }
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <ContactContainer id="projects-section2">
      <h1>Contact</h1>
      <ContactInfo>
        <Email>Email: email@example.com</Email>
        <PhoneNumber>Phone: 123-456-7890</PhoneNumber>
      </ContactInfo>
      <ContactForm onSubmit={handleSubmit}>
        <Input type="text" placeholder="Name" required />
        <Input type="email" placeholder="Email" required />
        <TextArea placeholder="Message" required />
        <SubmitButton type="submit">Submit</SubmitButton>
      </ContactForm>
      {/* <SocialIcons>
        <SocialIconLink
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="github-icon.png" alt="GitHub" width="30" height="30" />
        </SocialIconLink>
        <SocialIconLink
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="linkedin-icon.png" alt="LinkedIn" width="30" height="30" />
        </SocialIconLink>
        <SocialIconLink
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="youtube-icon.png" alt="YouTube" width="30" height="30" />
        </SocialIconLink>
      </SocialIcons> */}
    </ContactContainer>
  );
};

export default Contact;
