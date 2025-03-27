import React, { useState, useEffect } from "react";
import { TextField, FormHelperText, Box, Toolbar, Typography, Button, Stack, FormControlLabel, Switch, FormControl, Select, MenuItem } from "@mui/material";
import InputField from "../components/inputField";
import FileField from "../components/fileField";
import ToolBar from "../components/toolBar";
import PhoneField from "../components/phoneField";
import Form from "../components/form";
import { string } from "yup";
import { useFormik } from "formik";
import { adminSchema, citySchema } from "../utilities/schemas";
import CitySelectorMap from '../components/map2'
import { fetchDefaultCities } from "../services/fetchDefaultCities";
import SelectField from "../components/selectField";


export default function AddAdmin() {
  const [error, setError] = useState<boolean>(true)
  const [manualSelect, setManualSelect] = useState<boolean>(false)
  const [cities, setCities] = useState<any[]>()
  
  const formik = useFormik({
    initialValues: {
      name: '',
      abb: '',
      driverComm: '',
      driverSub: '',
      ridePPK: '',
      dispatchComm: '',
      dispatchSub: '',
      dispatchPPK: ''
    },
    validationSchema: citySchema,
    onSubmit: (data) => {
      console.log('data is: ', data)
    },
  });
  useEffect(() => {
    Object.keys(formik.errors).length === 0 ? setError(false): setError(true);
  },[formik.errors])

  useEffect(() => {
    const getCities = async () =>{
      const data = await fetchDefaultCities()
      setCities(data.elements)
      console.log(data.elements)
    }
    getCities()
  }, [])
  
  return (
    <Form title = "Add City" handleSubmit= {formik.handleSubmit} > 
      <Stack>
      <FormControlLabel control={
        <Switch 
          checked={manualSelect}
          onChange={(e) => setManualSelect(e.target.checked)}
        />} label="Manually create city" />
      </Stack>
        
        
        {manualSelect?
          <Stack>
            <InputField 
              title = "Name" 
              name = "name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText = {formik.touched.name && formik.errors.name} 
            />
            <InputField 
              title = "Abbreviation" 
              name = "abb"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.abb && Boolean(formik.errors.abb)}
              helperText = {formik.touched.abb && formik.errors.abb} 
            />
          </Stack>
        :
          <Stack direction = 'row' gap = {2} >
            <InputField 
              title = "Name" 
              name = "name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText = {formik.touched.name && formik.errors.name} 
            />
            <SelectField
              title = "Select City"
              options = {['PH', 'Lagos', 'Ibadan', 'Abj']}
            />
          </Stack>
        }   
        
        <Box sx = {{
          border: '1px solid grey',
          padding: 2,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}>
          <Typography sx = {{
            fontWeight: 'bold', 
              color: 'black',
              textTransform: 'capitalize'
            }}>Ride details</Typography>
          <Stack direction = 'row' gap = {2}>
            <InputField 
              title = "Commision"
              name = "driverComm" 
              value={formik.values.driverComm}
              onChange={formik.handleChange}
              error={formik.touched.driverComm && Boolean(formik.errors.driverComm)}
              helperText = {formik.touched.driverComm && formik.errors.driverComm} 
            />
            <InputField 
              title = "Subscrition fee"
              name = "driverSub"
              value={formik.values.driverSub}
              onChange={formik.handleChange}
              error={formik.touched.driverSub && Boolean(formik.errors.driverSub)}
              helperText = {formik.touched.driverSub && formik.errors.driverSub} 
    
            />
          </Stack>
          <Stack direction = 'row' gap = {2}>
            <InputField 
              title = "Price Per KM"
              name = "ridePPK" 
              value={formik.values.ridePPK}
              onChange={formik.handleChange}
              error={formik.touched.ridePPK && Boolean(formik.errors.ridePPK)}
              helperText = {formik.touched.ridePPK && formik.errors.ridePPK} 
            />
            <InputField 
              title = "KPI index"
              name = "ridePPK" 
              value={formik.values.ridePPK}
              onChange={formik.handleChange}
              error={formik.touched.ridePPK && Boolean(formik.errors.ridePPK)}
              helperText = {formik.touched.ridePPK && formik.errors.ridePPK} 
            />
          </Stack>
        </Box>
        <Box sx = {{
          border: '1px solid grey',
          padding: 2,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}>
          <Typography sx = {{
            fontWeight: 'bold', 
              color: 'black',
              textTransform: 'capitalize'
            }}>Dispatch details</Typography>
          <Stack direction = 'row' gap = {2}>
            <InputField 
              title = "Commision"
              name = "driverComm" 
              value={formik.values.driverComm}
              onChange={formik.handleChange}
              error={formik.touched.driverComm && Boolean(formik.errors.driverComm)}
              helperText = {formik.touched.driverComm && formik.errors.driverComm} 
            />
            <InputField 
              title = "Subscrition fee"
              name = "driverSub"
              value={formik.values.driverSub}
              onChange={formik.handleChange}
              error={formik.touched.driverSub && Boolean(formik.errors.driverSub)}
              helperText = {formik.touched.driverSub && formik.errors.driverSub} 
    
            />
          </Stack>
          <Stack direction = 'row' gap = {2}>
            <InputField 
              title = "Price Per KM"
              name = "ridePPK" 
              value={formik.values.ridePPK}
              onChange={formik.handleChange}
              error={formik.touched.ridePPK && Boolean(formik.errors.ridePPK)}
              helperText = {formik.touched.ridePPK && formik.errors.ridePPK} 
            />
            <InputField 
              title = "KPI index"
              name = "ridePPK" 
              value={formik.values.ridePPK}
              onChange={formik.handleChange}
              error={formik.touched.ridePPK && Boolean(formik.errors.ridePPK)}
              helperText = {formik.touched.ridePPK && formik.errors.ridePPK} 
            />
          </Stack>
        </Box>
        
        <ToolBar btnLabel = "submit" type = "submit" disabled = {error} />
    </Form>
  );
}