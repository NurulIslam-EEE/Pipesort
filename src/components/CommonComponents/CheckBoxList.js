import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import useProducts from "../hooks/useProducts";

export default function CheckBoxList({state,setState}) {
  // const{state,setState}=useProducts()
 
  const handleChange = (id) => {
    setState(
      state.map((old) => {
        return old.id === id ? { ...old, checked: !old.checked } : old;
      })
    );
    // handleFilterProducts(state.map((old) => {
    //   return old.id === id ? { ...old, checked: !old.checked } : old;
    // }))
  };
  
  

  return (
    <Box sx={{ m: 3,background:'white',padding:'10px 10px 30px 10px' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Filter By</FormLabel>
        <FormGroup>
          {state.map((d,i) => (
            <FormControlLabel
            key={i}
              control={
                <Checkbox
                  checked={d.checked}
                  onChange={(h) => handleChange(d.id)}
                  name={d.title}
                />
              }
              label={d.title}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
