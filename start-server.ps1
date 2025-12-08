Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Iniciando servidor de desenvolvimento" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Muda para o diretorio do script
Set-Location $PSScriptRoot

# Procura Node.js em varios locais
$nodePaths = @(
    "C:\Users\Home\node.exe",
    "C:\Users\Home\nodejs\node.exe",
    "C:\Program Files\nodejs\node.exe",
    "C:\Program Files (x86)\nodejs\node.exe"
)

$nodeExe = $null
foreach ($path in $nodePaths) {
    if (Test-Path $path) {
        $nodeExe = $path
        $nodeDir = Split-Path $path -Parent
        Write-Host "[OK] Node.js encontrado em: $nodeDir" -ForegroundColor Green
        break
    }
}

# Se nao encontrou, tenta usar do PATH
if (-not $nodeExe) {
    try {
        $nodeVersion = node --version 2>$null
        if ($nodeVersion) {
            $nodeExe = "node"
            Write-Host "[OK] Node.js encontrado no PATH" -ForegroundColor Green
        }
    } catch {
        Write-Host "[ERRO] Node.js nao encontrado!" -ForegroundColor Red
        Write-Host "Por favor, verifique se o Node.js esta instalado." -ForegroundColor Yellow
        Read-Host "Pressione Enter para sair"
        exit 1
    }
}

# Mostra versao do Node
Write-Host ""
Write-Host "Versao do Node.js:" -ForegroundColor Cyan
if ($nodeExe -eq "node") {
    node --version
} else {
    & $nodeExe --version
}

# Define npm baseado no node
if ($nodeExe -eq "node") {
    $npmCmd = "npm"
} else {
    $nodeDir = Split-Path $nodeExe -Parent
    $npmCmd = Join-Path $nodeDir "npm.cmd"
    if (-not (Test-Path $npmCmd)) {
        $npmCmd = "npm"
    }
}

Write-Host ""
Write-Host "Instalando dependencias (se necessario)..." -ForegroundColor Cyan
Write-Host ""
& $npmCmd install

if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERRO] Falha ao instalar dependencias!" -ForegroundColor Red
    Read-Host "Pressione Enter para sair"
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Iniciando servidor Vite..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "O servidor estara disponivel em: http://localhost:5173" -ForegroundColor Green
Write-Host ""
Write-Host "Pressione Ctrl+C para parar o servidor" -ForegroundColor Yellow
Write-Host ""

& $npmCmd run dev

Read-Host "Pressione Enter para sair"
