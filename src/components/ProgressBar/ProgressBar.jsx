import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Choose Pizza", "Add Info", "Review"]

function ProgressBar({ currentStep }) {
  return (
    <Stepper sx={{ marginTop: "20px" }} activeStep={currentStep}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default ProgressBar;