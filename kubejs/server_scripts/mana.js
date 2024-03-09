// KEEP THIS OUTSIDE OF ANY EVENTS
const $ArsCapabilityReg = Java.loadClass(
    "com.hollingsworth.arsnouveau.setup.registry.CapabilityRegistry"
);
const $ArsManaUtil = Java.loadClass(
    "com.hollingsworth.arsnouveau.api.util.ManaUtil"
);
// KEEP THIS OUTSIDE OF ANY EVENTS

function ArsNouveauManaUse(player, manaCost) {
    let mana = $ArsCapabilityReg.getMana(player).orElse(null);
    let currentMana = $ArsManaUtil.getCurrentMana(player);
    if (mana && manaCost <= currentMana) {
        mana.setMana(currentMana - manaCost);
        return true;
    } else {
        return false;
    }
}

ItemEvents.rightClicked((event) => {
    if (event.item == "kubejs:golden_sickle") {
        if (!ArsNouveauManaUse(event.player, 20)) {
            event.cancel();
        } else {
            event.player.tell("Mana used!");
        }
    }
});
