'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import { supabase, LeaderboardEntry } from '@/lib/supabase';

export default function RiverRushPage() {
    const [gameOver, setGameOver] = useState(false);
    const [finalScore, setFinalScore] = useState(0);
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [playerName, setPlayerName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [qualifies, setQualifies] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showLeaderboard, setShowLeaderboard] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const fetchLeaderboard = useCallback(async () => {
        if (!supabase) return [];
        try {
            const { data, error } = await supabase
                .from('leaderboard')
                .select('*')
                .eq('game', 'river-rush')
                .order('score', { ascending: false })
                .limit(5);

            if (error) throw error;
            return data || [];
        } catch {
            console.error('Failed to fetch leaderboard');
            return [];
        }
    }, []);

    const loadLeaderboard = useCallback(async () => {
        setLoading(true);
        const data = await fetchLeaderboard();
        setLeaderboard(data);
        setLoading(false);
    }, [fetchLeaderboard]);

    useEffect(() => {
        loadLeaderboard();
    }, [loadLeaderboard]);

    useEffect(() => {
        const handleMessage = async (event: MessageEvent) => {
            if (event.data?.type === 'gameOver') {
                const score = event.data.score;
                setFinalScore(score);
                setGameOver(true);
                setSubmitted(false);
                setPlayerName('');

                // Fetch latest leaderboard and check if score qualifies
                const currentLeaderboard = await fetchLeaderboard();
                setLeaderboard(currentLeaderboard);

                const doesQualify =
                    currentLeaderboard.length < 5 ||
                    score > (currentLeaderboard[currentLeaderboard.length - 1]?.score || 0);

                setQualifies(doesQualify);
                setShowLeaderboard(true);
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [fetchLeaderboard]);

    const handleSubmitScore = async () => {
        if (!playerName.trim() || isSubmitting || !supabase) return;

        setIsSubmitting(true);
        try {
            const { error } = await supabase
                .from('leaderboard')
                .insert({
                    game: 'river-rush',
                    player_name: playerName.trim().substring(0, 20),
                    score: finalScore,
                });

            if (error) throw error;

            // If there are now more than 5 entries, delete the lowest scores
            const { data: allScores } = await supabase
                .from('leaderboard')
                .select('id, score')
                .eq('game', 'river-rush')
                .order('score', { ascending: false });

            if (allScores && allScores.length > 5) {
                const idsToDelete = allScores.slice(5).map((e) => e.id);
                await supabase
                    .from('leaderboard')
                    .delete()
                    .in('id', idsToDelete);
            }

            setSubmitted(true);
            await loadLeaderboard();
        } catch {
            console.error('Failed to submit score');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handlePlayAgain = () => {
        setGameOver(false);
        setShowLeaderboard(false);
        setFinalScore(0);
        setSubmitted(false);
        setQualifies(false);
        setPlayerName('');

        // Reload the iframe to reset the game
        if (iframeRef.current) {
            iframeRef.current.src = iframeRef.current.src;
        }
    };

    return (
        <div className="min-h-screen pt-20 pb-8 bg-gray-50 dark:bg-gray-950">
            {/* Top Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
                <div className="flex items-center justify-between">
                    <Link
                        href="/games"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors font-medium"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Games
                    </Link>
                    <button
                        onClick={() => { setShowLeaderboard(true); loadLeaderboard(); }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full glass text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors font-medium text-sm"
                    >
                        🏆 Leaderboard
                    </button>
                </div>
            </div>

            {/* Game Container */}
            <div className="flex justify-center px-4">
                <div className="relative w-full max-w-[480px] aspect-[480/800] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800">
                    <iframe
                        ref={iframeRef}
                        src="/riverrush.html"
                        className="w-full h-full border-0"
                        title="River Rush Game"
                        allow="autoplay"
                    />
                </div>
            </div>

            {/* Leaderboard Overlay */}
            {showLeaderboard && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
                    <div
                        className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
                        style={{ animation: 'fadeIn 0.3s ease-out' }}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 text-white text-center relative overflow-hidden">
                            <div className="absolute top-2 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                            <div className="absolute bottom-2 left-6 w-10 h-10 bg-white/10 rounded-full"></div>
                            <button
                                onClick={() => setShowLeaderboard(false)}
                                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                            >
                                ✕
                            </button>

                            {gameOver ? (
                                <>
                                    <span className="text-4xl mb-2 block">🛶</span>
                                    <h2 className="text-2xl font-bold">Capsized!</h2>
                                    <p className="text-4xl font-bold mt-2">{finalScore} m</p>
                                </>
                            ) : (
                                <>
                                    <span className="text-4xl mb-2 block">🏆</span>
                                    <h2 className="text-2xl font-bold">Leaderboard</h2>
                                    <p className="text-sm opacity-80 mt-1">River Rush — Top 5</p>
                                </>
                            )}
                        </div>

                        {/* Leaderboard Content */}
                        <div className="p-6">
                            {/* Score entry form */}
                            {gameOver && qualifies && !submitted && (
                                <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-800">
                                    <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300 mb-3 flex items-center gap-2">
                                        🎉 Top 5 score! Enter your name:
                                    </p>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={playerName}
                                            onChange={(e) => setPlayerName(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleSubmitScore()}
                                            placeholder="Your name"
                                            maxLength={20}
                                            autoFocus
                                            className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                        />
                                        <button
                                            onClick={handleSubmitScore}
                                            disabled={!playerName.trim() || isSubmitting}
                                            className="px-5 py-2.5 bg-gradient-to-r from-amber-700 to-stone-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm whitespace-nowrap"
                                        >
                                            {isSubmitting ? '...' : 'Submit'}
                                        </button>
                                    </div>
                                </div>
                            )}

                            {gameOver && !qualifies && (
                                <div className="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 text-center">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Score didn&apos;t make the top 5. Keep trying! 💪
                                    </p>
                                </div>
                            )}

                            {submitted && (
                                <div className="mb-6 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-center">
                                    <p className="text-sm font-semibold text-green-700 dark:text-green-300">
                                        ✅ Score saved to the leaderboard!
                                    </p>
                                </div>
                            )}

                            {/* Leaderboard Table */}
                            {loading ? (
                                <div className="text-center py-8">
                                    <div className="w-8 h-8 border-2 border-amber-700 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                                    <p className="text-sm text-gray-500">Loading leaderboard...</p>
                                </div>
                            ) : leaderboard.length === 0 ? (
                                <div className="text-center py-8">
                                    <span className="text-4xl mb-3 block">🏔️</span>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">No scores yet. Be the first!</p>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    {leaderboard.map((entry, index) => {
                                        const medals = ['🥇', '🥈', '🥉'];
                                        const isHighlighted = submitted && entry.player_name === playerName.trim() && entry.score === finalScore;

                                        return (
                                            <div
                                                key={entry.id}
                                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                                                    isHighlighted
                                                        ? 'bg-amber-50 dark:bg-amber-900/30 ring-2 ring-amber-400'
                                                        : 'bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800'
                                                }`}
                                            >
                                                <span className="text-2xl w-8 text-center">
                                                    {medals[index] || `#${index + 1}`}
                                                </span>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-semibold text-gray-900 dark:text-white truncate">
                                                        {entry.player_name}
                                                    </p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                                        {new Date(entry.created_at).toLocaleDateString()}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold text-lg text-amber-700 dark:text-amber-400">
                                                        {entry.score}
                                                    </p>
                                                    <p className="text-xs text-gray-500">meters</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Action Buttons */}
                            {gameOver && (
                                <div className="mt-6 flex gap-3">
                                    <button
                                        onClick={handlePlayAgain}
                                        className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                                    >
                                        🔄 Play Again
                                    </button>
                                    <Link
                                        href="/games"
                                        className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-center"
                                    >
                                        Back
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
