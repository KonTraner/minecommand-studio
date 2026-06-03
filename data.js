/* ==========================================================================
   MineCommand Studio - Game Data (Unified & Complete Database)
   ========================================================================== */

// 1. High-Fidelity rendered block and item icons CDN Mappings
function getMobIconPath(mobId) {
    const cleanName = mobId.replace("minecraft:", "").toUpperCase();
    return `https://cdn.jsdelivr.net/gh/Owen1212055/mc-assets@main/entity-assets/flat/${cleanName}.png`;
}

function getItemIconPath(itemId) {
    const cleanName = itemId.replace("minecraft:", "").toUpperCase();
    return `https://cdn.jsdelivr.net/gh/Owen1212055/mc-assets@main/item-assets/${cleanName}.png`;
}

const MC_DATA = {
    // Dynamic Mobs List (Complete living entities)
    mobs: [
        { id: "minecraft:ender_dragon", name: "Ender Dragon", category: "Boss", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:wither", name: "Wither", category: "Boss", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:blaze", name: "Blaze", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:cave_spider", name: "Cave Spider", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:creeper", name: "Creeper", category: "Hostile", special: "creeper", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:drowned", name: "Drowned", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:elder_guardian", name: "Elder Guardian", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:endermite", name: "Endermite", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:evoker", name: "Evoker", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:ghast", name: "Ghast", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:giant", name: "Giant", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:guardian", name: "Guardian", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:hoglin", name: "Hoglin", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:husk", name: "Husk", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:illusioner", name: "Illusioner", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:magma_cube", name: "Magma Cube", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:phantom", name: "Phantom", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:piglin_brute", name: "Piglin Brute", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:pillager", name: "Pillager", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:ravager", name: "Ravager", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:shulker", name: "Shulker", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:silverfish", name: "Silverfish", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:skeleton", name: "Skeleton", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:skeleton_horse", name: "Skeleton Horse", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:slime", name: "Slime", category: "Hostile", special: "slime", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:spider", name: "Spider", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:stray", name: "Stray", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:vex", name: "Vex", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:vindicator", name: "Vindicator", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:warden", name: "Warden", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:witch", name: "Witch", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:wither_skeleton", name: "Wither Skeleton", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:zoglin", name: "Zoglin", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:zombie", name: "Zombie", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:zombie_horse", name: "Zombie Horse", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:zombie_villager", name: "Zombie Villager", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:bee", name: "Bee", category: "Neutral", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:camel", name: "Camel", category: "Neutral", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:dolphin", name: "Dolphin", category: "Neutral", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:enderman", name: "Enderman", category: "Neutral", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:goat", name: "Goat", category: "Neutral", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:llama", name: "Llama", category: "Neutral", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:panda", name: "Panda", category: "Neutral", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:piglin", name: "Piglin", category: "Neutral", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:polar_bear", name: "Polar Bear", category: "Neutral", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:sniffer", name: "Sniffer", category: "Neutral", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:trader_llama", name: "Trader Llama", category: "Neutral", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:wolf", name: "Wolf", category: "Neutral", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:zombified_piglin", name: "Zombified Piglin", category: "Neutral", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:allay", name: "Allay", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:axolotl", name: "Axolotl", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:bat", name: "Bat", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:cat", name: "Cat", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:chicken", name: "Chicken", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:cod", name: "Cod", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:cow", name: "Cow", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:donkey", name: "Donkey", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:fox", name: "Fox", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:frog", name: "Frog", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:glow_squid", name: "Glow Squid", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:horse", name: "Horse", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:mooshroom", name: "Mooshroom", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:mule", name: "Mule", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:ocelot", name: "Ocelot", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:parrot", name: "Parrot", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:pig", name: "Pig", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:pufferfish", name: "Pufferfish", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:rabbit", name: "Rabbit", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:salmon", name: "Salmon", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:sheep", name: "Sheep", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:squid", name: "Squid", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:strider", name: "Strider", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:tadpole", name: "Tadpole", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:tropical_fish", name: "Tropical Fish", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:turtle", name: "Turtle", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:villager", name: "Villager", category: "Passive", special: "villager", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:wandering_trader", name: "Wandering Trader", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:iron_golem", name: "Iron Golem", category: "Utility", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:snow_golem", name: "Snow Golem", category: "Utility", get icon() { return getMobIconPath(this.id); } }
    ],

    // Complete Categorized Items Database
    items: {
        weapons: [
            { id: "minecraft:arrow", name: "Arrow", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bow", name: "Bow", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crossbow", name: "Crossbow", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_sword", name: "Diamond Sword", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_sword", name: "Golden Sword", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_sword", name: "Iron Sword", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherite_sword", name: "Netherite Sword", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:shield", name: "Shield", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spectral_arrow", name: "Spectral Arrow", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stone_sword", name: "Stone Sword", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:tipped_arrow", name: "Tipped Arrow", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:trident", name: "Trident", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:wooden_sword", name: "Wooden Sword", get icon() { return getItemIconPath(this.id); } }
        ],
        helmets: [
            { id: "minecraft:chainmail_helmet", name: "Chainmail Helmet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_helmet", name: "Diamond Helmet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_helmet", name: "Golden Helmet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_helmet", name: "Iron Helmet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:leather_helmet", name: "Leather Cap", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherite_helmet", name: "Netherite Helmet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:turtle_helmet", name: "Turtle Shell", get icon() { return getItemIconPath(this.id); } }
        ],
        chestplates: [
            { id: "minecraft:chainmail_chestplate", name: "Chainmail Chestplate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_chestplate", name: "Diamond Chestplate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:elytra", name: "Elytra", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_chestplate", name: "Golden Chestplate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_chestplate", name: "Iron Chestplate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:leather_chestplate", name: "Leather Tunic", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherite_chestplate", name: "Netherite Chestplate", get icon() { return getItemIconPath(this.id); } }
        ],
        leggings: [
            { id: "minecraft:chainmail_leggings", name: "Chainmail Leggings", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_leggings", name: "Diamond Leggings", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_leggings", name: "Golden Leggings", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_leggings", name: "Iron Leggings", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:leather_leggings", name: "Leather Pants", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherite_leggings", name: "Netherite Leggings", get icon() { return getItemIconPath(this.id); } }
        ],
        boots: [
            { id: "minecraft:chainmail_boots", name: "Chainmail Boots", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_boots", name: "Diamond Boots", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_boots", name: "Golden Boots", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_boots", name: "Iron Boots", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:leather_boots", name: "Leather Boots", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherite_boots", name: "Netherite Boots", get icon() { return getItemIconPath(this.id); } }
        ],
        tools: [
            { id: "minecraft:brush", name: "Brush", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bucket", name: "Bucket", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:axolotl_bucket", name: "Bucket of Axolotl", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cod_bucket", name: "Bucket of Cod", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pufferfish_bucket", name: "Bucket of Pufferfish", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:salmon_bucket", name: "Bucket of Salmon", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:tadpole_bucket", name: "Bucket of Tadpole", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:tropical_fish_bucket", name: "Bucket of Tropical Fish", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:carrot_on_a_stick", name: "Carrot on a Stick", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:clock", name: "Clock", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:compass", name: "Compass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_axe", name: "Diamond Axe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_hoe", name: "Diamond Hoe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_pickaxe", name: "Diamond Pickaxe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_shovel", name: "Diamond Shovel", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:firework_rocket", name: "Firework Rocket", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:fishing_rod", name: "Fishing Rod", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:flint_and_steel", name: "Flint and Steel", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:goat_horn", name: "Goat Horn", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_axe", name: "Golden Axe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_hoe", name: "Golden Hoe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_pickaxe", name: "Golden Pickaxe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_shovel", name: "Golden Shovel", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_axe", name: "Iron Axe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_hoe", name: "Iron Hoe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_pickaxe", name: "Iron Pickaxe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_shovel", name: "Iron Shovel", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lava_bucket", name: "Lava Bucket", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lead", name: "Lead", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:milk_bucket", name: "Milk Bucket", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:name_tag", name: "Name Tag", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherite_axe", name: "Netherite Axe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherite_hoe", name: "Netherite Hoe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherite_pickaxe", name: "Netherite Pickaxe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherite_shovel", name: "Netherite Shovel", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:powder_snow_bucket", name: "Powder Snow Bucket", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:recovery_compass", name: "Recovery Compass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:saddle", name: "Saddle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:shears", name: "Shears", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spyglass", name: "Spyglass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stone_axe", name: "Stone Axe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stone_hoe", name: "Stone Hoe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stone_pickaxe", name: "Stone Pickaxe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stone_shovel", name: "Stone Shovel", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:warped_fungus_on_a_stick", name: "Warped Fungus on a Stick", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:water_bucket", name: "Water Bucket", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:wooden_axe", name: "Wooden Axe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:wooden_hoe", name: "Wooden Hoe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:wooden_pickaxe", name: "Wooden Pickaxe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:wooden_shovel", name: "Wooden Shovel", get icon() { return getItemIconPath(this.id); } }
        ],
        blocks: [
            { id: "minecraft:acacia_button", name: "Acacia Button", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:acacia_door", name: "Acacia Door", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:acacia_fence", name: "Acacia Fence", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:acacia_fence_gate", name: "Acacia Fence Gate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:acacia_hanging_sign", name: "Acacia Hanging Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:acacia_leaves", name: "Acacia Leaves", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:acacia_log", name: "Acacia Log", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:acacia_planks", name: "Acacia Planks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:acacia_pressure_plate", name: "Acacia Pressure Plate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:acacia_sapling", name: "Acacia Sapling", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:acacia_sign", name: "Acacia Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:acacia_slab", name: "Acacia Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:acacia_stairs", name: "Acacia Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:acacia_trapdoor", name: "Acacia Trapdoor", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:acacia_wood", name: "Acacia Wood", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:activator_rail", name: "Activator Rail", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:allium", name: "Allium", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:amethyst_cluster", name: "Amethyst Cluster", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:ancient_debris", name: "Ancient Debris", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:andesite", name: "Andesite", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:andesite_slab", name: "Andesite Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:andesite_stairs", name: "Andesite Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:andesite_wall", name: "Andesite Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:anvil", name: "Anvil", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:azalea", name: "Azalea", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:azalea_leaves", name: "Azalea Leaves", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:azure_bluet", name: "Azure Bluet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bamboo", name: "Bamboo", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bamboo_button", name: "Bamboo Button", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bamboo_door", name: "Bamboo Door", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bamboo_fence", name: "Bamboo Fence", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bamboo_fence_gate", name: "Bamboo Fence Gate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bamboo_hanging_sign", name: "Bamboo Hanging Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bamboo_mosaic", name: "Bamboo Mosaic", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bamboo_mosaic_slab", name: "Bamboo Mosaic Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bamboo_mosaic_stairs", name: "Bamboo Mosaic Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bamboo_planks", name: "Bamboo Planks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bamboo_pressure_plate", name: "Bamboo Pressure Plate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bamboo_sign", name: "Bamboo Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bamboo_slab", name: "Bamboo Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bamboo_stairs", name: "Bamboo Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bamboo_trapdoor", name: "Bamboo Trapdoor", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:barrel", name: "Barrel", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:barrier", name: "Barrier", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:basalt", name: "Basalt", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:beacon", name: "Beacon", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bedrock", name: "Bedrock", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bee_nest", name: "Bee Nest", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:beehive", name: "Beehive", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bell", name: "Bell", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:big_dripleaf", name: "Big Dripleaf", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:birch_button", name: "Birch Button", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:birch_door", name: "Birch Door", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:birch_fence", name: "Birch Fence", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:birch_fence_gate", name: "Birch Fence Gate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:birch_hanging_sign", name: "Birch Hanging Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:birch_leaves", name: "Birch Leaves", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:birch_log", name: "Birch Log", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:birch_planks", name: "Birch Planks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:birch_pressure_plate", name: "Birch Pressure Plate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:birch_sapling", name: "Birch Sapling", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:birch_sign", name: "Birch Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:birch_slab", name: "Birch Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:birch_stairs", name: "Birch Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:birch_trapdoor", name: "Birch Trapdoor", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:birch_wood", name: "Birch Wood", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:black_banner", name: "Black Banner", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:black_bed", name: "Black Bed", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:black_candle", name: "Black Candle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:black_carpet", name: "Black Carpet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:black_concrete", name: "Black Concrete", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:black_concrete_powder", name: "Black Concrete Powder", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:black_glazed_terracotta", name: "Black Glazed Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:black_shulker_box", name: "Black Shulker Box", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:black_stained_glass", name: "Black Stained Glass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:black_stained_glass_pane", name: "Black Stained Glass Pane", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:black_terracotta", name: "Black Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:black_wool", name: "Black Wool", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blackstone", name: "Blackstone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blackstone_slab", name: "Blackstone Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blackstone_stairs", name: "Blackstone Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blackstone_wall", name: "Blackstone Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blast_furnace", name: "Blast Furnace", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:amethyst_block", name: "Block of Amethyst", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bamboo_block", name: "Block of Bamboo", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:coal_block", name: "Block of Coal", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:copper_block", name: "Block of Copper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_block", name: "Block of Diamond", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:emerald_block", name: "Block of Emerald", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gold_block", name: "Block of Gold", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_block", name: "Block of Iron", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lapis_block", name: "Block of Lapis Lazuli", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherite_block", name: "Block of Netherite", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:quartz_block", name: "Block of Quartz", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:raw_copper_block", name: "Block of Raw Copper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:raw_gold_block", name: "Block of Raw Gold", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:raw_iron_block", name: "Block of Raw Iron", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:redstone_block", name: "Block of Redstone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_bamboo_block", name: "Block of Stripped Bamboo", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blue_banner", name: "Blue Banner", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blue_bed", name: "Blue Bed", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blue_candle", name: "Blue Candle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blue_carpet", name: "Blue Carpet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blue_concrete", name: "Blue Concrete", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blue_concrete_powder", name: "Blue Concrete Powder", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blue_glazed_terracotta", name: "Blue Glazed Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blue_ice", name: "Blue Ice", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blue_orchid", name: "Blue Orchid", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blue_shulker_box", name: "Blue Shulker Box", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blue_stained_glass", name: "Blue Stained Glass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blue_stained_glass_pane", name: "Blue Stained Glass Pane", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blue_terracotta", name: "Blue Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blue_wool", name: "Blue Wool", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bone_block", name: "Bone Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bookshelf", name: "Bookshelf", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brain_coral", name: "Brain Coral", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brain_coral_block", name: "Brain Coral Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brain_coral_fan", name: "Brain Coral Fan", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brewing_stand", name: "Brewing Stand", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brick_slab", name: "Brick Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brick_stairs", name: "Brick Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brick_wall", name: "Brick Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bricks", name: "Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brown_banner", name: "Brown Banner", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brown_bed", name: "Brown Bed", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brown_candle", name: "Brown Candle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brown_carpet", name: "Brown Carpet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brown_concrete", name: "Brown Concrete", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brown_concrete_powder", name: "Brown Concrete Powder", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brown_glazed_terracotta", name: "Brown Glazed Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brown_mushroom", name: "Brown Mushroom", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brown_mushroom_block", name: "Brown Mushroom Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brown_shulker_box", name: "Brown Shulker Box", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brown_stained_glass", name: "Brown Stained Glass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brown_stained_glass_pane", name: "Brown Stained Glass Pane", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brown_terracotta", name: "Brown Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brown_wool", name: "Brown Wool", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bubble_coral", name: "Bubble Coral", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bubble_coral_block", name: "Bubble Coral Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bubble_coral_fan", name: "Bubble Coral Fan", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:budding_amethyst", name: "Budding Amethyst", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cactus", name: "Cactus", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cake", name: "Cake", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:calcite", name: "Calcite", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:calibrated_sculk_sensor", name: "Calibrated Sculk Sensor", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:campfire", name: "Campfire", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:candle", name: "Candle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cartography_table", name: "Cartography Table", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:carved_pumpkin", name: "Carved Pumpkin", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cauldron", name: "Cauldron", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chain", name: "Chain", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chain_command_block", name: "Chain Command Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cherry_button", name: "Cherry Button", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cherry_door", name: "Cherry Door", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cherry_fence", name: "Cherry Fence", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cherry_fence_gate", name: "Cherry Fence Gate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cherry_hanging_sign", name: "Cherry Hanging Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cherry_leaves", name: "Cherry Leaves", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cherry_log", name: "Cherry Log", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cherry_planks", name: "Cherry Planks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cherry_pressure_plate", name: "Cherry Pressure Plate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cherry_sapling", name: "Cherry Sapling", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cherry_sign", name: "Cherry Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cherry_slab", name: "Cherry Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cherry_stairs", name: "Cherry Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cherry_trapdoor", name: "Cherry Trapdoor", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cherry_wood", name: "Cherry Wood", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chest", name: "Chest", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chipped_anvil", name: "Chipped Anvil", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chiseled_bookshelf", name: "Chiseled Bookshelf", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chiseled_deepslate", name: "Chiseled Deepslate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chiseled_nether_bricks", name: "Chiseled Nether Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chiseled_polished_blackstone", name: "Chiseled Polished Blackstone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chiseled_quartz_block", name: "Chiseled Quartz Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chiseled_red_sandstone", name: "Chiseled Red Sandstone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chiseled_sandstone", name: "Chiseled Sandstone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chiseled_stone_bricks", name: "Chiseled Stone Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chorus_flower", name: "Chorus Flower", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chorus_plant", name: "Chorus Plant", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:clay", name: "Clay", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:coal_ore", name: "Coal Ore", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:coarse_dirt", name: "Coarse Dirt", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cobbled_deepslate", name: "Cobbled Deepslate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cobbled_deepslate_slab", name: "Cobbled Deepslate Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cobbled_deepslate_stairs", name: "Cobbled Deepslate Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cobbled_deepslate_wall", name: "Cobbled Deepslate Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cobblestone", name: "Cobblestone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cobblestone_slab", name: "Cobblestone Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cobblestone_stairs", name: "Cobblestone Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cobblestone_wall", name: "Cobblestone Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cobweb", name: "Cobweb", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:command_block", name: "Command Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:composter", name: "Composter", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:conduit", name: "Conduit", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:copper_ore", name: "Copper Ore", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cornflower", name: "Cornflower", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cracked_deepslate_bricks", name: "Cracked Deepslate Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cracked_deepslate_tiles", name: "Cracked Deepslate Tiles", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cracked_nether_bricks", name: "Cracked Nether Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cracked_polished_blackstone_bricks", name: "Cracked Polished Blackstone Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cracked_stone_bricks", name: "Cracked Stone Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crafting_table", name: "Crafting Table", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:creeper_head", name: "Creeper Head", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crimson_button", name: "Crimson Button", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crimson_door", name: "Crimson Door", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crimson_fence", name: "Crimson Fence", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crimson_fence_gate", name: "Crimson Fence Gate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crimson_fungus", name: "Crimson Fungus", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crimson_hanging_sign", name: "Crimson Hanging Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crimson_hyphae", name: "Crimson Hyphae", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crimson_nylium", name: "Crimson Nylium", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crimson_planks", name: "Crimson Planks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crimson_pressure_plate", name: "Crimson Pressure Plate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crimson_roots", name: "Crimson Roots", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crimson_sign", name: "Crimson Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crimson_slab", name: "Crimson Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crimson_stairs", name: "Crimson Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crimson_stem", name: "Crimson Stem", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crimson_trapdoor", name: "Crimson Trapdoor", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crying_obsidian", name: "Crying Obsidian", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cut_copper", name: "Cut Copper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cut_copper_slab", name: "Cut Copper Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cut_copper_stairs", name: "Cut Copper Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cut_red_sandstone", name: "Cut Red Sandstone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cut_red_sandstone_slab", name: "Cut Red Sandstone Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cut_sandstone", name: "Cut Sandstone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cut_sandstone_slab", name: "Cut Sandstone Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cyan_banner", name: "Cyan Banner", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cyan_bed", name: "Cyan Bed", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cyan_candle", name: "Cyan Candle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cyan_carpet", name: "Cyan Carpet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cyan_concrete", name: "Cyan Concrete", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cyan_concrete_powder", name: "Cyan Concrete Powder", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cyan_glazed_terracotta", name: "Cyan Glazed Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cyan_shulker_box", name: "Cyan Shulker Box", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cyan_stained_glass", name: "Cyan Stained Glass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cyan_stained_glass_pane", name: "Cyan Stained Glass Pane", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cyan_terracotta", name: "Cyan Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cyan_wool", name: "Cyan Wool", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:damaged_anvil", name: "Damaged Anvil", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dandelion", name: "Dandelion", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_oak_button", name: "Dark Oak Button", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_oak_door", name: "Dark Oak Door", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_oak_fence", name: "Dark Oak Fence", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_oak_fence_gate", name: "Dark Oak Fence Gate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_oak_hanging_sign", name: "Dark Oak Hanging Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_oak_leaves", name: "Dark Oak Leaves", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_oak_log", name: "Dark Oak Log", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_oak_planks", name: "Dark Oak Planks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_oak_pressure_plate", name: "Dark Oak Pressure Plate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_oak_sapling", name: "Dark Oak Sapling", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_oak_sign", name: "Dark Oak Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_oak_slab", name: "Dark Oak Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_oak_stairs", name: "Dark Oak Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_oak_trapdoor", name: "Dark Oak Trapdoor", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_oak_wood", name: "Dark Oak Wood", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_prismarine", name: "Dark Prismarine", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_prismarine_slab", name: "Dark Prismarine Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_prismarine_stairs", name: "Dark Prismarine Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:daylight_detector", name: "Daylight Detector", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dead_brain_coral", name: "Dead Brain Coral", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dead_brain_coral_block", name: "Dead Brain Coral Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dead_brain_coral_fan", name: "Dead Brain Coral Fan", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dead_bubble_coral", name: "Dead Bubble Coral", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dead_bubble_coral_block", name: "Dead Bubble Coral Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dead_bubble_coral_fan", name: "Dead Bubble Coral Fan", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dead_bush", name: "Dead Bush", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dead_fire_coral", name: "Dead Fire Coral", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dead_fire_coral_block", name: "Dead Fire Coral Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dead_fire_coral_fan", name: "Dead Fire Coral Fan", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dead_horn_coral", name: "Dead Horn Coral", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dead_horn_coral_block", name: "Dead Horn Coral Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dead_horn_coral_fan", name: "Dead Horn Coral Fan", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dead_tube_coral", name: "Dead Tube Coral", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dead_tube_coral_block", name: "Dead Tube Coral Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dead_tube_coral_fan", name: "Dead Tube Coral Fan", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:decorated_pot", name: "Decorated Pot", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:deepslate", name: "Deepslate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:deepslate_brick_slab", name: "Deepslate Brick Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:deepslate_brick_stairs", name: "Deepslate Brick Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:deepslate_brick_wall", name: "Deepslate Brick Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:deepslate_bricks", name: "Deepslate Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:deepslate_coal_ore", name: "Deepslate Coal Ore", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:deepslate_copper_ore", name: "Deepslate Copper Ore", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:deepslate_diamond_ore", name: "Deepslate Diamond Ore", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:deepslate_emerald_ore", name: "Deepslate Emerald Ore", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:deepslate_gold_ore", name: "Deepslate Gold Ore", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:deepslate_iron_ore", name: "Deepslate Iron Ore", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:deepslate_lapis_ore", name: "Deepslate Lapis Lazuli Ore", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:deepslate_redstone_ore", name: "Deepslate Redstone Ore", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:deepslate_tile_slab", name: "Deepslate Tile Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:deepslate_tile_stairs", name: "Deepslate Tile Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:deepslate_tile_wall", name: "Deepslate Tile Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:deepslate_tiles", name: "Deepslate Tiles", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:detector_rail", name: "Detector Rail", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_ore", name: "Diamond Ore", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diorite", name: "Diorite", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diorite_slab", name: "Diorite Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diorite_stairs", name: "Diorite Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diorite_wall", name: "Diorite Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dirt", name: "Dirt", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dirt_path", name: "Dirt Path", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dispenser", name: "Dispenser", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dragon_egg", name: "Dragon Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dragon_head", name: "Dragon Head", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dried_kelp_block", name: "Dried Kelp Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dripstone_block", name: "Dripstone Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dropper", name: "Dropper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:emerald_ore", name: "Emerald Ore", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:enchanting_table", name: "Enchanting Table", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:end_portal_frame", name: "End Portal Frame", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:end_rod", name: "End Rod", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:end_stone", name: "End Stone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:end_stone_brick_slab", name: "End Stone Brick Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:end_stone_brick_stairs", name: "End Stone Brick Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:end_stone_brick_wall", name: "End Stone Brick Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:end_stone_bricks", name: "End Stone Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:ender_chest", name: "Ender Chest", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:exposed_copper", name: "Exposed Copper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:exposed_cut_copper", name: "Exposed Cut Copper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:exposed_cut_copper_slab", name: "Exposed Cut Copper Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:exposed_cut_copper_stairs", name: "Exposed Cut Copper Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:farmland", name: "Farmland", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:fern", name: "Fern", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:fire_coral", name: "Fire Coral", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:fire_coral_block", name: "Fire Coral Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:fire_coral_fan", name: "Fire Coral Fan", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:fletching_table", name: "Fletching Table", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:flower_pot", name: "Flower Pot", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:flowering_azalea", name: "Flowering Azalea", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:flowering_azalea_leaves", name: "Flowering Azalea Leaves", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:frogspawn", name: "Frogspawn", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:furnace", name: "Furnace", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gilded_blackstone", name: "Gilded Blackstone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:glass", name: "Glass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:glass_pane", name: "Glass Pane", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:glow_lichen", name: "Glow Lichen", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:glowstone", name: "Glowstone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gold_ore", name: "Gold Ore", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:granite", name: "Granite", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:granite_slab", name: "Granite Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:granite_stairs", name: "Granite Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:granite_wall", name: "Granite Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:grass", name: "Grass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:grass_block", name: "Grass Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gravel", name: "Gravel", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gray_banner", name: "Gray Banner", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gray_bed", name: "Gray Bed", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gray_candle", name: "Gray Candle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gray_carpet", name: "Gray Carpet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gray_concrete", name: "Gray Concrete", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gray_concrete_powder", name: "Gray Concrete Powder", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gray_glazed_terracotta", name: "Gray Glazed Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gray_shulker_box", name: "Gray Shulker Box", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gray_stained_glass", name: "Gray Stained Glass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gray_stained_glass_pane", name: "Gray Stained Glass Pane", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gray_terracotta", name: "Gray Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gray_wool", name: "Gray Wool", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:green_banner", name: "Green Banner", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:green_bed", name: "Green Bed", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:green_candle", name: "Green Candle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:green_carpet", name: "Green Carpet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:green_concrete", name: "Green Concrete", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:green_concrete_powder", name: "Green Concrete Powder", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:green_glazed_terracotta", name: "Green Glazed Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:green_shulker_box", name: "Green Shulker Box", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:green_stained_glass", name: "Green Stained Glass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:green_stained_glass_pane", name: "Green Stained Glass Pane", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:green_terracotta", name: "Green Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:green_wool", name: "Green Wool", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:grindstone", name: "Grindstone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:hanging_roots", name: "Hanging Roots", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:hay_block", name: "Hay Bale", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:heavy_weighted_pressure_plate", name: "Heavy Weighted Pressure Plate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:honey_block", name: "Honey Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:honeycomb_block", name: "Honeycomb Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:hopper", name: "Hopper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:horn_coral", name: "Horn Coral", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:horn_coral_block", name: "Horn Coral Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:horn_coral_fan", name: "Horn Coral Fan", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:ice", name: "Ice", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:infested_chiseled_stone_bricks", name: "Infested Chiseled Stone Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:infested_cobblestone", name: "Infested Cobblestone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:infested_cracked_stone_bricks", name: "Infested Cracked Stone Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:infested_deepslate", name: "Infested Deepslate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:infested_mossy_stone_bricks", name: "Infested Mossy Stone Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:infested_stone", name: "Infested Stone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:infested_stone_bricks", name: "Infested Stone Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_bars", name: "Iron Bars", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_door", name: "Iron Door", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_ore", name: "Iron Ore", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_trapdoor", name: "Iron Trapdoor", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jack_o_lantern", name: "Jack o'Lantern", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jigsaw", name: "Jigsaw Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jukebox", name: "Jukebox", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jungle_button", name: "Jungle Button", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jungle_door", name: "Jungle Door", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jungle_fence", name: "Jungle Fence", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jungle_fence_gate", name: "Jungle Fence Gate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jungle_hanging_sign", name: "Jungle Hanging Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jungle_leaves", name: "Jungle Leaves", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jungle_log", name: "Jungle Log", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jungle_planks", name: "Jungle Planks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jungle_pressure_plate", name: "Jungle Pressure Plate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jungle_sapling", name: "Jungle Sapling", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jungle_sign", name: "Jungle Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jungle_slab", name: "Jungle Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jungle_stairs", name: "Jungle Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jungle_trapdoor", name: "Jungle Trapdoor", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jungle_wood", name: "Jungle Wood", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:kelp", name: "Kelp", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:ladder", name: "Ladder", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lantern", name: "Lantern", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lapis_ore", name: "Lapis Lazuli Ore", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:large_amethyst_bud", name: "Large Amethyst Bud", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:large_fern", name: "Large Fern", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lectern", name: "Lectern", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lever", name: "Lever", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light", name: "Light", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_blue_banner", name: "Light Blue Banner", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_blue_bed", name: "Light Blue Bed", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_blue_candle", name: "Light Blue Candle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_blue_carpet", name: "Light Blue Carpet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_blue_concrete", name: "Light Blue Concrete", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_blue_concrete_powder", name: "Light Blue Concrete Powder", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_blue_glazed_terracotta", name: "Light Blue Glazed Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_blue_shulker_box", name: "Light Blue Shulker Box", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_blue_stained_glass", name: "Light Blue Stained Glass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_blue_stained_glass_pane", name: "Light Blue Stained Glass Pane", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_blue_terracotta", name: "Light Blue Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_blue_wool", name: "Light Blue Wool", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_gray_banner", name: "Light Gray Banner", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_gray_bed", name: "Light Gray Bed", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_gray_candle", name: "Light Gray Candle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_gray_carpet", name: "Light Gray Carpet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_gray_concrete", name: "Light Gray Concrete", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_gray_concrete_powder", name: "Light Gray Concrete Powder", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_gray_glazed_terracotta", name: "Light Gray Glazed Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_gray_shulker_box", name: "Light Gray Shulker Box", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_gray_stained_glass", name: "Light Gray Stained Glass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_gray_stained_glass_pane", name: "Light Gray Stained Glass Pane", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_gray_terracotta", name: "Light Gray Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_gray_wool", name: "Light Gray Wool", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_weighted_pressure_plate", name: "Light Weighted Pressure Plate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lightning_rod", name: "Lightning Rod", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lilac", name: "Lilac", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lily_of_the_valley", name: "Lily of the Valley", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lily_pad", name: "Lily Pad", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lime_banner", name: "Lime Banner", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lime_bed", name: "Lime Bed", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lime_candle", name: "Lime Candle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lime_carpet", name: "Lime Carpet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lime_concrete", name: "Lime Concrete", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lime_concrete_powder", name: "Lime Concrete Powder", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lime_glazed_terracotta", name: "Lime Glazed Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lime_shulker_box", name: "Lime Shulker Box", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lime_stained_glass", name: "Lime Stained Glass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lime_stained_glass_pane", name: "Lime Stained Glass Pane", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lime_terracotta", name: "Lime Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lime_wool", name: "Lime Wool", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lodestone", name: "Lodestone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:loom", name: "Loom", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:magenta_banner", name: "Magenta Banner", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:magenta_bed", name: "Magenta Bed", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:magenta_candle", name: "Magenta Candle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:magenta_carpet", name: "Magenta Carpet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:magenta_concrete", name: "Magenta Concrete", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:magenta_concrete_powder", name: "Magenta Concrete Powder", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:magenta_glazed_terracotta", name: "Magenta Glazed Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:magenta_shulker_box", name: "Magenta Shulker Box", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:magenta_stained_glass", name: "Magenta Stained Glass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:magenta_stained_glass_pane", name: "Magenta Stained Glass Pane", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:magenta_terracotta", name: "Magenta Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:magenta_wool", name: "Magenta Wool", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:magma_block", name: "Magma Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mangrove_button", name: "Mangrove Button", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mangrove_door", name: "Mangrove Door", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mangrove_fence", name: "Mangrove Fence", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mangrove_fence_gate", name: "Mangrove Fence Gate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mangrove_hanging_sign", name: "Mangrove Hanging Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mangrove_leaves", name: "Mangrove Leaves", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mangrove_log", name: "Mangrove Log", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mangrove_planks", name: "Mangrove Planks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mangrove_pressure_plate", name: "Mangrove Pressure Plate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mangrove_propagule", name: "Mangrove Propagule", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mangrove_roots", name: "Mangrove Roots", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mangrove_sign", name: "Mangrove Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mangrove_slab", name: "Mangrove Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mangrove_stairs", name: "Mangrove Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mangrove_trapdoor", name: "Mangrove Trapdoor", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mangrove_wood", name: "Mangrove Wood", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:medium_amethyst_bud", name: "Medium Amethyst Bud", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:melon", name: "Melon", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spawner", name: "Monster Spawner", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:moss_block", name: "Moss Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:moss_carpet", name: "Moss Carpet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mossy_cobblestone", name: "Mossy Cobblestone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mossy_cobblestone_slab", name: "Mossy Cobblestone Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mossy_cobblestone_stairs", name: "Mossy Cobblestone Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mossy_cobblestone_wall", name: "Mossy Cobblestone Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mossy_stone_brick_slab", name: "Mossy Stone Brick Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mossy_stone_brick_stairs", name: "Mossy Stone Brick Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mossy_stone_brick_wall", name: "Mossy Stone Brick Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mossy_stone_bricks", name: "Mossy Stone Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mud", name: "Mud", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mud_brick_slab", name: "Mud Brick Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mud_brick_stairs", name: "Mud Brick Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mud_brick_wall", name: "Mud Brick Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mud_bricks", name: "Mud Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:muddy_mangrove_roots", name: "Muddy Mangrove Roots", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mushroom_stem", name: "Mushroom Stem", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mycelium", name: "Mycelium", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:nether_brick_fence", name: "Nether Brick Fence", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:nether_brick_slab", name: "Nether Brick Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:nether_brick_stairs", name: "Nether Brick Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:nether_brick_wall", name: "Nether Brick Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:nether_bricks", name: "Nether Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:nether_gold_ore", name: "Nether Gold Ore", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:nether_quartz_ore", name: "Nether Quartz Ore", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:nether_sprouts", name: "Nether Sprouts", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:nether_wart", name: "Nether Wart", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:nether_wart_block", name: "Nether Wart Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherrack", name: "Netherrack", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:note_block", name: "Note Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oak_button", name: "Oak Button", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oak_door", name: "Oak Door", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oak_fence", name: "Oak Fence", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oak_fence_gate", name: "Oak Fence Gate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oak_hanging_sign", name: "Oak Hanging Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oak_leaves", name: "Oak Leaves", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oak_log", name: "Oak Log", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oak_planks", name: "Oak Planks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oak_pressure_plate", name: "Oak Pressure Plate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oak_sapling", name: "Oak Sapling", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oak_sign", name: "Oak Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oak_slab", name: "Oak Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oak_stairs", name: "Oak Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oak_trapdoor", name: "Oak Trapdoor", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oak_wood", name: "Oak Wood", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:observer", name: "Observer", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:obsidian", name: "Obsidian", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:ochre_froglight", name: "Ochre Froglight", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:orange_banner", name: "Orange Banner", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:orange_bed", name: "Orange Bed", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:orange_candle", name: "Orange Candle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:orange_carpet", name: "Orange Carpet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:orange_concrete", name: "Orange Concrete", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:orange_concrete_powder", name: "Orange Concrete Powder", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:orange_glazed_terracotta", name: "Orange Glazed Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:orange_shulker_box", name: "Orange Shulker Box", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:orange_stained_glass", name: "Orange Stained Glass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:orange_stained_glass_pane", name: "Orange Stained Glass Pane", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:orange_terracotta", name: "Orange Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:orange_tulip", name: "Orange Tulip", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:orange_wool", name: "Orange Wool", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oxeye_daisy", name: "Oxeye Daisy", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oxidized_copper", name: "Oxidized Copper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oxidized_cut_copper", name: "Oxidized Cut Copper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oxidized_cut_copper_slab", name: "Oxidized Cut Copper Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oxidized_cut_copper_stairs", name: "Oxidized Cut Copper Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:packed_ice", name: "Packed Ice", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:packed_mud", name: "Packed Mud", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pearlescent_froglight", name: "Pearlescent Froglight", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:peony", name: "Peony", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:petrified_oak_slab", name: "Petrified Oak Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:piglin_head", name: "Piglin Head", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pink_banner", name: "Pink Banner", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pink_bed", name: "Pink Bed", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pink_candle", name: "Pink Candle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pink_carpet", name: "Pink Carpet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pink_concrete", name: "Pink Concrete", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pink_concrete_powder", name: "Pink Concrete Powder", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pink_glazed_terracotta", name: "Pink Glazed Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pink_petals", name: "Pink Petals", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pink_shulker_box", name: "Pink Shulker Box", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pink_stained_glass", name: "Pink Stained Glass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pink_stained_glass_pane", name: "Pink Stained Glass Pane", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pink_terracotta", name: "Pink Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pink_tulip", name: "Pink Tulip", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pink_wool", name: "Pink Wool", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:piston", name: "Piston", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pitcher_plant", name: "Pitcher Plant", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:player_head", name: "Player Head", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:podzol", name: "Podzol", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pointed_dripstone", name: "Pointed Dripstone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_andesite", name: "Polished Andesite", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_andesite_slab", name: "Polished Andesite Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_andesite_stairs", name: "Polished Andesite Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_basalt", name: "Polished Basalt", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_blackstone", name: "Polished Blackstone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_blackstone_brick_slab", name: "Polished Blackstone Brick Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_blackstone_brick_stairs", name: "Polished Blackstone Brick Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_blackstone_brick_wall", name: "Polished Blackstone Brick Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_blackstone_bricks", name: "Polished Blackstone Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_blackstone_button", name: "Polished Blackstone Button", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_blackstone_pressure_plate", name: "Polished Blackstone Pressure Plate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_blackstone_slab", name: "Polished Blackstone Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_blackstone_stairs", name: "Polished Blackstone Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_blackstone_wall", name: "Polished Blackstone Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_deepslate", name: "Polished Deepslate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_deepslate_slab", name: "Polished Deepslate Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_deepslate_stairs", name: "Polished Deepslate Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_deepslate_wall", name: "Polished Deepslate Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_diorite", name: "Polished Diorite", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_diorite_slab", name: "Polished Diorite Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_diorite_stairs", name: "Polished Diorite Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_granite", name: "Polished Granite", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_granite_slab", name: "Polished Granite Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polished_granite_stairs", name: "Polished Granite Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:poppy", name: "Poppy", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:powered_rail", name: "Powered Rail", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:prismarine", name: "Prismarine", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:prismarine_brick_slab", name: "Prismarine Brick Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:prismarine_brick_stairs", name: "Prismarine Brick Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:prismarine_bricks", name: "Prismarine Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:prismarine_slab", name: "Prismarine Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:prismarine_stairs", name: "Prismarine Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:prismarine_wall", name: "Prismarine Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pumpkin", name: "Pumpkin", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:purple_banner", name: "Purple Banner", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:purple_bed", name: "Purple Bed", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:purple_candle", name: "Purple Candle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:purple_carpet", name: "Purple Carpet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:purple_concrete", name: "Purple Concrete", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:purple_concrete_powder", name: "Purple Concrete Powder", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:purple_glazed_terracotta", name: "Purple Glazed Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:purple_shulker_box", name: "Purple Shulker Box", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:purple_stained_glass", name: "Purple Stained Glass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:purple_stained_glass_pane", name: "Purple Stained Glass Pane", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:purple_terracotta", name: "Purple Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:purple_wool", name: "Purple Wool", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:purpur_block", name: "Purpur Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:purpur_pillar", name: "Purpur Pillar", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:purpur_slab", name: "Purpur Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:purpur_stairs", name: "Purpur Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:quartz_bricks", name: "Quartz Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:quartz_pillar", name: "Quartz Pillar", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:quartz_slab", name: "Quartz Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:quartz_stairs", name: "Quartz Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:rail", name: "Rail", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_banner", name: "Red Banner", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_bed", name: "Red Bed", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_candle", name: "Red Candle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_carpet", name: "Red Carpet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_concrete", name: "Red Concrete", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_concrete_powder", name: "Red Concrete Powder", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_glazed_terracotta", name: "Red Glazed Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_mushroom", name: "Red Mushroom", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_mushroom_block", name: "Red Mushroom Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_nether_brick_slab", name: "Red Nether Brick Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_nether_brick_stairs", name: "Red Nether Brick Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_nether_brick_wall", name: "Red Nether Brick Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_nether_bricks", name: "Red Nether Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_sand", name: "Red Sand", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_sandstone", name: "Red Sandstone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_sandstone_slab", name: "Red Sandstone Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_sandstone_stairs", name: "Red Sandstone Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_sandstone_wall", name: "Red Sandstone Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_shulker_box", name: "Red Shulker Box", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_stained_glass", name: "Red Stained Glass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_stained_glass_pane", name: "Red Stained Glass Pane", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_terracotta", name: "Red Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_tulip", name: "Red Tulip", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_wool", name: "Red Wool", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:comparator", name: "Redstone Comparator", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:redstone_lamp", name: "Redstone Lamp", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:redstone_ore", name: "Redstone Ore", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:repeater", name: "Redstone Repeater", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:redstone_torch", name: "Redstone Torch", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:reinforced_deepslate", name: "Reinforced Deepslate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:repeating_command_block", name: "Repeating Command Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:respawn_anchor", name: "Respawn Anchor", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:rooted_dirt", name: "Rooted Dirt", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:rose_bush", name: "Rose Bush", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sand", name: "Sand", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sandstone", name: "Sandstone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sandstone_slab", name: "Sandstone Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sandstone_stairs", name: "Sandstone Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sandstone_wall", name: "Sandstone Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:scaffolding", name: "Scaffolding", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sculk", name: "Sculk", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sculk_catalyst", name: "Sculk Catalyst", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sculk_sensor", name: "Sculk Sensor", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sculk_shrieker", name: "Sculk Shrieker", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sculk_vein", name: "Sculk Vein", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sea_lantern", name: "Sea Lantern", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sea_pickle", name: "Sea Pickle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:seagrass", name: "Seagrass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:shroomlight", name: "Shroomlight", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:shulker_box", name: "Shulker Box", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:skeleton_skull", name: "Skeleton Skull", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:slime_block", name: "Slime Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:small_amethyst_bud", name: "Small Amethyst Bud", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:small_dripleaf", name: "Small Dripleaf", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:smithing_table", name: "Smithing Table", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:smoker", name: "Smoker", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:smooth_basalt", name: "Smooth Basalt", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:smooth_quartz", name: "Smooth Quartz Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:smooth_quartz_slab", name: "Smooth Quartz Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:smooth_quartz_stairs", name: "Smooth Quartz Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:smooth_red_sandstone", name: "Smooth Red Sandstone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:smooth_red_sandstone_slab", name: "Smooth Red Sandstone Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:smooth_red_sandstone_stairs", name: "Smooth Red Sandstone Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:smooth_sandstone", name: "Smooth Sandstone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:smooth_sandstone_slab", name: "Smooth Sandstone Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:smooth_sandstone_stairs", name: "Smooth Sandstone Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:smooth_stone", name: "Smooth Stone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:smooth_stone_slab", name: "Smooth Stone Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sniffer_egg", name: "Sniffer Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:snow", name: "Snow", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:snow_block", name: "Snow Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:soul_campfire", name: "Soul Campfire", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:soul_lantern", name: "Soul Lantern", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:soul_sand", name: "Soul Sand", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:soul_soil", name: "Soul Soil", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:soul_torch", name: "Soul Torch", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sponge", name: "Sponge", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spore_blossom", name: "Spore Blossom", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spruce_button", name: "Spruce Button", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spruce_door", name: "Spruce Door", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spruce_fence", name: "Spruce Fence", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spruce_fence_gate", name: "Spruce Fence Gate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spruce_hanging_sign", name: "Spruce Hanging Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spruce_leaves", name: "Spruce Leaves", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spruce_log", name: "Spruce Log", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spruce_planks", name: "Spruce Planks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spruce_pressure_plate", name: "Spruce Pressure Plate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spruce_sapling", name: "Spruce Sapling", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spruce_sign", name: "Spruce Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spruce_slab", name: "Spruce Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spruce_stairs", name: "Spruce Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spruce_trapdoor", name: "Spruce Trapdoor", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spruce_wood", name: "Spruce Wood", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sticky_piston", name: "Sticky Piston", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stone", name: "Stone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stone_brick_slab", name: "Stone Brick Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stone_brick_stairs", name: "Stone Brick Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stone_brick_wall", name: "Stone Brick Wall", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stone_bricks", name: "Stone Bricks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stone_button", name: "Stone Button", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stone_pressure_plate", name: "Stone Pressure Plate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stone_slab", name: "Stone Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stone_stairs", name: "Stone Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stonecutter", name: "Stonecutter", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_acacia_log", name: "Stripped Acacia Log", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_acacia_wood", name: "Stripped Acacia Wood", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_birch_log", name: "Stripped Birch Log", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_birch_wood", name: "Stripped Birch Wood", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_cherry_log", name: "Stripped Cherry Log", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_cherry_wood", name: "Stripped Cherry Wood", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_crimson_hyphae", name: "Stripped Crimson Hyphae", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_crimson_stem", name: "Stripped Crimson Stem", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_dark_oak_log", name: "Stripped Dark Oak Log", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_dark_oak_wood", name: "Stripped Dark Oak Wood", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_jungle_log", name: "Stripped Jungle Log", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_jungle_wood", name: "Stripped Jungle Wood", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_mangrove_log", name: "Stripped Mangrove Log", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_mangrove_wood", name: "Stripped Mangrove Wood", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_oak_log", name: "Stripped Oak Log", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_oak_wood", name: "Stripped Oak Wood", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_spruce_log", name: "Stripped Spruce Log", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_spruce_wood", name: "Stripped Spruce Wood", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_warped_hyphae", name: "Stripped Warped Hyphae", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stripped_warped_stem", name: "Stripped Warped Stem", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:structure_block", name: "Structure Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:structure_void", name: "Structure Void", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sugar_cane", name: "Sugar Cane", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sunflower", name: "Sunflower", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:suspicious_gravel", name: "Suspicious Gravel", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:suspicious_sand", name: "Suspicious Sand", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:tall_grass", name: "Tall Grass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:target", name: "Target", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:terracotta", name: "Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:tinted_glass", name: "Tinted Glass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:tnt", name: "TNT", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:torch", name: "Torch", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:torchflower", name: "Torchflower", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:trapped_chest", name: "Trapped Chest", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:tripwire_hook", name: "Tripwire Hook", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:tube_coral", name: "Tube Coral", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:tube_coral_block", name: "Tube Coral Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:tube_coral_fan", name: "Tube Coral Fan", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:tuff", name: "Tuff", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:turtle_egg", name: "Turtle Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:twisting_vines", name: "Twisting Vines", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:verdant_froglight", name: "Verdant Froglight", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:vine", name: "Vines", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:warped_button", name: "Warped Button", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:warped_door", name: "Warped Door", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:warped_fence", name: "Warped Fence", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:warped_fence_gate", name: "Warped Fence Gate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:warped_fungus", name: "Warped Fungus", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:warped_hanging_sign", name: "Warped Hanging Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:warped_hyphae", name: "Warped Hyphae", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:warped_nylium", name: "Warped Nylium", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:warped_planks", name: "Warped Planks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:warped_pressure_plate", name: "Warped Pressure Plate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:warped_roots", name: "Warped Roots", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:warped_sign", name: "Warped Sign", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:warped_slab", name: "Warped Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:warped_stairs", name: "Warped Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:warped_stem", name: "Warped Stem", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:warped_trapdoor", name: "Warped Trapdoor", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:warped_wart_block", name: "Warped Wart Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:waxed_copper_block", name: "Waxed Block of Copper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:waxed_cut_copper", name: "Waxed Cut Copper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:waxed_cut_copper_slab", name: "Waxed Cut Copper Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:waxed_cut_copper_stairs", name: "Waxed Cut Copper Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:waxed_exposed_copper", name: "Waxed Exposed Copper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:waxed_exposed_cut_copper", name: "Waxed Exposed Cut Copper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:waxed_exposed_cut_copper_slab", name: "Waxed Exposed Cut Copper Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:waxed_exposed_cut_copper_stairs", name: "Waxed Exposed Cut Copper Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:waxed_oxidized_copper", name: "Waxed Oxidized Copper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:waxed_oxidized_cut_copper", name: "Waxed Oxidized Cut Copper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:waxed_oxidized_cut_copper_slab", name: "Waxed Oxidized Cut Copper Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:waxed_oxidized_cut_copper_stairs", name: "Waxed Oxidized Cut Copper Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:waxed_weathered_copper", name: "Waxed Weathered Copper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:waxed_weathered_cut_copper", name: "Waxed Weathered Cut Copper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:waxed_weathered_cut_copper_slab", name: "Waxed Weathered Cut Copper Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:waxed_weathered_cut_copper_stairs", name: "Waxed Weathered Cut Copper Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:weathered_copper", name: "Weathered Copper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:weathered_cut_copper", name: "Weathered Cut Copper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:weathered_cut_copper_slab", name: "Weathered Cut Copper Slab", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:weathered_cut_copper_stairs", name: "Weathered Cut Copper Stairs", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:weeping_vines", name: "Weeping Vines", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:wet_sponge", name: "Wet Sponge", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:wheat", name: "Wheat", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:white_banner", name: "White Banner", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:white_bed", name: "White Bed", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:white_candle", name: "White Candle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:white_carpet", name: "White Carpet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:white_concrete", name: "White Concrete", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:white_concrete_powder", name: "White Concrete Powder", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:white_glazed_terracotta", name: "White Glazed Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:white_shulker_box", name: "White Shulker Box", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:white_stained_glass", name: "White Stained Glass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:white_stained_glass_pane", name: "White Stained Glass Pane", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:white_terracotta", name: "White Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:white_tulip", name: "White Tulip", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:white_wool", name: "White Wool", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:wither_rose", name: "Wither Rose", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:wither_skeleton_skull", name: "Wither Skeleton Skull", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:yellow_banner", name: "Yellow Banner", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:yellow_bed", name: "Yellow Bed", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:yellow_candle", name: "Yellow Candle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:yellow_carpet", name: "Yellow Carpet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:yellow_concrete", name: "Yellow Concrete", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:yellow_concrete_powder", name: "Yellow Concrete Powder", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:yellow_glazed_terracotta", name: "Yellow Glazed Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:yellow_shulker_box", name: "Yellow Shulker Box", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:yellow_stained_glass", name: "Yellow Stained Glass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:yellow_stained_glass_pane", name: "Yellow Stained Glass Pane", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:yellow_terracotta", name: "Yellow Terracotta", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:yellow_wool", name: "Yellow Wool", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:zombie_head", name: "Zombie Head", get icon() { return getItemIconPath(this.id); } }
        ],
        misc: [
            { id: "minecraft:acacia_boat", name: "Acacia Boat", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:acacia_chest_boat", name: "Acacia Boat with Chest", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:allay_spawn_egg", name: "Allay Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:amethyst_shard", name: "Amethyst Shard", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:angler_pottery_sherd", name: "Angler Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:apple", name: "Apple", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:archer_pottery_sherd", name: "Archer Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:armor_stand", name: "Armor Stand", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:arms_up_pottery_sherd", name: "Arms Up Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:axolotl_spawn_egg", name: "Axolotl Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:baked_potato", name: "Baked Potato", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bamboo_raft", name: "Bamboo Raft", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bamboo_chest_raft", name: "Bamboo Raft with Chest", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:flower_banner_pattern", name: "Banner Pattern", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:creeper_banner_pattern", name: "Banner Pattern", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:skull_banner_pattern", name: "Banner Pattern", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mojang_banner_pattern", name: "Banner Pattern", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:globe_banner_pattern", name: "Banner Pattern", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:piglin_banner_pattern", name: "Banner Pattern", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bat_spawn_egg", name: "Bat Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bee_spawn_egg", name: "Bee Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:beetroot", name: "Beetroot", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:beetroot_seeds", name: "Beetroot Seeds", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:beetroot_soup", name: "Beetroot Soup", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:birch_boat", name: "Birch Boat", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:birch_chest_boat", name: "Birch Boat with Chest", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:black_dye", name: "Black Dye", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blade_pottery_sherd", name: "Blade Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blaze_powder", name: "Blaze Powder", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blaze_rod", name: "Blaze Rod", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blaze_spawn_egg", name: "Blaze Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:blue_dye", name: "Blue Dye", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bone", name: "Bone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bone_meal", name: "Bone Meal", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:book", name: "Book", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:writable_book", name: "Book and Quill", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:experience_bottle", name: "Bottle o' Enchanting", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bowl", name: "Bowl", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bread", name: "Bread", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brewer_pottery_sherd", name: "Brewer Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brick", name: "Brick", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brown_dye", name: "Brown Dye", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bundle", name: "Bundle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:burn_pottery_sherd", name: "Burn Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:camel_spawn_egg", name: "Camel Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:carrot", name: "Carrot", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cat_spawn_egg", name: "Cat Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cave_spider_spawn_egg", name: "Cave Spider Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:charcoal", name: "Charcoal", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cherry_boat", name: "Cherry Boat", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cherry_chest_boat", name: "Cherry Boat with Chest", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chicken_spawn_egg", name: "Chicken Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chorus_fruit", name: "Chorus Fruit", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:clay_ball", name: "Clay Ball", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:coal", name: "Coal", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cocoa_beans", name: "Cocoa Beans", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cod_spawn_egg", name: "Cod Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cooked_chicken", name: "Cooked Chicken", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cooked_cod", name: "Cooked Cod", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cooked_mutton", name: "Cooked Mutton", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cooked_porkchop", name: "Cooked Porkchop", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cooked_rabbit", name: "Cooked Rabbit", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cooked_salmon", name: "Cooked Salmon", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cookie", name: "Cookie", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:copper_ingot", name: "Copper Ingot", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cow_spawn_egg", name: "Cow Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:creeper_spawn_egg", name: "Creeper Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cyan_dye", name: "Cyan Dye", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:danger_pottery_sherd", name: "Danger Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_oak_boat", name: "Dark Oak Boat", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dark_oak_chest_boat", name: "Dark Oak Boat with Chest", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:debug_stick", name: "Debug Stick", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond", name: "Diamond", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_horse_armor", name: "Diamond Horse Armor", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:disc_fragment_5", name: "Disc Fragment", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dolphin_spawn_egg", name: "Dolphin Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:donkey_spawn_egg", name: "Donkey Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dragon_breath", name: "Dragon's Breath", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dried_kelp", name: "Dried Kelp", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:drowned_spawn_egg", name: "Drowned Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:echo_shard", name: "Echo Shard", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:egg", name: "Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:elder_guardian_spawn_egg", name: "Elder Guardian Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:emerald", name: "Emerald", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:map", name: "Empty Map", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:enchanted_book", name: "Enchanted Book", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:enchanted_golden_apple", name: "Enchanted Golden Apple", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:end_crystal", name: "End Crystal", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:ender_dragon_spawn_egg", name: "Ender Dragon Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:ender_pearl", name: "Ender Pearl", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:enderman_spawn_egg", name: "Enderman Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:endermite_spawn_egg", name: "Endermite Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:evoker_spawn_egg", name: "Evoker Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:explorer_pottery_sherd", name: "Explorer Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:ender_eye", name: "Eye of Ender", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:feather", name: "Feather", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:fermented_spider_eye", name: "Fermented Spider Eye", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:fire_charge", name: "Fire Charge", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:firework_star", name: "Firework Star", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:flint", name: "Flint", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:fox_spawn_egg", name: "Fox Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:friend_pottery_sherd", name: "Friend Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:frog_spawn_egg", name: "Frog Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:ghast_spawn_egg", name: "Ghast Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:ghast_tear", name: "Ghast Tear", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:glass_bottle", name: "Glass Bottle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:glistering_melon_slice", name: "Glistering Melon Slice", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:glow_berries", name: "Glow Berries", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:glow_ink_sac", name: "Glow Ink Sac", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:glow_item_frame", name: "Glow Item Frame", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:glow_squid_spawn_egg", name: "Glow Squid Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:glowstone_dust", name: "Glowstone Dust", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:goat_spawn_egg", name: "Goat Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gold_ingot", name: "Gold Ingot", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gold_nugget", name: "Gold Nugget", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_apple", name: "Golden Apple", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_carrot", name: "Golden Carrot", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_horse_armor", name: "Golden Horse Armor", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gray_dye", name: "Gray Dye", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:green_dye", name: "Green Dye", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:guardian_spawn_egg", name: "Guardian Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gunpowder", name: "Gunpowder", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:heart_of_the_sea", name: "Heart of the Sea", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:heart_pottery_sherd", name: "Heart Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:heartbreak_pottery_sherd", name: "Heartbreak Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:hoglin_spawn_egg", name: "Hoglin Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:honey_bottle", name: "Honey Bottle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:honeycomb", name: "Honeycomb", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:horse_spawn_egg", name: "Horse Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:howl_pottery_sherd", name: "Howl Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:husk_spawn_egg", name: "Husk Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:ink_sac", name: "Ink Sac", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_golem_spawn_egg", name: "Iron Golem Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_horse_armor", name: "Iron Horse Armor", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_ingot", name: "Iron Ingot", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_nugget", name: "Iron Nugget", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:item_frame", name: "Item Frame", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jungle_boat", name: "Jungle Boat", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:jungle_chest_boat", name: "Jungle Boat with Chest", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:knowledge_book", name: "Knowledge Book", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lapis_lazuli", name: "Lapis Lazuli", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:leather", name: "Leather", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:leather_horse_armor", name: "Leather Horse Armor", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_blue_dye", name: "Light Blue Dye", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:light_gray_dye", name: "Light Gray Dye", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lime_dye", name: "Lime Dye", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lingering_potion", name: "Lingering Potion", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:llama_spawn_egg", name: "Llama Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:magenta_dye", name: "Magenta Dye", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:magma_cream", name: "Magma Cream", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:magma_cube_spawn_egg", name: "Magma Cube Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mangrove_boat", name: "Mangrove Boat", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mangrove_chest_boat", name: "Mangrove Boat with Chest", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:filled_map", name: "Map", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:melon_seeds", name: "Melon Seeds", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:melon_slice", name: "Melon Slice", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:minecart", name: "Minecart", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chest_minecart", name: "Minecart with Chest", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:command_block_minecart", name: "Minecart with Command Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:furnace_minecart", name: "Minecart with Furnace", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:hopper_minecart", name: "Minecart with Hopper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:tnt_minecart", name: "Minecart with TNT", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:miner_pottery_sherd", name: "Miner Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mooshroom_spawn_egg", name: "Mooshroom Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mourner_pottery_sherd", name: "Mourner Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mule_spawn_egg", name: "Mule Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mushroom_stew", name: "Mushroom Stew", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:music_disc_13", name: "Music Disc", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:music_disc_cat", name: "Music Disc", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:music_disc_blocks", name: "Music Disc", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:music_disc_chirp", name: "Music Disc", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:music_disc_far", name: "Music Disc", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:music_disc_mall", name: "Music Disc", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:music_disc_mellohi", name: "Music Disc", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:music_disc_stal", name: "Music Disc", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:music_disc_strad", name: "Music Disc", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:music_disc_ward", name: "Music Disc", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:music_disc_11", name: "Music Disc", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:music_disc_wait", name: "Music Disc", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:music_disc_otherside", name: "Music Disc", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:music_disc_relic", name: "Music Disc", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:music_disc_5", name: "Music Disc", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:music_disc_pigstep", name: "Music Disc", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:nautilus_shell", name: "Nautilus Shell", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:nether_brick", name: "Nether Brick", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:quartz", name: "Nether Quartz", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:nether_star", name: "Nether Star", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherite_ingot", name: "Netherite Ingot", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherite_scrap", name: "Netherite Scrap", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oak_boat", name: "Oak Boat", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oak_chest_boat", name: "Oak Boat with Chest", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:ocelot_spawn_egg", name: "Ocelot Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:orange_dye", name: "Orange Dye", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:painting", name: "Painting", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:panda_spawn_egg", name: "Panda Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:paper", name: "Paper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:parrot_spawn_egg", name: "Parrot Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:phantom_membrane", name: "Phantom Membrane", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:phantom_spawn_egg", name: "Phantom Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pig_spawn_egg", name: "Pig Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:piglin_brute_spawn_egg", name: "Piglin Brute Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:piglin_spawn_egg", name: "Piglin Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pillager_spawn_egg", name: "Pillager Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pink_dye", name: "Pink Dye", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pitcher_pod", name: "Pitcher Pod", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:plenty_pottery_sherd", name: "Plenty Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:poisonous_potato", name: "Poisonous Potato", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:polar_bear_spawn_egg", name: "Polar Bear Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:popped_chorus_fruit", name: "Popped Chorus Fruit", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:potato", name: "Potato", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:potion", name: "Potion", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:prismarine_crystals", name: "Prismarine Crystals", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:prismarine_shard", name: "Prismarine Shard", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:prize_pottery_sherd", name: "Prize Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pufferfish", name: "Pufferfish", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pufferfish_spawn_egg", name: "Pufferfish Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pumpkin_pie", name: "Pumpkin Pie", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:pumpkin_seeds", name: "Pumpkin Seeds", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:purple_dye", name: "Purple Dye", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:rabbit_hide", name: "Rabbit Hide", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:rabbit_spawn_egg", name: "Rabbit Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:rabbit_stew", name: "Rabbit Stew", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:rabbit_foot", name: "Rabbit's Foot", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:ravager_spawn_egg", name: "Ravager Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:beef", name: "Raw Beef", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chicken", name: "Raw Chicken", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cod", name: "Raw Cod", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:raw_copper", name: "Raw Copper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:raw_gold", name: "Raw Gold", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:raw_iron", name: "Raw Iron", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mutton", name: "Raw Mutton", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:porkchop", name: "Raw Porkchop", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:rabbit", name: "Raw Rabbit", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:salmon", name: "Raw Salmon", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:red_dye", name: "Red Dye", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:redstone", name: "Redstone Dust", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:rotten_flesh", name: "Rotten Flesh", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:salmon_spawn_egg", name: "Salmon Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:scute", name: "Scute", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sheaf_pottery_sherd", name: "Sheaf Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sheep_spawn_egg", name: "Sheep Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:shelter_pottery_sherd", name: "Shelter Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:shulker_shell", name: "Shulker Shell", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:shulker_spawn_egg", name: "Shulker Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:silverfish_spawn_egg", name: "Silverfish Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:skeleton_horse_spawn_egg", name: "Skeleton Horse Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:skeleton_spawn_egg", name: "Skeleton Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:skull_pottery_sherd", name: "Skull Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:slime_spawn_egg", name: "Slime Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:slime_ball", name: "Slimeball", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherite_upgrade_smithing_template", name: "Smithing Template", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sentry_armor_trim_smithing_template", name: "Smithing Template", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dune_armor_trim_smithing_template", name: "Smithing Template", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:coast_armor_trim_smithing_template", name: "Smithing Template", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:wild_armor_trim_smithing_template", name: "Smithing Template", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:ward_armor_trim_smithing_template", name: "Smithing Template", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:eye_armor_trim_smithing_template", name: "Smithing Template", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:vex_armor_trim_smithing_template", name: "Smithing Template", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:tide_armor_trim_smithing_template", name: "Smithing Template", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:snout_armor_trim_smithing_template", name: "Smithing Template", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:rib_armor_trim_smithing_template", name: "Smithing Template", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spire_armor_trim_smithing_template", name: "Smithing Template", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:wayfinder_armor_trim_smithing_template", name: "Smithing Template", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:shaper_armor_trim_smithing_template", name: "Smithing Template", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:silence_armor_trim_smithing_template", name: "Smithing Template", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:raiser_armor_trim_smithing_template", name: "Smithing Template", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:host_armor_trim_smithing_template", name: "Smithing Template", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sniffer_spawn_egg", name: "Sniffer Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:snort_pottery_sherd", name: "Snort Pottery Sherd", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:snow_golem_spawn_egg", name: "Snow Golem Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:snowball", name: "Snowball", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spider_eye", name: "Spider Eye", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spider_spawn_egg", name: "Spider Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:splash_potion", name: "Splash Potion", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spruce_boat", name: "Spruce Boat", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spruce_chest_boat", name: "Spruce Boat with Chest", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:squid_spawn_egg", name: "Squid Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cooked_beef", name: "Steak", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stick", name: "Stick", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stray_spawn_egg", name: "Stray Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:strider_spawn_egg", name: "Strider Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:string", name: "String", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sugar", name: "Sugar", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:suspicious_stew", name: "Suspicious Stew", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sweet_berries", name: "Sweet Berries", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:tadpole_spawn_egg", name: "Tadpole Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:torchflower_seeds", name: "Torchflower Seeds", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:totem_of_undying", name: "Totem of Undying", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:trader_llama_spawn_egg", name: "Trader Llama Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:tropical_fish", name: "Tropical Fish", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:tropical_fish_spawn_egg", name: "Tropical Fish Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:turtle_spawn_egg", name: "Turtle Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:vex_spawn_egg", name: "Vex Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:villager_spawn_egg", name: "Villager Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:vindicator_spawn_egg", name: "Vindicator Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:wandering_trader_spawn_egg", name: "Wandering Trader Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:warden_spawn_egg", name: "Warden Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:wheat_seeds", name: "Wheat Seeds", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:white_dye", name: "White Dye", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:witch_spawn_egg", name: "Witch Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:wither_skeleton_spawn_egg", name: "Wither Skeleton Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:wither_spawn_egg", name: "Wither Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:wolf_spawn_egg", name: "Wolf Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:written_book", name: "Written Book", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:yellow_dye", name: "Yellow Dye", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:zoglin_spawn_egg", name: "Zoglin Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:zombie_horse_spawn_egg", name: "Zombie Horse Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:zombie_spawn_egg", name: "Zombie Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:zombie_villager_spawn_egg", name: "Zombie Villager Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:zombified_piglin_spawn_egg", name: "Zombified Piglin Spawn Egg", get icon() { return getItemIconPath(this.id); } }
        ]
    },

    // Preserved Enchantments List
    enchantments: [
        {
                "id": "sharpness",
                "name": "Sharpness",
                "max": 5,
                "type": "weapon"
        },
        {
                "id": "smite",
                "name": "Smite",
                "max": 5,
                "type": "weapon"
        },
        {
                "id": "bane_of_arthropods",
                "name": "Bane of Arthropods",
                "max": 5,
                "type": "weapon"
        },
        {
                "id": "fire_aspect",
                "name": "Fire Aspect",
                "max": 2,
                "type": "weapon"
        },
        {
                "id": "knockback",
                "name": "Knockback",
                "max": 2,
                "type": "weapon"
        },
        {
                "id": "looting",
                "name": "Looting",
                "max": 3,
                "type": "weapon"
        },
        {
                "id": "sweeping_edge",
                "name": "Sweeping Edge",
                "max": 3,
                "type": "weapon"
        },
        {
                "id": "protection",
                "name": "Protection",
                "max": 4,
                "type": "armor"
        },
        {
                "id": "fire_protection",
                "name": "Fire Protection",
                "max": 4,
                "type": "armor"
        },
        {
                "id": "feather_falling",
                "name": "Feather Falling",
                "max": 4,
                "type": "armor"
        },
        {
                "id": "blast_protection",
                "name": "Blast Protection",
                "max": 4,
                "type": "armor"
        },
        {
                "id": "projectile_protection",
                "name": "Projectile Protection",
                "max": 4,
                "type": "armor"
        },
        {
                "id": "thorns",
                "name": "Thorns",
                "max": 3,
                "type": "armor"
        },
        {
                "id": "respiration",
                "name": "Respiration",
                "max": 3,
                "type": "armor"
        },
        {
                "id": "aqua_affinity",
                "name": "Aqua Affinity",
                "max": 1,
                "type": "armor"
        },
        {
                "id": "depth_strider",
                "name": "Depth Strider",
                "max": 3,
                "type": "armor"
        },
        {
                "id": "frost_walker",
                "name": "Frost Walker",
                "max": 2,
                "type": "armor"
        },
        {
                "id": "soul_speed",
                "name": "Soul Speed",
                "max": 3,
                "type": "armor"
        },
        {
                "id": "swift_sneak",
                "name": "Swift Sneak",
                "max": 3,
                "type": "armor"
        },
        {
                "id": "efficiency",
                "name": "Efficiency",
                "max": 5,
                "type": "tool"
        },
        {
                "id": "silk_touch",
                "name": "Silk Touch",
                "max": 1,
                "type": "tool"
        },
        {
                "id": "fortune",
                "name": "Fortune",
                "max": 3,
                "type": "tool"
        },
        {
                "id": "power",
                "name": "Power",
                "max": 5,
                "type": "bow"
        },
        {
                "id": "punch",
                "name": "Punch",
                "max": 2,
                "type": "bow"
        },
        {
                "id": "flame",
                "name": "Flame",
                "max": 1,
                "type": "bow"
        },
        {
                "id": "infinity",
                "name": "Infinity",
                "max": 1,
                "type": "bow"
        },
        {
                "id": "multishot",
                "name": "Multishot",
                "max": 1,
                "type": "crossbow"
        },
        {
                "id": "piercing",
                "name": "Piercing",
                "max": 4,
                "type": "crossbow"
        },
        {
                "id": "quick_charge",
                "name": "Quick Charge",
                "max": 3,
                "type": "crossbow"
        },
        {
                "id": "loyalty",
                "name": "Loyalty",
                "max": 3,
                "type": "trident"
        },
        {
                "id": "impaling",
                "name": "Impaling",
                "max": 5,
                "type": "trident"
        },
        {
                "id": "riptide",
                "name": "Riptide",
                "max": 3,
                "type": "trident"
        },
        {
                "id": "channeling",
                "name": "Channeling",
                "max": 1,
                "type": "trident"
        },
        {
                "id": "unbreaking",
                "name": "Unbreaking",
                "max": 3,
                "type": "all"
        },
        {
                "id": "mending",
                "name": "Mending",
                "max": 1,
                "type": "all"
        },
        {
                "id": "binding_curse",
                "name": "Curse of Binding",
                "max": 1,
                "type": "all"
        },
        {
                "id": "vanishing_curse",
                "name": "Curse of Vanishing",
                "max": 1,
                "type": "all"
        }
],

    // Preserved Trolls List
    trolls: [
        {
                "level": 1,
                "id": "cave_spook",
                "name": "Cave Ambient Spook",
                "type": "harmless",
                "desc": "Plays spooky ambient cave noises directly to the victim to trigger sudden paranoia.",
                "java_modern": "/playsound minecraft:ambient.cave ambient [TARGET] ~ ~ ~ 1 1 1",
                "java_legacy": "/playsound minecraft:ambient.cave ambient [TARGET] ~ ~ ~ 1 1 1",
                "bedrock": "/playsound ambient.cave [TARGET] ~ ~ ~ 1 1",
                "requires_command_block": false
        },
        {
                "level": 1,
                "id": "fake_join",
                "name": "Fake User Join Notification",
                "type": "harmless",
                "desc": "Outputs a yellow system announcement claiming a famous entity logged into the server.",
                "java_modern": "/tellraw @a {\"text\":\"Herobrine joined the game\",\"color\":\"yellow\"}",
                "java_legacy": "/tellraw @a {\"text\":\"Herobrine joined the game\",\"color\":\"yellow\"}",
                "bedrock": "/tellraw @a {\"rawtext\":[{\"text\":\"§eHerobrine joined the game\"}]}",
                "requires_command_block": false
        },
        {
                "level": 1,
                "id": "dizzy_spell",
                "name": "Dizzy Spell",
                "type": "harmless",
                "desc": "Applies short Blindness and Nausea effects to disorient the player with zero damage.",
                "java_modern": "/effect give [TARGET] minecraft:blindness 6 1\n/effect give [TARGET] minecraft:nausea 8 1",
                "java_legacy": "/effect give [TARGET] blindness 6 1\n/effect give [TARGET] nausea 8 1",
                "bedrock": "/effect [TARGET] blindness 6 1\n/effect [TARGET] nausea 8 1",
                "requires_command_block": true
        },
        {
                "level": 1,
                "id": "fake_msg_spam",
                "name": "Butterfingers Speak",
                "type": "harmless",
                "desc": "Forces the target to drop a funny chat slip-up claiming they accidentally dropped their sandwich.",
                "java_modern": "/execute as [TARGET] run me dropped their sandwich in the dirt! ...oops",
                "java_legacy": "/execute as [TARGET] run me dropped their sandwich in the dirt! ...oops",
                "bedrock": "/execute as [TARGET] run me dropped their sandwich in the dirt! ...oops",
                "requires_command_block": false
        },
        {
                "level": 1,
                "id": "inv_clutter",
                "name": "Cobblestone Clutter",
                "type": "grief",
                "desc": "Gives them a full stack of Cobblestone blocks to pack active inventory hotbar spaces.",
                "java_modern": "/give [TARGET] minecraft:cobblestone 64",
                "java_legacy": "/give [TARGET] cobblestone 64",
                "bedrock": "/give [TARGET] cobblestone 64",
                "requires_command_block": false
        },
        {
                "level": 1,
                "id": "slowpoke",
                "name": "Sluggish Potion",
                "type": "grief",
                "desc": "Inflicts severe Slowness effect, forcing them to crawl for 10 seconds.",
                "java_modern": "/effect give [TARGET] minecraft:slowness 10 5",
                "java_legacy": "/effect give [TARGET] slowness 10 5",
                "bedrock": "/effect [TARGET] slowness 10 5",
                "requires_command_block": false
        },
        {
                "level": 1,
                "id": "crit_sound",
                "name": "Constant Whack Sound",
                "type": "harmless",
                "desc": "Plays sharp critical player hit sounds directly to the player, making them think they are being hit.",
                "java_modern": "/playsound minecraft:entity.player.attack.crit master [TARGET] ~ ~ ~ 1 0.5",
                "java_legacy": "/playsound entity.player.attack.crit master [TARGET] ~ ~ ~ 1 0.5",
                "bedrock": "/playsound game.player.hurt [TARGET] ~ ~ ~ 1 0.5",
                "requires_command_block": false
        },
        {
                "level": 1,
                "id": "lava_hiss",
                "name": "Lava Extinguish Paranoia",
                "type": "harmless",
                "desc": "Plays the lava extinguishing hiss sound constantly in their ears, making them think their build is on fire.",
                "java_modern": "/playsound minecraft:block.lava.extinguish master [TARGET] ~ ~ ~ 1 1",
                "java_legacy": "/playsound block.lava.extinguish master [TARGET] ~ ~ ~ 1 1",
                "bedrock": "/playsound random.fizz [TARGET] ~ ~ ~ 1 1",
                "requires_command_block": false
        },
        {
                "level": 1,
                "id": "ghost_creeper_hiss",
                "name": "Creeper Hiss Spook",
                "type": "harmless",
                "desc": "Plays the terrifying Creeper fuse warning sound directly at the victim's location.",
                "java_modern": "/playsound minecraft:entity.creeper.primed host [TARGET] ~ ~ ~ 1 1",
                "java_legacy": "/playsound entity.creeper.primed host [TARGET] ~ ~ ~ 1 1",
                "bedrock": "/playsound random.fuse [TARGET] ~ ~ ~ 1 1",
                "requires_command_block": false
        },
        {
                "level": 1,
                "id": "ghost_chicken",
                "name": "Clucking Head Crown",
                "type": "harmless",
                "desc": "Summons a completely invisible chicken at their feet, clucking in their ears.",
                "java_modern": "/execute at [TARGET] run summon minecraft:chicken ~ ~ ~ {Silent:0b,active_effects:[{id:'minecraft:invisibility',amplifier:0,duration:-1,show_particles:0b}]}",
                "java_legacy": "/execute at [TARGET] run summon chicken ~ ~ ~ {Silent:0b,ActiveEffects:[{Id:14,Amplifier:0,Duration:19999,ShowParticles:0b}]}",
                "bedrock": "/execute at [TARGET] run summon chicken ~ ~ ~ minecraft:become_invisible",
                "requires_command_block": false
        },
        {
                "level": 1,
                "id": "fake_op",
                "name": "Fake Operator Alert",
                "type": "harmless",
                "desc": "Fakes the standard server console OP notice directly to the target's chat screen.",
                "java_modern": "/tellraw [TARGET] {\"text\":\"You are now an operator! Type /help for help.\",\"color\":\"gray\",\"italic\":true}",
                "java_legacy": "/tellraw [TARGET] {\"text\":\"You are now an operator! Type /help for help.\",\"color\":\"gray\",\"italic\":true}",
                "bedrock": "/tellraw [TARGET] {\"rawtext\":[{\"text\":\"§7§oYou are now an operator! Type /help for help.\"}]}",
                "requires_command_block": false
        },
        {
                "level": 2,
                "id": "disco_floor",
                "name": "Villager Sparkles",
                "type": "harmless",
                "desc": "Summons continuous happy green emerald sparkles under their feet.",
                "java_modern": "/execute at [TARGET] run particle minecraft:happy_villager ~ ~ ~ 0.5 0.1 0.5 0 25",
                "java_legacy": "/execute at [TARGET] run particle happyVillager ~ ~ ~ 0.5 0.1 0.5 0 25",
                "bedrock": "/execute at [TARGET] run particle minecraft:villager_happy ~ ~ ~",
                "requires_command_block": false
        },
        {
                "level": 2,
                "id": "reverse_speech",
                "name": "Reverse Chat Output",
                "type": "harmless",
                "desc": "Forces the player to output backwards text in public chat, confusing other members.",
                "java_modern": "/execute as [TARGET] run say !ti t'nac I ,gugilb gugilb",
                "java_legacy": "/execute as [TARGET] run say !ti t'nac I ,gugilb gugilb",
                "bedrock": "/execute as [TARGET] run say !ti t'nac I ,gugilb gugilb",
                "requires_command_block": false
        },
        {
                "level": 2,
                "id": "levitate",
                "name": "Float Away Prank",
                "type": "harmless",
                "desc": "Gives levitation for 3 seconds followed by slow falling for safety.",
                "java_modern": "/effect give [TARGET] minecraft:levitation 3 10\n/effect give [TARGET] minecraft:slow_falling 10 1",
                "java_legacy": "/effect give [TARGET] levitation 3 10\n/effect give [TARGET] slow_falling 10 1",
                "bedrock": "/effect [TARGET] levitation 3 10\n/effect [TARGET] slow_falling 10 1",
                "requires_command_block": true
        },
        {
                "level": 2,
                "id": "ground_gravel",
                "name": "Head Gravel Block",
                "type": "grief",
                "desc": "Places a loose gravel block above their head that drops directly onto them.",
                "java_modern": "/execute at [TARGET] run setblock ~ ~2 ~ minecraft:gravel",
                "java_legacy": "/execute at [TARGET] run setblock ~ ~2 ~ gravel",
                "bedrock": "/execute at [TARGET] run setblock ~ ~2 ~ gravel",
                "requires_command_block": false
        },
        {
                "level": 2,
                "id": "butterfingers",
                "name": "Poison Potato Hand",
                "type": "grief",
                "desc": "Swaps their active mainhand weapon with a useless poisonous potato.",
                "java_modern": "/item replace entity [TARGET] weapon.mainhand with minecraft:poisonous_potato",
                "java_legacy": "/replaceitem entity [TARGET] slot.weapon.mainhand minecraft:poisonous_potato",
                "bedrock": "/replaceitem entity [TARGET] slot.weapon.mainhand 0 poisonous_potato",
                "requires_command_block": false
        },
        {
                "level": 2,
                "id": "cobweb_trapper",
                "name": "Cobweb Stiction",
                "type": "grief",
                "desc": "Places a sticky Cobweb block directly at their leg level, slowing them to a crawl.",
                "java_modern": "/execute at [TARGET] run setblock ~ ~ ~ minecraft:cobweb",
                "java_legacy": "/execute at [TARGET] run setblock ~ ~ ~ cobweb",
                "bedrock": "/execute at [TARGET] run setblock ~ ~ ~ cobweb",
                "requires_command_block": false
        },
        {
                "level": 2,
                "id": "bee_swarm",
                "name": "Angry Bee Swarm",
                "type": "harmless",
                "desc": "Summons a furious, angry bee directly above the target's head that immediately attacks.",
                "java_modern": "/summon minecraft:bee ~ ~3 ~ {AngerTime:1200,AngryAt:[TARGET]}",
                "java_legacy": "/summon bee ~ ~3 ~ {Anger:1200}",
                "bedrock": "/summon bee ~ ~3 ~ minecraft:become_angry",
                "requires_command_block": false
        },
        {
                "level": 2,
                "id": "fake_diamond_ore",
                "name": "Feet Diamond Bait",
                "type": "grief",
                "desc": "Replaces the block directly beneath their feet with a Diamond Ore block as instant bait.",
                "java_modern": "/execute at [TARGET] run setblock ~ ~-1 ~ minecraft:diamond_ore",
                "java_legacy": "/execute at [TARGET] run setblock ~ ~-1 ~ diamond_ore",
                "bedrock": "/execute at [TARGET] run setblock ~ ~-1 ~ diamond_ore",
                "requires_command_block": false
        },
        {
                "level": 2,
                "id": "water_cage",
                "name": "Instant Water Cage",
                "type": "grief",
                "desc": "Spawns a block of running water exactly at their head height to slow them down.",
                "java_modern": "/execute at [TARGET] run setblock ~ ~1 ~ minecraft:water",
                "java_legacy": "/execute at [TARGET] run setblock ~ ~1 ~ water",
                "bedrock": "/execute at [TARGET] run setblock ~ ~1 ~ water",
                "requires_command_block": false
        },
        {
                "level": 2,
                "id": "slow_dig",
                "name": "Mining Fatigue Curse",
                "type": "grief",
                "desc": "Inflicts severe Mining Fatigue for 20 seconds, grinding block breaking to a halt.",
                "java_modern": "/effect give [TARGET] minecraft:mining_fatigue 20 2",
                "java_legacy": "/effect give [TARGET] mining_fatigue 20 2",
                "bedrock": "/effect [TARGET] mining_fatigue 20 2",
                "requires_command_block": false
        },
        {
                "level": 2,
                "id": "soil_swap",
                "name": "Dirt Hand Curse",
                "type": "grief",
                "desc": "Swaps their active hand held item with a basic block of dirt.",
                "java_modern": "/item replace entity [TARGET] weapon.mainhand with minecraft:dirt",
                "java_legacy": "/replaceitem entity [TARGET] slot.weapon.mainhand minecraft:dirt",
                "bedrock": "/replaceitem entity [TARGET] slot.weapon.mainhand 0 dirt",
                "requires_command_block": false
        },
        {
                "level": 3,
                "id": "inv_stalker",
                "name": "Invisible Hiss Stalker",
                "type": "harmless",
                "desc": "Summons a fully invisible, silent Creeper that sits right behind them, triggering fake hisses.",
                "java_modern": "/summon minecraft:creeper ~ ~ ~ {Silent:1b,active_effects:[{id:'minecraft:invisibility',amplifier:0,duration:-1,show_particles:0b}]}",
                "java_legacy": "/summon creeper ~ ~ ~ {Silent:1b,ActiveEffects:[{Id:14,Amplifier:0,Duration:19998,ShowParticles:0b}]}",
                "bedrock": "/summon creeper ~ ~ ~ minecraft:become_invisible",
                "requires_command_block": false
        },
        {
                "level": 3,
                "id": "size_shifter_small",
                "name": "Micro Shrink (0.2x)",
                "type": "harmless",
                "desc": "Shrinks their character model to 20% normal scale (Requires Java 1.20.5+).",
                "java_modern": "/attribute [TARGET] minecraft:generic.scale base set 0.2",
                "java_legacy": "/tellraw [TARGET] {\"text\":\"[Scale pranks are only supported on modern Minecraft 1.20.5+]\",\"color\":\"red\"}",
                "bedrock": "/playanimation [TARGET] animation.player.sleeping scale 0.2",
                "requires_command_block": false
        },
        {
                "level": 3,
                "id": "size_shifter_big",
                "name": "Titan Grow (4.0x)",
                "type": "harmless",
                "desc": "Grows their character model into a massive 4-block tall behemoth (Requires Java 1.20.5+).",
                "java_modern": "/attribute [TARGET] minecraft:generic.scale base set 4.0",
                "java_legacy": "/tellraw [TARGET] {\"text\":\"[Scale pranks are only supported on modern Minecraft 1.20.5+]\",\"color\":\"red\"}",
                "bedrock": "/playanimation [TARGET] animation.player.sleeping scale 4.0",
                "requires_command_block": false
        },
        {
                "level": 3,
                "id": "zeus_lightning",
                "name": "Zeus's Bolt Strike",
                "type": "grief",
                "desc": "Strikes an instant lightning bolt directly on their coordinates, setting fires.",
                "java_modern": "/execute at [TARGET] run summon minecraft:lightning_bolt ~ ~ ~",
                "java_legacy": "/execute at [TARGET] run summon lightning_bolt ~ ~ ~",
                "bedrock": "/execute at [TARGET] run summon lightning_bolt ~ ~ ~",
                "requires_command_block": false
        },
        {
                "level": 3,
                "id": "water_leak",
                "name": "Ceiling Water Leak",
                "type": "grief",
                "desc": "Places running water above their head, washing away nearby torches and redstones.",
                "java_modern": "/execute at [TARGET] run setblock ~ ~2 ~ minecraft:water",
                "java_legacy": "/execute at [TARGET] run setblock ~ ~2 ~ water",
                "bedrock": "/execute at [TARGET] run setblock ~ ~2 ~ water",
                "requires_command_block": false
        },
        {
                "level": 3,
                "id": "obsidian_cage",
                "name": "Obsidian Coffin",
                "type": "grief",
                "desc": "Wraps their coordinates entirely inside an indestructible 3x3 solid Obsidian block shell.",
                "java_modern": "/execute at [TARGET] run fill ~-1 ~ ~-1 ~1 ~2 ~1 minecraft:obsidian outline\n/execute at [TARGET] run fill ~ ~ ~ ~ ~1 ~ minecraft:air",
                "java_legacy": "/execute at [TARGET] run fill ~-1 ~ ~-1 ~1 ~2 ~1 obsidian outline\n/execute at [TARGET] run fill ~ ~ ~ ~ ~1 ~ air",
                "bedrock": "/execute at [TARGET] run fill ~-1 ~ ~-1 ~1 ~2 ~1 obsidian outline\n/execute at [TARGET] run fill ~ ~ ~ ~ ~1 ~ air",
                "requires_command_block": true
        },
        {
                "level": 3,
                "id": "slime_head",
                "name": "Double Slime Head Helmet",
                "type": "harmless",
                "desc": "Spawns a small double-stacked slime passenger tower directly on top of the player.",
                "java_modern": "/summon minecraft:slime ~ ~2 ~ {Size:1,Passengers:[{id:\"minecraft:slime\",Size:1}]}",
                "java_legacy": "/summon slime ~ ~2 ~ {Size:1,Passengers:[{id:\"slime\",Size:1}]}",
                "bedrock": "/summon slime ~ ~2 ~",
                "requires_command_block": false
        },
        {
                "level": 3,
                "id": "phantom_steed",
                "name": "Zombie Flying Phantom",
                "type": "grief",
                "desc": "Summons a Flying Phantom high in the sky carrying an aggressive, fully armed Zombie passenger.",
                "java_modern": "/summon minecraft:phantom ~ ~10 ~ {Size:2,Passengers:[{id:\"minecraft:zombie\"}]}",
                "java_legacy": "/summon phantom ~ ~10 ~ {Size:2,Passengers:[{id:\"zombie\"}]}",
                "bedrock": "/summon phantom ~ ~10 ~",
                "requires_command_block": false
        },
        {
                "level": 3,
                "id": "guardian_scare",
                "name": "Elder Guardian Ghost Scare",
                "type": "harmless",
                "desc": "Flashes the giant Elder Guardian face overlay jump scare on their screen.",
                "java_modern": "/particle minecraft:elder_guardian ~ ~ ~ 0 0 0 0 1 force [TARGET]\n/playsound minecraft:entity.elder_guardian.curse ambient [TARGET] ~ ~ ~ 1 1",
                "java_legacy": "/particle elder_guardian ~ ~ ~ 0 0 0 0 1 force [TARGET]\n/playsound entity.elder_guardian.curse ambient [TARGET] ~ ~ ~ 1 1",
                "bedrock": "/playsound mob.elderguardian.curse [TARGET] ~ ~ ~ 1 1",
                "requires_command_block": true
        },
        {
                "level": 3,
                "id": "bedrock_floor",
                "name": "Bedrock Floor Anchor",
                "type": "grief",
                "desc": "Instantly replaces the single block directly beneath their feet with unbreakable Bedrock.",
                "java_modern": "/execute at [TARGET] run setblock ~ ~-1 ~ minecraft:bedrock",
                "java_legacy": "/execute at [TARGET] run setblock ~ ~-1 ~ bedrock",
                "bedrock": "/execute at [TARGET] run setblock ~ ~-1 ~ bedrock",
                "requires_command_block": false
        },
        {
                "level": 3,
                "id": "angry_wolf",
                "name": "Rabid Wolf Spawner",
                "type": "grief",
                "desc": "Summons an extremely aggressive, angry wild Wolf right next to the target.",
                "java_modern": "/execute at [TARGET] run summon minecraft:wolf ~ ~ ~ {Angry:1b,AngerTime:1200,AngryAt:[TARGET]}",
                "java_legacy": "/execute at [TARGET] run summon wolf ~ ~ ~ {Angry:1b,AngryAt:[TARGET]}",
                "bedrock": "/execute at [TARGET] run summon wolf ~ ~ ~ minecraft:become_angry",
                "requires_command_block": false
        },
        {
                "level": 4,
                "id": "herobrine_spook",
                "name": "Herobrine Haunting",
                "type": "harmless",
                "desc": "Spawns a glowing skull-wearing armor stand, sounds a ghast shriek, and deletes it.",
                "java_modern": "/execute at [TARGET] run summon minecraft:armor_stand ~ ~1 ~2 {CustomName:'\"Herobrine\"',CustomNameVisible:1b,Glowing:1b,ArmorItems:[{},{},{},{id:'minecraft:player_head'}]}\n/playsound minecraft:entity.ghast.scream ambient [TARGET] ~ ~ ~ 1 0.5",
                "java_legacy": "/execute at [TARGET] run summon armor_stand ~ ~1 ~2 {CustomName:\"Herobrine\",CustomNameVisible:1b,Glowing:1b,ArmorItems:[{},{},{},{id:\"skull\",Damage:3,tag:{SkullOwner:\"Herobrine\"}}]}\n/playsound entity.ghast.scream ambient [TARGET] ~ ~ ~ 1 0.5",
                "bedrock": "/execute at [TARGET] run summon armor_stand ~ ~1 ~2 Herobrine\n/playsound mob.ghast.affectionate_scream [TARGET] ~ ~ ~ 1 0.5",
                "requires_command_block": true
        },
        {
                "level": 4,
                "id": "fake_diamonds",
                "name": "Fake Diamond Broadcaster",
                "type": "harmless",
                "desc": "Fakes a server-wide system message declaring they got the 'Diamonds!' advancement.",
                "java_modern": "/tellraw @a [{\"selector\":\"[TARGET]\",\"color\":\"white\"},{\"text\":\" has made the advancement \"},{\"text\":\"[Diamonds!]\",\"color\":\"green\",\"bold\":true}]\n/tellraw [TARGET] {\"text\":\"Pranked! Actually zero diamonds!\",\"color\":\"red\"}",
                "java_legacy": "/tellraw @a [{\"selector\":\"[TARGET]\",\"color\":\"white\"},{\"text\":\" has made the advancement \"},{\"text\":\"[Diamonds!]\",\"color\":\"green\",\"bold\":true}]\n/tellraw [TARGET] {\"text\":\"Pranked! Actually zero diamonds!\",\"color\":\"red\"}",
                "bedrock": "/tellraw @a {\"rawtext\":[{\"selector\":\"[TARGET]\"},{\"text\":\" has made the advancement §a§l[Diamonds!]\"}]}\n/tellraw [TARGET] {\"rawtext\":[{\"text\":\"§cPranked! Actually zero diamonds!\"}]}",
                "requires_command_block": true
        },
        {
                "level": 4,
                "id": "inverse_gravity",
                "name": "Inverse Gravity Chamber",
                "type": "harmless",
                "desc": "Levitates them 15 blocks in the air, holds them suspended, and ambient bats screech around them.",
                "java_modern": "/effect give [TARGET] minecraft:levitation 3 15\n/playsound minecraft:entity.bat.ambient ambient [TARGET] ~ ~ ~ 1 1",
                "java_legacy": "/effect give [TARGET] levitation 3 15\n/playsound entity.bat.ambient ambient [TARGET] ~ ~ ~ 1 1",
                "bedrock": "/effect [TARGET] levitation 3 15\n/playsound mob.bat.say [TARGET] ~ ~ ~ 1 1",
                "requires_command_block": true
        },
        {
                "level": 4,
                "id": "anvil_storm",
                "name": "Heavy Anvil Shower",
                "type": "grief",
                "desc": "Summons 2 heavy falling metal Anvils 15 blocks in the sky above their head to crash down.",
                "java_modern": "/execute at [TARGET] run summon minecraft:falling_block ~ ~15 ~ {BlockState:{Name:\"minecraft:anvil\"},Time:1}\n/execute at [TARGET] run summon minecraft:falling_block ~1 ~15 ~ {BlockState:{Name:\"minecraft:anvil\"},Time:1}",
                "java_legacy": "/execute at [TARGET] run summon falling_block ~ ~15 ~ {Block:\"anvil\",Time:1}\n/execute at [TARGET] run summon falling_block ~1 ~15 ~ {Block:\"anvil\",Time:1}",
                "bedrock": "/execute at [TARGET] run summon falling_block ~ ~15 ~ anvil\n/execute at [TARGET] run summon falling_block ~1 ~15 ~ anvil",
                "requires_command_block": true
        },
        {
                "level": 4,
                "id": "lava_bath",
                "name": "Lava Footbath",
                "type": "grief",
                "desc": "Swaps the single block they are standing on into a burning fluid pool of hot Lava.",
                "java_modern": "/execute at [TARGET] run setblock ~ ~-1 ~ minecraft:lava",
                "java_legacy": "/execute at [TARGET] run setblock ~ ~-1 ~ lava",
                "bedrock": "/execute at [TARGET] run setblock ~ ~-1 ~ lava",
                "requires_command_block": false
        },
        {
                "level": 4,
                "id": "hotbar_wipe",
                "name": "Hotbar Inventory Wipe",
                "type": "grief",
                "desc": "Clears their active inventory hotbar entirely using the sweeping clear command.",
                "java_modern": "/clear [TARGET]",
                "java_legacy": "/clear [TARGET]",
                "bedrock": "/clear [TARGET]",
                "requires_command_block": false
        },
        {
                "level": 4,
                "id": "anvil_dropper",
                "name": "Single-Anvil Pinpoint Drop",
                "type": "grief",
                "desc": "Summons a single heavy falling anvil exactly 6 blocks in the air directly above their head.",
                "java_modern": "/execute at [TARGET] run summon minecraft:falling_block ~ ~6 ~ {BlockState:{Name:\"minecraft:anvil\"},Time:1}",
                "java_legacy": "/execute at [TARGET] run summon falling_block ~ ~6 ~ {Block:\"anvil\",Time:1}",
                "bedrock": "/execute at [TARGET] run summon falling_block ~ ~6 ~ anvil",
                "requires_command_block": false
        },
        {
                "level": 4,
                "id": "giant_phantom",
                "name": "Colossal Phantom Grow",
                "type": "harmless",
                "desc": "Scales flying phantoms near the target to colossal scales.",
                "java_modern": "/execute as @e[type=minecraft:phantom] run data merge entity @s {Size:15}",
                "java_legacy": "/execute as @e[type=phantom] run data merge entity @s {Size:15}",
                "bedrock": "/playanimation @e[type=phantom] animation.ghast.scale scale 8",
                "requires_command_block": false
        },
        {
                "level": 4,
                "id": "lava_coffin",
                "name": "Lava Shower Trap",
                "type": "grief",
                "desc": "Summons a block of burning lava exactly 3 blocks above their head, causing it to drip down.",
                "java_modern": "/execute at [TARGET] run setblock ~ ~3 ~ minecraft:lava",
                "java_legacy": "/execute at [TARGET] run setblock ~ ~3 ~ lava",
                "bedrock": "/execute at [TARGET] run setblock ~ ~3 ~ lava",
                "requires_command_block": false
        },
        {
                "level": 4,
                "id": "pumpkin_head",
                "name": "Pumpkin Blindness",
                "type": "grief",
                "desc": "Forces a carved pumpkin onto their head armor slot, severely blocking their screen view.",
                "java_modern": "/item replace entity [TARGET] armor.head with minecraft:carved_pumpkin",
                "java_legacy": "/replaceitem entity [TARGET] slot.armor.head minecraft:carved_pumpkin",
                "bedrock": "/replaceitem entity [TARGET] slot.armor.head 0 carved_pumpkin",
                "requires_command_block": false
        },
        {
                "level": 4,
                "id": "wither_spawn_sound",
                "name": "Wither Spawn Panic",
                "type": "harmless",
                "desc": "Plays the terrifying Wither Boss spawn sound globally to the target, creating mass panic.",
                "java_modern": "/playsound minecraft:entity.wither.spawn master [TARGET] ~ ~ ~ 1 1 1",
                "java_legacy": "/playsound entity.wither.spawn master [TARGET] ~ ~ ~ 1 1 1",
                "bedrock": "/playsound mob.wither.spawn [TARGET] ~ ~ ~ 1 1",
                "requires_command_block": false
        },
        {
                "level": 5,
                "id": "kbd_freeze",
                "name": "Gravity Freeze Ring",
                "type": "harmless",
                "desc": "Forces player to continuously teleport to their current spot, completely locking movement.",
                "java_modern": "/execute as [TARGET] run tp ~ ~ ~",
                "java_legacy": "/execute as [TARGET] run tp ~ ~ ~",
                "bedrock": "/execute as [TARGET] run tp ~ ~ ~",
                "requires_command_block": true
        },
        {
                "level": 5,
                "id": "fake_admin_ban",
                "name": "Fake Admin Ban Screen",
                "type": "harmless",
                "desc": "Flashes an official-looking kicked system tellraw in public chat while sending a private April Fools message.",
                "java_modern": "/tellraw @a {\"text\":\"[System] Connection lost: Kicked by Admin (Violation: FlyHack)\",\"color\":\"red\"}\n/tellraw [TARGET] {\"text\":\"Pranked! You are not banned!\",\"color\":\"green\"}",
                "java_legacy": "/tellraw @a {\"text\":\"[System] Connection lost: Kicked by Admin (Violation: FlyHack)\",\"color\":\"red\"}\n/tellraw [TARGET] {\"text\":\"Pranked! You are not banned!\",\"color\":\"green\"}",
                "bedrock": "/tellraw @a {\"rawtext\":[{\"text\":\"§c[System] Connection lost: Kicked by Admin (Violation: FlyHack)\"}]}\n/tellraw [TARGET] {\"rawtext\":[{\"text\":\"§aPranked! You are not banned!\"}]}",
                "requires_command_block": true
        },
        {
                "level": 5,
                "id": "mob_singularity",
                "name": "Chicken Stack Apocalypse",
                "type": "grief",
                "desc": "Summons a stacked vertical tower of 6 chickens riding each other in a single chat-compatible line.",
                "java_modern": "/summon minecraft:chicken ~ ~ ~ {Passengers:[{id:\"minecraft:chicken\",Passengers:[{id:\"minecraft:chicken\",Passengers:[{id:\"minecraft:chicken\",Passengers:[{id:\"minecraft:chicken\",Passengers:[{id:\"minecraft:chicken\"}]}]}]}]}]}",
                "java_legacy": "/summon chicken ~ ~ ~ {Passengers:[{id:\"chicken\",Passengers:[{id:\"chicken\",Passengers:[{id:\"chicken\",Passengers:[{id:\"chicken\",Passengers:[{id:\"chicken\"}]}]}]}]}]}",
                "bedrock": "/summon chicken ~ ~ ~\n/summon chicken ~ ~ ~\n/summon chicken ~ ~ ~",
                "requires_command_block": true
        },
        {
                "level": 5,
                "id": "bedrock_box",
                "name": "Bedrock Jail Box",
                "type": "grief",
                "desc": "Encapsulates the target inside a hollow 3x3 solid Bedrock tomb that cannot be mined.",
                "java_modern": "/execute at [TARGET] run fill ~-1 ~ ~-1 ~1 ~2 ~1 minecraft:bedrock outline\n/execute at [TARGET] run fill ~ ~ ~ ~ ~1 ~ minecraft:air",
                "java_legacy": "/execute at [TARGET] run fill ~-1 ~ ~-1 ~1 ~2 ~1 bedrock outline\n/execute at [TARGET] run fill ~ ~ ~ ~ ~1 ~ air",
                "bedrock": "/execute at [TARGET] run fill ~-1 ~ ~-1 ~1 ~2 ~1 bedrock outline\n/execute at [TARGET] run fill ~ ~ ~ ~ ~1 ~ air",
                "requires_command_block": true
        },
        {
                "level": 5,
                "id": "tnt_cluster",
                "name": "Nuclear TNT Riding Stack",
                "type": "grief",
                "desc": "Summons a single-line riding stack of 3 primed TNT blocks that explode instantly in a rapid chain.",
                "java_modern": "/summon minecraft:tnt ~ ~3 ~ {Fuse:15,Passengers:[{id:\"minecraft:tnt\",Fuse:15},{id:\"minecraft:tnt\",Fuse:15}]}",
                "java_legacy": "/summon tnt ~ ~3 ~ {Fuse:15,Passengers:[{id:\"tnt\",Fuse:15},{id:\"tnt\",Fuse:15}]}",
                "bedrock": "/summon tnt ~ ~3 ~",
                "requires_command_block": false
        },
        {
                "level": 5,
                "id": "mob_magnet",
                "name": "Hostile Mob Magnet",
                "type": "grief",
                "desc": "Instantly teleports all aggressive zombies, skeletons, and creepers within 100 blocks directly onto them.",
                "java_modern": "/execute as [TARGET] run tp @e[type=minecraft:zombie,distance=..100] ~ ~ ~\n/execute as [TARGET] run tp @e[type=minecraft:skeleton,distance=..100] ~ ~ ~",
                "java_legacy": "/execute as [TARGET] run tp @e[type=zombie,distance=..100] ~ ~ ~\n/execute as [TARGET] run tp @e[type=skeleton,distance=..100] ~ ~ ~",
                "bedrock": "/execute as [TARGET] run tp @e[type=zombie] ~ ~ ~\n/execute as [TARGET] run tp @e[type=skeleton] ~ ~ ~",
                "requires_command_block": true
        },
        {
                "level": 5,
                "id": "runner_items",
                "name": "Items Run Away Trap",
                "type": "grief",
                "desc": "Pushes any dropped block items away from the target whenever they walk within 3 blocks, making item pickups impossible.",
                "java_modern": "/execute as @e[type=minecraft:item] at @s if entity @p[distance=..3] run tp @s ~ ~0.25 ~",
                "java_legacy": "/execute as @e[type=item] at @s if entity @p[distance=3] run tp @s ~ ~0.25 ~",
                "bedrock": "/execute as @e[type=item] at @s run tp @s ~ ~0.2 ~",
                "requires_command_block": true
        },
        {
                "level": 5,
                "id": "forced_spin",
                "name": "Continuous Camera Spin",
                "type": "harmless",
                "desc": "Constantly spins the victim's camera direction in micro-angles, making movement or mining impossible.",
                "java_modern": "/execute as [TARGET] at @s run tp @s ~ ~ ~ ~20 ~",
                "java_legacy": "/execute as [TARGET] at @s run tp @s ~ ~ ~ ~20 ~",
                "bedrock": "/execute as [TARGET] at @s run tp @s ~ ~ ~ ~20 ~",
                "requires_command_block": true
        },
        {
                "level": 5,
                "id": "bed_bomb",
                "name": "Bed Explosive Trap",
                "type": "grief",
                "desc": "Summons instant TNT explosions the second the target walks on or sleeps in a bed.",
                "java_modern": "/execute as [TARGET] at @s if block ~ ~-1 ~ #minecraft:beds run summon minecraft:tnt ~ ~ ~",
                "java_legacy": "/execute as [TARGET] at @s if block ~ ~-1 ~ #minecraft:beds run summon tnt ~ ~ ~",
                "bedrock": "/execute as [TARGET] at @s if block ~ ~-1 ~ bed run summon tnt ~ ~ ~",
                "requires_command_block": true
        },
        {
                "level": 5,
                "id": "ping_lag",
                "name": "Rubberband Fake Ping Stutter",
                "type": "harmless",
                "desc": "Constantly teleports the player backwards by fractions of a block to simulate an extremely high-ping 1500ms lag.",
                "java_modern": "/execute as [TARGET] at @s run tp @s ~-0.05 ~ ~0.05",
                "java_legacy": "/execute as [TARGET] at @s run tp @s ~-0.05 ~ ~0.05",
                "bedrock": "/execute as [TARGET] at @s run tp @s ~-0.05 ~ ~0.05",
                "requires_command_block": true
        },
        {
                "level": 5,
                "id": "sky_fall",
                "name": "Terminal Sky Drop (200m)",
                "type": "grief",
                "desc": "Teleports the target 200 blocks straight up into the air, forcing a high-altitude freefall.",
                "java_modern": "/tp [TARGET] ~ ~200 ~",
                "java_legacy": "/tp [TARGET] ~ ~200 ~",
                "bedrock": "/tp [TARGET] ~ ~200 ~",
                "requires_command_block": false
        },
        {
                "level": 5,
                "id": "diamond_burn",
                "name": "Anti-Diamond Deletion",
                "type": "grief",
                "desc": "Continuously vaporizes any dropped Diamond items near the player, rendering diamond drops impossible.",
                "java_modern": "/execute as @e[type=minecraft:item] at @s if entity @s[nbt={Item:{id:\"minecraft:diamond\"}}] run kill @s",
                "java_legacy": "/execute as @e[type=item] at @s if entity @s[nbt={Item:{id:\"minecraft:diamond\"}}] run kill @s",
                "bedrock": "/kill @e[type=item,name=diamond]",
                "requires_command_block": true
        },
        {
                "level": 5,
                "id": "exploding_arrows",
                "name": "Arrow TNT Proximity",
                "type": "grief",
                "desc": "Causes every fired arrow to instantly summon a primed exploding TNT block wherever it travels.",
                "java_modern": "/execute at @e[type=minecraft:arrow] run summon minecraft:tnt ~ ~ ~ {Fuse:0}",
                "java_legacy": "/execute at @e[type=arrow] run summon tnt ~ ~ ~ {Fuse:0}",
                "bedrock": "/execute at @e[type=arrow] run summon tnt ~ ~ ~",
                "requires_command_block": true
        },
        {
                "level": 5,
                "id": "silverfish_spawner",
                "name": "Silverfish Swarm",
                "type": "grief",
                "desc": "Spawns 5 high-speed, aggressive Silverfish directly on top of the target's head.",
                "java_modern": "/execute at [TARGET] run summon minecraft:silverfish ~ ~ ~",
                "java_legacy": "/execute at [TARGET] run summon silverfish ~ ~ ~",
                "bedrock": "/execute at [TARGET] run summon silverfish ~ ~ ~",
                "requires_command_block": false
        },
        {
                "level": 5,
                "id": "blindness_strike",
                "name": "Extreme Blindness Spike",
                "type": "grief",
                "desc": "Applies high-duration server-wide blindness (30 seconds) to completely black out their vision.",
                "java_modern": "/effect give [TARGET] minecraft:blindness 30 1",
                "java_legacy": "/effect give [TARGET] blindness 30 1",
                "bedrock": "/effect [TARGET] blindness 30 1",
                "requires_command_block": false
        },
        {
                "level": 5,
                "id": "fake_timeout",
                "name": "Fake Disconnect Screen",
                "type": "harmless",
                "desc": "Sends a fake network disconnect/timeout system message in red font to spark connection panic.",
                "java_modern": "/tellraw [TARGET] {\"text\":\"Connection timed out: server is shutting down.\",\"color\":\"red\"}",
                "java_legacy": "/tellraw [TARGET] {\"text\":\"Connection timed out: server is shutting down.\",\"color\":\"red\"}",
                "bedrock": "/tellraw [TARGET] {\"rawtext\":[{\"text\":\"§cConnection timed out: server is shutting down.\"}]}",
                "requires_command_block": false
        },
        {
                "level": 5,
                "id": "slow_motion",
                "name": "Slow Motion Trap",
                "type": "grief",
                "desc": "Inflicts absolute extreme slowness and mining fatigue, making their gameplay crawl in slow-motion.",
                "java_modern": "/effect give [TARGET] minecraft:slowness 20 10\n/effect give [TARGET] minecraft:mining_fatigue 20 10",
                "java_legacy": "/effect give [TARGET] slowness 20 10\n/effect give [TARGET] mining_fatigue 20 10",
                "bedrock": "/effect [TARGET] slowness 20 10\n/effect [TARGET] mining_fatigue 20 10",
                "requires_command_block": true
        },
        {
                "level": 5,
                "id": "levitation_void",
                "name": "Anti-Gravity Void",
                "type": "grief",
                "desc": "Shoots the target into the stratosphere with extreme levitation and locks them high above the ground.",
                "java_modern": "/effect give [TARGET] minecraft:levitation 10 20",
                "java_legacy": "/effect give [TARGET] levitation 10 20",
                "bedrock": "/effect [TARGET] levitation 10 20",
                "requires_command_block": false
        },
        {
                "level": 1,
                "id": "wood_pecker",
                "name": "Subtle Wood Pecker",
                "type": "harmless",
                "desc": "Plays a very quiet wood hit sound in the target's ears, simulating a woodpecker on their base.",
                "java_modern": "/playsound minecraft:block.wood.hit player [TARGET] ~ ~ ~ 0.2 1.5",
                "java_legacy": "/playsound block.wood.hit player [TARGET] ~ ~ ~ 0.2 1.5",
                "bedrock": "/playsound hit.wood [TARGET] ~ ~ ~ 0.2 1.5",
                "requires_command_block": false
        },
        {
                "level": 1,
                "id": "bat_flutter",
                "name": "Subtle Bat Wings",
                "type": "harmless",
                "desc": "Simulates bat wing flutter noises in their immediate proximity to make them think one is trapped in their walls.",
                "java_modern": "/playsound minecraft:entity.bat.loop player [TARGET] ~ ~ ~ 0.3 1.1",
                "java_legacy": "/playsound entity.bat.loop player [TARGET] ~ ~ ~ 0.3 1.1",
                "bedrock": "/playsound mob.bat.takeoff [TARGET] ~ ~ ~ 0.3 1.1",
                "requires_command_block": false
        },
        {
                "level": 1,
                "id": "fake_chat_lag",
                "name": "Fake Server Connection Lag",
                "type": "harmless",
                "desc": "Fakes a grey system message warning them of extremely high server latency spikes.",
                "java_modern": "/tellraw [TARGET] {\"text\":\"[Server] Warning: Latency spike detected (842ms)\",\"color\":\"gray\"}",
                "java_legacy": "/tellraw [TARGET] {\"text\":\"[Server] Warning: Latency spike detected (842ms)\",\"color\":\"gray\"}",
                "bedrock": "/tellraw [TARGET] {\"rawtext\":[{\"text\":\"§7[Server] Warning: Latency spike detected (842ms)\"}]}",
                "requires_command_block": false
        },
        {
                "level": 2,
                "id": "camera_drift",
                "name": "Subtle Mouse Drift",
                "type": "harmless",
                "desc": "Slightly rotates the player's camera pitch and yaw by a fraction of a degree, simulating mouse dust.",
                "java_modern": "/execute as [TARGET] at @s run tp @s ~ ~ ~ ~0.25 ~0.2",
                "java_legacy": "/execute as [TARGET] at @s run tp @s ~ ~ ~ ~0.25 ~0.2",
                "bedrock": "/execute as [TARGET] at @s run tp @s ~ ~ ~ ~0.25 ~0.2",
                "requires_command_block": false
        },
        {
                "level": 2,
                "id": "item_repulsion",
                "name": "Hovering Item Repulsion",
                "type": "grief",
                "desc": "Constantly teleports dropped block items 0.1 blocks upwards whenever the target tries to pick them up.",
                "java_modern": "/execute as @e[type=minecraft:item,distance=..2.5] at @s run tp @s ~ ~0.1 ~",
                "java_legacy": "/execute as @e[type=item,distance=..2.5] at @s run tp @s ~ ~0.1 ~",
                "bedrock": "/execute as @e[type=item,r=2] run tp @s ~ ~0.1 ~",
                "requires_command_block": false
        },
        {
                "level": 2,
                "id": "silent_footstep",
                "name": "Fake Grass Footstep",
                "type": "harmless",
                "desc": "Plays soft grass stepping sounds behind them while they are actually walking on solid stone.",
                "java_modern": "/execute as [TARGET] at @s if block ~ ~-1 ~ #minecraft:base_stone_overworld run playsound minecraft:block.grass.step player @s ~ ~-1 ~ 0.4 1",
                "java_legacy": "/execute as [TARGET] at @s run playsound block.grass.step player @s ~ ~-1 ~ 0.4 1",
                "bedrock": "/execute as [TARGET] at @s run playsound step.grass [TARGET] ~ ~-1 ~ 0.4",
                "requires_command_block": false
        },
        {
                "level": 3,
                "id": "warden_dim",
                "name": "Subtle Screen Dimming",
                "type": "harmless",
                "desc": "Applies a short Warden darkness overlay pulse without showing any potion particle effects.",
                "java_modern": "/effect give [TARGET] minecraft:darkness 3 0 true",
                "java_legacy": "/effect give [TARGET] darkness 3 0 true",
                "bedrock": "/effect [TARGET] darkness 3 0 true",
                "requires_command_block": false
        },
        {
                "level": 3,
                "id": "fake_fall",
                "name": "Spooky Ceiling Thud",
                "type": "harmless",
                "desc": "Plays a heavy rock impact landing sound right above their head to make them think a block fell.",
                "java_modern": "/playsound minecraft:block.stone.fall player [TARGET] ~ ~ ~ 0.5 0.7",
                "java_legacy": "/playsound block.stone.fall player [TARGET] ~ ~ ~ 0.5 0.7",
                "bedrock": "/playsound fall.stone [TARGET] ~ ~ ~ 0.5 0.7",
                "requires_command_block": false
        },
        {
                "level": 3,
                "id": "torch_snuffer",
                "name": "Subtle Torch Snuffer",
                "type": "grief",
                "desc": "Extinguishes and deletes any placed wall/floor Torches within 2 blocks of the target player.",
                "java_modern": "/execute at [TARGET] run fill ~-2 ~-1 ~-2 ~2 ~1 ~2 minecraft:air replace minecraft:torch",
                "java_legacy": "/execute at [TARGET] run fill ~-2 ~-1 ~-2 ~2 ~1 ~2 air replace torch",
                "bedrock": "/execute at [TARGET] run fill ~-2 ~-1 ~-2 ~2 ~1 ~2 air replace torch",
                "requires_command_block": true
        },
        {
                "level": 4,
                "id": "phantom_raid",
                "name": "Silent Phantom Swarm",
                "type": "grief",
                "desc": "Summons 2 completely silent Flying Phantoms in the high cloud level directly above them.",
                "java_modern": "/summon minecraft:phantom ~ ~15 ~ {Silent:1b,Size:1}\n/summon minecraft:phantom ~ ~16 ~ {Silent:1b,Size:1}",
                "java_legacy": "/summon phantom ~ ~15 ~ {Silent:1b,Size:1}\n/summon phantom ~ ~16 ~ {Silent:1b,Size:1}",
                "bedrock": "/summon phantom ~ ~15 ~\n/summon phantom ~ ~16 ~",
                "requires_command_block": true
        },
        {
                "level": 4,
                "id": "fake_dragon_death",
                "name": "Ender Dragon Death Panic",
                "type": "harmless",
                "desc": "Sounds the booming global sound of the Ender Dragon dying directly to the target's coordinates.",
                "java_modern": "/playsound minecraft:entity.ender_dragon.death master [TARGET] ~ ~ ~ 1 1",
                "java_legacy": "/playsound entity.ender_dragon.death master [TARGET] ~ ~ ~ 1 1",
                "bedrock": "/playsound mob.enderdragon.death [TARGET] ~ ~ ~ 1 1",
                "requires_command_block": false
        },
        {
                "level": 4,
                "id": "lava_paranoia",
                "name": "Quiet Lava Popping",
                "type": "harmless",
                "desc": "Plays the quiet crackle pop sounds of hot lava pools directly inside their ears.",
                "java_modern": "/playsound minecraft:block.lava.pop player [TARGET] ~ ~ ~ 0.4 1",
                "java_legacy": "/playsound block.lava.pop player [TARGET] ~ ~ ~ 0.4 1",
                "bedrock": "/playsound block.lava.lava [TARGET] ~ ~ ~ 0.4",
                "requires_command_block": false
        },
        {
                "level": 5,
                "id": "biome_swamp",
                "name": "Swamp Biome Shifter",
                "type": "grief",
                "desc": "Converts the local 10x10 chunk biome coordinates to Swamp, permanently muddying grass/water.",
                "java_modern": "/fillbiome ~-5 ~-5 ~-5 ~5 ~5 ~5 minecraft:swamp",
                "java_legacy": "/tellraw [TARGET] {\"text\":\"[Biome shifting requires modern Java 1.20+]\",\"color\":\"red\"}",
                "bedrock": "/fillbiome ~-5 ~-5 ~-5 ~5 ~5 ~5 swamp",
                "requires_command_block": true
        },
        {
                "level": 5,
                "id": "ghost_tnt_primed",
                "name": "primed TNT Panic Trigger",
                "type": "grief",
                "desc": "Summons a primed TNT block with a very long 10-second fuse right next to them, causing instant panic.",
                "java_modern": "/execute at [TARGET] run summon minecraft:tnt ~ ~ ~ {Fuse:200}",
                "java_legacy": "/execute at [TARGET] run summon tnt ~ ~ ~ {Fuse:200}",
                "bedrock": "/execute at [TARGET] run summon tnt ~ ~ ~",
                "requires_command_block": false
        },
        {
                "level": 5,
                "id": "infinite_xp_ding",
                "name": "XP Pickup Loop Noise",
                "type": "harmless",
                "desc": "Plays the loud ding sound of experience orb pickups repeatedly in their ears.",
                "java_modern": "/execute at [TARGET] run playsound minecraft:entity.experience_orb.pickup player [TARGET] ~ ~ ~ 0.5 1",
                "java_legacy": "/execute at [TARGET] run playsound entity.experience_orb.pickup player [TARGET] ~ ~ ~ 0.5 1",
                "bedrock": "/execute at [TARGET] run playsound random.levelup [TARGET] ~ ~ ~ 0.5 1",
                "requires_command_block": false
        },
        {
                "level": 1,
                "id": "phantom_swoop",
                "name": "Ghost Phantom Swoop",
                "type": "harmless",
                "desc": "Plays the terrifying swoop sound of an attacking phantom directly above their head, prompting them to look up in panic.",
                "java_modern": "/playsound minecraft:entity.phantom.swoop master [TARGET] ~ ~ ~ 1 1",
                "java_legacy": "/playsound entity.phantom.swoop master [TARGET] ~ ~ ~ 1 1",
                "bedrock": "/playsound mob.phantom.swoop [TARGET] ~ ~ ~ 1 1",
                "requires_command_block": false
        },
        {
                "level": 1,
                "id": "bat_takeoff",
                "name": "Bat Flight Flutter",
                "type": "harmless",
                "desc": "Plays a quick burst of fluttering bat wings and bat squeaks near their head, simulating a roosting bat nesting in their hair.",
                "java_modern": "/playsound minecraft:entity.bat.takeoff master [TARGET] ~ ~ ~ 1 1.2\n/playsound minecraft:entity.bat.ambient master [TARGET] ~ ~ ~ 1 1",
                "java_legacy": "/playsound entity.bat.takeoff master [TARGET] ~ ~ ~ 1 1.2\n/playsound entity.bat.ambient master [TARGET] ~ ~ ~ 1 1",
                "bedrock": "/playsound mob.bat.takeoff [TARGET] ~ ~ ~ 1 1.2\n/playsound mob.bat.say [TARGET] ~ ~ ~ 1 1",
                "requires_command_block": true
        },
        {
                "level": 1,
                "id": "damp_torch",
                "name": "Damp Torch Fizzle",
                "type": "harmless",
                "desc": "Plays the realistic fizzle sound of a flame or torch getting extinguished with water directly under their feet.",
                "java_modern": "/playsound minecraft:block.fire.extinguish master [TARGET] ~ ~ ~ 0.8 1",
                "java_legacy": "/playsound block.fire.extinguish master [TARGET] ~ ~ ~ 0.8 1",
                "bedrock": "/playsound random.fizz [TARGET] ~ ~ ~ 0.8 1",
                "requires_command_block": false
        },
        {
                "level": 1,
                "id": "witch_chuckle",
                "name": "Ghostly Witch Giggle",
                "type": "harmless",
                "desc": "Plays a faint, spooky witch giggle sound 5 blocks behind them, suggesting an invisible witch is nearby.",
                "java_modern": "/execute at [TARGET] run playsound minecraft:entity.witch.ambient ambient [TARGET] ^ ^ ^-5 0.5 1",
                "java_legacy": "/execute at [TARGET] run playsound entity.witch.ambient ambient [TARGET] ^ ^ ^-5 0.5 1",
                "bedrock": "/execute at [TARGET] run playsound mob.witch.ambient [TARGET] ^ ^ ^-5 0.5 1",
                "requires_command_block": false
        },
        {
                "level": 2,
                "id": "arrow_whiz",
                "name": "Phantom Sniper Shot",
                "type": "harmless",
                "desc": "Simulates a nearby arrow whizzing right past their ear with a high-pitched bow release sound.",
                "java_modern": "/playsound minecraft:entity.arrow.shoot master [TARGET] ~ ~1 ~ 1 1.6",
                "java_legacy": "/playsound entity.arrow.shoot master [TARGET] ~ ~1 ~ 1 1.6",
                "bedrock": "/playsound random.bow [TARGET] ~ ~1 ~ 1 1.6",
                "requires_command_block": false
        },
        {
                "level": 2,
                "id": "totem_pop_sound",
                "name": "Fake Totem Pop",
                "type": "harmless",
                "desc": "Plays the distinctive golden crackling chime of a Totem of Undying popping, sending them into immediate inventory panic.",
                "java_modern": "/playsound minecraft:item.totem.use master [TARGET] ~ ~ ~ 0.9 0.9",
                "java_legacy": "/playsound item.totem.use master [TARGET] ~ ~ ~ 0.9 0.9",
                "bedrock": "/playsound random.totem [TARGET] ~ ~ ~ 0.9 0.9",
                "requires_command_block": false
        },
        {
                "level": 2,
                "id": "creeper_fuse_distant",
                "name": "Distant Creeper Hiss",
                "type": "harmless",
                "desc": "Plays a slightly muffled Creeper fuse countdown sound 4 blocks behind them, creating a split-second jump scare.",
                "java_modern": "/execute at [TARGET] run playsound minecraft:entity.creeper.primed master [TARGET] ^ ^ ^-4 0.6 0.8",
                "java_legacy": "/execute at [TARGET] run playsound entity.creeper.primed master [TARGET] ^ ^ ^-4 0.6 0.8",
                "bedrock": "/execute at [TARGET] run playsound random.fuse [TARGET] ^ ^ ^-4 0.6 0.8",
                "requires_command_block": false
        },
        {
                "level": 2,
                "id": "anvil_drop_distant",
                "name": "Falling Anvil Thud",
                "type": "harmless",
                "desc": "Plays a heavy falling anvil impact thud 4 blocks above them, triggering their shield and look-up reflex.",
                "java_modern": "/playsound minecraft:block.anvil.land master [TARGET] ~ ~4 ~ 0.4 1",
                "java_legacy": "/playsound block.anvil.land master [TARGET] ~ ~4 ~ 0.4 1",
                "bedrock": "/playsound random.anvil_land [TARGET] ~ ~4 ~ 0.4",
                "requires_command_block": false
        },
        {
                "level": 2,
                "id": "item_pusher",
                "name": "Inventory Repulsion Field",
                "type": "harmless",
                "desc": "Teleports dropped items nearby slightly away from the target, making it incredibly tedious to collect loot.",
                "java_modern": "/execute at [TARGET] run tp @e[type=minecraft:item,distance=..2.5] ~1 ~ ~1",
                "java_legacy": "/execute at [TARGET] run tp @e[type=item,r=2.5] ~1 ~ ~1",
                "bedrock": "/execute at [TARGET] run tp @e[type=item,r=2.5] ~1 ~ ~1",
                "requires_command_block": false
        },
        {
                "level": 3,
                "id": "bee_swarm",
                "name": "Ghost Bee Swarm",
                "type": "harmless",
                "desc": "Simulates an angry hive of bees buzzing persistently in their ears, causing extreme auditory distraction.",
                "java_modern": "/playsound minecraft:entity.bee.loop master [TARGET] ~ ~ ~ 1 1",
                "java_legacy": "/playsound entity.bee.loop master [TARGET] ~ ~ ~ 1 1",
                "bedrock": "/playsound mob.bee.loop [TARGET] ~ ~ ~ 1 1",
                "requires_command_block": false
        },
        {
                "level": 3,
                "id": "silverfish_crawl",
                "name": "Silverfish Infestation Sound",
                "type": "harmless",
                "desc": "Plays scurrying silverfish crawling footsteps and minor hisses directly under their feet.",
                "java_modern": "/playsound minecraft:entity.silverfish.step master [TARGET] ~ ~ ~ 0.8 1.2\n/playsound minecraft:entity.silverfish.ambient master [TARGET] ~ ~ ~ 0.8 1",
                "java_legacy": "/playsound entity.silverfish.step master [TARGET] ~ ~ ~ 0.8 1.2\n/playsound entity.silverfish.ambient master [TARGET] ~ ~ ~ 0.8 1",
                "bedrock": "/playsound mob.silverfish.step [TARGET] ~ ~ ~ 0.8 1.2\n/playsound mob.silverfish.say [TARGET] ~ ~ ~ 0.8 1",
                "requires_command_block": true
        },
        {
                "level": 3,
                "id": "ghast_screamer",
                "name": "Overworld Ghast Alert",
                "type": "harmless",
                "desc": "Plays a loud Ghast warning shriek and firing blast directly in their ears, simulating a portal spillover.",
                "java_modern": "/playsound minecraft:entity.ghast.warn master [TARGET] ~ ~ ~ 1 1\n/playsound minecraft:entity.ghast.shoot master [TARGET] ~ ~ ~ 1 1",
                "java_legacy": "/playsound entity.ghast.warn master [TARGET] ~ ~ ~ 1 1\n/playsound entity.ghast.shoot master [TARGET] ~ ~ ~ 1 1",
                "bedrock": "/playsound mob.ghast.charge [TARGET] ~ ~ ~ 1 1\n/playsound mob.ghast.fireball [TARGET] ~ ~ ~ 1 1",
                "requires_command_block": true
        },
        {
                "level": 3,
                "id": "chest_creaker",
                "name": "Creaking Chest Shadow",
                "type": "harmless",
                "desc": "Plays a slow creaking chest open sound right behind them, simulating a ghost opening storage vaults.",
                "java_modern": "/execute at [TARGET] run playsound minecraft:block.chest.open block [TARGET] ^ ^ ^-2 0.7 0.7",
                "java_legacy": "/execute at [TARGET] run playsound block.chest.open block [TARGET] ^ ^ ^-2 0.7 0.7",
                "bedrock": "/execute at [TARGET] run playsound random.chestopen [TARGET] ^ ^ ^-2 0.7 0.7",
                "requires_command_block": false
        },
        {
                "level": 3,
                "id": "sculk_shrieker_ambient",
                "name": "Sculk Vibration Scare",
                "type": "harmless",
                "desc": "Plays the clicking vibration of a sculk sensor followed by a distant shrieker cry, triggering Warden fears.",
                "java_modern": "/playsound minecraft:block.sculk_sensor.clicking master [TARGET] ~ ~ ~ 0.8 1\n/playsound minecraft:entity.warden.nearby_close master [TARGET] ~ ~ ~ 0.5 1",
                "java_legacy": "/playsound block.sculk_sensor.clicking master [TARGET] ~ ~ ~ 0.8 1\n/playsound entity.warden.nearby_close master [TARGET] ~ ~ ~ 0.5 1",
                "bedrock": "/playsound block.sculk_shrieker.shriek [TARGET] ~ ~ ~ 0.6 1",
                "requires_command_block": true
        },
        {
                "level": 4,
                "id": "elder_guardian_curse",
                "name": "Elder Guardian jumpscare",
                "type": "harmless",
                "desc": "Plays the elder guardian curse chime and applies 1 second mining fatigue, flash-projecting the giant ghostly fish on their screen.",
                "java_modern": "/playsound minecraft:entity.elder_guardian.curse master [TARGET] ~ ~ ~ 1 1\n/effect give [TARGET] minecraft:mining_fatigue 1 0 true",
                "java_legacy": "/playsound entity.elder_guardian.curse master [TARGET] ~ ~ ~ 1 1\n/effect give [TARGET] mining_fatigue 1 0 true",
                "bedrock": "/playsound mob.elderguardian.curse [TARGET] ~ ~ ~ 1 1\n/effect [TARGET] mining_fatigue 1 0",
                "requires_command_block": true
        },
        {
                "level": 4,
                "id": "fake_diamond_advancement",
                "name": "Fake Dedication Achievement",
                "type": "harmless",
                "desc": "Sends a fake chat broadcast announcing the victim just completed a top-tier legendary netherite advancement.",
                "java_modern": "/tellraw @a [{\"selector\":\"[TARGET]\"},{\"text\":\" has made the advancement \",\"color\":\"white\"},{\"text\":\"[Cover Me in Debris]\",\"color\":\"purple\",\"hoverEvent\":{\"action\":\"show_text\",\"contents\":{\"text\":\"Complete Netherite armor set\"}}}]",
                "java_legacy": "/tellraw @a [{\"selector\":\"[TARGET]\"},{\"text\":\" has made the advancement \",\"color\":\"white\"},{\"text\":\"[Cover Me in Debris]\",\"color\":\"purple\"}]",
                "bedrock": "/tellraw @a {\"rawtext\":[{\"selector\":\"[TARGET]\"},{\"text\":\" has made the advancement §d[Cover Me in Debris]\"}]}",
                "requires_command_block": false
        },
        {
                "level": 4,
                "id": "fake_op_whisper",
                "name": "Operator Status Revoked",
                "type": "harmless",
                "desc": "Spams a gray server system chat notifying them that they have been de-opped and can no longer command.",
                "java_modern": "/tellraw [TARGET] {\"text\":\"You are no longer server operator\",\"color\":\"gray\",\"italic\":true}",
                "java_legacy": "/tellraw [TARGET] {\"text\":\"You are no longer server operator\",\"color\":\"gray\",\"italic\":true}",
                "bedrock": "/tellraw [TARGET] {\"rawtext\":[{\"text\":\"§7§oYou are no longer server operator\"}]}",
                "requires_command_block": false
        },
        {
                "level": 4,
                "id": "lightning_strike_fake",
                "name": "Silent Lightning Bolt",
                "type": "harmless",
                "desc": "Spawns a massive lightning strike directly on their body but silences the damage, generating a brilliant screen flash.",
                "java_modern": "/execute at [TARGET] run summon minecraft:lightning_bolt ~ ~ ~ {Silent:1b}",
                "java_legacy": "/execute at [TARGET] run summon lightning_bolt ~ ~ ~ {Silent:1b}",
                "bedrock": "/execute at [TARGET] run summon lightning_bolt ~ ~ ~",
                "requires_command_block": false
        },
        {
                "level": 5,
                "id": "item_void",
                "name": "Offhand Void Eraser",
                "type": "grief",
                "desc": "Clears their active offhand slot instantly, removing shields or weapons in the heat of combat.",
                "java_modern": "/item replace entity [TARGET] weapon.offhand with minecraft:air",
                "java_legacy": "/replaceitem entity [TARGET] slot.weapon.offhand 0 minecraft:air",
                "bedrock": "/replaceitem entity [TARGET] slot.weapon.offhand 0 air",
                "requires_command_block": false
        },
        {
                "level": 5,
                "id": "fake_crash",
                "name": "Fake Connection Exception",
                "type": "harmless",
                "desc": "Sends a dark-red system message mimicking a severe Java IOException server connection reset.",
                "java_modern": "/tellraw [TARGET] {\"text\":\"Internal Exception: java.io.IOException: An existing connection was forcibly closed by the remote host.\",\"color\":\"dark_red\"}",
                "java_legacy": "/tellraw [TARGET] {\"text\":\"Internal Exception: java.io.IOException: An existing connection was forcibly closed by the remote host.\",\"color\":\"dark_red\"}",
                "bedrock": "/tellraw [TARGET] {\"rawtext\":[{\"text\":\"§4Internal Exception: java.io.IOException: Connection reset by peer.\"}]}",
                "requires_command_block": false
        },
        {
                "level": 5,
                "id": "portal_spill",
                "name": "Nether Portal Hallucinations",
                "type": "harmless",
                "desc": "Plays continuous dark nether portal loop portals inside their ears, driving them to find the ghost portal.",
                "java_modern": "/playsound minecraft:block.portal.ambient master [TARGET] ~ ~ ~ 0.5 1",
                "java_legacy": "/playsound block.portal.ambient master [TARGET] ~ ~ ~ 0.5 1",
                "bedrock": "/playsound portal.portal [TARGET] ~ ~ ~ 0.5 1",
                "requires_command_block": false
        },
        {
                "level": 5,
                "id": "sudden_void",
                "name": "End Void Fall Simulator",
                "type": "harmless",
                "desc": "Applies a split-second darkness effect and plays a massive falling impact rush to mimic dropping into the End void.",
                "java_modern": "/effect give [TARGET] minecraft:darkness 1 0 true\n/playsound minecraft:entity.player.hurt_on_fire master [TARGET] ~ ~ ~ 0.5 1.5",
                "java_legacy": "/effect give [TARGET] darkness 1 0 true\n/playsound entity.player.hurt_on_fire master [TARGET] ~ ~ ~ 0.5 1.5",
                "bedrock": "/effect [TARGET] darkness 1 0\n/playsound damage.fallbig [TARGET] ~ ~ ~ 0.5 1.5",
                "requires_command_block": true
        }
],

    // Preserved Trolls Chains List
    trolls_chains: [
        {
                "id": "chain_antigravity",
                "name": "⛓️ Anti-Gravity Zone Sensor",
                "desc": "Constructs a repeating proximity block chain that traps the target in a zero-gravity levitating vortex with flap sounds.",
                "blocks": [
                        {
                                "step": 1,
                                "type": "Repeat",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] run particle minecraft:cloud ~ ~1 ~ 0.5 0.5 0.5 0.05 10"
                        },
                        {
                                "step": 2,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/effect give [TARGET] minecraft:levitation 1 4 true"
                        },
                        {
                                "step": 3,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/playsound minecraft:entity.phantom.flap ambient [TARGET] ~ ~ ~ 0.6 1"
                        }
                ]
        },
        {
                "id": "chain_obsidian_coffin",
                "name": "⛓️ Step-on-Grass Coffin Trap",
                "desc": "Deploys a repeating trigger block chain that instantly traps the victim inside a solid Obsidian block coffin the second they step on grass.",
                "blocks": [
                        {
                                "step": 1,
                                "type": "Repeat",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] if block ~ ~-1 ~ minecraft:grass_block run fill ~-1 ~-1 ~-1 ~1 ~2 ~1 minecraft:obsidian outline"
                        },
                        {
                                "step": 2,
                                "type": "Chain",
                                "cond": "Conditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] run fill ~ ~-1 ~ ~ ~ ~ minecraft:water"
                        },
                        {
                                "step": 3,
                                "type": "Chain",
                                "cond": "Conditional",
                                "active": "Always Active",
                                "cmd": "/tellraw @a {\"text\":\"[TARGET] stepped on grass and was entombed!\",\"color\":\"red\"}"
                        }
                ]
        },
        {
                "id": "chain_stalker_creeper",
                "name": "⛓️ Invisible Creeper Stalker",
                "desc": "Sets up an active repeating block chain that keeps tele-transporting a silent invisible Creeper 2 blocks directly behind the player's head.",
                "blocks": [
                        {
                                "step": 1,
                                "type": "Repeat",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] run tp @e[type=minecraft:creeper,tag=stalker,limit=1] ^ ^ ^-2"
                        },
                        {
                                "step": 2,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] run playsound minecraft:entity.creeper.primed ambient @p ~ ~ ~ 0.3 1"
                        },
                        {
                                "step": 3,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute as [TARGET] run particle minecraft:smoke ~ ~1 ~ 0.2 0.2 0.2 0.02 5"
                        }
                ]
        },
        {
                "id": "chain_magnetic_void",
                "name": "⛓️ Drop Item Magnetic Void",
                "desc": "Lays down an active repeating block chain that pulls dropped weapons directly into the sky and vaporizes them instantly.",
                "blocks": [
                        {
                                "step": 1,
                                "type": "Repeat",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] run tp @e[type=minecraft:item,distance=..6] ~ ~5 ~"
                        },
                        {
                                "step": 2,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] run particle minecraft:portal ~ ~1 ~ 0.5 0.5 0.5 0.1 20"
                        },
                        {
                                "step": 3,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] run kill @e[type=minecraft:item,distance=..6]"
                        }
                ]
        },
        {
                "id": "chain_warden_heartbeat",
                "name": "⛓️ Warden Heartbeat Hunt",
                "desc": "Simulates the Warden hunting them down: pulse low darkness visual effects, emit loud thumping heartbeat plays, emit kinetic sonic blasts, and end with an echoing warden scream.",
                "blocks": [
                        {
                                "step": 1,
                                "type": "Repeat",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/playsound minecraft:entity.warden.heartbeat master [TARGET] ~ ~ ~ 1.2 0.8"
                        },
                        {
                                "step": 2,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/effect give [TARGET] minecraft:darkness 4 0 true"
                        },
                        {
                                "step": 3,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] run particle minecraft:sonic_boom ~ ~1 ~ 0 0 0 0 1"
                        },
                        {
                                "step": 4,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] run playsound minecraft:entity.warden.roar master [TARGET] ~ ~ ~ 0.8 0.6"
                        }
                ]
        },
        {
                "id": "chain_lightning_magnet",
                "name": "⛓️ Sprinting Thunder Magnet",
                "desc": "Detonates silent thunder bolts directly behind them whenever they run, spawning glowing sparks and giving a dynamic kinetic speed buff.",
                "blocks": [
                        {
                                "step": 1,
                                "type": "Repeat",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] run summon minecraft:lightning_bolt ^ ^ ^-4 {Silent:1b}"
                        },
                        {
                                "step": 2,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] run particle minecraft:electric_spark ~ ~1 ~ 0.4 0.4 0.4 0.1 12"
                        },
                        {
                                "step": 3,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/playsound minecraft:entity.lightning_bolt.thunder master [TARGET] ~ ~ ~ 0.5 1"
                        },
                        {
                                "step": 4,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/effect give [TARGET] minecraft:speed 2 4 true"
                        }
                ]
        },
        {
                "id": "chain_glitch_tp",
                "name": "⛓️ Packet Loss Glitch Drift",
                "desc": "Rotates and slips their position slightly back whenever they trigger the loop, emitting void enderman portals and fake console sync logs.",
                "blocks": [
                        {
                                "step": 1,
                                "type": "Repeat",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] run tp [TARGET] ~ ~ ~ ~3 ~"
                        },
                        {
                                "step": 2,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/playsound minecraft:entity.enderman.teleport master [TARGET] ~ ~ ~ 0.3 1.4"
                        },
                        {
                                "step": 3,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] run particle minecraft:portal ~ ~1 ~ 0.3 0.3 0.3 0.05 6"
                        },
                        {
                                "step": 4,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/tellraw [TARGET] {\"text\":\"[System] Warning: High packet loss detected. Synced coordinate drift.\",\"color\":\"gray\"}"
                        }
                ]
        },
        {
                "id": "chain_floor_decay",
                "name": "⛓️ Stepping-Stone Floor Decay",
                "desc": "Causes standard Stone blocks directly beneath their feet to decay into Gravel blocks, play thud block hit warnings, then crumble to Sand and spawn heavy sand dust particles.",
                "blocks": [
                        {
                                "step": 1,
                                "type": "Repeat",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] if block ~ ~-1 ~ minecraft:stone run setblock ~ ~-1 ~ minecraft:gravel"
                        },
                        {
                                "step": 2,
                                "type": "Chain",
                                "cond": "Conditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] run playsound minecraft:block.gravel.hit master [TARGET] ~ ~-1 ~ 1 0.8"
                        },
                        {
                                "step": 3,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] if block ~ ~-2 ~ minecraft:grass_block run setblock ~ ~-2 ~ minecraft:sand"
                        },
                        {
                                "step": 4,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] run particle minecraft:dust 0.6 0.5 0.4 1 ~ ~-1 ~ 0.3 0.1 0.3 0.01 10"
                        }
                ]
        },
        {
                "id": "chain_herobrine_ghost",
                "name": "⛓️ Herobrine Stalker Sighting",
                "desc": "Constructs a repeating chain that spawns a silent, invulnerable Herobrine figure (armor stand with custom skull) behind them. Rings ambient cave notes, emits dark soot, and safely kills it when they turn around.",
                "blocks": [
                        {
                                "step": 1,
                                "type": "Repeat",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] unless entity @e[tag=herobrine,distance=..15] run summon minecraft:armor_stand ^ ^1 ^-4 {Tags:[\"herobrine\"],Invisible:1b,ArmorItems:[{},{},{},{id:\"minecraft:player_head\",Count:1b,tag:{SkullOwner:\"MHF_Herobrine\"}}],DisabledSlots:2039583}"
                        },
                        {
                                "step": 2,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] as @e[tag=herobrine] run tp @s ^ ^1 ^-4"
                        },
                        {
                                "step": 3,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] if entity @e[tag=herobrine,age=..20] run playsound minecraft:ambient.cave master [TARGET] ~ ~ ~ 1 0.7"
                        },
                        {
                                "step": 4,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at @e[tag=herobrine] run particle minecraft:large_smoke ~ ~1.5 ~ 0.1 0.1 0.1 0.01 3"
                        },
                        {
                                "step": 5,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] run kill @e[tag=herobrine,distance=..2.2]"
                        }
                ]
        },
        {
                "id": "chain_potato_clutter",
                "name": "⛓️ Poisonous Potato Clutterer",
                "desc": "Constantly spams poisonous potatoes into their inventory slots: forces their offhand item out of existence, plays squishing sounds, feeds hotbar slots, and releases toxic green particles.",
                "blocks": [
                        {
                                "step": 1,
                                "type": "Repeat",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/item replace entity [TARGET] weapon.offhand with minecraft:poisonous_potato"
                        },
                        {
                                "step": 2,
                                "type": "Chain",
                                "cond": "Conditional",
                                "active": "Always Active",
                                "cmd": "/playsound minecraft:entity.slime.squish master [TARGET] ~ ~ ~ 0.8 1"
                        },
                        {
                                "step": 3,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/give [TARGET] minecraft:poisonous_potato 1"
                        },
                        {
                                "step": 4,
                                "type": "Chain",
                                "cond": "Unconditional",
                                "active": "Always Active",
                                "cmd": "/execute at [TARGET] run particle minecraft:spore_blossom_air ~ ~1 ~ 0.4 0.4 0.4 0 5"
                        }
                ]
        }
],

    // Preserved Effects List
    effects: [
        {
                "id": "minecraft:speed",
                "name": "Speed",
                "numeric_id": 1,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/speed.png"
        },
        {
                "id": "minecraft:slowness",
                "name": "Slowness",
                "numeric_id": 2,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/slowness.png"
        },
        {
                "id": "minecraft:haste",
                "name": "Haste",
                "numeric_id": 3,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/haste.png"
        },
        {
                "id": "minecraft:mining_fatigue",
                "name": "Mining Fatigue",
                "numeric_id": 4,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/mining_fatigue.png"
        },
        {
                "id": "minecraft:strength",
                "name": "Strength",
                "numeric_id": 5,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/strength.png"
        },
        {
                "id": "minecraft:instant_health",
                "name": "Instant Health",
                "numeric_id": 6,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/instant_health.png"
        },
        {
                "id": "minecraft:instant_damage",
                "name": "Instant Damage",
                "numeric_id": 7,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/instant_damage.png"
        },
        {
                "id": "minecraft:jump_boost",
                "name": "Jump Boost",
                "numeric_id": 8,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/jump_boost.png"
        },
        {
                "id": "minecraft:nausea",
                "name": "Nausea",
                "numeric_id": 9,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/nausea.png"
        },
        {
                "id": "minecraft:regeneration",
                "name": "Regeneration",
                "numeric_id": 10,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/regeneration.png"
        },
        {
                "id": "minecraft:resistance",
                "name": "Resistance",
                "numeric_id": 11,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/resistance.png"
        },
        {
                "id": "minecraft:fire_resistance",
                "name": "Fire Resistance",
                "numeric_id": 12,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/fire_resistance.png"
        },
        {
                "id": "minecraft:water_breathing",
                "name": "Water Breathing",
                "numeric_id": 13,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/water_breathing.png"
        },
        {
                "id": "minecraft:invisibility",
                "name": "Invisibility",
                "numeric_id": 14,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/invisibility.png"
        },
        {
                "id": "minecraft:blindness",
                "name": "Blindness",
                "numeric_id": 15,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/blindness.png"
        },
        {
                "id": "minecraft:night_vision",
                "name": "Night Vision",
                "numeric_id": 16,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/night_vision.png"
        },
        {
                "id": "minecraft:hunger",
                "name": "Hunger",
                "numeric_id": 17,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/hunger.png"
        },
        {
                "id": "minecraft:weakness",
                "name": "Weakness",
                "numeric_id": 18,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/weakness.png"
        },
        {
                "id": "minecraft:poison",
                "name": "Poison",
                "numeric_id": 19,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/poison.png"
        },
        {
                "id": "minecraft:wither",
                "name": "Wither",
                "numeric_id": 20,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/wither.png"
        },
        {
                "id": "minecraft:health_boost",
                "name": "Health Boost",
                "numeric_id": 21,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/health_boost.png"
        },
        {
                "id": "minecraft:absorption",
                "name": "Absorption",
                "numeric_id": 22,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/absorption.png"
        },
        {
                "id": "minecraft:saturation",
                "name": "Saturation",
                "numeric_id": 23,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/saturation.png"
        },
        {
                "id": "minecraft:glowing",
                "name": "Glowing",
                "numeric_id": 24,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/glowing.png"
        },
        {
                "id": "minecraft:levitation",
                "name": "Levitation",
                "numeric_id": 25,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/levitation.png"
        },
        {
                "id": "minecraft:luck",
                "name": "Luck",
                "numeric_id": 26,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/luck.png"
        },
        {
                "id": "minecraft:bad_luck",
                "name": "Bad Luck",
                "numeric_id": 27,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/unluck.png"
        },
        {
                "id": "minecraft:slow_falling",
                "name": "Slow Falling",
                "numeric_id": 28,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/slow_falling.png"
        },
        {
                "id": "minecraft:conduit_power",
                "name": "Conduit Power",
                "numeric_id": 29,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/conduit_power.png"
        },
        {
                "id": "minecraft:dolphins_grace",
                "name": "Dolphin's Grace",
                "numeric_id": 30,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/dolphins_grace.png"
        },
        {
                "id": "minecraft:bad_omen",
                "name": "Bad Omen",
                "numeric_id": 31,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/bad_omen.png"
        },
        {
                "id": "minecraft:hero_of_the_village",
                "name": "Hero of the Village",
                "numeric_id": 32,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/hero_of_the_village.png"
        },
        {
                "id": "minecraft:darkness",
                "name": "Darkness",
                "numeric_id": 33,
                "icon": "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/darkness.png"
        }
],

    // Preserved Particles List
    particles: [
        {
                "id": "minecraft:ambient_entity_effect",
                "name": "Ambient Entity Effect",
                "icon": "✨"
        },
        {
                "id": "minecraft:angry_villager",
                "name": "Angry Villager",
                "icon": "✨"
        },
        {
                "id": "minecraft:ash",
                "name": "Ash",
                "icon": "✨"
        },
        {
                "id": "minecraft:bubble",
                "name": "Bubble",
                "icon": "✨"
        },
        {
                "id": "minecraft:cherry_leaves",
                "name": "Cherry Leaves",
                "icon": "✨"
        },
        {
                "id": "minecraft:cloud",
                "name": "Cloud Dust",
                "icon": "✨"
        },
        {
                "id": "minecraft:compost",
                "name": "Compost",
                "icon": "✨"
        },
        {
                "id": "minecraft:crimson_spore",
                "name": "Crimson Spore",
                "icon": "✨"
        },
        {
                "id": "minecraft:damage_indicator",
                "name": "Damage Indicator",
                "icon": "✨"
        },
        {
                "id": "minecraft:dolphin",
                "name": "Dolphin",
                "icon": "✨"
        },
        {
                "id": "minecraft:dragon_breath",
                "name": "Dragon's Breath",
                "icon": "✨"
        },
        {
                "id": "minecraft:dripping_dripstone_lava",
                "name": "Dripping Lava",
                "icon": "✨"
        },
        {
                "id": "minecraft:dripping_dripstone_water",
                "name": "Dripping Water",
                "icon": "✨"
        },
        {
                "id": "minecraft:dripping_lava",
                "name": "Dripping Lava Stream",
                "icon": "✨"
        },
        {
                "id": "minecraft:dripping_water",
                "name": "Dripping Water Stream",
                "icon": "✨"
        },
        {
                "id": "minecraft:dust",
                "name": "Dust",
                "icon": "✨"
        },
        {
                "id": "minecraft:electric_spark",
                "name": "Electric Spark",
                "icon": "✨"
        },
        {
                "id": "minecraft:enchanted_hit",
                "name": "Enchanted Hit",
                "icon": "✨"
        },
        {
                "id": "minecraft:end_rod",
                "name": "End Rod",
                "icon": "✨"
        },
        {
                "id": "minecraft:entity_effect",
                "name": "Entity Effect",
                "icon": "✨"
        },
        {
                "id": "minecraft:explosion",
                "name": "Explosion",
                "icon": "✨"
        },
        {
                "id": "minecraft:explosion_emitter",
                "name": "Huge Explosion",
                "icon": "✨"
        },
        {
                "id": "minecraft:falling_dripstone_lava",
                "name": "Falling Lava",
                "icon": "✨"
        },
        {
                "id": "minecraft:falling_dripstone_water",
                "name": "Falling Water",
                "icon": "✨"
        },
        {
                "id": "minecraft:falling_dust",
                "name": "Falling Dust",
                "icon": "✨"
        },
        {
                "id": "minecraft:falling_honey",
                "name": "Falling Honey",
                "icon": "✨"
        },
        {
                "id": "minecraft:falling_lava",
                "name": "Falling Lava Stream",
                "icon": "✨"
        },
        {
                "id": "minecraft:falling_nectar",
                "name": "Falling Nectar",
                "icon": "✨"
        },
        {
                "id": "minecraft:falling_spore_blossom",
                "name": "Falling Spore Blossom",
                "icon": "✨"
        },
        {
                "id": "minecraft:falling_water",
                "name": "Falling Water Stream",
                "icon": "✨"
        },
        {
                "id": "minecraft:firework",
                "name": "Firework Spark",
                "icon": "✨"
        },
        {
                "id": "minecraft:fishing",
                "name": "Fishing Line",
                "icon": "✨"
        },
        {
                "id": "minecraft:flame",
                "name": "Fire Flame",
                "icon": "✨"
        },
        {
                "id": "minecraft:glow",
                "name": "Glow",
                "icon": "✨"
        },
        {
                "id": "minecraft:glow_squid_ink",
                "name": "Glow Squid Ink",
                "icon": "✨"
        },
        {
                "id": "minecraft:happy_villager",
                "name": "Happy Villager",
                "icon": "✨"
        },
        {
                "id": "minecraft:heart",
                "name": "Red Hearts",
                "icon": "✨"
        },
        {
                "id": "minecraft:instant_effect",
                "name": "Instant Effect",
                "icon": "✨"
        },
        {
                "id": "minecraft:item_slime",
                "name": "Slime Bits",
                "icon": "✨"
        },
        {
                "id": "minecraft:item_snowball",
                "name": "Snowball Bits",
                "icon": "✨"
        },
        {
                "id": "minecraft:large_smoke",
                "name": "Large Smoke",
                "icon": "✨"
        },
        {
                "id": "minecraft:lava",
                "name": "Lava Spark",
                "icon": "✨"
        },
        {
                "id": "minecraft:mycelium",
                "name": "Mycelium spores",
                "icon": "✨"
        },
        {
                "id": "minecraft:nautilus",
                "name": "Nautilus Spores",
                "icon": "✨"
        },
        {
                "id": "minecraft:note",
                "name": "Music Note",
                "icon": "✨"
        },
        {
                "id": "minecraft:poof",
                "name": "Poof Dust",
                "icon": "✨"
        },
        {
                "id": "minecraft:portal",
                "name": "Portal Particle",
                "icon": "✨"
        },
        {
                "id": "minecraft:rain",
                "name": "Rain Splashes",
                "icon": "✨"
        },
        {
                "id": "minecraft:sculk_charge",
                "name": "Sculk Charge",
                "icon": "✨"
        },
        {
                "id": "minecraft:sculk_charge_pop",
                "name": "Sculk Charge Pop",
                "icon": "✨"
        },
        {
                "id": "minecraft:sculk_soul",
                "name": "Sculk Soul",
                "icon": "✨"
        },
        {
                "id": "minecraft:shriek",
                "name": "Sonic Shriek",
                "icon": "✨"
        },
        {
                "id": "minecraft:small_flame",
                "name": "Small Flame",
                "icon": "✨"
        },
        {
                "id": "minecraft:snowflake",
                "name": "Snowflake",
                "icon": "✨"
        },
        {
                "id": "minecraft:sonic_boom",
                "name": "Sonic Boom Wave",
                "icon": "✨"
        },
        {
                "id": "minecraft:soul",
                "name": "Soul Sparkle",
                "icon": "✨"
        },
        {
                "id": "minecraft:soul_fire_flame",
                "name": "Soul Fire Flame",
                "icon": "✨"
        },
        {
                "id": "minecraft:spit",
                "name": "Llama Spit",
                "icon": "✨"
        },
        {
                "id": "minecraft:spore_blossom_air",
                "name": "Spore Blossom Air",
                "icon": "✨"
        },
        {
                "id": "minecraft:squid_ink",
                "name": "Squid Ink",
                "icon": "✨"
        },
        {
                "id": "minecraft:sweep_attack",
                "name": "Sword Sweep Attack",
                "icon": "✨"
        },
        {
                "id": "minecraft:totem_of_undying",
                "name": "Totem Sparkles",
                "icon": "✨"
        },
        {
                "id": "minecraft:underwater",
                "name": "Underwater Bubbles",
                "icon": "✨"
        },
        {
                "id": "minecraft:warped_spore",
                "name": "Warped Spore",
                "icon": "✨"
        },
        {
                "id": "minecraft:wax_off",
                "name": "Wax Off",
                "icon": "✨"
        },
        {
                "id": "minecraft:wax_on",
                "name": "Wax On",
                "icon": "✨"
        },
        {
                "id": "minecraft:white_ash",
                "name": "White Ash",
                "icon": "✨"
        },
        {
                "id": "minecraft:witch",
                "name": "Witch Magic Sparkles",
                "icon": "✨"
        }
],

    // Generated Sounds List (ALL 1485 entries)
    sounds: [
        {
                "id": "minecraft:ambient.basalt_deltas.additions",
                "name": "Ambient Basalt Deltas Additions",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.basalt_deltas.loop",
                "name": "Ambient Basalt Deltas Loop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.basalt_deltas.mood",
                "name": "Ambient Basalt Deltas Mood",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.cave",
                "name": "Ambient Cave",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.crimson_forest.additions",
                "name": "Ambient Crimson Forest Additions",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.crimson_forest.loop",
                "name": "Ambient Crimson Forest Loop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.crimson_forest.mood",
                "name": "Ambient Crimson Forest Mood",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.nether_wastes.additions",
                "name": "Ambient Nether Wastes Additions",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.nether_wastes.loop",
                "name": "Ambient Nether Wastes Loop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.nether_wastes.mood",
                "name": "Ambient Nether Wastes Mood",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.soul_sand_valley.additions",
                "name": "Ambient Soul Sand Valley Additions",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.soul_sand_valley.loop",
                "name": "Ambient Soul Sand Valley Loop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.soul_sand_valley.mood",
                "name": "Ambient Soul Sand Valley Mood",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.underwater.enter",
                "name": "Ambient Underwater Enter",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.underwater.exit",
                "name": "Ambient Underwater Exit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.underwater.loop",
                "name": "Ambient Underwater Loop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.underwater.loop.additions",
                "name": "Ambient Underwater Loop Additions",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.underwater.loop.additions.rare",
                "name": "Ambient Underwater Loop Additions Rare",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.underwater.loop.additions.ultra_rare",
                "name": "Ambient Underwater Loop Additions Ultra Rare",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.warped_forest.additions",
                "name": "Ambient Warped Forest Additions",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.warped_forest.loop",
                "name": "Ambient Warped Forest Loop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ambient.warped_forest.mood",
                "name": "Ambient Warped Forest Mood",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.amethyst_block.break",
                "name": "Block Amethyst Block Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.amethyst_block.chime",
                "name": "Block Amethyst Block Chime",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.amethyst_block.fall",
                "name": "Block Amethyst Block Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.amethyst_block.hit",
                "name": "Block Amethyst Block Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.amethyst_block.place",
                "name": "Block Amethyst Block Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.amethyst_block.resonate",
                "name": "Block Amethyst Block Resonate",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.amethyst_block.step",
                "name": "Block Amethyst Block Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.amethyst_cluster.break",
                "name": "Block Amethyst Cluster Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.amethyst_cluster.fall",
                "name": "Block Amethyst Cluster Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.amethyst_cluster.hit",
                "name": "Block Amethyst Cluster Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.amethyst_cluster.place",
                "name": "Block Amethyst Cluster Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.amethyst_cluster.step",
                "name": "Block Amethyst Cluster Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.ancient_debris.break",
                "name": "Block Ancient Debris Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.ancient_debris.fall",
                "name": "Block Ancient Debris Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.ancient_debris.hit",
                "name": "Block Ancient Debris Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.ancient_debris.place",
                "name": "Block Ancient Debris Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.ancient_debris.step",
                "name": "Block Ancient Debris Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.anvil.break",
                "name": "Block Anvil Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.anvil.destroy",
                "name": "Block Anvil Destroy",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.anvil.fall",
                "name": "Block Anvil Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.anvil.hit",
                "name": "Block Anvil Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.anvil.land",
                "name": "Block Anvil Land",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.anvil.place",
                "name": "Block Anvil Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.anvil.step",
                "name": "Block Anvil Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.anvil.use",
                "name": "Block Anvil Use",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.azalea_leaves.break",
                "name": "Block Azalea Leaves Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.azalea_leaves.fall",
                "name": "Block Azalea Leaves Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.azalea_leaves.hit",
                "name": "Block Azalea Leaves Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.azalea_leaves.place",
                "name": "Block Azalea Leaves Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.azalea_leaves.step",
                "name": "Block Azalea Leaves Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.azalea.break",
                "name": "Block Azalea Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.azalea.fall",
                "name": "Block Azalea Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.azalea.hit",
                "name": "Block Azalea Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.azalea.place",
                "name": "Block Azalea Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.azalea.step",
                "name": "Block Azalea Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_sapling.break",
                "name": "Block Bamboo Sapling Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_sapling.hit",
                "name": "Block Bamboo Sapling Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_sapling.place",
                "name": "Block Bamboo Sapling Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood_button.click_off",
                "name": "Block Bamboo Wood Button Click Off",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood_button.click_on",
                "name": "Block Bamboo Wood Button Click On",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood_door.close",
                "name": "Block Bamboo Wood Door Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood_door.open",
                "name": "Block Bamboo Wood Door Open",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood_fence_gate.close",
                "name": "Block Bamboo Wood Fence Gate Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood_fence_gate.open",
                "name": "Block Bamboo Wood Fence Gate Open",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood_hanging_sign.break",
                "name": "Block Bamboo Wood Hanging Sign Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood_hanging_sign.fall",
                "name": "Block Bamboo Wood Hanging Sign Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood_hanging_sign.hit",
                "name": "Block Bamboo Wood Hanging Sign Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood_hanging_sign.place",
                "name": "Block Bamboo Wood Hanging Sign Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood_hanging_sign.step",
                "name": "Block Bamboo Wood Hanging Sign Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood_pressure_plate.click_off",
                "name": "Block Bamboo Wood Pressure Plate Click Off",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood_pressure_plate.click_on",
                "name": "Block Bamboo Wood Pressure Plate Click On",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood_trapdoor.close",
                "name": "Block Bamboo Wood Trapdoor Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood_trapdoor.open",
                "name": "Block Bamboo Wood Trapdoor Open",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood.break",
                "name": "Block Bamboo Wood Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood.fall",
                "name": "Block Bamboo Wood Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood.hit",
                "name": "Block Bamboo Wood Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood.place",
                "name": "Block Bamboo Wood Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo_wood.step",
                "name": "Block Bamboo Wood Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo.break",
                "name": "Block Bamboo Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo.fall",
                "name": "Block Bamboo Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo.hit",
                "name": "Block Bamboo Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo.place",
                "name": "Block Bamboo Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bamboo.step",
                "name": "Block Bamboo Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.barrel.close",
                "name": "Block Barrel Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.barrel.open",
                "name": "Block Barrel Open",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.basalt.break",
                "name": "Block Basalt Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.basalt.fall",
                "name": "Block Basalt Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.basalt.hit",
                "name": "Block Basalt Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.basalt.place",
                "name": "Block Basalt Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.basalt.step",
                "name": "Block Basalt Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.beacon.activate",
                "name": "Block Beacon Activate",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.beacon.ambient",
                "name": "Block Beacon Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.beacon.deactivate",
                "name": "Block Beacon Deactivate",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.beacon.power_select",
                "name": "Block Beacon Power Select",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.beehive.drip",
                "name": "Block Beehive Drip",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.beehive.enter",
                "name": "Block Beehive Enter",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.beehive.exit",
                "name": "Block Beehive Exit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.beehive.shear",
                "name": "Block Beehive Shear",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.beehive.work",
                "name": "Block Beehive Work",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bell.resonate",
                "name": "Block Bell Resonate",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bell.use",
                "name": "Block Bell Use",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.big_dripleaf.break",
                "name": "Block Big Dripleaf Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.big_dripleaf.fall",
                "name": "Block Big Dripleaf Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.big_dripleaf.hit",
                "name": "Block Big Dripleaf Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.big_dripleaf.place",
                "name": "Block Big Dripleaf Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.big_dripleaf.step",
                "name": "Block Big Dripleaf Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.big_dripleaf.tilt_down",
                "name": "Block Big Dripleaf Tilt Down",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.big_dripleaf.tilt_up",
                "name": "Block Big Dripleaf Tilt Up",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.blastfurnace.fire_crackle",
                "name": "Block Blastfurnace Fire Crackle",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bone_block.break",
                "name": "Block Bone Block Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bone_block.fall",
                "name": "Block Bone Block Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bone_block.hit",
                "name": "Block Bone Block Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bone_block.place",
                "name": "Block Bone Block Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bone_block.step",
                "name": "Block Bone Block Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.brewing_stand.brew",
                "name": "Block Brewing Stand Brew",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bubble_column.bubble_pop",
                "name": "Block Bubble Column Bubble Pop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bubble_column.upwards_ambient",
                "name": "Block Bubble Column Upwards Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bubble_column.upwards_inside",
                "name": "Block Bubble Column Upwards Inside",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bubble_column.whirlpool_ambient",
                "name": "Block Bubble Column Whirlpool Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.bubble_column.whirlpool_inside",
                "name": "Block Bubble Column Whirlpool Inside",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cake.add_candle",
                "name": "Block Cake Add Candle",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.calcite.break",
                "name": "Block Calcite Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.calcite.fall",
                "name": "Block Calcite Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.calcite.hit",
                "name": "Block Calcite Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.calcite.place",
                "name": "Block Calcite Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.calcite.step",
                "name": "Block Calcite Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.campfire.crackle",
                "name": "Block Campfire Crackle",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.candle.ambient",
                "name": "Block Candle Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.candle.break",
                "name": "Block Candle Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.candle.extinguish",
                "name": "Block Candle Extinguish",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.candle.fall",
                "name": "Block Candle Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.candle.hit",
                "name": "Block Candle Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.candle.place",
                "name": "Block Candle Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.candle.step",
                "name": "Block Candle Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cave_vines.break",
                "name": "Block Cave Vines Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cave_vines.fall",
                "name": "Block Cave Vines Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cave_vines.hit",
                "name": "Block Cave Vines Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cave_vines.pick_berries",
                "name": "Block Cave Vines Pick Berries",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cave_vines.place",
                "name": "Block Cave Vines Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cave_vines.step",
                "name": "Block Cave Vines Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.chain.break",
                "name": "Block Chain Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.chain.fall",
                "name": "Block Chain Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.chain.hit",
                "name": "Block Chain Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.chain.place",
                "name": "Block Chain Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.chain.step",
                "name": "Block Chain Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_leaves.break",
                "name": "Block Cherry Leaves Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_leaves.fall",
                "name": "Block Cherry Leaves Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_leaves.hit",
                "name": "Block Cherry Leaves Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_leaves.place",
                "name": "Block Cherry Leaves Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_leaves.step",
                "name": "Block Cherry Leaves Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_sapling.break",
                "name": "Block Cherry Sapling Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_sapling.fall",
                "name": "Block Cherry Sapling Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_sapling.hit",
                "name": "Block Cherry Sapling Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_sapling.place",
                "name": "Block Cherry Sapling Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_sapling.step",
                "name": "Block Cherry Sapling Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood_button.click_off",
                "name": "Block Cherry Wood Button Click Off",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood_button.click_on",
                "name": "Block Cherry Wood Button Click On",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood_door.close",
                "name": "Block Cherry Wood Door Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood_door.open",
                "name": "Block Cherry Wood Door Open",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood_fence_gate.close",
                "name": "Block Cherry Wood Fence Gate Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood_fence_gate.open",
                "name": "Block Cherry Wood Fence Gate Open",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood_hanging_sign.break",
                "name": "Block Cherry Wood Hanging Sign Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood_hanging_sign.fall",
                "name": "Block Cherry Wood Hanging Sign Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood_hanging_sign.hit",
                "name": "Block Cherry Wood Hanging Sign Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood_hanging_sign.place",
                "name": "Block Cherry Wood Hanging Sign Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood_hanging_sign.step",
                "name": "Block Cherry Wood Hanging Sign Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood_pressure_plate.click_off",
                "name": "Block Cherry Wood Pressure Plate Click Off",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood_pressure_plate.click_on",
                "name": "Block Cherry Wood Pressure Plate Click On",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood_trapdoor.close",
                "name": "Block Cherry Wood Trapdoor Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood_trapdoor.open",
                "name": "Block Cherry Wood Trapdoor Open",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood.break",
                "name": "Block Cherry Wood Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood.fall",
                "name": "Block Cherry Wood Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood.hit",
                "name": "Block Cherry Wood Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood.place",
                "name": "Block Cherry Wood Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.cherry_wood.step",
                "name": "Block Cherry Wood Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.chest.close",
                "name": "Block Chest Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.chest.locked",
                "name": "Block Chest Locked",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.chest.open",
                "name": "Block Chest Open",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.chiseled_bookshelf.break",
                "name": "Block Chiseled Bookshelf Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.chiseled_bookshelf.fall",
                "name": "Block Chiseled Bookshelf Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.chiseled_bookshelf.hit",
                "name": "Block Chiseled Bookshelf Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.chiseled_bookshelf.insert",
                "name": "Block Chiseled Bookshelf Insert",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.chiseled_bookshelf.insert.enchanted",
                "name": "Block Chiseled Bookshelf Insert Enchanted",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.chiseled_bookshelf.pickup",
                "name": "Block Chiseled Bookshelf Pickup",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.chiseled_bookshelf.pickup.enchanted",
                "name": "Block Chiseled Bookshelf Pickup Enchanted",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.chiseled_bookshelf.place",
                "name": "Block Chiseled Bookshelf Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.chiseled_bookshelf.step",
                "name": "Block Chiseled Bookshelf Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.chorus_flower.death",
                "name": "Block Chorus Flower Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.chorus_flower.grow",
                "name": "Block Chorus Flower Grow",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.comparator.click",
                "name": "Block Comparator Click",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.composter.empty",
                "name": "Block Composter Empty",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.composter.fill",
                "name": "Block Composter Fill",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.composter.fill_success",
                "name": "Block Composter Fill Success",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.composter.ready",
                "name": "Block Composter Ready",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.conduit.activate",
                "name": "Block Conduit Activate",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.conduit.ambient",
                "name": "Block Conduit Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.conduit.ambient.short",
                "name": "Block Conduit Ambient Short",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.conduit.attack.target",
                "name": "Block Conduit Attack Target",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.conduit.deactivate",
                "name": "Block Conduit Deactivate",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.copper.break",
                "name": "Block Copper Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.copper.fall",
                "name": "Block Copper Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.copper.hit",
                "name": "Block Copper Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.copper.place",
                "name": "Block Copper Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.copper.step",
                "name": "Block Copper Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.coral_block.break",
                "name": "Block Coral Block Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.coral_block.fall",
                "name": "Block Coral Block Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.coral_block.hit",
                "name": "Block Coral Block Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.coral_block.place",
                "name": "Block Coral Block Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.coral_block.step",
                "name": "Block Coral Block Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.crop.break",
                "name": "Block Crop Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.decorated_pot.break",
                "name": "Block Decorated Pot Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.decorated_pot.fall",
                "name": "Block Decorated Pot Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.decorated_pot.hit",
                "name": "Block Decorated Pot Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.decorated_pot.place",
                "name": "Block Decorated Pot Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.decorated_pot.shatter",
                "name": "Block Decorated Pot Shatter",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.decorated_pot.step",
                "name": "Block Decorated Pot Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.deepslate_bricks.break",
                "name": "Block Deepslate Bricks Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.deepslate_bricks.fall",
                "name": "Block Deepslate Bricks Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.deepslate_bricks.hit",
                "name": "Block Deepslate Bricks Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.deepslate_bricks.place",
                "name": "Block Deepslate Bricks Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.deepslate_bricks.step",
                "name": "Block Deepslate Bricks Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.deepslate_tiles.break",
                "name": "Block Deepslate Tiles Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.deepslate_tiles.fall",
                "name": "Block Deepslate Tiles Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.deepslate_tiles.hit",
                "name": "Block Deepslate Tiles Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.deepslate_tiles.place",
                "name": "Block Deepslate Tiles Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.deepslate_tiles.step",
                "name": "Block Deepslate Tiles Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.deepslate.break",
                "name": "Block Deepslate Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.deepslate.fall",
                "name": "Block Deepslate Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.deepslate.hit",
                "name": "Block Deepslate Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.deepslate.place",
                "name": "Block Deepslate Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.deepslate.step",
                "name": "Block Deepslate Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.dispenser.dispense",
                "name": "Block Dispenser Dispense",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.dispenser.fail",
                "name": "Block Dispenser Fail",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.dispenser.launch",
                "name": "Block Dispenser Launch",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.dripstone_block.break",
                "name": "Block Dripstone Block Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.dripstone_block.fall",
                "name": "Block Dripstone Block Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.dripstone_block.hit",
                "name": "Block Dripstone Block Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.dripstone_block.place",
                "name": "Block Dripstone Block Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.dripstone_block.step",
                "name": "Block Dripstone Block Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.enchantment_table.use",
                "name": "Block Enchantment Table Use",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.end_gateway.spawn",
                "name": "Block End Gateway Spawn",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.end_portal_frame.fill",
                "name": "Block End Portal Frame Fill",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.end_portal.spawn",
                "name": "Block End Portal Spawn",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.ender_chest.close",
                "name": "Block Ender Chest Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.ender_chest.open",
                "name": "Block Ender Chest Open",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.fence_gate.close",
                "name": "Block Fence Gate Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.fence_gate.open",
                "name": "Block Fence Gate Open",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.fire.ambient",
                "name": "Block Fire Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.fire.extinguish",
                "name": "Block Fire Extinguish",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.flowering_azalea.break",
                "name": "Block Flowering Azalea Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.flowering_azalea.fall",
                "name": "Block Flowering Azalea Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.flowering_azalea.hit",
                "name": "Block Flowering Azalea Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.flowering_azalea.place",
                "name": "Block Flowering Azalea Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.flowering_azalea.step",
                "name": "Block Flowering Azalea Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.froglight.break",
                "name": "Block Froglight Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.froglight.fall",
                "name": "Block Froglight Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.froglight.hit",
                "name": "Block Froglight Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.froglight.place",
                "name": "Block Froglight Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.froglight.step",
                "name": "Block Froglight Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.frogspawn.break",
                "name": "Block Frogspawn Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.frogspawn.fall",
                "name": "Block Frogspawn Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.frogspawn.hatch",
                "name": "Block Frogspawn Hatch",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.frogspawn.hit",
                "name": "Block Frogspawn Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.frogspawn.place",
                "name": "Block Frogspawn Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.frogspawn.step",
                "name": "Block Frogspawn Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.fungus.break",
                "name": "Block Fungus Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.fungus.fall",
                "name": "Block Fungus Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.fungus.hit",
                "name": "Block Fungus Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.fungus.place",
                "name": "Block Fungus Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.fungus.step",
                "name": "Block Fungus Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.furnace.fire_crackle",
                "name": "Block Furnace Fire Crackle",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.gilded_blackstone.break",
                "name": "Block Gilded Blackstone Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.gilded_blackstone.fall",
                "name": "Block Gilded Blackstone Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.gilded_blackstone.hit",
                "name": "Block Gilded Blackstone Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.gilded_blackstone.place",
                "name": "Block Gilded Blackstone Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.gilded_blackstone.step",
                "name": "Block Gilded Blackstone Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.glass.break",
                "name": "Block Glass Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.glass.fall",
                "name": "Block Glass Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.glass.hit",
                "name": "Block Glass Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.glass.place",
                "name": "Block Glass Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.glass.step",
                "name": "Block Glass Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.grass.break",
                "name": "Block Grass Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.grass.fall",
                "name": "Block Grass Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.grass.hit",
                "name": "Block Grass Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.grass.place",
                "name": "Block Grass Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.grass.step",
                "name": "Block Grass Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.gravel.break",
                "name": "Block Gravel Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.gravel.fall",
                "name": "Block Gravel Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.gravel.hit",
                "name": "Block Gravel Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.gravel.place",
                "name": "Block Gravel Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.gravel.step",
                "name": "Block Gravel Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.grindstone.use",
                "name": "Block Grindstone Use",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.growing_plant.crop",
                "name": "Block Growing Plant Crop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.hanging_roots.break",
                "name": "Block Hanging Roots Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.hanging_roots.fall",
                "name": "Block Hanging Roots Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.hanging_roots.hit",
                "name": "Block Hanging Roots Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.hanging_roots.place",
                "name": "Block Hanging Roots Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.hanging_roots.step",
                "name": "Block Hanging Roots Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.hanging_sign.break",
                "name": "Block Hanging Sign Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.hanging_sign.fall",
                "name": "Block Hanging Sign Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.hanging_sign.hit",
                "name": "Block Hanging Sign Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.hanging_sign.place",
                "name": "Block Hanging Sign Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.hanging_sign.step",
                "name": "Block Hanging Sign Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.honey_block.break",
                "name": "Block Honey Block Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.honey_block.fall",
                "name": "Block Honey Block Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.honey_block.hit",
                "name": "Block Honey Block Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.honey_block.place",
                "name": "Block Honey Block Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.honey_block.slide",
                "name": "Block Honey Block Slide",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.honey_block.step",
                "name": "Block Honey Block Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.iron_door.close",
                "name": "Block Iron Door Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.iron_door.open",
                "name": "Block Iron Door Open",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.iron_trapdoor.close",
                "name": "Block Iron Trapdoor Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.iron_trapdoor.open",
                "name": "Block Iron Trapdoor Open",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.ladder.break",
                "name": "Block Ladder Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.ladder.fall",
                "name": "Block Ladder Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.ladder.hit",
                "name": "Block Ladder Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.ladder.place",
                "name": "Block Ladder Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.ladder.step",
                "name": "Block Ladder Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.lantern.break",
                "name": "Block Lantern Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.lantern.fall",
                "name": "Block Lantern Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.lantern.hit",
                "name": "Block Lantern Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.lantern.place",
                "name": "Block Lantern Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.lantern.step",
                "name": "Block Lantern Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.large_amethyst_bud.break",
                "name": "Block Large Amethyst Bud Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.large_amethyst_bud.place",
                "name": "Block Large Amethyst Bud Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.lava.ambient",
                "name": "Block Lava Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.lava.extinguish",
                "name": "Block Lava Extinguish",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.lava.pop",
                "name": "Block Lava Pop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.lever.click",
                "name": "Block Lever Click",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.lily_pad.place",
                "name": "Block Lily Pad Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.lodestone.break",
                "name": "Block Lodestone Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.lodestone.fall",
                "name": "Block Lodestone Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.lodestone.hit",
                "name": "Block Lodestone Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.lodestone.place",
                "name": "Block Lodestone Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.lodestone.step",
                "name": "Block Lodestone Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.mangrove_roots.break",
                "name": "Block Mangrove Roots Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.mangrove_roots.fall",
                "name": "Block Mangrove Roots Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.mangrove_roots.hit",
                "name": "Block Mangrove Roots Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.mangrove_roots.place",
                "name": "Block Mangrove Roots Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.mangrove_roots.step",
                "name": "Block Mangrove Roots Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.medium_amethyst_bud.break",
                "name": "Block Medium Amethyst Bud Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.medium_amethyst_bud.place",
                "name": "Block Medium Amethyst Bud Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.metal_pressure_plate.click_off",
                "name": "Block Metal Pressure Plate Click Off",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.metal_pressure_plate.click_on",
                "name": "Block Metal Pressure Plate Click On",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.metal.break",
                "name": "Block Metal Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.metal.fall",
                "name": "Block Metal Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.metal.hit",
                "name": "Block Metal Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.metal.place",
                "name": "Block Metal Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.metal.step",
                "name": "Block Metal Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.moss_carpet.break",
                "name": "Block Moss Carpet Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.moss_carpet.fall",
                "name": "Block Moss Carpet Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.moss_carpet.hit",
                "name": "Block Moss Carpet Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.moss_carpet.place",
                "name": "Block Moss Carpet Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.moss_carpet.step",
                "name": "Block Moss Carpet Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.moss.break",
                "name": "Block Moss Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.moss.fall",
                "name": "Block Moss Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.moss.hit",
                "name": "Block Moss Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.moss.place",
                "name": "Block Moss Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.moss.step",
                "name": "Block Moss Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.mud_bricks.break",
                "name": "Block Mud Bricks Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.mud_bricks.fall",
                "name": "Block Mud Bricks Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.mud_bricks.hit",
                "name": "Block Mud Bricks Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.mud_bricks.place",
                "name": "Block Mud Bricks Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.mud_bricks.step",
                "name": "Block Mud Bricks Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.mud.break",
                "name": "Block Mud Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.mud.fall",
                "name": "Block Mud Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.mud.hit",
                "name": "Block Mud Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.mud.place",
                "name": "Block Mud Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.mud.step",
                "name": "Block Mud Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.muddy_mangrove_roots.break",
                "name": "Block Muddy Mangrove Roots Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.muddy_mangrove_roots.fall",
                "name": "Block Muddy Mangrove Roots Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.muddy_mangrove_roots.hit",
                "name": "Block Muddy Mangrove Roots Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.muddy_mangrove_roots.place",
                "name": "Block Muddy Mangrove Roots Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.muddy_mangrove_roots.step",
                "name": "Block Muddy Mangrove Roots Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_bricks.break",
                "name": "Block Nether Bricks Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_bricks.fall",
                "name": "Block Nether Bricks Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_bricks.hit",
                "name": "Block Nether Bricks Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_bricks.place",
                "name": "Block Nether Bricks Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_bricks.step",
                "name": "Block Nether Bricks Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_gold_ore.break",
                "name": "Block Nether Gold Ore Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_gold_ore.fall",
                "name": "Block Nether Gold Ore Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_gold_ore.hit",
                "name": "Block Nether Gold Ore Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_gold_ore.place",
                "name": "Block Nether Gold Ore Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_gold_ore.step",
                "name": "Block Nether Gold Ore Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_ore.break",
                "name": "Block Nether Ore Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_ore.fall",
                "name": "Block Nether Ore Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_ore.hit",
                "name": "Block Nether Ore Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_ore.place",
                "name": "Block Nether Ore Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_ore.step",
                "name": "Block Nether Ore Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_sprouts.break",
                "name": "Block Nether Sprouts Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_sprouts.fall",
                "name": "Block Nether Sprouts Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_sprouts.hit",
                "name": "Block Nether Sprouts Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_sprouts.place",
                "name": "Block Nether Sprouts Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_sprouts.step",
                "name": "Block Nether Sprouts Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wart.break",
                "name": "Block Nether Wart Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood_button.click_off",
                "name": "Block Nether Wood Button Click Off",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood_button.click_on",
                "name": "Block Nether Wood Button Click On",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood_door.close",
                "name": "Block Nether Wood Door Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood_door.open",
                "name": "Block Nether Wood Door Open",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood_fence_gate.close",
                "name": "Block Nether Wood Fence Gate Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood_fence_gate.open",
                "name": "Block Nether Wood Fence Gate Open",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood_hanging_sign.break",
                "name": "Block Nether Wood Hanging Sign Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood_hanging_sign.fall",
                "name": "Block Nether Wood Hanging Sign Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood_hanging_sign.hit",
                "name": "Block Nether Wood Hanging Sign Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood_hanging_sign.place",
                "name": "Block Nether Wood Hanging Sign Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood_hanging_sign.step",
                "name": "Block Nether Wood Hanging Sign Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood_pressure_plate.click_off",
                "name": "Block Nether Wood Pressure Plate Click Off",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood_pressure_plate.click_on",
                "name": "Block Nether Wood Pressure Plate Click On",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood_trapdoor.close",
                "name": "Block Nether Wood Trapdoor Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood_trapdoor.open",
                "name": "Block Nether Wood Trapdoor Open",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood.break",
                "name": "Block Nether Wood Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood.fall",
                "name": "Block Nether Wood Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood.hit",
                "name": "Block Nether Wood Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood.place",
                "name": "Block Nether Wood Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nether_wood.step",
                "name": "Block Nether Wood Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.netherite_block.break",
                "name": "Block Netherite Block Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.netherite_block.fall",
                "name": "Block Netherite Block Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.netherite_block.hit",
                "name": "Block Netherite Block Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.netherite_block.place",
                "name": "Block Netherite Block Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.netherite_block.step",
                "name": "Block Netherite Block Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.netherrack.break",
                "name": "Block Netherrack Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.netherrack.fall",
                "name": "Block Netherrack Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.netherrack.hit",
                "name": "Block Netherrack Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.netherrack.place",
                "name": "Block Netherrack Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.netherrack.step",
                "name": "Block Netherrack Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.banjo",
                "name": "Block Note Block Banjo",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.basedrum",
                "name": "Block Note Block Basedrum",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.bass",
                "name": "Block Note Block Bass",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.bell",
                "name": "Block Note Block Bell",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.bit",
                "name": "Block Note Block Bit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.chime",
                "name": "Block Note Block Chime",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.cow_bell",
                "name": "Block Note Block Cow Bell",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.didgeridoo",
                "name": "Block Note Block Didgeridoo",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.flute",
                "name": "Block Note Block Flute",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.guitar",
                "name": "Block Note Block Guitar",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.harp",
                "name": "Block Note Block Harp",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.hat",
                "name": "Block Note Block Hat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.imitate.creeper",
                "name": "Block Note Block Imitate Creeper",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.imitate.ender_dragon",
                "name": "Block Note Block Imitate Ender Dragon",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.imitate.piglin",
                "name": "Block Note Block Imitate Piglin",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.imitate.skeleton",
                "name": "Block Note Block Imitate Skeleton",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.imitate.wither_skeleton",
                "name": "Block Note Block Imitate Wither Skeleton",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.imitate.zombie",
                "name": "Block Note Block Imitate Zombie",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.iron_xylophone",
                "name": "Block Note Block Iron Xylophone",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.pling",
                "name": "Block Note Block Pling",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.snare",
                "name": "Block Note Block Snare",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.note_block.xylophone",
                "name": "Block Note Block Xylophone",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nylium.break",
                "name": "Block Nylium Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nylium.fall",
                "name": "Block Nylium Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nylium.hit",
                "name": "Block Nylium Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nylium.place",
                "name": "Block Nylium Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.nylium.step",
                "name": "Block Nylium Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.packed_mud.break",
                "name": "Block Packed Mud Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.packed_mud.fall",
                "name": "Block Packed Mud Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.packed_mud.hit",
                "name": "Block Packed Mud Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.packed_mud.place",
                "name": "Block Packed Mud Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.packed_mud.step",
                "name": "Block Packed Mud Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.pink_petals.break",
                "name": "Block Pink Petals Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.pink_petals.fall",
                "name": "Block Pink Petals Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.pink_petals.hit",
                "name": "Block Pink Petals Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.pink_petals.place",
                "name": "Block Pink Petals Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.pink_petals.step",
                "name": "Block Pink Petals Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.piston.contract",
                "name": "Block Piston Contract",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.piston.extend",
                "name": "Block Piston Extend",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.pointed_dripstone.break",
                "name": "Block Pointed Dripstone Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.pointed_dripstone.drip_lava",
                "name": "Block Pointed Dripstone Drip Lava",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.pointed_dripstone.drip_lava_into_cauldron",
                "name": "Block Pointed Dripstone Drip Lava Into Cauldron",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.pointed_dripstone.drip_water",
                "name": "Block Pointed Dripstone Drip Water",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.pointed_dripstone.drip_water_into_cauldron",
                "name": "Block Pointed Dripstone Drip Water Into Cauldron",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.pointed_dripstone.fall",
                "name": "Block Pointed Dripstone Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.pointed_dripstone.hit",
                "name": "Block Pointed Dripstone Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.pointed_dripstone.land",
                "name": "Block Pointed Dripstone Land",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.pointed_dripstone.place",
                "name": "Block Pointed Dripstone Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.pointed_dripstone.step",
                "name": "Block Pointed Dripstone Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.polished_deepslate.break",
                "name": "Block Polished Deepslate Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.polished_deepslate.fall",
                "name": "Block Polished Deepslate Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.polished_deepslate.hit",
                "name": "Block Polished Deepslate Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.polished_deepslate.place",
                "name": "Block Polished Deepslate Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.polished_deepslate.step",
                "name": "Block Polished Deepslate Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.portal.ambient",
                "name": "Block Portal Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.portal.travel",
                "name": "Block Portal Travel",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.portal.trigger",
                "name": "Block Portal Trigger",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.powder_snow.break",
                "name": "Block Powder Snow Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.powder_snow.fall",
                "name": "Block Powder Snow Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.powder_snow.hit",
                "name": "Block Powder Snow Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.powder_snow.place",
                "name": "Block Powder Snow Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.powder_snow.step",
                "name": "Block Powder Snow Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.pumpkin.carve",
                "name": "Block Pumpkin Carve",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.redstone_torch.burnout",
                "name": "Block Redstone Torch Burnout",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.respawn_anchor.ambient",
                "name": "Block Respawn Anchor Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.respawn_anchor.charge",
                "name": "Block Respawn Anchor Charge",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.respawn_anchor.deplete",
                "name": "Block Respawn Anchor Deplete",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.respawn_anchor.set_spawn",
                "name": "Block Respawn Anchor Set Spawn",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.rooted_dirt.break",
                "name": "Block Rooted Dirt Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.rooted_dirt.fall",
                "name": "Block Rooted Dirt Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.rooted_dirt.hit",
                "name": "Block Rooted Dirt Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.rooted_dirt.place",
                "name": "Block Rooted Dirt Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.rooted_dirt.step",
                "name": "Block Rooted Dirt Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.roots.break",
                "name": "Block Roots Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.roots.fall",
                "name": "Block Roots Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.roots.hit",
                "name": "Block Roots Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.roots.place",
                "name": "Block Roots Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.roots.step",
                "name": "Block Roots Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sand.break",
                "name": "Block Sand Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sand.fall",
                "name": "Block Sand Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sand.hit",
                "name": "Block Sand Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sand.place",
                "name": "Block Sand Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sand.step",
                "name": "Block Sand Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.scaffolding.break",
                "name": "Block Scaffolding Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.scaffolding.fall",
                "name": "Block Scaffolding Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.scaffolding.hit",
                "name": "Block Scaffolding Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.scaffolding.place",
                "name": "Block Scaffolding Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.scaffolding.step",
                "name": "Block Scaffolding Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_catalyst.bloom",
                "name": "Block Sculk Catalyst Bloom",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_catalyst.break",
                "name": "Block Sculk Catalyst Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_catalyst.fall",
                "name": "Block Sculk Catalyst Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_catalyst.hit",
                "name": "Block Sculk Catalyst Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_catalyst.place",
                "name": "Block Sculk Catalyst Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_catalyst.step",
                "name": "Block Sculk Catalyst Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_sensor.break",
                "name": "Block Sculk Sensor Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_sensor.clicking",
                "name": "Block Sculk Sensor Clicking",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_sensor.clicking_stop",
                "name": "Block Sculk Sensor Clicking Stop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_sensor.fall",
                "name": "Block Sculk Sensor Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_sensor.hit",
                "name": "Block Sculk Sensor Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_sensor.place",
                "name": "Block Sculk Sensor Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_sensor.step",
                "name": "Block Sculk Sensor Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_shrieker.break",
                "name": "Block Sculk Shrieker Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_shrieker.fall",
                "name": "Block Sculk Shrieker Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_shrieker.hit",
                "name": "Block Sculk Shrieker Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_shrieker.place",
                "name": "Block Sculk Shrieker Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_shrieker.shriek",
                "name": "Block Sculk Shrieker Shriek",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_shrieker.step",
                "name": "Block Sculk Shrieker Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_vein.break",
                "name": "Block Sculk Vein Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_vein.fall",
                "name": "Block Sculk Vein Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_vein.hit",
                "name": "Block Sculk Vein Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_vein.place",
                "name": "Block Sculk Vein Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk_vein.step",
                "name": "Block Sculk Vein Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk.break",
                "name": "Block Sculk Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk.charge",
                "name": "Block Sculk Charge",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk.fall",
                "name": "Block Sculk Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk.hit",
                "name": "Block Sculk Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk.place",
                "name": "Block Sculk Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk.spread",
                "name": "Block Sculk Spread",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sculk.step",
                "name": "Block Sculk Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.shroomlight.break",
                "name": "Block Shroomlight Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.shroomlight.fall",
                "name": "Block Shroomlight Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.shroomlight.hit",
                "name": "Block Shroomlight Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.shroomlight.place",
                "name": "Block Shroomlight Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.shroomlight.step",
                "name": "Block Shroomlight Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.shulker_box.close",
                "name": "Block Shulker Box Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.shulker_box.open",
                "name": "Block Shulker Box Open",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sign.waxed_interact_fail",
                "name": "Block Sign Waxed Interact Fail",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.slime_block.break",
                "name": "Block Slime Block Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.slime_block.fall",
                "name": "Block Slime Block Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.slime_block.hit",
                "name": "Block Slime Block Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.slime_block.place",
                "name": "Block Slime Block Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.slime_block.step",
                "name": "Block Slime Block Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.small_amethyst_bud.break",
                "name": "Block Small Amethyst Bud Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.small_amethyst_bud.place",
                "name": "Block Small Amethyst Bud Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.small_dripleaf.break",
                "name": "Block Small Dripleaf Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.small_dripleaf.fall",
                "name": "Block Small Dripleaf Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.small_dripleaf.hit",
                "name": "Block Small Dripleaf Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.small_dripleaf.place",
                "name": "Block Small Dripleaf Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.small_dripleaf.step",
                "name": "Block Small Dripleaf Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.smithing_table.use",
                "name": "Block Smithing Table Use",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.smoker.smoke",
                "name": "Block Smoker Smoke",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sniffer_egg.crack",
                "name": "Block Sniffer Egg Crack",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sniffer_egg.hatch",
                "name": "Block Sniffer Egg Hatch",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sniffer_egg.plop",
                "name": "Block Sniffer Egg Plop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.snow.break",
                "name": "Block Snow Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.snow.fall",
                "name": "Block Snow Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.snow.hit",
                "name": "Block Snow Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.snow.place",
                "name": "Block Snow Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.snow.step",
                "name": "Block Snow Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.soul_sand.break",
                "name": "Block Soul Sand Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.soul_sand.fall",
                "name": "Block Soul Sand Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.soul_sand.hit",
                "name": "Block Soul Sand Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.soul_sand.place",
                "name": "Block Soul Sand Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.soul_sand.step",
                "name": "Block Soul Sand Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.soul_soil.break",
                "name": "Block Soul Soil Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.soul_soil.fall",
                "name": "Block Soul Soil Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.soul_soil.hit",
                "name": "Block Soul Soil Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.soul_soil.place",
                "name": "Block Soul Soil Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.soul_soil.step",
                "name": "Block Soul Soil Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sponge.absorb",
                "name": "Block Sponge Absorb",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sponge.break",
                "name": "Block Sponge Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sponge.fall",
                "name": "Block Sponge Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sponge.hit",
                "name": "Block Sponge Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sponge.place",
                "name": "Block Sponge Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sponge.step",
                "name": "Block Sponge Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.spore_blossom.break",
                "name": "Block Spore Blossom Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.spore_blossom.fall",
                "name": "Block Spore Blossom Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.spore_blossom.hit",
                "name": "Block Spore Blossom Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.spore_blossom.place",
                "name": "Block Spore Blossom Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.spore_blossom.step",
                "name": "Block Spore Blossom Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.stem.break",
                "name": "Block Stem Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.stem.fall",
                "name": "Block Stem Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.stem.hit",
                "name": "Block Stem Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.stem.place",
                "name": "Block Stem Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.stem.step",
                "name": "Block Stem Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.stone_button.click_off",
                "name": "Block Stone Button Click Off",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.stone_button.click_on",
                "name": "Block Stone Button Click On",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.stone_pressure_plate.click_off",
                "name": "Block Stone Pressure Plate Click Off",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.stone_pressure_plate.click_on",
                "name": "Block Stone Pressure Plate Click On",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.stone.break",
                "name": "Block Stone Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.stone.fall",
                "name": "Block Stone Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.stone.hit",
                "name": "Block Stone Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.stone.place",
                "name": "Block Stone Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.stone.step",
                "name": "Block Stone Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.suspicious_gravel.break",
                "name": "Block Suspicious Gravel Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.suspicious_gravel.fall",
                "name": "Block Suspicious Gravel Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.suspicious_gravel.hit",
                "name": "Block Suspicious Gravel Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.suspicious_gravel.place",
                "name": "Block Suspicious Gravel Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.suspicious_gravel.step",
                "name": "Block Suspicious Gravel Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.suspicious_sand.break",
                "name": "Block Suspicious Sand Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.suspicious_sand.fall",
                "name": "Block Suspicious Sand Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.suspicious_sand.hit",
                "name": "Block Suspicious Sand Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.suspicious_sand.place",
                "name": "Block Suspicious Sand Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.suspicious_sand.step",
                "name": "Block Suspicious Sand Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sweet_berry_bush.break",
                "name": "Block Sweet Berry Bush Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sweet_berry_bush.pick_berries",
                "name": "Block Sweet Berry Bush Pick Berries",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.sweet_berry_bush.place",
                "name": "Block Sweet Berry Bush Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.tripwire.attach",
                "name": "Block Tripwire Attach",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.tripwire.click_off",
                "name": "Block Tripwire Click Off",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.tripwire.click_on",
                "name": "Block Tripwire Click On",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.tripwire.detach",
                "name": "Block Tripwire Detach",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.tuff.break",
                "name": "Block Tuff Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.tuff.fall",
                "name": "Block Tuff Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.tuff.hit",
                "name": "Block Tuff Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.tuff.place",
                "name": "Block Tuff Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.tuff.step",
                "name": "Block Tuff Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.vine.break",
                "name": "Block Vine Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.vine.fall",
                "name": "Block Vine Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.vine.hit",
                "name": "Block Vine Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.vine.place",
                "name": "Block Vine Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.vine.step",
                "name": "Block Vine Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wart_block.break",
                "name": "Block Wart Block Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wart_block.fall",
                "name": "Block Wart Block Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wart_block.hit",
                "name": "Block Wart Block Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wart_block.place",
                "name": "Block Wart Block Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wart_block.step",
                "name": "Block Wart Block Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.water.ambient",
                "name": "Block Water Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.weeping_vines.break",
                "name": "Block Weeping Vines Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.weeping_vines.fall",
                "name": "Block Weeping Vines Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.weeping_vines.hit",
                "name": "Block Weeping Vines Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.weeping_vines.place",
                "name": "Block Weeping Vines Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.weeping_vines.step",
                "name": "Block Weeping Vines Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wet_grass.break",
                "name": "Block Wet Grass Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wet_grass.fall",
                "name": "Block Wet Grass Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wet_grass.hit",
                "name": "Block Wet Grass Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wet_grass.place",
                "name": "Block Wet Grass Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wet_grass.step",
                "name": "Block Wet Grass Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wet_sponge.break",
                "name": "Block Wet Sponge Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wet_sponge.fall",
                "name": "Block Wet Sponge Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wet_sponge.hit",
                "name": "Block Wet Sponge Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wet_sponge.place",
                "name": "Block Wet Sponge Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wet_sponge.step",
                "name": "Block Wet Sponge Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wood.break",
                "name": "Block Wood Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wood.fall",
                "name": "Block Wood Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wood.hit",
                "name": "Block Wood Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wood.place",
                "name": "Block Wood Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wood.step",
                "name": "Block Wood Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wooden_button.click_off",
                "name": "Block Wooden Button Click Off",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wooden_button.click_on",
                "name": "Block Wooden Button Click On",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wooden_door.close",
                "name": "Block Wooden Door Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wooden_door.open",
                "name": "Block Wooden Door Open",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wooden_pressure_plate.click_off",
                "name": "Block Wooden Pressure Plate Click Off",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wooden_pressure_plate.click_on",
                "name": "Block Wooden Pressure Plate Click On",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wooden_trapdoor.close",
                "name": "Block Wooden Trapdoor Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wooden_trapdoor.open",
                "name": "Block Wooden Trapdoor Open",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wool.break",
                "name": "Block Wool Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wool.fall",
                "name": "Block Wool Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wool.hit",
                "name": "Block Wool Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wool.place",
                "name": "Block Wool Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:block.wool.step",
                "name": "Block Wool Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:enchant.thorns.hit",
                "name": "Enchant Thorns Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.allay.ambient_with_item",
                "name": "Entity Allay Ambient With Item",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.allay.ambient_without_item",
                "name": "Entity Allay Ambient Without Item",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.allay.death",
                "name": "Entity Allay Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.allay.hurt",
                "name": "Entity Allay Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.allay.item_given",
                "name": "Entity Allay Item Given",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.allay.item_taken",
                "name": "Entity Allay Item Taken",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.allay.item_thrown",
                "name": "Entity Allay Item Thrown",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.armor_stand.break",
                "name": "Entity Armor Stand Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.armor_stand.fall",
                "name": "Entity Armor Stand Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.armor_stand.hit",
                "name": "Entity Armor Stand Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.armor_stand.place",
                "name": "Entity Armor Stand Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.arrow.hit",
                "name": "Entity Arrow Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.arrow.hit_player",
                "name": "Entity Arrow Hit Player",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.arrow.shoot",
                "name": "Entity Arrow Shoot",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.axolotl.attack",
                "name": "Entity Axolotl Attack",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.axolotl.death",
                "name": "Entity Axolotl Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.axolotl.hurt",
                "name": "Entity Axolotl Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.axolotl.idle_air",
                "name": "Entity Axolotl Idle Air",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.axolotl.idle_water",
                "name": "Entity Axolotl Idle Water",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.axolotl.splash",
                "name": "Entity Axolotl Splash",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.axolotl.swim",
                "name": "Entity Axolotl Swim",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.bat.ambient",
                "name": "Entity Bat Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.bat.death",
                "name": "Entity Bat Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.bat.hurt",
                "name": "Entity Bat Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.bat.loop",
                "name": "Entity Bat Loop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.bat.takeoff",
                "name": "Entity Bat Takeoff",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.bee.death",
                "name": "Entity Bee Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.bee.hurt",
                "name": "Entity Bee Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.bee.loop",
                "name": "Entity Bee Loop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.bee.loop_aggressive",
                "name": "Entity Bee Loop Aggressive",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.bee.pollinate",
                "name": "Entity Bee Pollinate",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.bee.sting",
                "name": "Entity Bee Sting",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.blaze.ambient",
                "name": "Entity Blaze Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.blaze.burn",
                "name": "Entity Blaze Burn",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.blaze.death",
                "name": "Entity Blaze Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.blaze.hurt",
                "name": "Entity Blaze Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.blaze.shoot",
                "name": "Entity Blaze Shoot",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.boat.paddle_land",
                "name": "Entity Boat Paddle Land",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.boat.paddle_water",
                "name": "Entity Boat Paddle Water",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.camel.ambient",
                "name": "Entity Camel Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.camel.dash",
                "name": "Entity Camel Dash",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.camel.dash_ready",
                "name": "Entity Camel Dash Ready",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.camel.death",
                "name": "Entity Camel Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.camel.eat",
                "name": "Entity Camel Eat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.camel.hurt",
                "name": "Entity Camel Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.camel.saddle",
                "name": "Entity Camel Saddle",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.camel.sit",
                "name": "Entity Camel Sit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.camel.stand",
                "name": "Entity Camel Stand",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.camel.step",
                "name": "Entity Camel Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.camel.step_sand",
                "name": "Entity Camel Step Sand",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.cat.ambient",
                "name": "Entity Cat Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.cat.beg_for_food",
                "name": "Entity Cat Beg For Food",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.cat.death",
                "name": "Entity Cat Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.cat.eat",
                "name": "Entity Cat Eat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.cat.hiss",
                "name": "Entity Cat Hiss",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.cat.hurt",
                "name": "Entity Cat Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.cat.purr",
                "name": "Entity Cat Purr",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.cat.purreow",
                "name": "Entity Cat Purreow",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.cat.stray_ambient",
                "name": "Entity Cat Stray Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.chicken.ambient",
                "name": "Entity Chicken Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.chicken.death",
                "name": "Entity Chicken Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.chicken.egg",
                "name": "Entity Chicken Egg",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.chicken.hurt",
                "name": "Entity Chicken Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.chicken.step",
                "name": "Entity Chicken Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.cod.ambient",
                "name": "Entity Cod Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.cod.death",
                "name": "Entity Cod Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.cod.flop",
                "name": "Entity Cod Flop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.cod.hurt",
                "name": "Entity Cod Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.cow.ambient",
                "name": "Entity Cow Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.cow.death",
                "name": "Entity Cow Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.cow.hurt",
                "name": "Entity Cow Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.cow.milk",
                "name": "Entity Cow Milk",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.cow.step",
                "name": "Entity Cow Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.creeper.death",
                "name": "Entity Creeper Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.creeper.hurt",
                "name": "Entity Creeper Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.creeper.primed",
                "name": "Entity Creeper Primed",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.dolphin.ambient",
                "name": "Entity Dolphin Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.dolphin.ambient_water",
                "name": "Entity Dolphin Ambient Water",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.dolphin.attack",
                "name": "Entity Dolphin Attack",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.dolphin.death",
                "name": "Entity Dolphin Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.dolphin.eat",
                "name": "Entity Dolphin Eat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.dolphin.hurt",
                "name": "Entity Dolphin Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.dolphin.jump",
                "name": "Entity Dolphin Jump",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.dolphin.play",
                "name": "Entity Dolphin Play",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.dolphin.splash",
                "name": "Entity Dolphin Splash",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.dolphin.swim",
                "name": "Entity Dolphin Swim",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.donkey.ambient",
                "name": "Entity Donkey Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.donkey.angry",
                "name": "Entity Donkey Angry",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.donkey.chest",
                "name": "Entity Donkey Chest",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.donkey.death",
                "name": "Entity Donkey Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.donkey.eat",
                "name": "Entity Donkey Eat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.donkey.hurt",
                "name": "Entity Donkey Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.dragon_fireball.explode",
                "name": "Entity Dragon Fireball Explode",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.drowned.ambient",
                "name": "Entity Drowned Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.drowned.ambient_water",
                "name": "Entity Drowned Ambient Water",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.drowned.death",
                "name": "Entity Drowned Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.drowned.death_water",
                "name": "Entity Drowned Death Water",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.drowned.hurt",
                "name": "Entity Drowned Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.drowned.hurt_water",
                "name": "Entity Drowned Hurt Water",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.drowned.shoot",
                "name": "Entity Drowned Shoot",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.drowned.step",
                "name": "Entity Drowned Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.drowned.swim",
                "name": "Entity Drowned Swim",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.egg.throw",
                "name": "Entity Egg Throw",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.elder_guardian.ambient",
                "name": "Entity Elder Guardian Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.elder_guardian.ambient_land",
                "name": "Entity Elder Guardian Ambient Land",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.elder_guardian.curse",
                "name": "Entity Elder Guardian Curse",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.elder_guardian.death",
                "name": "Entity Elder Guardian Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.elder_guardian.death_land",
                "name": "Entity Elder Guardian Death Land",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.elder_guardian.flop",
                "name": "Entity Elder Guardian Flop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.elder_guardian.hurt",
                "name": "Entity Elder Guardian Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.elder_guardian.hurt_land",
                "name": "Entity Elder Guardian Hurt Land",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ender_dragon.ambient",
                "name": "Entity Ender Dragon Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ender_dragon.death",
                "name": "Entity Ender Dragon Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ender_dragon.flap",
                "name": "Entity Ender Dragon Flap",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ender_dragon.growl",
                "name": "Entity Ender Dragon Growl",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ender_dragon.hurt",
                "name": "Entity Ender Dragon Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ender_dragon.shoot",
                "name": "Entity Ender Dragon Shoot",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ender_eye.death",
                "name": "Entity Ender Eye Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ender_eye.launch",
                "name": "Entity Ender Eye Launch",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ender_pearl.throw",
                "name": "Entity Ender Pearl Throw",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.enderman.ambient",
                "name": "Entity Enderman Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.enderman.death",
                "name": "Entity Enderman Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.enderman.hurt",
                "name": "Entity Enderman Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.enderman.scream",
                "name": "Entity Enderman Scream",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.enderman.stare",
                "name": "Entity Enderman Stare",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.enderman.teleport",
                "name": "Entity Enderman Teleport",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.endermite.ambient",
                "name": "Entity Endermite Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.endermite.death",
                "name": "Entity Endermite Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.endermite.hurt",
                "name": "Entity Endermite Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.endermite.step",
                "name": "Entity Endermite Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.evoker_fangs.attack",
                "name": "Entity Evoker Fangs Attack",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.evoker.ambient",
                "name": "Entity Evoker Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.evoker.cast_spell",
                "name": "Entity Evoker Cast Spell",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.evoker.celebrate",
                "name": "Entity Evoker Celebrate",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.evoker.death",
                "name": "Entity Evoker Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.evoker.hurt",
                "name": "Entity Evoker Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.evoker.prepare_attack",
                "name": "Entity Evoker Prepare Attack",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.evoker.prepare_summon",
                "name": "Entity Evoker Prepare Summon",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.evoker.prepare_wololo",
                "name": "Entity Evoker Prepare Wololo",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.experience_bottle.throw",
                "name": "Entity Experience Bottle Throw",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.experience_orb.pickup",
                "name": "Entity Experience Orb Pickup",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.firework_rocket.blast",
                "name": "Entity Firework Rocket Blast",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.firework_rocket.blast_far",
                "name": "Entity Firework Rocket Blast Far",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.firework_rocket.large_blast",
                "name": "Entity Firework Rocket Large Blast",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.firework_rocket.large_blast_far",
                "name": "Entity Firework Rocket Large Blast Far",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.firework_rocket.launch",
                "name": "Entity Firework Rocket Launch",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.firework_rocket.shoot",
                "name": "Entity Firework Rocket Shoot",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.firework_rocket.twinkle",
                "name": "Entity Firework Rocket Twinkle",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.firework_rocket.twinkle_far",
                "name": "Entity Firework Rocket Twinkle Far",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.fish.swim",
                "name": "Entity Fish Swim",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.fishing_bobber.retrieve",
                "name": "Entity Fishing Bobber Retrieve",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.fishing_bobber.splash",
                "name": "Entity Fishing Bobber Splash",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.fishing_bobber.throw",
                "name": "Entity Fishing Bobber Throw",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.fox.aggro",
                "name": "Entity Fox Aggro",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.fox.ambient",
                "name": "Entity Fox Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.fox.bite",
                "name": "Entity Fox Bite",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.fox.death",
                "name": "Entity Fox Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.fox.eat",
                "name": "Entity Fox Eat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.fox.hurt",
                "name": "Entity Fox Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.fox.screech",
                "name": "Entity Fox Screech",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.fox.sleep",
                "name": "Entity Fox Sleep",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.fox.sniff",
                "name": "Entity Fox Sniff",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.fox.spit",
                "name": "Entity Fox Spit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.fox.teleport",
                "name": "Entity Fox Teleport",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.frog.ambient",
                "name": "Entity Frog Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.frog.death",
                "name": "Entity Frog Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.frog.eat",
                "name": "Entity Frog Eat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.frog.hurt",
                "name": "Entity Frog Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.frog.lay_spawn",
                "name": "Entity Frog Lay Spawn",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.frog.long_jump",
                "name": "Entity Frog Long Jump",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.frog.step",
                "name": "Entity Frog Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.frog.tongue",
                "name": "Entity Frog Tongue",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.generic.big_fall",
                "name": "Entity Generic Big Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.generic.burn",
                "name": "Entity Generic Burn",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.generic.death",
                "name": "Entity Generic Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.generic.drink",
                "name": "Entity Generic Drink",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.generic.eat",
                "name": "Entity Generic Eat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.generic.explode",
                "name": "Entity Generic Explode",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.generic.extinguish_fire",
                "name": "Entity Generic Extinguish Fire",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.generic.hurt",
                "name": "Entity Generic Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.generic.small_fall",
                "name": "Entity Generic Small Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.generic.splash",
                "name": "Entity Generic Splash",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.generic.swim",
                "name": "Entity Generic Swim",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ghast.ambient",
                "name": "Entity Ghast Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ghast.death",
                "name": "Entity Ghast Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ghast.hurt",
                "name": "Entity Ghast Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ghast.scream",
                "name": "Entity Ghast Scream",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ghast.shoot",
                "name": "Entity Ghast Shoot",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ghast.warn",
                "name": "Entity Ghast Warn",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.glow_item_frame.add_item",
                "name": "Entity Glow Item Frame Add Item",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.glow_item_frame.break",
                "name": "Entity Glow Item Frame Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.glow_item_frame.place",
                "name": "Entity Glow Item Frame Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.glow_item_frame.remove_item",
                "name": "Entity Glow Item Frame Remove Item",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.glow_item_frame.rotate_item",
                "name": "Entity Glow Item Frame Rotate Item",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.glow_squid.ambient",
                "name": "Entity Glow Squid Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.glow_squid.death",
                "name": "Entity Glow Squid Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.glow_squid.hurt",
                "name": "Entity Glow Squid Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.glow_squid.squirt",
                "name": "Entity Glow Squid Squirt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.goat.ambient",
                "name": "Entity Goat Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.goat.death",
                "name": "Entity Goat Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.goat.eat",
                "name": "Entity Goat Eat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.goat.horn_break",
                "name": "Entity Goat Horn Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.goat.hurt",
                "name": "Entity Goat Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.goat.long_jump",
                "name": "Entity Goat Long Jump",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.goat.milk",
                "name": "Entity Goat Milk",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.goat.prepare_ram",
                "name": "Entity Goat Prepare Ram",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.goat.ram_impact",
                "name": "Entity Goat Ram Impact",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.goat.screaming.ambient",
                "name": "Entity Goat Screaming Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.goat.screaming.death",
                "name": "Entity Goat Screaming Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.goat.screaming.eat",
                "name": "Entity Goat Screaming Eat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.goat.screaming.horn_break",
                "name": "Entity Goat Screaming Horn Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.goat.screaming.hurt",
                "name": "Entity Goat Screaming Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.goat.screaming.long_jump",
                "name": "Entity Goat Screaming Long Jump",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.goat.screaming.milk",
                "name": "Entity Goat Screaming Milk",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.goat.screaming.prepare_ram",
                "name": "Entity Goat Screaming Prepare Ram",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.goat.screaming.ram_impact",
                "name": "Entity Goat Screaming Ram Impact",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.goat.step",
                "name": "Entity Goat Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.guardian.ambient",
                "name": "Entity Guardian Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.guardian.ambient_land",
                "name": "Entity Guardian Ambient Land",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.guardian.attack",
                "name": "Entity Guardian Attack",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.guardian.death",
                "name": "Entity Guardian Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.guardian.death_land",
                "name": "Entity Guardian Death Land",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.guardian.flop",
                "name": "Entity Guardian Flop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.guardian.hurt",
                "name": "Entity Guardian Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.guardian.hurt_land",
                "name": "Entity Guardian Hurt Land",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.hoglin.ambient",
                "name": "Entity Hoglin Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.hoglin.angry",
                "name": "Entity Hoglin Angry",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.hoglin.attack",
                "name": "Entity Hoglin Attack",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.hoglin.converted_to_zombified",
                "name": "Entity Hoglin Converted To Zombified",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.hoglin.death",
                "name": "Entity Hoglin Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.hoglin.hurt",
                "name": "Entity Hoglin Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.hoglin.retreat",
                "name": "Entity Hoglin Retreat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.hoglin.step",
                "name": "Entity Hoglin Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.horse.ambient",
                "name": "Entity Horse Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.horse.angry",
                "name": "Entity Horse Angry",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.horse.armor",
                "name": "Entity Horse Armor",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.horse.breathe",
                "name": "Entity Horse Breathe",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.horse.death",
                "name": "Entity Horse Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.horse.eat",
                "name": "Entity Horse Eat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.horse.gallop",
                "name": "Entity Horse Gallop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.horse.hurt",
                "name": "Entity Horse Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.horse.jump",
                "name": "Entity Horse Jump",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.horse.land",
                "name": "Entity Horse Land",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.horse.saddle",
                "name": "Entity Horse Saddle",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.horse.step",
                "name": "Entity Horse Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.horse.step_wood",
                "name": "Entity Horse Step Wood",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.hostile.big_fall",
                "name": "Entity Hostile Big Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.hostile.death",
                "name": "Entity Hostile Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.hostile.hurt",
                "name": "Entity Hostile Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.hostile.small_fall",
                "name": "Entity Hostile Small Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.hostile.splash",
                "name": "Entity Hostile Splash",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.hostile.swim",
                "name": "Entity Hostile Swim",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.husk.ambient",
                "name": "Entity Husk Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.husk.converted_to_zombie",
                "name": "Entity Husk Converted To Zombie",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.husk.death",
                "name": "Entity Husk Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.husk.hurt",
                "name": "Entity Husk Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.husk.step",
                "name": "Entity Husk Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.illusioner.ambient",
                "name": "Entity Illusioner Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.illusioner.cast_spell",
                "name": "Entity Illusioner Cast Spell",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.illusioner.death",
                "name": "Entity Illusioner Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.illusioner.hurt",
                "name": "Entity Illusioner Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.illusioner.mirror_move",
                "name": "Entity Illusioner Mirror Move",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.illusioner.prepare_blindness",
                "name": "Entity Illusioner Prepare Blindness",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.illusioner.prepare_mirror",
                "name": "Entity Illusioner Prepare Mirror",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.iron_golem.attack",
                "name": "Entity Iron Golem Attack",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.iron_golem.damage",
                "name": "Entity Iron Golem Damage",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.iron_golem.death",
                "name": "Entity Iron Golem Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.iron_golem.hurt",
                "name": "Entity Iron Golem Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.iron_golem.repair",
                "name": "Entity Iron Golem Repair",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.iron_golem.step",
                "name": "Entity Iron Golem Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.item_frame.add_item",
                "name": "Entity Item Frame Add Item",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.item_frame.break",
                "name": "Entity Item Frame Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.item_frame.place",
                "name": "Entity Item Frame Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.item_frame.remove_item",
                "name": "Entity Item Frame Remove Item",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.item_frame.rotate_item",
                "name": "Entity Item Frame Rotate Item",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.item.break",
                "name": "Entity Item Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.item.pickup",
                "name": "Entity Item Pickup",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.leash_knot.break",
                "name": "Entity Leash Knot Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.leash_knot.place",
                "name": "Entity Leash Knot Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.lightning_bolt.impact",
                "name": "Entity Lightning Bolt Impact",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.lightning_bolt.thunder",
                "name": "Entity Lightning Bolt Thunder",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.lingering_potion.throw",
                "name": "Entity Lingering Potion Throw",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.llama.ambient",
                "name": "Entity Llama Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.llama.angry",
                "name": "Entity Llama Angry",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.llama.chest",
                "name": "Entity Llama Chest",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.llama.death",
                "name": "Entity Llama Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.llama.eat",
                "name": "Entity Llama Eat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.llama.hurt",
                "name": "Entity Llama Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.llama.spit",
                "name": "Entity Llama Spit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.llama.step",
                "name": "Entity Llama Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.llama.swag",
                "name": "Entity Llama Swag",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.magma_cube.death",
                "name": "Entity Magma Cube Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.magma_cube.death_small",
                "name": "Entity Magma Cube Death Small",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.magma_cube.hurt",
                "name": "Entity Magma Cube Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.magma_cube.hurt_small",
                "name": "Entity Magma Cube Hurt Small",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.magma_cube.jump",
                "name": "Entity Magma Cube Jump",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.magma_cube.squish",
                "name": "Entity Magma Cube Squish",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.magma_cube.squish_small",
                "name": "Entity Magma Cube Squish Small",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.minecart.inside",
                "name": "Entity Minecart Inside",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.minecart.inside.underwater",
                "name": "Entity Minecart Inside Underwater",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.minecart.riding",
                "name": "Entity Minecart Riding",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.mooshroom.convert",
                "name": "Entity Mooshroom Convert",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.mooshroom.eat",
                "name": "Entity Mooshroom Eat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.mooshroom.milk",
                "name": "Entity Mooshroom Milk",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.mooshroom.shear",
                "name": "Entity Mooshroom Shear",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.mooshroom.suspicious_milk",
                "name": "Entity Mooshroom Suspicious Milk",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.mule.ambient",
                "name": "Entity Mule Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.mule.angry",
                "name": "Entity Mule Angry",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.mule.chest",
                "name": "Entity Mule Chest",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.mule.death",
                "name": "Entity Mule Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.mule.eat",
                "name": "Entity Mule Eat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.mule.hurt",
                "name": "Entity Mule Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ocelot.ambient",
                "name": "Entity Ocelot Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ocelot.death",
                "name": "Entity Ocelot Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ocelot.hurt",
                "name": "Entity Ocelot Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.painting.break",
                "name": "Entity Painting Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.painting.place",
                "name": "Entity Painting Place",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.panda.aggressive_ambient",
                "name": "Entity Panda Aggressive Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.panda.ambient",
                "name": "Entity Panda Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.panda.bite",
                "name": "Entity Panda Bite",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.panda.cant_breed",
                "name": "Entity Panda Cant Breed",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.panda.death",
                "name": "Entity Panda Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.panda.eat",
                "name": "Entity Panda Eat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.panda.hurt",
                "name": "Entity Panda Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.panda.pre_sneeze",
                "name": "Entity Panda Pre Sneeze",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.panda.sneeze",
                "name": "Entity Panda Sneeze",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.panda.step",
                "name": "Entity Panda Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.panda.worried_ambient",
                "name": "Entity Panda Worried Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.ambient",
                "name": "Entity Parrot Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.death",
                "name": "Entity Parrot Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.eat",
                "name": "Entity Parrot Eat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.fly",
                "name": "Entity Parrot Fly",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.hurt",
                "name": "Entity Parrot Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.blaze",
                "name": "Entity Parrot Imitate Blaze",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.creeper",
                "name": "Entity Parrot Imitate Creeper",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.drowned",
                "name": "Entity Parrot Imitate Drowned",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.elder_guardian",
                "name": "Entity Parrot Imitate Elder Guardian",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.ender_dragon",
                "name": "Entity Parrot Imitate Ender Dragon",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.endermite",
                "name": "Entity Parrot Imitate Endermite",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.evoker",
                "name": "Entity Parrot Imitate Evoker",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.ghast",
                "name": "Entity Parrot Imitate Ghast",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.guardian",
                "name": "Entity Parrot Imitate Guardian",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.hoglin",
                "name": "Entity Parrot Imitate Hoglin",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.husk",
                "name": "Entity Parrot Imitate Husk",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.illusioner",
                "name": "Entity Parrot Imitate Illusioner",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.magma_cube",
                "name": "Entity Parrot Imitate Magma Cube",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.phantom",
                "name": "Entity Parrot Imitate Phantom",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.piglin",
                "name": "Entity Parrot Imitate Piglin",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.piglin_brute",
                "name": "Entity Parrot Imitate Piglin Brute",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.pillager",
                "name": "Entity Parrot Imitate Pillager",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.ravager",
                "name": "Entity Parrot Imitate Ravager",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.shulker",
                "name": "Entity Parrot Imitate Shulker",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.silverfish",
                "name": "Entity Parrot Imitate Silverfish",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.skeleton",
                "name": "Entity Parrot Imitate Skeleton",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.slime",
                "name": "Entity Parrot Imitate Slime",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.spider",
                "name": "Entity Parrot Imitate Spider",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.stray",
                "name": "Entity Parrot Imitate Stray",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.vex",
                "name": "Entity Parrot Imitate Vex",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.vindicator",
                "name": "Entity Parrot Imitate Vindicator",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.warden",
                "name": "Entity Parrot Imitate Warden",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.witch",
                "name": "Entity Parrot Imitate Witch",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.wither",
                "name": "Entity Parrot Imitate Wither",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.wither_skeleton",
                "name": "Entity Parrot Imitate Wither Skeleton",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.zoglin",
                "name": "Entity Parrot Imitate Zoglin",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.zombie",
                "name": "Entity Parrot Imitate Zombie",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.imitate.zombie_villager",
                "name": "Entity Parrot Imitate Zombie Villager",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.parrot.step",
                "name": "Entity Parrot Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.phantom.ambient",
                "name": "Entity Phantom Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.phantom.bite",
                "name": "Entity Phantom Bite",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.phantom.death",
                "name": "Entity Phantom Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.phantom.flap",
                "name": "Entity Phantom Flap",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.phantom.hurt",
                "name": "Entity Phantom Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.phantom.swoop",
                "name": "Entity Phantom Swoop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.pig.ambient",
                "name": "Entity Pig Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.pig.death",
                "name": "Entity Pig Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.pig.hurt",
                "name": "Entity Pig Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.pig.saddle",
                "name": "Entity Pig Saddle",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.pig.step",
                "name": "Entity Pig Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.piglin_brute.ambient",
                "name": "Entity Piglin Brute Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.piglin_brute.angry",
                "name": "Entity Piglin Brute Angry",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.piglin_brute.converted_to_zombified",
                "name": "Entity Piglin Brute Converted To Zombified",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.piglin_brute.death",
                "name": "Entity Piglin Brute Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.piglin_brute.hurt",
                "name": "Entity Piglin Brute Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.piglin_brute.step",
                "name": "Entity Piglin Brute Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.piglin.admiring_item",
                "name": "Entity Piglin Admiring Item",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.piglin.ambient",
                "name": "Entity Piglin Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.piglin.angry",
                "name": "Entity Piglin Angry",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.piglin.celebrate",
                "name": "Entity Piglin Celebrate",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.piglin.converted_to_zombified",
                "name": "Entity Piglin Converted To Zombified",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.piglin.death",
                "name": "Entity Piglin Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.piglin.hurt",
                "name": "Entity Piglin Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.piglin.jealous",
                "name": "Entity Piglin Jealous",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.piglin.retreat",
                "name": "Entity Piglin Retreat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.piglin.step",
                "name": "Entity Piglin Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.pillager.ambient",
                "name": "Entity Pillager Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.pillager.celebrate",
                "name": "Entity Pillager Celebrate",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.pillager.death",
                "name": "Entity Pillager Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.pillager.hurt",
                "name": "Entity Pillager Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.attack.crit",
                "name": "Entity Player Attack Crit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.attack.knockback",
                "name": "Entity Player Attack Knockback",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.attack.nodamage",
                "name": "Entity Player Attack Nodamage",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.attack.strong",
                "name": "Entity Player Attack Strong",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.attack.sweep",
                "name": "Entity Player Attack Sweep",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.attack.weak",
                "name": "Entity Player Attack Weak",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.big_fall",
                "name": "Entity Player Big Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.breath",
                "name": "Entity Player Breath",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.burp",
                "name": "Entity Player Burp",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.death",
                "name": "Entity Player Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.hurt",
                "name": "Entity Player Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.hurt_drown",
                "name": "Entity Player Hurt Drown",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.hurt_freeze",
                "name": "Entity Player Hurt Freeze",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.hurt_on_fire",
                "name": "Entity Player Hurt On Fire",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.hurt_sweet_berry_bush",
                "name": "Entity Player Hurt Sweet Berry Bush",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.levelup",
                "name": "Entity Player Levelup",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.small_fall",
                "name": "Entity Player Small Fall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.splash",
                "name": "Entity Player Splash",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.splash.high_speed",
                "name": "Entity Player Splash High Speed",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.player.swim",
                "name": "Entity Player Swim",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.polar_bear.ambient",
                "name": "Entity Polar Bear Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.polar_bear.ambient_baby",
                "name": "Entity Polar Bear Ambient Baby",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.polar_bear.death",
                "name": "Entity Polar Bear Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.polar_bear.hurt",
                "name": "Entity Polar Bear Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.polar_bear.step",
                "name": "Entity Polar Bear Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.polar_bear.warning",
                "name": "Entity Polar Bear Warning",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.puffer_fish.ambient",
                "name": "Entity Puffer Fish Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.puffer_fish.blow_out",
                "name": "Entity Puffer Fish Blow Out",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.puffer_fish.blow_up",
                "name": "Entity Puffer Fish Blow Up",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.puffer_fish.death",
                "name": "Entity Puffer Fish Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.puffer_fish.flop",
                "name": "Entity Puffer Fish Flop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.puffer_fish.hurt",
                "name": "Entity Puffer Fish Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.puffer_fish.sting",
                "name": "Entity Puffer Fish Sting",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.rabbit.ambient",
                "name": "Entity Rabbit Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.rabbit.attack",
                "name": "Entity Rabbit Attack",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.rabbit.death",
                "name": "Entity Rabbit Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.rabbit.hurt",
                "name": "Entity Rabbit Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.rabbit.jump",
                "name": "Entity Rabbit Jump",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ravager.ambient",
                "name": "Entity Ravager Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ravager.attack",
                "name": "Entity Ravager Attack",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ravager.celebrate",
                "name": "Entity Ravager Celebrate",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ravager.death",
                "name": "Entity Ravager Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ravager.hurt",
                "name": "Entity Ravager Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ravager.roar",
                "name": "Entity Ravager Roar",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ravager.step",
                "name": "Entity Ravager Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.ravager.stunned",
                "name": "Entity Ravager Stunned",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.salmon.ambient",
                "name": "Entity Salmon Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.salmon.death",
                "name": "Entity Salmon Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.salmon.flop",
                "name": "Entity Salmon Flop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.salmon.hurt",
                "name": "Entity Salmon Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.sheep.ambient",
                "name": "Entity Sheep Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.sheep.death",
                "name": "Entity Sheep Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.sheep.hurt",
                "name": "Entity Sheep Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.sheep.shear",
                "name": "Entity Sheep Shear",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.sheep.step",
                "name": "Entity Sheep Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.shulker_bullet.hit",
                "name": "Entity Shulker Bullet Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.shulker_bullet.hurt",
                "name": "Entity Shulker Bullet Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.shulker.ambient",
                "name": "Entity Shulker Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.shulker.close",
                "name": "Entity Shulker Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.shulker.death",
                "name": "Entity Shulker Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.shulker.hurt",
                "name": "Entity Shulker Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.shulker.hurt_closed",
                "name": "Entity Shulker Hurt Closed",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.shulker.open",
                "name": "Entity Shulker Open",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.shulker.shoot",
                "name": "Entity Shulker Shoot",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.shulker.teleport",
                "name": "Entity Shulker Teleport",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.silverfish.ambient",
                "name": "Entity Silverfish Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.silverfish.death",
                "name": "Entity Silverfish Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.silverfish.hurt",
                "name": "Entity Silverfish Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.silverfish.step",
                "name": "Entity Silverfish Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.skeleton_horse.ambient",
                "name": "Entity Skeleton Horse Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.skeleton_horse.ambient_water",
                "name": "Entity Skeleton Horse Ambient Water",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.skeleton_horse.death",
                "name": "Entity Skeleton Horse Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.skeleton_horse.gallop_water",
                "name": "Entity Skeleton Horse Gallop Water",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.skeleton_horse.hurt",
                "name": "Entity Skeleton Horse Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.skeleton_horse.jump_water",
                "name": "Entity Skeleton Horse Jump Water",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.skeleton_horse.step_water",
                "name": "Entity Skeleton Horse Step Water",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.skeleton_horse.swim",
                "name": "Entity Skeleton Horse Swim",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.skeleton.ambient",
                "name": "Entity Skeleton Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.skeleton.converted_to_stray",
                "name": "Entity Skeleton Converted To Stray",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.skeleton.death",
                "name": "Entity Skeleton Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.skeleton.hurt",
                "name": "Entity Skeleton Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.skeleton.shoot",
                "name": "Entity Skeleton Shoot",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.skeleton.step",
                "name": "Entity Skeleton Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.slime.attack",
                "name": "Entity Slime Attack",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.slime.death",
                "name": "Entity Slime Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.slime.death_small",
                "name": "Entity Slime Death Small",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.slime.hurt",
                "name": "Entity Slime Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.slime.hurt_small",
                "name": "Entity Slime Hurt Small",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.slime.jump",
                "name": "Entity Slime Jump",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.slime.jump_small",
                "name": "Entity Slime Jump Small",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.slime.squish",
                "name": "Entity Slime Squish",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.slime.squish_small",
                "name": "Entity Slime Squish Small",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.sniffer.death",
                "name": "Entity Sniffer Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.sniffer.digging",
                "name": "Entity Sniffer Digging",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.sniffer.digging_stop",
                "name": "Entity Sniffer Digging Stop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.sniffer.drop_seed",
                "name": "Entity Sniffer Drop Seed",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.sniffer.eat",
                "name": "Entity Sniffer Eat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.sniffer.happy",
                "name": "Entity Sniffer Happy",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.sniffer.hurt",
                "name": "Entity Sniffer Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.sniffer.idle",
                "name": "Entity Sniffer Idle",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.sniffer.scenting",
                "name": "Entity Sniffer Scenting",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.sniffer.searching",
                "name": "Entity Sniffer Searching",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.sniffer.sniffing",
                "name": "Entity Sniffer Sniffing",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.sniffer.step",
                "name": "Entity Sniffer Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.snow_golem.ambient",
                "name": "Entity Snow Golem Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.snow_golem.death",
                "name": "Entity Snow Golem Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.snow_golem.hurt",
                "name": "Entity Snow Golem Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.snow_golem.shear",
                "name": "Entity Snow Golem Shear",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.snow_golem.shoot",
                "name": "Entity Snow Golem Shoot",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.snowball.throw",
                "name": "Entity Snowball Throw",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.spider.ambient",
                "name": "Entity Spider Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.spider.death",
                "name": "Entity Spider Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.spider.hurt",
                "name": "Entity Spider Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.spider.step",
                "name": "Entity Spider Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.splash_potion.break",
                "name": "Entity Splash Potion Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.splash_potion.throw",
                "name": "Entity Splash Potion Throw",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.squid.ambient",
                "name": "Entity Squid Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.squid.death",
                "name": "Entity Squid Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.squid.hurt",
                "name": "Entity Squid Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.squid.squirt",
                "name": "Entity Squid Squirt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.stray.ambient",
                "name": "Entity Stray Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.stray.death",
                "name": "Entity Stray Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.stray.hurt",
                "name": "Entity Stray Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.stray.step",
                "name": "Entity Stray Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.strider.ambient",
                "name": "Entity Strider Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.strider.death",
                "name": "Entity Strider Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.strider.eat",
                "name": "Entity Strider Eat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.strider.happy",
                "name": "Entity Strider Happy",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.strider.hurt",
                "name": "Entity Strider Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.strider.retreat",
                "name": "Entity Strider Retreat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.strider.saddle",
                "name": "Entity Strider Saddle",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.strider.step",
                "name": "Entity Strider Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.strider.step_lava",
                "name": "Entity Strider Step Lava",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.tadpole.death",
                "name": "Entity Tadpole Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.tadpole.flop",
                "name": "Entity Tadpole Flop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.tadpole.grow_up",
                "name": "Entity Tadpole Grow Up",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.tadpole.hurt",
                "name": "Entity Tadpole Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.tnt.primed",
                "name": "Entity Tnt Primed",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.tropical_fish.ambient",
                "name": "Entity Tropical Fish Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.tropical_fish.death",
                "name": "Entity Tropical Fish Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.tropical_fish.flop",
                "name": "Entity Tropical Fish Flop",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.tropical_fish.hurt",
                "name": "Entity Tropical Fish Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.turtle.ambient_land",
                "name": "Entity Turtle Ambient Land",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.turtle.death",
                "name": "Entity Turtle Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.turtle.death_baby",
                "name": "Entity Turtle Death Baby",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.turtle.egg_break",
                "name": "Entity Turtle Egg Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.turtle.egg_crack",
                "name": "Entity Turtle Egg Crack",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.turtle.egg_hatch",
                "name": "Entity Turtle Egg Hatch",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.turtle.hurt",
                "name": "Entity Turtle Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.turtle.hurt_baby",
                "name": "Entity Turtle Hurt Baby",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.turtle.lay_egg",
                "name": "Entity Turtle Lay Egg",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.turtle.shamble",
                "name": "Entity Turtle Shamble",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.turtle.shamble_baby",
                "name": "Entity Turtle Shamble Baby",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.turtle.swim",
                "name": "Entity Turtle Swim",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.vex.ambient",
                "name": "Entity Vex Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.vex.charge",
                "name": "Entity Vex Charge",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.vex.death",
                "name": "Entity Vex Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.vex.hurt",
                "name": "Entity Vex Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.ambient",
                "name": "Entity Villager Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.celebrate",
                "name": "Entity Villager Celebrate",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.death",
                "name": "Entity Villager Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.hurt",
                "name": "Entity Villager Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.no",
                "name": "Entity Villager No",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.trade",
                "name": "Entity Villager Trade",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.work_armorer",
                "name": "Entity Villager Work Armorer",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.work_butcher",
                "name": "Entity Villager Work Butcher",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.work_cartographer",
                "name": "Entity Villager Work Cartographer",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.work_cleric",
                "name": "Entity Villager Work Cleric",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.work_farmer",
                "name": "Entity Villager Work Farmer",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.work_fisherman",
                "name": "Entity Villager Work Fisherman",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.work_fletcher",
                "name": "Entity Villager Work Fletcher",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.work_leatherworker",
                "name": "Entity Villager Work Leatherworker",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.work_librarian",
                "name": "Entity Villager Work Librarian",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.work_mason",
                "name": "Entity Villager Work Mason",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.work_shepherd",
                "name": "Entity Villager Work Shepherd",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.work_toolsmith",
                "name": "Entity Villager Work Toolsmith",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.work_weaponsmith",
                "name": "Entity Villager Work Weaponsmith",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.villager.yes",
                "name": "Entity Villager Yes",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.vindicator.ambient",
                "name": "Entity Vindicator Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.vindicator.celebrate",
                "name": "Entity Vindicator Celebrate",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.vindicator.death",
                "name": "Entity Vindicator Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.vindicator.hurt",
                "name": "Entity Vindicator Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wandering_trader.ambient",
                "name": "Entity Wandering Trader Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wandering_trader.death",
                "name": "Entity Wandering Trader Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wandering_trader.disappeared",
                "name": "Entity Wandering Trader Disappeared",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wandering_trader.drink_milk",
                "name": "Entity Wandering Trader Drink Milk",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wandering_trader.drink_potion",
                "name": "Entity Wandering Trader Drink Potion",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wandering_trader.hurt",
                "name": "Entity Wandering Trader Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wandering_trader.no",
                "name": "Entity Wandering Trader No",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wandering_trader.reappeared",
                "name": "Entity Wandering Trader Reappeared",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wandering_trader.trade",
                "name": "Entity Wandering Trader Trade",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wandering_trader.yes",
                "name": "Entity Wandering Trader Yes",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.agitated",
                "name": "Entity Warden Agitated",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.ambient",
                "name": "Entity Warden Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.angry",
                "name": "Entity Warden Angry",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.attack_impact",
                "name": "Entity Warden Attack Impact",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.death",
                "name": "Entity Warden Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.dig",
                "name": "Entity Warden Dig",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.emerge",
                "name": "Entity Warden Emerge",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.heartbeat",
                "name": "Entity Warden Heartbeat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.hurt",
                "name": "Entity Warden Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.listening",
                "name": "Entity Warden Listening",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.listening_angry",
                "name": "Entity Warden Listening Angry",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.nearby_close",
                "name": "Entity Warden Nearby Close",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.nearby_closer",
                "name": "Entity Warden Nearby Closer",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.nearby_closest",
                "name": "Entity Warden Nearby Closest",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.roar",
                "name": "Entity Warden Roar",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.sniff",
                "name": "Entity Warden Sniff",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.sonic_boom",
                "name": "Entity Warden Sonic Boom",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.sonic_charge",
                "name": "Entity Warden Sonic Charge",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.step",
                "name": "Entity Warden Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.warden.tendril_clicks",
                "name": "Entity Warden Tendril Clicks",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.witch.ambient",
                "name": "Entity Witch Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.witch.celebrate",
                "name": "Entity Witch Celebrate",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.witch.death",
                "name": "Entity Witch Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.witch.drink",
                "name": "Entity Witch Drink",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.witch.hurt",
                "name": "Entity Witch Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.witch.throw",
                "name": "Entity Witch Throw",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wither_skeleton.ambient",
                "name": "Entity Wither Skeleton Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wither_skeleton.death",
                "name": "Entity Wither Skeleton Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wither_skeleton.hurt",
                "name": "Entity Wither Skeleton Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wither_skeleton.step",
                "name": "Entity Wither Skeleton Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wither.ambient",
                "name": "Entity Wither Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wither.break_block",
                "name": "Entity Wither Break Block",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wither.death",
                "name": "Entity Wither Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wither.hurt",
                "name": "Entity Wither Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wither.shoot",
                "name": "Entity Wither Shoot",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wither.spawn",
                "name": "Entity Wither Spawn",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wolf.ambient",
                "name": "Entity Wolf Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wolf.death",
                "name": "Entity Wolf Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wolf.growl",
                "name": "Entity Wolf Growl",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wolf.howl",
                "name": "Entity Wolf Howl",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wolf.hurt",
                "name": "Entity Wolf Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wolf.pant",
                "name": "Entity Wolf Pant",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wolf.shake",
                "name": "Entity Wolf Shake",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wolf.step",
                "name": "Entity Wolf Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.wolf.whine",
                "name": "Entity Wolf Whine",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zoglin.ambient",
                "name": "Entity Zoglin Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zoglin.angry",
                "name": "Entity Zoglin Angry",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zoglin.attack",
                "name": "Entity Zoglin Attack",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zoglin.death",
                "name": "Entity Zoglin Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zoglin.hurt",
                "name": "Entity Zoglin Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zoglin.step",
                "name": "Entity Zoglin Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombie_horse.ambient",
                "name": "Entity Zombie Horse Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombie_horse.death",
                "name": "Entity Zombie Horse Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombie_horse.hurt",
                "name": "Entity Zombie Horse Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombie_villager.ambient",
                "name": "Entity Zombie Villager Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombie_villager.converted",
                "name": "Entity Zombie Villager Converted",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombie_villager.cure",
                "name": "Entity Zombie Villager Cure",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombie_villager.death",
                "name": "Entity Zombie Villager Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombie_villager.hurt",
                "name": "Entity Zombie Villager Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombie_villager.step",
                "name": "Entity Zombie Villager Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombie.ambient",
                "name": "Entity Zombie Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombie.attack_iron_door",
                "name": "Entity Zombie Attack Iron Door",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombie.attack_wooden_door",
                "name": "Entity Zombie Attack Wooden Door",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombie.break_wooden_door",
                "name": "Entity Zombie Break Wooden Door",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombie.converted_to_drowned",
                "name": "Entity Zombie Converted To Drowned",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombie.death",
                "name": "Entity Zombie Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombie.destroy_egg",
                "name": "Entity Zombie Destroy Egg",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombie.hurt",
                "name": "Entity Zombie Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombie.infect",
                "name": "Entity Zombie Infect",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombie.step",
                "name": "Entity Zombie Step",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombified_piglin.ambient",
                "name": "Entity Zombified Piglin Ambient",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombified_piglin.angry",
                "name": "Entity Zombified Piglin Angry",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombified_piglin.death",
                "name": "Entity Zombified Piglin Death",
                "icon": "🔊"
        },
        {
                "id": "minecraft:entity.zombified_piglin.hurt",
                "name": "Entity Zombified Piglin Hurt",
                "icon": "🔊"
        },
        {
                "id": "minecraft:event.raid.horn",
                "name": "Event Raid Horn",
                "icon": "🔊"
        },
        {
                "id": "minecraft:intentionally_empty",
                "name": "Intentionally Empty",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.armor.equip_chain",
                "name": "Item Armor Equip Chain",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.armor.equip_diamond",
                "name": "Item Armor Equip Diamond",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.armor.equip_elytra",
                "name": "Item Armor Equip Elytra",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.armor.equip_generic",
                "name": "Item Armor Equip Generic",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.armor.equip_gold",
                "name": "Item Armor Equip Gold",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.armor.equip_iron",
                "name": "Item Armor Equip Iron",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.armor.equip_leather",
                "name": "Item Armor Equip Leather",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.armor.equip_netherite",
                "name": "Item Armor Equip Netherite",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.armor.equip_turtle",
                "name": "Item Armor Equip Turtle",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.axe.scrape",
                "name": "Item Axe Scrape",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.axe.strip",
                "name": "Item Axe Strip",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.axe.wax_off",
                "name": "Item Axe Wax Off",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.bone_meal.use",
                "name": "Item Bone Meal Use",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.book.page_turn",
                "name": "Item Book Page Turn",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.book.put",
                "name": "Item Book Put",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.bottle.empty",
                "name": "Item Bottle Empty",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.bottle.fill",
                "name": "Item Bottle Fill",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.bottle.fill_dragonbreath",
                "name": "Item Bottle Fill Dragonbreath",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.brush.brushing.generic",
                "name": "Item Brush Brushing Generic",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.brush.brushing.gravel",
                "name": "Item Brush Brushing Gravel",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.brush.brushing.gravel.complete",
                "name": "Item Brush Brushing Gravel Complete",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.brush.brushing.sand",
                "name": "Item Brush Brushing Sand",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.brush.brushing.sand.complete",
                "name": "Item Brush Brushing Sand Complete",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.bucket.empty",
                "name": "Item Bucket Empty",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.bucket.empty_axolotl",
                "name": "Item Bucket Empty Axolotl",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.bucket.empty_fish",
                "name": "Item Bucket Empty Fish",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.bucket.empty_lava",
                "name": "Item Bucket Empty Lava",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.bucket.empty_powder_snow",
                "name": "Item Bucket Empty Powder Snow",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.bucket.empty_tadpole",
                "name": "Item Bucket Empty Tadpole",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.bucket.fill",
                "name": "Item Bucket Fill",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.bucket.fill_axolotl",
                "name": "Item Bucket Fill Axolotl",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.bucket.fill_fish",
                "name": "Item Bucket Fill Fish",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.bucket.fill_lava",
                "name": "Item Bucket Fill Lava",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.bucket.fill_powder_snow",
                "name": "Item Bucket Fill Powder Snow",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.bucket.fill_tadpole",
                "name": "Item Bucket Fill Tadpole",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.bundle.drop_contents",
                "name": "Item Bundle Drop Contents",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.bundle.insert",
                "name": "Item Bundle Insert",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.bundle.remove_one",
                "name": "Item Bundle Remove One",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.chorus_fruit.teleport",
                "name": "Item Chorus Fruit Teleport",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.crop.plant",
                "name": "Item Crop Plant",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.crossbow.hit",
                "name": "Item Crossbow Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.crossbow.loading_end",
                "name": "Item Crossbow Loading End",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.crossbow.loading_middle",
                "name": "Item Crossbow Loading Middle",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.crossbow.loading_start",
                "name": "Item Crossbow Loading Start",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.crossbow.quick_charge_1",
                "name": "Item Crossbow Quick Charge 1",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.crossbow.quick_charge_2",
                "name": "Item Crossbow Quick Charge 2",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.crossbow.quick_charge_3",
                "name": "Item Crossbow Quick Charge 3",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.crossbow.shoot",
                "name": "Item Crossbow Shoot",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.dye.use",
                "name": "Item Dye Use",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.elytra.flying",
                "name": "Item Elytra Flying",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.firecharge.use",
                "name": "Item Firecharge Use",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.flintandsteel.use",
                "name": "Item Flintandsteel Use",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.glow_ink_sac.use",
                "name": "Item Glow Ink Sac Use",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.goat_horn.play",
                "name": "Item Goat Horn Play",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.goat_horn.sound.0",
                "name": "Item Goat Horn Sound 0",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.goat_horn.sound.1",
                "name": "Item Goat Horn Sound 1",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.goat_horn.sound.2",
                "name": "Item Goat Horn Sound 2",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.goat_horn.sound.3",
                "name": "Item Goat Horn Sound 3",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.goat_horn.sound.4",
                "name": "Item Goat Horn Sound 4",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.goat_horn.sound.5",
                "name": "Item Goat Horn Sound 5",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.goat_horn.sound.6",
                "name": "Item Goat Horn Sound 6",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.goat_horn.sound.7",
                "name": "Item Goat Horn Sound 7",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.hoe.till",
                "name": "Item Hoe Till",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.honey_bottle.drink",
                "name": "Item Honey Bottle Drink",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.honeycomb.wax_on",
                "name": "Item Honeycomb Wax On",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.ink_sac.use",
                "name": "Item Ink Sac Use",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.lodestone_compass.lock",
                "name": "Item Lodestone Compass Lock",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.nether_wart.plant",
                "name": "Item Nether Wart Plant",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.shield.block",
                "name": "Item Shield Block",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.shield.break",
                "name": "Item Shield Break",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.shovel.flatten",
                "name": "Item Shovel Flatten",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.spyglass.stop_using",
                "name": "Item Spyglass Stop Using",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.spyglass.use",
                "name": "Item Spyglass Use",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.totem.use",
                "name": "Item Totem Use",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.trident.hit",
                "name": "Item Trident Hit",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.trident.hit_ground",
                "name": "Item Trident Hit Ground",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.trident.return",
                "name": "Item Trident Return",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.trident.riptide_1",
                "name": "Item Trident Riptide 1",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.trident.riptide_2",
                "name": "Item Trident Riptide 2",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.trident.riptide_3",
                "name": "Item Trident Riptide 3",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.trident.throw",
                "name": "Item Trident Throw",
                "icon": "🔊"
        },
        {
                "id": "minecraft:item.trident.thunder",
                "name": "Item Trident Thunder",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music_disc.11",
                "name": "Music Disc 11",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music_disc.13",
                "name": "Music Disc 13",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music_disc.5",
                "name": "Music Disc 5",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music_disc.blocks",
                "name": "Music Disc Blocks",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music_disc.cat",
                "name": "Music Disc Cat",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music_disc.chirp",
                "name": "Music Disc Chirp",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music_disc.far",
                "name": "Music Disc Far",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music_disc.mall",
                "name": "Music Disc Mall",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music_disc.mellohi",
                "name": "Music Disc Mellohi",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music_disc.otherside",
                "name": "Music Disc Otherside",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music_disc.pigstep",
                "name": "Music Disc Pigstep",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music_disc.relic",
                "name": "Music Disc Relic",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music_disc.stal",
                "name": "Music Disc Stal",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music_disc.strad",
                "name": "Music Disc Strad",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music_disc.wait",
                "name": "Music Disc Wait",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music_disc.ward",
                "name": "Music Disc Ward",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.creative",
                "name": "Music Creative",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.credits",
                "name": "Music Credits",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.dragon",
                "name": "Music Dragon",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.end",
                "name": "Music End",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.game",
                "name": "Music Game",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.menu",
                "name": "Music Menu",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.nether.basalt_deltas",
                "name": "Music Nether Basalt Deltas",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.nether.crimson_forest",
                "name": "Music Nether Crimson Forest",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.nether.nether_wastes",
                "name": "Music Nether Nether Wastes",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.nether.soul_sand_valley",
                "name": "Music Nether Soul Sand Valley",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.nether.warped_forest",
                "name": "Music Nether Warped Forest",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.overworld.badlands",
                "name": "Music Overworld Badlands",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.overworld.bamboo_jungle",
                "name": "Music Overworld Bamboo Jungle",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.overworld.cherry_grove",
                "name": "Music Overworld Cherry Grove",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.overworld.deep_dark",
                "name": "Music Overworld Deep Dark",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.overworld.desert",
                "name": "Music Overworld Desert",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.overworld.dripstone_caves",
                "name": "Music Overworld Dripstone Caves",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.overworld.flower_forest",
                "name": "Music Overworld Flower Forest",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.overworld.forest",
                "name": "Music Overworld Forest",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.overworld.frozen_peaks",
                "name": "Music Overworld Frozen Peaks",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.overworld.grove",
                "name": "Music Overworld Grove",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.overworld.jagged_peaks",
                "name": "Music Overworld Jagged Peaks",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.overworld.jungle",
                "name": "Music Overworld Jungle",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.overworld.lush_caves",
                "name": "Music Overworld Lush Caves",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.overworld.meadow",
                "name": "Music Overworld Meadow",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.overworld.old_growth_taiga",
                "name": "Music Overworld Old Growth Taiga",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.overworld.snowy_slopes",
                "name": "Music Overworld Snowy Slopes",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.overworld.sparse_jungle",
                "name": "Music Overworld Sparse Jungle",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.overworld.stony_peaks",
                "name": "Music Overworld Stony Peaks",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.overworld.swamp",
                "name": "Music Overworld Swamp",
                "icon": "🔊"
        },
        {
                "id": "minecraft:music.under_water",
                "name": "Music Under Water",
                "icon": "🔊"
        },
        {
                "id": "minecraft:particle.soul_escape",
                "name": "Particle Soul Escape",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ui.button.click",
                "name": "Ui Button Click",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ui.cartography_table.take_result",
                "name": "Ui Cartography Table Take Result",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ui.loom.select_pattern",
                "name": "Ui Loom Select Pattern",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ui.loom.take_result",
                "name": "Ui Loom Take Result",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ui.stonecutter.select_recipe",
                "name": "Ui Stonecutter Select Recipe",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ui.stonecutter.take_result",
                "name": "Ui Stonecutter Take Result",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ui.toast.challenge_complete",
                "name": "Ui Toast Challenge Complete",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ui.toast.in",
                "name": "Ui Toast In",
                "icon": "🔊"
        },
        {
                "id": "minecraft:ui.toast.out",
                "name": "Ui Toast Out",
                "icon": "🔊"
        },
        {
                "id": "minecraft:weather.rain",
                "name": "Weather Rain",
                "icon": "🔊"
        },
        {
                "id": "minecraft:weather.rain.above",
                "name": "Weather Rain Above",
                "icon": "🔊"
        }
],

    // Preserved Execute Slots List
    execute_slots: [
        {
                "id": "weapon.mainhand",
                "name": "Main Hand (Weapon)",
                "icon": "⚔️"
        },
        {
                "id": "weapon.offhand",
                "name": "Offhand Slot",
                "icon": "🛡️"
        },
        {
                "id": "armor.head",
                "name": "Helmet Slot",
                "icon": "🪖"
        },
        {
                "id": "armor.chest",
                "name": "Chestplate Slot",
                "icon": "👕"
        },
        {
                "id": "armor.legs",
                "name": "Leggings Slot",
                "icon": "👖"
        },
        {
                "id": "armor.feet",
                "name": "Boots Slot",
                "icon": "🥾"
        }
],

    // Generated Biomes List (ALL 64 entries)
    biomes: [
        {
                "id": "minecraft:badlands",
                "name": "Badlands",
                "icon": "🌵",
                "desc": "A Overworld biome. Category: Mesa. Temp: 2. Precipitation: No."
        },
        {
                "id": "minecraft:bamboo_jungle",
                "name": "Bamboo Jungle",
                "icon": "🌴",
                "desc": "A Overworld biome. Category: Jungle. Temp: 0.95. Precipitation: Yes."
        },
        {
                "id": "minecraft:basalt_deltas",
                "name": "Basalt Deltas",
                "icon": "🔥",
                "desc": "A Nether biome. Category: Nether. Temp: 2. Precipitation: No."
        },
        {
                "id": "minecraft:beach",
                "name": "Beach",
                "icon": "🌊",
                "desc": "A Overworld biome. Category: Beach. Temp: 0.8. Precipitation: Yes."
        },
        {
                "id": "minecraft:birch_forest",
                "name": "Birch Forest",
                "icon": "🌳",
                "desc": "A Overworld biome. Category: Forest. Temp: 0.6. Precipitation: Yes."
        },
        {
                "id": "minecraft:cherry_grove",
                "name": "Cherry Grove",
                "icon": "❄️",
                "desc": "A Overworld biome. Category: Forest. Temp: 0.5. Precipitation: Yes."
        },
        {
                "id": "minecraft:cold_ocean",
                "name": "Cold Ocean",
                "icon": "❄️",
                "desc": "A Overworld biome. Category: Ocean. Temp: 0.5. Precipitation: Yes."
        },
        {
                "id": "minecraft:crimson_forest",
                "name": "Crimson Forest",
                "icon": "🔥",
                "desc": "A Nether biome. Category: Nether. Temp: 2. Precipitation: No."
        },
        {
                "id": "minecraft:dark_forest",
                "name": "Dark Forest",
                "icon": "👁️",
                "desc": "A Overworld biome. Category: Forest. Temp: 0.7. Precipitation: Yes."
        },
        {
                "id": "minecraft:deep_cold_ocean",
                "name": "Deep Cold Ocean",
                "icon": "❄️",
                "desc": "A Overworld biome. Category: Ocean. Temp: 0.5. Precipitation: Yes."
        },
        {
                "id": "minecraft:deep_dark",
                "name": "Deep Dark",
                "icon": "👁️",
                "desc": "A Overworld biome. Category: Underground. Temp: 0.8. Precipitation: Yes."
        },
        {
                "id": "minecraft:deep_frozen_ocean",
                "name": "Deep Frozen Ocean",
                "icon": "❄️",
                "desc": "A Overworld biome. Category: Ocean. Temp: 0.5. Precipitation: Yes."
        },
        {
                "id": "minecraft:deep_lukewarm_ocean",
                "name": "Deep Lukewarm Ocean",
                "icon": "🌊",
                "desc": "A Overworld biome. Category: Ocean. Temp: 0.5. Precipitation: Yes."
        },
        {
                "id": "minecraft:deep_ocean",
                "name": "Deep Ocean",
                "icon": "🌊",
                "desc": "A Overworld biome. Category: Ocean. Temp: 0.5. Precipitation: Yes."
        },
        {
                "id": "minecraft:desert",
                "name": "Desert",
                "icon": "🌵",
                "desc": "A Overworld biome. Category: Desert. Temp: 2. Precipitation: No."
        },
        {
                "id": "minecraft:dripstone_caves",
                "name": "Dripstone Caves",
                "icon": "🌱",
                "desc": "A Overworld biome. Category: Underground. Temp: 0.8. Precipitation: Yes."
        },
        {
                "id": "minecraft:end_barrens",
                "name": "End Barrens",
                "icon": "🌌",
                "desc": "A End biome. Category: The_end. Temp: 0.5. Precipitation: No."
        },
        {
                "id": "minecraft:end_highlands",
                "name": "End Highlands",
                "icon": "🌌",
                "desc": "A End biome. Category: The_end. Temp: 0.5. Precipitation: No."
        },
        {
                "id": "minecraft:end_midlands",
                "name": "End Midlands",
                "icon": "🌌",
                "desc": "A End biome. Category: The_end. Temp: 0.5. Precipitation: No."
        },
        {
                "id": "minecraft:eroded_badlands",
                "name": "Eroded Badlands",
                "icon": "🌵",
                "desc": "A Overworld biome. Category: Mesa. Temp: 2. Precipitation: No."
        },
        {
                "id": "minecraft:flower_forest",
                "name": "Flower Forest",
                "icon": "🌳",
                "desc": "A Overworld biome. Category: Forest. Temp: 0.7. Precipitation: Yes."
        },
        {
                "id": "minecraft:forest",
                "name": "Forest",
                "icon": "🌳",
                "desc": "A Overworld biome. Category: Forest. Temp: 0.7. Precipitation: Yes."
        },
        {
                "id": "minecraft:frozen_ocean",
                "name": "Frozen Ocean",
                "icon": "❄️",
                "desc": "A Overworld biome. Category: Ocean. Temp: 0. Precipitation: Yes."
        },
        {
                "id": "minecraft:frozen_peaks",
                "name": "Frozen Peaks",
                "icon": "❄️",
                "desc": "A Overworld biome. Category: Ice. Temp: -0.7. Precipitation: Yes."
        },
        {
                "id": "minecraft:frozen_river",
                "name": "Frozen River",
                "icon": "❄️",
                "desc": "A Overworld biome. Category: Ice. Temp: 0. Precipitation: Yes."
        },
        {
                "id": "minecraft:grove",
                "name": "Grove",
                "icon": "❄️",
                "desc": "A Overworld biome. Category: Forest. Temp: -0.2. Precipitation: Yes."
        },
        {
                "id": "minecraft:ice_spikes",
                "name": "Ice Spikes",
                "icon": "❄️",
                "desc": "A Overworld biome. Category: Ice. Temp: 0. Precipitation: Yes."
        },
        {
                "id": "minecraft:jagged_peaks",
                "name": "Jagged Peaks",
                "icon": "❄️",
                "desc": "A Overworld biome. Category: Mountain. Temp: -0.7. Precipitation: Yes."
        },
        {
                "id": "minecraft:jungle",
                "name": "Jungle",
                "icon": "🌴",
                "desc": "A Overworld biome. Category: Jungle. Temp: 0.95. Precipitation: Yes."
        },
        {
                "id": "minecraft:lukewarm_ocean",
                "name": "Lukewarm Ocean",
                "icon": "🌊",
                "desc": "A Overworld biome. Category: Ocean. Temp: 0.5. Precipitation: Yes."
        },
        {
                "id": "minecraft:lush_caves",
                "name": "Lush Caves",
                "icon": "🌱",
                "desc": "A Overworld biome. Category: Underground. Temp: 0.5. Precipitation: Yes."
        },
        {
                "id": "minecraft:mangrove_swamp",
                "name": "Mangrove Swamp",
                "icon": "❄️",
                "desc": "A Overworld biome. Category: Forest. Temp: 0.8. Precipitation: Yes."
        },
        {
                "id": "minecraft:meadow",
                "name": "Meadow",
                "icon": "🌱",
                "desc": "A Overworld biome. Category: Mountain. Temp: 0.5. Precipitation: Yes."
        },
        {
                "id": "minecraft:mushroom_fields",
                "name": "Mushroom Fields",
                "icon": "🍄",
                "desc": "A Overworld biome. Category: Mushroom. Temp: 0.9. Precipitation: Yes."
        },
        {
                "id": "minecraft:nether_wastes",
                "name": "Nether Wastes",
                "icon": "🔥",
                "desc": "A Nether biome. Category: Nether. Temp: 2. Precipitation: No."
        },
        {
                "id": "minecraft:ocean",
                "name": "Ocean",
                "icon": "🌊",
                "desc": "A Overworld biome. Category: Ocean. Temp: 0.5. Precipitation: Yes."
        },
        {
                "id": "minecraft:old_growth_birch_forest",
                "name": "Old Growth Birch Forest",
                "icon": "🌳",
                "desc": "A Overworld biome. Category: Forest. Temp: 0.6. Precipitation: Yes."
        },
        {
                "id": "minecraft:old_growth_pine_taiga",
                "name": "Old Growth Pine Taiga",
                "icon": "🌳",
                "desc": "A Overworld biome. Category: Taiga. Temp: 0.3. Precipitation: Yes."
        },
        {
                "id": "minecraft:old_growth_spruce_taiga",
                "name": "Old Growth Spruce Taiga",
                "icon": "🌳",
                "desc": "A Overworld biome. Category: Taiga. Temp: 0.25. Precipitation: Yes."
        },
        {
                "id": "minecraft:plains",
                "name": "Plains",
                "icon": "🌱",
                "desc": "A Overworld biome. Category: Plains. Temp: 0.8. Precipitation: Yes."
        },
        {
                "id": "minecraft:river",
                "name": "River",
                "icon": "🌊",
                "desc": "A Overworld biome. Category: River. Temp: 0.5. Precipitation: Yes."
        },
        {
                "id": "minecraft:savanna",
                "name": "Savanna",
                "icon": "🦁",
                "desc": "A Overworld biome. Category: Savanna. Temp: 2. Precipitation: No."
        },
        {
                "id": "minecraft:savanna_plateau",
                "name": "Savanna Plateau",
                "icon": "🦁",
                "desc": "A Overworld biome. Category: Savanna. Temp: 2. Precipitation: No."
        },
        {
                "id": "minecraft:small_end_islands",
                "name": "Small End Islands",
                "icon": "🌌",
                "desc": "A End biome. Category: The_end. Temp: 0.5. Precipitation: No."
        },
        {
                "id": "minecraft:snowy_beach",
                "name": "Snowy Beach",
                "icon": "❄️",
                "desc": "A Overworld biome. Category: Beach. Temp: 0.05. Precipitation: Yes."
        },
        {
                "id": "minecraft:snowy_plains",
                "name": "Snowy Plains",
                "icon": "❄️",
                "desc": "A Overworld biome. Category: Plains. Temp: 0. Precipitation: Yes."
        },
        {
                "id": "minecraft:snowy_slopes",
                "name": "Snowy Slopes",
                "icon": "❄️",
                "desc": "A Overworld biome. Category: Mountain. Temp: -0.3. Precipitation: Yes."
        },
        {
                "id": "minecraft:snowy_taiga",
                "name": "Snowy Taiga",
                "icon": "❄️",
                "desc": "A Overworld biome. Category: Taiga. Temp: -0.5. Precipitation: Yes."
        },
        {
                "id": "minecraft:soul_sand_valley",
                "name": "Soul Sand Valley",
                "icon": "🔥",
                "desc": "A Nether biome. Category: Nether. Temp: 2. Precipitation: No."
        },
        {
                "id": "minecraft:sparse_jungle",
                "name": "Sparse Jungle",
                "icon": "🌴",
                "desc": "A Overworld biome. Category: Jungle. Temp: 0.95. Precipitation: Yes."
        },
        {
                "id": "minecraft:stony_peaks",
                "name": "Stony Peaks",
                "icon": "❄️",
                "desc": "A Overworld biome. Category: Mountain. Temp: 1. Precipitation: Yes."
        },
        {
                "id": "minecraft:stony_shore",
                "name": "Stony Shore",
                "icon": "🌊",
                "desc": "A Overworld biome. Category: Beach. Temp: 0.2. Precipitation: Yes."
        },
        {
                "id": "minecraft:sunflower_plains",
                "name": "Sunflower Plains",
                "icon": "🌱",
                "desc": "A Overworld biome. Category: Plains. Temp: 0.8. Precipitation: Yes."
        },
        {
                "id": "minecraft:swamp",
                "name": "Swamp",
                "icon": "🐊",
                "desc": "A Overworld biome. Category: Swamp. Temp: 0.8. Precipitation: Yes."
        },
        {
                "id": "minecraft:taiga",
                "name": "Taiga",
                "icon": "🌳",
                "desc": "A Overworld biome. Category: Taiga. Temp: 0.25. Precipitation: Yes."
        },
        {
                "id": "minecraft:the_end",
                "name": "The End",
                "icon": "🌌",
                "desc": "A End biome. Category: The_end. Temp: 0.5. Precipitation: No."
        },
        {
                "id": "minecraft:the_void",
                "name": "The Void",
                "icon": "🌱",
                "desc": "A Overworld biome. Category: None. Temp: 0.5. Precipitation: No."
        },
        {
                "id": "minecraft:warm_ocean",
                "name": "Warm Ocean",
                "icon": "🌊",
                "desc": "A Overworld biome. Category: Ocean. Temp: 0.5. Precipitation: Yes."
        },
        {
                "id": "minecraft:warped_forest",
                "name": "Warped Forest",
                "icon": "🔥",
                "desc": "A Nether biome. Category: Nether. Temp: 2. Precipitation: No."
        },
        {
                "id": "minecraft:windswept_forest",
                "name": "Windswept Forest",
                "icon": "🌳",
                "desc": "A Overworld biome. Category: Forest. Temp: 0.2. Precipitation: Yes."
        },
        {
                "id": "minecraft:windswept_gravelly_hills",
                "name": "Windswept Gravelly Hills",
                "icon": "🌱",
                "desc": "A Overworld biome. Category: Extreme_hills. Temp: 0.2. Precipitation: Yes."
        },
        {
                "id": "minecraft:windswept_hills",
                "name": "Windswept Hills",
                "icon": "🌱",
                "desc": "A Overworld biome. Category: Extreme_hills. Temp: 0.2. Precipitation: Yes."
        },
        {
                "id": "minecraft:windswept_savanna",
                "name": "Windswept Savanna",
                "icon": "🦁",
                "desc": "A Overworld biome. Category: Savanna. Temp: 2. Precipitation: No."
        },
        {
                "id": "minecraft:wooded_badlands",
                "name": "Wooded Badlands",
                "icon": "🌵",
                "desc": "A Overworld biome. Category: Mesa. Temp: 2. Precipitation: No."
        }
],

    // Default Structures List (20 entries)
    structures: [
        {
                "id": "minecraft:ancient_city",
                "name": "Ancient City",
                "icon": "🏛️",
                "desc": "Mammoth underground ruins in the Deep Dark containing sculk shriekers and high-loot chest rooms."
        },
        {
                "id": "minecraft:bastion_remnant",
                "name": "Bastion Remnant",
                "icon": "🏰",
                "desc": "Large obsidian and blackstone castles in the Nether guarded by Piglin Brutes."
        },
        {
                "id": "minecraft:buried_treasure",
                "name": "Buried Treasure",
                "icon": "🪙",
                "desc": "Hidden chests containing Heart of the Sea and gold, located on beaches."
        },
        {
                "id": "minecraft:desert_pyramid",
                "name": "Desert Pyramid",
                "icon": "🏜️",
                "desc": "Sandstone temple containing a treasure chamber with a TNT trap."
        },
        {
                "id": "minecraft:end_city",
                "name": "End City",
                "icon": "🏰",
                "desc": "Tall towers in the outer islands of the End containing Shulkers, Elytras, and dragon heads."
        },
        {
                "id": "minecraft:fortress",
                "name": "Nether Fortress",
                "icon": "🌉",
                "desc": "Nether bridge network filled with Blaze spawners and Wither Skeletons."
        },
        {
                "id": "minecraft:igloo",
                "name": "Igloo",
                "icon": "❄️",
                "desc": "Snow huts containing a bed and occasionally a basement with a zombie cure lab."
        },
        {
                "id": "minecraft:jungle_pyramid",
                "name": "Jungle Pyramid",
                "icon": "🏺",
                "desc": "Mossy cobblestone temple containing tripwire traps and puzzle chests."
        },
        {
                "id": "minecraft:mansion",
                "name": "Woodland Mansion",
                "icon": "🏠",
                "desc": "Large woodland estate filled with Evokers, Vindicators, and hidden rooms."
        },
        {
                "id": "minecraft:mineshaft",
                "name": "Abandoned Mineshaft",
                "icon": "🕸️",
                "desc": "Abandoned mine tunnels containing rails, cave spider spawners, and loot chest minecarts."
        },
        {
                "id": "minecraft:monument",
                "name": "Ocean Monument",
                "icon": "🔱",
                "desc": "Submerged ocean temple filled with Guardians, Elder Guardians, and gold blocks."
        },
        {
                "id": "minecraft:nether_fossil",
                "name": "Nether Fossil",
                "icon": "🦴",
                "desc": "Skeletal bone structures found throughout Soul Sand Valleys in the Nether."
        },
        {
                "id": "minecraft:ocean_ruin",
                "name": "Ocean Ruin",
                "icon": "🌊",
                "desc": "Submerged stone or sandstone structures containing Drowned and sniffer eggs in suspicious sand."
        },
        {
                "id": "minecraft:pillager_outpost",
                "name": "Pillager Outpost",
                "icon": "🏹",
                "desc": "Cobblestone tower manned by Pillagers, containing an iron cage and loot chest."
        },
        {
                "id": "minecraft:ruined_portal",
                "name": "Ruined Portal",
                "icon": "🔥",
                "desc": "Damaged obsidian portals surrounded by netherrack and magma blocks in both dimensions."
        },
        {
                "id": "minecraft:shipwreck",
                "name": "Shipwreck",
                "icon": "⛵",
                "desc": "Sunken oak or spruce vessels containing map chests, treasure chests, and supply chests."
        },
        {
                "id": "minecraft:stronghold",
                "name": "Stronghold",
                "icon": "🗝️",
                "desc": "Underground stone brick fortresses containing libraries, chest rooms, and the End Portal."
        },
        {
                "id": "minecraft:swamp_hut",
                "name": "Swamp Hut (Witch Hut)",
                "icon": "🧹",
                "desc": "Raised wooden huts occupied by a Witch and a black Cat."
        },
        {
                "id": "minecraft:trail_ruins",
                "name": "Trail Ruins",
                "icon": "🧱",
                "desc": "Partially buried ancient structures composed of gravel, terracotta, and suspicious clay."
        },
        {
                "id": "minecraft:village",
                "name": "Village",
                "icon": "🏡",
                "desc": "Settlement containing houses, job blocks, Villagers, and Iron Golems. Available in plains, desert, savanna, taiga, and snowy plains."
        }
],

    // Generated Commands List (ALL 81 entries)
    commands: [
        {
                "id": "/advancement",
                "name": "/advancement",
                "icon": "📜",
                "desc": "Grants, revokes, or tests advancements for players.",
                "meta": "/advancement <grant|revoke> <targets> ..."
        },
        {
                "id": "/attribute",
                "name": "/attribute",
                "icon": "📜",
                "desc": "Gets or modifies attribute modifiers of entities in real time.",
                "meta": "/attribute <target> <attribute> <get|base|modifier> ..."
        },
        {
                "id": "/ban",
                "name": "/ban",
                "icon": "📜",
                "desc": "Adds player to server ban list.",
                "meta": "/ban <targets> [reason]"
        },
        {
                "id": "/ban-ip",
                "name": "/ban-ip",
                "icon": "📜",
                "desc": "Adds IP address to server ban list.",
                "meta": "/ban-ip <target> [reason]"
        },
        {
                "id": "/banlist",
                "name": "/banlist",
                "icon": "📜",
                "desc": "Displays the server ban list.",
                "meta": "/banlist [ips|players]"
        },
        {
                "id": "/bossbar",
                "name": "/bossbar",
                "icon": "📜",
                "desc": "Creates and modifies boss bars.",
                "meta": "/bossbar <add|remove|list|set|get> ..."
        },
        {
                "id": "/clear",
                "name": "/clear",
                "icon": "📜",
                "desc": "Empties items matching filters from target players' inventories.",
                "meta": "/clear [targets] [item] [maxCount]"
        },
        {
                "id": "/clone",
                "name": "/clone",
                "icon": "📜",
                "desc": "Clones blocks from one region to another.",
                "meta": "/clone <begin> <end> <destination> [replace|masked] ..."
        },
        {
                "id": "/damage",
                "name": "/damage",
                "icon": "📜",
                "desc": "Applies custom damage to target entities.",
                "meta": "/damage <target> <amount> [damageType] [at <location>]"
        },
        {
                "id": "/data",
                "name": "/data",
                "icon": "📜",
                "desc": "Gets, merges, modifies, and clears NBT data of blocks and entities.",
                "meta": "/data <get|merge|modify|remove> <block|entity|storage> ..."
        },
        {
                "id": "/datapack",
                "name": "/datapack",
                "icon": "📜",
                "desc": "Controls loaded data packs.",
                "meta": "/datapack <enable|disable|list> ..."
        },
        {
                "id": "/debug",
                "name": "/debug",
                "icon": "📜",
                "desc": "Starts or stops a profiling debug session.",
                "meta": "/debug <start|stop|report>"
        },
        {
                "id": "/defaultgamemode",
                "name": "/defaultgamemode",
                "icon": "📜",
                "desc": "Sets the default gamemode for new players.",
                "meta": "/defaultgamemode <survival|creative|adventure|spectator>"
        },
        {
                "id": "/deop",
                "name": "/deop",
                "icon": "📜",
                "desc": "Revokes operator status from a player.",
                "meta": "/deop <targets>"
        },
        {
                "id": "/difficulty",
                "name": "/difficulty",
                "icon": "📜",
                "desc": "Modifies global combat challenge parameters.",
                "meta": "/difficulty <peaceful|easy|normal|hard>"
        },
        {
                "id": "/effect",
                "name": "/effect",
                "icon": "📜",
                "desc": "Modifies active potion effects on players or mobs.",
                "meta": "/effect <give|clear> <targets> [effect] [seconds] [amplifier]"
        },
        {
                "id": "/enchant",
                "name": "/enchant",
                "icon": "📜",
                "desc": "Applies compatible enchantments to the held item of a player.",
                "meta": "/enchant <targets> <enchantment> [level]"
        },
        {
                "id": "/execute",
                "name": "/execute",
                "icon": "📜",
                "desc": "Executes commands under specific conditions or on behalf of other entities.",
                "meta": "/execute <subcommands> run <command>"
        },
        {
                "id": "/experience",
                "name": "/experience",
                "icon": "📜",
                "desc": "Grants or queries player experience points and levels.",
                "meta": "/experience <add|set|query> <targets> ..."
        },
        {
                "id": "/fill",
                "name": "/fill",
                "icon": "📜",
                "desc": "Fills a cubic region of blocks with a specified block type.",
                "meta": "/fill <from> <to> <block> [replace|destroy|keep]"
        },
        {
                "id": "/fillbiome",
                "name": "/fillbiome",
                "icon": "📜",
                "desc": "Fills a region with a specified biome.",
                "meta": "/fillbiome <from> <to> <biome>"
        },
        {
                "id": "/forceload",
                "name": "/forceload",
                "icon": "📜",
                "desc": "Forces chunks to remain loaded in memory.",
                "meta": "/forceload <add|remove|query> ..."
        },
        {
                "id": "/function",
                "name": "/function",
                "icon": "📜",
                "desc": "Executes a list of commands from a function file.",
                "meta": "/function <name>"
        },
        {
                "id": "/gamemode",
                "name": "/gamemode",
                "icon": "📜",
                "desc": "Sets the target player's gameplay interaction mode.",
                "meta": "/gamemode <survival|creative|adventure|spectator> [targets]"
        },
        {
                "id": "/gamerule",
                "name": "/gamerule",
                "icon": "📜",
                "desc": "Toggles global server configuration parameters.",
                "meta": "/gamerule <rule> [value]"
        },
        {
                "id": "/give",
                "name": "/give",
                "icon": "📜",
                "desc": "Grants specific items with custom NBT / components to players.",
                "meta": "/give <targets> <item> [count]"
        },
        {
                "id": "/help",
                "name": "/help",
                "icon": "📜",
                "desc": "Shows help information for commands.",
                "meta": "/help [command]"
        },
        {
                "id": "/item",
                "name": "/item",
                "icon": "📜",
                "desc": "Manipulates items in block or entity inventories.",
                "meta": "/item <replace|modify> <block|entity> ..."
        },
        {
                "id": "/jfr",
                "name": "/jfr",
                "icon": "📜",
                "desc": "Controls Java Flight Recorder profiling.",
                "meta": "/jfr start stop"
        },
        {
                "id": "/kick",
                "name": "/kick",
                "icon": "📜",
                "desc": "Kicks a player from the server.",
                "meta": "/kick <targets> [reason]"
        },
        {
                "id": "/kill",
                "name": "/kill",
                "icon": "📜",
                "desc": "Instantly inflicts lethal damage to players or mobs.",
                "meta": "/kill [targets]"
        },
        {
                "id": "/list",
                "name": "/list",
                "icon": "📜",
                "desc": "Lists online players on the server.",
                "meta": "/list [uuids]"
        },
        {
                "id": "/locate",
                "name": "/locate",
                "icon": "📜",
                "desc": "Finds coordinates of structures, biomes, or points of interest.",
                "meta": "/locate <structure|biome|poi> <id>"
        },
        {
                "id": "/loot",
                "name": "/loot",
                "icon": "📜",
                "desc": "Drops items from loot tables into inventories or the world.",
                "meta": "/loot <replace|give|insert|spawn> ..."
        },
        {
                "id": "/me",
                "name": "/me",
                "icon": "📜",
                "desc": "Displays a narrative message in chat (* player action).",
                "meta": "/me <action>"
        },
        {
                "id": "/msg",
                "name": "/msg",
                "icon": "📜",
                "desc": "Sends a private message to one or more players.",
                "meta": "/msg <targets> <message>"
        },
        {
                "id": "/op",
                "name": "/op",
                "icon": "📜",
                "desc": "Grants operator status to a player.",
                "meta": "/op <targets>"
        },
        {
                "id": "/pardon",
                "name": "/pardon",
                "icon": "📜",
                "desc": "Removes player from server ban list.",
                "meta": "/pardon <targets>"
        },
        {
                "id": "/pardon-ip",
                "name": "/pardon-ip",
                "icon": "📜",
                "desc": "Removes IP address from server ban list.",
                "meta": "/pardon-ip <target>"
        },
        {
                "id": "/particle",
                "name": "/particle",
                "icon": "📜",
                "desc": "Spawns cosmetic particles in the environment.",
                "meta": "/particle <name> [pos] [speed] [count]"
        },
        {
                "id": "/perf",
                "name": "/perf",
                "icon": "📜",
                "desc": "Captures performance metrics on the server.",
                "meta": "/perf start stop"
        },
        {
                "id": "/place",
                "name": "/place",
                "icon": "📜",
                "desc": "Places a template, feature, jigsaw, or structure at coordinates.",
                "meta": "/place <feature|structure|jigsaw|template> ..."
        },
        {
                "id": "/playsound",
                "name": "/playsound",
                "icon": "📜",
                "desc": "Plays a sound effect to selected players.",
                "meta": "/playsound <sound> <source> <targets> [pos]"
        },
        {
                "id": "/publish",
                "name": "/publish",
                "icon": "📜",
                "desc": "Opens singleplayer world to LAN.",
                "meta": "/publish <allowCommands>"
        },
        {
                "id": "/random",
                "name": "/random",
                "icon": "📜",
                "desc": "Generates a random value or sets random roll parameters.",
                "meta": "/random <value|roll> ..."
        },
        {
                "id": "/recipe",
                "name": "/recipe",
                "icon": "📜",
                "desc": "Grants or revokes crafting recipes for players.",
                "meta": "/recipe <give|take> <targets> ..."
        },
        {
                "id": "/reload",
                "name": "/reload",
                "icon": "📜",
                "desc": "Reloads all datapacks and functions.",
                "meta": "/reload"
        },
        {
                "id": "/return",
                "name": "/return",
                "icon": "📜",
                "desc": "Returns a value from a function.",
                "meta": "/return <value>"
        },
        {
                "id": "/ride",
                "name": "/ride",
                "icon": "📜",
                "desc": "Makes an entity ride or stop riding another entity.",
                "meta": "/ride <target> <mount|dismount> ..."
        },
        {
                "id": "/save-all",
                "name": "/save-all",
                "icon": "📜",
                "desc": "Saves the world to disk.",
                "meta": "/save-all [flush]"
        },
        {
                "id": "/save-off",
                "name": "/save-off",
                "icon": "📜",
                "desc": "Disables automatic world saving.",
                "meta": "/save-off"
        },
        {
                "id": "/save-on",
                "name": "/save-on",
                "icon": "📜",
                "desc": "Enables automatic world saving.",
                "meta": "/save-on"
        },
        {
                "id": "/say",
                "name": "/say",
                "icon": "📜",
                "desc": "Sends a broadcast message to all players in chat.",
                "meta": "/say <message>"
        },
        {
                "id": "/schedule",
                "name": "/schedule",
                "icon": "📜",
                "desc": "Schedules a function to run after a delay.",
                "meta": "/schedule <function|clear> ..."
        },
        {
                "id": "/scoreboard",
                "name": "/scoreboard",
                "icon": "📜",
                "desc": "Manages scoreboard objectives, teams, and scores.",
                "meta": "/scoreboard <objectives|players|teams> ..."
        },
        {
                "id": "/seed",
                "name": "/seed",
                "icon": "📜",
                "desc": "Displays the world's generation integer seed.",
                "meta": "/seed"
        },
        {
                "id": "/setblock",
                "name": "/setblock",
                "icon": "📜",
                "desc": "Changes a block at specified coordinates.",
                "meta": "/setblock <pos> <block> [destroy|keep|replace]"
        },
        {
                "id": "/setidletimeout",
                "name": "/setidletimeout",
                "icon": "📜",
                "desc": "Sets the maximum idle time before players are kicked.",
                "meta": "/setidletimeout <minutes>"
        },
        {
                "id": "/setworldspawn",
                "name": "/setworldspawn",
                "icon": "📜",
                "desc": "Sets the default spawn point for new players.",
                "meta": "/setworldspawn [pos] [angle]"
        },
        {
                "id": "/spawnpoint",
                "name": "/spawnpoint",
                "icon": "📜",
                "desc": "Sets the individual spawn point for players.",
                "meta": "/spawnpoint [targets] [pos] [angle]"
        },
        {
                "id": "/spectate",
                "name": "/spectate",
                "icon": "📜",
                "desc": "Forces a spectator player to spectate another entity.",
                "meta": "/spectate [target] [player]"
        },
        {
                "id": "/spreadplayers",
                "name": "/spreadplayers",
                "icon": "📜",
                "desc": "Teleports entities to random locations within a range.",
                "meta": "/spreadplayers <center> <spreadDistance> <maxRange> ..."
        },
        {
                "id": "/stop",
                "name": "/stop",
                "icon": "📜",
                "desc": "Gracefully shuts down the server.",
                "meta": "/stop"
        },
        {
                "id": "/stopsound",
                "name": "/stopsound",
                "icon": "📜",
                "desc": "Stops a playing sound for players.",
                "meta": "/stopsound <targets> [source] [sound]"
        },
        {
                "id": "/summon",
                "name": "/summon",
                "icon": "📜",
                "desc": "Spawns a custom living mob or object at specified coordinates.",
                "meta": "/summon <entity> [pos] [nbt]"
        },
        {
                "id": "/tag",
                "name": "/tag",
                "icon": "📜",
                "desc": "Manages scoreboard tags on entities.",
                "meta": "/tag <targets> <add|remove|list> ..."
        },
        {
                "id": "/team",
                "name": "/team",
                "icon": "📜",
                "desc": "Manages scoreboard teams.",
                "meta": "/team <add|remove|join|leave|list|option> ..."
        },
        {
                "id": "/teammsg",
                "name": "/teammsg",
                "icon": "📜",
                "desc": "Sends a private message to team members.",
                "meta": "/teammsg <message>"
        },
        {
                "id": "/teleport",
                "name": "/teleport",
                "icon": "📜",
                "desc": "Teleports entities to coordinates or targets.",
                "meta": "/teleport <destination> or /teleport <targets> <destination>"
        },
        {
                "id": "/tell",
                "name": "/tell",
                "icon": "📜",
                "desc": "Sends a private message to players.",
                "meta": "/tell <targets> <message>"
        },
        {
                "id": "/tellraw",
                "name": "/tellraw",
                "icon": "📜",
                "desc": "Sends a JSON formatted raw message to players.",
                "meta": "/tellraw <targets> <message>"
        },
        {
                "id": "/time",
                "name": "/time",
                "icon": "📜",
                "desc": "Changes or queries the daylight time cycle.",
                "meta": "/time <set|add|query> <value>"
        },
        {
                "id": "/title",
                "name": "/title",
                "icon": "📜",
                "desc": "Displays large titles/subtitles on player screens.",
                "meta": "/title <targets> <title|subtitle|actionbar|clear|reset|times> ..."
        },
        {
                "id": "/tm",
                "name": "/tm",
                "icon": "📜",
                "desc": "Sends a private team message.",
                "meta": "/tm <message>"
        },
        {
                "id": "/tp",
                "name": "/tp",
                "icon": "📜",
                "desc": "Teleports players or entities.",
                "meta": "/tp <targets> <destination>"
        },
        {
                "id": "/trigger",
                "name": "/trigger",
                "icon": "📜",
                "desc": "Modifies scoreboard triggers for players.",
                "meta": "/trigger <objective> [add|set]"
        },
        {
                "id": "/w",
                "name": "/w",
                "icon": "📜",
                "desc": "Sends a private message to players.",
                "meta": "/w <targets> <message>"
        },
        {
                "id": "/weather",
                "name": "/weather",
                "icon": "📜",
                "desc": "Alters weather states (clear, rain, thunder).",
                "meta": "/weather <clear|rain|thunder> [duration]"
        },
        {
                "id": "/whitelist",
                "name": "/whitelist",
                "icon": "📜",
                "desc": "Manages server whitelist access.",
                "meta": "/whitelist <add|remove|list|on|off|reload>"
        },
        {
                "id": "/worldborder",
                "name": "/worldborder",
                "icon": "📜",
                "desc": "Manages the boundaries of the world border.",
                "meta": "/worldborder <set|center|damage|warning|add|get> ..."
        },
        {
                "id": "/xp",
                "name": "/xp",
                "icon": "📜",
                "desc": "Grants or queries player experience points and levels.",
                "meta": "/xp <add|set|query> <targets> [points|levels]"
        }
],

    // Loot Tables List (Chests, Villages, Gameplay, Mobs)
    loot_tables: {
        "chests": [
                {
                        "id": "minecraft:chests/abandoned_mineshaft",
                        "name": "Abandoned Mineshaft"
                },
                {
                        "id": "minecraft:chests/ancient_city",
                        "name": "Ancient City"
                },
                {
                        "id": "minecraft:chests/ancient_city_ice_box",
                        "name": "Ancient City Ice Box"
                },
                {
                        "id": "minecraft:chests/bastion_bridge",
                        "name": "Bastion Bridge"
                },
                {
                        "id": "minecraft:chests/bastion_hoglin_stable",
                        "name": "Bastion Hoglin Stable"
                },
                {
                        "id": "minecraft:chests/bastion_other",
                        "name": "Bastion Other"
                },
                {
                        "id": "minecraft:chests/bastion_treasure",
                        "name": "Bastion Treasure"
                },
                {
                        "id": "minecraft:chests/buried_treasure",
                        "name": "Buried Treasure"
                },
                {
                        "id": "minecraft:chests/desert_pyramid",
                        "name": "Desert Pyramid"
                },
                {
                        "id": "minecraft:chests/end_city_treasure",
                        "name": "End City Treasure"
                },
                {
                        "id": "minecraft:chests/jungle_temple",
                        "name": "Jungle Temple"
                },
                {
                        "id": "minecraft:chests/jungle_temple_dispenser",
                        "name": "Jungle Temple Dispenser"
                },
                {
                        "id": "minecraft:chests/nether_bridge",
                        "name": "Nether Bridge"
                },
                {
                        "id": "minecraft:chests/pillager_outpost",
                        "name": "Pillager Outpost"
                },
                {
                        "id": "minecraft:chests/ruined_portal",
                        "name": "Ruined Portal"
                },
                {
                        "id": "minecraft:chests/shipwreck_map",
                        "name": "Shipwreck Map"
                },
                {
                        "id": "minecraft:chests/shipwreck_supply",
                        "name": "Shipwreck Supply"
                },
                {
                        "id": "minecraft:chests/shipwreck_treasure",
                        "name": "Shipwreck Treasure"
                },
                {
                        "id": "minecraft:chests/simple_dungeon",
                        "name": "Simple Dungeon"
                },
                {
                        "id": "minecraft:chests/spawn_bonus_chest",
                        "name": "Spawn Bonus Chest"
                },
                {
                        "id": "minecraft:chests/stronghold_corridor",
                        "name": "Stronghold Corridor"
                },
                {
                        "id": "minecraft:chests/stronghold_crossing",
                        "name": "Stronghold Crossing"
                },
                {
                        "id": "minecraft:chests/stronghold_library",
                        "name": "Stronghold Library"
                },
                {
                        "id": "minecraft:chests/underwater_ruin_big",
                        "name": "Underwater Ruin Big"
                },
                {
                        "id": "minecraft:chests/underwater_ruin_small",
                        "name": "Underwater Ruin Small"
                },
                {
                        "id": "minecraft:chests/woodland_mansion",
                        "name": "Woodland Mansion"
                }
        ],
        "villages": [
                {
                        "id": "minecraft:chests/village/village_armorer",
                        "name": "Village Armorer"
                },
                {
                        "id": "minecraft:chests/village/village_butcher",
                        "name": "Village Butcher"
                },
                {
                        "id": "minecraft:chests/village/village_cartographer",
                        "name": "Village Cartographer"
                },
                {
                        "id": "minecraft:chests/village/village_desert_house",
                        "name": "Village Desert House"
                },
                {
                        "id": "minecraft:chests/village/village_fisher",
                        "name": "Village Fisher"
                },
                {
                        "id": "minecraft:chests/village/village_fletcher",
                        "name": "Village Fletcher"
                },
                {
                        "id": "minecraft:chests/village/village_mason",
                        "name": "Village Mason"
                },
                {
                        "id": "minecraft:chests/village/village_plains_house",
                        "name": "Village Plains House"
                },
                {
                        "id": "minecraft:chests/village/village_savanna_house",
                        "name": "Village Savanna House"
                },
                {
                        "id": "minecraft:chests/village/village_shepherd",
                        "name": "Village Shepherd"
                },
                {
                        "id": "minecraft:chests/village/village_snowy_house",
                        "name": "Village Snowy House"
                },
                {
                        "id": "minecraft:chests/village/village_taiga_house",
                        "name": "Village Taiga House"
                },
                {
                        "id": "minecraft:chests/village/village_tannery",
                        "name": "Village Tannery"
                },
                {
                        "id": "minecraft:chests/village/village_toolsmith",
                        "name": "Village Toolsmith"
                },
                {
                        "id": "minecraft:chests/village/village_weaponsmith",
                        "name": "Village Weaponsmith"
                }
        ],
        "gameplay": [
                {
                        "id": "minecraft:gameplay/cat_morning_gift",
                        "name": "Cat Morning Gift"
                },
                {
                        "id": "minecraft:gameplay/fishing",
                        "name": "Fishing"
                },
                {
                        "id": "minecraft:gameplay/fishing/fish",
                        "name": "Fishing Fish"
                },
                {
                        "id": "minecraft:gameplay/fishing/junk",
                        "name": "Fishing Junk"
                },
                {
                        "id": "minecraft:gameplay/fishing/treasure",
                        "name": "Fishing Treasure"
                },
                {
                        "id": "minecraft:gameplay/hero_of_the_village/armorer_gift",
                        "name": "Hero Gift: Armorer"
                },
                {
                        "id": "minecraft:gameplay/hero_of_the_village/butcher_gift",
                        "name": "Hero Gift: Butcher"
                },
                {
                        "id": "minecraft:gameplay/hero_of_the_village/cartographer_gift",
                        "name": "Hero Gift: Cartographer"
                },
                {
                        "id": "minecraft:gameplay/hero_of_the_village/cleric_gift",
                        "name": "Hero Gift: Cleric"
                },
                {
                        "id": "minecraft:gameplay/hero_of_the_village/farmer_gift",
                        "name": "Hero Gift: Farmer"
                },
                {
                        "id": "minecraft:gameplay/hero_of_the_village/fisher_gift",
                        "name": "Hero Gift: Fisher"
                },
                {
                        "id": "minecraft:gameplay/hero_of_the_village/fletcher_gift",
                        "name": "Hero Gift: Fletcher"
                },
                {
                        "id": "minecraft:gameplay/hero_of_the_village/leatherworker_gift",
                        "name": "Hero Gift: Leatherworker"
                },
                {
                        "id": "minecraft:gameplay/hero_of_the_village/librarian_gift",
                        "name": "Hero Gift: Librarian"
                },
                {
                        "id": "minecraft:gameplay/hero_of_the_village/mason_gift",
                        "name": "Hero Gift: Mason"
                },
                {
                        "id": "minecraft:gameplay/hero_of_the_village/shepherd_gift",
                        "name": "Hero Gift: Shepherd"
                },
                {
                        "id": "minecraft:gameplay/hero_of_the_village/toolsmith_gift",
                        "name": "Hero Gift: Toolsmith"
                },
                {
                        "id": "minecraft:gameplay/hero_of_the_village/weaponsmith_gift",
                        "name": "Hero Gift: Weaponsmith"
                },
                {
                        "id": "minecraft:gameplay/piglin_bartering",
                        "name": "Piglin Bartering"
                },
                {
                        "id": "minecraft:gameplay/sniffing",
                        "name": "Sniffing"
                }
        ],
        "entities": [
                {
                        "id": "minecraft:entities/allay",
                        "name": "Allay Drop"
                },
                {
                        "id": "minecraft:entities/axolotl",
                        "name": "Axolotl Drop"
                },
                {
                        "id": "minecraft:entities/bat",
                        "name": "Bat Drop"
                },
                {
                        "id": "minecraft:entities/bee",
                        "name": "Bee Drop"
                },
                {
                        "id": "minecraft:entities/blaze",
                        "name": "Blaze Drop"
                },
                {
                        "id": "minecraft:entities/camel",
                        "name": "Camel Drop"
                },
                {
                        "id": "minecraft:entities/cat",
                        "name": "Cat Drop"
                },
                {
                        "id": "minecraft:entities/cave_spider",
                        "name": "Cave Spider Drop"
                },
                {
                        "id": "minecraft:entities/chicken",
                        "name": "Chicken Drop"
                },
                {
                        "id": "minecraft:entities/cod",
                        "name": "Cod Drop"
                },
                {
                        "id": "minecraft:entities/cow",
                        "name": "Cow Drop"
                },
                {
                        "id": "minecraft:entities/creeper",
                        "name": "Creeper Drop"
                },
                {
                        "id": "minecraft:entities/dolphin",
                        "name": "Dolphin Drop"
                },
                {
                        "id": "minecraft:entities/donkey",
                        "name": "Donkey Drop"
                },
                {
                        "id": "minecraft:entities/drowned",
                        "name": "Drowned Drop"
                },
                {
                        "id": "minecraft:entities/elder_guardian",
                        "name": "Elder Guardian Drop"
                },
                {
                        "id": "minecraft:entities/ender_dragon",
                        "name": "Ender Dragon Drop"
                },
                {
                        "id": "minecraft:entities/enderman",
                        "name": "Enderman Drop"
                },
                {
                        "id": "minecraft:entities/endermite",
                        "name": "Endermite Drop"
                },
                {
                        "id": "minecraft:entities/evoker",
                        "name": "Evoker Drop"
                },
                {
                        "id": "minecraft:entities/fox",
                        "name": "Fox Drop"
                },
                {
                        "id": "minecraft:entities/frog",
                        "name": "Frog Drop"
                },
                {
                        "id": "minecraft:entities/ghast",
                        "name": "Ghast Drop"
                },
                {
                        "id": "minecraft:entities/giant",
                        "name": "Giant Drop"
                },
                {
                        "id": "minecraft:entities/glow_squid",
                        "name": "Glow Squid Drop"
                },
                {
                        "id": "minecraft:entities/goat",
                        "name": "Goat Drop"
                },
                {
                        "id": "minecraft:entities/guardian",
                        "name": "Guardian Drop"
                },
                {
                        "id": "minecraft:entities/hoglin",
                        "name": "Hoglin Drop"
                },
                {
                        "id": "minecraft:entities/horse",
                        "name": "Horse Drop"
                },
                {
                        "id": "minecraft:entities/husk",
                        "name": "Husk Drop"
                },
                {
                        "id": "minecraft:entities/illusioner",
                        "name": "Illusioner Drop"
                },
                {
                        "id": "minecraft:entities/iron_golem",
                        "name": "Iron Golem Drop"
                },
                {
                        "id": "minecraft:entities/llama",
                        "name": "Llama Drop"
                },
                {
                        "id": "minecraft:entities/magma_cube",
                        "name": "Magma Cube Drop"
                },
                {
                        "id": "minecraft:entities/mooshroom",
                        "name": "Mooshroom Drop"
                },
                {
                        "id": "minecraft:entities/mule",
                        "name": "Mule Drop"
                },
                {
                        "id": "minecraft:entities/ocelot",
                        "name": "Ocelot Drop"
                },
                {
                        "id": "minecraft:entities/panda",
                        "name": "Panda Drop"
                },
                {
                        "id": "minecraft:entities/parrot",
                        "name": "Parrot Drop"
                },
                {
                        "id": "minecraft:entities/phantom",
                        "name": "Phantom Drop"
                },
                {
                        "id": "minecraft:entities/pig",
                        "name": "Pig Drop"
                },
                {
                        "id": "minecraft:entities/piglin_brute",
                        "name": "Piglin Brute Drop"
                },
                {
                        "id": "minecraft:entities/piglin",
                        "name": "Piglin Drop"
                },
                {
                        "id": "minecraft:entities/pillager",
                        "name": "Pillager Drop"
                },
                {
                        "id": "minecraft:entities/polar_bear",
                        "name": "Polar Bear Drop"
                },
                {
                        "id": "minecraft:entities/pufferfish",
                        "name": "Pufferfish Drop"
                },
                {
                        "id": "minecraft:entities/rabbit",
                        "name": "Rabbit Drop"
                },
                {
                        "id": "minecraft:entities/ravager",
                        "name": "Ravager Drop"
                },
                {
                        "id": "minecraft:entities/salmon",
                        "name": "Salmon Drop"
                },
                {
                        "id": "minecraft:entities/sheep",
                        "name": "Sheep Drop"
                },
                {
                        "id": "minecraft:entities/shulker",
                        "name": "Shulker Drop"
                },
                {
                        "id": "minecraft:entities/silverfish",
                        "name": "Silverfish Drop"
                },
                {
                        "id": "minecraft:entities/skeleton",
                        "name": "Skeleton Drop"
                },
                {
                        "id": "minecraft:entities/skeleton_horse",
                        "name": "Skeleton Horse Drop"
                },
                {
                        "id": "minecraft:entities/slime",
                        "name": "Slime Drop"
                },
                {
                        "id": "minecraft:entities/sniffer",
                        "name": "Sniffer Drop"
                },
                {
                        "id": "minecraft:entities/snow_golem",
                        "name": "Snow Golem Drop"
                },
                {
                        "id": "minecraft:entities/spider",
                        "name": "Spider Drop"
                },
                {
                        "id": "minecraft:entities/squid",
                        "name": "Squid Drop"
                },
                {
                        "id": "minecraft:entities/stray",
                        "name": "Stray Drop"
                },
                {
                        "id": "minecraft:entities/strider",
                        "name": "Strider Drop"
                },
                {
                        "id": "minecraft:entities/tadpole",
                        "name": "Tadpole Drop"
                },
                {
                        "id": "minecraft:entities/trader_llama",
                        "name": "Trader Llama Drop"
                },
                {
                        "id": "minecraft:entities/tropical_fish",
                        "name": "Tropical Fish Drop"
                },
                {
                        "id": "minecraft:entities/turtle",
                        "name": "Turtle Drop"
                },
                {
                        "id": "minecraft:entities/vex",
                        "name": "Vex Drop"
                },
                {
                        "id": "minecraft:entities/villager",
                        "name": "Villager Drop"
                },
                {
                        "id": "minecraft:entities/vindicator",
                        "name": "Vindicator Drop"
                },
                {
                        "id": "minecraft:entities/wandering_trader",
                        "name": "Wandering Trader Drop"
                },
                {
                        "id": "minecraft:entities/warden",
                        "name": "Warden Drop"
                },
                {
                        "id": "minecraft:entities/witch",
                        "name": "Witch Drop"
                },
                {
                        "id": "minecraft:entities/wither",
                        "name": "Wither Drop"
                },
                {
                        "id": "minecraft:entities/wither_skeleton",
                        "name": "Wither Skeleton Drop"
                },
                {
                        "id": "minecraft:entities/wolf",
                        "name": "Wolf Drop"
                },
                {
                        "id": "minecraft:entities/zoglin",
                        "name": "Zoglin Drop"
                },
                {
                        "id": "minecraft:entities/zombie",
                        "name": "Zombie Drop"
                },
                {
                        "id": "minecraft:entities/zombie_horse",
                        "name": "Zombie Horse Drop"
                },
                {
                        "id": "minecraft:entities/zombie_villager",
                        "name": "Zombie Villager Drop"
                },
                {
                        "id": "minecraft:entities/zombified_piglin",
                        "name": "Zombified Piglin Drop"
                }
        ]
}
};

// Expose backward-compatible aliases for app / generator dropdown layers
MC_DATA.all_items = Object.values(MC_DATA.items).flat();
MC_DATA.execute_items = MC_DATA.all_items;
MC_DATA.execute_blocks = MC_DATA.items.blocks;
MC_DATA.execute_effects = MC_DATA.effects;
MC_DATA.execute_particles = MC_DATA.particles;
MC_DATA.execute_sounds = MC_DATA.sounds;
