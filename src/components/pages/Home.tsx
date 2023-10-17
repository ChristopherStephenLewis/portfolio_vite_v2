import { ArrowSmallRightIcon } from '@heroicons/react/20/solid';

const Home = () => {
    return (
        <div className="bg-[#0a192f] w-full h-screen">
            {/* Container */}
            <div className="flex flex-col justify-center h-full max-w-4xl px-8 mx-auto">
                <p className="text-lg text-pink-600 sm:text-xl">Hi, my name is</p>
                <h1 className="text-4xl font-bold text-gray-200 sm:text-7xl">David Smith</h1>
                <h2 className="text-3xl font-bold text-gray-400 sm:text-6xl">
                    I'm a Full Stack Developer.
                </h2>
                <p className="max-w-2xl py-4 text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eligendi cumque
                    assumenda odio mollitia architecto pariatur cum nobis id nostrum temporibus
                    error eum similique ab harum ullam rerum, perferendis officiis?
                </p>
                <div>
                    <button className="inline-flex items-center justify-between w-40 px-6 py-3 my-2 text-pink-600 border-2 border-pink-600 rounded-lg hover:bg-pink-600 hover:text-gray-300 hover:border-gray-400">
                        <span className="whitespace-nowrap">View Work</span>
                        {/* Add animation keyframes to on hover rotate arrow to face down and then move up and down slowly */}
                        <span className="w-6">
                            <ArrowSmallRightIcon />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
