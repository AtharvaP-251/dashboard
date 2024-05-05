import React, { useState, useEffect, useRef } from "react";
import BasicCard from "./BasicCard";
import { CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

const JobList = () => {
    const [initialRender, setInitialRender] = useState(true);
    const [jobDataList, setJobDataList] = useState([]);
    const [hasMoreValue, setHasMoreValue] = useState(true);
    const [totalCount, setTotalCount] = useState();
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
            setTotalCount(data.totalCount);
            pageOffset.current += 10;
        } catch (error) {
            console.error("Error fetching job data:", error);
        }
    };

    const handleOnRowsScrollEnd = () => {
        if (jobDataList.length < totalCount) {
            setHasMoreValue(true);
            fetchData();
        } else {
            setHasMoreValue(false);
        }
    };

    return (
        jobDataList && (
            <InfiniteScroll
                dataLength={jobDataList.length}
                next={handleOnRowsScrollEnd}
                hasMore={hasMoreValue}
                scrollThreshold={1}
                loader={<CircularProgress />}
                style={{ overflow: "unset" }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fill, minmax(400px, 1fr))",
                        gap: "20px",
                        justifyContent: "space-around",
                    }}
                >
                    {jobDataList.map((jobData) => (
                        <BasicCard key={`${jobData.jdUid}`} jobData={jobData} />
                    ))}
                </div>
            </InfiniteScroll>
        )
    );
};

export default JobList;
