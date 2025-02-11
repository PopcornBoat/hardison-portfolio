import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="p-4 bg-gray-900 text-white flex justify-between">
    <h1 className="text-xl font-bold">My Portfolio</h1>
    <div>
      <NavLink to="/" className="mx-2" activeclassname="text-blue-400">Home</NavLink>
      <NavLink to="/projects" className="mx-2" activeclassname="text-blue-400">Projects</NavLink>
      <NavLink to="/contact" className="mx-2" activeclassname="text-blue-400">Contact</NavLink>
    </div>
  </nav>
);

export default Navbar;
