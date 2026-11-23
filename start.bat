@echo off
title SurakshaSaathi Server
echo ==========================================================
echo       SurakshaSaathi PWA - Local Development Server
echo ==========================================================
echo.
echo Opening app at: http://127.0.0.1:8000
echo.
echo [INFO] Press Ctrl+C in this terminal whenever you want to STOP.
echo.
timeout /t 1 >nul
start "" "http://127.0.0.1:8000"
python -m http.server 8000
