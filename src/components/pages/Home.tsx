import { ArrowSmallRightIcon } from '@heroicons/react/20/solid';

const Home = () => {
    return (
        <div className="bg-[#2e4d7d] w-full h-screen">
            {/* Container */}
            <div className="max-w-5xl mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-lg sm:text-xl text-pink-600">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-gray-300">David Smith</h1>
                <h2 className="text-3xl sm:text-6xl font-bold text-gray-400">
                    I'm a Full Stack Developer.
                </h2>
                <p className="text-gray-400 py-4 max-w-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eligendi cumque
                    assumenda odio mollitia architecto pariatur cum nobis id nostrum temporibus
                    error eum similique ab harum ullam rerum, perferendis officiis?
                </p>
                <div>
                    <button className="text-pink-600 border-2 border-pink-600 hover:bg-pink-600 hover:text-gray-300 px-6 py-3 my-2 inline-flex items-center rounded-lg justify-between w-40">
                        <span className="whitespace-nowrap">View Work</span> <ArrowSmallRightIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
