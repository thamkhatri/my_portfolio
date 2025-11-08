import React from "react";

const ProjectCard = ({ image, title, description, link, borderColor }) => {
    return (
        <div
            className={`rounded-2xl overflow-hidden shadow-lg border-4 ${borderColor} transition-transform hover:scale-105 hover:shadow-2xl`}
        >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4 bg-gray-900 text-white">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-300 mb-4">{description}</p>
                {link && (
                    <a
                        href={"http://localhost:5173/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline"
                    >
                        View Project →
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
