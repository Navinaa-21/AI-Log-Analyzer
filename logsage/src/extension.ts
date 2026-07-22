import * as vscode from 'vscode';

/**
 * This method is called when your extension is activated.
 * @param context The extension context
 */
export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "logsage" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('logsage.hello', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello from LogSage!');
    });

    context.subscriptions.push(disposable);
}

/**
 * This method is called when your extension is deactivated.
 */
export function deactivate() {}
