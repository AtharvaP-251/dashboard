import React, { useState, useEffect, useRef } from "react";
import BasicCard from "./BasicCard";

const JobList = () => {
    const [initialRender, setInitialRender] = useState(true);
    const [jobDataList, setJobDataList] = useState([]);
    const pageOffset = useRef(0);

    useEffect(() => {
        if (initialRender) {
            setInitialRender(false);
        } else {
            fetchData();
        }
    }, [initialRender]);

    const fetchData = async () => {
        try {
            const response = await fetch(
                `https://api.weekday.technology/adhoc/getSampleJdJSON`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        limit: 10,
                        offset: pageOffset.current,
                    }),
                }
            );

            const data = await response.json();
            setJobDataList((prevData) => [...prevData, ...data.jdList]);
            pageOffset.current += 10;
        } catch (error) {
            console.error("Error fetching job data:", error);
        }
    };

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        )
            return;
        fetchData();
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            {jobDataList.map((jobData) => (
                <BasicCard key={`${jobData.jdUid}`} jobData={jobData} />
            ))}
        </div>
    );
};

export default JobList;
