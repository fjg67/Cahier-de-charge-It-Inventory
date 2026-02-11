@echo off
chcp 65001 >nul
echo Copie des captures d'écran StockPro...
set SOURCE=C:\Users\flori\.cursor\projects\c-Users-flori-Documents-Projet-Cahier-de-charge-StockPro\assets
set DEST=%~dp0assets
if not exist "%DEST%" mkdir "%DEST%"
xcopy /Y "%SOURCE%\*" "%DEST%\"
echo Terminé.
pause
