# Instruções de Deploy para GitHub Pages

## Configuração no GitHub

1. **Vá para Settings → Pages** no seu repositório
2. **Em "Source"**, selecione **"GitHub Actions"** (NÃO selecione "Deploy from a branch")
3. Salve as configurações

## Verificação

Após fazer push para a branch `main`, o workflow será executado automaticamente. Você pode verificar o progresso em:
- **Actions** → Aba "Deploy to GitHub Pages"

## URL do Site

Se o repositório for `wallacyamauri.github.io`:
- URL: `https://wallacyamauri.github.io/`

Se o repositório for outro nome (ex: `cassio-trafego-pago`):
- URL: `https://wallacyamauri.github.io/cassio-trafego-pago/`

## Solução de Problemas

### Erro 404 ao acessar arquivos
- Certifique-se de que o GitHub Pages está configurado para usar **GitHub Actions**, não uma branch
- Verifique se o workflow foi executado com sucesso em **Actions**
- Aguarde alguns minutos após o push para o deploy ser concluído

### Arquivos fonte sendo servidos em vez do build
- Verifique se o workflow está fazendo o build corretamente
- Certifique-se de que o diretório `dist` está sendo enviado como artifact
- Verifique os logs do workflow em **Actions**

