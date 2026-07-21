'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Boston Underwood";
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    // Trigger visibility for lower sections
    setTimeout(() => setIsVisible(true), 2000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  // Top 3 featured projects
  const featuredProjects = [
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
      title: 'Gronk Bot',
      description: 'AI-powered NFL analytics assistant using Snowflake Cortex and live sports data to deliver real-time insights.',
      technologies: ['Snowflake', 'Python', 'API Ingestion'],
      imageGradient: 'from-blue-600 to-cyan-500',
      linkedInUrl: 'https://www.linkedin.com/pulse/building-my-own-nfl-data-intelligence-agent-snowflake-underwood-c11bc',
    },
  ];

  // Home page photos
  const photos = [
    { id: 1, src: '/images/home/IMG_2078.jpeg', alt: 'Life Snapshot 1' },
    { id: 2, src: '/images/home/IMG_2866.jpeg', alt: 'Life Snapshot 2' },
    { id: 3, src: '/images/home/IMG_3432.jpeg', alt: 'Life Snapshot 3' },
    { id: 4, src: '/images/home/IMG_3731.jpeg', alt: 'Life Snapshot 4' },
  ];

  return (
    <>
      <AnimatedBackground />
      <div className="relative">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center space-y-8 animate-fadeIn">
              {/* Typing Effect Heading */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                <span className="gradient-text">
                  {displayText}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
                Developer • Designer • Creator
              </p>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}>
                Crafting beautiful digital experiences with modern technologies
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fadeIn" style={{ animationDelay: '1.5s', opacity: 0, animationFillMode: 'forwards' }}>
                <Link
                  href="/projects"
                  className="group relative px-8 py-4 bg-gradient-to-r from-amber-700 to-stone-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-600 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <Link
                  href="/about"
                  className="px-8 py-4 border-2 border-amber-700 dark:border-amber-400 text-amber-700 dark:text-amber-400 font-semibold rounded-full hover:bg-amber-700 hover:text-white dark:hover:bg-amber-400 dark:hover:text-gray-900 transition-all duration-300 hover:scale-105"
                >
                  About Me
                </Link>
              </div>

              {/* Scroll Indicator */}
              <div className="pt-16 animate-bounce">
                <svg
                  className="w-8 h-8 mx-auto text-amber-700 dark:text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-amber-600 to-stone-500 rounded-full opacity-20 blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-700 rounded-full opacity-20 blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-br from-stone-400 to-amber-500 rounded-full opacity-20 blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Featured Projects Section */}
        <div className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">Check out some of my recent work</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>

            <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}>
              <Link
                href="/projects"
                className="inline-block px-8 py-4 border-2 border-amber-700 dark:border-amber-400 text-amber-700 dark:text-amber-400 font-semibold rounded-full hover:bg-amber-700 hover:text-white dark:hover:bg-amber-400 dark:hover:text-gray-900 transition-all duration-300 hover:scale-105"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Photo Grid Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Life Snapshots</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">Snapshots from my journey</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`aspect-square rounded-xl overflow-hidden glass hover:scale-105 transition-all duration-300 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
