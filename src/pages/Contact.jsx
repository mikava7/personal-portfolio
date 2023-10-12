import React from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { ProjectHeader } from "../Styles/GlobalStyles";

const Contact = () => {
  const contactRef = React.useRef(null);
  const scrollToTop = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const [userMessage, setUserMessages] = React.useState([]);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setUserMessages([...userMessage, data]);
    console.log("Form values:", [...userMessage, data]);

    reset();
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
      <ContactForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: "Name is required" }}
            render={({ field }) => <Input {...field} placeholder="Name" />}
          />
          {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
        </div>
        <div>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email",
              },
            }}
            render={({ field }) => <Input {...field} placeholder="Email" />}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </div>
        <div>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{ required: "Message is required" }}
            render={({ field }) => (
              <TextArea {...field} placeholder="Message" />
            )}
          />
          {errors.message && <ErrorText>{errors.message.message}</ErrorText>}
        </div>
        <SubmitButton type="submit">Submit</SubmitButton>
      </ContactForm>
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
