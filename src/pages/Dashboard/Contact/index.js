import React from 'react';
import { Formik, Field, Form, useFormik } from 'formik';
import validations from "./validations";
import './styles.css';

function Contact() {
  const {handleSubmit,handleChange,values,isSubmitting,errors,handleBlur, touched}=
    useFormik({
      initialValues:{
        firstName: '',
        lastName: '',
        email: '',
        message:'',
    },
    onSubmit: async (values,bag) => {
      await new Promise((r)=>setTimeout(r,1000));
      console.log(values);
      console.log(bag);
      if(values.email ==='elif@test.com'){
        return bag.setErrors({email:'Bu mail adresi zaten kullanılıyor!',message:'Lütfen geçersiz karakter kullanmayınız!'})
      }
      bag.resetForm();
    },
    validationSchema :validations,
  });
  return (
    <div>
      <h2>Contact</h2>
     
      <form onSubmit={handleSubmit} className="form">
        <div>
        <label htmlFor="firstName">First Name</label>
        <input 
            id="firstName" 
            name="firstName" 
            placeholder="Jane" 
            value={values.firstName}
            disabled={isSubmitting}
            onChange={handleChange("firstName")}
            onBlur={handleBlur('firstName')} />
            {errors.firstName && touched.firstName && <div className='error'>{errors.firstName}</div>}
        </div>
        <div>
        <label htmlFor="lastName">Last Name</label>
        <input 
            id="lastName" 
            name="lastName" 
            placeholder="Doe" 
            value={values.lastName}
            disabled={isSubmitting}
            onChange={handleChange("lastName")}
            onBlur={handleBlur('lastName')}/>
            {errors.lastName && touched.lastName && <div className='error'>{errors.lastName}</div>}
</div>
<div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          value={values.email}
          disabled={isSubmitting}
          onChange={handleChange("email")}
          onBlur={handleBlur('email')}
        />
        {errors.email && touched.email && <div className='error'>{errors.email}</div>}
        </div>
        <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          placeholder="Your Message.."
          disabled={isSubmitting}
          onChange={handleChange("message")}
          onBlur={handleBlur('message')}
        />
        {errors.message && touched.message && <div className='error'>{errors.message}</div>}
        </div>
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>
     
      
    </div>
    
  )
}

export default Contact;