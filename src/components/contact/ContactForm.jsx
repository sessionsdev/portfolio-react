import React from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';


const ContactForm = (props) => (
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
                            id="email" 
                            type="text"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <label for="email">Email</label>

                    </div>
                    <div className="input-field">
                            <textarea 
                                id="message" 
                                className="materialize-textarea" 
                                data-length="120"
                                value={values.message}
                                onChange={handleChange}
                                onBlue={handleBlur}
                            >
                            </textarea>
                            <label for="message">Message</label>

                    </div>
                    <div className="input-field center">
                        <input 
                            type="submit"
                            className="btn center"
                            value="Submit"
                            disabled={isSubmitting}
                        />
                    </div>

                </form>
            )
        }}


        
    </Formik>
);
 
export default ContactForm;