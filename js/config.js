// Supabase Configuration

const SUPABASE_URL = "https://ykcbdmdqzeonodemcavc.supabase.co";

const SUPABASE_ANON_KEY =
"sb_publishable_yhzQvFqLaMw861azeWeBSQ_iDUy70Jg";

const supabaseClient = supabase.createClient(
    
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
