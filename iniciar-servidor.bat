@echo off
chcp 65001 >nul
title Servidor de Desenvolvimento - Cassio Trafego Pago

echo.
echo ╔══════════════════════════════════════════════════════════╗
echo ║   Iniciando Servidor de Desenvolvimento                 ║
echo ╚══════════════════════════════════════════════════════════╝
echo.

cd /d "%~dp0"

REM Adiciona Node.js ao PATH temporariamente
set "PATH=C:\Program Files\nodejs;%PATH%"

echo [1/3] Verificando Node.js...
"C:\Program Files\nodejs\node.exe" --version
if errorlevel 1 (
    echo [ERRO] Node.js não encontrado em C:\Program Files\nodejs
    pause
    exit /b 1
)

echo.
echo [2/3] Instalando dependências...
"C:\Program Files\nodejs\npm.cmd" install
if errorlevel 1 (
    echo [ERRO] Falha ao instalar dependências!
    pause
    exit /b 1
)

echo.
echo ╔══════════════════════════════════════════════════════════╗
echo ║   [3/3] Iniciando servidor Vite...                      ║
echo ╚══════════════════════════════════════════════════════════╝
echo.
echo ✓ Servidor estará disponível em: http://localhost:5173
echo.
echo ⚠  Pressione Ctrl+C para parar o servidor
echo.
echo ──────────────────────────────────────────────────────────
echo.

"C:\Program Files\nodejs\npm.cmd" run dev

echo.
echo Servidor encerrado.
pause
