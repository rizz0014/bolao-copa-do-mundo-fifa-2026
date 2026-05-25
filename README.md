# Bolão Copa do Mundo 2026

Esta aplicação funciona apenas com HTML, CSS e JavaScript puro.

## Como usar localmente
1. Abra o arquivo `index.html` em qualquer navegador moderno.
2. Cadastre os participantes.
3. Adicione palpites e preencha os resultados reais no calendário.
4. O ranking é atualizado automaticamente.

## Como hospedar gratuitamente

### GitHub Pages
1. Crie um repositório no GitHub.
2. Copie os arquivos de `bolao-web/` para o repositório.
3. Ative o GitHub Pages em `Settings > Pages` usando a branch `main` e `/(root)`.
4. Acesse a URL publicada.

### Netlify
1. Crie uma conta gratuita em https://www.netlify.com.
2. Importe o repositório ou arraste a pasta `bolao-web` para o painel.
3. O site será publicado automaticamente.

## Compartilhamento de dados
- Use o botão "Copiar dados do bolão" para compartilhar o estado atual com outro participante.
- O outro participante pode importar o JSON usando o botão "Importar bolão".

## Observações
- Os dados são salvos no `localStorage` do navegador.
- Se desejar usar em outro navegador ou dispositivo, importe os dados manualmente.
