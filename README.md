# Holiday Page

[Website](https://my-holiday-page.vercel.app/)

## Overview

This project is a developer practice project created to gain hands-on experience with Next.js, React, TypeScript, and API integration. The application fetches holiday data from the [Holiday API](https://holidayapi.com/) and displays it in a user-friendly manner, grouped by month. Clicking on a holiday card opens a Google search for the holiday in a new tab.

## Features

- **Next.js**: Utilizes the Next.js framework for server-side rendering and static site generation.
- **React**: Implements components for a modular and maintainable codebase.
- **TypeScript**: Ensures type safety and code clarity.
- **API Integration**: Fetches holiday data from the Holiday API.
- **Responsive Design**: Styled with Tailwind CSS for a responsive and modern UI.
- **Google Search Integration**: Clicking on a holiday card opens a Google search for the holiday.

## Project Structure

```plaintext
├── src
│   ├── app
│   │   ├── api
│   │   │   └── holidays
│   │   │       └── route.ts
│   │   ├── holidays
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── services
│   │   └── holidays.ts
├── .env.local
├── package.json
├── tsconfig.json
└── README.md

## Installation

## Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/holiday-page.git
cd holiday-page
```

2. Install the dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your Holiday API key:
```plaintext
HOLIDAY_API_KEY=your-api-key
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Styling
The application is styled using Tailwind CSS to achieve a responsive and modern design. Key components are styled to ensure a consistent look and feel across the application.

## API Integration
The application uses the `fetchHolidays` function to fetch holiday data from the Holiday API. This function handles errors and returns the fetched data.

## API Route
The API route handles GET requests to fetch holiday data. It checks for the API key, fetches the data, and handles any errors that may occur.

## Components
The project includes the following components:

- Home: The home page component.
- NavLink: A reusable component for navigation links.
- Footer: A reusable component for the footer content.
- Holidays: The holidays page component.
- LoadingIndicator: Displays a loading state while fetching data.
- ErrorMessage: Displays an error message if fetching data fails.
- HolidayCard: Displays individual holiday details and opens a Google search in a new tab when clicked.
- MonthSection: Groups holidays by month and displays them in a grid.
