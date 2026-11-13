// Configuration Supabase pour Digital DevSolutions / Stock
const SUPABASE_URL = 'https://cjikajwhhalkucsabgvs.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_r9UctPXj3BbKURJUplTTLA_-SW_29TU';

// Initialisation du client Supabase
const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);