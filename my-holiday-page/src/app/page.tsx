import Link from 'next/link';
import Footer from './components/Footer';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-md shadow-md hover:bg-gray-100 transition duration-300">
    {children}
  </Link>
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
