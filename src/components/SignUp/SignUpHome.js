import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PersonalDetails } from "./PersonalDetails";
import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { EducationInfo } from "./EducationInfo";
import { ExperienceInfo } from "./ExperienceInfo";
import './SignUp.css'

const steps = ["Personal Details", "Education Information", "Experience Information"];

export default function SignUpHome() {
  // bread
  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      "&:hover, &:focus": {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  });
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 4;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box display="flex" justifyContent="center">
      {/* breadcumbs */}

      <Box sx={{ background: "white", margin: "40px 20px" , width: "1400px",}}>
        <Box sx={{ margin: "40px 20px" }}>
          <Typography sx={{ mt: 2, color: "var(--p_color)" }} variant="h4">
            Register
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link className="linkStyle" to="/">
              <StyledBreadcrumb
                to="/"
                label="Home"
                icon={<HomeIcon fontSize="small" />}
              />
            </Link>
            <Link className="linkStyle" to="/signUp">
              <StyledBreadcrumb component="a" href="#" label="Register" />
            </Link>
          </Breadcrumbs>
        </Box>
        <Typography sx={{ mb: 3,ml:'20px' }} variant="h4">
                    <Typography variant='h4' textAlign="left">Fill up Your Information</Typography>
                </Typography>

        <Box
          sx={{
           
            margin: "40px 20px",
            background: "white",
            
          }}
        >
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button variant="contained" color='primary'  onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* setting up form according to click */}
              
              {activeStep === 0 ? <PersonalDetails /> :activeStep === 1 ? <EducationInfo/>:<ExperienceInfo/>}
              {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep }</Typography> */}

              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
             variant="contained" 
             color='primary'
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}

                <Button variant="contained" color='primary' onClick={handleNext}>
                  {activeStep === steps.length - 1?'Submit' : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Box>
    </Box>
  );
}
