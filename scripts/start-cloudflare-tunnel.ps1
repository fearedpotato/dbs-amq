param(
    [int]$Port = 3000,
    [int]$TimeoutSeconds = 30
)

$ErrorActionPreference = 'Stop'

function Resolve-CloudflaredPath {
    $cmd = Get-Command cloudflared -ErrorAction SilentlyContinue
    if ($cmd -and $cmd.Source) {
        return $cmd.Source
    }

    $wingetPath = Join-Path $env:LOCALAPPDATA 'Microsoft\WinGet\Packages\Cloudflare.cloudflared_Microsoft.Winget.Source_8wekyb3d8bbwe\cloudflared.exe'
    if (Test-Path $wingetPath) {
        return $wingetPath
    }

    throw 'cloudflared was not found. Install it first (winget install --id Cloudflare.cloudflared -e).'
}

function Set-EnvLine {
    param(
        [string[]]$Lines,
        [string]$Key,
        [string]$Value
    )

    $pattern = "^\s*$([Regex]::Escape($Key))="
    $replacement = "$Key=$Value"
    $updated = $false
    $result = @()

    foreach ($line in $Lines) {
        if ($line -match $pattern) {
            $result += $replacement
            $updated = $true
        } else {
            $result += $line
        }
    }

    if (-not $updated) {
        $result += $replacement
    }

    return $result
}

$repoRoot = Split-Path -Parent $PSScriptRoot
$backendEnvPath = Join-Path $repoRoot 'backend\.env'

if (-not (Test-Path $backendEnvPath)) {
    throw "Missing backend env file: $backendEnvPath"
}

$cloudflared = Resolve-CloudflaredPath
$cacheDir = Join-Path $repoRoot '.cache\tunnel'
$null = New-Item -Path $cacheDir -ItemType Directory -Force
$outLogPath = Join-Path $cacheDir 'cloudflared.out.log'
$errLogPath = Join-Path $cacheDir 'cloudflared.err.log'
foreach ($path in @($outLogPath, $errLogPath)) {
    if (Test-Path $path) {
        Remove-Item $path -Force
    }
}

Write-Host "Starting Cloudflare tunnel for http://localhost:$Port ..."
$cfArgs = @(
    'tunnel',
    '--url',
    "http://localhost:$Port",
    '--no-autoupdate'
)
$process = Start-Process -FilePath $cloudflared -ArgumentList $cfArgs -PassThru -WindowStyle Hidden -RedirectStandardOutput $outLogPath -RedirectStandardError $errLogPath

$deadline = (Get-Date).AddSeconds($TimeoutSeconds)
$publicUrl = $null
$urlPattern = 'https://[a-z0-9-]+\.trycloudflare\.com'

while ((Get-Date) -lt $deadline) {
    Start-Sleep -Milliseconds 500
    $stdout = if (Test-Path $outLogPath) { Get-Content $outLogPath -Raw -ErrorAction SilentlyContinue } else { '' }
    $stderr = if (Test-Path $errLogPath) { Get-Content $errLogPath -Raw -ErrorAction SilentlyContinue } else { '' }
    $content = "$stdout`n$stderr"
    if (-not $content) {
        continue
    }

    $match = [Regex]::Match($content, $urlPattern, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    if ($match.Success) {
        $publicUrl = $match.Value
        break
    }
}

if (-not $publicUrl) {
    try { Stop-Process -Id $process.Id -Force } catch {}
    throw "Failed to obtain tunnel URL within $TimeoutSeconds seconds. Check $outLogPath and $errLogPath."
}

$envLines = Get-Content $backendEnvPath
$envLines = Set-EnvLine -Lines $envLines -Key 'BASE_URL' -Value $publicUrl
$envLines = Set-EnvLine -Lines $envLines -Key 'MAL_REDIRECT_URI' -Value "$publicUrl/api/mal/callback"
Set-Content -Path $backendEnvPath -Value $envLines

Write-Host ""
Write-Host "Tunnel URL: $publicUrl"
Write-Host "Updated backend/.env:"
Write-Host "  BASE_URL=$publicUrl"
Write-Host "  MAL_REDIRECT_URI=$publicUrl/api/mal/callback"
Write-Host ""
Write-Host "Tunnel process id: $($process.Id)"
Write-Host "Log files:"
Write-Host "  $outLogPath"
Write-Host "  $errLogPath"
Write-Host ""
Write-Host "Next:"
Write-Host "1) Restart backend so it loads the new BASE_URL/MAL_REDIRECT_URI."
Write-Host "2) Open and test: $publicUrl/game.html"
Write-Host "3) Share the URL with your friend."
