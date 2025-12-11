@echo off
chcp 65001 >nul
echo.
echo ╔══════════════════════════════════════════════════════════╗
echo ║   Fazendo Build do Projeto                               ║
echo ╚══════════════════════════════════════════════════════════╝
echo.

cd /d "%~dp0"

echo Executando build...
call "C:\Program Files\nodejs\npm.cmd" run build

if errorlevel 1 (
    echo.
    echo ❌ ERRO no build!
    echo.
    pause
    exit /b 1
)

echo.
echo ╔══════════════════════════════════════════════════════════╗
echo ║   ✓ Build concluído com sucesso!                        ║
echo ╚══════════════════════════════════════════════════════════╝
echo.
echo Os arquivos foram gerados na pasta: dist/
echo.
pause

