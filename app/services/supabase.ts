import { createClient } from "@supabase/supabase-js";

const supabaseURL: string = process.env.SUPABASE_URL!;
const supabaseKey: string = process.env.SUPABASE_KEY!;

if (!supabaseKey || !supabaseURL) {
  throw new Error("Missing supabase environment variables");
}

export const supabase = createClient(supabaseURL, supabaseKey);
