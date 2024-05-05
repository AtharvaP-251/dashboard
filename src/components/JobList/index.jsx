import React, { useState, useEffect, useRef } from "react";
import BasicCard from "../BasicCard";
import { CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchData } from "../../apis/fetchData";
import { DEFAULT_LIMIT } from "../../utils/constants";
import "./styles.css";

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
            fetchDataAndUpdateList();
        }
    }, [initialRender]);

    const fetchDataAndUpdateList = async () => {
        try {
            const data = await fetchData(pageOffset.current);
            setJobDataList((prevData) => [...prevData, ...data.jdList]);
            setTotalCount(data.totalCount);
            pageOffset.current += DEFAULT_LIMIT;
        } catch (error) {
            console.error("Error fetching job data:", error);
        }
    };

    const handleOnRowsScrollEnd = () => {
        if (jobDataList.length < totalCount) {
            setHasMoreValue(true);
            fetchDataAndUpdateList();
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
                <div className="job-data-container">
                    {jobDataList.map((jobData) => (
                        <BasicCard key={`${jobData.jdUid}`} jobData={jobData} />
                    ))}
                </div>
            </InfiniteScroll>
        )
    );
};

export default JobList;
