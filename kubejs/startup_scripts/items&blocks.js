StartupEvents.registry("item", (event) => {
    event.create("mistletoe_sprig");
    event.create("mistletoe_berry");
});

StartupEvents.registry("block", (event) => {
    event.create("mistletoe_bush");
    event.create("deadrock");
});
