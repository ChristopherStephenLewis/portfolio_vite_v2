import { useState } from 'react';

const Contact = () => {
    const [revealEmail, setRevealEmail] = useState(false);
    const toggleEmail = () => {
        if (!revealEmail) {
            setRevealEmail(!revealEmail);
        }
    };

    const email = 'chris.stephen.lewis@gmail.com';

    return (
        <section className="w-full h-screen bg-[#0a192f]   p-4 text-gray-300" id="contact">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <p className="inline text-4xl font-bold border-b-4 border-pink-600 ">Contact</p>
                <p className="max-w-3xl mt-4 mb-6 text-gray-400">
                    Feel free to contact me with any opportunities for collaboration or to simply
                    say hi 😊
                </p>
                <div className="flex w-1/2 " onClick={toggleEmail}>
                    {revealEmail ? (
                        <p className="text-xl ">
                            Click to reveal email: &#160;{' '}
                            <span className="text-[#00a0ea]">{email}</span>
                        </p>
                    ) : (
                        <p className="text-xl cursor-pointer">Click to reveal email: &#160;</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
