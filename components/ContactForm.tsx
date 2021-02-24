import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import styled from 'styled-components';
import * as Yup from 'yup';

import Component from './common/Component';

const REQUIRED_ERROR_MESSAGE = 'This field is required';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required(REQUIRED_ERROR_MESSAGE),
  email: Yup.string()
    .email('This is not a valid email address')
    .required(REQUIRED_ERROR_MESSAGE),
  phone: Yup.string()
    .required(REQUIRED_ERROR_MESSAGE),
  message: Yup.string()
    .required(REQUIRED_ERROR_MESSAGE),
});

const ContactForm = ({ item }) => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmission({ name, email, phone, message }, { resetForm }) {
    await axios.post('/api/form', {
      name,
      email,
      phone,
      message
    }).then(res => {
      setSubmitted(true);
      setError(false);
      resetForm();
    })
    .catch(_ => {
      setError(true);
      setSubmitted(false);
    });
  }

  return (
    <Component backgroundColour={item.elements.component__background_color.value[0].codename} size={item.elements.component__size.value[0].codename}>
      <ContentContainer>
        {item.elements.title.value && <h2>{item.elements.title.value}</h2>}
        {item.elements.content.value && <div dangerouslySetInnerHTML={{ __html: item.elements.content.value }} />}
      </ContentContainer>
      <Formik initialValues={{ name: '', email: '', phone: '', message: '' }} validationSchema={ContactFormSchema} onSubmit={handleFormSubmission}>
        {({ handleSubmit, isSubmitting, isValid }) =>
          <Form onSubmit={handleSubmit}>
            <ContactFormContainer>
              {submitted && <FormStatus>Thank you for your form submission</FormStatus>}
              {error && <FormStatusError>There was an error, please try again later</FormStatusError>}
              <FieldWrapper>
                <label htmlFor='name'>Full name</label>
                <ErrorMessage name='name' component='p' />
                <Field id='name' type='text' name='name' />
              </FieldWrapper>
              <FieldWrapper>
                <label htmlFor='email'>Email address</label>
                <ErrorMessage name='email' component='p' />
                <Field id='email' type='email' name='email' />
              </FieldWrapper>
              <FieldWrapper>
                <label htmlFor='phone'>Phone number</label>
                <ErrorMessage name='phone' component='p' />
                <Field id='phone' type='tel' name='phone' />
              </FieldWrapper>
              <FieldWrapper>
                <label htmlFor='message'>Message</label>
                <ErrorMessage name='message' component='p' />
                <Field id='message' name='message' as='textarea' />
              </FieldWrapper>
              <button type='submit' disabled={isSubmitting || !isValid}>Submit</button>
            </ContactFormContainer>
          </Form>
        }
      </Formik>
    </Component>
  )
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 1em;
`;

const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    height: 50px;
  }

  textarea {
    max-width: 100%;
    width: 100%;
    min-height: 100px;
  }

  input,
  textarea {
    padding: .75em;
    border: 1px solid #ddd;
  }

  button {
    border: none;
    padding: .5em 1em;
    background-color: ${props => props.theme.colours.primary};
    color: white;
  }
`;

const FormStatus = styled.div`
  width: 100%;
  padding: .5em;
  background-color: ${props => props.theme.colours.primary};
  color: white;
  margin-bottom: 1em;
`;

const FormStatusError = styled.div`
  width: 100%;
  padding: .5em;
  background-color: ${props => props.theme.colours.secondary};
  color: white;
  margin-bottom: 1em;
`;

const FieldWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  p {
    font-size: .8em;
    margin: .5em 0;
    padding: .5em;
    background-color: ${props => props.theme.colours.secondary};
    color: white;
  }
`;

export default ContactForm;
