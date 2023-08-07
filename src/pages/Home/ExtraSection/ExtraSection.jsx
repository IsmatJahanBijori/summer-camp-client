import React from 'react';

const ExtraSection = () => {
    return (
        <div className="hero md:border md:border-blue-300 bg-slate-200 my-20 px-auto">
            <div className="md:hero-content animate-pulse flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/dPk8q0W/extra.jpg" className="rounded-lg shadow-2xl" />
                <div className='md:bg-black md:bg-opacity-20 sm:w-96 md:w-auto rounded-lg p-10'>
                    <h1 className="text-5xl font-bold">Why Choose <br /> Us!</h1>
                    <p className="py-6">Choosing a foreign language camp for learning offers a multitude of advantages. Firstly, language camps provide an immersive environment where learners are fully surrounded by the target language. This constant exposure greatly aids in developing listening and speaking skills. Moreover, language camps often incorporate cultural activities, allowing learners to gain a deeper understanding of the customs, traditions, and history associated with the language they are studying. This cultural experience enhances language learning and provides a broader perspective.</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;
