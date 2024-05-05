import React from "react";
import { CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import BasicCard from "../BasicCard";
import "./styles.css";

const JobsContainer = ({
    jobDataList,
    hasMoreValue,
    handleOnRowsScrollEnd,
}) => {
    return (
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
    );
};

export default JobsContainer;
