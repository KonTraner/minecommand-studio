const fs = require('fs');
const mcData = require('minecraft-data')('1.20.2');

// Load current data.js content to preserve enchantments, effects, particles, sounds, trolls, trolls_chains, etc.
const dataContent = fs.readFileSync('data.js', 'utf8');

let oldEnchantments = [];
let oldEffects = [];
let oldParticles = [];
let oldSounds = [];
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
    oldSounds = mockObj.MC_DATA.sounds;
    oldExecuteSlots = mockObj.MC_DATA.execute_slots;
    oldTrolls = mockObj.MC_DATA.trolls;
    oldTrollsChains = mockObj.MC_DATA.trolls_chains;
    console.log('Successfully parsed existing data arrays!');
    console.log('- Enchantments:', oldEnchantments ? oldEnchantments.length : 0);
    console.log('- Effects:', oldEffects ? oldEffects.length : 0);
    console.log('- Particles:', oldParticles ? oldParticles.length : 0);
    console.log('- Sounds:', oldSounds ? oldSounds.length : 0);
    console.log('- Trolls:', oldTrolls ? oldTrolls.length : 0);
    console.log('- Trolls Chains:', oldTrollsChains ? oldTrollsChains.length : 0);
} catch (err) {
    console.error('Failed to parse existing data.js arrays, using fallback:', err);
    process.exit(1);
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
    execute_slots: ${JSON.stringify(oldExecuteSlots, null, 8)}
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
