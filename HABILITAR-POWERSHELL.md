# Como Habilitar Execução de Scripts no PowerShell

Se você preferir usar o PowerShell diretamente em vez dos scripts .bat, siga estas instruções:

## Opção 1: Habilitar para o Usuário Atual (Recomendado)

Abra o PowerShell como **Administrador** e execute:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Isso permite que você execute scripts locais sem problemas de segurança.

## Opção 2: Executar Apenas Este Comando (Temporário)

Se não quiser mudar a política permanentemente, execute este comando antes de usar npm:

```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```

Isso habilita scripts apenas para a sessão atual do PowerShell.

## Opção 3: Usar os Scripts .bat (Mais Fácil)

Use os arquivos `.bat` que criei:
- `remover-base44.bat` - Remove Base44 e reinstala dependências
- `build.bat` - Faz o build do projeto
- `dev.bat` - Inicia o servidor de desenvolvimento

Esses scripts funcionam sem precisar mudar políticas do PowerShell.

## Verificar Política Atual

Para ver qual política está ativa:

```powershell
Get-ExecutionPolicy -List
```

## Mais Informações

Para mais detalhes sobre políticas de execução:
https://go.microsoft.com/fwlink/?LinkID=135170

