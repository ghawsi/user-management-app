"use client"
import MUITextField from "@mui/material/TextField";
import { ReactNode, useState } from "react";

const EmailField: React.FC<{ id: string; name:string; label: ReactNode; helperText: ReactNode; defaultValue?: string }> = (props) => {
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    const isValid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(val);
    setError(!isValid);
  };

  return (
    <>
      <MUITextField
        error={error}
        helperText={error ? props.helperText ? props.helperText : "Incorect value." : " "}
        slotProps={{
          formHelperText: {
            sx: {
              mt: -1, // top margin
              lineHeight: "0.1em", // tighter line spacing
              fontSize: "0.7rem", // optional, smaller text
            },
          },
          htmlInput:{dir:"auto"}
        }}
        onChange={handleChange}
        defaultValue={props.defaultValue ?? ""}
        required
        id={props.id}
        name={props.name}
        label={props.label}
        type="email"
        variant="outlined"
        size="small"
        sx={{
          // target the input container
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#fff", // white background
          },
        }}
      />
    </>
  );
};

export default EmailField;
