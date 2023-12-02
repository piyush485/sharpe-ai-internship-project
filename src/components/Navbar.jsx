import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl">Sharpe-AI</span>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
                        onClick={toggleNavbar}
                    >
                        <svg
                            className="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${isOpen ? 'block' : 'hidden'
                        } lg:flex lg:items-center lg:w-auto w-full`}
                >
                    <div className="lg:flex-grow">
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white text-decoration-line: underline" : "text=gray-700"} block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4`}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/transaction"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white text-decoration-line: underline" : "text=gray-700"} block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4`}
                        >
                            Transaction
                        </NavLink>
                        <NavLink
                            to="/data"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white text-decoration-line: underline" : "text=gray-700"} block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4`}
                        >
                            Data
                        </NavLink>  
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

