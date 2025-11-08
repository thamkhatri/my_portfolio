import React from "react";
import ProjectCard from "./ProjectCard";
import weatherApp from "../../assets/weatherApp.png";
import managementApp from "../../assets/weatherApp.png";
import adAgency from "../../assets/dictionaryApp.png";
import dictionaryApp from "../../assets/dictionaryApp.png";

const Projects = () => {
    const projectData = [
        {
            image: weatherApp,
            title: "Weather Forecast App",
            description: "A live weather forecast web app with city search and temp trends.",
            link: "#",
            borderColor: "border-green-500",
        },
        {
            image: managementApp,
            title: "Task Management System",
            description: "A React-based project management dashboard with real-time charts.",
            link: "#",
            borderColor: "border-purple-500",
        },
        {
            image: adAgency,
            title: "Marketing Agency Landing Page",
            description: "Responsive landing page design for a Facebook marketing agency.",
            link: "#",
            borderColor: "border-blue-500",
        },
        {
            image: dictionaryApp,
            title: "Dictionary Web App",
            description: "A simple dictionary app that fetches word meanings and pronunciations.",
            link: "#",
            borderColor: "border-indigo-500",
        },
    ];

    return (
        <section id="projects" className="bg-black text-white py-16 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                My Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {projectData.map((proj, index) => (
                    <ProjectCard key={index} {...proj} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
