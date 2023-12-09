import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../../assets/logo-v3.svg";
import Resume from "../../assets/files/Christopher_Lewis_Resume.pdf";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleState = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="fixed w-full h-16 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10">
      <div>
        <a href="/">
          <img src={Logo} alt="Logo Image" className="w-16" />
        </a>
      </div>
      {/* menu */}
      <ul className="hidden sm:flex">
        <li className="px-4">
          <a href="#home" className="hover:text-pink-600">
            Home
          </a>
        </li>
        <li className="px-4">
          <a href="#about" className="hover:text-pink-600">
            About
          </a>
        </li>
        <li className="px-4">
          <a href="#skills" className="hover:text-pink-600">
            Skills
          </a>
        </li>
        <li className="px-4">
          <a href="#work" className="hover:text-pink-600">
            Work
          </a>
        </li>
        <li className="px-4">
          <a href="#contact" className="hover:text-pink-600">
            Contact
          </a>
        </li>
      </ul>
      {/* hamburger */}
      <div onClick={toggleState} className="z-10 sm:hidden">
        {isNavbarOpen ? (
          <XMarkIcon className="w-6 h-6 text-gray-200" />
        ) : (
          <Bars3Icon className="w-6 h-6 text-gray-200" />
        )}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !isNavbarOpen
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li onClick={toggleState} className="py-6 text-4xl cursor-pointer">
          <a href="#home">Home</a>
        </li>
        <li onClick={toggleState} className="py-6 text-4xl cursor-pointer">
          <a href="#about">About</a>
        </li>
        <li onClick={toggleState} className="py-6 text-4xl cursor-pointer">
          <a href="#skills">Skills</a>
        </li>
        <li onClick={toggleState} className="py-6 text-4xl cursor-pointer">
          <a href="#work">Work</a>
        </li>
        <li onClick={toggleState} className="py-6 text-4xl cursor-pointer">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-40 h-16 p-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 border border-gray-700 rounded-tr-lg hover:rounded-lg">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://www.linkedin.com/in/christopher-s-lewis/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-40 h-16 p-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900 border-gray-700 border hover:rounded-lg">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://github.com/ChristopherStephenLewis"
              target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-40 h-16 p-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-800 border border-gray-700 rounded-br-lg hover:rounded-lg">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href={Resume}
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
