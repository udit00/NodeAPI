export const APPNAME = {
    twitter: "twitter_clone",
    todo: "todo",
    ezone: "ezone"    
}

export function isBlank(check) {
    return (check == undefined || check == null || check == ''); 
}

export function getAppDBName(app){
    return (APPNAME[`${app}`] == undefined) ? '404' : APPNAME[`${app}`];
}

export function getUserIP(req) {
    const ip = req.socket.remoteAddress;
    const arr = ip.split(':');
    return arr[arr.length - 1] ?? ip;
}