'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface GameInfo {
    title: string;
    slug: string;
    description: string;
    gradient: string;
    icon: string;
    tags: string[];
}

export default function GamesPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const games: GameInfo[] = [
        {
            title: 'River Rush',
            slug: 'river-rush',
            description: 'Navigate your kayak through treacherous rapids! Dodge rocks, logs, and whirlpools while collecting coins and hearts. How far can you go?',
            gradient: 'from-cyan-500 to-blue-600',
            icon: '🛶',
            tags: ['Arcade', 'Endless Runner', 'Action'],
        },
    ];

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">Games</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-950 to-stone-900 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-stone-900 dark:text-gray-300 max-w-3xl mx-auto font-medium">
                        Take a break and play some mini games! Compete for a spot on the leaderboard.
                    </p>
                </div>

                {/* Games Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {games.map((game, index) => (
                        <Link
                            key={game.slug}
                            href={`/games/${game.slug}`}
                            className={`group block transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="relative rounded-2xl overflow-hidden glass hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                                {/* Gradient Header */}
                                <div className={`h-48 bg-gradient-to-br ${game.gradient} flex items-center justify-center relative overflow-hidden`}>
                                    {/* Animated bg circles */}
                                    <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                                    <div className="absolute bottom-4 left-4 w-14 h-14 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700 delay-100"></div>
                                    <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-white/5 rounded-full group-hover:scale-[3] transition-transform duration-700 delay-200"></div>

                                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg relative z-10">
                                        {game.icon}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-stone-950 dark:text-white mb-2 group-hover:text-amber-950 dark:group-hover:text-amber-400 transition-colors">
                                        {game.title}
                                    </h3>
                                    <p className="text-stone-800 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                        {game.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {game.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 text-xs font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-950 dark:text-amber-300 border border-amber-300 dark:border-transparent rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Play Button */}
                                    <div className="flex items-center text-amber-950 dark:text-amber-400 font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                                        <span>Play Now</span>
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Coming Soon Card */}
                <div className={`mt-12 max-w-5xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="glass rounded-2xl p-8 text-center border-2 border-dashed border-gray-300 dark:border-gray-700">
                        <span className="text-4xl mb-3 block">🎮</span>
                        <h3 className="text-xl font-bold text-stone-700 dark:text-gray-400 mb-2">More Games Coming Soon</h3>
                        <p className="text-stone-600 dark:text-gray-500">Stay tuned for more browser-based mini games!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
