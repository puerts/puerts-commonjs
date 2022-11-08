/*
 * Tencent is pleased to support the open source community by making Puerts available.
 * Copyright (C) 2020 THL A29 Limited, a Tencent company.  All rights reserved.
 * Puerts is licensed under the BSD 3-Clause License, except for the third-party components listed in the file 'LICENSE' which may be subject to their corresponding license terms. 
 * This file is subject to the terms and conditions defined in file 'LICENSE', which is part of this source code package.
 */

var global = global || globalThis || (function () { return this; }());

function pathNormalize(path) {
    let reversePathFrags = path.split('/').reverse();
    let newPathFrags = [];
    while (reversePathFrags.length > 0) {
        let el = reversePathFrags.pop();
        if (el != "" && el != ".") {
            if (el == ".." && newPathFrags.length > 0 && newPathFrags[newPathFrags.length - 1] != "..") {
                newPathFrags.pop();
            } else {
                newPathFrags.push(el);
            }
        }
    }
    return newPathFrags.join("/");
}

function searchModuleInDirWithExt(dir, requiredModule) {
    var searchPath = pathNormalize(dir + '/' + requiredModule);
    if (puer.fileExists(searchPath)) {
        return searchPath;
    }

    searchPath = pathNormalize(dir + '/node_modules/' + requiredModule);
    if (puer.fileExists(searchPath)) {
        return searchPath;
    }
}

function searchModuleInDir(dir, requiredModule) {
    // Stanley: Dont know how to check a path is a dir or file in puer system, 
    //          so put requireModule at last check list to ensure its result correct.
    return searchModuleInDirWithExt(dir, requiredModule + ".js")
        || searchModuleInDirWithExt(dir, requiredModule + ".cjs")
        || searchModuleInDirWithExt(dir, requiredModule + "/index.js")
        || searchModuleInDirWithExt(dir, requiredModule + "/package.json")
        || searchModuleInDirWithExt(dir, requiredModule);
}

function searchModule(dir, requiredModule) {
    var result = searchModuleInDir(dir, requiredModule);
    if (result) return result;
    if (dir != "" && !requiredModule.endsWith(".js")) {
        let pathFrags = dir.split('/');
        pathFrags.pop();
        pathFrags.unshift('');
        while (pathFrags.length > 0) {
            if (pathFrags[pathFrags.length - 1] != "node_modules") {
                result = searchModuleInDir(pathFrags.join("/"), requiredModule);
                if (result) return result;
            }
            pathFrags.pop();
        }
    }
}

puer.searchModule = searchModule;