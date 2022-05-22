import { Grid, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";

export const PersonalDetails = () => {
    const [department, setDepartment] = useState();
    const { register, handleSubmit, reset } = useForm();
    const departments = [
        {
            value: "Human Resource",
            label: "Human Resource",
        },
        {
            value: "Information Technology",
            label: "Information Technology",
        },
        {
            value: "Marketing",
            label: "Marketing",
        },
        {
            value: "Accounting",
            label: "Accounting",
        },
    ];
    const departmentChange = (event) => {
        setDepartment(event.target.value);
      };
      const [gendar, setGendar] = useState();
const gendarChange = (event) => {
  setGendar(event.target.value);
};

  const gendars = [
    {
        value: "Male",
        label: "Male",
    },
    {
        value: "Female",
        label: "Female",
    },
];
  return (
    <Grid sx={{marginTop:'20px'}} container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* name */}
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            {...register("name")}
                            id="outlined-basic"
                            label="Name"
                            type="text"
                            variant="outlined"
                            
                            required
                            className='inputFiend'
                        />
                    </Grid>

                    {/* father name */}
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            {...register("father")}
                            id="outlined-basic"
                            label="Father's Name"
                            type="text"
                            variant="outlined"
                            required
                            className='inputFiend'
                        />
                    </Grid>

                    {/* mother name */}
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            {...register("mother")}
                            id="outlined-basic"
                            label="Mother's Name"
                            type="text"
                            variant="outlined"
                            required
                            className='inputFiend'
                        />
                    </Grid>

                    {/* email address */}
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            {...register("email")}
                            id="outlined-basic"
                            label="Email"
                            type="email"
                            variant="outlined"
                           
                            required
                            className='inputFiend'
                        />
                    </Grid>

                    {/* phone number */}
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            {...register("phone")}
                            id="outlined-basic"
                            label="Cell Number"
                            type="String"
                            variant="outlined"
                            required
                            className='inputFiend'
                        />
                    </Grid>

                    {/* nid number */}
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            {...register("nid")}
                            id="outlined-basic"
                            label="NID"
                            type="number"
                            variant="outlined"
                            required
                            className='inputFiend'
                        />
                    </Grid>

                    {/* birthday */}
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            {...register("birth")}
                            id="date"
                            label="Dath of Birth"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                            className='inputFiend'
                        />
                    </Grid>

                    {/* Gendar */}
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            {...register("gendar")}
                            id="outlined-select-currency"
                            select
                            label="Gendar"
                            value={gendar}
                            onChange={gendarChange}
                            required
                            className='inputFiend'
                        >
                            {gendars.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    {/* department */}
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            {...register("department")}
                            id="outlined-select-currency"
                            select
                            label="Department"
                            value={department}
                            onChange={departmentChange}
                            required
                            className='inputFiend'
                        >
                            {departments.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    {/* designation */}
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            {...register("designation")}
                            id="outlined-basic"
                            label="Designation"
                            type="text"
                            variant="outlined"
                            required
                            className='inputFiend'
                        />
                    </Grid>

                    {/* bank */}
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            {...register("bank")}
                            id="outlined-basic"
                            label="Bank Name"
                            type="text"
                            variant="outlined"
                            required
                            className='inputFiend'
                        />
                    </Grid>

                    {/* Account */}
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            {...register("account")}
                            id="outlined-basic"
                            label="Bank Account Number"
                            type="number"
                            variant="outlined"
                            required
                            className='inputFiend'
                        />
                    </Grid>

                    {/* blood */}
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            {...register("blood")}
                            id="outlined-basic"
                            label="Blood Group"
                            type="text"
                            variant="outlined"
                            className='inputFiend'
                        />
                    </Grid>

                    {/* status */}
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            {...register("status")}
                            id="outlined-basic"
                            label="Status"
                            type="text"
                            variant="outlined"
                            value="Pending"
                            required
                            className='inputFiend'
                        />
                    </Grid>

                </Grid>
  )
}
