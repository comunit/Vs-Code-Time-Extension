const vscode = require('vscode');

time = () => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let secounds = new Date().getSeconds();
    let time = hours +':'+ minutes + ' ' +secounds;
    return time;
}

function activate(context) {

    let disposable = vscode.commands.registerCommand('extension.sayHello', function () {
        let editor = vscode.window.activeTextEditor;
        let StatusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
        StatusBar.show();
        
        setInterval(() => {
            StatusBar.text = `$(clock) ${time()}`;
        },1000);
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;