do
Set wshshell = wscript.CreateObject("WScript.Shell")
Wshshell.run "Notepad"
wscript.sleep 100
wshshell.sendkeys " "
wscript.sleep 100
wshshell.sendkeys "H"
wscript.sleep 100
wshshell.sendkeys "I"
wscript.sleep 100
wshshell.sendkeys " "
wscript.sleep 100
wshshell.sendkeys "R"
wscript.sleep 100
wshshell.sendkeys "O"
wscript.sleep 100
wshshell.sendkeys "H"
wscript.sleep 100
wshshell.sendkeys "I"
wscript.sleep 100
wshshell.sendkeys "T"
loop
