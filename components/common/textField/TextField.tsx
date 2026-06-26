"use client"
import MUITextField from "@mui/material/TextField";
import { ReactNode, useState } from "react";

const TextField: React.FC<{
  id: string;
  name: string;
  label: ReactNode;
  helperText: ReactNode;
  defaultValue: ReactNode;
  autoFocus?: boolean;
}> = (props) => {
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    const isValid = /^[A-Za-z\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\s]*$/.test(
      val,
    );
    setError(!isValid);
  };

  return (
    <>
      <MUITextField
        error={error}
        helperText={
          error
            ? props.helperText
              ? props.helperText
              : "Incorect value."
            : " "
        }
        defaultValue={props.defaultValue}
        slotProps={{
          formHelperText: {
            sx: {
              mt: -1, // top margin
              lineHeight: "0.1em", // tighter line spacing
              fontSize: "0.7rem", // optional, smaller text
            },
          },
          htmlInput: { dir: "auto" },
        }}
        onChange={handleChange}
        id={props.id}
        autoFocus={props.autoFocus}
        name={props.name}
        label={props.label}
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

export default TextField;
