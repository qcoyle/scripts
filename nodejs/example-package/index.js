import fs from "fs"
import path from "path"

var text = fs.readFileSync(path.resolve('index.html'), 'utf8')
console.log(text);