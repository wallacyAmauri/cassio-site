@echo off
chcp 65001 >nul
echo.
echo ╔══════════════════════════════════════════════════════════╗
echo ║   Removendo Base44 e Reinstalando Dependências         ║
echo ╚══════════════════════════════════════════════════════════╝
echo.

cd /d "%~dp0"

echo [1/4] Removendo node_modules...
if exist node_modules (
    rmdir /s /q node_modules
    echo ✓ node_modules removido
) else (
    echo ℹ node_modules não encontrado
)

echo.
echo [2/4] Removendo package-lock.json...
if exist package-lock.json (
    del /q package-lock.json
    echo ✓ package-lock.json removido
) else (
    echo ℹ package-lock.json não encontrado
)

echo.
echo [3/4] Removendo cache do Vite...
if exist node_modules\.vite (
    rmdir /s /q node_modules\.vite
    echo ✓ Cache do Vite removido
) else (
    echo ℹ Cache do Vite não encontrado
)

echo.
echo [4/4] Reinstalando dependências (sem Base44)...
echo.
call "C:\Program Files\nodejs\npm.cmd" install

if errorlevel 1 (
    echo.
    echo ❌ ERRO ao instalar dependências!
    echo.
    pause
    exit /b 1
)

echo.
echo ╔══════════════════════════════════════════════════════════╗
echo ║   ✓ Base44 removido com sucesso!                        ║
echo ╚══════════════════════════════════════════════════════════╝
echo.
echo Próximos passos:
echo 1. Execute: npm run build
echo 2. Execute: npm run dev (para testar)
echo.
pause

