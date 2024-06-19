# Holiday Page

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