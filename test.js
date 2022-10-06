//practiced from w3school, Thank you w3 school for amazing Tutorial.
//steps to get started typescript in vscode 
//1. download and install node js which also includes npm
//2. now run command "npm install -g typescript"
//3. now to check version and for common commands --> "npx tsc"
//4. for tscconfig.json run command "npx tsc --init" this will create a file named tscconfig.json
//5. now if you transpile your code to js file with "tsc filename.tsc" error may pop up with
//"cannot be loaded because running scripts is disabled on this system. For more information,     
//see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170."
//for this you need to run a command "Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope CurrentUser"
// now again run "tsc filename.ts" --> which will transpile the file equivalent js
// now run js file "node filename.js"
// congrats you have done it.
console.log("hello Testing is completed!!");
