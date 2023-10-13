import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import styled from "styled-components";
import { ProjectHeader } from "../Styles/GlobalStyles";

const Contact = () => {
  // Refs for elements and state management
  const contactRef = useRef(); // Reference to the contact element
  const form = useRef(); // Reference to the form element
  const [userMessage, setUserMessages] = React.useState([]); // State to store user messages
  const [isEmailSent, setIsEmailSent] = useState(false); // State to track if the email has been sent successfully
  const [focusedInput, setFocusedInput] = useState(null); // State to track which input element has focus

  // Function to scroll to the top of the contact section
  const scrollToTop = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // State for form validation errors
  const [errors, setErrors] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  // Function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault();

    // Extract form data
    const data = new FormData(form.current);
    const formData = {};
    data.forEach((value, key) => {
      formData[key] = value;
    });

    // Validate the form data
    if (!validateForm()) {
      return;
    }

    // Store user messages
    setUserMessages([...userMessage, formData]);

    // Reset form and clear errors
    setErrors({
      from_name: "",
      from_email: "",
      message: "",
    });

    // Simulate sending an email (You can add your email sending logic here)
    emailjs
      .sendForm(
        "service_bdmkicw",
        "template_t0ndr0f",
        form.current,
        "mKoBJSbLktNviHt5s"
      )
      .then(
        (result) => {},
        (error) => {
          console.log(error.text);
        }
      );

    // Reset the form
    form.current.reset();

    // Show success message and hide it after 2 seconds
    setIsEmailSent(true);

    setTimeout(() => {
      setIsEmailSent(false);
    }, 2000); // 2000 milliseconds (2 seconds)
  };

  // Function to validate the form data
  const validateForm = () => {
    const data = new FormData(form.current);
    const formData = {};
    data.forEach((value, key) => {
      formData[key] = value;
    });

    const { from_name, from_email, message } = formData;
    const newErrors = {};

    // Validate name length
    if (from_name.trim().length < 3) {
      newErrors.from_name = "Name must be at least 3 characters.";
      setFocusedInput("from_name");
    } else {
      setFocusedInput(null);
    }

    // Validate email format
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailPattern.test(from_email)) {
      newErrors.from_email = "Invalid email address.";
      setFocusedInput("from_email");
    } else {
      setFocusedInput(null);
    }

    // Validate message length
    if (message.trim().length < 5 || message.trim().length > 400) {
      newErrors.message = "Message must be between 5 and 400 characters.";
      setFocusedInput("message");
    } else {
      setFocusedInput(null);
    }

    // Check if name and message are not empty
    if (from_name.trim() === "") {
      newErrors.from_name = "Name is required.";
      setFocusedInput("from_name");
    }

    if (message.trim() === "") {
      newErrors.message = "Message is required.";
      setFocusedInput("message");
    }

    // Set errors and return whether the form is valid
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
      {isEmailSent ? ( // Conditionally render based on the email being sent
        <SuccessMessage>
          Thank you for your message! I will get back to you shortly.
        </SuccessMessage>
      ) : (
        <ContactForm onSubmit={onSubmit} ref={form}>
          <Input type="text" name="from_name" />
          {errors.from_name && <ErrorText>{errors.from_name}</ErrorText>}

          <Input type="email" name="from_email" />
          {errors.from_email && <ErrorText>{errors.from_email}</ErrorText>}

          <TextArea name="message" />
          {errors.message && <ErrorText>{errors.message}</ErrorText>}

          <SubmitButton type="submit" value="Send" />
        </ContactForm>
      )}
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
  color: #dadada;
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
const SuccessMessage = styled.div`
  max-width: 90%;
  width: 500px;
  background-color: #214a22;
  color: #fff;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 1rem;
`;
