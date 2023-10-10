import { useState } from 'react';
import Logo from '../../assets/logo1.png';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';

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
                <li className="px-4 cursor-pointer">Home</li>
                <li className="px-4 cursor-pointer">About</li>
                <li className="px-4 cursor-pointer">Experience</li>
                <li className="px-4 cursor-pointer">Work</li>
                <li className="px-4 cursor-pointer">Contact</li>
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
            <div className="hidden"></div>
        </nav>
    );
};

export default Navbar;
