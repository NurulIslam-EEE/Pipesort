import {MenuItem, Breadcrumbs, Box, Container, Divider, FormControl as FormGroup, Grid, TextField, Typography, Button } from '@mui/material'

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import HomeIcon from "@mui/icons-material/Home";
import Chip from "@mui/material/Chip";
import { emphasize, styled } from "@mui/material/styles";

export const SignUp = () => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <Container style={{p:'20px'}}>
   
            <FormGroup >
            <Box component="form">
                {/* Experience */}
                <Typography variant="h5" sx={{ mt: 3, mb: 1, fontFamily: "var(--PT_font)" }}>
                    Experience
                </Typography>
               

                {/* Education information */}
                <Typography variant="h5" sx={{ mt: 3, mb: 1, fontFamily: "var(--PT_font)" }}>
                    Education
                </Typography>
                
                
                </Box>
                </FormGroup>
                
                </Container>
  )
}
