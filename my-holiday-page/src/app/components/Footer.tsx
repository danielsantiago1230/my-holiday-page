const Footer: React.FC = () => (
    <footer className="mt-8 text-center max-w-2xl mx-auto">
        <p className="text-sm md:text-base mb-4">
            This project is not commercial. It is only for fun and practicing with Next.js and integrating holidays to show just the specific holidays from the USA.
        </p>
        <p className="text-sm md:text-base mb-4">
            The holiday data is provided by the <a href="https://holidayapi.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Holiday API</a>. Please refer to their <a href="https://holidayapi.com/policies" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">API policies</a> for more information.
        </p>
        <p className="text-sm md:text-base mb-4">
            For any issues or feedback, feel free to <a href="mailto:danielsantiago1230@gmail.com" className="underline hover:text-gray-300">contact me</a>.
        </p>
        <p className="text-sm md:text-base">
            Connect with me on <a href="https://www.linkedin.com/in/danielsantiagoquinteroariza/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">LinkedIn</a>.
        </p>
    </footer>
);

export default Footer;
