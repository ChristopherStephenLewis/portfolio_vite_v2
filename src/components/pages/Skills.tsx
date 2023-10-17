import Github from '../../assets/github.png';
import Java from '../../assets/java.png';
import Javascript from '../../assets/javascript.png';
import Mongo from '../../assets/mongo.png';
import Node from '../../assets/node.png';
import Postgres from '../../assets/postgres2.png';
import Python from '../../assets/python.png';
import React from '../../assets/react.png';

const Skills = () => {
    return (
        <div className="bg-[#0a192f] text-gray-300 w-full h-auto sm:h-screen" id="skills">
            {/* Container */}
            <div className="flex flex-col justify-center w-full h-full max-w-4xl p-4 mx-auto">
                <div>
                    <p className="inline text-4xl font-bold border-b-4 border-pink-600 ">Skills</p>
                    <p className="py-4 text-xl">
                        These are the <span className="text-[#00a0ea]">technologies</span> I've
                        worked with:
                    </p>
                </div>
                <div className="grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4">
                    {/* Could use a function/loop to repeat less code */}
                    <div className="duration-500 shadow-md shadow-gray-950 hover:scale-110">
                        <img className="w-20 mx-auto mt-2" src={Java} alt="Java Logo" />
                        <p className="my-4">Java</p>
                    </div>
                    <div className="duration-500 shadow-md shadow-gray-950 hover:scale-110">
                        <img className="w-20 mx-auto mt-2" src={Javascript} alt="JavaScript Logo" />
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div className="duration-500 shadow-md shadow-gray-950 hover:scale-110">
                        <img className="w-20 mx-auto mt-2" src={Python} alt="Python Logo" />
                        <p className="my-4">Python</p>
                    </div>
                    <div className="duration-500 shadow-md shadow-gray-950 hover:scale-110">
                        <img className="w-20 mx-auto mt-2" src={React} alt="React Logo" />
                        <p className="my-4">React</p>
                    </div>
                    <div className="duration-500 shadow-md shadow-gray-950 hover:scale-110">
                        <img className="w-20 mx-auto mt-2" src={Node} alt="Node.js Logo" />
                        <p className="my-4">Node.js</p>
                    </div>
                    <div className="duration-500 shadow-md shadow-gray-950 hover:scale-110">
                        <img
                            className="w-20 h-20 mx-auto mt-2"
                            src={Postgres}
                            alt="PostgreSQL Logo"
                        />
                        <p className="my-4">PostgreSQL</p>
                    </div>
                    <div className="duration-500 shadow-md shadow-gray-950 hover:scale-110">
                        <img className="w-20 mx-auto mt-2" src={Mongo} alt="Mongo Logo" />
                        <p className="my-4">Mongo</p>
                    </div>
                    <div className="duration-500 shadow-md shadow-gray-950 hover:scale-110">
                        <img className="w-20 mx-auto mt-2" src={Github} alt="GitHub Logo" />
                        <p className="my-4">GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
