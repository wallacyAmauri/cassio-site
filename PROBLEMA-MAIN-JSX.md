# Problema: `/src/main.jsx` não está sendo reconhecido

## O Problema

O GitHub Pages está servindo o `index.html` da raiz do repositório que contém:
```html
<script type="module" src="/src/main.jsx"></script>
```

Este é o arquivo de **desenvolvimento**. Durante o build, o Vite deveria processar esse arquivo e criar um novo `index.html` no diretório `dist` com referências aos arquivos compilados, como:
```html
<script type="module" crossorigin src="/assets/index-abc123.js"></script>
```

## Por que isso acontece?

O GitHub Pages está servindo os arquivos da **raiz do repositório** em vez dos arquivos do diretório **`dist`** que foram compilados pelo workflow.

## Solução

### 1. Verificar Configuração do GitHub Pages

**IMPORTANTE:** O GitHub Pages DEVE estar configurado para usar **GitHub Actions**, não uma branch!

1. Vá para: **Settings** → **Pages**
2. Em **"Source"**, verifique:
   - ❌ **NÃO** deve estar: "Deploy from a branch" 
   - ✅ **DEVE** estar: **"GitHub Actions"**

### 2. Executar o Workflow

1. Vá para a aba **Actions**
2. Clique em **"Deploy to GitHub Pages"** no menu lateral
3. Se houver um workflow pendente ou com erro, clique nele
4. Clique em **"Run workflow"** → Selecione branch **main** → **"Run workflow"**

### 3. Aguardar o Deploy

- O workflow leva 2-5 minutos
- Após concluir, aguarde mais 1-2 minutos
- **Limpe o cache do navegador** (Ctrl+Shift+R ou Cmd+Shift+R)
- Acesse o site novamente

### 4. Verificar se Funcionou

1. Acesse: `https://wallacyamauri.github.io/`
2. Abra o Console do Desenvolvedor (F12)
3. Vá para a aba **Network**
4. Recarregue a página (F5)
5. Procure por `main.jsx` - **NÃO deve aparecer**
6. Deve aparecer arquivos como `index-abc123.js` em `/assets/`

## Como Verificar se o Build Está Correto

### No Workflow (Actions)

1. Vá para **Actions** → Clique no workflow mais recente
2. Expanda o step **"Build"**
3. Procure por:
   - ✅ `✓ index.html was processed correctly (no /src/main.jsx found)` = OK
   - ❌ `❌ CRITICAL ERROR: dist/index.html still contains /src/main.jsx` = ERRO

### No Site (Inspecionar Elemento)

1. Acesse o site
2. Clique com botão direito → **"Inspecionar"** ou **"Ver código-fonte"**
3. Procure pela tag `<script>`
4. **CORRETO:** Deve ter algo como `<script type="module" src="/assets/index-abc123.js"></script>`
5. **ERRADO:** Se tiver `<script type="module" src="/src/main.jsx"></script>`

## Se o Problema Persistir

1. **Verifique os logs do workflow** em Actions
2. **Confirme que o GitHub Pages está usando GitHub Actions** (não branch)
3. **Aguarde alguns minutos** após o workflow completar
4. **Limpe o cache** do navegador completamente
5. **Tente em modo anônimo** para descartar cache

## Importante

- O `index.html` na raiz do repositório **está correto** - ele é usado durante o desenvolvimento
- O problema é que o GitHub Pages precisa servir o `index.html` do diretório `dist` (processado)
- O workflow faz isso automaticamente quando configurado corretamente

