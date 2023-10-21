import WorkImg from '../../assets/workImg.jpeg';
import RealEstate from '../../assets/realestate.jpg';
import FaceRecog from '../../assets/face-recognition-project.png';

const workData = [
    {
        img: FaceRecog,
        title: 'Face Recognition Website',
        demoLink: 'https://christopherstephenlewis.github.io/facerecognitionwebsite/',
        codeLink: 'https://github.com/ChristopherStephenLewis/facerecognitionwebsite',
    },
    { img: RealEstate, title: 'React JS Application', demoLink: '/', codeLink: '/' },
    { img: WorkImg, title: 'React JS Application', demoLink: '/', codeLink: '/' },
];

const Work = () => {
    return (
        <div className="bg-[#0a192f] w-full md:h-screen text-gray-300 scroll-mt-12" id="work">
            <div className="flex flex-col justify-center w-full h-full max-w-4xl p-4 mx-auto">
                <div className="pb-8">
                    <p className="inline text-4xl font-bold border-b-4 border-pink-600">Work</p>
                    <p className="py-4 text-xl">
                        Check out some of my <span className="text-[#00a0ea]">recent work</span>:
                    </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {workData.map((work, index) => (
                        <article
                            key={index}
                            style={{ backgroundImage: `url(${work.img})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                        >
                            <div className="flex flex-col opacity-0 group-hover:opacity-90 ">
                                <p className="text-2xl font-bold tracking-wider text-center text-white">
                                    {work.title}
                                </p>
                                <div className="pt-8 text-center">
                                    <a href={work.demoLink} className="m-2" target="_blank">
                                        <button className="px-4 py-3 text-lg font-bold text-center text-gray-700 duration-200 bg-white rounded-lg hover:scale-110">
                                            Demo
                                        </button>
                                    </a>
                                    <a href={work.codeLink} className="m-2" target="_blank">
                                        <button className="px-4 py-3 text-lg font-bold text-center text-gray-700 duration-200 bg-white rounded-lg hover:scale-110">
                                            Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
