Platform.mods.kubejs.name = "Dark Mana";

const $KeyMappingRegistry = Java.loadClass(
    "dev.architectury.registry.client.keymappings.KeyMappingRegistry"
);
const $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping");
const $GLFWKey = Java.loadClass("org.lwjgl.glfw.GLFW");

ClientEvents.init((event) => {
    global.ALTKEY = new $KeyMapping(
        "key.darkmana.keys",
        $GLFWKey.GLFW_KEY_LEFT_ALT,
        "key.categories.darkmana"
    );
    $KeyMappingRegistry.register(global.ALTKEY);
});
