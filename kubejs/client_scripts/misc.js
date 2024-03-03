ClientEvents.lang("en_us", (e) => {
    e.add("key.darkmana.keys", "NBT Viewer key");
    e.add("key.categories.darkmana", "Dark Mana");
});

ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced(Ingredient.all, (item, advanced, text) => {
        if (global.ALTKEY.down) {
            text.add(Text.of("NBT: ").append(Text.prettyPrintNbt(item.nbt)));
        }
    });
});

ClientEvents.tick((event) => {
    if (global.ALTKEY.down) {
        event.player.tell("Alt key is down");
    }
});
