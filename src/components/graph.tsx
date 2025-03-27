import {useState, useEffect} from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Stack, Typography, Grid } from '@mui/material';
import SelectPill from './selectPill';
import Line from './line';

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
const weeks = [
  'week 1', 'week 2', 'week 3', 'week 4', 'week 5' 
]

const days = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
]

const yearlyData = {
  drivers: [1, 2, 3, 4, 5, 7, 8, 10 , 14, 12, 15, 17],
  riders: [2, 3.3, 5, 4.5, 4.5, 5, 3, 5 , 4, 9, 2, 15],
  trips: [2, 5.5, 2, 8.5, 1.5, 5, 6, 2 , 3, 6, 7, 15]
}

const monthlyData = {
  drivers: [1, 2, 3, 4, 5],
  riders: [2, 3.3, 5, 4.5, 4.5],
  trips: [2, 5.5, 2, 8.5, 1.5]
}
const weeklyData = {
  drivers: [1, 2, 3, 4, 5, 5, 9],
  riders: [2, 3.3, 5, 4.5, 4.5, 6, 8],
  trips: [2, 5.5, 2, 8.5, 1.5, 4, 3]
}

export default function Graph() {
  const [range, setRange] = useState('')
  const [monthly, setMonthly] = useState(false)
  const [weekly, setWeekly] = useState(false)
  const [city, setCity] = useState('All')
  const [xLabel, setXlabel] = useState(months)
  const [data, setData] = useState(yearlyData)



  //make select pills visible depending on selected range
  useEffect(() => {
    if(range === 'Monthly'){
      setMonthly(true)
      setWeekly(false)
      setXlabel(weeks)
      setData(monthlyData)
    }
    else if(range === 'Weekly'){
      setWeekly(true)
      setMonthly(true)
      setXlabel(days)
      setData(weeklyData)
    }
    else{
      setMonthly(false)
      setWeekly(false)
      setXlabel(months)
      setData(yearlyData)
    }
  })

  return (
    <Box sx = {{bgcolor: 'white', p: 2, borderRadius: '4px'}}>
        <Stack direction = "row" sx  ={{justifyContent: 'space-between'}}>
          <Typography component = 'p' sx = {{
            textTransform: 'uppercase',
            letterSpacing: 1.5,
            color: 'black',
            fontSize: 14     
          }}>Activity chart for {city}</Typography>
          <Stack direction = "row" gap = {1} sx = {{mr: 2, alignItems: 'center'}}>
            <Typography component = "p" sx = {{fontSize: 12, fontWeight: 'bold'}}>Select City : </Typography>
            <SelectPill active setRng = {setCity} options = {["All", "PortHarcourt", "Calabar", "Bayelsa"]} />
          </Stack>
        </Stack>
        <Stack  sx = {{flexDirection: 'row', justifyContent : 'space-between', mt: 2}}>
          <Stack spacing = {1} direction = 'row' sx={{ maxWidth: 'max-content', flex : 1, flexWrap: 'wrap'}}>
            <Stack direction = 'row' spacing = {0.5} sx = {{alignItems: 'center'}}>
              <Line color = 'rgb(46 151 255)'/>
              <Typography sx  = {{fontSize : 12}}> Drivers</Typography>
            </Stack>
            <Stack direction = 'row' spacing = {0.5} sx = {{alignItems: 'center'}}>
              <Line color = 'rgb(3 178 175)'/>
              <Typography sx  = {{fontSize : 12}}> Riders</Typography>
            </Stack>
            <Stack direction = 'row' spacing = {0.5} sx = {{alignItems: 'center'}}>
              <Line color = 'rgb(184 0 216)'/>
              <Typography sx  = {{fontSize : 12}}> Trips</Typography>
            </Stack>  
          </Stack>
          <Stack spacing = {1} direction = 'row' sx={{ maxWidth: 'max-content', mr  : 2, flex: 1, flexWrap: 'wrap' }}>
            <SelectPill active setRng = {setRange} options = {["Yearly", "Monthly", "Weekly"]} />
            <SelectPill active options = {["2024", "2025"]} />
            <SelectPill active = {monthly} options = {months} />
            <SelectPill active = {weekly} options = {weeks} />
          </Stack>
        </Stack>
        <LineChart
        xAxis={[{ scaleType: 'point', data: xLabel }]}
        series={[
            {
            data: data.riders,
            
            },
            {
              data: data.drivers,
              
            },
            {
              data: data.trips,
              
            },
        ]}
        height={300}
        />
    </Box>
  );
}
