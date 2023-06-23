
import { createClient } from '@supabase/supabase-js'
import { KEYS } from './KEYS';

const supabaseUrl = KEYS.SUPABASE_URL;
const supabaseKey = KEYS.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
