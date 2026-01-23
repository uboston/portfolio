'use client';

import { useEffect, useState } from 'react';

export default function ResumePage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleDownloadResume = () => {
        // Create a link element and trigger download
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Boston_Underwood_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">Resume</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
                    <button
                        onClick={handleDownloadResume}
                        className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        Download PDF
                    </button>
                </div>

                {/* Resume Content */}
                <div className="space-y-12">
                    {/* Contact Info */}
                    <section className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Boston K. Underwood</h2>
                        <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-400">
                            <a href="mailto:uboston@byu.edu" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                uboston@byu.edu
                            </a>
                            <span>•</span>
                            <a href="tel:5027779207" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                (502) 777-9207
                            </a>
                            <span>•</span>
                            <a
                                href="https://www.linkedin.com/in/boston-underwood/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </section>

                    {/* Education */}
                    <section className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                            <svg className="w-8 h-8 mr-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                            Education
                        </h2>
                        <div className="glass p-6 rounded-xl space-y-4">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Master of Information System Management</h3>
                                <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">Brigham Young University - Marriott School of Business | Expected Apr 2027</p>
                                <p className="text-gray-700 dark:text-gray-300">Provo, UT</p>
                            </div>
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Bachelor of Science in Information Systems</h3>
                                <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">Brigham Young University - Marriott School of Business | Expected Apr 2027</p>
                                <p className="text-gray-700 dark:text-gray-300">STEM Certified Program • Provo, UT</p>
                                <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        GPA: 4.00 | Major GPA: 4.00
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Marriott School of Business Dean's List: Winter 2023 - Present
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Member of: Association of Information Systems, Creator's Club, Product Management Association
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Experience */}
                    <section className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                            <svg className="w-8 h-8 mr-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                            </svg>
                            Professional Experience
                        </h2>
                        <div className="space-y-6">
                            {/* Job 1 */}
                            <div className="glass p-6 rounded-xl">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">End User Engineer</h3>
                                <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-4">BYU Office of Information Technology | Jan 2024 - Present</p>
                                <p className="text-gray-600 dark:text-gray-400 mb-3 italic">Provo, UT</p>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Spearheaded design and implementation of VoIP system architecture and 75+ call flows, enhancing communication efficiency at Ensign College and BYU-Hawaii
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Directed enterprise software migration from Microsoft Configuration Manager (SCCM) to Microsoft Intune across BYU and BYU-Hawaii
                                    </li>
                                </ul>
                            </div>

                            {/* Job 2 */}
                            <div className="glass p-6 rounded-xl">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Digital Solutions Developer</h3>
                                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4">Connor Group | Jun 2025 - Aug 2025</p>
                                <p className="text-gray-600 dark:text-gray-400 mb-3 italic">Lehi, UT</p>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Created automations utilizing NetSuite workflows and JavaScript, streamlining client business processes and reducing manual effort
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Executed data migration for Zone Billing (ZAB), transforming and validating legacy datasets to ensure 100% accuracy
                                    </li>
                                </ul>
                            </div>

                            {/* Job 3 */}
                            <div className="glass p-6 rounded-xl">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Freelance Web Developer</h3>
                                <p className="text-pink-600 dark:text-pink-400 font-semibold mb-4">BK Underwood Marketing LLC | Jan 2024 - Present</p>
                                <p className="text-gray-600 dark:text-gray-400 mb-3 italic">Provo, UT</p>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-pink-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Designed and deployed custom Node.js websites for small businesses using AWS infrastructure (including serverless architecture), reducing host costs by 80% and ensuring 99% reliability
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-pink-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Implemented targeted SEO strategies improving search rankings, click-through rates, and boosting client inquiries by 30%
                                    </li>
                                </ul>
                            </div>

                            {/* Job 4 */}
                            <div className="glass p-6 rounded-xl">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Volunteer Representative</h3>
                                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">The Church of Jesus Christ of Latter-day Saints | Oct 2020 - Nov 2022</p>
                                <p className="text-gray-600 dark:text-gray-400 mb-3 italic">Las Vegas, NV</p>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Coordinated monthly team trainings of up to 18 men and women, leading individuals in achieving goals for personal betterment and numeric achievement
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Served local Hispanic communities 8-10 hours a week through food banks, moving assistance, and food drives
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Projects & Competitions */}
                    <section className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                            <svg className="w-8 h-8 mr-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Projects & Competitions
                        </h2>
                        <div className="space-y-6">
                            <div className="glass p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI Solutions Consultant - Thrifthood</h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Consulted store owner to design an AI-powered sales dashboard enabling trend spotting and reducing dead stock in a vintage retail operation
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Utilized LangChain to build AI agents that deliver on-demand sales insights and identify vintage clothing deals
                                    </li>
                                </ul>
                            </div>

                            <div className="glass p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2nd Place - Winter 2025 INTEX</h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Developed a ML recommender pipeline designed to surface personalized content and reduce churn rate by 20%
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Deployed full-stack React + ASP.NET to Azure with RBAC, CRUD functions and user-centered UX/UI
                                    </li>
                                </ul>
                            </div>

                            <div className="glass p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2nd Place - BYU Silver Fund, Battle of the Quants 2024</h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Proposed trading strategy using OLS-based binning of stock market data grounded in the Fama-French 5-Factor Model
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Predicted a return of 464% with an average Sharpe Ratio of 0.57 over the course of the trading period
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Skills */}
                    <section className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                            <svg className="w-8 h-8 mr-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            Technical Skills
                        </h2>
                        <div className="glass p-6 rounded-xl">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Programming Languages</h3>
                                    <p className="text-gray-700 dark:text-gray-300">React, SQL, JavaScript, Python (pandas/sklearn/pytorch), C#, Node.js</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Systems & Applications</h3>
                                    <p className="text-gray-700 dark:text-gray-300">Power BI, Figma, .NET, Tableau, AWS, Azure, VoIP, SCCM, Docker</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Certifications</h3>
                                    <p className="text-gray-700 dark:text-gray-300">FinOps Certified Practitioner, Spanish Language Certificate - Advanced</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Leadership */}
                    <section className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                            <svg className="w-8 h-8 mr-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                            Leadership & Service
                        </h2>
                        <div className="glass p-6 rounded-xl space-y-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Senior Crew Leader</h3>
                                <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">National Advanced Youth Leadership Experience | Jun 2016 - Jul 2020</p>
                                <p className="text-gray-600 dark:text-gray-400 mb-2 italic">Beckley, WV</p>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Mentored and led over 210 scouts in national Boy Scout leadership trainings, supervising leadership curriculum through hands-on activities over 5 years
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Instructed outdoor skills to up to 68 scouts: Search and Rescue, Wilderness First-Aid, Geocaching, UTM and GPS Coordinate Systems, Cooking, and Backpacking
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-gray-700 dark:text-gray-300">
                                    <strong>Eagle Scout</strong>, Boy Scouts of America • Founded Venture Crew 28
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
