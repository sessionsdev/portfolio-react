import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import './ContactForm.css'


const Contact = (props) => {
    return ( 
        <div className="container section scrollspy" id="contact">
                <div className="row">
                    <div className="col s12 l5">
                        <h2>Contact Me</h2>
                        <p>Use the form to send me a message.</p>
                        <p>Or email me at jon@sessionsdev.com</p>
                    </div>
                    <div className="col s12 l5 offset-l2">
                    <Formik
        initialValues={{
            email: '',
            message: '',
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
            props.sendEmail(values);
            resetForm();
            setSubmitting(false);
        }}
        validationSchema={Yup.object().shape({
            email: Yup.string()
                .email("Enter a valid email address.")
                .required("Email is required."),
            message: Yup.string()
                .required("A message is required.")
        })}
        >
        
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
            } = props;
            return (
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input
                            placeholder="Enter your email address."
                            name="email"
                            id="input-email" 
                            type="text"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <label htmlFor="email-input">Email</label>
                        {errors.email && touched.email && (
                            <div className="input-feedback">{errors.email}</div>
                            )}
                    </div>
                    <div className="input-field">
                            <textarea 
                                id="message-input" 
                                name="message"
                                className="materialize-textarea" 
                                data-length="120"
                                value={values.message}
                                onChange={handleChange}
                                onBlue={handleBlur}
                            >
                            </textarea>
                            <label htmlFor="message-input">Message</label>
                            {errors.message && touched.message && (
                                <div className="input-feedback">{errors.email}</div>
                                )}
                    </div>

                        <input 
                            type="submit"
                            className="btn center"
                            value="Submit"
                            disabled={isSubmitting}
                        />

                </form>
            )
        }}


        
    </Formik>
                    </div>
                </div>
            </div>
     );
}
 
export default Contact;