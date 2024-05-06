import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

export default function BasicCard({ jobData }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Card
                sx={{
                    width: "calc(100% - 16px)",
                    borderRadius: "16px",
                    border: "1px solid #e0e0e0",
                    bgcolor: "background.paper",
                    m: 1,
                    boxShadow: 1,
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                        transform: "scale(1.02)",
                        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                    },
                }}
            >
                <CardContent>
                    <Typography variant="subtitle2" gutterBottom>
                        {jobData.jobRole}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        gutterBottom
                    >
                        {jobData.companyName} - {jobData.location}
                    </Typography>
                    <Typography
                        variant="body2"
                        component="p"
                        paragraph
                        style={{ textAlign: "justify", fontSize: "0.8rem" }}
                    >
                        {jobData.jobDetailsFromCompany.length > 500
                            ? jobData.jobDetailsFromCompany.substring(0, 500) +
                              "..."
                            : jobData.jobDetailsFromCompany}
                    </Typography>
                    {jobData.jobDetailsFromCompany.length > 500 && (
                        <Button size="small" onClick={handleClickOpen}>
                            read more
                        </Button>
                    )}
                    <Typography variant="body2" color="textSecondary">
                        Minimum experience: {(jobData.minExp || 0) + " years"}
                    </Typography>
                </CardContent>
                <CardActions
                    style={{ justifyContent: "center", marginBottom: "10px" }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ fontSize: "0.7rem" }}
                    >
                        Easy Apply
                    </Button>
                </CardActions>
            </Card>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent dividers>
                    <Typography
                        variant="body2"
                        style={{ textAlign: "justify", fontSize: "0.8rem" }}
                    >
                        {jobData.jobDetailsFromCompany}
                    </Typography>
                </DialogContent>
                <DialogActions style={{ justifyContent: "center" }}>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
