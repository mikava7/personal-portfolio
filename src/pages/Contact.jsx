import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import styled from "styled-components";
import { ProjectHeader } from "../Styles/GlobalStyles";

const Contact = () => {
  const contactRef = useRef();
  const form = useRef();
  const [userMessage, setUserMessages] = React.useState([]);

  const scrollToTop = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    const formData = {};
    data.forEach((value, key) => {
      formData[key] = value;
    });

    setUserMessages([...userMessage, formData]);

    emailjs
      .sendForm(
        "service_bdmkicw",
        "template_t0ndr0f",
        form.current,
        "mKoBJSbLktNviHt5s"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
  };

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
      <ContactForm onSubmit={onSubmit} ref={form}>
        <label>Name</label>
        <Input type="text" name="from_name" />
        <label>Email</label>
        <Input type="email" name="from_email" />

        <label>Message</label>
        <TextArea name="message" />
        <SubmitButton type="submit" value="Send" />
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;

// Styled components remain the same

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

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  max-width: 370px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
`;

const SubmitButton = styled.input`
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

const ErrorText = styled.p`
  color: red;
  font-size: 1rem;
  margin-top: 0.2rem;
  margin-bottom: 0;
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
