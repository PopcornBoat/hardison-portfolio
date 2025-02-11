import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="flex space-x-6">
    <NavLink to="/" className="hover:text-blue-400" activeclassname="text-blue-400">Home</NavLink>
    <NavLink to="/projects" className="hover:text-blue-400" activeclassname="text-blue-400">Projects</NavLink>
    <NavLink to="/contact" className="hover:text-blue-400" activeclassname="text-blue-400">Contact</NavLink>
  </nav>
);

export default Navbar;
