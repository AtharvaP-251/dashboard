import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard({ jobData }) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography>Title: {jobData.jobRole}</Typography>
                <Typography>Company Name: {jobData.companyName}</Typography>
                <Typography>Location: {jobData.location}</Typography>
                <Typography>
                    Job description: {jobData.jobDetailsFromCompany}
                </Typography>
                <Typography>
                    Experience required: {jobData.minExp} - {jobData.maxExp}
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
                <Button>View Job</Button>
            </CardActions>
        </Card>
    );
}
