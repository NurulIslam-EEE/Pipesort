import { Grid, TextField } from '@mui/material'
import React from 'react'
import { useForm } from "react-hook-form";

export const EducationInfo = () => {
    const { register, handleSubmit, reset } = useForm();
  return (
    <Grid sx={{marginTop:'20px'}} container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* Institute */}
                    <Grid item xs={4} sm={4} md={12}>
                        <TextField
                            {...register("lastInstitute")}
                            id="outlined-basic"
                            label="Institute"
                            type="text"
                            variant="outlined"
                            className='inputFiend'
                        />
                    </Grid>

                    {/* Subject */}
                    <Grid item xs={4} sm={4} md={4}>
                        <TextField
                            {...register("lastSubject")}
                            id="outlined-basic"
                            label="Subject"
                            type="text"
                            variant="outlined"
                            className='inputFiend'
                        />
                    </Grid>

                    {/* Degree */}
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            {...register("lastDegree")}
                            id="outlined-basic"
                            label="Degree"
                            type="text"
                            variant="outlined"
                            className='inputFiend'
                        />
                    </Grid>

                    {/* Grade */}
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            {...register("lastGrade")}
                            id="outlined-basic"
                            label="Grade"
                            type="text"
                            variant="outlined"
                            className='inputFiend'
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            {...register("passing")}
                            id="outlined-basic"
                            label="Passing Year"
                            type="text"
                            variant="outlined"
                            className='inputFiend'
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            {...register("session")}
                            id="outlined-basic"
                            label="Session"
                            type="text"
                            variant="outlined"
                            className='inputFiend'
                        />
                    </Grid>
                    
                </Grid>
  )
}
