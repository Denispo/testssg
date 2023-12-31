import axios from "axios";

import { readdirSync, statSync, readFileSync } from 'fs';
import {createHash} from 'crypto';


// Recursive function to get files
function getFiles(dir, files = []) {
    // Get an array of all files and directories in the passed directory using fs.readdirSync
    const fileList = readdirSync(dir);
    // Create the full path of the file/directory by concatenating the passed directory and file/directory name
    for (const file of fileList) {
        const name = `${dir}/${file}`;
        // Check if the current file/directory is a directory using fs.statSync
        if (statSync(name).isDirectory()) {
            // If it is a directory, recursively call the getFiles function with the directory path and the files array
            getFiles(name, files);
        } else {
            // If it is a file, push the full path to the files array
            files.push({dirName:dir, fileName:file,fileHash:createHash('md5').update(readFileSync(name)).digest('hex')});
        }
    }
    return files;
}

/*
axios.get('').then((result)=>{
    console.log(result);
})*/

console.log(getFiles('./dist'));

