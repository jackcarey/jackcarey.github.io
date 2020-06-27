@REM delete all files inside the _site folder to force updates and remove any excess shite
@del /q _site\*
@REM delete all files in all subdirectories in the _site folder
@for /d %%x in (_site\*) do @rd /s /q "%%x"
@REM open chrome browser
@start "" "http://localhost:4000"
@REM serve the website (generating fresh _site folder)
@bash _serve.sh
@REM This pause ensures we can read any errors before the window closes
@pause