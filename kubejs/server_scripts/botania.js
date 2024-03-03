ServerEvents.recipes((event) => {
    event.recipes.botania
        .runic_altar("kubejs:flower_pickaxe", [
            "wooden_pickaxe",
            "#minecraft:flowers",
            "#minecraft:flowers",
            "#minecraft:flowers",
            "#minecraft:flowers",
        ])
        .mana(1000);
    event.recipes.botania
        .runic_altar("kubejs:flower_axe", [
            "wooden_axe",
            "#minecraft:flowers",
            "#minecraft:flowers",
            "#minecraft:flowers",
            "#minecraft:flowers",
        ])
        .mana(1000);
    event.recipes.botania
        .runic_altar("kubejs:flower_shovel", [
            "wooden_shovel",
            "#minecraft:flowers",
            "#minecraft:flowers",
            "#minecraft:flowers",
            "#minecraft:flowers",
        ])
        .mana(1000);
    event.recipes.botania
        .runic_altar("kubejs:flower_sword", [
            "wooden_sword",
            "#minecraft:flowers",
            "#minecraft:flowers",
            "#minecraft:flowers",
            "#minecraft:flowers",
        ])
        .mana(1000);
    event.recipes.botania
        .runic_altar("kubejs:flower_hoe", [
            "wooden_hoe",
            "#minecraft:flowers",
            "#minecraft:flowers",
            "#minecraft:flowers",
            "#minecraft:flowers",
        ])
        .mana(1000);
    event.recipes.botania
        .runic_altar("kubejs:golden_sickle", [
            "kubejs:iron_sickle",
            "#forge:ingots/gold",
            "#forge:ingots/gold",
            "#minecraft:bookshelf_books",
            "kubejs:mistletoe_sprig",
        ])
        .mana(5000);
});
