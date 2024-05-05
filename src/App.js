import React, { useState, useEffect } from "react";
import "./App.css";
import BasicCard from "./components/BasicCard";

function App() {
    const [jobData, setJobData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://api.weekday.technology/adhoc/getSampleJdJSON",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ limit: 10, offset: 0 }),
                }
            );

            const data = await response.json();
            setJobData(data.jdList[0]);
        } catch (error) {
            console.error("Error fetching job data:", error);
        }
    };

    return (
        <div className="App">{jobData && <BasicCard jobData={jobData} />}</div>
    );
}

export default App;
