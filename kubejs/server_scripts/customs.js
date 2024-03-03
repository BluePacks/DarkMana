ServerEvents.recipes((event) => {
    event.custom({
        type: "lychee:item_inside",
        item_in: {
            item: "kubejs:golden_sickle",
        },
        block_in: {
            blocks: ["kubejs:floral_essence"],
        },
        post: [
            {
                type: "drop_item",
                item: "kubejs:golden_sickle",
                "lychee:tag": {
                    Enchantments: [
                        {
                            id: "kubejs:floral_collection",
                            lvl: 1,
                        },
                    ],
                },
            },
            {
                type: "place",
                block: "*",
            },
        ],
    });
    event.custom({
        type: "lychee:item_burning",
        item_in: {
            item: "kubejs:deadrock",
        },
        post: {
            type: "drop_item",
            item: "botania:livingrock",
        },
    });
    event.custom({
        type: "lychee:item_inside",
        item_in: [
            {
                item: "twigs:pebble",
            },
            {
                item: "twigs:pebble",
            },
            {
                item: "twigs:pebble",
            },
            {
                item: "twigs:pebble",
            },
        ],

        block_in: {
            blocks: ["kubejs:floral_essence"],
        },
        post: [
            {
                type: "drop_item",
                item: "kubejs:deadrock",
            },
        ],
    });
});
