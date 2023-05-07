const APPNAME = {
    twitter: "twitter_clone",
    todo: "todo"
}

export function getAppDBName(app){
    return APPNAME[`${app}`]
}