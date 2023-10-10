import Logo from '../../assets/logo1.png';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Navbar = () => {
    return (
        <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <img src={Logo} alt="Logo Image" className="w-12" />
            </div>
            {/* menu */}
            <div>
                <ul className="flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Work</li>
                    <li className="font-raleway">Contact</li>
                </ul>
            </div>
            {/* hamburger */}
            <div className="hidden">
                <Bars3Icon className="h-6 w-6 text-gray-200" />
            </div>
            {/* Mobile menu */}
            <ul className="hidden">
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
            {/* Social Icons */}
        </nav>
    );
};

export default Navbar;
