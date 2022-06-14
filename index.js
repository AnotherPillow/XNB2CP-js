const scan_dir = require("./src/dir-scan.js")
const path = require('path');
const fs = require('fs-extra');
let content = require("./src/blank/content.json");
let changes = content.Changes;
const change_generate = require("./src/change-generate.js");

const directoryPath = path.join(__dirname, 'XNB');
const CP_path = path.join(__dirname, 'CP/assets');

let XNB_folders = scan_dir(directoryPath)
let XNB_characters;
let XNB_farmer;
XNB_folders.then(async function (XNB_folders) {
    if (XNB_folders.indexOf("Characters") > -1) {
        scan_dir(path.join(directoryPath, "Characters")).then(d => {
            XNB_characters = d;
            for (f in XNB_characters) {
                scan_dir(path.join(directoryPath, "Characters", "Farmer")).then(d => {
                    XNB_farmer = d;
                })
            }
        })
    }
})


//fs.pathExists(CP_path, (err, exists) => {
    //if (exists) {
    //    return
    //} else {
        fs.copy(directoryPath, path.join(__dirname, "CP/assets"), function (err) {
            if (err){
                console.log('An error occured while copying the folder.')
                return console.error(err)
            }
            console.log('Copy completed!')
            switch_stuff()
        });
    //}
//})

console.log("eee")
//reoslve the XNB_folders promise
function switch_stuff() {
    if (XNB_characters && XNB_farmer) {
        for (f in XNB_farmer) {
            let $_ = XNB_farmer[f]
            changes.push(
                change_generate("Characters/Farmer/" + $_, "assets" + "/Characters/Farmer/" + $_)
            )
        }
    }
    XNB_folders.then(async function(XNB_folders){
        for (f in XNB_folders) {
            switch (XNB_folders[f]) {
                case "Buildings":
                    console.log("Written Buildings");
                    let buildings_path = path.join(__dirname, "CP/assets/Buildings");
                    let b$files_path = await scan_dir(buildings_path);
                    //console.log(b$files_path)
                    for (_$f in b$files_path) {
                        changes.push(
                            change_generate("Buildings/" + b$files_path[_$f].toString(), "assets/" + b$files_path[_$f])
                        )
                    }
                    break
                case "LooseSprites":
                    console.log("Written LooseSprites");
                    let loosesprites_path = path.join(__dirname, "CP/assets/LooseSprites");
                    let l$files_path = await scan_dir(loosesprites_path);
                    for (_$$f in l$files_path) {
                        changes.push(
                            change_generate("LooseSprites/" + l$files_path[_$$f].toString(), "assets/" + l$files_path[_$$f])
                        )
                    }
                    break
                case "Characters":
                    console.log("Written Characters");
                    let chars_path = path.join(__dirname, "CP/assets/Characters");
                    let c$files_path = await scan_dir(chars_path);
                    for (__$f in c$files_path) {
                        changes.push(
                            change_generate("Characters/" + c$files_path[__$f].toString(), "assets/" + c$files_path[__$f])
                        )
                    }
                    break
                case "Maps":
                    console.log("Written Maps");
                    let maps_path = path.join(__dirname, "CP/assets/Maps");
                    let m$files_path = await scan_dir(maps_path);
                    for (_$_f in m$files_path) {
                        changes.push(
                            change_generate("Maps/" + m$files_path[_$_f].toString(), "assets/" + m$files_path[_$_f])
                        )
                    }
                    break
                case "TerrainFeatures":
                    console.log("Written TerrainFeatures");
                    let terrainfeatures_path = path.join(__dirname, "CP/assets/TerrainFeatures");
                    let t$files_path = await scan_dir(terrainfeatures_path);
                    for ($$_f in t$files_path) {
                        changes.push(
                            change_generate("TerrainFeatures/" + t$files_path[$$_f].toString(), "assets/" + t$files_path[$$_f])
                        )
                    }
                    break
                case "TileSheets":
                    console.log("Written TileSheets");
                    let tilesheets_path = path.join(__dirname, "CP/assets/TileSheets");
                    let ts$files_path = await scan_dir(tilesheets_path);
                    for ($_$f in ts$files_path) {
                        changes.push(
                            change_generate("TileSheets/" + ts$files_path[$_$f].toString(), "assets/" + ts$files_path[$_$f])
                        )
                    }
                    break
                case "Animals":
                    console.log("Written Animals");
                    let animals_path = path.join(__dirname, "CP/assets/Animals");
                    let a$files_path = await scan_dir(animals_path);
                    for ($__f in a$files_path) {
                        changes.push(
                            change_generate("Animals/" + a$files_path[$__f].toString(), "assets/" + a$files_path[$__f])
                        )
                    }
                    break
                case "Data":
                    console.log("Written Data");
                    let data_path = path.join(__dirname, "CP/assets/Data");
                    let d$files_path = await scan_dir(data_path);
                    for ($_$_f in d$files_path) {
                        changes.push(
                            change_generate("Data/" + d$files_path[$_$_f].toString(), "assets/" + d$files_path[$_$_f])
                        )
                    }
                    break
                case "Effects":
                    console.log("Written Effects");
                    let effects_path = path.join(__dirname, "CP/assets/Data");
                    let e$files_path = await scan_dir(effects_path);
                    for ($$__f in e$files_path) {
                        changes.push(
                            change_generate("Effects/" + e$files_path[$$__f].toString(), "assets/" + e$files_path[$$__f])
                        )
                    }
                    break
                case "Fonts":
                    console.log("Written Fonts");
                    let fonts_path = path.join(__dirname, "CP/assets/Fonts");
                    let f$files_path = await scan_dir(fonts_path);
                    for ($__$f in f$files_path) {
                        changes.push(
                            change_generate("Fonts/" + f$files_path[$__$f].toString(), "assets/" + f$files_path[$__$f])
                        )
                    }
                    break
                case "Mines":
                    console.log("Written mines");
                    let mines_path = path.join(__dirname, "CP/assets/Mines");
                    let mi$files_path = await scan_dir(mines_path);
                    for ($$_$f in mi$files_path) {
                        changes.push(
                            change_generate("Mines/" + mi$files_path[$$_$f].toString(), "assets/" + mi$files_path[$$_$f])
                        )
                    }
                    break
                case "Minigames":
                    console.log("Written minigames");
                    let minigames_path = path.join(__dirname, "CP/assets/Minigames");
                    let mg$files_path = await scan_dir(minigames_path);
                    for ($_$$f in mg$files_path) {
                        changes.push(
                            change_generate("Minigames/" + mg$files_path[$_$$f].toString(), "assets/" + mg$files_path[$_$$f])
                        )
                    }
                    break
                case "Portraits":
                    console.log("Written portraits");
                    let portraits_path = path.join(__dirname, "CP/assets/Portraits");
                    let p$files_path = await scan_dir(portraits_path);
                    for (_$$$f in p$files_path) {
                        changes.push(
                            change_generate("Portraits/" + p$files_path[_$$$f].toString(), "assets/" + p$files_path[_$$$f])
                        )
                    }
                    break
                case "Strings":
                    console.log("Written strings");
                    let strings_path = path.join(__dirname, "CP/assets/Strings");
                    let s$files_path = await scan_dir(strings_path);
                    for ($$$_f in s$files_path) {
                        changes.push(
                            change_generate("Strings/" + s$files_path[$$$_f].toString(), "assets/" + s$files_path[$$$_f])
                        )
                    }
                    break
                case "VolcanoLayouts":
                    console.log("Written volcano layouts");
                    let volcano_path = path.join(__dirname, "CP/assets/VolcanoLayouts");
                    let v$files_path = await scan_dir(volcano_path);
                    for ($$$$f in v$files_path) {
                        changes.push(
                            change_generate("VolcanoLayouts/" + v$files_path[$$$$f].toString(), "assets/" + v$files_path[$$$$f])
                        )
                    }
                    break
                default:
                    break
            }
        }
        content.Changes = changes;
        fs.writeJSON("./CP/content.json", content, {spaces: 1}, function (err) { 
            if (err) return console.log(err);
            console.log("Content.json written successfully!");
        });
    })
}

/*
    TODO:
        -Characters/*
        -Data/*
        -Maps/Mines
        -LooseSprites/Lighting
        -Strings/schedules
*/