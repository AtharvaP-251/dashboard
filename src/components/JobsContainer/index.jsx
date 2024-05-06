import { CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import BasicCard from "../BasicCard";
import "./styles.css";
import { useEffect, useState } from "react";

const JobsContainer = ({
    filteredJobDataList,
    hasMoreValue,
    handleOnRowsScrollEnd,
}) => {
    const [jobDataList, setJobDataList] = useState([]);

    useEffect(() => {
        const uniqueJdUids = new Set();
        const uniqueJobDataList = filteredJobDataList.filter((item) => {
            if (!uniqueJdUids.has(item.jdUid)) {
                uniqueJdUids.add(item.jdUid);
                return true;
            }
            return false;
        });
        setJobDataList(uniqueJobDataList);
    }, [filteredJobDataList]);

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
