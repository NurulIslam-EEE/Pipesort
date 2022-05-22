import * as React from 'react';
import Box from '@mui/material/Box';
 import Slider from '@mui/material/Slider';
// import Slider from '@material-ui/core/Slider';
import { Typography } from '@mui/material';

function valuetext(value) {
  return `${value}`;
}

export default function RPriceRange({handleChange,value}) {


  return (
    <Box sx={{ m: 3,background:'white',padding:'20px 20px 20px 20px'}}>
        <Typography textAlign='center'>Price Range</Typography>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
     
        min={1}
        max={2000}
       
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
      />
        {/* <Slider
        value={value}
        onChange={handleChange }
        valueLabelDisplay='on'
        min={1}
        max={5000}
     
      /> */}
    </Box>
  );
}
