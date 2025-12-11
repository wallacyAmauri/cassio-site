@echo off
chcp 65001 >nul
echo.
echo ╔══════════════════════════════════════════════════════════╗
echo ║   Iniciando Servidor de Desenvolvimento                 ║
echo ╚══════════════════════════════════════════════════════════╝
echo.

cd /d "%~dp0"

echo Executando servidor de desenvolvimento...
echo.
echo ✓ Servidor estará disponível em: http://localhost:5173
echo.
echo ⚠  Pressione Ctrl+C para parar o servidor
echo.
echo ──────────────────────────────────────────────────────────
echo.

call "C:\Program Files\nodejs\npm.cmd" run dev

pause

