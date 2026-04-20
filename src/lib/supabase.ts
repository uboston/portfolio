import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create client only if credentials are configured
let supabase: SupabaseClient | null = null;

try {
  if (supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('http')) {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
} catch {
  console.warn('Supabase client could not be initialized. Leaderboard features will be disabled.');
}

export { supabase };

export interface LeaderboardEntry {
  id: string;
  game: string;
  player_name: string;
  score: number;
  created_at: string;
}
