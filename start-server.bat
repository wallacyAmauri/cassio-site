@echo off
echo ========================================
echo Iniciando servidor de desenvolvimento
echo ========================================
echo.

cd /d "%~dp0"

echo Verificando Node.js...
echo.

REM Define caminho do Node.js
set NODE_CMD=C:\Program Files\nodejs\node.exe
set NPM_CMD=C:\Program Files\nodejs\npm.cmd

if exist "%NODE_CMD%" (
    echo [OK] Node.js encontrado em: C:\Program Files\nodejs
) else (
    echo [ERRO] Node.js nao encontrado em: C:\Program Files\nodejs
    echo.
    echo Tentando usar Node.js do PATH...
    where node >nul 2>&1
    if not errorlevel 1 (
        set NODE_CMD=node
        set NPM_CMD=npm
        echo [OK] Node.js encontrado no PATH
    ) else (
        echo [ERRO] Node.js nao encontrado!
        pause
        exit /b 1
    )
)

echo.
echo Versao do Node.js:
"%NODE_CMD%" --version
if errorlevel 1 (
    echo [ERRO] Nao foi possivel executar o Node.js!
    pause
    exit /b 1
)

echo.
echo Instalando dependencias (se necessario)...
echo.
"%NPM_CMD%" install
if errorlevel 1 (
    echo [ERRO] Falha ao instalar dependencias!
    pause
    exit /b 1
)

echo.
echo ========================================
echo Iniciando servidor Vite...
echo ========================================
echo.
echo O servidor estara disponivel em: http://localhost:5173
echo.
echo Pressione Ctrl+C para parar o servidor
echo.

"%NPM_CMD%" run dev

pause
