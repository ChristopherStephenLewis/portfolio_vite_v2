import WorkImg from '../../assets/workImg.jpeg';
import RealEstate from '../../assets/realestate.jpg';

const Work = () => {
    return (
        <div className="bg-[#0a192f] w-full md:h-screen text-gray-300">
            <div className="max-w-4xl mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Work</p>
                    <p className="py-4">Check out some of my recent work:</p>
                </div>
                {/* Container  */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Could use a function/loop to repeat less code */}
                    {/* Change the hover buttons for mobile layout */}
                    {/* Grid Item  */}
                    <article
                        style={{ backgroundImage: `url(${WorkImg})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-90">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/" className="m-2">
                                    <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-200">
                                        Demo
                                    </button>
                                </a>
                                <a href="/" className="m-2">
                                    <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-200">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article
                        style={{ backgroundImage: `url(${RealEstate})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-90">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/" className="m-2">
                                    <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-200">
                                        Demo
                                    </button>
                                </a>
                                <a href="/" className="m-2">
                                    <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-200">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article
                        style={{ backgroundImage: `url(${WorkImg})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-90">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/" className="m-2">
                                    <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-200">
                                        Demo
                                    </button>
                                </a>
                                <a href="/" className="m-2">
                                    <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-200">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article
                        style={{ backgroundImage: `url(${RealEstate})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-90">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/" className="m-2">
                                    <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-200">
                                        Demo
                                    </button>
                                </a>
                                <a href="/" className="m-2">
                                    <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-200">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article
                        style={{ backgroundImage: `url(${WorkImg})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-90">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/" className="m-2">
                                    <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-200">
                                        Demo
                                    </button>
                                </a>
                                <a href="/" className="m-2">
                                    <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-200">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article
                        style={{ backgroundImage: `url(${RealEstate})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-90">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/" className="m-2">
                                    <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-200">
                                        Demo
                                    </button>
                                </a>
                                <a href="/" className="m-2">
                                    <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-200">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Work;
