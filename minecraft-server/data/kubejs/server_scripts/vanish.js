// vanish.js — KubeJS 6+ (Minecraft 1.21+)
// Vanish toggle for admins

ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event

    event.register(
        Commands.literal('vanish')
            .requires(src => src.hasPermission(2)) // OP only
            .executes(ctx => {
                const player = ctx.source.player
                if (!player) return 0

                const vanished = player.persistentData.vanish === true

                if (!vanished) {
                    enableVanish(player)
                    player.tell(Text.green('Vanish activé — tu es invisible.'))
                } else {
                    disableVanish(player)
                    player.tell(Text.gold('Vanish désactivé — tu es visible.'))
                }

                return 1
            })
    )
})

// -------- HELPERS --------

const enableVanish = (player) => {
    const server = player.server
    const name = player.name.string

    player.persistentData.vanish = true

    // Team to hide nametag & disable collisions
    server.runCommand(`team add vanish_team`)
    server.runCommand(`team modify vanish_team nametagVisibility never`)
    server.runCommand(`team modify vanish_team collisionRule never`)
    server.runCommand(`team join vanish_team ${name}`)

    // Invisibility (via KubeJS 1.21+ API)
    //player.potionEffects.add('minecraft:invisibility', 999999, 0, true)

    // Also hide model (this hides item in hand too!)
    player.setInvisible(true)
}

const disableVanish = (player) => {
    const server = player.server
    const name = player.name.string

    player.persistentData.vanish = false

    server.runCommand(`team leave ${name}`)
    //player.potionEffects.remove('minecraft:invisibility')
    player.setInvisible(false)
}
