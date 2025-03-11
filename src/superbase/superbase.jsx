
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://xhlxxupjsinesrueccyo.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhobHh4dXBqc2luZXNydWVjY3lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1OTQxOTUsImV4cCI6MjA1NzE3MDE5NX0.UAWajccN45dPcjP1X04NJEpLUI0IH8eiW_KXP4xnkz8"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;