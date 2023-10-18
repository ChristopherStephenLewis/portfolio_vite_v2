import { useState } from 'react';

const Contact = () => {
    const [revealEmail, setRevealEmail] = useState(false);
    const toggleEmail = () => {
        setRevealEmail(!revealEmail);
    };
    return (
        <div
            className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
            id="contact"
        >
            <div>
                <p className="text-gray-300" onClick={toggleEmail}>
                    {revealEmail ? (
                        <p>Hello</p>
                    ) : (
                        <p className="cursor-pointer">Click to reveal email</p>
                    )}
                </p>
            </div>
        </div>
    );
};

export default Contact;
