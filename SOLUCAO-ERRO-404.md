# 🔧 Solução para Erro 404 em `/src/main.jsx`

## ❌ Problema

Você está vendo o erro:
```
Request URL: https://wallacyamauri.github.io/src/main.jsx
Status Code: 404 Not Found
```

Isso significa que o `index.html` **não foi processado** pelo Vite durante o build, ou o GitHub Pages está servindo o arquivo errado.

## ✅ Solução Passo a Passo

### 1. Verificar Configuração do GitHub Pages

**IMPORTANTE**: O GitHub Pages deve estar configurado para usar **GitHub Actions**, não uma branch!

1. Vá em **Settings** > **Pages** no seu repositório
2. Em **Source**, verifique se está selecionado **GitHub Actions**
3. Se estiver como **Deploy from a branch**, mude para **GitHub Actions**
4. Salve as alterações

### 2. Verificar se o Workflow Está Executando

1. Vá em **Actions** no GitHub
2. Verifique se há workflows executando ou que falharam
3. Se não houver nenhum workflow, faça um push para a branch `main` ou `master`

### 3. Verificar os Logs do Build

No workflow, procure pelo step "Build" e verifique:

- ✅ Se o build completou com sucesso
- ✅ Se a mensagem mostra "✅ index.html foi processado corretamente!"
- ❌ Se mostra "❌ ERRO: index.html não foi processado!", o build falhou

### 4. Se o Build Falhou

Se o build falhou porque o `index.html` não foi processado:

1. Verifique os logs completos do build
2. Procure por erros relacionados ao Vite
3. Verifique se todas as dependências foram instaladas corretamente

### 5. Forçar Novo Build

1. Vá em **Actions** > **Workflow runs**
2. Clique nos três pontos (⋯) ao lado do workflow
3. Selecione **Re-run all jobs** ou **Re-run failed jobs**
4. Aguarde o build completar

### 6. Verificar o Conteúdo do index.html Gerado

Nos logs do build, você deve ver algo como:

```html
<script type="module" crossorigin src="./assets/index-xxxxx.js"></script>
```

**NÃO** deve aparecer:
```html
<script type="module" src="/src/main.jsx"></script>
```

## 🔍 Diagnóstico Rápido

Execute estes comandos para verificar:

```bash
# 1. Verificar se o build funciona localmente
npm run build

# 2. Verificar o conteúdo do index.html gerado
cat dist/index.html | grep -i "script"

# 3. Verificar se há arquivos na pasta dist/assets/
ls -la dist/assets/
```

## 🚨 Se Nada Funcionar

1. **Verifique o nome do repositório**: Se o repositório se chama `wallacyamauri.github.io`, o base path deve ser `/`
2. **Limpe o cache**: Delete a pasta `node_modules` e `.npm` e reinstale as dependências
3. **Verifique a versão do Node**: O workflow usa Node 20, certifique-se de que está compatível
4. **Verifique os logs completos**: Procure por erros específicos nos logs do GitHub Actions

## 📝 Checklist Final

- [ ] GitHub Pages configurado para usar **GitHub Actions**
- [ ] Workflow executando e completando com sucesso
- [ ] Build mostra "✅ index.html foi processado corretamente!"
- [ ] `index.html` em `dist/` não contém `/src/main.jsx`
- [ ] Arquivos estão sendo enviados da pasta `dist/` para o GitHub Pages

## 💡 Dica

Se o problema persistir, verifique se há algum arquivo `.nojekyll` ou configuração especial necessária. O workflow atual já está configurado corretamente para fazer upload apenas da pasta `dist/`.

