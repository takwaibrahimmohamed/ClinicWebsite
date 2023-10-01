import * as React from "react";
import { createRoot } from "react-dom/client";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// here is the dector components.
const DectorInput = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </Stack>
  );
};

// here is a patient componets.


const App = () => {
  const [value, setValue] = React.useState("Patient");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  // here we are rending the main components....
  return (
    <>
      <FormControl
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh"
        }}
      >
        <FormLabel id="demo-controlled-radio-buttons-group">
          Type of User
        </FormLabel>
        <RadioGroup
          sx={{ display: "flex", flexDirection: "row" }}
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="Doctor" control={<Radio />} label="Doctor" />
          <FormControlLabel
            value="Patient"
            control={<Radio />}
            label="Patient"
          />
        </RadioGroup>
        {/* base on that condition we rending the perticuler components. */}
        {value === "Patient" ? <PatientInput /> : <DectorInput />}
      </FormControl>
    </>
  );
};

root.render(<App />);
