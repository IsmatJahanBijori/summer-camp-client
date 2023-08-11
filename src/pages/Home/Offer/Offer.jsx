import React, { useEffect, useState } from 'react';

const Offer = ({ img, title, subtitle }) => {

    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('offerData.json').then(res => res.json()).then(data => setCard(data))
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-center font-extrabold font-serif'>WHAT WE OFFER</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-10 mb-20 '>
                {card.map(data =>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-3 transition-transform duration-600 ease-in-out cursor-pointer">
                        <img src={data.img} alt={title} className="w-full h-60 avatar" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
                            <p className="text-gray-600">{data.subtitle}</p>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default Offer;