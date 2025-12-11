# 🔧 Troubleshooting - GitHub Pages

## Problema: Erro 404 ao acessar `/src/main.jsx`

Se você está vendo o erro:
```
Request URL: https://wallacyamauri.github.io/src/main.jsx
Status Code: 404 Not Found
```

Isso significa que o `index.html` não foi processado corretamente pelo Vite durante o build.

## ✅ Soluções

### 1. Verificar se o build está sendo executado

1. Vá em **Actions** no GitHub
2. Clique no último workflow executado
3. Verifique se o step "Build" completou com sucesso
4. Veja os logs para verificar se há erros

### 2. Verificar o conteúdo do index.html gerado

No workflow, há um step de debug que mostra o conteúdo do `index.html` gerado. Verifique se:

- O caminho `/src/main.jsx` foi transformado em algo como `./assets/index-xxxxx.js` ou similar
- Se ainda mostra `/src/main.jsx`, o build não processou corretamente

### 3. Verificar o base path

O base path é detectado automaticamente:
- **User pages** (ex: `wallacyamauri.github.io`): base path = `/`
- **Project pages** (ex: `usuario/repo`): base path = `/repo/`

Para verificar qual base path está sendo usado, veja os logs do build no GitHub Actions.

### 4. Forçar base path manualmente

Se a detecção automática não funcionar, você pode forçar o base path:

1. Edite `.github/workflows/deploy.yml`
2. No step "Build", adicione:
   ```yaml
   env:
     GITHUB_REPOSITORY: ${{ github.repository }}
     VITE_BASE_PATH: '/'  # ou '/nome-do-repo/' para project pages
   ```

### 5. Verificar se os arquivos estão na pasta dist/

O workflow deve fazer upload apenas da pasta `dist/`. Verifique nos logs se:
- A pasta `dist/` foi criada
- O `index.html` está dentro de `dist/`
- Os arquivos JavaScript estão em `dist/assets/`

### 6. Limpar cache e fazer novo build

1. Vá em **Actions** > **Workflow runs**
2. Clique nos três pontos ao lado do workflow
3. Selecione **Delete workflow run** para limpar o cache
4. Faça um novo push ou execute o workflow manualmente

### 7. Verificar configuração do GitHub Pages

1. Vá em **Settings** > **Pages**
2. Verifique se **Source** está configurado como **GitHub Actions**
3. Se estiver como **Deploy from a branch**, mude para **GitHub Actions**

## 📋 Checklist

- [ ] Build completou com sucesso no GitHub Actions
- [ ] O `index.html` em `dist/` foi processado (não contém `/src/main.jsx`)
- [ ] Base path está correto (ver logs do build)
- [ ] GitHub Pages está configurado para usar **GitHub Actions**
- [ ] Pasta `dist/` contém todos os arquivos necessários

## 🆘 Ainda com problemas?

Se nada funcionar:

1. Verifique os logs completos do workflow no GitHub Actions
2. Tente fazer build localmente: `npm run build`
3. Verifique se a pasta `dist/` contém os arquivos corretos
4. Abra uma issue no repositório com os logs do erro

