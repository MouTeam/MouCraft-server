ServerEvents.recipes(event => {

    event.recipes.createoreexcavation.vein('{"text": "Raw Steel Vein"}', 'stellaris:raw_steel_ingot')
        .placement(64, 8, 20251212)
        .biomeWhitelist('kubejs:stellaris_moon')
        .veinSize(5, 15)
        .id("kubejs:raw_steel_vein");

    event.recipes.createoreexcavation.drilling('stellaris:raw_steel_ingot', 'kubejs:raw_steel_vein', 300)
        .stress(256)
        .id("kubejs:raw_steel_drilling");

});
