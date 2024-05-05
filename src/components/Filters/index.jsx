import { useState } from "react";
import ComboBox from "../ComboBox";
import Tags from "../Tags";
import BasicTextField from "../BasicTextField";
import {
    minExperienceOptions,
    remoteOptions,
    minBasePayOptions,
    locationOptions,
    roleOptions,
} from "../../utils/dropdownOptions";
import "./styles.css";
import { FILTER_BOX_WIDTH, SEARCH_BOX_WIDTH } from "../../utils/constants";

const Filters = () => {
    const [filters, setFilters] = useState({
        roles: [],
        minExperience: null,
        locations: [],
        remote: null,
        minBasePay: null,
        companyName: null,
    });

    const handleFilterChange = (filterKey, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterKey]: value,
        }));
    };

    return (
        <div className="filters">
            <Tags
                options={roleOptions}
                label={"Roles"}
                width={200}
                onChange={(value) => handleFilterChange("roles", value)}
            />
            <ComboBox
                options={minExperienceOptions}
                label={"Min experience"}
                width={FILTER_BOX_WIDTH}
                onChange={(value) => handleFilterChange("minExperience", value)}
            />
            <Tags
                options={locationOptions}
                label={"Locations"}
                width={FILTER_BOX_WIDTH}
                onChange={(value) => handleFilterChange("locations", value)}
            />
            <ComboBox
                options={remoteOptions}
                label={"Remote"}
                width={FILTER_BOX_WIDTH}
                onChange={(value) => handleFilterChange("remote", value)}
            />
            <ComboBox
                options={minBasePayOptions}
                label={"Min base pay"}
                width={FILTER_BOX_WIDTH}
                onChange={(value) => handleFilterChange("minBasePay", value)}
            />
            <BasicTextField
                label={"Search Company Name"}
                width={SEARCH_BOX_WIDTH}
                onChange={(value) => handleFilterChange("companyName", value)}
            />
        </div>
    );
};

export default Filters;
