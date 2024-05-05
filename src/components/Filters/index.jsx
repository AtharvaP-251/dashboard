import * as React from "react";
import ComboBox from "../ComboBox";
import Tags from "../Tags";
import {
    experienceOptions,
    remoteOptions,
    minBasePayOptions,
    locationOptions,
    roleOptions,
} from "../../utils/dropdownOptions";
import "./styles.css";

const Filters = () => {
    return (
        <div className="filters">
            <ComboBox
                options={experienceOptions}
                label={"Min experience"}
                width={170}
            />
            <ComboBox options={remoteOptions} label={"Remote"} width={170} />
            <ComboBox
                options={minBasePayOptions}
                label={"Min base pay"}
                width={170}
            />
            <Tags options={locationOptions} label={"Locations"} width={170} />
            <Tags options={roleOptions} label={"Roles"} width={170} />
        </div>
    );
};

export default Filters;
