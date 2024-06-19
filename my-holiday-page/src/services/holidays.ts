import axios from 'axios';

export interface Holiday {
    name: string;
    date: string;
}

const handleAxiosError = (error: any) => {
    if (axios.isAxiosError(error)) {
        // Axios error
        console.error('Axios error fetching holidays:', error?.response?.data || error?.message);
    } else {
        // General error
        console.error('Unexpected error fetching holidays:', error);
    }
    throw new Error('Failed to fetch holidays');
};

export const fetchHolidays = async (
    apiKey: string,
    country: string = 'US',
    year: number = new Date().getFullYear() - 1 // Fetch last year's data by default
): Promise<Holiday[] | undefined> => {
    try {
        const response = await axios.get('https://holidayapi.com/v1/holidays', {
            params: {
                key: apiKey,
                country,
                year,
            },
        });
        return response.data.holidays;
    } catch (error) {
        handleAxiosError(error);
        return undefined;
    }
};
