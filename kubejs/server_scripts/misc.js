ServerEvents.recipes((event) => {
    event.custom({
        type: "lychee:item_inside",
        item_in: {
            item: "kubejs:golden_sickle",
        },
        block_in: {
            blocks: ["kubejs:floral_essence"],
            state: {
                level: 0,
            },
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
});
