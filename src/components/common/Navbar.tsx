import { useState } from 'react';
import Logo from '../../assets/logo1.png';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const toggleState = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <nav className="fixed w-full h-16 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <img src={Logo} alt="Logo Image" className="w-12" />
            </div>
            {/* menu */}
            <ul className="hidden sm:flex">
                <li className="px-4 cursor-pointer hover:text-pink-600">Home</li>
                <li className="px-4 cursor-pointer hover:text-pink-600">About</li>
                <li className="px-4 cursor-pointer hover:text-pink-600">Experience</li>
                <li className="px-4 cursor-pointer hover:text-pink-600">Work</li>
                <li className="px-4 cursor-pointer hover:text-pink-600">Contact</li>
            </ul>
            {/* hamburger */}
            <div onClick={toggleState} className="sm:hidden z-10">
                {isNavbarOpen ? (
                    <XMarkIcon className="h-6 w-6 text-gray-200" />
                ) : (
                    <Bars3Icon className="h-6 w-6 text-gray-200" />
                )}
            </div>
            {/* Mobile menu */}
            <ul
                className={
                    !isNavbarOpen
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                <li className="py-6 text-4xl cursor-pointer">Home</li>
                <li className="py-6 text-4xl cursor-pointer">About</li>
                <li className="py-6 text-4xl cursor-pointer">Experience</li>
                <li className="py-6 text-4xl cursor-pointer">Work</li>
                <li className="py-6 text-4xl cursor-pointer">Contact</li>
            </ul>
            {/* Social Icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-40 h-16 p-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 border border-gray-700 rounded-tr-lg hover:rounded-lg">
                        <a
                            className="flex justify-between items-center text-gray-300 w-full"
                            href="https://www.linkedin.com/in/christopher-s-lewis/"
                            target="_blank"
                        >
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-40 h-16 p-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900 border-gray-700 border hover:rounded-lg">
                        <a
                            className="flex justify-between items-center text-gray-300 w-full"
                            href="https://github.com/ChristopherStephenLewis"
                            target="_blank"
                        >
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-40 h-16 p-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-800 border border-gray-700 rounded-br-lg hover:rounded-lg">
                        <a
                            className="flex justify-between items-center text-gray-300 w-full"
                            href="/"
                            target="_blank"
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
