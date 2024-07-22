'use client'
import { DUMMY_QUESTIONS } from "@/constants"
import Questions from "./Questions"
import { useState } from "react";
import { Box, Button, MobileStepper, Paper, Typography } from "@mui/material";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


export default function Quiz() { 
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const maxSteps = DUMMY_QUESTIONS.length;
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="pb-48 px-10 lg:px-32 xl:px-64">
      <h2 className="text-3xl md:text-4xl pb-12 font-bold text-center">Readiness Quiz</h2>
      <Questions questions={DUMMY_QUESTIONS} activeStep={activeStep} />
      <MobileStepper
        variant="progress"
        steps={DUMMY_QUESTIONS.length}
        position="static"
        activeStep={activeStep} 
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        } 
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === DUMMY_QUESTIONS.length - 1}>
            Next
            <KeyboardArrowRight />
          </Button>
        }>
      </MobileStepper>
      {/* <Questions questions={DUMMY_QUESTIONS} /> */}
    </div>
  )

}