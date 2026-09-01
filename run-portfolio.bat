@echo off
setlocal
title Portfolio Development Server

cd /d "%~dp0"

where node.exe >nul 2>&1
if errorlevel 1 (
  echo Node.js is not installed or is not available in PATH.
  echo Install Node.js from https://nodejs.org/ and run this file again.
  pause
  exit /b 1
)

if not exist "node_modules\react-scripts\bin\react-scripts.js" (
  echo Installing project dependencies for the first run...
  call npm.cmd install
  if errorlevel 1 (
    echo.
    echo Dependency installation failed. See the error above.
    pause
    exit /b 1
  )
)

echo Starting the portfolio...
echo Keep this window open while using the site.
echo Press Ctrl+C to stop it.
echo.
call npm.cmd start

if errorlevel 1 (
  echo.
  echo The portfolio stopped because of an error.
  pause
)

