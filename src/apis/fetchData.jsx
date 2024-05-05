import { DEFAULT_LIMIT } from "../utils/constants";

export const fetchData = async (offset) => {
    try {
        const response = await fetch(
            `https://api.weekday.technology/adhoc/getSampleJdJSON`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ limit: DEFAULT_LIMIT, offset: offset }),
            }
        );

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};
