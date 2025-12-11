# Cassio Tráfego Pago

Site profissional para Cassio Tráfego Pago, desenvolvido com React + Vite.

## 🚀 Executando localmente

```bash
npm install
npm run dev
```

O site estará disponível em `http://localhost:5173`

## 📦 Build para produção

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`

## 🌐 Deploy no GitHub Pages

O projeto está configurado para fazer deploy automático no GitHub Pages.

### Configuração inicial:

1. **Habilite o GitHub Pages no repositório:**
   - Vá em Settings > Pages
   - Em "Source", selecione "GitHub Actions"

2. **O workflow já está configurado:**
   - O arquivo `.github/workflows/deploy.yml` fará o deploy automaticamente
   - Toda vez que você fizer push na branch `main` ou `master`, o site será atualizado

3. **URL do site:**
   - **User/Organization pages**: `https://seu-usuario.github.io/` (base path: `/`)
     - Exemplo: repositório `wallacyamauri.github.io` → URL: `https://wallacyamauri.github.io/`
   - **Project pages**: `https://seu-usuario.github.io/nome-do-repositorio/` (base path: `/nome-do-repositorio/`)
   
   O base path é detectado automaticamente:
   - Se o repositório se chama `usuario.github.io` → base path = `/`
   - Caso contrário → base path = `/nome-do-repositorio/`

### Deploy manual:

Se preferir fazer deploy manual:

```bash
npm run build
```

Depois, faça upload da pasta `dist/` para a branch `gh-pages` ou use a interface do GitHub Pages.

## 📝 Notas importantes

- O projeto usa React Router com suporte automático a base path
- O arquivo `public/404.html` está configurado para redirecionar corretamente as rotas em SPA
- O base path é detectado automaticamente, funcionando tanto localmente quanto no GitHub Pages

## 🛠️ Tecnologias

- React 18
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- Radix UI
- Base44 SDK

---

Para mais informações e suporte, entre em contato com Base44 support em app@base44.com.