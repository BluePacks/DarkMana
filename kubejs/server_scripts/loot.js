LootJS.modifiers((event) => {
    const flowers = Ingredient.of("#minecraft:flowers").itemIds;
    flowers.forEach((flower) => {
        event
            .addBlockLootModifier(flower)
            .matchMainHand(Item.of("kubejs:golden_sickle").ignoreNBT())
            .addLoot(Item.of(flower).withChance(0.5));
    });
});
