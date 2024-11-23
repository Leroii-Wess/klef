import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="fixed top-0 left-0 z-10 w-full flex items-center justify-between px-32 py-10 bg-gray-100 shadow-lg">
      <Link
        to="/home"
        className="flex items-center gap-2 text-3xl font-bold text-blue-800 tracking-wide hover:scale-105 transition-all duration-200"
      >
        MediHealth
      </Link>

      <ul className="flex gap-10">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `text-2xl font-bold ${
              isActive ? "text-blue-700" : "text-blue-900"
            } hover:text-blue-700 transition-all duration-200`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="#"
          className={({ isActive }) =>
            `text-2xl font-bold ${
              isActive ? "text-blue-900" : "text-blue-500"
            } hover:text-blue-700 transition-all duration-200`
          }
        >
          About
        </NavLink>
        <NavLink
          to="#"
          className={({ isActive }) =>
            `text-2xl font-bold ${
              isActive ? "text-blue-900" : "text-blue-500"
            } hover:text-blue-700 transition-all duration-200`
          }
        >
          Doctors
        </NavLink>
        <NavLink
          to="#"
          className={({ isActive }) =>
            `text-2xl font-bold ${
              isActive ? "text-blue-900" : "text-blue-500"
            } hover:text-blue-700 transition-all duration-200`
          }
        >
          Contact
        </NavLink>
      </ul>

      <button className="px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-300">
        Sign Up
      </button>
    </div>
  );
}

export default NavBar;
