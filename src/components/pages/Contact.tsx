const Contact = () => {
    return (
        <div className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <form action="" className="flex flex-col w-full max-w-xl">
                <div className="pb-8">
                    <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
                        Contact
                    </p>
                    <p className="py-4 text-gray-300">
                        Submit the form below or send me an email: chris.stephen.lewis@gmail.com
                    </p>
                </div>
                <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" />
                <input
                    className="my-4 p-2 bg-[#ccd6f6]"
                    type="email"
                    placeholder="Email"
                    name="email"
                />
                <textarea
                    className="bg-[#ccd6f6] p-2"
                    placeholder="Message"
                    name="message"
                    rows={10}
                ></textarea>
                <button className="inline-block px-4 py-3 mx-auto my-5 text-pink-600 border-2 border-pink-600 rounded-lg hover:bg-pink-600 hover:text-gray-300 hover:border-gray-400">
                    Let's Connect
                </button>
            </form>
        </div>
    );
};

export default Contact;
