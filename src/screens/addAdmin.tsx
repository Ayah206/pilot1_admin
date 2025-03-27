import React, { useState, useEffect } from "react";
import { TextField, FormHelperText, Box, Toolbar, Typography, Button, Stack } from "@mui/material";
import InputField from "../components/inputField";
import FileField from "../components/fileField";
import ToolBar from "../components/toolBar";
import PhoneField from "../components/phoneField";
import Form from "../components/form";
import { string } from "yup";
import { useFormik } from "formik";
import { adminSchema } from "../utilities/schemas";

export default function AddAdmin() {
  const [error, setError] = useState<boolean>(true)
  
  const formik = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: adminSchema,
    onSubmit: (data) => {
      console.log('data is: ', data)
    },
  });
  useEffect(() => {
    Object.keys(formik.errors).length === 0 ? setError(false): setError(true) 
  },[formik.errors])
  
  return (
    <Form title = "Add Users" handleSubmit= {formik.handleSubmit} > 
        <Stack direction = 'row' gap = {2} >
          <InputField 
            title = "First Name" 
            name = "fname"
            value={formik.values.fname}
            onChange={formik.handleChange}
            error={formik.touched.fname && Boolean(formik.errors.fname)}
            helperText = {formik.touched.fname && formik.errors.fname} 
          />
          <InputField 
            title = "Last Name"
            name = "lname"
            value={formik.values.lname}
            onChange={formik.handleChange}
            error={formik.touched.fname && Boolean(formik.errors.lname)}
            helperText = {formik.touched.lname && formik.errors.lname}  
          />
        </Stack>
        <Stack direction = 'row' gap = {2}>
          <InputField 
            title = "email"
            name = "email" 
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText = {formik.touched.email && formik.errors.email} 
          />
          <PhoneField 
            title = "Mobile"
            name = "mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText = {formik.touched.mobile && formik.errors.mobile} 
  
          />
        </Stack>
        <Stack direction = 'row' gap = {2}>
          <InputField 
            title = "password"
            name = "password" 
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText = {formik.touched.password && formik.errors.password} 
          />
          <InputField 
            title = "Confirm Password"
            name = "confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText = {formik.touched.confirmPassword && formik.errors.confirmPassword} 
          />
        </Stack>
        <FileField label = "add photo" />
        <ToolBar btnLabel = "submit" type = "submit" disabled = {error} />
    </Form>
  );
}