'use client';

import { useEffect, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const projects = [
        {
            title: 'Thrifthood AI',
            description: 'AI-powered sales analytics dashboard enabling trend detection, inventory optimization, and dead stock reduction.',
            technologies: ['LangChain', 'TypeScript', 'Supabase', 'OpenAI API'],
            imageGradient: 'from-purple-500 to-pink-500',
            presentationUrl: 'https://www.canva.com/design/DAG7m0MhqO4/U7p5R2D2BD0Jswcx5Sj8Ag/view?utm_content=DAG7m0MhqO4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h47d1927a9c',
        },
        {
            title: 'CineNiche Streaming Platform',
            description: 'Machine learning–driven recommendation system designed to personalize content discovery and reduce user churn.',
            technologies: ['React', 'C#', 'ASP.NET', 'Azure', 'SQL Server'],
            imageGradient: 'from-red-500 to-pink-500',
            githubUrl: 'https://github.com/uboston/intex',
            demoUrl: 'https://byu.box.com/s/kx8bb3qnne07js9tivlltcvleipnyqcu',
        },
        {
            title: 'Turtle Shelter Web App',
            description: 'Web application with a PostgreSQL backend supporting nonprofit operations for winter coat distribution.',
            technologies: ['PostgreSQL', 'Node.js', 'AWS EC2', 'Tableau'],
            imageGradient: 'from-green-500 to-teal-500',
            demoUrl: 'https://byu.box.com/s/7tpzs2exrmipddiwe8nnupj5sknn5afq',
        },
        {
            title: 'Gronk Bot',
            description: 'AI-powered NFL analytics assistant using Snowflake Cortex and live sports data to deliver real-time insights.',
            technologies: ['Snowflake', 'Python', 'API Ingestion'],
            imageGradient: 'from-blue-600 to-cyan-500',
            linkedInUrl: 'https://www.linkedin.com/pulse/building-my-own-nfl-data-intelligence-agent-snowflake-underwood-c11bc',
        },
        {
            title: 'Align Sports Performance',
            description: 'Serverless web application for a sports performance coaching firm, built for scalability, speed, and low maintenance.',
            technologies: ['AWS Lambda', 'CloudFront', 'S3'],
            imageGradient: 'from-orange-500 to-red-500',
            websiteUrl: 'https://align-sportsperformance.com',
        },
        {
            title: 'Golden Wellness',
            description: 'Custom web application for a mental health practice, designed to support client engagement and online service delivery.',
            technologies: ['JavaScript', 'Node.js', 'SEO', 'CSS'],
            imageGradient: 'from-yellow-500 to-amber-600',
            websiteUrl: 'https://goldenwellnessco.com',
        },
    ];

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">My Projects</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-900 to-stone-900 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-stone-950 dark:text-gray-200 max-w-3xl mx-auto font-medium">
                        Here are some of my recent projects showcasing my skills in web development, AI/ML, and cloud architecture.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="glass p-12 rounded-2xl max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4 text-stone-950 dark:text-white">Interested in Working Together?</h2>
                        <p className="text-lg text-stone-900 dark:text-gray-200 mb-8">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                        <a
                            href="mailto:uboston@byu.edu"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-950 to-stone-950 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
