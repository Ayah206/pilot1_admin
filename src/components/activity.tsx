import * as React from 'react';
import {Box, Typography, Stack} from '@mui/material';
import { PieChart} from '@mui/x-charts/PieChart';

export default function Activity() {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '4px',
        height: '100%'
      }}
    >
        <Box sx = {{p:2}}>
          <Typography component = 'p' sx = {{
            textTransform: 'uppercase',
            letterSpacing: 1.5,
            color: 'black',
            fontSize: 14,
            mb: 4
              
          }} >Revenue Chart</Typography>

          {/* <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 30, label: 'PH' },
                  { id: 1, value: 10, label: 'Calabar' },
                  { id: 2, value: 5, label: 'Bayelsa' },
                ],
              },
            ]}
            width={300}
            height={200}
          />
          <Stack sx = {{mt: 3}}>
            <Stack direction = 'row' sx ={{alignItems: 'center'}} gap = {1}>
              <Typography sx = {{fontSize: 12, fontWeight: 'bold'}}>Total Revenue: </Typography>
              <Typography> $10,000</Typography>
            </Stack>
            <Stack direction = 'row' sx ={{alignItems: 'center'}} gap = {1}>
              <Typography sx = {{fontSize: 12, fontWeight: 'bold'}}>This Month's Revenue: </Typography>
              <Typography> $10,000</Typography>
            </Stack>
            <Stack direction = 'row' sx ={{alignItems: 'center'}} gap = {1}>
              <Typography sx = {{fontSize: 12, fontWeight: 'bold'}}>Today's Revenue: </Typography>
              <Typography> $10,000</Typography>
            </Stack>
          </Stack> */}
        </Box>
        
    </Box>
  );
}

