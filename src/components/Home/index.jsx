import React, { useState, useEffect, useRef } from "react";
import Filters from "../Filters";
import JobsContainer from "../JobsContainer";
import { fetchData } from "../../apis/fetchData";
import { DEFAULT_LIMIT } from "../../utils/constants";

const Home = () => {
    const [initialRender, setInitialRender] = useState(true);
    const [jobDataList, setJobDataList] = useState([]);
    const [filteredJobDataList, setFilteredJobDataList] = useState([]);
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
        <>
            {jobDataList && (
                <Filters
                    jobDataList={jobDataList}
                    setFilteredJobDataList={setFilteredJobDataList}
                    handleOnRowsScrollEnd={handleOnRowsScrollEnd}
                />
            )}
            {filteredJobDataList && (
                <JobsContainer
                    filteredJobDataList={filteredJobDataList}
                    hasMoreValue={hasMoreValue}
                    handleOnRowsScrollEnd={handleOnRowsScrollEnd}
                />
            )}
        </>
    );
};

export default Home;
