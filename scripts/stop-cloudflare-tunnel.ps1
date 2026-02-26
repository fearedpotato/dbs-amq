$ErrorActionPreference = 'Stop'

$processes = Get-Process -Name cloudflared -ErrorAction SilentlyContinue
if (-not $processes) {
    Write-Host 'No running cloudflared processes found.'
    exit 0
}

foreach ($proc in $processes) {
    try {
        Stop-Process -Id $proc.Id -Force
        Write-Host "Stopped cloudflared process $($proc.Id)."
    } catch {
        Write-Host "Could not stop process $($proc.Id): $($_.Exception.Message)"
    }
}
