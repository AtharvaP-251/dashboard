import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function Tags({ options, label, width }) {
    return (
        <Stack spacing={3} sx={{ minWidth: width, width: "auto" }}>
            <Autocomplete
                multiple
                id="tags-outlined"
                options={options}
                getOptionLabel={(option) => option.label}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField {...params} label={label} />
                )}
            />
        </Stack>
    );
}
