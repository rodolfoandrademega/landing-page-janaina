# Janaina Andrade — Estética Avançada

Landing page estática para Janaina Andrade, com uma página adicional de procedimentos e CTAs para WhatsApp.

## Estrutura

- `index.html` — página principal
- `procedimentos.html` — catálogo de procedimentos
- `styles.css` e `script.js` — estilos e comportamentos da página principal
- `procedimentos.css` — estilos da página de procedimentos
- `assets/` — imagens utilizadas no site

## Antes de publicar

Substitua `5500000000000` pelo WhatsApp real da Janaina nos arquivos `index.html` e `procedimentos.html`. Use apenas números, incluindo o código do país: por exemplo, `5581999999999`.

## Publicar no GitHub

```bash
git add .
git commit -m "feat: landing page Janaina Andrade"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

## Publicar na Vercel

1. Acesse a Vercel e clique em **Add New > Project**.
2. Importe o repositório criado no GitHub.
3. Mantenha as configurações padrão: este é um site estático, sem comando de build.
4. Clique em **Deploy**.

A Vercel utilizará automaticamente `index.html` como página inicial. A página de procedimentos ficará disponível em `/procedimentos`.
