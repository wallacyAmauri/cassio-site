# Solução para o Erro 404 do main.jsx

## Problema
O GitHub Pages está tentando carregar `/src/main.jsx` diretamente, o que causa um erro 404. Isso acontece quando o GitHub Pages está servindo os arquivos fonte em vez do build compilado.

## Causa
O GitHub Pages está configurado para servir arquivos de uma branch em vez de usar o build do GitHub Actions.

## Solução

### Passo 1: Verificar Configuração do GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **"Source"** (Origem), verifique:
   - ❌ **NÃO** deve estar selecionado "Deploy from a branch"
   - ✅ **DEVE** estar selecionado **"GitHub Actions"**

### Passo 2: Verificar se o Workflow Foi Executado

1. Vá para a aba **Actions** no repositório
2. Verifique se há um workflow chamado **"Deploy to GitHub Pages"**
3. Se houver, clique nele e verifique:
   - Se está com status ✅ (verde) = sucesso
   - Se está com status ❌ (vermelho) = erro (veja os logs)
   - Se não existe = o workflow não foi executado

### Passo 3: Executar o Workflow Manualmente (se necessário)

1. Vá para **Actions**
2. Clique em **"Deploy to GitHub Pages"** no menu lateral
3. Clique em **"Run workflow"** (Executar workflow)
4. Selecione a branch **main**
5. Clique em **"Run workflow"**

### Passo 4: Aguardar o Deploy

- O workflow leva alguns minutos para executar
- Após concluir, aguarde 1-2 minutos para o GitHub Pages atualizar
- Limpe o cache do navegador (Ctrl+Shift+R ou Cmd+Shift+R)

### Passo 5: Verificar se Está Funcionando

1. Acesse o site: `https://wallacyamauri.github.io/`
2. Abra o Console do Desenvolvedor (F12)
3. Verifique se não há mais erros 404 para `/src/main.jsx`
4. O site deve carregar normalmente

## Verificação Técnica

Se o problema persistir, verifique nos logs do workflow:

1. Vá para **Actions** → **"Deploy to GitHub Pages"** → Clique no workflow mais recente
2. Expanda o step **"Verify build"**
3. Procure por:
   - ✅ "index.html contains compiled assets" = OK
   - ❌ "index.html still contains /src/main.jsx" = ERRO (build falhou)

## Se o Build Falhar

Se o step "Verify build" falhar, significa que o Vite não processou o HTML corretamente. Nesse caso:

1. Verifique os logs do step **"Build"**
2. Procure por erros de compilação
3. Verifique se a variável `BASE_URL` está sendo definida corretamente

## Importante

- **NUNCA** configure o GitHub Pages para usar "Deploy from a branch" com este projeto
- **SEMPRE** use "GitHub Actions" como source
- O workflow faz o build automaticamente e valida se está correto antes de fazer deploy

