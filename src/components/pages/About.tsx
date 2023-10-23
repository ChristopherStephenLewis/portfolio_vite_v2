const About = () => {
    return (
        <div className="bg-[#0a192f] w-full h-screen text-gray-300" id="about">
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
                        <p>
                            Hi. I'm Christopher,
                            <span className="text-[#00a0ea]"> nice to meet you.</span> Please take a
                            look around.
                        </p>
                    </div>
                    <div>
                        <p>
                            My programming journey started back in 2017 while working in an office
                            environment. I knew there had to be a faster way to automate my work - I
                            discovered VBA programming for Excel - and from there it's been a
                            journey towards technology and software.
                        </p>
                    </div>
                    <div></div>
                    <div>
                        <p>
                            Since then I've worked at companies such as{' '}
                            <span className="text-[#00a0ea]">BlackBerry</span> and{' '}
                            <span className="text-[#00a0ea]">TD Bank</span>, and now I'm looking
                            forward to new career opportunities. Maybe it'll be with you?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
