import React from "react";
import { NativeSelect } from "@mui/material";
import { styled } from "@mui/material";
import { InputBase } from "@mui/material";

const CategorySelectInput = () => {
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: "#1e1f22",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }));

  return (
    <div className="flex flex-col gap-2 mb-4">
      <label className="text-xs font-bold">CATEGORY</label>
      <NativeSelect
        id="demo-customized-select-native"
        input={<BootstrapInput />}
      >
        <option aria-label="None" value="" />
        <option>Abstract</option>
        <option>Canvas</option>
        <option>Drawing</option>
        <option>Portrait</option>
        <option>Sketch</option>
      </NativeSelect>
    </div>
  );
};

export default CategorySelectInput;
