-- SQL para criar a tabela de estado do bolão no Supabase
-- Execute este script no editor SQL do seu projeto Supabase.

create table if not exists bolao_state (
  user_id uuid primary key,
  payload jsonb not null,
  updated_at timestamptz default now()
);

-- Política de segurança recomendada para proteger os dados de cada usuário.
-- Ative Row Level Security (RLS) na tabela e adicione estas políticas:

-- 1) Permitir leitura apenas do próprio usuário
create policy "Usuário pode ler seu estado" on bolao_state
  for select
  using (auth.uid() = user_id);

-- 2) Permitir inserção apenas pelo próprio usuário
create policy "Usuário pode inserir seu estado" on bolao_state
  for insert
  with check (auth.uid() = user_id);

-- 3) Permitir atualização apenas pelo próprio usuário
create policy "Usuário pode atualizar seu estado" on bolao_state
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- 4) Permitir exclusão apenas pelo próprio usuário (opcional)
create policy "Usuário pode apagar seu estado" on bolao_state
  for delete
  using (auth.uid() = user_id);
