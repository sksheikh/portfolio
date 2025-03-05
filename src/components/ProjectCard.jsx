import { ExternalLink, Github } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react';

const ProjectCard = ({
    imgSrc,
    title,
    description,
    tags,
    projectLink,
    challenges,
    classes
}) => {
    return (
        <div className={'relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ' + classes}>
            {/* <figure className='img-box aspect-square rounded-lg mb-4'>
                <img
                    src={imgSrc}
                    alt={title}
                    loading='lazy'
                    className='img-cover' />
            </figure> */}

            <div className="flex items-center justify-between gap-4">
                <div>
                    <h3 className="title-1 mb-3">
                        {title}
                    </h3>

                    <p className='text-zinc-400 mb-4'>
                        {description}
                    </p>

                    <div className="mb-4">
                        <h4 className="font-medium mb-2">Technologies:</h4>
                        <div className=" flex flex-wrap items-center gap-2">
                            {
                                tags.map((label, key) => (
                                    <span
                                        key={key}
                                        className='h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg'>
                                        {label}
                                    </span>
                                ))
                            }
                        </div>
                    </div>

                    {challenges && (
                        <div className="mb-4">
                            <h4 className="font-medium mb-2">Key Challenges:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-400">
                                {challenges.map((challenge, chalIndex) => (
                                    <li key={chalIndex}>{challenge}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="flex space-x-4 mt-6">
                        {projectLink && (
                            <a
                                href={projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-zinc-400 hover:text-zinc-300 transition-colors"
                            >
                                <Github className="mr-2" size={20} />
                                GitHub
                            </a>
                        )}
                        {projectLink && (
                            <a
                                href={projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-zinc-400 hover:text-zinc-300 transition-colors"
                            >
                                <ExternalLink className="mr-2" size={20} />
                                Live Site
                            </a>
                        )}
                    </div>

                </div>


            </div>


        </div>
    )
}

ProjectCard.PropTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    description: PropTypes.string,
    challenges: PropTypes.string,
    classes: PropTypes.string
}

export default ProjectCard
