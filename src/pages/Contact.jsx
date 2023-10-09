import React from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const contactRef = React.useRef(null);
  const scrollToTop = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission here
    console.log("Form values:", values);
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <ContactContainer>
      <h1 style={{ paddingTop: "2rem" }} ref={contactRef} onClick={scrollToTop}>
        Contact
      </h1>
      <ContactInfo>
        <Email>Email: email@example.com</Email>
        <PhoneNumber>Phone: 123-456-7890</PhoneNumber>
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
        <ContactForm>
          <Input type="text" name="name" placeholder="Name" />
          <Input type="email" name="email" placeholder="Email" />
          <TextArea as="textarea" name="message" placeholder="Message" />
          <SubmitButton type="submit">Submit</SubmitButton>
        </ContactForm>
      </Formik>
      <SocialIcons>
        <SocialIconLink
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </SocialIconLink>
        <SocialIconLink
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </SocialIconLink>
        <SocialIconLink
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube"></i>
        </SocialIconLink>
      </SocialIcons>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #f8f8f8;
  min-height: 100vh;
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
  max-width: 400px;
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
