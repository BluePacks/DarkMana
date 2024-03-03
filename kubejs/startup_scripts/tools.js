StartupEvents.registry("item", (event) => {
    function toolset(name, tier, color, speed) {
        event
            .create(`${name}_pickaxe`, "pickaxe")
            .tier(tier)
            .color(1, color)
            .texture("layer0", "kubejs:item/tools/pickaxe_handle")
            .texture("layer1", "kubejs:item/tools/pickaxe_head")
            .speed(speed);
        event
            .create(`${name}_shovel`, "shovel")
            .tier(tier)
            .color(1, color)
            .texture("layer0", "kubejs:item/tools/shovel_handle")
            .texture("layer1", "kubejs:item/tools/shovel_head")
            .speed(speed);
        event
            .create(`${name}_axe`, "axe")
            .tier(tier)
            .color(1, color)
            .texture("layer0", "kubejs:item/tools/axe_handle")
            .texture("layer1", "kubejs:item/tools/axe_head")
            .speed(speed);
        event
            .create(`${name}_hoe`, "hoe")
            .tier(tier)
            .color(1, color)
            .texture("layer0", "kubejs:item/tools/hoe_handle")
            .texture("layer1", "kubejs:item/tools/hoe_head")
            .speed(speed);
        event
            .create(`${name}_sword`, "sword")
            .tier(tier)
            .color(1, color)
            .texture("layer0", "kubejs:item/tools/sword_hilt")
            .texture("layer1", "kubejs:item/tools/sword_blade")
            .speed(speed);
    }
    toolset("flower", "wood", 0xf542d7, 10);

    event
        .create("golden_sickle", "sickle")
        .tooltip("Yes just like Getafix")
        .attackDamageBaseline(1)
        .attackDamageBonus(1)
        .maxDamage(256);
    event
        .create("iron_sickle", "sickle")
        .attackDamageBaseline(1)
        .attackDamageBonus(1)
        .maxDamage(128);
});
