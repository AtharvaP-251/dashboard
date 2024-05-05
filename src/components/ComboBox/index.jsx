import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox({ options, label, width }) {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{ minWidth: width, width: "auto" }}
            renderInput={(params) => <TextField {...params} label={label} />}
        />
    );
}
