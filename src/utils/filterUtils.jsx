export const filterJobData = (jobDataList, filters) => {
    return jobDataList.filter((job) => {
        const roleFilter =
            filters.roles.length === 0 || filters.roles.includes(job.jobRole);
        const minExperienceFilter =
            !filters.minExperience || job.minExp >= filters.minExperience;
        const locationFilter =
            filters.locations.length === 0 ||
            filters.locations.includes(job.location);
        const remoteFilter =
            filters.remote === "remote"
                ? job.location.toLowerCase() === "remote"
                : filters.remote === "on-site"
                ? job.location.toLowerCase() !== "remote"
                : true;
        const minBasePayFilter =
            !filters.minBasePay || job.minJdSalary >= filters.minBasePay;
        const companyNameFilter =
            !filters.companyName ||
            job.companyName
                .toLowerCase()
                .includes(filters.companyName.toLowerCase());

        return (
            roleFilter &&
            minExperienceFilter &&
            locationFilter &&
            remoteFilter &&
            minBasePayFilter &&
            companyNameFilter
        );
    });
};
