import { NextResponse } from 'next/server';
import { fetchHolidays, Holiday } from '../../../services/holidays';

const checkApiKey = (apiKey: string | undefined): string => {
    if (!apiKey) {
        console.error('API key not provided');
        throw new Error('API key not provided');
    }
    return apiKey;
};

const handleFetchHolidaysError = (error: any) => {
    console.error('Error fetching holidays:', error);
    if (error?.message?.includes('Failed to fetch holidays for both current and last year')) {
        return NextResponse.json(
            { error: 'Failed to fetch holidays. Free accounts are limited to last year\'s data only. Upgrade to premium for access to all holiday data.' },
            { status: 402 }
        );
    }
    return NextResponse.json({ error: 'Failed to fetch holidays' }, { status: 500 });
};

export async function GET() {
    try {
        const apiKey = checkApiKey(process.env.HOLIDAY_API_KEY);
        const holidays: Holiday[] | undefined = await fetchHolidays(apiKey);
        return NextResponse.json(holidays, { status: 200 });
    } catch (error: any) {
        return handleFetchHolidaysError(error);
    }
}
