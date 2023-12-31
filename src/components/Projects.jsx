import React from "react";
import aws from "../assets/portfolio/aws.jpg";
import notes from "../assets/portfolio/notes.jpg";
import crime from "../assets/portfolio/crime.jpg";
import fraud from "../assets/portfolio/fraud.jpg";
import stock from "../assets/portfolio/stock.jpeg";
import hospital from "../assets/portfolio/hospital.jpg";

const Projects = () => {
    const portfolios = [
        {
            id: 1,
            src: aws,
            text: "StreamFlow: Auto-Deploy & Integration",
            href: "https://github.com/prabhu-ks/webapp"
        },
        {
            id: 2,
            src: fraud,
            text: "Fraudulent Transaction Classification",
            href: "https://github.com/prabhu-ks/FraudTransactionDetection"
            
        },
        {
            id: 3,
            src: crime,
            text: "Crime Rate Prediction",
            href: "https://github.com/prabhu-ks/CrimeAnalyticsNYPD"
        },
        {
            id: 4,
            src: stock,
            text: "Stock Analyzer",
            href: "https://github.com/Kprabhu2807/Stock-Price-Prediction"
        },
        {
            id: 5,
            src: notes,
            text: "MyNotes",
            href: "https://github.com/prabhu-ks/MyNotes"
        },
        {
            id: 6,
            src: hospital,
            text: "Hospital Management System",
            href: "https://github.com/prabhu-ks/HospitalManagementSystem"
        },
    ];

    return (
        <div
            name="projects"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Projects
                    </p>
                    <p className="py-6">Check out some of my Projects right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, text, href }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <a href={href} className=" py-3 m-0 duration-200 hover:scale-105 whitespace-nowrap text-sm">
                                <button >
                                    {text}
                                </button>
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;