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
        <div className="bg-[#0a192f] text-gray-300 w-full h-screen">
            {/* Container */}
            <div className="max-w-4xl mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">Skills</p>
                    <p className="py-4">These are the technologies I've worked with:</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    {/* Could use a function/loop to repeat less code */}
                    <div className="shadow-md shadow-gray-950 hover:scale-110 duration-500">
                        <img className="w-20 mx-auto mt-2" src={Java} alt="Java Logo" />
                        <p className="my-4">Java</p>
                    </div>
                    <div className="shadow-md shadow-gray-950 hover:scale-110 duration-500">
                        <img className="w-20 mx-auto mt-2" src={Javascript} alt="JavaScript Logo" />
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-gray-950 hover:scale-110 duration-500">
                        <img className="w-20 mx-auto mt-2" src={Python} alt="Python Logo" />
                        <p className="my-4">Python</p>
                    </div>
                    <div className="shadow-md shadow-gray-950 hover:scale-110 duration-500">
                        <img className="w-20 mx-auto mt-2" src={React} alt="React Logo" />
                        <p className="my-4">React</p>
                    </div>
                    <div className="shadow-md shadow-gray-950 hover:scale-110 duration-500">
                        <img className="w-20 mx-auto mt-2" src={Node} alt="Node.js Logo" />
                        <p className="my-4">Node.js</p>
                    </div>
                    <div className="shadow-md shadow-gray-950 hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto mt-2 h-20"
                            src={Postgres}
                            alt="PostgreSQL Logo"
                        />
                        <p className="my-4">PostgreSQL</p>
                    </div>
                    <div className="shadow-md shadow-gray-950 hover:scale-110 duration-500">
                        <img className="w-20 mx-auto mt-2" src={Mongo} alt="Mongo Logo" />
                        <p className="my-4">Mongo</p>
                    </div>
                    <div className="shadow-md shadow-gray-950 hover:scale-110 duration-500">
                        <img className="w-20 mx-auto mt-2" src={Github} alt="GitHub Logo" />
                        <p className="my-4">GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
