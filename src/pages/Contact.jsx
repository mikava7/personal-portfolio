import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ProjectHeader } from "../Styles/GlobalStyles";

const Contact = () => {
  const contactRef = React.useRef(null);
  const scrollToTop = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const [submittedMessages, setSubmittedMessages] = useState([]);

  const handleSubmit = (values, { resetForm }) => {
    const newMessage = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    setSubmittedMessages([...submittedMessages, newMessage]);

    // Use the resetForm function provided by Formik
    resetForm();

    console.log("Form values:", values);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <ContactContainer>
      <ProjectHeader
        style={{ paddingTop: "2rem" }}
        ref={contactRef}
        onClick={scrollToTop}
      >
        Contact
      </ProjectHeader>
      <ContactInfo>
        <Email>Email: i.mikava365@gmail.com</Email>
        <PhoneNumber>Phone: +32 455 11 77 78</PhoneNumber>
      </ContactInfo>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <ContactForm>
            <Input type="text" name="name" placeholder="Name" />
            <Input type="email" name="email" placeholder="Email" />
            <TextArea as="textarea" name="message" placeholder="Message" />
            <SubmitButton type="submit" disabled={isSubmitting}>
              Submit
            </SubmitButton>
          </ContactForm>
        )}
      </Formik>
      {/* ... */}
    </ContactContainer>
  );
};

export default Contact;
const ContactContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  background-color: #bcbcfa43;
  min-height: 100vh;
  min-width: 80%;
  outline: 1px solid #bcbcfa43;
  margin: 0 1rem;
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const Email = styled.p`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const PhoneNumber = styled.p`
  font-size: 1.2rem;
`;

const ContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  max-width: 370px;
  width: 100%;
`;

const Input = styled(Field)`
  width: 100%;
  height: 40px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
`;

const TextArea = styled(Field)`
  width: 100%;
  height: 150px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const SocialIconLink = styled.a`
  margin: 0 1rem;
  font-size: 1.5rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    color: #0056b3;
  }
`;
