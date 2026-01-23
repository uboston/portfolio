'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const skills = [
        'Python',
        'React',
        'Node.js',
        'Docker',
        'JavaScript',
        'SQL',
        'C#',
        'AWS',
    ];

    // Headshot images for shuffling
    const headshotImages = [
        '/images/headshot/Boston_Underwood.jpeg',
        '/images/headshot/Gemini_Generated_Image_ioyvfcioyvfcioyv.png',
        '/images/headshot/IMG_2409.jpeg',
        '/images/headshot/IMG_5205_Original.JPG',
        '/images/headshot/Underwood26.jpg',
    ];
    const [currentHeadshotIndex, setCurrentHeadshotIndex] = useState(0);

    const handleHeadshotClick = () => {
        setCurrentHeadshotIndex((prev) => (prev + 1) % headshotImages.length);
    };

    // Life photos (2x4 grid = 8 photos)
    const lifePhotos = [
        { id: 1, src: '/images/about/IMG_0644.jpeg', alt: 'Life moment 1' },
        { id: 2, src: '/images/about/IMG_0752.jpeg', alt: 'Life moment 2' },
        { id: 3, src: '/images/about/IMG_1325.jpeg', alt: 'Life moment 3' },
        { id: 4, src: '/images/about/IMG_1402.jpeg', alt: 'Life moment 4' },
        { id: 5, src: '/images/about/IMG_1780.jpeg', alt: 'Life moment 5' },
        { id: 6, src: '/images/about/IMG_1835.jpeg', alt: 'Life moment 6' },
        { id: 7, src: '/images/about/IMG_5128_Original.JPG', alt: 'Life moment 7' },
        { id: 8, src: '/images/about/IMG_5358_Original.JPG', alt: 'Life moment 8' },
    ];

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">About Me</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
                </div>

                {/* Bio Section */}
                <div className={`grid md:grid-cols-2 gap-12 mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Profile Image */}
                    <div className="flex items-center justify-center">
                        <div
                            className="relative w-80 h-80 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 animate-gradient cursor-pointer hover:scale-105 transition-transform duration-300"
                            onClick={handleHeadshotClick}
                            title="Click to shuffle headshot"
                        >
                            <div className="w-full h-full rounded-2xl overflow-hidden">
                                <Image
                                    src={headshotImages[currentHeadshotIndex]}
                                    alt="Boston Underwood"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bio Text */}
                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Hello! I'm Boston</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            I grew up in Crestwood, Kentucky, where I developed a love for baseball and the outdoors.
                            Whether I'm on the diamond or hitting the slopes skiing, I'm always seeking new adventures
                            and challenges that push me to grow.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Some of my most formative experiences came from serving others. I spent two years in
                            Las Vegas, Nevada and Lima, Peru, working with diverse communities and learning to connect
                            with people from all walks of life. These experiences taught me the value of empathy,
                            hard work, and meaningful relationships.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Now at BYU, I'm channeling that same passion and dedication into technology. I love building
                            things that make a difference—combining my technical skills with my desire to serve and
                            create positive impact in the world.
                        </p>
                    </div>
                </div>

                {/* What I'm Up To - Photo Grid */}
                <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">What I'm Up To</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {
                            lifePhotos.map((photo, index) => (
                                <div
                                    key={photo.id}
                                    className="aspect-square rounded-xl overflow-hidden glass hover:scale-105 transition-all duration-300 cursor-pointer"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                        transition: `opacity 0.6s ease-out ${index * 100}ms, transform 0.6s ease-out ${index * 100}ms`
                                    }}
                                >
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Skills Section */}
                <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Skills & Technologies</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {skills.map((skill, index) => (
                            <div
                                key={skill}
                                className={`px-6 py-3 glass rounded-full font-semibold text-lg text-gray-800 dark:text-gray-200 hover:scale-110 transition-all duration-300 cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{
                                    transitionDelay: `${600 + index * 100}ms`
                                }}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience Timeline */}
                <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Experience</h2>
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-600 before:to-purple-600 md:before:ml-0 md:before:left-1/2">
                        {/* Experience Item 1 - BYU Office of IT */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 shadow-lg md:order-1 md:mx-auto z-10">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="w-[calc(50%-40px)] glass p-6 rounded-xl shadow-xl md:w-5/12">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">End User Engineer</h3>
                                <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">BYU Office of IT | Jan 2024 - Present</p>
                                <p className="text-gray-700 dark:text-gray-300">Spearheading VoIP system architecture and enterprise software migration from SCCM to Microsoft Intune across BYU campuses.</p>
                            </div>
                        </div>

                        {/* Experience Item 2 - Connor Group */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 shadow-lg md:order-1 md:mx-auto z-10">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                            </div>
                            <div className="w-[calc(50%-40px)] glass p-6 rounded-xl shadow-xl md:w-5/12">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Digital Solutions Developer</h3>
                                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">Connor Group | Jun 2025 - Aug 2025</p>
                                <p className="text-gray-700 dark:text-gray-300">Created NetSuite automations and executed data migration projects with 100% accuracy.</p>
                            </div>
                        </div>

                        {/* Experience Item 3 - Freelance */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-600 shadow-lg md:order-1 md:mx-auto z-10">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="w-[calc(50%-40px)] glass p-6 rounded-xl shadow-xl md:w-5/12">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Freelance Web Developer</h3>
                                <p className="text-pink-600 dark:text-pink-400 font-semibold mb-2">BK Underwood Marketing LLC | Jan 2024 - Present</p>
                                <p className="text-gray-700 dark:text-gray-300">Deployed custom Node.js websites on AWS, reducing costs by 80% and boosting client inquiries by 30%.</p>
                            </div>
                        </div>

                        {/* Experience Item 4 - Project InnerSpace */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-600 shadow-lg md:order-1 md:mx-auto z-10">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="w-[calc(50%-40px)] glass p-6 rounded-xl shadow-xl md:w-5/12">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Data Deliverables Manager</h3>
                                <p className="text-cyan-600 dark:text-cyan-400 font-semibold mb-2">Project InnerSpace | Sep 2023 - Dec 2023</p>
                                <p className="text-gray-700 dark:text-gray-300">Co-authored "Future of Geothermal in Utah", delivering actionable insights that informed state energy policy and positioned geothermal as a key contributor to Utah's sustainable energy future.</p>
                            </div>
                        </div>

                        {/* Experience Item 5 - Volunteer */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 shadow-lg md:order-1 md:mx-auto z-10">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                </svg>
                            </div>
                            <div className="w-[calc(50%-40px)] glass p-6 rounded-xl shadow-xl md:w-5/12">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Volunteer Representative</h3>
                                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">LDS Church | Oct 2020 - Nov 2022</p>
                                <p className="text-gray-700 dark:text-gray-300">Led team trainings and served Hispanic communities through food banks and community service in Las Vegas, NV.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
