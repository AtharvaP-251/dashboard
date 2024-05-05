import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Chip } from "@mui/material";

export default function Tags({ options, label, width, onChange }) {
    const handleChange = (event, options) => {
        onChange(options.map((option) => option.value));
    };

    return (
        <Stack spacing={3} sx={{ minWidth: width, width: "auto" }}>
            <Autocomplete
                multiple
                id="tags-outlined"
                options={options}
                getOptionLabel={(option) => option.label}
                filterSelectedOptions
                renderOption={(props, option) => {
                    return (
                        <li {...props} key={option.label}>
                            {option.label}
                        </li>
                    );
                }}
                renderTags={(tagValue, getTagProps) => {
                    return tagValue.map((option, index) => (
                        <Chip
                            {...getTagProps({ index })}
                            key={option.label}
                            label={option.label}
                        />
                    ));
                }}
                renderInput={(params) => (
                    <TextField {...params} label={label} />
                )}
                onChange={handleChange}
            />
        </Stack>
    );
}
