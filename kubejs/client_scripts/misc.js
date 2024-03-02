ClientEvents.lang("en_us", (e) => {
    e.add("key.darkmana.keys", "NBT Viewer key");
    e.add("key.categories.darkmana", "Dark Mana");
});

ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced(Ingredient.all, (item, advanced, text) => {
        if (tooltip.alt && item.nbt) {
            text.add(Text.of("NBT: ").append(Text.prettyPrintNbt(item.nbt)));
        }
    });
});
