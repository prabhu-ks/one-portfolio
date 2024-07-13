import React from "react";
import aws from "../assets/portfolio/aws.jpg";
import notes from "../assets/portfolio/notes.webp";
import crime from "../assets/portfolio/crime.jpg";
import fraud from "../assets/portfolio/fraud.jpg";
import stock from "../assets/portfolio/stock.webp";
import jenkins from "../assets/portfolio/jenkins.webp";

const Projects = () => {
    const portfolios = [
        {
            id: 1,
            src: jenkins,
            text: "CloudOps Automation Tool",
            href: "https://github.com/prabhu-ks/ami-jenkins"
        },
        {
            id: 2,
            src: aws,
            text: "CloudFusion CI/CD",
            href: "https://github.com/prabhu-ks/webapp"
        },
        {
            id: 3,
            src: fraud,
            text: "Fraudulent Transaction Classification",
            href: "https://github.com/prabhu-ks/FraudTransactionDetection"
            
        },
        {
            id: 4,
            src: crime,
            text: "Crime Rate Prediction",
            href: "https://github.com/prabhu-ks/CrimeAnalyticsNYPD"
        },
        {
            id: 5,
            src: stock,
            text: "Stock Analyzer",
            href: "https://github.com/Kprabhu2807/Stock-Price-Prediction"
        },
        {
            id: 6,
            src: notes,
            text: "MyNotes",
            href: "https://github.com/prabhu-ks/MyNotes"
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