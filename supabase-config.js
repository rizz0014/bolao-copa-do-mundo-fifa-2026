// Pré-configuração Supabase para salvar o estado do bolão na nuvem.
// Crie um projeto gratuito em https://supabase.com e substitua as variáveis abaixo.
// Crie também uma tabela chamada "bolao_state" com estas colunas:
//   user_id uuid PRIMARY KEY
//   payload jsonb NOT NULL
//   updated_at timestamptz DEFAULT now()
//
// Depois de criar a tabela, ative Row Level Security (RLS) e use políticas como:
//   auth.uid() = user_id
// para garantir que cada usuário só acesse seu próprio registro.

const SUPABASE_URL = 'https://sjdfcdvbboikeihjbjct.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqZGZjZHZiYm9pa2VpaGpiamN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MTg1ODQsImV4cCI6MjA5NTI5NDU4NH0.p9sRj09PlzRKJP-qkcpCjDnM36SIbDfj7T-Sgctf8yY';
