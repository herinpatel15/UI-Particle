#!/usr/bin/env node
import { Command } from "commander"
import { getPkgInfo } from "./utils/getPackageJson"
import { init } from "./cmd/init"

process.on("SIGINT", () => process.exit(0))
process.on("SIGTERM", () => process.exit(0))

async function chalo() {
    const pkg = getPkgInfo()

    const program = new Command()
    .name("ui-particle")
    .description("Components cli for REACTJS and NEXTJS :)")
    .version('1.0.0', "-v", "get version")

    program.addCommand(init)

    program.parse(process.argv)
}

chalo()