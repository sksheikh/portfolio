import React from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

const Project = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio website built with React and Tailwind CSS, showcasing my projects and skills.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://yourportfolio.com",
      challenges: [
        "Implementing responsive design",
        "Optimizing performance",
        "Creating intuitive navigation"
      ]
    },
    {
      title: "E-Commerce Dashboard",
      description: "Full-stack e-commerce management dashboard with real-time analytics and inventory tracking.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      githubLink: "https://github.com/yourusername/ecommerce-dashboard",
      liveLink: "https://ecommerce-admin.vercel.app",
      challenges: [
        "Implementing secure authentication",
        "Creating complex data visualizations",
        "Managing state across multiple components"
      ]
    },
    {
      title: "AI Chatbot Assistant",
      description: "Conversational AI chatbot with natural language processing capabilities and context retention.",
      technologies: ["Python", "Flask", "OpenAI API", "NLTK"],
      githubLink: "https://github.com/yourusername/ai-chatbot",
      challenges: [
        "Implementing context-aware responses",
        "Managing conversation state",
        "Integrating machine learning models"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Completed Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.challenges && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Key Challenges:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm">
                      {project.challenges.map((challenge, chalIndex) => (
                        <li key={chalIndex}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex space-x-4 mt-6">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Github className="mr-2" size={20} />
                      GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink className="mr-2" size={20} />
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;