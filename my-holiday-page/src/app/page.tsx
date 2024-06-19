import Link from 'next/link';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-md shadow-md hover:bg-gray-100 transition duration-300">
    {children}
  </Link>
);

const Footer: React.FC = () => (
  <footer className="mt-8 text-center max-w-2xl mx-auto">
    <p className="text-sm md:text-base mb-4">
      This project is not commercial. It is only for fun and practicing with Next.js and integrating holidays to show just the specific holidays from the USA.
    </p>
    <p className="text-sm md:text-base mb-4">
      The holiday data is provided by the <a href="https://holidayapi.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Holiday API</a>. Please refer to their <a href="https://holidayapi.com/policies" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">API policies</a> for more information.
    </p>
    <p className="text-sm md:text-base">
      For any issues or feedback, feel free to <a href="mailto:danielsantiago1230@gmail.com" className="underline hover:text-gray-300">contact us</a>.
    </p>
  </footer>
);

const Home: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">Welcome to My Holiday Page</h1>
    <nav className="mb-8">
      <NavLink href="/holidays">View US Holidays</NavLink>
    </nav>
    <Footer />
  </div>
);

export default Home;
