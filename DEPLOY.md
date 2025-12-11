# 🚀 Guia de Deploy no GitHub Pages

Este guia explica como fazer o deploy deste projeto no GitHub Pages.

## 📋 Pré-requisitos

- Conta no GitHub
- Repositório criado no GitHub
- Git configurado localmente

## 🔧 Configuração Inicial

### 1. Preparar o repositório

```bash
# Se ainda não inicializou o git
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

### 2. Habilitar GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione **GitHub Actions**
5. Salve as alterações

### 3. Configurar Base Path (se necessário)

O projeto detecta automaticamente o base path baseado no nome do repositório. 

**Para repositórios user/organization** (ex: `usuario.github.io` ou repositório com nome `usuario.github.io`):
- O base path será automaticamente `/`
- Não é necessário configurar nada
- **Exemplo**: Se seu repositório é `wallacyamauri.github.io`, o base path será `/`

**Para repositórios de projeto** (ex: `usuario.github.io/repo-name`):
- O base path será automaticamente `/repo-name/`
- Não é necessário configurar nada
- **Exemplo**: Se seu repositório é `usuario/meu-site`, o base path será `/meu-site/`

**Para customizar manualmente:**
- Crie um arquivo `.env` na raiz do projeto
- Adicione: `VITE_BASE_PATH=/seu-base-path/`
- Exemplo: `VITE_BASE_PATH=/meu-site/`
- Ou defina no workflow do GitHub Actions como variável de ambiente

## 🚀 Deploy Automático

Após configurar o GitHub Pages, o deploy será automático:

1. **Push na branch main/master** → Deploy automático
2. **Workflow manual** → Vá em Actions e execute o workflow manualmente

O workflow está configurado em `.github/workflows/deploy.yml`

## 📝 Verificando o Deploy

1. Após o push, vá em **Actions** no GitHub
2. Aguarde o workflow completar (ícone verde ✓)
3. Vá em **Settings > Pages** para ver a URL do site
4. A URL será: `https://seu-usuario.github.io/nome-do-repositorio/`

## 🔍 Troubleshooting

### Site não carrega corretamente

- Verifique se o base path está correto
- Confirme que o workflow completou com sucesso
- Verifique os logs em **Actions**

### Rotas não funcionam

- O arquivo `public/404.html` está configurado para redirecionar rotas
- Certifique-se de que ele está no repositório
- Verifique se o base path está correto

### Build falha

- Verifique os logs em **Actions**
- Confirme que todas as dependências estão no `package.json`
- Teste o build localmente: `npm run build`

## 📚 Recursos Adicionais

- [Documentação do GitHub Pages](https://docs.github.com/en/pages)
- [Documentação do Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)

---

**Dúvidas?** Entre em contato ou abra uma issue no repositório.

