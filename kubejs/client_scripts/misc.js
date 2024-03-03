ClientEvents.lang("en_us", (e) => {
    e.add("key.darkmana.keys", "NBT Viewer key");
    e.add("key.categories.darkmana", "Dark Mana");
});

ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced(Ingredient.all, (item, advanced, text) => {
        let key = global["ALTKEY"];
        let bind = key.key.getValue();
        let down = Client.isKeyDown(bind);
        if (down && Client.currentScreen != null && item.nbt) {
            text.add(Text.of("Name: ").append(item.id));
            text.add(Text.of("NBT: ").append(Text.prettyPrintNbt(item.nbt)));
        } else if (down && Client.currentScreen != null) {
            text.add(Text.of("Name: ").append(item.id));
        }
    });
});
