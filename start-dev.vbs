Set WshShell = WScript.CreateObject("WScript.Shell")
WshShell.Run "cmd /c cd /d """ & CreateObject("Scripting.FileSystemObject").GetAbsolutePathName(".") & """ && bun run dev --port 8080", 0, False
