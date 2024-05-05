import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextField({ label, width, onChange }) {
    const handleChange = (event) => {
        onChange(event.target?.value);
    };

    return (
        <Box
            component="form"
            sx={{
                "& > :not(style)": { minWidth: width },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label={label}
                variant="outlined"
                onChange={handleChange}
            />
        </Box>
    );
}
