import React from 'react';
import * as yup from 'yup';
 
export const loginSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .max(50, 'Too Long!')
      .required('Password is required')
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      )
  });


  export const adminSchema = yup.object({
    fname: yup
      .string()
      .min(2, 'name should be atleast 2 characters length')
      .max(50, 'Too Long!')
      .required('First name is required'),
    lname: yup
      .string()
      .min(2, 'name should be atleast 2 characters length')
      .max(50, 'Too Long!')
      .required('Last name is required'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    mobile: yup
      .string()
      .required('Phone number is required')
      .matches(/^\d{10}$/, 'Phone number must be 10 digits'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .max(50, 'Too Long!')
      .required('Password is required')
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required')
  });

  export const citySchema = yup.object({
    name: yup
      .string()
      .min(2, 'name should be atleast 2 characters length')
      .max(50, 'Too Long!')
      .required('City name is required'),
    abb: yup
      .string()
      .min(2, 'abbreviation should be atleast 2 characters length')
      .max(4, 'Too Long!')
      .required('Abbreviation is required'),
    driverComm: yup
      .number()
      .typeError('Price must be a number')
      .positive('Price must be greater than zero')
      .required('Commision is required'),
    driverSub: yup
      .number()
      .typeError('Price must be a number')
      .positive('Price must be greater than zero')
      .required('Subscription fee is required'),
    ridePPK: yup
      .number()
      .typeError('Price must be a number')
      .positive('Price must be greater than zero')
      .required('Price Per Kilometer is required'),
    dispatchComm: yup
      .number()
      .typeError('Price must be a number')
      .positive('Price must be greater than zero')
      .required('Commision is required'),
    dispatchSub: yup
      .number()
      .typeError('Price must be a number')
      .positive('Price must be greater than zero')
      .required('Subscription fee is required'),
    dispatchPPK: yup
      .number()
      .typeError('Price must be a number')
      .positive('Price must be greater than zero')
      .required('Price Per Kilometer is required'),
  });
