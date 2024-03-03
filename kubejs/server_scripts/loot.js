LootJS.modifiers((event) => {
    const flowers = Ingredient.of("#minecraft:flowers").itemIds;
    flowers.forEach((flower) => {
        event
            .addBlockLootModifier(flower)
            .matchMainHand(
                Item.of("kubejs:golden_sickle").withNBT({
                    Enchantments: [{ lvl: 1, id: "kubejs:floral_collection" }],
                })
            )
            .addLoot(Item.of(flower).withChance(0.5));
    });

    event
        .addBlockLootModifier("minecraft:stone")
        .removeLoot("minecraft:cobblestone")
        .matchMainHand(Item.of("minecraft:wooden_pickaxe"))
        .addWeightedLoot(
            [1, 4],
            [
                Item.of("twigs:pebble").withChance(100),
                Item.of("twigs:pebble").withChance(100),
                Item.of("twigs:pebble").withChance(50),
                Item.of("twigs:pebble").withChance(50),
            ]
        );
    event
        .addBlockLootModifier("minecraft:stone")
        .removeLoot("minecraft:cobblestone")
        .matchMainHand(Item.of("kubejs:flower_pickaxe"))
        .addLoot("botania:livingrock");
});
