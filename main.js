<<<<<<< HEAD
const { app, BrowserWindow } = require('electron');

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');

    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
      })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow()
    }
});

function distanceFactor(distance) {
    if(distance < 100) {
        return 0;
    } else if(distance > 100 && distance < 500) {
        return 1;
    } else if(distance > 500 && distance < 2000) {
        return 2;
    } else {
        return 3;
    }
}

function recyclableFactor(boolean) {
    if(boolean) {
        return 0;
    }
    return 1;
}

function transportationFactor(type) {
    if(type === "Boat") {
        return 0.8;
    } else if(type === "Ground") {
        return 2;
    } else if(type === "Air") {
        return 3;
    } else if (type === "Rail") {
        return 1;
    }
    return 0;
}

function shippingFactor(type) {
    if(type === "Prime 1-day") {
        return 1.95
    } else if(type === "Prime") {
        return 1.8
    } else if(type === "Priority") {
        return 1.5
    } else if(type === "Expedited") {
        return 1.25
    } else if(type === "FEDEX Next-Day") {
        return 2
    }
    return 0.75
}

function weightFactor(weight) {
    if(weight < 5) {
        return 0
    } else if(weight > 5 && weight < 10) {
        return 0.5
    } else if(weight >10 && weight < 20) {
        return 0.75
    }
    return 1
}

function totalFactor() {
    let total = 0;
    for(i === 0; i<arguments.length; i++) {
        total += arguments[i]
    }
    return total;
}
