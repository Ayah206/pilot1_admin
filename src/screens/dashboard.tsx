import React from "react"
import { Box, Typography, Toolbar, Stack, Paper, Avatar } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';
import DashboardPaper from "../components/dashboardPaper";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Graph from "../components/graph";
import Activity from "../components/activity";


export default function Dashboard(){
  return(
    <Box>
      <Toolbar disableGutters>
          <Typography variant='h5'>
              Dashboard  
          </Typography>
      </Toolbar>
      <Box>
        <Grid container spacing = {{xs: 2, md: 3}}>
          <Grid container spacing = {{xs: 2, md: 3}} xs = {6} md = {12}>
            <Grid xs={12} md={3}>
              <DashboardPaper avatar = {<AttachMoneyIcon/>} color = {[50, 168, 164]} name = "today's earnings" value = '4' />
            </Grid>
            <Grid xs={12} md={3}>
              <DashboardPaper avatar = {<PersonRoundedIcon/>} color = {[255, 0, 183]} name = "today's riders" value = '4' />
            </Grid>
            <Grid xs={12} md={3}>
              <DashboardPaper avatar = {<EngineeringRoundedIcon/>} color = {[0, 151, 255,]} name = "today's drivers" value = '4' />
            </Grid>
            <Grid xs={12} md={3}>
              <DashboardPaper avatar = {<DirectionsCarIcon/>} color = {[245, 95, 68,]} name = "today's trip" value = '4' />
            </Grid>
          </Grid>
          <Grid container spacing = {2} xs = {6} md = {12}>
            <Grid xs={12} md={3}>
            <DashboardPaper avatar = {<AttachMoneyIcon/>} color = {[0, 151, 19,]} name = "total earnings" value = '4' />
            </Grid>
            <Grid xs={12} md={3}>
              <DashboardPaper avatar = {<PersonRoundedIcon/>} color = {[192, 0, 255,]} name = 'total riders' value = '4' />
            </Grid>
            <Grid xs={12} md={3}>
              <DashboardPaper avatar = {<EngineeringRoundedIcon/>} color = {[87, 24, 255,]} name = 'total drivers' value = '4' />
            </Grid>
            <Grid xs={12} md={3}>
              <DashboardPaper avatar = {<DirectionsCarIcon/>} color = {[255, 51, 102,]} name = 'total riders' value = '4' />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx = {{
          mt: 8    
        }}>
        <Grid container spacing={2}>
          <Grid md={8} xs = {12}>
            <Graph/>
          </Grid>
          <Grid md={4} xs = {12}>
            <Activity/>
          </Grid>  
        </Grid>
      </Box>
    </Box>
  )
} 
