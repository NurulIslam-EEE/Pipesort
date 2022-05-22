import React from 'react'
import { Grid, TextField } from '@mui/material'
import { useForm } from "react-hook-form";


export const ExperienceInfo = () => {
    const { register, handleSubmit, reset } = useForm();
  return (
    <Grid sx={{marginTop:'20px'}}  container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* lastCompany */}
                    <Grid item xs={12} sm={12} md={4}>
                        <TextField
                            {...register("lastCompany")}
                            id="outlined-basic"
                            label="Company"
                            type="text"
                            variant="outlined"
                            className='inputFiend'
                        />
                    </Grid>

                    {/* lastDepartment */}
                    <Grid item xs={12} sm={12} md={4}>
                        <TextField
                            {...register("lastDepartment")}
                            id="outlined-basic"
                            label="Department"
                            type="text"
                            variant="outlined"
                            className='inputFiend'
                        />
                    </Grid>

                    {/* lastDesignation */}
                    <Grid item xs={12} sm={12} md={4}>
                        <TextField
                            {...register("lastDesignation")}
                            id="outlined-basic"
                            label="Designation"
                            type="text"
                            variant="outlined"
                            className='inputFiend'
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <TextField
                            {...register("experience")}
                            id="outlined-basic"
                            label="Experience in year"
                            type="text"
                            variant="outlined"
                            className='inputFiend'
                        />
                    </Grid>
                </Grid>
  )
}
