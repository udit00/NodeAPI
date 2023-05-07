const APPNAME = {
    twitter: "twitter_clone",
    todo: "todo"
}

export function getAppDBName(app){
    return (APPNAME[`${app}`] == undefined) ? '404' : APPNAME[`${app}`];
}