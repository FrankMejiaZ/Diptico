@echo off
title Servidor Local - Díptico 91 Aniversario Santa Teresita
echo ================================================================
echo   Iniciando Servidor Web Local (Puerto Seguro 8095)
echo   I.E.E. Santa Teresita - 91 Aniversario Institucional
echo ================================================================
echo.
echo Abriendo en tu navegador...
start http://localhost:8095
echo.
echo Presiona Ctrl+C para detener el servidor cuando termines.
echo.
python -m http.server 8095
pause
