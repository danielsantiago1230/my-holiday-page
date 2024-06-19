"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Holiday } from '../../services/holidays';

const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const groupHolidaysByMonth = (holidays: Holiday[]) => {
    return holidays.reduce((acc, holiday) => {
        const month = new Date(holiday.date).toLocaleString('default', { month: 'long' });
        if (!acc[month]) {
            acc[month] = [];
        }
        acc[month].push(holiday);
        return acc;
    }, {} as Record<string, Holiday[]>);
};

const LoadingIndicator: React.FC = () => (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex flex-col items-center">
        <p className="text-center text-lg p-4 bg-white text-blue-500 rounded-md shadow-md">Loading...</p>
    </div>
);

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex flex-col items-center">
        <p className="text-center text-red-500">{message}</p>
    </div>
);

const HolidayCard: React.FC<{ holiday: Holiday }> = ({ holiday }) => {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(holiday.name + ' holiday')}`;

    return (
        <div
            className="bg-white text-blue-500 p-6 rounded-lg shadow-lg flex flex-col items-center cursor-pointer transition duration-300 hover:bg-blue-100"
            onClick={() => window.open(googleSearchUrl, '_blank', 'noopener,noreferrer')}
        >
                <h3 className="text-xl font-semibold mb-2">{holiday.name}</h3>
                <p className="text-gray-700">{formatDate(holiday.date)}</p>
        </div>
    );
};

const MonthSection: React.FC<{ month: string; holidays: Holiday[] }> = ({ month, holidays }) => (
    <div key={month} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">{month}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {holidays.map((holiday) => (
                <HolidayCard key={holiday.date + holiday.name} holiday={holiday} />
            ))}
        </div>
    </div>
);

const Holidays: React.FC = () => {
    const [holidays, setHolidays] = useState<Holiday[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHolidays = async () => {
            try {
                const response = await axios.get<Holiday[]>('/api/holidays');
                setHolidays(response.data);
                setLoading(false);
            } catch (error: any) {
                console.error('Error fetching holidays:', error);
                setError(error?.response?.data?.error || 'An unexpected error occurred');
                setLoading(false);
            }
        };

        fetchHolidays();
    }, []);

    if (loading) {
        return <LoadingIndicator />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    const holidaysByMonth = groupHolidaysByMonth(holidays);

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">US Holidays</h1>
            <p className="mb-8 text-center text-sm md:text-base text-red-300">
                Note: The holidays displayed are from the previous year due to the limitations of the free API plan.
            </p>
            <div className="w-full max-w-4xl">
                {Object.keys(holidaysByMonth).map((month) => (
                    <MonthSection key={month} month={month} holidays={holidaysByMonth[month]} />
                ))}
            </div>
        </div>
    );
};

export default Holidays;
