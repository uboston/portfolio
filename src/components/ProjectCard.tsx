interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    imageGradient: string;
    demoUrl?: string;
    githubUrl?: string;
    websiteUrl?: string;
    presentationUrl?: string;
    linkedInUrl?: string;
}

export default function ProjectCard({
    title,
    description,
    technologies,
    imageGradient,
    demoUrl,
    githubUrl,
    websiteUrl,
    presentationUrl,
    linkedInUrl,
}: ProjectCardProps) {
    return (
        <div className="group glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
            {/* Project Image Placeholder */}
            <div className={`h-48 bg-gradient-to-br ${imageGradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>
                <div className="relative z-10 text-white text-center p-4">
                    <h3 className="text-2xl font-bold mb-2">{title}</h3>
                </div>
                {/* Animated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Project Details */}
            <div className="p-6 space-y-4">
                <p className="text-stone-950 dark:text-gray-100 leading-relaxed font-medium">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-sm font-bold bg-amber-100 dark:bg-amber-900/60 text-amber-950 dark:text-amber-200 border border-amber-300 dark:border-amber-700/50 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-4">
                    {demoUrl && (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[120px] py-2 px-4 bg-gradient-to-r from-amber-950 to-stone-950 text-white text-center font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            Demo
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[120px] py-2 px-4 border-2 border-stone-950 dark:border-amber-400 text-stone-950 dark:text-amber-300 text-center font-bold rounded-lg hover:bg-stone-950 hover:text-white dark:hover:bg-amber-400 dark:hover:text-gray-900 transition-all duration-300 hover:scale-105"
                        >
                            GitHub
                        </a>
                    )}
                    {websiteUrl && (
                        <a
                            href={websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[120px] py-2 px-4 bg-gradient-to-r from-green-600 to-teal-600 text-white text-center font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            Website
                        </a>
                    )}
                    {presentationUrl && (
                        <a
                            href={presentationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[120px] py-2 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white text-center font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            Presentation
                        </a>
                    )}
                    {linkedInUrl && (
                        <a
                            href={linkedInUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[120px] py-2 px-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            Article
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
