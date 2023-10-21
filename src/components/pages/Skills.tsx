import Github from '../../assets/github.png';
import Java from '../../assets/java.png';
import Javascript from '../../assets/javascript.png';
import Mongo from '../../assets/mongo.png';
import Node from '../../assets/node.png';
import Postgres from '../../assets/postgres2.png';
import Python from '../../assets/python.png';
import React from '../../assets/react.png';

const skillsData = [
    { logo: Java, alt: 'Java Logo', name: 'Java' },
    { logo: Javascript, alt: 'JavaScript Logo', name: 'JavaScript' },
    { logo: Python, alt: 'Python Logo', name: 'Python' },
    { logo: React, alt: 'React Logo', name: 'React' },
    { logo: Node, alt: 'Node.js Logo', name: 'Node.js' },
    { logo: Postgres, alt: 'PostgreSQL Logo', name: 'PostgreSQL' },
    { logo: Mongo, alt: 'MongoDB Logo', name: 'MongoDB' },
    { logo: Github, alt: 'GitHub Logo', name: 'GitHub' },
];

const Skills = () => {
    return (
        <div className="bg-[#0a192f] text-gray-300 w-full h-auto sm:h-screen" id="skills">
            <div className="flex flex-col justify-center w-full h-full max-w-4xl p-4 mx-auto">
                <div>
                    <p className="inline text-4xl font-bold border-b-4 border-pink-600">Skills</p>
                    <p className="py-4 text-xl">
                        Some <span className="text-[#00a0ea]">technologies</span> I've been recently
                        working with:
                    </p>
                </div>
                {/* Mapping the skillsData array into a grid */}
                <div className="grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4">
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            className="duration-500 shadow-md shadow-gray-950 hover:scale-110"
                        >
                            <img className="w-20 mx-auto mt-2" src={skill.logo} alt={skill.alt} />
                            <p className="my-4">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
