const About = () => {
    return (
        <div className="bg-[#0a192f] w-full h-screen text-gray-300">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="grid w-full max-w-4xl grid-cols-2 gap-8">
                    <div className="pb-8 pl-4 sm:text-right">
                        <p className="inline text-4xl font-bold border-b-4 border-pink-600">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="grid w-full max-w-4xl gap-8 px-4 sm:grid-cols-2">
                    <div className="text-3xl font-bold sm:text-right sm:text-4xl">
                        <p>Hi. I'm David, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nemo
                            vitae odio nam labore ipsam sapiente itaque, molestiae tenetur veritatis
                            eius voluptate accusamus sed non? Doloribus laboriosam numquam voluptas
                            amet?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
