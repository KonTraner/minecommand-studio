const fs = require('fs');
const mcData = require('minecraft-data')('1.20.2');

// Load current data.js content to preserve enchantments, effects, particles, trolls, trolls_chains, execute_slots, etc.
const dataContent = fs.readFileSync('data.js', 'utf8');

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

const commandDescriptions = {
    advancement: "Grants, revokes, or tests advancements for players.",
    attribute: "Gets or modifies attribute modifiers of entities in real time.",
    ban: "Adds player to server ban list.",
    "ban-ip": "Adds IP address to server ban list.",
    banlist: "Displays the server ban list.",
    bossbar: "Creates and modifies boss bars.",
    clear: "Empties items matching filters from target players' inventories.",
    clone: "Clones blocks from one region to another.",
    damage: "Applies custom damage to target entities.",
    data: "Gets, merges, modifies, and clears NBT data of blocks and entities.",
    datapack: "Controls loaded data packs.",
    debug: "Starts or stops a profiling debug session.",
    defaultgamemode: "Sets the default gamemode for new players.",
    deop: "Revokes operator status from a player.",
    difficulty: "Modifies global combat challenge parameters.",
    effect: "Modifies active potion effects on players or mobs.",
    enchant: "Applies compatible enchantments to the held item of a player.",
    execute: "Executes commands under specific conditions or on behalf of other entities.",
    experience: "Grants or queries player experience points and levels.",
    fill: "Fills a cubic region of blocks with a specified block type.",
    fillbiome: "Fills a region with a specified biome.",
    forceload: "Forces chunks to remain loaded in memory.",
    function: "Executes a list of commands from a function file.",
    gamemode: "Sets the target player's gameplay interaction mode.",
    gamerule: "Toggles global server configuration parameters.",
    give: "Grants specific items with custom NBT / components to players.",
    help: "Shows help information for commands.",
    item: "Manipulates items in block or entity inventories.",
    jfr: "Controls Java Flight Recorder profiling.",
    kick: "Kicks a player from the server.",
    kill: "Instantly inflicts lethal damage to players or mobs.",
    list: "Lists online players on the server.",
    locate: "Finds coordinates of structures, biomes, or points of interest.",
    loot: "Drops items from loot tables into inventories or the world.",
    me: "Displays a narrative message in chat (* player action).",
    msg: "Sends a private message to one or more players.",
    op: "Grants operator status to a player.",
    pardon: "Removes player from server ban list.",
    "pardon-ip": "Removes IP address from server ban list.",
    particle: "Spawns cosmetic particles in the environment.",
    perf: "Captures performance metrics on the server.",
    place: "Places a template, feature, jigsaw, or structure at coordinates.",
    playsound: "Plays a sound effect to selected players.",
    publish: "Opens singleplayer world to LAN.",
    random: "Generates a random value or sets random roll parameters.",
    recipe: "Grants or revokes crafting recipes for players.",
    reload: "Reloads all datapacks and functions.",
    return: "Returns a value from a function.",
    ride: "Makes an entity ride or stop riding another entity.",
    "save-all": "Saves the world to disk.",
    "save-off": "Disables automatic world saving.",
    "save-on": "Enables automatic world saving.",
    say: "Sends a broadcast message to all players in chat.",
    schedule: "Schedules a function to run after a delay.",
    scoreboard: "Manages scoreboard objectives, teams, and scores.",
    seed: "Displays the world's generation integer seed.",
    setblock: "Changes a block at specified coordinates.",
    setidletimeout: "Sets the maximum idle time before players are kicked.",
    setworldspawn: "Sets the default spawn point for new players.",
    spawnpoint: "Sets the individual spawn point for players.",
    spectate: "Forces a spectator player to spectate another entity.",
    spreadplayers: "Teleports entities to random locations within a range.",
    stop: "Gracefully shuts down the server.",
    stopsound: "Stops a playing sound for players.",
    summon: "Spawns a custom living mob or object at specified coordinates.",
    tag: "Manages scoreboard tags on entities.",
    team: "Manages scoreboard teams.",
    teammsg: "Sends a private message to team members.",
    teleport: "Teleports entities to coordinates or targets.",
    tell: "Sends a private message to players.",
    tellraw: "Sends a JSON formatted raw message to players.",
    time: "Changes or queries the daylight time cycle.",
    title: "Displays large titles/subtitles on player screens.",
    tm: "Sends a private team message.",
    tp: "Teleports players or entities.",
    trigger: "Modifies scoreboard triggers for players.",
    w: "Sends a private message to players.",
    weather: "Alters weather states (clear, rain, thunder).",
    whitelist: "Manages server whitelist access.",
    worldborder: "Manages the boundaries of the world border.",
    xp: "Grants or queries player experience points and levels."
};

const commandSyntaxes = {
    advancement: "/advancement <grant|revoke> <targets> ...",
    attribute: "/attribute <target> <attribute> <get|base|modifier> ...",
    ban: "/ban <targets> [reason]",
    "ban-ip": "/ban-ip <target> [reason]",
    banlist: "/banlist [ips|players]",
    bossbar: "/bossbar <add|remove|list|set|get> ...",
    clear: "/clear [targets] [item] [maxCount]",
    clone: "/clone <begin> <end> <destination> [replace|masked] ...",
    damage: "/damage <target> <amount> [damageType] [at <location>]",
    data: "/data <get|merge|modify|remove> <block|entity|storage> ...",
    datapack: "/datapack <enable|disable|list> ...",
    debug: "/debug <start|stop|report>",
    defaultgamemode: "/defaultgamemode <survival|creative|adventure|spectator>",
    deop: "/deop <targets>",
    difficulty: "/difficulty <peaceful|easy|normal|hard>",
    effect: "/effect <give|clear> <targets> [effect] [seconds] [amplifier]",
    enchant: "/enchant <targets> <enchantment> [level]",
    execute: "/execute <subcommands> run <command>",
    experience: "/experience <add|set|query> <targets> ...",
    fill: "/fill <from> <to> <block> [replace|destroy|keep]",
    fillbiome: "/fillbiome <from> <to> <biome>",
    forceload: "/forceload <add|remove|query> ...",
    function: "/function <name>",
    gamemode: "/gamemode <survival|creative|adventure|spectator> [targets]",
    gamerule: "/gamerule <rule> [value]",
    give: "/give <targets> <item> [count]",
    help: "/help [command]",
    item: "/item <replace|modify> <block|entity> ...",
    kick: "/kick <targets> [reason]",
    kill: "/kill [targets]",
    list: "/list [uuids]",
    locate: "/locate <structure|biome|poi> <id>",
    loot: "/loot <replace|give|insert|spawn> ...",
    me: "/me <action>",
    msg: "/msg <targets> <message>",
    op: "/op <targets>",
    pardon: "/pardon <targets>",
    "pardon-ip": "/pardon-ip <target>",
    particle: "/particle <name> [pos] [speed] [count]",
    place: "/place <feature|structure|jigsaw|template> ...",
    playsound: "/playsound <sound> <source> <targets> [pos]",
    random: "/random <value|roll> ...",
    recipe: "/recipe <give|take> <targets> ...",
    reload: "/reload",
    return: "/return <value>",
    ride: "/ride <target> <mount|dismount> ...",
    "save-all": "/save-all [flush]",
    "save-off": "/save-off",
    "save-on": "/save-on",
    say: "/say <message>",
    schedule: "/schedule <function|clear> ...",
    scoreboard: "/scoreboard <objectives|players|teams> ...",
    seed: "/seed",
    setblock: "/setblock <pos> <block> [destroy|keep|replace]",
    setidletimeout: "/setidletimeout <minutes>",
    setworldspawn: "/setworldspawn [pos] [angle]",
    spawnpoint: "/spawnpoint [targets] [pos] [angle]",
    spectate: "/spectate [target] [player]",
    spreadplayers: "/spreadplayers <center> <spreadDistance> <maxRange> ...",
    stop: "/stop",
    stopsound: "/stopsound <targets> [source] [sound]",
    summon: "/summon <entity> [pos] [nbt]",
    tag: "/tag <targets> <add|remove|list> ...",
    team: "/team <add|remove|join|leave|list|option> ...",
    teammsg: "/teammsg <message>",
    teleport: "/teleport <destination> or /teleport <targets> <destination>",
    tell: "/tell <targets> <message>",
    tellraw: "/tellraw <targets> <message>",
    time: "/time <set|add|query> <value>",
    title: "/title <targets> <title|subtitle|actionbar|clear|reset|times> ...",
    tp: "/tp <targets> <destination>",
    trigger: "/trigger <objective> [add|set]",
    w: "/w <targets> <message>",
    weather: "/weather <clear|rain|thunder> [duration]",
    whitelist: "/whitelist <add|remove|list|on|off|reload>",
    worldborder: "/worldborder <set|center|damage|warning|add|get> ...",
    xp: "/xp <add|set|query> <targets> [points|levels]"
};

let oldEnchantments = [];
let oldEffects = [];
let oldParticles = [];
let oldExecuteSlots = [];
let oldTrolls = [];
let oldTrollsChains = [];

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
    oldExecuteSlots = mockObj.MC_DATA.execute_slots;
    oldTrolls = mockObj.MC_DATA.trolls;
    oldTrollsChains = mockObj.MC_DATA.trolls_chains;
    console.log('Successfully parsed existing data arrays to preserve!');
} catch (err) {
    console.error('Failed to parse existing data.js arrays, using fallback:', err);
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
    'armor_stand'
];

const validTypes = ['mob', 'living', 'animal', 'ambient', 'hostile', 'water_creature', 'passive'];

const newMobs = [];
mcData.entitiesArray.forEach(ent => {
    if (!validTypes.includes(ent.type)) return;
    if (excludedEntities.includes(ent.name)) return;
    if (ent.name.includes('boat') || ent.name.includes('minecart')) return;

    let category = 'Passive';
    if (ent.category === 'Hostile mobs' || ent.type === 'hostile') category = 'Hostile';
    
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

const blockNames = new Set(mcData.blocksArray.map(b => b.name));

mcData.itemsArray.forEach(item => {
    const name = item.name;
    const displayName = item.displayName;
    const id = `minecraft:${name}`;

    if (name === 'air') return;

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

const sortByDisplayName = (a, b) => a.name.localeCompare(b.name);
newWeapons.sort(sortByDisplayName);
newHelmets.sort(sortByDisplayName);
newChestplates.sort(sortByDisplayName);
newLeggings.sort(sortByDisplayName);
newBoots.sort(sortByDisplayName);
newTools.sort(sortByDisplayName);
newBlocks.sort(sortByDisplayName);
newMisc.sort(sortByDisplayName);

// 3. Process Sounds (ALL 1485 entries)
const newSounds = mcData.soundsArray.map(s => {
    const id = `minecraft:${s.name}`;
    const name = s.name.split(/[._\-/]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    return {
        id: id,
        name: name,
        icon: "🔊"
    };
});
newSounds.sort((a, b) => a.id.localeCompare(b.id));

// 4. Process Biomes (ALL 64 entries)
const biomeIconMap = [
    { keys: ["desert", "badlands", "mesa", "eroded"], icon: "🌵" },
    { keys: ["snow", "frozen", "ice", "cold", "slope", "peak", "grove"], icon: "❄️" },
    { keys: ["swamp", "mangrove"], icon: "🐊" },
    { keys: ["jungle"], icon: "🌴" },
    { keys: ["savanna"], icon: "🦁" },
    { keys: ["ocean", "beach", "river"], icon: "🌊" },
    { keys: ["mushroom"], icon: "🍄" },
    { keys: ["nether", "crimson", "warped", "basalt", "soul"], icon: "🔥" },
    { keys: ["end"], icon: "🌌" },
    { keys: ["dark", "deep"], icon: "👁️" },
    { keys: ["forest", "birch", "taiga", "wood"], icon: "🌳" }
];

function getBiomeIcon(name, category) {
    const searchStr = `${name} ${category || ""}`.toLowerCase();
    for (const mapping of biomeIconMap) {
        if (mapping.keys.some(k => searchStr.includes(k))) {
            return mapping.icon;
        }
    }
    return "🌱";
}

function getBiomeDesc(b) {
    const dim = b.dimension ? b.dimension.charAt(0).toUpperCase() + b.dimension.slice(1) : 'Overworld';
    let desc = `A ${dim} biome.`;
    if (b.category) {
        desc += ` Category: ${b.category.charAt(0).toUpperCase() + b.category.slice(1)}.`;
    }
    if (b.temperature !== undefined) {
        desc += ` Temp: ${b.temperature}.`;
    }
    if (b.has_precipitation !== undefined) {
        desc += ` Precipitation: ${b.has_precipitation ? 'Yes' : 'No'}.`;
    }
    return desc;
}

const newBiomes = mcData.biomesArray.map(b => {
    const id = `minecraft:${b.name}`;
    return {
        id: id,
        name: b.displayName || b.name.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
        icon: getBiomeIcon(b.name, b.category),
        desc: getBiomeDesc(b)
    };
});
newBiomes.sort((a, b) => a.name.localeCompare(b.name));

// 5. Process Commands (ALL 81 entries)
function getCommandMeta(name, node) {
    let args = [];
    if (node.children && node.children.length > 0) {
        args = node.children.map(c => {
            if (c.type === 'literal') {
                return c.name;
            } else if (c.type === 'argument') {
                return `<${c.name}>`;
            }
            return c.name;
        });
    }
    if (args.length > 0) {
        if (args.length > 3) {
            return `/${name} ${args.slice(0, 3).join(' ')}...`;
        }
        return `/${name} ${args.join(' ')}`;
    }
    return `/${name}`;
}

const rootCommands = (mcData.commands && mcData.commands.root && mcData.commands.root.children) || [];
const newCommands = rootCommands.map(node => {
    const name = node.name;
    const id = `/${name}`;
    const desc = commandDescriptions[name] || "Vanilla Minecraft chat command.";
    const syntax = commandSyntaxes[name] || getCommandMeta(name, node);
    return {
        id: id,
        name: id,
        icon: "📜",
        desc: desc,
        meta: syntax
    };
});
newCommands.sort((a, b) => a.id.localeCompare(b.id));

// 6. Setup Loot Tables
const defaultLootTables = {
    chests: [
        { id: "minecraft:chests/abandoned_mineshaft", name: "Abandoned Mineshaft" },
        { id: "minecraft:chests/ancient_city", name: "Ancient City" },
        { id: "minecraft:chests/ancient_city_ice_box", name: "Ancient City Ice Box" },
        { id: "minecraft:chests/bastion_bridge", name: "Bastion Bridge" },
        { id: "minecraft:chests/bastion_hoglin_stable", name: "Bastion Hoglin Stable" },
        { id: "minecraft:chests/bastion_other", name: "Bastion Other" },
        { id: "minecraft:chests/bastion_treasure", name: "Bastion Treasure" },
        { id: "minecraft:chests/buried_treasure", name: "Buried Treasure" },
        { id: "minecraft:chests/desert_pyramid", name: "Desert Pyramid" },
        { id: "minecraft:chests/end_city_treasure", name: "End City Treasure" },
        { id: "minecraft:chests/jungle_temple", name: "Jungle Temple" },
        { id: "minecraft:chests/jungle_temple_dispenser", name: "Jungle Temple Dispenser" },
        { id: "minecraft:chests/nether_bridge", name: "Nether Bridge" },
        { id: "minecraft:chests/pillager_outpost", name: "Pillager Outpost" },
        { id: "minecraft:chests/ruined_portal", name: "Ruined Portal" },
        { id: "minecraft:chests/shipwreck_map", name: "Shipwreck Map" },
        { id: "minecraft:chests/shipwreck_supply", name: "Shipwreck Supply" },
        { id: "minecraft:chests/shipwreck_treasure", name: "Shipwreck Treasure" },
        { id: "minecraft:chests/simple_dungeon", name: "Simple Dungeon" },
        { id: "minecraft:chests/spawn_bonus_chest", name: "Spawn Bonus Chest" },
        { id: "minecraft:chests/stronghold_corridor", name: "Stronghold Corridor" },
        { id: "minecraft:chests/stronghold_crossing", name: "Stronghold Crossing" },
        { id: "minecraft:chests/stronghold_library", name: "Stronghold Library" },
        { id: "minecraft:chests/underwater_ruin_big", name: "Underwater Ruin Big" },
        { id: "minecraft:chests/underwater_ruin_small", name: "Underwater Ruin Small" },
        { id: "minecraft:chests/woodland_mansion", name: "Woodland Mansion" }
    ],
    villages: [
        { id: "minecraft:chests/village/village_armorer", name: "Village Armorer" },
        { id: "minecraft:chests/village/village_butcher", name: "Village Butcher" },
        { id: "minecraft:chests/village/village_cartographer", name: "Village Cartographer" },
        { id: "minecraft:chests/village/village_desert_house", name: "Village Desert House" },
        { id: "minecraft:chests/village/village_fisher", name: "Village Fisher" },
        { id: "minecraft:chests/village/village_fletcher", name: "Village Fletcher" },
        { id: "minecraft:chests/village/village_mason", name: "Village Mason" },
        { id: "minecraft:chests/village/village_plains_house", name: "Village Plains House" },
        { id: "minecraft:chests/village/village_savanna_house", name: "Village Savanna House" },
        { id: "minecraft:chests/village/village_shepherd", name: "Village Shepherd" },
        { id: "minecraft:chests/village/village_snowy_house", name: "Village Snowy House" },
        { id: "minecraft:chests/village/village_taiga_house", name: "Village Taiga House" },
        { id: "minecraft:chests/village/village_tannery", name: "Village Tannery" },
        { id: "minecraft:chests/village/village_toolsmith", name: "Village Toolsmith" },
        { id: "minecraft:chests/village/village_weaponsmith", name: "Village Weaponsmith" }
    ],
    gameplay: [
        { id: "minecraft:gameplay/cat_morning_gift", name: "Cat Morning Gift" },
        { id: "minecraft:gameplay/fishing", name: "Fishing" },
        { id: "minecraft:gameplay/fishing/fish", name: "Fishing Fish" },
        { id: "minecraft:gameplay/fishing/junk", name: "Fishing Junk" },
        { id: "minecraft:gameplay/fishing/treasure", name: "Fishing Treasure" },
        { id: "minecraft:gameplay/hero_of_the_village/armorer_gift", name: "Hero Gift: Armorer" },
        { id: "minecraft:gameplay/hero_of_the_village/butcher_gift", name: "Hero Gift: Butcher" },
        { id: "minecraft:gameplay/hero_of_the_village/cartographer_gift", name: "Hero Gift: Cartographer" },
        { id: "minecraft:gameplay/hero_of_the_village/cleric_gift", name: "Hero Gift: Cleric" },
        { id: "minecraft:gameplay/hero_of_the_village/farmer_gift", name: "Hero Gift: Farmer" },
        { id: "minecraft:gameplay/hero_of_the_village/fisher_gift", name: "Hero Gift: Fisher" },
        { id: "minecraft:gameplay/hero_of_the_village/fletcher_gift", name: "Hero Gift: Fletcher" },
        { id: "minecraft:gameplay/hero_of_the_village/leatherworker_gift", name: "Hero Gift: Leatherworker" },
        { id: "minecraft:gameplay/hero_of_the_village/librarian_gift", name: "Hero Gift: Librarian" },
        { id: "minecraft:gameplay/hero_of_the_village/mason_gift", name: "Hero Gift: Mason" },
        { id: "minecraft:gameplay/hero_of_the_village/shepherd_gift", name: "Hero Gift: Shepherd" },
        { id: "minecraft:gameplay/hero_of_the_village/toolsmith_gift", name: "Hero Gift: Toolsmith" },
        { id: "minecraft:gameplay/hero_of_the_village/weaponsmith_gift", name: "Hero Gift: Weaponsmith" },
        { id: "minecraft:gameplay/piglin_bartering", name: "Piglin Bartering" },
        { id: "minecraft:gameplay/sniffing", name: "Sniffing" }
    ]
};

const entityLootTables = newMobs.map(m => {
    const mobName = m.id.replace("minecraft:", "");
    const formattedName = mobName.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    return {
        id: `minecraft:entities/${mobName}`,
        name: `${formattedName} Drop`
    };
});
entityLootTables.sort((a, b) => a.name.localeCompare(b.name));

const finalLootTables = {
    chests: defaultLootTables.chests,
    villages: defaultLootTables.villages,
    gameplay: defaultLootTables.gameplay,
    entities: entityLootTables
};

// Map old effects to include actual Minecraft textures
const updatedEffects = oldEffects.map(e => {
    let filename = e.id.replace("minecraft:", "");
    if (filename === "bad_luck") {
        filename = "unluck";
    }
    return {
        id: e.id,
        name: e.name,
        numeric_id: e.numeric_id,
        icon: `https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/mob_effect/${filename}.png`
    };
});

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
    effects: ${JSON.stringify(updatedEffects, null, 8)},

    // Preserved Particles List
    particles: ${JSON.stringify(oldParticles, null, 8)},

    // Generated Sounds List (ALL 1485 entries)
    sounds: ${JSON.stringify(newSounds, null, 8)},

    // Preserved Execute Slots List
    execute_slots: ${JSON.stringify(oldExecuteSlots, null, 8)},

    // Generated Biomes List (ALL 64 entries)
    biomes: ${JSON.stringify(newBiomes, null, 8)},

    // Default Structures List (20 entries)
    structures: ${JSON.stringify(defaultStructures, null, 8)},

    // Generated Commands List (ALL 81 entries)
    commands: ${JSON.stringify(newCommands, null, 8)},

    // Loot Tables List (Chests, Villages, Gameplay, Mobs)
    loot_tables: ${JSON.stringify(finalLootTables, null, 8)}
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
console.log('- Total Sounds:', newSounds.length);
console.log('- Total Biomes:', newBiomes.length);
console.log('- Total Commands:', newCommands.length);
console.log('- Total Loot Tables Chests:', finalLootTables.chests.length);
console.log('- Total Loot Tables Villages:', finalLootTables.villages.length);
console.log('- Total Loot Tables Gameplay:', finalLootTables.gameplay.length);
console.log('- Total Loot Tables Entities:', finalLootTables.entities.length);
