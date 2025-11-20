// Visit the wiki for more info - https://kubejs.com/
console.info('[KubeJS] Loading industrial-mod disabling script...');

// -------------
// Configuration
// -------------
const MODS_CONFIG = [
    {
        modid: "tfmg",
        banMod: false,
    },
    {
        modid: "mekanism",
        banMod: false,
        allowedItems: [
            "mekanism:steel_casing",
            "mekanism:basic_control_circuit",
            "mekanism:energized_smelter",
        ]
    },
    {
        modid: "mekanismgenerators",
        banMod: false
    },
    {
        modid: "mekanismadditions",
        banMod: false
    },
    {
        modid: "mekanismtools",
        banMod: false,
        allowedItems: [
            "mekanismtools:refined_obsidian_shield"
        ],
        bannedPatterns: [
            /mekanismtools:osmium_.*/,
            /mekanismtools:refined_obsidian_.*/
        ]
    },
    {
        modid: "stellaris",
        banMod: false
    },
];

// -------------
// Script KubeJS
// -------------
ServerEvents.recipes(function (event) {
    MODS_CONFIG.forEach(function (entry) {
        let modid = entry.modid;
        let allowedItems = entry.allowedItems || [];
        let bannedPatterns = entry.bannedPatterns || [];
        let banMod = entry.banMod || false;

        if (banMod) {
            if (allowedItems.length > 0) {
                event.remove({mod: modid, not: {output: allowedItems}});
            } else {
                event.remove({mod: modid});
            }
        }

        bannedPatterns.forEach(function (pattern) {
            event.remove({output: pattern, not: {output: allowedItems}});
        });
    });
});

console.info('[KubeJS] Recipe removal complete.');
