import Navbar from "./Navbar";

const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-md flex justify-between items-center z-50">
    <h1 className="text-xl font-bold">My Portfolio</h1>
    <Navbar />
  </header>
);

export default Header;
