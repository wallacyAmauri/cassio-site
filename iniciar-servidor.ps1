Write-Host ""
Write-Host "╔══════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   Iniciando Servidor de Desenvolvimento                 ║" -ForegroundColor Cyan
Write-Host "╚══════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

Set-Location $PSScriptRoot

$nodePath = "C:\Program Files\nodejs\node.exe"
$npmPath = "C:\Program Files\nodejs\npm.cmd"

if (-not (Test-Path $nodePath)) {
    Write-Host "[ERRO] Node.js não encontrado em: $nodePath" -ForegroundColor Red
    Read-Host "Pressione Enter para sair"
    exit 1
}

Write-Host "[1/3] Verificando Node.js..." -ForegroundColor Yellow
& $nodePath --version
Write-Host ""

Write-Host "[2/3] Instalando dependências..." -ForegroundColor Yellow
& $npmPath install
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERRO] Falha ao instalar dependências!" -ForegroundColor Red
    Read-Host "Pressione Enter para sair"
    exit 1
}

Write-Host ""
Write-Host "╔══════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   [3/3] Iniciando servidor Vite...                      ║" -ForegroundColor Cyan
Write-Host "╚══════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""
Write-Host "✓ Servidor estará disponível em: http://localhost:5173" -ForegroundColor Green
Write-Host ""
Write-Host "⚠  Pressione Ctrl+C para parar o servidor" -ForegroundColor Yellow
Write-Host ""
Write-Host "──────────────────────────────────────────────────────────" -ForegroundColor Gray
Write-Host ""

& $npmPath run dev

Write-Host ""
Write-Host "Servidor encerrado." -ForegroundColor Yellow
Read-Host "Pressione Enter para sair"
