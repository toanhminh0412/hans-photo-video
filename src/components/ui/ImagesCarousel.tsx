"use client";
import Image from 'next/image';
import{ useState } from 'react';

export default function ImagesCarousel({ images, className } : { images: string[], className: string }) {
    const [current, setCurrent] = useState(0);

    return (
        <div className={`relative ${className}`}>
            {images.map((image, index) => (
                <Image key={index} src={image} alt={`Image ${index}`} fill className={`absolute top-0 left-0 w-full h-full object-cover ${index === current ? 'opacity-100' : 'opacity-0'}`}/>
            ))}

            {/* 2 control arrows */}
            <button onClick={() => setCurrent((current - 1 + images.length) % images.length)} className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 p-2 bg-gray-900 text-white bg-opacity-40 hover:bg-opacity-100 duration-75 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.25 18.75l-6-6 6-6" />
                </svg>
            </button>

            <button onClick={() => setCurrent((current + 1) % images.length)} className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 p-2 bg-gray-900 text-white bg-opacity-40 hover:bg-opacity-100 duration-75 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.75 5.25l6 6-6 6" />
                </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white p-2 rounded-full">
                {images.map((_, index) => (
                    <button key={index} onClick={() => setCurrent(index)} className={`w-2 h-2 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-85 duration-75 ${index === current ? 'bg-opacity-100' : ''}`}/>
                ))}
            </div>
        </div>
    )
};