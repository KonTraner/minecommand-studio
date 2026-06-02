/* ==========================================================================
   MineCommand Studio - Game Data (Upgraded with Real In-Game Textures)
   ========================================================================== */

// 1. Mojang Official Avatars & In-game PNG Texture CDN Mappings
const mobHeadMapping = {
    "minecraft:zombie": "MHF_Zombie",
    "minecraft:skeleton": "MHF_Skeleton",
    "minecraft:creeper": "MHF_Creeper",
    "minecraft:spider": "MHF_Spider",
    "minecraft:wither_skeleton": "MHF_WSkeleton",
    "minecraft:blaze": "MHF_Blaze",
    "minecraft:witch": "MHF_Witch",
    "minecraft:enderman": "MHF_Enderman",
    "minecraft:iron_golem": "MHF_Golem",
    "minecraft:villager": "MHF_Villager",
    "minecraft:pig": "MHF_Pig",
    "minecraft:cow": "MHF_Cow",
    "minecraft:chicken": "MHF_Chicken",
    "minecraft:slime": "MHF_Slime"
};

function getMobIconPath(mobId) {
    const skinName = mobHeadMapping[mobId] || "MHF_Zombie";
    return `https://mc-heads.net/avatar/${skinName}/32`;
}

function getItemIconPath(itemId) {
    const cleanName = itemId.replace("minecraft:", "");
    // Block textures reside in textures/block/
    const blockTextures = ["dirt", "bedrock"];
    if (blockTextures.includes(cleanName)) {
        return `https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.4/assets/minecraft/textures/block/${cleanName}.png`;
    }
    if (cleanName === "tnt") {
        return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.4/assets/minecraft/textures/block/tnt_side.png";
    }
    // Items reside in textures/item/
    return `https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.4/assets/minecraft/textures/item/${cleanName}.png`;
}

const MC_DATA = {
    // 2. Mobs hydrated with raw game heads
    // 2. Mobs hydrated with raw game heads
    mobs: [
        { id: "minecraft:zombie", name: "Zombie", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:skeleton", name: "Skeleton", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:creeper", name: "Creeper", category: "Hostile", special: "creeper", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:spider", name: "Spider", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:cave_spider", name: "Cave Spider", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:wither_skeleton", name: "Wither Skeleton", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:blaze", name: "Blaze", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:witch", name: "Witch", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:enderman", name: "Enderman", category: "Neutral", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:zombified_piglin", name: "Zombified Piglin", category: "Neutral", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:piglin", name: "Piglin", category: "Neutral", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:piglin_brute", name: "Piglin Brute", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:hoglin", name: "Hoglin", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:zoglin", name: "Zoglin", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:wither", name: "Wither (Boss)", category: "Boss", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:ender_dragon", name: "Ender Dragon (Boss)", category: "Boss", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:ghast", name: "Ghast", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:magma_cube", name: "Magma Cube", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:slime", name: "Slime", category: "Hostile", special: "slime", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:silverfish", name: "Silverfish", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:endermite", name: "Endermite", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:shulker", name: "Shulker", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:husk", name: "Husk", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:stray", name: "Stray", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:drowned", name: "Drowned", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:phantom", name: "Phantom", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:guardian", name: "Guardian", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:elder_guardian", name: "Elder Guardian", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:warden", name: "Warden", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:pillager", name: "Pillager", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:vindicator", name: "Vindicator", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:ravager", name: "Ravager", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:evoker", name: "Evoker", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:vex", name: "Vex", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:iron_golem", name: "Iron Golem", category: "Utility", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:snow_golem", name: "Snow Golem", category: "Utility", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:villager", name: "Villager", category: "Passive", special: "villager", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:wandering_trader", name: "Wandering Trader", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:pig", name: "Pig", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:cow", name: "Cow", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:sheep", name: "Sheep", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:chicken", name: "Chicken", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:rabbit", name: "Rabbit", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:cat", name: "Cat", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:wolf", name: "Wolf", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:parrot", name: "Parrot", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:fox", name: "Fox", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:panda", name: "Panda", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:polar_bear", name: "Polar Bear", category: "Neutral", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:llama", name: "Llama", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:strider", name: "Strider", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:allay", name: "Allay", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:frog", name: "Frog", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:glow_squid", name: "Glow Squid", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:squid", name: "Squid", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:dolphin", name: "Dolphin", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:turtle", name: "Turtle", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:bee", name: "Bee", category: "Neutral", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:bat", name: "Bat", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:sniffer", name: "Sniffer", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:camel", name: "Camel", category: "Passive", get icon() { return getMobIconPath(this.id); } }
    ],

    // 3. Items hydrated with raw game assets
    items: {
        weapons: [
            { id: "minecraft:diamond_sword", name: "Diamond Sword", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherite_sword", name: "Netherite Sword", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_sword", name: "Golden Sword", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_sword", name: "Iron Sword", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stone_sword", name: "Stone Sword", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:wooden_sword", name: "Wooden Sword", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:mace", name: "Mace", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:trident", name: "Trident", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bow", name: "Bow", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crossbow", name: "Crossbow", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:shield", name: "Shield", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:arrow", name: "Arrow", get icon() { return getItemIconPath(this.id); } }
        ],
        helmets: [
            { id: "minecraft:netherite_helmet", name: "Netherite Helmet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_helmet", name: "Diamond Helmet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_helmet", name: "Iron Helmet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_helmet", name: "Golden Helmet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chainmail_helmet", name: "Chainmail Helmet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:leather_helmet", name: "Leather Cap", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:turtle_helmet", name: "Turtle Shell", get icon() { return getItemIconPath(this.id); } }
        ],
        chestplates: [
            { id: "minecraft:netherite_chestplate", name: "Netherite Chestplate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_chestplate", name: "Diamond Chestplate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_chestplate", name: "Iron Chestplate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_chestplate", name: "Golden Chestplate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chainmail_chestplate", name: "Chainmail Chestplate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:leather_chestplate", name: "Leather Tunic", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:elytra", name: "Elytra", get icon() { return getItemIconPath(this.id); } }
        ],
        leggings: [
            { id: "minecraft:netherite_leggings", name: "Netherite Leggings", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_leggings", name: "Diamond Leggings", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_leggings", name: "Iron Leggings", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_leggings", name: "Golden Leggings", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chainmail_leggings", name: "Chainmail Leggings", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:leather_leggings", name: "Leather Pants", get icon() { return getItemIconPath(this.id); } }
        ],
        boots: [
            { id: "minecraft:netherite_boots", name: "Netherite Boots", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_boots", name: "Diamond Boots", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_boots", name: "Iron Boots", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_boots", name: "Golden Boots", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chainmail_boots", name: "Chainmail Boots", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:leather_boots", name: "Leather Boots", get icon() { return getItemIconPath(this.id); } }
        ],
        tools: [
            { id: "minecraft:netherite_pickaxe", name: "Netherite Pickaxe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_pickaxe", name: "Diamond Pickaxe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_pickaxe", name: "Iron Pickaxe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_pickaxe", name: "Golden Pickaxe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stone_pickaxe", name: "Stone Pickaxe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:wooden_pickaxe", name: "Wooden Pickaxe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherite_axe", name: "Netherite Axe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_axe", name: "Diamond Axe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_axe", name: "Iron Axe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherite_shovel", name: "Netherite Shovel", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_shovel", name: "Diamond Shovel", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_shovel", name: "Iron Shovel", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherite_hoe", name: "Netherite Hoe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_hoe", name: "Diamond Hoe", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:shears", name: "Shears", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:flint_and_steel", name: "Flint and Steel", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:brush", name: "Brush", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:compass", name: "Compass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:recovery_compass", name: "Recovery Compass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:spyglass", name: "Spyglass", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:fishing_rod", name: "Fishing Rod", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:firework_rocket", name: "Firework Rocket", get icon() { return getItemIconPath(this.id); } }
        ],
        blocks: [
            { id: "minecraft:lava_bucket", name: "Lava Bucket", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:water_bucket", name: "Water Bucket", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_block", name: "Diamond Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:emerald_block", name: "Emerald Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherite_block", name: "Netherite Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gold_block", name: "Gold Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_block", name: "Iron Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:obsidian", name: "Obsidian", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crying_obsidian", name: "Crying Obsidian", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:tnt", name: "TNT Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bedrock", name: "Bedrock", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sponge", name: "Sponge", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:wet_sponge", name: "Wet Sponge", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cobweb", name: "Cobweb", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:slime_block", name: "Slime Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:honey_block", name: "Honey Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:grass_block", name: "Grass Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dirt", name: "Dirt", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sand", name: "Sand", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gravel", name: "Gravel", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:stone", name: "Stone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:deepslate", name: "Deepslate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oak_log", name: "Oak Log", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:oak_planks", name: "Oak Planks", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:glass", name: "Glass Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:glowstone", name: "Glowstone", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:sea_lantern", name: "Sea Lantern", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:shroomlight", name: "Shroomlight", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:target", name: "Target Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dispenser", name: "Dispenser", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dropper", name: "Dropper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:hopper", name: "Hopper", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chest", name: "Chest", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:trapped_chest", name: "Trapped Chest", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:ender_chest", name: "Ender Chest", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:furnace", name: "Furnace", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crafting_table", name: "Crafting Table", get icon() { return getItemIconPath(this.id); } }
        ],
        misc: [
            { id: "minecraft:diamond", name: "Diamond Gem", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:emerald", name: "Emerald Gem", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:netherite_ingot", name: "Netherite Ingot", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:gold_ingot", name: "Gold Ingot", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_ingot", name: "Iron Ingot", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:redstone", name: "Redstone Dust", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:coal", name: "Coal", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lapis_lazuli", name: "Lapis Lazuli", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:quartz", name: "Nether Quartz", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:nether_star", name: "Nether Star", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:totem_of_undying", name: "Totem of Undying", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_apple", name: "Golden Apple", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:enchanted_golden_apple", name: "Enchanted Golden Apple", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chorus_fruit", name: "Chorus Fruit", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:ender_pearl", name: "Ender Pearl", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:eye_of_ender", name: "Eye of Ender", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:saddle", name: "Saddle", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:name_tag", name: "Name Tag", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:lead", name: "Lead / leash", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:creeper_spawn_egg", name: "Creeper Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:zombie_spawn_egg", name: "Zombie Spawn Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:skeleton_spawn_egg", name: "Skeleton Spawn Egg", get icon() { return getItemIconPath(this.id); } }
        ]
    },

    // 4. Enchantments Definition
    enchantments: [
        { id: "sharpness", name: "Sharpness", max: 5, type: "weapon" },
        { id: "smite", name: "Smite", max: 5, type: "weapon" },
        { id: "bane_of_arthropods", name: "Bane of Arthropods", max: 5, type: "weapon" },
        { id: "fire_aspect", name: "Fire Aspect", max: 2, type: "weapon" },
        { id: "knockback", name: "Knockback", max: 2, type: "weapon" },
        { id: "looting", name: "Looting", max: 3, type: "weapon" },
        { id: "sweeping_edge", name: "Sweeping Edge", max: 3, type: "weapon" },
        
        { id: "protection", name: "Protection", max: 4, type: "armor" },
        { id: "fire_protection", name: "Fire Protection", max: 4, type: "armor" },
        { id: "feather_falling", name: "Feather Falling", max: 4, type: "armor" },
        { id: "blast_protection", name: "Blast Protection", max: 4, type: "armor" },
        { id: "projectile_protection", name: "Projectile Protection", max: 4, type: "armor" },
        { id: "thorns", name: "Thorns", max: 3, type: "armor" },
        { id: "respiration", name: "Respiration", max: 3, type: "armor" },
        { id: "aqua_affinity", name: "Aqua Affinity", max: 1, type: "armor" },
        { id: "depth_strider", name: "Depth Strider", max: 3, type: "armor" },
        { id: "frost_walker", name: "Frost Walker", max: 2, type: "armor" },
        { id: "soul_speed", name: "Soul Speed", max: 3, type: "armor" },
        { id: "swift_sneak", name: "Swift Sneak", max: 3, type: "armor" },
        
        { id: "efficiency", name: "Efficiency", max: 5, type: "tool" },
        { id: "silk_touch", name: "Silk Touch", max: 1, type: "tool" },
        { id: "fortune", name: "Fortune", max: 3, type: "tool" },
        
        { id: "power", name: "Power", max: 5, type: "bow" },
        { id: "punch", name: "Punch", max: 2, type: "bow" },
        { id: "flame", name: "Flame", max: 1, type: "bow" },
        { id: "infinity", name: "Infinity", max: 1, type: "bow" },
        
        { id: "multishot", name: "Multishot", max: 1, type: "crossbow" },
        { id: "piercing", name: "Piercing", max: 4, type: "crossbow" },
        { id: "quick_charge", name: "Quick Charge", max: 3, type: "crossbow" },
        
        { id: "loyalty", name: "Loyalty", max: 3, type: "trident" },
        { id: "impaling", name: "Impaling", max: 5, type: "trident" },
        { id: "riptide", name: "Riptide", max: 3, type: "trident" },
        { id: "channeling", name: "Channeling", max: 1, type: "trident" },
        
        { id: "unbreaking", name: "Unbreaking", max: 3, type: "all" },
        { id: "mending", name: "Mending", max: 1, type: "all" },
        { id: "binding_curse", name: "Curse of Binding", max: 1, type: "all" },
        { id: "vanishing_curse", name: "Curse of Vanishing", max: 1, type: "all" }
    ],

    // 5. 62 Expanded Troll Commands (Levels 1 to 5)
    trolls: [
        // LEVEL 1 (Mild Annoyance - Harmless Spooks)
        {
            level: 1,
            id: "cave_spook",
            name: "Cave Ambient Spook",
            type: "harmless",
            desc: "Plays spooky ambient cave noises directly to the victim to trigger sudden paranoia.",
            java_modern: "/playsound minecraft:ambient.cave ambient [TARGET] ~ ~ ~ 1 1 1",
            java_legacy: "/playsound minecraft:ambient.cave ambient [TARGET] ~ ~ ~ 1 1 1",
            bedrock: "/playsound ambient.cave [TARGET] ~ ~ ~ 1 1",
            requires_command_block: false
        },
        {
            level: 1,
            id: "fake_join",
            name: "Fake User Join Notification",
            type: "harmless",
            desc: "Outputs a yellow system announcement claiming a famous entity logged into the server.",
            java_modern: '/tellraw @a {"text":"Herobrine joined the game","color":"yellow"}',
            java_legacy: '/tellraw @a {"text":"Herobrine joined the game","color":"yellow"}',
            bedrock: '/tellraw @a {"rawtext":[{"text":"§eHerobrine joined the game"}]}',
            requires_command_block: false
        },
        {
            level: 1,
            id: "dizzy_spell",
            name: "Dizzy Spell",
            type: "harmless",
            desc: "Applies short Blindness and Nausea effects to disorient the player with zero damage.",
            java_modern: "/effect give [TARGET] minecraft:blindness 6 1\n/effect give [TARGET] minecraft:nausea 8 1",
            java_legacy: "/effect give [TARGET] blindness 6 1\n/effect give [TARGET] nausea 8 1",
            bedrock: "/effect [TARGET] blindness 6 1\n/effect [TARGET] nausea 8 1",
            requires_command_block: true
        },
        {
            level: 1,
            id: "fake_msg_spam",
            name: "Butterfingers Speak",
            type: "harmless",
            desc: "Forces the target to drop a funny chat slip-up claiming they accidentally dropped their sandwich.",
            java_modern: "/execute as [TARGET] run me dropped their sandwich in the dirt! ...oops",
            java_legacy: "/execute as [TARGET] run me dropped their sandwich in the dirt! ...oops",
            bedrock: "/execute as [TARGET] run me dropped their sandwich in the dirt! ...oops",
            requires_command_block: false
        },
        {
            level: 1,
            id: "inv_clutter",
            name: "Cobblestone Clutter",
            type: "grief",
            desc: "Gives them a full stack of Cobblestone blocks to pack active inventory hotbar spaces.",
            java_modern: "/give [TARGET] minecraft:cobblestone 64",
            java_legacy: "/give [TARGET] cobblestone 64",
            bedrock: "/give [TARGET] cobblestone 64",
            requires_command_block: false
        },
        {
            level: 1,
            id: "slowpoke",
            name: "Sluggish Potion",
            type: "grief",
            desc: "Inflicts severe Slowness effect, forcing them to crawl for 10 seconds.",
            java_modern: "/effect give [TARGET] minecraft:slowness 10 5",
            java_legacy: "/effect give [TARGET] slowness 10 5",
            bedrock: "/effect [TARGET] slowness 10 5",
            requires_command_block: false
        },
        {
            level: 1,
            id: "crit_sound",
            name: "Constant Whack Sound",
            type: "harmless",
            desc: "Plays sharp critical player hit sounds directly to the player, making them think they are being hit.",
            java_modern: "/playsound minecraft:entity.player.attack.crit master [TARGET] ~ ~ ~ 1 0.5",
            java_legacy: "/playsound entity.player.attack.crit master [TARGET] ~ ~ ~ 1 0.5",
            bedrock: "/playsound game.player.hurt [TARGET] ~ ~ ~ 1 0.5",
            requires_command_block: false
        },
        {
            level: 1,
            id: "lava_hiss",
            name: "Lava Extinguish Paranoia",
            type: "harmless",
            desc: "Plays the lava extinguishing hiss sound constantly in their ears, making them think their build is on fire.",
            java_modern: "/playsound minecraft:block.lava.extinguish master [TARGET] ~ ~ ~ 1 1",
            java_legacy: "/playsound block.lava.extinguish master [TARGET] ~ ~ ~ 1 1",
            bedrock: "/playsound random.fizz [TARGET] ~ ~ ~ 1 1",
            requires_command_block: false
        },
        {
            level: 1,
            id: "ghost_creeper_hiss",
            name: "Creeper Hiss Spook",
            type: "harmless",
            desc: "Plays the terrifying Creeper fuse warning sound directly at the victim's location.",
            java_modern: "/playsound minecraft:entity.creeper.primed host [TARGET] ~ ~ ~ 1 1",
            java_legacy: "/playsound entity.creeper.primed host [TARGET] ~ ~ ~ 1 1",
            bedrock: "/playsound random.fuse [TARGET] ~ ~ ~ 1 1",
            requires_command_block: false
        },
        {
            level: 1,
            id: "ghost_chicken",
            name: "Clucking Head Crown",
            type: "harmless",
            desc: "Summons a completely invisible chicken at their feet, clucking in their ears.",
            java_modern: "/execute at [TARGET] run summon minecraft:chicken ~ ~ ~ {Silent:0b,active_effects:[{id:'minecraft:invisibility',amplifier:0,duration:-1,show_particles:0b}]}",
            java_legacy: "/execute at [TARGET] run summon chicken ~ ~ ~ {Silent:0b,ActiveEffects:[{Id:14,Amplifier:0,Duration:19999,ShowParticles:0b}]}",
            bedrock: "/execute at [TARGET] run summon chicken ~ ~ ~ minecraft:become_invisible",
            requires_command_block: false
        },
        {
            level: 1,
            id: "fake_op",
            name: "Fake Operator Alert",
            type: "harmless",
            desc: "Fakes the standard server console OP notice directly to the target's chat screen.",
            java_modern: '/tellraw [TARGET] {"text":"You are now an operator! Type /help for help.","color":"gray","italic":true}',
            java_legacy: '/tellraw [TARGET] {"text":"You are now an operator! Type /help for help.","color":"gray","italic":true}',
            bedrock: '/tellraw [TARGET] {"rawtext":[{"text":"§7§oYou are now an operator! Type /help for help."}]}',
            requires_command_block: false
        },

        // LEVEL 2 (Minor Sabotage - Nuisance & Friction)
        {
            level: 2,
            id: "disco_floor",
            name: "Villager Sparkles",
            type: "harmless",
            desc: "Summons continuous happy green emerald sparkles under their feet.",
            java_modern: "/execute at [TARGET] run particle minecraft:happy_villager ~ ~ ~ 0.5 0.1 0.5 0 25",
            java_legacy: "/execute at [TARGET] run particle happyVillager ~ ~ ~ 0.5 0.1 0.5 0 25",
            bedrock: "/execute at [TARGET] run particle minecraft:villager_happy ~ ~ ~",
            requires_command_block: false
        },
        {
            level: 2,
            id: "reverse_speech",
            name: "Reverse Chat Output",
            type: "harmless",
            desc: "Forces the player to output backwards text in public chat, confusing other members.",
            java_modern: "/execute as [TARGET] run say !ti t'nac I ,gugilb gugilb",
            java_legacy: "/execute as [TARGET] run say !ti t'nac I ,gugilb gugilb",
            bedrock: "/execute as [TARGET] run say !ti t'nac I ,gugilb gugilb",
            requires_command_block: false
        },
        {
            level: 2,
            id: "levitate",
            name: "Float Away Prank",
            type: "harmless",
            desc: "Gives levitation for 3 seconds followed by slow falling for safety.",
            java_modern: "/effect give [TARGET] minecraft:levitation 3 10\n/effect give [TARGET] minecraft:slow_falling 10 1",
            java_legacy: "/effect give [TARGET] levitation 3 10\n/effect give [TARGET] slow_falling 10 1",
            bedrock: "/effect [TARGET] levitation 3 10\n/effect [TARGET] slow_falling 10 1",
            requires_command_block: true
        },
        {
            level: 2,
            id: "ground_gravel",
            name: "Head Gravel Block",
            type: "grief",
            desc: "Places a loose gravel block above their head that drops directly onto them.",
            java_modern: "/execute at [TARGET] run setblock ~ ~2 ~ minecraft:gravel",
            java_legacy: "/execute at [TARGET] run setblock ~ ~2 ~ gravel",
            bedrock: "/execute at [TARGET] run setblock ~ ~2 ~ gravel",
            requires_command_block: false
        },
        {
            level: 2,
            id: "butterfingers",
            name: "Poison Potato Hand",
            type: "grief",
            desc: "Swaps their active mainhand weapon with a useless poisonous potato.",
            java_modern: "/item replace entity [TARGET] weapon.mainhand with minecraft:poisonous_potato",
            java_legacy: "/replaceitem entity [TARGET] slot.weapon.mainhand minecraft:poisonous_potato",
            bedrock: "/replaceitem entity [TARGET] slot.weapon.mainhand 0 poisonous_potato",
            requires_command_block: false
        },
        {
            level: 2,
            id: "cobweb_trapper",
            name: "Cobweb Stiction",
            type: "grief",
            desc: "Places a sticky Cobweb block directly at their leg level, slowing them to a crawl.",
            java_modern: "/execute at [TARGET] run setblock ~ ~ ~ minecraft:cobweb",
            java_legacy: "/execute at [TARGET] run setblock ~ ~ ~ cobweb",
            bedrock: "/execute at [TARGET] run setblock ~ ~ ~ cobweb",
            requires_command_block: false
        },
        {
            level: 2,
            id: "bee_swarm",
            name: "Angry Bee Swarm",
            type: "harmless",
            desc: "Summons a furious, angry bee directly above the target's head that immediately attacks.",
            java_modern: "/summon minecraft:bee ~ ~3 ~ {AngerTime:1200,AngryAt:[TARGET]}",
            java_legacy: "/summon bee ~ ~3 ~ {Anger:1200}",
            bedrock: "/summon bee ~ ~3 ~ minecraft:become_angry",
            requires_command_block: false
        },
        {
            level: 2,
            id: "fake_diamond_ore",
            name: "Feet Diamond Bait",
            type: "grief",
            desc: "Replaces the block directly beneath their feet with a Diamond Ore block as instant bait.",
            java_modern: "/execute at [TARGET] run setblock ~ ~-1 ~ minecraft:diamond_ore",
            java_legacy: "/execute at [TARGET] run setblock ~ ~-1 ~ diamond_ore",
            bedrock: "/execute at [TARGET] run setblock ~ ~-1 ~ diamond_ore",
            requires_command_block: false
        },
        {
            level: 2,
            id: "water_cage",
            name: "Instant Water Cage",
            type: "grief",
            desc: "Spawns a block of running water exactly at their head height to slow them down.",
            java_modern: "/execute at [TARGET] run setblock ~ ~1 ~ minecraft:water",
            java_legacy: "/execute at [TARGET] run setblock ~ ~1 ~ water",
            bedrock: "/execute at [TARGET] run setblock ~ ~1 ~ water",
            requires_command_block: false
        },
        {
            level: 2,
            id: "slow_dig",
            name: "Mining Fatigue Curse",
            type: "grief",
            desc: "Inflicts severe Mining Fatigue for 20 seconds, grinding block breaking to a halt.",
            java_modern: "/effect give [TARGET] minecraft:mining_fatigue 20 2",
            java_legacy: "/effect give [TARGET] mining_fatigue 20 2",
            bedrock: "/effect [TARGET] mining_fatigue 20 2",
            requires_command_block: false
        },
        {
            level: 2,
            id: "soil_swap",
            name: "Dirt Hand Curse",
            type: "grief",
            desc: "Swaps their active hand held item with a basic block of dirt.",
            java_modern: "/item replace entity [TARGET] weapon.mainhand with minecraft:dirt",
            java_legacy: "/replaceitem entity [TARGET] slot.weapon.mainhand minecraft:dirt",
            bedrock: "/replaceitem entity [TARGET] slot.weapon.mainhand 0 dirt",
            requires_command_block: false
        },

        // LEVEL 3 (Major Griefing - Traps & Strikes)
        {
            level: 3,
            id: "inv_stalker",
            name: "Invisible Hiss Stalker",
            type: "harmless",
            desc: "Summons a fully invisible, silent Creeper that sits right behind them, triggering fake hisses.",
            java_modern: "/summon minecraft:creeper ~ ~ ~ {Silent:1b,active_effects:[{id:'minecraft:invisibility',amplifier:0,duration:-1,show_particles:0b}]}",
            java_legacy: "/summon creeper ~ ~ ~ {Silent:1b,ActiveEffects:[{Id:14,Amplifier:0,Duration:19998,ShowParticles:0b}]}",
            bedrock: "/summon creeper ~ ~ ~ minecraft:become_invisible",
            requires_command_block: false
        },
        {
            level: 3,
            id: "size_shifter_small",
            name: "Micro Shrink (0.2x)",
            type: "harmless",
            desc: "Shrinks their character model to 20% normal scale (Requires Java 1.20.5+).",
            java_modern: "/attribute [TARGET] minecraft:generic.scale base set 0.2",
            java_legacy: "/tellraw [TARGET] {\"text\":\"[Scale pranks are only supported on modern Minecraft 1.20.5+]\",\"color\":\"red\"}",
            bedrock: "/playanimation [TARGET] animation.player.sleeping scale 0.2",
            requires_command_block: false
        },
        {
            level: 3,
            id: "size_shifter_big",
            name: "Titan Grow (4.0x)",
            type: "harmless",
            desc: "Grows their character model into a massive 4-block tall behemoth (Requires Java 1.20.5+).",
            java_modern: "/attribute [TARGET] minecraft:generic.scale base set 4.0",
            java_legacy: "/tellraw [TARGET] {\"text\":\"[Scale pranks are only supported on modern Minecraft 1.20.5+]\",\"color\":\"red\"}",
            bedrock: "/playanimation [TARGET] animation.player.sleeping scale 4.0",
            requires_command_block: false
        },
        {
            level: 3,
            id: "zeus_lightning",
            name: "Zeus's Bolt Strike",
            type: "grief",
            desc: "Strikes an instant lightning bolt directly on their coordinates, setting fires.",
            java_modern: "/execute at [TARGET] run summon minecraft:lightning_bolt ~ ~ ~",
            java_legacy: "/execute at [TARGET] run summon lightning_bolt ~ ~ ~",
            bedrock: "/execute at [TARGET] run summon lightning_bolt ~ ~ ~",
            requires_command_block: false
        },
        {
            level: 3,
            id: "water_leak",
            name: "Ceiling Water Leak",
            type: "grief",
            desc: "Places running water above their head, washing away nearby torches and redstones.",
            java_modern: "/execute at [TARGET] run setblock ~ ~2 ~ minecraft:water",
            java_legacy: "/execute at [TARGET] run setblock ~ ~2 ~ water",
            bedrock: "/execute at [TARGET] run setblock ~ ~2 ~ water",
            requires_command_block: false
        },
        {
            level: 3,
            id: "obsidian_cage",
            name: "Obsidian Coffin",
            type: "grief",
            desc: "Wraps their coordinates entirely inside an indestructible 3x3 solid Obsidian block shell.",
            java_modern: "/execute at [TARGET] run fill ~-1 ~ ~-1 ~1 ~2 ~1 minecraft:obsidian outline\n/execute at [TARGET] run fill ~ ~ ~ ~ ~1 ~ minecraft:air",
            java_legacy: "/execute at [TARGET] run fill ~-1 ~ ~-1 ~1 ~2 ~1 obsidian outline\n/execute at [TARGET] run fill ~ ~ ~ ~ ~1 ~ air",
            bedrock: "/execute at [TARGET] run fill ~-1 ~ ~-1 ~1 ~2 ~1 obsidian outline\n/execute at [TARGET] run fill ~ ~ ~ ~ ~1 ~ air",
            requires_command_block: true
        },
        {
            level: 3,
            id: "slime_head",
            name: "Double Slime Head Helmet",
            type: "harmless",
            desc: "Spawns a small double-stacked slime passenger tower directly on top of the player.",
            java_modern: "/summon minecraft:slime ~ ~2 ~ {Size:1,Passengers:[{id:\"minecraft:slime\",Size:1}]}",
            java_legacy: "/summon slime ~ ~2 ~ {Size:1,Passengers:[{id:\"slime\",Size:1}]}",
            bedrock: "/summon slime ~ ~2 ~",
            requires_command_block: false
        },
        {
            level: 3,
            id: "phantom_steed",
            name: "Zombie Flying Phantom",
            type: "grief",
            desc: "Summons a Flying Phantom high in the sky carrying an aggressive, fully armed Zombie passenger.",
            java_modern: "/summon minecraft:phantom ~ ~10 ~ {Size:2,Passengers:[{id:\"minecraft:zombie\"}]}",
            java_legacy: "/summon phantom ~ ~10 ~ {Size:2,Passengers:[{id:\"zombie\"}]}",
            bedrock: "/summon phantom ~ ~10 ~",
            requires_command_block: false
        },
        {
            level: 3,
            id: "guardian_scare",
            name: "Elder Guardian Ghost Scare",
            type: "harmless",
            desc: "Flashes the giant Elder Guardian face overlay jump scare on their screen.",
            java_modern: "/particle minecraft:elder_guardian ~ ~ ~ 0 0 0 0 1 force [TARGET]\n/playsound minecraft:entity.elder_guardian.curse ambient [TARGET] ~ ~ ~ 1 1",
            java_legacy: "/particle elder_guardian ~ ~ ~ 0 0 0 0 1 force [TARGET]\n/playsound entity.elder_guardian.curse ambient [TARGET] ~ ~ ~ 1 1",
            bedrock: "/playsound mob.elderguardian.curse [TARGET] ~ ~ ~ 1 1",
            requires_command_block: true
        },
        {
            level: 3,
            id: "bedrock_floor",
            name: "Bedrock Floor Anchor",
            type: "grief",
            desc: "Instantly replaces the single block directly beneath their feet with unbreakable Bedrock.",
            java_modern: "/execute at [TARGET] run setblock ~ ~-1 ~ minecraft:bedrock",
            java_legacy: "/execute at [TARGET] run setblock ~ ~-1 ~ bedrock",
            bedrock: "/execute at [TARGET] run setblock ~ ~-1 ~ bedrock",
            requires_command_block: false
        },
        {
            level: 3,
            id: "angry_wolf",
            name: "Rabid Wolf Spawner",
            type: "grief",
            desc: "Summons an extremely aggressive, angry wild Wolf right next to the target.",
            java_modern: "/execute at [TARGET] run summon minecraft:wolf ~ ~ ~ {Angry:1b,AngerTime:1200,AngryAt:[TARGET]}",
            java_legacy: "/execute at [TARGET] run summon wolf ~ ~ ~ {Angry:1b,AngryAt:[TARGET]}",
            bedrock: "/execute at [TARGET] run summon wolf ~ ~ ~ minecraft:become_angry",
            requires_command_block: false
        },

        // LEVEL 4 (Ultimate Rage - Destruction & Swarms)
        {
            level: 4,
            id: "herobrine_spook",
            name: "Herobrine Haunting",
            type: "harmless",
            desc: "Spawns a glowing skull-wearing armor stand, sounds a ghast shriek, and deletes it.",
            java_modern: "/execute at [TARGET] run summon minecraft:armor_stand ~ ~1 ~2 {CustomName:'\"Herobrine\"',CustomNameVisible:1b,Glowing:1b,ArmorItems:[{},{},{},{id:'minecraft:player_head'}]}\n/playsound minecraft:entity.ghast.scream ambient [TARGET] ~ ~ ~ 1 0.5",
            java_legacy: "/execute at [TARGET] run summon armor_stand ~ ~1 ~2 {CustomName:\"Herobrine\",CustomNameVisible:1b,Glowing:1b,ArmorItems:[{},{},{},{id:\"skull\",Damage:3,tag:{SkullOwner:\"Herobrine\"}}]}\n/playsound entity.ghast.scream ambient [TARGET] ~ ~ ~ 1 0.5",
            bedrock: "/execute at [TARGET] run summon armor_stand ~ ~1 ~2 Herobrine\n/playsound mob.ghast.affectionate_scream [TARGET] ~ ~ ~ 1 0.5",
            requires_command_block: true
        },
        {
            level: 4,
            id: "fake_diamonds",
            name: "Fake Diamond Broadcaster",
            type: "harmless",
            desc: "Fakes a server-wide system message declaring they got the 'Diamonds!' advancement.",
            java_modern: '/tellraw @a [{"selector":"[TARGET]","color":"white"},{"text":" has made the advancement "},{"text":"[Diamonds!]","color":"green","bold":true}]\n/tellraw [TARGET] {"text":"Pranked! Actually zero diamonds!","color":"red"}',
            java_legacy: '/tellraw @a [{"selector":"[TARGET]","color":"white"},{"text":" has made the advancement "},{"text":"[Diamonds!]","color":"green","bold":true}]\n/tellraw [TARGET] {"text":"Pranked! Actually zero diamonds!","color":"red"}',
            bedrock: '/tellraw @a {"rawtext":[{"selector":"[TARGET]"},{"text":" has made the advancement §a§l[Diamonds!]"}]}\n/tellraw [TARGET] {"rawtext":[{"text":"§cPranked! Actually zero diamonds!"}]}',
            requires_command_block: true
        },
        {
            level: 4,
            id: "inverse_gravity",
            name: "Inverse Gravity Chamber",
            type: "harmless",
            desc: "Levitates them 15 blocks in the air, holds them suspended, and ambient bats screech around them.",
            java_modern: "/effect give [TARGET] minecraft:levitation 3 15\n/playsound minecraft:entity.bat.ambient ambient [TARGET] ~ ~ ~ 1 1",
            java_legacy: "/effect give [TARGET] levitation 3 15\n/playsound entity.bat.ambient ambient [TARGET] ~ ~ ~ 1 1",
            bedrock: "/effect [TARGET] levitation 3 15\n/playsound mob.bat.say [TARGET] ~ ~ ~ 1 1",
            requires_command_block: true
        },
        {
            level: 4,
            id: "anvil_storm",
            name: "Heavy Anvil Shower",
            type: "grief",
            desc: "Summons 2 heavy falling metal Anvils 15 blocks in the sky above their head to crash down.",
            java_modern: "/execute at [TARGET] run summon minecraft:falling_block ~ ~15 ~ {BlockState:{Name:\"minecraft:anvil\"},Time:1}\n/execute at [TARGET] run summon minecraft:falling_block ~1 ~15 ~ {BlockState:{Name:\"minecraft:anvil\"},Time:1}",
            java_legacy: "/execute at [TARGET] run summon falling_block ~ ~15 ~ {Block:\"anvil\",Time:1}\n/execute at [TARGET] run summon falling_block ~1 ~15 ~ {Block:\"anvil\",Time:1}",
            bedrock: "/execute at [TARGET] run summon falling_block ~ ~15 ~ anvil\n/execute at [TARGET] run summon falling_block ~1 ~15 ~ anvil",
            requires_command_block: true
        },
        {
            level: 4,
            id: "lava_bath",
            name: "Lava Footbath",
            type: "grief",
            desc: "Swaps the single block they are standing on into a burning fluid pool of hot Lava.",
            java_modern: "/execute at [TARGET] run setblock ~ ~-1 ~ minecraft:lava",
            java_legacy: "/execute at [TARGET] run setblock ~ ~-1 ~ lava",
            bedrock: "/execute at [TARGET] run setblock ~ ~-1 ~ lava",
            requires_command_block: false
        },
        {
            level: 4,
            id: "hotbar_wipe",
            name: "Hotbar Inventory Wipe",
            type: "grief",
            desc: "Clears their active inventory hotbar entirely using the sweeping clear command.",
            java_modern: "/clear [TARGET]",
            java_legacy: "/clear [TARGET]",
            bedrock: "/clear [TARGET]",
            requires_command_block: false
        },
        {
            level: 4,
            id: "anvil_dropper",
            name: "Single-Anvil Pinpoint Drop",
            type: "grief",
            desc: "Summons a single heavy falling anvil exactly 6 blocks in the air directly above their head.",
            java_modern: "/execute at [TARGET] run summon minecraft:falling_block ~ ~6 ~ {BlockState:{Name:\"minecraft:anvil\"},Time:1}",
            java_legacy: "/execute at [TARGET] run summon falling_block ~ ~6 ~ {Block:\"anvil\",Time:1}",
            bedrock: "/execute at [TARGET] run summon falling_block ~ ~6 ~ anvil",
            requires_command_block: false
        },
        {
            level: 4,
            id: "giant_phantom",
            name: "Colossal Phantom Grow",
            type: "harmless",
            desc: "Scales flying phantoms near the target to colossal scales.",
            java_modern: "/execute as @e[type=minecraft:phantom] run data merge entity @s {Size:15}",
            java_legacy: "/execute as @e[type=phantom] run data merge entity @s {Size:15}",
            bedrock: "/playanimation @e[type=phantom] animation.ghast.scale scale 8",
            requires_command_block: false
        },
        {
            level: 4,
            id: "lava_coffin",
            name: "Lava Shower Trap",
            type: "grief",
            desc: "Summons a block of burning lava exactly 3 blocks above their head, causing it to drip down.",
            java_modern: "/execute at [TARGET] run setblock ~ ~3 ~ minecraft:lava",
            java_legacy: "/execute at [TARGET] run setblock ~ ~3 ~ lava",
            bedrock: "/execute at [TARGET] run setblock ~ ~3 ~ lava",
            requires_command_block: false
        },
        {
            level: 4,
            id: "pumpkin_head",
            name: "Pumpkin Blindness",
            type: "grief",
            desc: "Forces a carved pumpkin onto their head armor slot, severely blocking their screen view.",
            java_modern: "/item replace entity [TARGET] armor.head with minecraft:carved_pumpkin",
            java_legacy: "/replaceitem entity [TARGET] slot.armor.head minecraft:carved_pumpkin",
            bedrock: "/replaceitem entity [TARGET] slot.armor.head 0 carved_pumpkin",
            requires_command_block: false
        },
        {
            level: 4,
            id: "wither_spawn_sound",
            name: "Wither Spawn Panic",
            type: "harmless",
            desc: "Plays the terrifying Wither Boss spawn sound globally to the target, creating mass panic.",
            java_modern: "/playsound minecraft:entity.wither.spawn master [TARGET] ~ ~ ~ 1 1 1",
            java_legacy: "/playsound entity.wither.spawn master [TARGET] ~ ~ ~ 1 1 1",
            bedrock: "/playsound mob.wither.spawn [TARGET] ~ ~ ~ 1 1",
            requires_command_block: false
        },

        // LEVEL 5 (World Shatterer - Apocalypse & Client Lag)
        {
            level: 5,
            id: "kbd_freeze",
            name: "Gravity Freeze Ring",
            type: "harmless",
            desc: "Forces player to continuously teleport to their current spot, completely locking movement.",
            java_modern: "/execute as [TARGET] run tp ~ ~ ~",
            java_legacy: "/execute as [TARGET] run tp ~ ~ ~",
            bedrock: "/execute as [TARGET] run tp ~ ~ ~",
            requires_command_block: true
        },
        {
            level: 5,
            id: "fake_admin_ban",
            name: "Fake Admin Ban Screen",
            type: "harmless",
            desc: "Flashes an official-looking kicked system tellraw in public chat while sending a private April Fools message.",
            java_modern: '/tellraw @a {"text":"[System] Connection lost: Kicked by Admin (Violation: FlyHack)","color":"red"}\n/tellraw [TARGET] {"text":"Pranked! You are not banned!","color":"green"}',
            java_legacy: '/tellraw @a {"text":"[System] Connection lost: Kicked by Admin (Violation: FlyHack)","color":"red"}\n/tellraw [TARGET] {"text":"Pranked! You are not banned!","color":"green"}',
            bedrock: '/tellraw @a {"rawtext":[{"text":"§c[System] Connection lost: Kicked by Admin (Violation: FlyHack)"}]}\n/tellraw [TARGET] {"rawtext":[{"text":"§aPranked! You are not banned!"}]}',
            requires_command_block: true
        },
        {
            level: 5,
            id: "mob_singularity",
            name: "Chicken Stack Apocalypse",
            type: "grief",
            desc: "Summons a stacked vertical tower of 6 chickens riding each other in a single chat-compatible line.",
            java_modern: "/summon minecraft:chicken ~ ~ ~ {Passengers:[{id:\"minecraft:chicken\",Passengers:[{id:\"minecraft:chicken\",Passengers:[{id:\"minecraft:chicken\",Passengers:[{id:\"minecraft:chicken\",Passengers:[{id:\"minecraft:chicken\"}]}]}]}]}]}",
            java_legacy: "/summon chicken ~ ~ ~ {Passengers:[{id:\"chicken\",Passengers:[{id:\"chicken\",Passengers:[{id:\"chicken\",Passengers:[{id:\"chicken\",Passengers:[{id:\"chicken\"}]}]}]}]}]}",
            bedrock: "/summon chicken ~ ~ ~\n/summon chicken ~ ~ ~\n/summon chicken ~ ~ ~",
            requires_command_block: true
        },
        {
            level: 5,
            id: "bedrock_box",
            name: "Bedrock Jail Box",
            type: "grief",
            desc: "Encapsulates the target inside a hollow 3x3 solid Bedrock tomb that cannot be mined.",
            java_modern: "/execute at [TARGET] run fill ~-1 ~ ~-1 ~1 ~2 ~1 minecraft:bedrock outline\n/execute at [TARGET] run fill ~ ~ ~ ~ ~1 ~ minecraft:air",
            java_legacy: "/execute at [TARGET] run fill ~-1 ~ ~-1 ~1 ~2 ~1 bedrock outline\n/execute at [TARGET] run fill ~ ~ ~ ~ ~1 ~ air",
            bedrock: "/execute at [TARGET] run fill ~-1 ~ ~-1 ~1 ~2 ~1 bedrock outline\n/execute at [TARGET] run fill ~ ~ ~ ~ ~1 ~ air",
            requires_command_block: true
        },
        {
            level: 5,
            id: "tnt_cluster",
            name: "Nuclear TNT Riding Stack",
            type: "grief",
            desc: "Summons a single-line riding stack of 3 primed TNT blocks that explode instantly in a rapid chain.",
            java_modern: "/summon minecraft:tnt ~ ~3 ~ {Fuse:15,Passengers:[{id:\"minecraft:tnt\",Fuse:15},{id:\"minecraft:tnt\",Fuse:15}]}",
            java_legacy: "/summon tnt ~ ~3 ~ {Fuse:15,Passengers:[{id:\"tnt\",Fuse:15},{id:\"tnt\",Fuse:15}]}",
            bedrock: "/summon tnt ~ ~3 ~",
            requires_command_block: false
        },
        {
            level: 5,
            id: "mob_magnet",
            name: "Hostile Mob Magnet",
            type: "grief",
            desc: "Instantly teleports all aggressive zombies, skeletons, and creepers within 100 blocks directly onto them.",
            java_modern: "/execute as [TARGET] run tp @e[type=minecraft:zombie,distance=..100] ~ ~ ~\n/execute as [TARGET] run tp @e[type=minecraft:skeleton,distance=..100] ~ ~ ~",
            java_legacy: "/execute as [TARGET] run tp @e[type=zombie,distance=..100] ~ ~ ~\n/execute as [TARGET] run tp @e[type=skeleton,distance=..100] ~ ~ ~",
            bedrock: "/execute as [TARGET] run tp @e[type=zombie] ~ ~ ~\n/execute as [TARGET] run tp @e[type=skeleton] ~ ~ ~",
            requires_command_block: true
        },
        {
            level: 5,
            id: "runner_items",
            name: "Items Run Away Trap",
            type: "grief",
            desc: "Pushes any dropped block items away from the target whenever they walk within 3 blocks, making item pickups impossible.",
            java_modern: "/execute as @e[type=minecraft:item] at @s if entity @p[distance=..3] run tp @s ~ ~0.25 ~",
            java_legacy: "/execute as @e[type=item] at @s if entity @p[distance=3] run tp @s ~ ~0.25 ~",
            bedrock: "/execute as @e[type=item] at @s run tp @s ~ ~0.2 ~",
            requires_command_block: true
        },
        {
            level: 5,
            id: "forced_spin",
            name: "Continuous Camera Spin",
            type: "harmless",
            desc: "Constantly spins the victim's camera direction in micro-angles, making movement or mining impossible.",
            java_modern: "/execute as [TARGET] at @s run tp @s ~ ~ ~ ~20 ~",
            java_legacy: "/execute as [TARGET] at @s run tp @s ~ ~ ~ ~20 ~",
            bedrock: "/execute as [TARGET] at @s run tp @s ~ ~ ~ ~20 ~",
            requires_command_block: true
        },
        {
            level: 5,
            id: "bed_bomb",
            name: "Bed Explosive Trap",
            type: "grief",
            desc: "Summons instant TNT explosions the second the target walks on or sleeps in a bed.",
            java_modern: "/execute as [TARGET] at @s if block ~ ~-1 ~ #minecraft:beds run summon minecraft:tnt ~ ~ ~",
            java_legacy: "/execute as [TARGET] at @s if block ~ ~-1 ~ #minecraft:beds run summon tnt ~ ~ ~",
            bedrock: "/execute as [TARGET] at @s if block ~ ~-1 ~ bed run summon tnt ~ ~ ~",
            requires_command_block: true
        },
        {
            level: 5,
            id: "ping_lag",
            name: "Rubberband Fake Ping Stutter",
            type: "harmless",
            desc: "Constantly teleports the player backwards by fractions of a block to simulate an extremely high-ping 1500ms lag.",
            java_modern: "/execute as [TARGET] at @s run tp @s ~-0.05 ~ ~0.05",
            java_legacy: "/execute as [TARGET] at @s run tp @s ~-0.05 ~ ~0.05",
            bedrock: "/execute as [TARGET] at @s run tp @s ~-0.05 ~ ~0.05",
            requires_command_block: true
        },
        {
            level: 5,
            id: "sky_fall",
            name: "Terminal Sky Drop (200m)",
            type: "grief",
            desc: "Teleports the target 200 blocks straight up into the air, forcing a high-altitude freefall.",
            java_modern: "/tp [TARGET] ~ ~200 ~",
            java_legacy: "/tp [TARGET] ~ ~200 ~",
            bedrock: "/tp [TARGET] ~ ~200 ~",
            requires_command_block: false
        },
        {
            level: 5,
            id: "diamond_burn",
            name: "Anti-Diamond Deletion",
            type: "grief",
            desc: "Continuously vaporizes any dropped Diamond items near the player, rendering diamond drops impossible.",
            java_modern: '/execute as @e[type=minecraft:item] at @s if entity @s[nbt={Item:{id:"minecraft:diamond"}}] run kill @s',
            java_legacy: '/execute as @e[type=item] at @s if entity @s[nbt={Item:{id:"minecraft:diamond"}}] run kill @s',
            bedrock: "/kill @e[type=item,name=diamond]",
            requires_command_block: true
        },
        {
            level: 5,
            id: "exploding_arrows",
            name: "Arrow TNT Proximity",
            type: "grief",
            desc: "Causes every fired arrow to instantly summon a primed exploding TNT block wherever it travels.",
            java_modern: "/execute at @e[type=minecraft:arrow] run summon minecraft:tnt ~ ~ ~ {Fuse:0}",
            java_legacy: "/execute at @e[type=arrow] run summon tnt ~ ~ ~ {Fuse:0}",
            bedrock: "/execute at @e[type=arrow] run summon tnt ~ ~ ~",
            requires_command_block: true
        },
        {
            level: 5,
            id: "silverfish_spawner",
            name: "Silverfish Swarm",
            type: "grief",
            desc: "Spawns 5 high-speed, aggressive Silverfish directly on top of the target's head.",
            java_modern: "/execute at [TARGET] run summon minecraft:silverfish ~ ~ ~",
            java_legacy: "/execute at [TARGET] run summon silverfish ~ ~ ~",
            bedrock: "/execute at [TARGET] run summon silverfish ~ ~ ~",
            requires_command_block: false
        },
        {
            level: 5,
            id: "blindness_strike",
            name: "Extreme Blindness Spike",
            type: "grief",
            desc: "Applies high-duration server-wide blindness (30 seconds) to completely black out their vision.",
            java_modern: "/effect give [TARGET] minecraft:blindness 30 1",
            java_legacy: "/effect give [TARGET] blindness 30 1",
            bedrock: "/effect [TARGET] blindness 30 1",
            requires_command_block: false
        },
        {
            level: 5,
            id: "fake_timeout",
            name: "Fake Disconnect Screen",
            type: "harmless",
            desc: "Sends a fake network disconnect/timeout system message in red font to spark connection panic.",
            java_modern: '/tellraw [TARGET] {"text":"Connection timed out: server is shutting down.","color":"red"}',
            java_legacy: '/tellraw [TARGET] {"text":"Connection timed out: server is shutting down.","color":"red"}',
            bedrock: '/tellraw [TARGET] {"rawtext":[{"text":"§cConnection timed out: server is shutting down."}]}',
            requires_command_block: false
        },
        {
            level: 5,
            id: "slow_motion",
            name: "Slow Motion Trap",
            type: "grief",
            desc: "Inflicts absolute extreme slowness and mining fatigue, making their gameplay crawl in slow-motion.",
            java_modern: "/effect give [TARGET] minecraft:slowness 20 10\n/effect give [TARGET] minecraft:mining_fatigue 20 10",
            java_legacy: "/effect give [TARGET] slowness 20 10\n/effect give [TARGET] mining_fatigue 20 10",
            bedrock: "/effect [TARGET] slowness 20 10\n/effect [TARGET] mining_fatigue 20 10",
            requires_command_block: true
        },
        {
            level: 5,
            id: "levitation_void",
            name: "Anti-Gravity Void",
            type: "grief",
            desc: "Shoots the target into the stratosphere with extreme levitation and locks them high above the ground.",
            java_modern: "/effect give [TARGET] minecraft:levitation 10 20",
            java_legacy: "/effect give [TARGET] levitation 10 20",
            bedrock: "/effect [TARGET] levitation 10 20",
            requires_command_block: false
        },
        // LEVEL 1 (Subtle Spooks)
        {
            level: 1,
            id: "wood_pecker",
            name: "Subtle Wood Pecker",
            type: "harmless",
            desc: "Plays a very quiet wood hit sound in the target's ears, simulating a woodpecker on their base.",
            java_modern: "/playsound minecraft:block.wood.hit player [TARGET] ~ ~ ~ 0.2 1.5",
            java_legacy: "/playsound block.wood.hit player [TARGET] ~ ~ ~ 0.2 1.5",
            bedrock: "/playsound hit.wood [TARGET] ~ ~ ~ 0.2 1.5",
            requires_command_block: false
        },
        {
            level: 1,
            id: "bat_flutter",
            name: "Subtle Bat Wings",
            type: "harmless",
            desc: "Simulates bat wing flutter noises in their immediate proximity to make them think one is trapped in their walls.",
            java_modern: "/playsound minecraft:entity.bat.loop player [TARGET] ~ ~ ~ 0.3 1.1",
            java_legacy: "/playsound entity.bat.loop player [TARGET] ~ ~ ~ 0.3 1.1",
            bedrock: "/playsound mob.bat.takeoff [TARGET] ~ ~ ~ 0.3 1.1",
            requires_command_block: false
        },
        {
            level: 1,
            id: "fake_chat_lag",
            name: "Fake Server Connection Lag",
            type: "harmless",
            desc: "Fakes a grey system message warning them of extremely high server latency spikes.",
            java_modern: '/tellraw [TARGET] {"text":"[Server] Warning: Latency spike detected (842ms)","color":"gray"}',
            java_legacy: '/tellraw [TARGET] {"text":"[Server] Warning: Latency spike detected (842ms)","color":"gray"}',
            bedrock: '/tellraw [TARGET] {"rawtext":[{"text":"§7[Server] Warning: Latency spike detected (842ms)"}]}',
            requires_command_block: false
        },
        // LEVEL 2 (Subtle Sabotage)
        {
            level: 2,
            id: "camera_drift",
            name: "Subtle Mouse Drift",
            type: "harmless",
            desc: "Slightly rotates the player's camera pitch and yaw by a fraction of a degree, simulating mouse dust.",
            java_modern: "/execute as [TARGET] at @s run tp @s ~ ~ ~ ~0.25 ~0.2",
            java_legacy: "/execute as [TARGET] at @s run tp @s ~ ~ ~ ~0.25 ~0.2",
            bedrock: "/execute as [TARGET] at @s run tp @s ~ ~ ~ ~0.25 ~0.2",
            requires_command_block: false
        },
        {
            level: 2,
            id: "item_repulsion",
            name: "Hovering Item Repulsion",
            type: "grief",
            desc: "Constantly teleports dropped block items 0.1 blocks upwards whenever the target tries to pick them up.",
            java_modern: "/execute as @e[type=minecraft:item,distance=..2.5] at @s run tp @s ~ ~0.1 ~",
            java_legacy: "/execute as @e[type=item,distance=..2.5] at @s run tp @s ~ ~0.1 ~",
            bedrock: "/execute as @e[type=item,r=2] run tp @s ~ ~0.1 ~",
            requires_command_block: false
        },
        {
            level: 2,
            id: "silent_footstep",
            name: "Fake Grass Footstep",
            type: "harmless",
            desc: "Plays soft grass stepping sounds behind them while they are actually walking on solid stone.",
            java_modern: "/execute as [TARGET] at @s if block ~ ~-1 ~ #minecraft:base_stone_overworld run playsound minecraft:block.grass.step player @s ~ ~-1 ~ 0.4 1",
            java_legacy: "/execute as [TARGET] at @s run playsound block.grass.step player @s ~ ~-1 ~ 0.4 1",
            bedrock: "/execute as [TARGET] at @s run playsound step.grass [TARGET] ~ ~-1 ~ 0.4",
            requires_command_block: false
        },
        // LEVEL 3 (Subtle Traps)
        {
            level: 3,
            id: "warden_dim",
            name: "Subtle Screen Dimming",
            type: "harmless",
            desc: "Applies a short Warden darkness overlay pulse without showing any potion particle effects.",
            java_modern: "/effect give [TARGET] minecraft:darkness 3 0 true",
            java_legacy: "/effect give [TARGET] darkness 3 0 true",
            bedrock: "/effect [TARGET] darkness 3 0 true",
            requires_command_block: false
        },
        {
            level: 3,
            id: "fake_fall",
            name: "Spooky Ceiling Thud",
            type: "harmless",
            desc: "Plays a heavy rock impact landing sound right above their head to make them think a block fell.",
            java_modern: "/playsound minecraft:block.stone.fall player [TARGET] ~ ~ ~ 0.5 0.7",
            java_legacy: "/playsound block.stone.fall player [TARGET] ~ ~ ~ 0.5 0.7",
            bedrock: "/playsound fall.stone [TARGET] ~ ~ ~ 0.5 0.7",
            requires_command_block: false
        },
        {
            level: 3,
            id: "torch_snuffer",
            name: "Subtle Torch Snuffer",
            type: "grief",
            desc: "Extinguishes and deletes any placed wall/floor Torches within 2 blocks of the target player.",
            java_modern: "/execute at [TARGET] run fill ~-2 ~-1 ~-2 ~2 ~1 ~2 minecraft:air replace minecraft:torch",
            java_legacy: "/execute at [TARGET] run fill ~-2 ~-1 ~-2 ~2 ~1 ~2 air replace torch",
            bedrock: "/execute at [TARGET] run fill ~-2 ~-1 ~-2 ~2 ~1 ~2 air replace torch",
            requires_command_block: true
        },
        // LEVEL 4 (Subtle Swarms & Spooks)
        {
            level: 4,
            id: "phantom_raid",
            name: "Silent Phantom Swarm",
            type: "grief",
            desc: "Summons 2 completely silent Flying Phantoms in the high cloud level directly above them.",
            java_modern: "/summon minecraft:phantom ~ ~15 ~ {Silent:1b,Size:1}\n/summon minecraft:phantom ~ ~16 ~ {Silent:1b,Size:1}",
            java_legacy: "/summon phantom ~ ~15 ~ {Silent:1b,Size:1}\n/summon phantom ~ ~16 ~ {Silent:1b,Size:1}",
            bedrock: "/summon phantom ~ ~15 ~\n/summon phantom ~ ~16 ~",
            requires_command_block: true
        },
        {
            level: 4,
            id: "fake_dragon_death",
            name: "Ender Dragon Death Panic",
            type: "harmless",
            desc: "Sounds the booming global sound of the Ender Dragon dying directly to the target's coordinates.",
            java_modern: "/playsound minecraft:entity.ender_dragon.death master [TARGET] ~ ~ ~ 1 1",
            java_legacy: "/playsound entity.ender_dragon.death master [TARGET] ~ ~ ~ 1 1",
            bedrock: "/playsound mob.enderdragon.death [TARGET] ~ ~ ~ 1 1",
            requires_command_block: false
        },
        {
            level: 4,
            id: "lava_paranoia",
            name: "Quiet Lava Popping",
            type: "harmless",
            desc: "Plays the quiet crackle pop sounds of hot lava pools directly inside their ears.",
            java_modern: "/playsound minecraft:block.lava.pop player [TARGET] ~ ~ ~ 0.4 1",
            java_legacy: "/playsound block.lava.pop player [TARGET] ~ ~ ~ 0.4 1",
            bedrock: "/playsound block.lava.lava [TARGET] ~ ~ ~ 0.4",
            requires_command_block: false
        },
        // LEVEL 5 (Subtle Apocalypse)
        {
            level: 5,
            id: "biome_swamp",
            name: "Swamp Biome Shifter",
            type: "grief",
            desc: "Converts the local 10x10 chunk biome coordinates to Swamp, permanently muddying grass/water.",
            java_modern: "/fillbiome ~-5 ~-5 ~-5 ~5 ~5 ~5 minecraft:swamp",
            java_legacy: "/tellraw [TARGET] {\"text\":\"[Biome shifting requires modern Java 1.20+]\",\"color\":\"red\"}",
            bedrock: "/fillbiome ~-5 ~-5 ~-5 ~5 ~5 ~5 swamp",
            requires_command_block: true
        },
        {
            level: 5,
            id: "ghost_tnt_primed",
            name: "primed TNT Panic Trigger",
            type: "grief",
            desc: "Summons a primed TNT block with a very long 10-second fuse right next to them, causing instant panic.",
            java_modern: "/execute at [TARGET] run summon minecraft:tnt ~ ~ ~ {Fuse:200}",
            java_legacy: "/execute at [TARGET] run summon tnt ~ ~ ~ {Fuse:200}",
            bedrock: "/execute at [TARGET] run summon tnt ~ ~ ~",
            requires_command_block: false
        },
        {
            level: 5,
            id: "infinite_xp_ding",
            name: "XP Pickup Loop Noise",
            type: "harmless",
            desc: "Plays the loud ding sound of experience orb pickups repeatedly in their ears.",
            java_modern: "/execute at [TARGET] run playsound minecraft:entity.experience_orb.pickup player [TARGET] ~ ~ ~ 0.5 1",
            java_legacy: "/execute at [TARGET] run playsound entity.experience_orb.pickup player [TARGET] ~ ~ ~ 0.5 1",
            bedrock: "/execute at [TARGET] run playsound random.levelup [TARGET] ~ ~ ~ 0.5 1",
            requires_command_block: false
        },
        // --- NEW SUBTLE AND COMMUNITY TROLL COMMANDS ---
        {
            level: 1,
            id: "phantom_swoop",
            name: "Ghost Phantom Swoop",
            type: "harmless",
            desc: "Plays the terrifying swoop sound of an attacking phantom directly above their head, prompting them to look up in panic.",
            java_modern: "/playsound minecraft:entity.phantom.swoop master [TARGET] ~ ~ ~ 1 1",
            java_legacy: "/playsound entity.phantom.swoop master [TARGET] ~ ~ ~ 1 1",
            bedrock: "/playsound mob.phantom.swoop [TARGET] ~ ~ ~ 1 1",
            requires_command_block: false
        },
        {
            level: 1,
            id: "bat_takeoff",
            name: "Bat Flight Flutter",
            type: "harmless",
            desc: "Plays a quick burst of fluttering bat wings and bat squeaks near their head, simulating a roosting bat nesting in their hair.",
            java_modern: "/playsound minecraft:entity.bat.takeoff master [TARGET] ~ ~ ~ 1 1.2\n/playsound minecraft:entity.bat.ambient master [TARGET] ~ ~ ~ 1 1",
            java_legacy: "/playsound entity.bat.takeoff master [TARGET] ~ ~ ~ 1 1.2\n/playsound entity.bat.ambient master [TARGET] ~ ~ ~ 1 1",
            bedrock: "/playsound mob.bat.takeoff [TARGET] ~ ~ ~ 1 1.2\n/playsound mob.bat.say [TARGET] ~ ~ ~ 1 1",
            requires_command_block: true
        },
        {
            level: 1,
            id: "damp_torch",
            name: "Damp Torch Fizzle",
            type: "harmless",
            desc: "Plays the realistic fizzle sound of a flame or torch getting extinguished with water directly under their feet.",
            java_modern: "/playsound minecraft:block.fire.extinguish master [TARGET] ~ ~ ~ 0.8 1",
            java_legacy: "/playsound block.fire.extinguish master [TARGET] ~ ~ ~ 0.8 1",
            bedrock: "/playsound random.fizz [TARGET] ~ ~ ~ 0.8 1",
            requires_command_block: false
        },
        {
            level: 1,
            id: "witch_chuckle",
            name: "Ghostly Witch Giggle",
            type: "harmless",
            desc: "Plays a faint, spooky witch giggle sound 5 blocks behind them, suggesting an invisible witch is nearby.",
            java_modern: "/execute at [TARGET] run playsound minecraft:entity.witch.ambient ambient [TARGET] ^ ^ ^-5 0.5 1",
            java_legacy: "/execute at [TARGET] run playsound entity.witch.ambient ambient [TARGET] ^ ^ ^-5 0.5 1",
            bedrock: "/execute at [TARGET] run playsound mob.witch.ambient [TARGET] ^ ^ ^-5 0.5 1",
            requires_command_block: false
        },
        {
            level: 2,
            id: "arrow_whiz",
            name: "Phantom Sniper Shot",
            type: "harmless",
            desc: "Simulates a nearby arrow whizzing right past their ear with a high-pitched bow release sound.",
            java_modern: "/playsound minecraft:entity.arrow.shoot master [TARGET] ~ ~1 ~ 1 1.6",
            java_legacy: "/playsound entity.arrow.shoot master [TARGET] ~ ~1 ~ 1 1.6",
            bedrock: "/playsound random.bow [TARGET] ~ ~1 ~ 1 1.6",
            requires_command_block: false
        },
        {
            level: 2,
            id: "totem_pop_sound",
            name: "Fake Totem Pop",
            type: "harmless",
            desc: "Plays the distinctive golden crackling chime of a Totem of Undying popping, sending them into immediate inventory panic.",
            java_modern: "/playsound minecraft:item.totem.use master [TARGET] ~ ~ ~ 0.9 0.9",
            java_legacy: "/playsound item.totem.use master [TARGET] ~ ~ ~ 0.9 0.9",
            bedrock: "/playsound random.totem [TARGET] ~ ~ ~ 0.9 0.9",
            requires_command_block: false
        },
        {
            level: 2,
            id: "creeper_fuse_distant",
            name: "Distant Creeper Hiss",
            type: "harmless",
            desc: "Plays a slightly muffled Creeper fuse countdown sound 4 blocks behind them, creating a split-second jump scare.",
            java_modern: "/execute at [TARGET] run playsound minecraft:entity.creeper.primed master [TARGET] ^ ^ ^-4 0.6 0.8",
            java_legacy: "/execute at [TARGET] run playsound entity.creeper.primed master [TARGET] ^ ^ ^-4 0.6 0.8",
            bedrock: "/execute at [TARGET] run playsound random.fuse [TARGET] ^ ^ ^-4 0.6 0.8",
            requires_command_block: false
        },
        {
            level: 2,
            id: "anvil_drop_distant",
            name: "Falling Anvil Thud",
            type: "harmless",
            desc: "Plays a heavy falling anvil impact thud 4 blocks above them, triggering their shield and look-up reflex.",
            java_modern: "/playsound minecraft:block.anvil.land master [TARGET] ~ ~4 ~ 0.4 1",
            java_legacy: "/playsound block.anvil.land master [TARGET] ~ ~4 ~ 0.4 1",
            bedrock: "/playsound random.anvil_land [TARGET] ~ ~4 ~ 0.4",
            requires_command_block: false
        },
        {
            level: 2,
            id: "item_pusher",
            name: "Inventory Repulsion Field",
            type: "harmless",
            desc: "Teleports dropped items nearby slightly away from the target, making it incredibly tedious to collect loot.",
            java_modern: "/execute at [TARGET] run tp @e[type=minecraft:item,distance=..2.5] ~1 ~ ~1",
            java_legacy: "/execute at [TARGET] run tp @e[type=item,r=2.5] ~1 ~ ~1",
            bedrock: "/execute at [TARGET] run tp @e[type=item,r=2.5] ~1 ~ ~1",
            requires_command_block: false
        },
        {
            level: 3,
            id: "bee_swarm",
            name: "Ghost Bee Swarm",
            type: "harmless",
            desc: "Simulates an angry hive of bees buzzing persistently in their ears, causing extreme auditory distraction.",
            java_modern: "/playsound minecraft:entity.bee.loop master [TARGET] ~ ~ ~ 1 1",
            java_legacy: "/playsound entity.bee.loop master [TARGET] ~ ~ ~ 1 1",
            bedrock: "/playsound mob.bee.loop [TARGET] ~ ~ ~ 1 1",
            requires_command_block: false
        },
        {
            level: 3,
            id: "silverfish_crawl",
            name: "Silverfish Infestation Sound",
            type: "harmless",
            desc: "Plays scurrying silverfish crawling footsteps and minor hisses directly under their feet.",
            java_modern: "/playsound minecraft:entity.silverfish.step master [TARGET] ~ ~ ~ 0.8 1.2\n/playsound minecraft:entity.silverfish.ambient master [TARGET] ~ ~ ~ 0.8 1",
            java_legacy: "/playsound entity.silverfish.step master [TARGET] ~ ~ ~ 0.8 1.2\n/playsound entity.silverfish.ambient master [TARGET] ~ ~ ~ 0.8 1",
            bedrock: "/playsound mob.silverfish.step [TARGET] ~ ~ ~ 0.8 1.2\n/playsound mob.silverfish.say [TARGET] ~ ~ ~ 0.8 1",
            requires_command_block: true
        },
        {
            level: 3,
            id: "ghast_screamer",
            name: "Overworld Ghast Alert",
            type: "harmless",
            desc: "Plays a loud Ghast warning shriek and firing blast directly in their ears, simulating a portal spillover.",
            java_modern: "/playsound minecraft:entity.ghast.warn master [TARGET] ~ ~ ~ 1 1\n/playsound minecraft:entity.ghast.shoot master [TARGET] ~ ~ ~ 1 1",
            java_legacy: "/playsound entity.ghast.warn master [TARGET] ~ ~ ~ 1 1\n/playsound entity.ghast.shoot master [TARGET] ~ ~ ~ 1 1",
            bedrock: "/playsound mob.ghast.charge [TARGET] ~ ~ ~ 1 1\n/playsound mob.ghast.fireball [TARGET] ~ ~ ~ 1 1",
            requires_command_block: true
        },
        {
            level: 3,
            id: "chest_creaker",
            name: "Creaking Chest Shadow",
            type: "harmless",
            desc: "Plays a slow creaking chest open sound right behind them, simulating a ghost opening storage vaults.",
            java_modern: "/execute at [TARGET] run playsound minecraft:block.chest.open block [TARGET] ^ ^ ^-2 0.7 0.7",
            java_legacy: "/execute at [TARGET] run playsound block.chest.open block [TARGET] ^ ^ ^-2 0.7 0.7",
            bedrock: "/execute at [TARGET] run playsound random.chestopen [TARGET] ^ ^ ^-2 0.7 0.7",
            requires_command_block: false
        },
        {
            level: 3,
            id: "sculk_shrieker_ambient",
            name: "Sculk Vibration Scare",
            type: "harmless",
            desc: "Plays the clicking vibration of a sculk sensor followed by a distant shrieker cry, triggering Warden fears.",
            java_modern: "/playsound minecraft:block.sculk_sensor.clicking master [TARGET] ~ ~ ~ 0.8 1\n/playsound minecraft:entity.warden.nearby_close master [TARGET] ~ ~ ~ 0.5 1",
            java_legacy: "/playsound block.sculk_sensor.clicking master [TARGET] ~ ~ ~ 0.8 1\n/playsound entity.warden.nearby_close master [TARGET] ~ ~ ~ 0.5 1",
            bedrock: "/playsound block.sculk_shrieker.shriek [TARGET] ~ ~ ~ 0.6 1",
            requires_command_block: true
        },
        {
            level: 4,
            id: "elder_guardian_curse",
            name: "Elder Guardian jumpscare",
            type: "harmless",
            desc: "Plays the elder guardian curse chime and applies 1 second mining fatigue, flash-projecting the giant ghostly fish on their screen.",
            java_modern: "/playsound minecraft:entity.elder_guardian.curse master [TARGET] ~ ~ ~ 1 1\n/effect give [TARGET] minecraft:mining_fatigue 1 0 true",
            java_legacy: "/playsound entity.elder_guardian.curse master [TARGET] ~ ~ ~ 1 1\n/effect give [TARGET] mining_fatigue 1 0 true",
            bedrock: "/playsound mob.elderguardian.curse [TARGET] ~ ~ ~ 1 1\n/effect [TARGET] mining_fatigue 1 0",
            requires_command_block: true
        },
        {
            level: 4,
            id: "fake_diamond_advancement",
            name: "Fake Dedication Achievement",
            type: "harmless",
            desc: "Sends a fake chat broadcast announcing the victim just completed a top-tier legendary netherite advancement.",
            java_modern: `/tellraw @a [{"selector":"[TARGET]"},{"text":" has made the advancement ","color":"white"},{"text":"[Cover Me in Debris]","color":"purple","hoverEvent":{"action":"show_text","contents":{"text":"Complete Netherite armor set"}}}]`,
            java_legacy: `/tellraw @a [{"selector":"[TARGET]"},{"text":" has made the advancement ","color":"white"},{"text":"[Cover Me in Debris]","color":"purple"}]`,
            bedrock: `/tellraw @a {"rawtext":[{"selector":"[TARGET]"},{"text":" has made the advancement §d[Cover Me in Debris]"}]}`,
            requires_command_block: false
        },
        {
            level: 4,
            id: "fake_op_whisper",
            name: "Operator Status Revoked",
            type: "harmless",
            desc: "Spams a gray server system chat notifying them that they have been de-opped and can no longer command.",
            java_modern: `/tellraw [TARGET] {"text":"You are no longer server operator","color":"gray","italic":true}`,
            java_legacy: `/tellraw [TARGET] {"text":"You are no longer server operator","color":"gray","italic":true}`,
            bedrock: `/tellraw [TARGET] {"rawtext":[{"text":"§7§oYou are no longer server operator"}]}`,
            requires_command_block: false
        },
        {
            level: 4,
            id: "lightning_strike_fake",
            name: "Silent Lightning Bolt",
            type: "harmless",
            desc: "Spawns a massive lightning strike directly on their body but silences the damage, generating a brilliant screen flash.",
            java_modern: "/execute at [TARGET] run summon minecraft:lightning_bolt ~ ~ ~ {Silent:1b}",
            java_legacy: "/execute at [TARGET] run summon lightning_bolt ~ ~ ~ {Silent:1b}",
            bedrock: "/execute at [TARGET] run summon lightning_bolt ~ ~ ~",
            requires_command_block: false
        },
        {
            level: 5,
            id: "item_void",
            name: "Offhand Void Eraser",
            type: "grief",
            desc: "Clears their active offhand slot instantly, removing shields or weapons in the heat of combat.",
            java_modern: "/item replace entity [TARGET] weapon.offhand with minecraft:air",
            java_legacy: "/replaceitem entity [TARGET] slot.weapon.offhand 0 minecraft:air",
            bedrock: "/replaceitem entity [TARGET] slot.weapon.offhand 0 air",
            requires_command_block: false
        },
        {
            level: 5,
            id: "fake_crash",
            name: "Fake Connection Exception",
            type: "harmless",
            desc: "Sends a dark-red system message mimicking a severe Java IOException server connection reset.",
            java_modern: `/tellraw [TARGET] {"text":"Internal Exception: java.io.IOException: An existing connection was forcibly closed by the remote host.","color":"dark_red"}`,
            java_legacy: `/tellraw [TARGET] {"text":"Internal Exception: java.io.IOException: An existing connection was forcibly closed by the remote host.","color":"dark_red"}`,
            bedrock: `/tellraw [TARGET] {"rawtext":[{"text":"§4Internal Exception: java.io.IOException: Connection reset by peer."}]}`,
            requires_command_block: false
        },
        {
            level: 5,
            id: "portal_spill",
            name: "Nether Portal Hallucinations",
            type: "harmless",
            desc: "Plays continuous dark nether portal loop portals inside their ears, driving them to find the ghost portal.",
            java_modern: "/playsound minecraft:block.portal.ambient master [TARGET] ~ ~ ~ 0.5 1",
            java_legacy: "/playsound block.portal.ambient master [TARGET] ~ ~ ~ 0.5 1",
            bedrock: "/playsound portal.portal [TARGET] ~ ~ ~ 0.5 1",
            requires_command_block: false
        },
        {
            level: 5,
            id: "sudden_void",
            name: "End Void Fall Simulator",
            type: "harmless",
            desc: "Applies a split-second darkness effect and plays a massive falling impact rush to mimic dropping into the End void.",
            java_modern: "/effect give [TARGET] minecraft:darkness 1 0 true\n/playsound minecraft:entity.player.hurt_on_fire master [TARGET] ~ ~ ~ 0.5 1.5",
            java_legacy: "/effect give [TARGET] darkness 1 0 true\n/playsound entity.player.hurt_on_fire master [TARGET] ~ ~ ~ 0.5 1.5",
            bedrock: "/effect [TARGET] darkness 1 0\n/playsound damage.fallbig [TARGET] ~ ~ ~ 0.5 1.5",
            requires_command_block: true
        }
    ],


    // 6. Multi-Block "Command Block Chains" Troll Configurations & Alignment Guide Mappings
    trolls_chains: [
        {
            id: "chain_antigravity",
            name: "⛓️ Anti-Gravity Zone Sensor",
            desc: "Constructs a repeating proximity block chain that traps the target in a zero-gravity levitating vortex with flap sounds.",
            blocks: [
                {
                    step: 1,
                    type: "Repeat",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] run particle minecraft:cloud ~ ~1 ~ 0.5 0.5 0.5 0.05 10"
                },
                {
                    step: 2,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/effect give [TARGET] minecraft:levitation 1 4 true"
                },
                {
                    step: 3,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/playsound minecraft:entity.phantom.flap ambient [TARGET] ~ ~ ~ 0.6 1"
                }
            ]
        },
        {
            id: "chain_obsidian_coffin",
            name: "⛓️ Step-on-Grass Coffin Trap",
            desc: "Deploys a repeating trigger block chain that instantly traps the victim inside a solid Obsidian block coffin the second they step on grass.",
            blocks: [
                {
                    step: 1,
                    type: "Repeat",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] if block ~ ~-1 ~ minecraft:grass_block run fill ~-1 ~-1 ~-1 ~1 ~2 ~1 minecraft:obsidian outline"
                },
                {
                    step: 2,
                    type: "Chain",
                    cond: "Conditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] run fill ~ ~-1 ~ ~ ~ ~ minecraft:water"
                },
                {
                    step: 3,
                    type: "Chain",
                    cond: "Conditional",
                    active: "Always Active",
                    cmd: "/tellraw @a {\"text\":\"[TARGET] stepped on grass and was entombed!\",\"color\":\"red\"}"
                }
            ]
        },
        {
            id: "chain_stalker_creeper",
            name: "⛓️ Invisible Creeper Stalker",
            desc: "Sets up an active repeating block chain that keeps tele-transporting a silent invisible Creeper 2 blocks directly behind the player's head.",
            blocks: [
                {
                    step: 1,
                    type: "Repeat",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] run tp @e[type=minecraft:creeper,tag=stalker,limit=1] ^ ^ ^-2"
                },
                {
                    step: 2,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] run playsound minecraft:entity.creeper.primed ambient @p ~ ~ ~ 0.3 1"
                },
                {
                    step: 3,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute as [TARGET] run particle minecraft:smoke ~ ~1 ~ 0.2 0.2 0.2 0.02 5"
                }
            ]
        },
        {
            id: "chain_magnetic_void",
            name: "⛓️ Drop Item Magnetic Void",
            desc: "Lays down an active repeating block chain that pulls dropped weapons directly into the sky and vaporizes them instantly.",
            blocks: [
                {
                    step: 1,
                    type: "Repeat",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] run tp @e[type=minecraft:item,distance=..6] ~ ~5 ~"
                },
                {
                    step: 2,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] run particle minecraft:portal ~ ~1 ~ 0.5 0.5 0.5 0.1 20"
                },
                {
                    step: 3,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] run kill @e[type=minecraft:item,distance=..6]"
                }
            ]
        },
        {
            id: "chain_warden_heartbeat",
            name: "⛓️ Warden Heartbeat Hunt",
            desc: "Simulates the Warden hunting them down: pulse low darkness visual effects, emit loud thumping heartbeat plays, emit kinetic sonic blasts, and end with an echoing warden scream.",
            blocks: [
                {
                    step: 1,
                    type: "Repeat",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/playsound minecraft:entity.warden.heartbeat master [TARGET] ~ ~ ~ 1.2 0.8"
                },
                {
                    step: 2,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/effect give [TARGET] minecraft:darkness 4 0 true"
                },
                {
                    step: 3,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] run particle minecraft:sonic_boom ~ ~1 ~ 0 0 0 0 1"
                },
                {
                    step: 4,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] run playsound minecraft:entity.warden.roar master [TARGET] ~ ~ ~ 0.8 0.6"
                }
            ]
        },
        {
            id: "chain_lightning_magnet",
            name: "⛓️ Sprinting Thunder Magnet",
            desc: "Detonates silent thunder bolts directly behind them whenever they run, spawning glowing sparks and giving a dynamic kinetic speed buff.",
            blocks: [
                {
                    step: 1,
                    type: "Repeat",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] run summon minecraft:lightning_bolt ^ ^ ^-4 {Silent:1b}"
                },
                {
                    step: 2,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] run particle minecraft:electric_spark ~ ~1 ~ 0.4 0.4 0.4 0.1 12"
                },
                {
                    step: 3,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/playsound minecraft:entity.lightning_bolt.thunder master [TARGET] ~ ~ ~ 0.5 1"
                },
                {
                    step: 4,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/effect give [TARGET] minecraft:speed 2 4 true"
                }
            ]
        },
        {
            id: "chain_glitch_tp",
            name: "⛓️ Packet Loss Glitch Drift",
            desc: "Rotates and slips their position slightly back whenever they trigger the loop, emitting void enderman portals and fake console sync logs.",
            blocks: [
                {
                    step: 1,
                    type: "Repeat",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] run tp [TARGET] ~ ~ ~ ~3 ~"
                },
                {
                    step: 2,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/playsound minecraft:entity.enderman.teleport master [TARGET] ~ ~ ~ 0.3 1.4"
                },
                {
                    step: 3,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] run particle minecraft:portal ~ ~1 ~ 0.3 0.3 0.3 0.05 6"
                },
                {
                    step: 4,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/tellraw [TARGET] {\"text\":\"[System] Warning: High packet loss detected. Synced coordinate drift.\",\"color\":\"gray\"}"
                }
            ]
        },
        {
            id: "chain_floor_decay",
            name: "⛓️ Stepping-Stone Floor Decay",
            desc: "Causes standard Stone blocks directly beneath their feet to decay into Gravel blocks, play thud block hit warnings, then crumble to Sand and spawn heavy sand dust particles.",
            blocks: [
                {
                    step: 1,
                    type: "Repeat",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] if block ~ ~-1 ~ minecraft:stone run setblock ~ ~-1 ~ minecraft:gravel"
                },
                {
                    step: 2,
                    type: "Chain",
                    cond: "Conditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] run playsound minecraft:block.gravel.hit master [TARGET] ~ ~-1 ~ 1 0.8"
                },
                {
                    step: 3,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] if block ~ ~-2 ~ minecraft:grass_block run setblock ~ ~-2 ~ minecraft:sand"
                },
                {
                    step: 4,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] run particle minecraft:dust 0.6 0.5 0.4 1 ~ ~-1 ~ 0.3 0.1 0.3 0.01 10"
                }
            ]
        },
        {
            id: "chain_herobrine_ghost",
            name: "⛓️ Herobrine Stalker Sighting",
            desc: "Constructs a repeating chain that spawns a silent, invulnerable Herobrine figure (armor stand with custom skull) behind them. Rings ambient cave notes, emits dark soot, and safely kills it when they turn around.",
            blocks: [
                {
                    step: 1,
                    type: "Repeat",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] unless entity @e[tag=herobrine,distance=..15] run summon minecraft:armor_stand ^ ^1 ^-4 {Tags:[\"herobrine\"],Invisible:1b,ArmorItems:[{},{},{},{id:\"minecraft:player_head\",Count:1b,tag:{SkullOwner:\"MHF_Herobrine\"}}],DisabledSlots:2039583}"
                },
                {
                    step: 2,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] as @e[tag=herobrine] run tp @s ^ ^1 ^-4"
                },
                {
                    step: 3,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] if entity @e[tag=herobrine,age=..20] run playsound minecraft:ambient.cave master [TARGET] ~ ~ ~ 1 0.7"
                },
                {
                    step: 4,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at @e[tag=herobrine] run particle minecraft:large_smoke ~ ~1.5 ~ 0.1 0.1 0.1 0.01 3"
                },
                {
                    step: 5,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] run kill @e[tag=herobrine,distance=..2.2]"
                }
            ]
        },
        {
            id: "chain_potato_clutter",
            name: "⛓️ Poisonous Potato Clutterer",
            desc: "Constantly spams poisonous potatoes into their inventory slots: forces their offhand item out of existence, plays squishing sounds, feeds hotbar slots, and releases toxic green particles.",
            blocks: [
                {
                    step: 1,
                    type: "Repeat",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/item replace entity [TARGET] weapon.offhand with minecraft:poisonous_potato"
                },
                {
                    step: 2,
                    type: "Chain",
                    cond: "Conditional",
                    active: "Always Active",
                    cmd: "/playsound minecraft:entity.slime.squish master [TARGET] ~ ~ ~ 0.8 1"
                },
                {
                    step: 3,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/give [TARGET] minecraft:poisonous_potato 1"
                },
                {
                    step: 4,
                    type: "Chain",
                    cond: "Unconditional",
                    active: "Always Active",
                    cmd: "/execute at [TARGET] run particle minecraft:spore_blossom_air ~ ~1 ~ 0.4 0.4 0.4 0 5"
                }
            ]
        }
    ],
    effects: [
        { id: "minecraft:speed", name: "Speed", numeric_id: 1, icon: "🧪" },
        { id: "minecraft:slowness", name: "Slowness", numeric_id: 2, icon: "🧪" },
        { id: "minecraft:haste", name: "Haste", numeric_id: 3, icon: "🧪" },
        { id: "minecraft:mining_fatigue", name: "Mining Fatigue", numeric_id: 4, icon: "🧪" },
        { id: "minecraft:strength", name: "Strength", numeric_id: 5, icon: "🧪" },
        { id: "minecraft:instant_health", name: "Instant Health", numeric_id: 6, icon: "🧪" },
        { id: "minecraft:instant_damage", name: "Instant Damage", numeric_id: 7, icon: "🧪" },
        { id: "minecraft:jump_boost", name: "Jump Boost", numeric_id: 8, icon: "🧪" },
        { id: "minecraft:nausea", name: "Nausea", numeric_id: 9, icon: "🧪" },
        { id: "minecraft:regeneration", name: "Regeneration", numeric_id: 10, icon: "🧪" },
        { id: "minecraft:resistance", name: "Resistance", numeric_id: 11, icon: "🧪" },
        { id: "minecraft:fire_resistance", name: "Fire Resistance", numeric_id: 12, icon: "🧪" },
        { id: "minecraft:water_breathing", name: "Water Breathing", numeric_id: 13, icon: "🧪" },
        { id: "minecraft:invisibility", name: "Invisibility", numeric_id: 14, icon: "🧪" },
        { id: "minecraft:blindness", name: "Blindness", numeric_id: 15, icon: "🧪" },
        { id: "minecraft:night_vision", name: "Night Vision", numeric_id: 16, icon: "🧪" },
        { id: "minecraft:hunger", name: "Hunger", numeric_id: 17, icon: "🧪" },
        { id: "minecraft:weakness", name: "Weakness", numeric_id: 18, icon: "🧪" },
        { id: "minecraft:poison", name: "Poison", numeric_id: 19, icon: "🧪" },
        { id: "minecraft:wither", name: "Wither", numeric_id: 20, icon: "🧪" },
        { id: "minecraft:health_boost", name: "Health Boost", numeric_id: 21, icon: "🧪" },
        { id: "minecraft:absorption", name: "Absorption", numeric_id: 22, icon: "🧪" },
        { id: "minecraft:saturation", name: "Saturation", numeric_id: 23, icon: "🧪" },
        { id: "minecraft:glowing", name: "Glowing", numeric_id: 24, icon: "🧪" },
        { id: "minecraft:levitation", name: "Levitation", numeric_id: 25, icon: "🧪" },
        { id: "minecraft:luck", name: "Luck", numeric_id: 26, icon: "🧪" },
        { id: "minecraft:bad_luck", name: "Bad Luck", numeric_id: 27, icon: "🧪" },
        { id: "minecraft:slow_falling", name: "Slow Falling", numeric_id: 28, icon: "🧪" },
        { id: "minecraft:conduit_power", name: "Conduit Power", numeric_id: 29, icon: "🧪" },
        { id: "minecraft:dolphins_grace", name: "Dolphin's Grace", numeric_id: 30, icon: "🧪" },
        { id: "minecraft:bad_omen", name: "Bad Omen", numeric_id: 31, icon: "🧪" },
        { id: "minecraft:hero_of_the_village", name: "Hero of the Village", numeric_id: 32, icon: "🧪" },
        { id: "minecraft:darkness", name: "Darkness", numeric_id: 33, icon: "🧪" }
    ],
    particles: [
        { id: "minecraft:ambient_entity_effect", name: "Ambient Entity Effect", icon: "✨" },
        { id: "minecraft:angry_villager", name: "Angry Villager", icon: "✨" },
        { id: "minecraft:ash", name: "Ash", icon: "✨" },
        { id: "minecraft:bubble", name: "Bubble", icon: "✨" },
        { id: "minecraft:cherry_leaves", name: "Cherry Leaves", icon: "✨" },
        { id: "minecraft:cloud", name: "Cloud Dust", icon: "✨" },
        { id: "minecraft:compost", name: "Compost", icon: "✨" },
        { id: "minecraft:crimson_spore", name: "Crimson Spore", icon: "✨" },
        { id: "minecraft:damage_indicator", name: "Damage Indicator", icon: "✨" },
        { id: "minecraft:dolphin", name: "Dolphin", icon: "✨" },
        { id: "minecraft:dragon_breath", name: "Dragon's Breath", icon: "✨" },
        { id: "minecraft:dripping_dripstone_lava", name: "Dripping Lava", icon: "✨" },
        { id: "minecraft:dripping_dripstone_water", name: "Dripping Water", icon: "✨" },
        { id: "minecraft:dripping_lava", name: "Dripping Lava Stream", icon: "✨" },
        { id: "minecraft:dripping_water", name: "Dripping Water Stream", icon: "✨" },
        { id: "minecraft:dust", name: "Dust", icon: "✨" },
        { id: "minecraft:electric_spark", name: "Electric Spark", icon: "✨" },
        { id: "minecraft:enchanted_hit", name: "Enchanted Hit", icon: "✨" },
        { id: "minecraft:end_rod", name: "End Rod", icon: "✨" },
        { id: "minecraft:entity_effect", name: "Entity Effect", icon: "✨" },
        { id: "minecraft:explosion", name: "Explosion", icon: "✨" },
        { id: "minecraft:explosion_emitter", name: "Huge Explosion", icon: "✨" },
        { id: "minecraft:falling_dripstone_lava", name: "Falling Lava", icon: "✨" },
        { id: "minecraft:falling_dripstone_water", name: "Falling Water", icon: "✨" },
        { id: "minecraft:falling_dust", name: "Falling Dust", icon: "✨" },
        { id: "minecraft:falling_honey", name: "Falling Honey", icon: "✨" },
        { id: "minecraft:falling_lava", name: "Falling Lava Stream", icon: "✨" },
        { id: "minecraft:falling_nectar", name: "Falling Nectar", icon: "✨" },
        { id: "minecraft:falling_spore_blossom", name: "Falling Spore Blossom", icon: "✨" },
        { id: "minecraft:falling_water", name: "Falling Water Stream", icon: "✨" },
        { id: "minecraft:firework", name: "Firework Spark", icon: "✨" },
        { id: "minecraft:fishing", name: "Fishing Line", icon: "✨" },
        { id: "minecraft:flame", name: "Fire Flame", icon: "✨" },
        { id: "minecraft:glow", name: "Glow", icon: "✨" },
        { id: "minecraft:glow_squid_ink", name: "Glow Squid Ink", icon: "✨" },
        { id: "minecraft:happy_villager", name: "Happy Villager", icon: "✨" },
        { id: "minecraft:heart", name: "Red Hearts", icon: "✨" },
        { id: "minecraft:instant_effect", name: "Instant Effect", icon: "✨" },
        { id: "minecraft:item_slime", name: "Slime Bits", icon: "✨" },
        { id: "minecraft:item_snowball", name: "Snowball Bits", icon: "✨" },
        { id: "minecraft:large_smoke", name: "Large Smoke", icon: "✨" },
        { id: "minecraft:lava", name: "Lava Spark", icon: "✨" },
        { id: "minecraft:mycelium", name: "Mycelium spores", icon: "✨" },
        { id: "minecraft:nautilus", name: "Nautilus Spores", icon: "✨" },
        { id: "minecraft:note", name: "Music Note", icon: "✨" },
        { id: "minecraft:poof", name: "Poof Dust", icon: "✨" },
        { id: "minecraft:portal", name: "Portal Particle", icon: "✨" },
        { id: "minecraft:rain", name: "Rain Splashes", icon: "✨" },
        { id: "minecraft:sculk_charge", name: "Sculk Charge", icon: "✨" },
        { id: "minecraft:sculk_charge_pop", name: "Sculk Charge Pop", icon: "✨" },
        { id: "minecraft:sculk_soul", name: "Sculk Soul", icon: "✨" },
        { id: "minecraft:shriek", name: "Sonic Shriek", icon: "✨" },
        { id: "minecraft:small_flame", name: "Small Flame", icon: "✨" },
        { id: "minecraft:snowflake", name: "Snowflake", icon: "✨" },
        { id: "minecraft:sonic_boom", name: "Sonic Boom Wave", icon: "✨" },
        { id: "minecraft:soul", name: "Soul Sparkle", icon: "✨" },
        { id: "minecraft:soul_fire_flame", name: "Soul Fire Flame", icon: "✨" },
        { id: "minecraft:spit", name: "Llama Spit", icon: "✨" },
        { id: "minecraft:spore_blossom_air", name: "Spore Blossom Air", icon: "✨" },
        { id: "minecraft:squid_ink", name: "Squid Ink", icon: "✨" },
        { id: "minecraft:sweep_attack", name: "Sword Sweep Attack", icon: "✨" },
        { id: "minecraft:totem_of_undying", name: "Totem Sparkles", icon: "✨" },
        { id: "minecraft:underwater", name: "Underwater Bubbles", icon: "✨" },
        { id: "minecraft:warped_spore", name: "Warped Spore", icon: "✨" },
        { id: "minecraft:wax_off", name: "Wax Off", icon: "✨" },
        { id: "minecraft:wax_on", name: "Wax On", icon: "✨" },
        { id: "minecraft:white_ash", name: "White Ash", icon: "✨" },
        { id: "minecraft:witch", name: "Witch Magic Sparkles", icon: "✨" }
    ],
    sounds: [
        { id: "minecraft:entity.creeper.primed", name: "Creeper Primed (Fuse)", icon: "🔊" },
        { id: "minecraft:ambient.cave", name: "Cave Ambient Spook", icon: "🔊" },
        { id: "minecraft:block.anvil.land", name: "Anvil Impact", icon: "🔊" },
        { id: "minecraft:entity.ghast.warn", name: "Ghast Scream", icon: "🔊" },
        { id: "minecraft:entity.lightning_bolt.thunder", name: "Thunder Bolt", icon: "🔊" },
        { id: "minecraft:entity.ender_dragon.death", name: "Ender Dragon Death", icon: "🔊" },
        { id: "minecraft:entity.warden.heartbeat", name: "Warden Heartbeat", icon: "🔊" },
        { id: "minecraft:entity.phantom.swoop", name: "Phantom Swoop", icon: "🔊" },
        { id: "minecraft:entity.witch.ambient", name: "Witch Ambient Giggle", icon: "🔊" },
        { id: "minecraft:entity.enderman.teleport", name: "Enderman Teleport", icon: "🔊" },
        { id: "minecraft:entity.enderman.scream", name: "Enderman Angry Scream", icon: "🔊" },
        { id: "minecraft:entity.zombie.ambient", name: "Zombie Groan", icon: "🔊" },
        { id: "minecraft:entity.skeleton.ambient", name: "Skeleton Bone Rattle", icon: "🔊" },
        { id: "minecraft:entity.wolf.growl", name: "Wolf Growl", icon: "🔊" },
        { id: "minecraft:entity.warden.sonic_boom", name: "Warden Sonic Boom Charge", icon: "🔊" },
        { id: "minecraft:block.tnt.primed", name: "TNT Primed Hiss", icon: "🔊" },
        { id: "minecraft:entity.player.hurt", name: "Player Hurt Sound", icon: "🔊" }
    ],
    execute_slots: [
        { id: "weapon.mainhand", name: "Main Hand (Weapon)", icon: "⚔️" },
        { id: "weapon.offhand", name: "Offhand Slot", icon: "🛡️" },
        { id: "armor.head", name: "Helmet Slot", icon: "🪖" },
        { id: "armor.chest", name: "Chestplate Slot", icon: "👕" },
        { id: "armor.legs", name: "Leggings Slot", icon: "👖" },
        { id: "armor.feet", name: "Boots Slot", icon: "🥾" }
    ]
};

// Expose backward-compatible aliases for app / generator dropdown layers
MC_DATA.all_items = Object.values(MC_DATA.items).flat();
MC_DATA.execute_items = MC_DATA.all_items;
MC_DATA.execute_blocks = MC_DATA.items.blocks;
MC_DATA.execute_effects = MC_DATA.effects;
MC_DATA.execute_particles = MC_DATA.particles;
MC_DATA.execute_sounds = MC_DATA.sounds;
