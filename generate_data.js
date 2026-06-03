const fs = require('fs');
const mcData = require('minecraft-data')('1.20.2');

// Load current data.js content to preserve enchantments, effects, particles, sounds, trolls, trolls_chains, etc.
const dataContent = fs.readFileSync('data.js', 'utf8');

const defaultBiomes = [
    { id: "minecraft:plains", name: "Plains", icon: "🌱", desc: "Grassland biome with open views, passive mobs, and occasional oak/birch trees." },
    { id: "minecraft:desert", name: "Desert", icon: "🌵", desc: "Dry, sandy biome with cacti, dead bushes, sandstone structures, and husk spawn overrides." },
    { id: "minecraft:forest", name: "Forest", icon: "🌳", desc: "Dense tree biome featuring oak and birch trees, wolves, and mushrooms." },
    { id: "minecraft:taiga", name: "Taiga", icon: "🌲", desc: "Cold biome with spruce trees, sweet berry bushes, foxes, and wolves." },
    { id: "minecraft:snowy_plains", name: "Snowy Plains", icon: "❄️", desc: "Vast snowy fields spawning strays, polar bears, and rabbits." },
    { id: "minecraft:swamp", name: "Swamp", icon: "🐊", desc: "Murky waters spawning slime at night, boggy trees, blue orchids, and witch huts." },
    { id: "minecraft:jungle", name: "Jungle", icon: "🌴", desc: "Lush tropical jungle with towering trees, cocoa beans, ocelots, parrots, and pandas." },
    { id: "minecraft:savanna", name: "Savanna", icon: "🦁", desc: "Dry grassland featuring acacia trees, llamas, horses, and villages." },
    { id: "minecraft:badlands", name: "Badlands", icon: "🏜️", desc: "Colorful terracotta mounds with extra gold ore generation and mineshafts." },
    { id: "minecraft:meadow", name: "Meadow", icon: "🌸", desc: "Grassy plateau filled with flowers, sheep, and bees." },
    { id: "minecraft:grove", name: "Grove", icon: "❄️", desc: "Spruce forest covered in snow, wolves, and rabbits." },
    { id: "minecraft:snowy_slopes", name: "Snowy Slopes", icon: "🏔️", desc: "Slopes covered in snow and ice, spawning goats." },
    { id: "minecraft:jagged_peaks", name: "Jagged Peaks", icon: "🏔️", desc: "Tall mountains capped with snow, stone, and goats." },
    { id: "minecraft:frozen_peaks", name: "Frozen Peaks", icon: "🏔️", desc: "Ice-covered mountain peaks spawning goats." },
    { id: "minecraft:stony_peaks", name: "Stony Peaks", icon: "⛰️", desc: "Mountain tops containing stone, calcite, and no snow." },
    { id: "minecraft:cherry_grove", name: "Cherry Grove", icon: "🌸", desc: "Mountain biome covered in pink cherry blossom petals and sheep." },
    { id: "minecraft:birch_forest", name: "Birch Forest", icon: "🌳", desc: "Pure birch trees, flowers, and peaceful animals." },
    { id: "minecraft:dark_forest", name: "Dark Forest", icon: "🍄", desc: "Dense dark oak forest spawning hostile mobs even during daytime, containing Woodland Mansions." },
    { id: "minecraft:mangrove_swamp", name: "Mangrove Swamp", icon: "🐊", desc: "Warm swamp featuring mangrove trees, mud blocks, and frogs." },
    { id: "minecraft:snowy_taiga", name: "Snowy Taiga", icon: "❄️", desc: "Cold spruce forest covered in snow." },
    { id: "minecraft:old_growth_pine_taiga", name: "Old Growth Pine Taiga", icon: "🌲", desc: "Spruce biome with giant pine trees, podzol, and mossy cobblestone." },
    { id: "minecraft:old_growth_birch_forest", name: "Old Growth Birch Forest", icon: "🌳", desc: "Forest with tall birch trees." },
    { id: "minecraft:ocean", name: "Ocean", icon: "🌊", desc: "Standard ocean containing kelp, fish, and dolphins." },
    { id: "minecraft:warm_ocean", name: "Warm Ocean", icon: "🐠", desc: "Shallow, warm water biome with coral reefs and sea pickles." },
    { id: "minecraft:lukewarm_ocean", name: "Lukewarm Ocean", icon: "🐬", desc: "Deep, greenish waters with seagrass and fish." },
    { id: "minecraft:cold_ocean", name: "Cold Ocean", icon: "🐟", desc: "Deep, cold waters with cod and salmon." },
    { id: "minecraft:frozen_ocean", name: "Frozen Ocean", icon: "🧊", desc: "Ice sheet covered ocean spawning polar bears and strays." },
    { id: "minecraft:mushroom_fields", name: "Mushroom Fields", icon: "🍄", desc: "Rare biome covered in mycelium, giant mushrooms, and mooshrooms. No hostile mobs can spawn here." },
    { id: "minecraft:deep_dark", name: "Deep Dark", icon: "👁️", desc: "Deep cavern biome filled with sculk blocks, sculk sensors, and the Warden." },
    { id: "minecraft:nether_wastes", name: "Nether Wastes", icon: "🔥", desc: "The primary Nether biome of netherrack, magma blocks, ghasts, and piglins." },
    { id: "minecraft:soul_sand_valley", name: "Soul Sand Valley", icon: "💀", desc: "Nether valley covered in soul sand, soul soil, basalt pillars, skeletons, and ghasts." },
    { id: "minecraft:crimson_forest", name: "Crimson Forest", icon: "🍄", desc: "Red Nether forest containing crimson fungi, hoglins, and piglins." },
    { id: "minecraft:warped_forest", name: "Warped Forest", icon: "🍄", desc: "Blue Nether forest containing warped fungi, endermen, and no hostile piglins." },
    { id: "minecraft:basalt_deltas", name: "Basalt Deltas", icon: "🌋", desc: "Volcanic Nether biome filled with basalt, blackstone, ash particles, and magma cubes." },
    { id: "minecraft:the_end", name: "The End", icon: "🌌", desc: "The barren dimension of end stone, obsidian towers, endermen, and the Ender Dragon." }
];

const defaultStructures = [
    { id: "minecraft:ancient_city", name: "Ancient City", icon: "🏛️", desc: "Mammoth underground ruins in the Deep Dark containing sculk shriekers and high-loot chest rooms." },
    { id: "minecraft:bastion_remnant", name: "Bastion Remnant", icon: "🏰", desc: "Large obsidian and blackstone castles in the Nether guarded by Piglin Brutes." },
    { id: "minecraft:buried_treasure", name: "Buried Treasure", icon: "🪙", desc: "Hidden chests containing Heart of the Sea and gold, located on beaches." },
    { id: "minecraft:desert_pyramid", name: "Desert Pyramid", icon: "🏜️", desc: "Sandstone temple containing a treasure chamber with a TNT trap." },
    { id: "minecraft:end_city", name: "End City", icon: "🏰", desc: "Tall towers in the outer islands of the End containing Shulkers, Elytras, and dragon heads." },
    { id: "minecraft:fortress", name: "Nether Fortress", icon: "🌉", desc: "Nether bridge network filled with Blaze spawners and Wither Skeletons." },
    { id: "minecraft:igloo", name: "Igloo", icon: "❄️", desc: "Snow huts containing a bed and occasionally a basement with a zombie cure lab." },
    { id: "minecraft:jungle_pyramid", name: "Jungle Pyramid", icon: "🏺", desc: "Mossy cobblestone temple containing tripwire traps and puzzle chests." },
    { id: "minecraft:mansion", name: "Woodland Mansion", icon: "🏠", desc: "Large woodland estate filled with Evokers, Vindicators, and hidden rooms." },
    { id: "minecraft:mineshaft", name: "Abandoned Mineshaft", icon: "🕸️", desc: "Abandoned mine tunnels containing rails, cave spider spawners, and loot chest minecarts." },
    { id: "minecraft:monument", name: "Ocean Monument", icon: "🔱", desc: "Submerged ocean temple filled with Guardians, Elder Guardians, and gold blocks." },
    { id: "minecraft:nether_fossil", name: "Nether Fossil", icon: "🦴", desc: "Skeletal bone structures found throughout Soul Sand Valleys in the Nether." },
    { id: "minecraft:ocean_ruin", name: "Ocean Ruin", icon: "🌊", desc: "Submerged stone or sandstone structures containing Drowned and sniffer eggs in suspicious sand." },
    { id: "minecraft:pillager_outpost", name: "Pillager Outpost", icon: "🏹", desc: "Cobblestone tower manned by Pillagers, containing an iron cage and loot chest." },
    { id: "minecraft:ruined_portal", name: "Ruined Portal", icon: "🔥", desc: "Damaged obsidian portals surrounded by netherrack and magma blocks in both dimensions." },
    { id: "minecraft:shipwreck", name: "Shipwreck", icon: "⛵", desc: "Sunken oak or spruce vessels containing map chests, treasure chests, and supply chests." },
    { id: "minecraft:stronghold", name: "Stronghold", icon: "🗝️", desc: "Underground stone brick fortresses containing libraries, chest rooms, and the End Portal." },
    { id: "minecraft:swamp_hut", name: "Swamp Hut (Witch Hut)", icon: "🧹", desc: "Raised wooden huts occupied by a Witch and a black Cat." },
    { id: "minecraft:trail_ruins", name: "Trail Ruins", icon: "🧱", desc: "Partially buried ancient structures composed of gravel, terracotta, and suspicious clay." },
    { id: "minecraft:village", name: "Village", icon: "🏡", desc: "Settlement containing houses, job blocks, Villagers, and Iron Golems. Available in plains, desert, savanna, taiga, and snowy plains." }
];

const defaultCommands = [
    { id: "/give", name: "/give", icon: "📜", desc: "Grants specific items with custom NBT / components to players.", meta: "/give <player> <item> [count]" },
    { id: "/summon", name: "/summon", icon: "📜", desc: "Spawns a custom living mob or object at specified coordinates.", meta: "/summon <entity> [pos] [nbt]" },
    { id: "/execute", name: "/execute", icon: "📜", desc: "Conditional compiler that executes commands on behalf of other entities or under environmental tests.", meta: "/execute <subcommands> run <command>" },
    { id: "/effect", name: "/effect", icon: "📜", desc: "Modifies active potion effects and amplifiers on players or mobs.", meta: "/effect <give|clear> <player> <effect> [seconds] [amplifier]" },
    { id: "/tp", name: "/tp", icon: "📜", desc: "Teleports players or entities to coordinates or another target.", meta: "/tp [target] <destination>" },
    { id: "/setblock", name: "/setblock", icon: "📜", desc: "Changes a single block at specified coordinates to another block type.", meta: "/setblock <pos> <block> [destroy|keep|replace]" },
    { id: "/fill", name: "/fill", icon: "📜", desc: "Fills a cubic region of blocks with a specified block type.", meta: "/fill <from> <to> <block> [replace|destroy|keep]" },
    { id: "/gamerule", name: "/gamerule", icon: "📜", desc: "Toggles global server configuration parameters like daylight cycle, mob griefing, and inventory keeping.", meta: "/gamerule <rule> [value]" },
    { id: "/kill", name: "/kill", icon: "📜", desc: "Instantly inflicts lethal damage to players or selected living mobs.", meta: "/kill [target]" },
    { id: "/gamemode", name: "/gamemode", icon: "📜", desc: "Sets the target player's gameplay interaction mode.", meta: "/gamemode <survival|creative|adventure|spectator> [player]" },
    { id: "/attribute", name: "/attribute", icon: "📜", desc: "Gets or modifies attribute modifiers (like base health or movement speed) of entities in real time.", meta: "/attribute <target> <attribute> <get|base|modifier> ..." },
    { id: "/clear", name: "/clear", icon: "📜", desc: "Empties items matching filters from target players' inventories.", meta: "/clear [player] [item] [maxCount]" },
    { id: "/difficulty", name: "/difficulty", icon: "📜", desc: "Modifies global combat challenge parameters and mob aggressiveness.", meta: "/difficulty <peaceful|easy|normal|hard>" },
    { id: "/enchant", name: "/enchant", icon: "📜", desc: "Applies compatible enchantments directly to the item held in the player's main hand.", meta: "/enchant <player> <enchantment> [level]" },
    { id: "/particle", name: "/particle", icon: "📜", desc: "Spawns custom cosmetic visual particles in the environment.", meta: "/particle <name> [pos] [speed] [count]" },
    { id: "/playsound", name: "/playsound", icon: "📜", desc: "Plays a sound effect to selected players from a coordinate source.", meta: "/playsound <sound> <source> <targets> [pos]" },
    { id: "/seed", name: "/seed", icon: "📜", desc: "Displays the world's generation integer seed in the chat console.", meta: "/seed" },
    { id: "/time", name: "/time", icon: "📜", desc: "Changes or queries the daylight time cycle of the current world.", meta: "/time <set|add|query> <value>" },
    { id: "/weather", name: "/weather", icon: "📜", desc: "Alters weather states of the world for a set time.", meta: "/weather <clear|rain|thunder> [duration]" },
    { id: "/xp", name: "/xp", icon: "📜", desc: "Grants or queries player experience points and levels.", meta: "/experience <add|set|query> <player> <amount> [points|levels]" }
];

let oldEnchantments = [];
let oldEffects = [];
let oldParticles = [];
let oldSounds = [];
let oldExecuteSlots = [];
let oldTrolls = [];
let oldTrollsChains = [];
let oldBiomes = [];
let oldStructures = [];
let oldCommands = [];

try {
    const mockObj = {};
    const evalEnv = `
        const window = {};
        ${dataContent}
        mockObj.MC_DATA = MC_DATA;
    `;
    eval(evalEnv);
    oldEnchantments = mockObj.MC_DATA.enchantments;
    oldEffects = mockObj.MC_DATA.effects;
    oldParticles = mockObj.MC_DATA.particles;
    oldSounds = mockObj.MC_DATA.sounds;
    oldExecuteSlots = mockObj.MC_DATA.execute_slots;
    oldTrolls = mockObj.MC_DATA.trolls;
    oldTrollsChains = mockObj.MC_DATA.trolls_chains;
    oldBiomes = mockObj.MC_DATA.biomes || defaultBiomes;
    oldStructures = mockObj.MC_DATA.structures || defaultStructures;
    oldCommands = mockObj.MC_DATA.commands || defaultCommands;
    console.log('Successfully parsed existing data arrays!');
    console.log('- Enchantments:', oldEnchantments ? oldEnchantments.length : 0);
    console.log('- Effects:', oldEffects ? oldEffects.length : 0);
    console.log('- Particles:', oldParticles ? oldParticles.length : 0);
    console.log('- Sounds:', oldSounds ? oldSounds.length : 0);
    console.log('- Trolls:', oldTrolls ? oldTrolls.length : 0);
    console.log('- Trolls Chains:', oldTrollsChains ? oldTrollsChains.length : 0);
    console.log('- Biomes:', oldBiomes ? oldBiomes.length : 0);
    console.log('- Structures:', oldStructures ? oldStructures.length : 0);
    console.log('- Commands:', oldCommands ? oldCommands.length : 0);
} catch (err) {
    console.error('Failed to parse existing data.js arrays, using fallback:', err);
    oldBiomes = defaultBiomes;
    oldStructures = defaultStructures;
    oldCommands = defaultCommands;
}

// 1. Process Mobs (Entities)
const excludedEntities = [
    'arrow', 'dragons_breath', 'egg', 'elder_guardian_ghost', 'end_crystal', 'ender_pearl',
    'evoker_fangs', 'experience_bottle', 'experience_orb', 'eye_of_ender', 'falling_block',
    'firework_rocket', 'fishing_bobber', 'glow_item_frame', 'interaction', 'item', 'item_frame',
    'leash_knot', 'lightning_bolt', 'llama_spit', 'marker', 'painting', 'potion', 'shulker_bullet',
    'small_fireball', 'snowball', 'spawner', 'spectral_arrow', 'trident', 'wither_skull',
    'fireball', 'dragon_fireball', 'area_effect_cloud', 'block_display', 'item_display', 'text_display',
    'chest_boat', 'command_block_minecart', 'chest_minecart', 'furnace_minecart', 'hopper_minecart',
    'tnt_minecart', 'spawner_minecart', 'boat', 'minecart', 'tnt', 'end_crystal', 'chest_boat',
    'armor_stand' // Exclude armor stand from AI mobs list
];

const validTypes = ['mob', 'living', 'animal', 'ambient', 'hostile', 'water_creature', 'passive'];

const newMobs = [];
mcData.entitiesArray.forEach(ent => {
    // Filter summonable living mobs
    if (!validTypes.includes(ent.type)) return;
    if (excludedEntities.includes(ent.name)) return;
    if (ent.name.includes('boat') || ent.name.includes('minecart')) return;

    let category = 'Passive';
    if (ent.category === 'Hostile mobs' || ent.type === 'hostile') category = 'Hostile';
    
    // Custom overrides for categories to match gameplay mechanics
    const neutralNames = [
        'enderman', 'zombified_piglin', 'piglin', 'polar_bear', 'bee', 'wolf', 
        'dolphin', 'goat', 'panda', 'llama', 'trader_llama', 'camel', 'sniffer'
    ];
    const utilityNames = ['iron_golem', 'snow_golem'];
    const bossNames = ['wither', 'ender_dragon'];
    
    if (bossNames.includes(ent.name)) {
        category = 'Boss';
    } else if (utilityNames.includes(ent.name)) {
        category = 'Utility';
    } else if (neutralNames.includes(ent.name)) {
        category = 'Neutral';
    }

    // Specially handled mobs in specials pane
    let special = null;
    if (ent.name === 'creeper') special = 'creeper';
    else if (ent.name === 'slime') special = 'slime';
    else if (ent.name === 'villager') special = 'villager';

    const mobObj = {
        id: `minecraft:${ent.name}`,
        name: ent.displayName,
        category: category
    };
    if (special) mobObj.special = special;

    newMobs.push(mobObj);
});

// Sort mobs by category, then name
newMobs.sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return a.name.localeCompare(b.name);
});

// 2. Process Items
const newWeapons = [];
const newHelmets = [];
const newChestplates = [];
const newLeggings = [];
const newBoots = [];
const newTools = [];
const newBlocks = [];
const newMisc = [];

// Get set of block names to check placeables
const blockNames = new Set(mcData.blocksArray.map(b => b.name));

mcData.itemsArray.forEach(item => {
    const name = item.name;
    const displayName = item.displayName;
    const id = `minecraft:${name}`;

    if (name === 'air') return; // skip air

    // Categorization rules
    if (name.endsWith('_helmet') || name === 'turtle_helmet') {
        newHelmets.push({ id, name: displayName });
    } else if (name.endsWith('_chestplate') || name === 'elytra') {
        newChestplates.push({ id, name: displayName });
    } else if (name.endsWith('_leggings')) {
        newLeggings.push({ id, name: displayName });
    } else if (name.endsWith('_boots')) {
        newBoots.push({ id, name: displayName });
    } else if (name.endsWith('_sword') || name === 'bow' || name === 'crossbow' || name === 'trident' || name === 'mace' || name === 'shield' || name === 'arrow' || name.endsWith('_arrow')) {
        newWeapons.push({ id, name: displayName });
    } else if (
        name.endsWith('_pickaxe') || 
        name.endsWith('_axe') || 
        name.endsWith('_shovel') || 
        name.endsWith('_hoe') || 
        name === 'shears' || 
        name === 'flint_and_steel' || 
        name === 'brush' || 
        name === 'spyglass' || 
        name === 'fishing_rod' || 
        name === 'lead' || 
        name === 'name_tag' || 
        name === 'saddle' || 
        name === 'compass' || 
        name === 'recovery_compass' || 
        name === 'clock' || 
        name === 'firework_rocket' ||
        name.endsWith('_bucket') || 
        name === 'bucket' || 
        name === 'carrot_on_a_stick' || 
        name === 'warped_fungus_on_a_stick' || 
        name === 'goat_horn'
    ) {
        newTools.push({ id, name: displayName });
    } else if (blockNames.has(name)) {
        newBlocks.push({ id, name: displayName });
    } else {
        newMisc.push({ id, name: displayName });
    }
});

// Sort helper
const sortByDisplayName = (a, b) => a.name.localeCompare(b.name);
newWeapons.sort(sortByDisplayName);
newHelmets.sort(sortByDisplayName);
newChestplates.sort(sortByDisplayName);
newLeggings.sort(sortByDisplayName);
newBoots.sort(sortByDisplayName);
newTools.sort(sortByDisplayName);
newBlocks.sort(sortByDisplayName);
newMisc.sort(sortByDisplayName);

console.log('Processed mobs:', newMobs.length);
console.log('Processed weapons:', newWeapons.length);
console.log('Processed helmets:', newHelmets.length);
console.log('Processed chestplates:', newChestplates.length);
console.log('Processed leggings:', newLeggings.length);
console.log('Processed boots:', newBoots.length);
console.log('Processed tools:', newTools.length);
console.log('Processed blocks:', newBlocks.length);
console.log('Processed misc:', newMisc.length);

// Generate JavaScript file content
let newContent = `/* ==========================================================================
   MineCommand Studio - Game Data (Unified & Complete Database)
   ========================================================================== */

// 1. High-Fidelity rendered block and item icons CDN Mappings
function getMobIconPath(mobId) {
    const cleanName = mobId.replace("minecraft:", "").toUpperCase();
    return \`https://cdn.jsdelivr.net/gh/Owen1212055/mc-assets@main/entity-assets/flat/\${cleanName}.png\`;
}

function getItemIconPath(itemId) {
    const cleanName = itemId.replace("minecraft:", "").toUpperCase();
    return \`https://cdn.jsdelivr.net/gh/Owen1212055/mc-assets@main/item-assets/\${cleanName}.png\`;
}

const MC_DATA = {
    // Dynamic Mobs List (Complete living entities)
    mobs: [
`;

newMobs.forEach((m, idx) => {
    const comma = idx === newMobs.length - 1 ? "" : ",";
    const specialStr = m.special ? `, special: "${m.special}"` : "";
    newContent += `        { id: "${m.id}", name: "${m.name}", category: "${m.category}"${specialStr}, get icon() { return getMobIconPath(this.id); } }${comma}\n`;
});

newContent += `    ],

    // Complete Categorized Items Database
    items: {
        weapons: [\n`;
newWeapons.forEach((w, idx) => {
    const comma = idx === newWeapons.length - 1 ? "" : ",";
    newContent += `            { id: "${w.id}", name: "${w.name}", get icon() { return getItemIconPath(this.id); } }${comma}\n`;
});

newContent += `        ],
        helmets: [\n`;
newHelmets.forEach((h, idx) => {
    const comma = idx === newHelmets.length - 1 ? "" : ",";
    newContent += `            { id: "${h.id}", name: "${h.name}", get icon() { return getItemIconPath(this.id); } }${comma}\n`;
});

newContent += `        ],
        chestplates: [\n`;
newChestplates.forEach((c, idx) => {
    const comma = idx === newChestplates.length - 1 ? "" : ",";
    newContent += `            { id: "${c.id}", name: "${c.name}", get icon() { return getItemIconPath(this.id); } }${comma}\n`;
});

newContent += `        ],
        leggings: [\n`;
newLeggings.forEach((l, idx) => {
    const comma = idx === newLeggings.length - 1 ? "" : ",";
    newContent += `            { id: "${l.id}", name: "${l.name}", get icon() { return getItemIconPath(this.id); } }${comma}\n`;
});

newContent += `        ],
        boots: [\n`;
newBoots.forEach((b, idx) => {
    const comma = idx === newBoots.length - 1 ? "" : ",";
    newContent += `            { id: "${b.id}", name: "${b.name}", get icon() { return getItemIconPath(this.id); } }${comma}\n`;
});

newContent += `        ],
        tools: [\n`;
newTools.forEach((t, idx) => {
    const comma = idx === newTools.length - 1 ? "" : ",";
    newContent += `            { id: "${t.id}", name: "${t.name}", get icon() { return getItemIconPath(this.id); } }${comma}\n`;
});

newContent += `        ],
        blocks: [\n`;
newBlocks.forEach((b, idx) => {
    const comma = idx === newBlocks.length - 1 ? "" : ",";
    newContent += `            { id: "${b.id}", name: "${b.name}", get icon() { return getItemIconPath(this.id); } }${comma}\n`;
});

newContent += `        ],
        misc: [\n`;
newMisc.forEach((m, idx) => {
    const comma = idx === newMisc.length - 1 ? "" : ",";
    newContent += `            { id: "${m.id}", name: "${m.name}", get icon() { return getItemIconPath(this.id); } }${comma}\n`;
});

newContent += `        ]
    },

    // Preserved Enchantments List
    enchantments: ${JSON.stringify(oldEnchantments, null, 8)},

    // Preserved Trolls List
    trolls: ${JSON.stringify(oldTrolls, null, 8)},

    // Preserved Trolls Chains List
    trolls_chains: ${JSON.stringify(oldTrollsChains, null, 8)},

    // Preserved Effects List
    effects: ${JSON.stringify(oldEffects, null, 8)},

    // Preserved Particles List
    particles: ${JSON.stringify(oldParticles, null, 8)},

    // Preserved Sounds List
    sounds: ${JSON.stringify(oldSounds, null, 8)},

    // Preserved Execute Slots List
    execute_slots: ${JSON.stringify(oldExecuteSlots, null, 8)},

    // Preserved Biomes List
    biomes: ${JSON.stringify(oldBiomes, null, 8)},

    // Preserved Structures List
    structures: ${JSON.stringify(oldStructures, null, 8)},

    // Preserved Commands List
    commands: ${JSON.stringify(oldCommands, null, 8)}
};

// Expose backward-compatible aliases for app / generator dropdown layers
MC_DATA.all_items = Object.values(MC_DATA.items).flat();
MC_DATA.execute_items = MC_DATA.all_items;
MC_DATA.execute_blocks = MC_DATA.items.blocks;
MC_DATA.execute_effects = MC_DATA.effects;
MC_DATA.execute_particles = MC_DATA.particles;
MC_DATA.execute_sounds = MC_DATA.sounds;
`;

fs.writeFileSync('data.js', newContent, 'utf8');
console.log('Successfully wrote new data.js!');
