// Compiled using typings@0.6.10
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/ae81e340a9e897167cfef3122a5a3aed04293814/chokidar/chokidar.d.ts
// Type definitions for chokidar 1.0.0
// Project: https://github.com/paulmillr/chokidar
// Definitions by: Stefan Steinhart <https://github.com/reppners/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module "fs"
{
    interface FSWatcher
    {
        add(fileDirOrGlob:string):void;
        add(filesDirsOrGlobs:Array<string>):void;
        unwatch(fileDirOrGlob:string):void;
        unwatch(filesDirsOrGlobs:Array<string>):void;
    }
}

declare module "chokidar"
{
    interface WatchOptions
    {
        persistent?:boolean;
        ignored?:any;
        ignoreInitial?:boolean;
        followSymlinks?:boolean;
        cwd?:string;
        usePolling?:boolean;
        useFsEvents?:boolean;
        alwaysStat?:boolean;
        depth?:number;
        interval?:number;
        binaryInterval?:number;
        ignorePermissionErrors?:boolean;
        atomic?:boolean;
    }

    import fs = require("fs");

    function watch( fileDirOrGlob:string, options?:WatchOptions ):fs.FSWatcher;
    function watch( filesDirsOrGlobs:Array<string>, options?:WatchOptions ):fs.FSWatcher;
}