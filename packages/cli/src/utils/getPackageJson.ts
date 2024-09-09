import { readJSONSync } from "fs-extra"
import path from 'path'
import {type PackageJson} from 'type-fest'

export function getPkgInfo() {
    const pkgPath = path.join("package.json")
    return readJSONSync(pkgPath) as PackageJson
}