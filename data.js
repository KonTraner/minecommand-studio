/* ==========================================================================
   MineCommand Studio - Expanded Game Data & Hand-crafted Pixel SVGs
   ========================================================================== */

// 1. Hand-crafted Pixel Art SVG Library (ViewBox 0 0 16 16 with crisp edges)
const MC_ICONS = {
    // Mob heads
    zombie: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><rect x="0" y="0" width="16" height="16" fill="#146a5d"/><rect x="2" y="4" width="3" height="2" fill="#111"/><rect x="11" y="4" width="3" height="2" fill="#111"/><rect x="4" y="8" width="8" height="4" fill="#0c4a40"/><rect x="6" y="12" width="4" height="2" fill="#111"/></svg>`,
    skeleton: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><rect x="0" y="0" width="16" height="16" fill="#cfcfd4"/><rect x="2" y="5" width="3" height="3" fill="#1c1c1f"/><rect x="11" y="5" width="3" height="3" fill="#1c1c1f"/><rect x="5" y="10" width="6" height="2" fill="#1c1c1f"/><rect x="7" y="12" width="2" height="4" fill="#88888c"/></svg>`,
    creeper: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><rect x="0" y="0" width="16" height="16" fill="#3aa327"/><rect x="2" y="3" width="3" height="3" fill="#151f13"/><rect x="11" y="3" width="3" height="3" fill="#151f13"/><rect x="5" y="6" width="6" height="4" fill="#151f13"/><rect x="4" y="8" width="8" height="6" fill="#151f13"/><rect x="4" y="12" width="2" height="4" fill="#151f13"/><rect x="10" y="12" width="2" height="4" fill="#151f13"/></svg>`,
    spider: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><rect x="0" y="0" width="16" height="16" fill="#181313"/><rect x="2" y="5" width="2" height="2" fill="#b81616"/><rect x="5" y="5" width="2" height="2" fill="#b81616"/><rect x="9" y="5" width="2" height="2" fill="#b81616"/><rect x="12" y="5" width="2" height="2" fill="#b81616"/><rect x="6" y="9" width="4" height="2" fill="#383030"/></svg>`,
    enderman: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><rect x="0" y="0" width="16" height="16" fill="#111113"/><rect x="1" y="6" width="4" height="2" fill="#d05ce3"/><rect x="2" y="6" width="2" height="2" fill="#fff"/><rect x="11" y="6" width="4" height="2" fill="#d05ce3"/><rect x="12" y="6" width="2" height="2" fill="#fff"/></svg>`,
    blaze: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><rect x="0" y="0" width="16" height="16" fill="#e89315"/><rect x="3" y="2" width="10" height="2" fill="#ffe259"/><rect x="1" y="5" width="4" height="4" fill="#d47306"/><rect x="11" y="5" width="4" height="4" fill="#d47306"/><rect x="5" y="6" width="2" height="2" fill="#fff"/><rect x="9" y="6" width="2" height="2" fill="#fff"/><rect x="4" y="11" width="8" height="2" fill="#ffe259"/></svg>`,
    witch: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><rect x="0" y="0" width="16" height="16" fill="#88766b"/><rect x="3" y="0" width="10" height="4" fill="#201b2b"/><rect x="1" y="4" width="14" height="1" fill="#32ba32"/><rect x="5" y="5" width="6" height="3" fill="#88766b"/><rect x="5" y="7" width="2" height="4" fill="#692a2a"/><rect x="9" y="7" width="2" height="4" fill="#692a2a"/><rect x="7" y="11" width="2" height="4" fill="#1e1c1b"/></svg>`,
    iron_golem: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><rect x="0" y="0" width="16" height="16" fill="#dfdfdb"/><rect x="3" y="5" width="2" height="2" fill="#d43328"/><rect x="11" y="5" width="2" height="2" fill="#d43328"/><rect x="6" y="5" width="4" height="2" fill="#8aa878"/><rect x="7" y="7" width="2" height="6" fill="#bd9a88"/></svg>`,
    villager: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><rect x="0" y="0" width="16" height="16" fill="#b57a5f"/><rect x="3" y="4" width="2" height="2" fill="#5fb55f"/><rect x="11" y="4" width="2" height="2" fill="#5fb55f"/><rect x="6" y="6" width="4" height="8" fill="#915a41"/><rect x="6" y="12" width="4" height="2" fill="#553526"/></svg>`,
    pig: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><rect x="0" y="0" width="16" height="16" fill="#fca1a1"/><rect x="1" y="5" width="2" height="2" fill="#fff"/><rect x="2" y="5" width="1" height="2" fill="#000"/><rect x="13" y="5" width="2" height="2" fill="#fff"/><rect x="13" y="5" width="1" height="2" fill="#000"/><rect x="4" y="8" width="8" height="4" fill="#fca8a8"/><rect x="5" y="9" width="6" height="3" fill="#e8667b"/><rect x="6" y="10" width="1" height="1" fill="#4a1a21"/><rect x="9" y="10" width="1" height="1" fill="#4a1a21"/></svg>`,
    cow: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><rect x="0" y="0" width="16" height="16" fill="#5c4538"/><rect x="1" y="1" width="3" height="3" fill="#fff"/><rect x="12" y="1" width="3" height="3" fill="#fff"/><rect x="2" y="6" width="2" height="2" fill="#fff"/><rect x="2" y="6" width="1" height="2" fill="#000"/><rect x="12" y="6" width="2" height="2" fill="#fff"/><rect x="12" y="6" width="1" height="2" fill="#000"/><rect x="4" y="10" width="8" height="4" fill="#d2a090"/></svg>`,
    chicken: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><rect x="0" y="0" width="16" height="16" fill="#eceff1"/><rect x="3" y="4" width="2" height="2" fill="#263238"/><rect x="11" y="4" width="2" height="2" fill="#263238"/><rect x="5" y="8" width="6" height="3" fill="#ffb300"/><rect x="6" y="11" width="4" height="3" fill="#e53935"/></svg>`,
    slime: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><rect x="0" y="0" width="16" height="16" fill="rgba(84,204,61,0.6)" stroke="#398525" stroke-width="1"/><rect x="3" y="5" width="2" height="2" fill="#28591c"/><rect x="11" y="5" width="2" height="2" fill="#28591c"/><rect x="7" y="9" width="2" height="2" fill="#28591c"/></svg>`,
    
    // Armaments & Weapons
    sword_diamond: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><path d="M12 0h4v4h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6V9H5V8H4V7h1V6h1V5h1V4h1V3h1V2h1v1h1V1h1V0z" fill="#4dede5"/><path d="M5 11h1v1H5zm-1 1h1v1H4zm-1 1h1v1H3zm-2 2h2v1H0v-2h1z" fill="#805300"/><path d="M3 12h1v1H3zm-1 1h1v1H2zm3-3h1v1H5zm2-2h1v1H7z" fill="#e2c815"/></svg>`,
    sword_netherite: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><path d="M12 0h4v4h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6V9H5V8H4V7h1V6h1V5h1V4h1V3h1V2h1v1h1V1h1V0z" fill="#2d2d30"/><path d="M5 11h1v1H5zm-1 1h1v1H4zm-1 1h1v1H3zm-2 2h2v1H0v-2h1z" fill="#140f0c"/><path d="M3 12h1v1H3zm-1 1h1v1H2zm3-3h1v1H5zm2-2h1v1H7z" fill="#bd2d2d"/></svg>`,
    sword_gold: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><path d="M12 0h4v4h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6V9H5V8H4V7h1V6h1V5h1V4h1V3h1V2h1v1h1V1h1V0z" fill="#fca800"/><path d="M5 11h1v1H5zm-1 1h1v1H4zm-1 1h1v1H3zm-2 2h2v1H0v-2h1z" fill="#805300"/><path d="M3 12h1v1H3zm-1 1h1v1H2zm3-3h1v1H5zm2-2h1v1H7z" fill="#fff"/></svg>`,
    sword_iron: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><path d="M12 0h4v4h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6V9H5V8H4V7h1V6h1V5h1V4h1V3h1V2h1v1h1V1h1V0z" fill="#e0e0e8"/><path d="M5 11h1v1H5zm-1 1h1v1H4zm-1 1h1v1H3zm-2 2h2v1H0v-2h1z" fill="#665"/><path d="M3 12h1v1H3zm-1 1h1v1H2zm3-3h1v1H5zm2-2h1v1H7z" fill="#d1bd19"/></svg>`,
    sword_stone: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><path d="M12 0h4v4h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6V9H5V8H4V7h1V6h1V5h1V4h1V3h1V2h1v1h1V1h1V0z" fill="#7a7a82"/><path d="M5 11h1v1H5zm-1 1h1v1H4zm-1 1h1v1H3zm-2 2h2v1H0v-2h1z" fill="#4c3d31"/><path d="M3 12h1v1H3zm-1 1h1v1H2zm3-3h1v1H5zm2-2h1v1H7z" fill="#323238"/></svg>`,
    sword_wood: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><path d="M12 0h4v4h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6V9H5V8H4V7h1V6h1V5h1V4h1V3h1V2h1v1h1V1h1V0z" fill="#a67053"/><path d="M5 11h1v1H5zm-1 1h1v1H4zm-1 1h1v1H3zm-2 2h2v1H0v-2h1z" fill="#543526"/><path d="M3 12h1v1H3zm-1 1h1v1H2zm3-3h1v1H5zm2-2h1v1H7z" fill="#2d1c14"/></svg>`,
    
    // Ranged
    bow: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><path d="M11 1 L15 5 L14 6 L12 4 L9 7 L7 9 L4 12 L6 14 L5 15 L1 11 L2 10 L4 12 L7 9 L9 7 L12 4 L11 1 Z" fill="#6d4c41"/><rect x="13" y="1" width="2" height="2" fill="#dfdfdf"/><rect x="1" y="13" width="2" height="2" fill="#dfdfdf"/></svg>`,
    
    // Armors
    helmet: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><rect x="3" y="2" width="10" height="12" fill="#4dede5" rx="1"/><rect x="5" y="8" width="6" height="3" fill="#1b1b1d"/><rect x="3" y="14" width="10" height="2" fill="#265c17"/><line x1="8" y1="2" x2="8" y2="7" stroke="#fff" stroke-width="1"/></svg>`,
    chestplate: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><path d="M3 2h3v2h4V2h3v6h-1v5H3V8H2V2z" fill="#4dede5"/><rect x="5" y="4" width="6" height="4" fill="#265c17"/></svg>`,
    leggings: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><rect x="3" y="2" width="10" height="13" fill="#4dede5"/><rect x="6" y="6" width="4" height="9" fill="#1b1b1d"/></svg>`,
    boots: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><rect x="2" y="8" width="4" height="7" fill="#4dede5"/><rect x="10" y="8" width="4" height="7" fill="#4dede5"/></svg>`,
    
    // Custom collectibles
    diamond: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><path d="M8 1 L14 7 L8 15 L2 7 Z" fill="#4dede5"/><path d="M5 5 L8 2 L11 5 L8 8 Z" fill="#fff" opacity="0.6"/></svg>`,
    emerald: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><path d="M8 1 L14 5 L14 11 L8 15 L2 11 L2 5 Z" fill="#3aa327"/><path d="M5 5 L8 3 L11 5 L8 13 Z" fill="#a4f48c" opacity="0.5"/></svg>`,
    tnt: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><rect x="0" y="0" width="16" height="16" fill="#b02e2e"/><rect x="0" y="5" width="16" height="6" fill="#ffffff"/><rect x="2" y="7" width="2" height="2" fill="#111"/><rect x="6" y="7" width="4" height="2" fill="#111"/><rect x="12" y="7" width="2" height="2" fill="#111"/><rect x="0" y="0" width="16" height="2" fill="#555"/></svg>`,
    apple_golden: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><path d="M5 2 L11 2 L13 4 L14 7 L12 12 L8 14 L4 12 L2 7 L3 4 Z" fill="#ffd54f"/><rect x="7" y="0" width="2" height="2" fill="#8d6e63"/><path d="M4 4 L6 4 L5 7 Z" fill="#fff" opacity="0.6"/></svg>`,
    egg: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><path d="M8 1 C5 1 3 5 3 9 C3 13 5 15 8 15 C11 15 13 13 13 9 C13 5 11 1 8 1" fill="#fcf6d6"/><rect x="5" y="8" width="2" height="2" fill="#d1bd19"/><rect x="9" y="5" width="2" height="2" fill="#d1bd19"/></svg>`,
    dirt: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><rect x="0" y="0" width="16" height="16" fill="#8d6e63"/><rect x="0" y="0" width="16" height="4" fill="#4caf50"/><path d="M1 4 L3 4 L2 6 Z" fill="#388e3c"/></svg>`,
    bedrock: `<svg viewBox="0 0 16 16" width="22" height="22" shape-rendering="crispEdges"><rect x="0" y="0" width="16" height="16" fill="#1c1c1f"/><rect x="2" y="2" width="4" height="4" fill="#555"/><rect x="10" y="2" width="4" height="4" fill="#555"/><rect x="6" y="8" width="4" height="4" fill="#555"/><rect x="2" y="11" width="3" height="3" fill="#888"/></svg>`
};

const MC_DATA = {
    // 2. Mobs Mapping Configuration with relative Icons
    mobs: [
        { id: "minecraft:zombie", name: "Zombie", category: "Hostile", icon: MC_ICONS.zombie },
        { id: "minecraft:skeleton", name: "Skeleton", category: "Hostile", icon: MC_ICONS.skeleton },
        { id: "minecraft:creeper", name: "Creeper", category: "Hostile", special: "creeper", icon: MC_ICONS.creeper },
        { id: "minecraft:spider", name: "Spider", category: "Hostile", icon: MC_ICONS.spider },
        { id: "minecraft:wither_skeleton", name: "Wither Skeleton", category: "Hostile", icon: MC_ICONS.skeleton },
        { id: "minecraft:blaze", name: "Blaze", category: "Hostile", icon: MC_ICONS.blaze },
        { id: "minecraft:witch", name: "Witch", category: "Hostile", icon: MC_ICONS.witch },
        { id: "minecraft:enderman", name: "Enderman", category: "Neutral", icon: MC_ICONS.enderman },
        { id: "minecraft:iron_golem", name: "Iron Golem", category: "Utility", icon: MC_ICONS.iron_golem },
        { id: "minecraft:villager", name: "Villager", category: "Passive", special: "villager", icon: MC_ICONS.villager },
        { id: "minecraft:pig", name: "Pig", category: "Passive", icon: MC_ICONS.pig },
        { id: "minecraft:cow", name: "Cow", category: "Passive", icon: MC_ICONS.cow },
        { id: "minecraft:chicken", name: "Chicken", category: "Passive", icon: MC_ICONS.chicken },
        { id: "minecraft:slime", name: "Slime", category: "Hostile", special: "slime", icon: MC_ICONS.slime }
    ],

    // 3. Equipment & Items Lists linked with visual Icons
    items: {
        weapons: [
            { id: "minecraft:diamond_sword", name: "Diamond Sword", icon: MC_ICONS.sword_diamond },
            { id: "minecraft:netherite_sword", name: "Netherite Sword", icon: MC_ICONS.sword_netherite },
            { id: "minecraft:golden_sword", name: "Golden Sword", icon: MC_ICONS.sword_gold },
            { id: "minecraft:iron_sword", name: "Iron Sword", icon: MC_ICONS.sword_iron },
            { id: "minecraft:stone_sword", name: "Stone Sword", icon: MC_ICONS.sword_stone },
            { id: "minecraft:wooden_sword", name: "Wooden Sword", icon: MC_ICONS.sword_wood },
            { id: "minecraft:bow", name: "Bow", icon: MC_ICONS.bow },
            { id: "minecraft:crossbow", name: "Crossbow", icon: MC_ICONS.bow },
            { id: "minecraft:trident", name: "Trident", icon: MC_ICONS.sword_diamond }
        ],
        helmets: [
            { id: "minecraft:netherite_helmet", name: "Netherite Helmet", icon: MC_ICONS.helmet },
            { id: "minecraft:diamond_helmet", name: "Diamond Helmet", icon: MC_ICONS.helmet },
            { id: "minecraft:iron_helmet", name: "Iron Helmet", icon: MC_ICONS.helmet },
            { id: "minecraft:golden_helmet", name: "Golden Helmet", icon: MC_ICONS.helmet },
            { id: "minecraft:chainmail_helmet", name: "Chainmail Helmet", icon: MC_ICONS.helmet },
            { id: "minecraft:leather_helmet", name: "Leather Cap", icon: MC_ICONS.helmet }
        ],
        chestplates: [
            { id: "minecraft:netherite_chestplate", name: "Netherite Chestplate", icon: MC_ICONS.chestplate },
            { id: "minecraft:diamond_chestplate", name: "Diamond Chestplate", icon: MC_ICONS.chestplate },
            { id: "minecraft:iron_chestplate", name: "Iron Chestplate", icon: MC_ICONS.chestplate },
            { id: "minecraft:golden_chestplate", name: "Golden Chestplate", icon: MC_ICONS.chestplate },
            { id: "minecraft:chainmail_chestplate", name: "Chainmail Chestplate", icon: MC_ICONS.chestplate },
            { id: "minecraft:leather_chestplate", name: "Leather Tunics", icon: MC_ICONS.chestplate }
        ],
        leggings: [
            { id: "minecraft:netherite_leggings", name: "Netherite Leggings", icon: MC_ICONS.leggings },
            { id: "minecraft:diamond_leggings", name: "Diamond Leggings", icon: MC_ICONS.leggings },
            { id: "minecraft:iron_leggings", name: "Iron Leggings", icon: MC_ICONS.leggings },
            { id: "minecraft:golden_leggings", name: "Golden Leggings", icon: MC_ICONS.leggings },
            { id: "minecraft:chainmail_leggings", name: "Chainmail Leggings", icon: MC_ICONS.leggings },
            { id: "minecraft:leather_leggings", name: "Leather Pants", icon: MC_ICONS.leggings }
        ],
        boots: [
            { id: "minecraft:netherite_boots", name: "Netherite Boots", icon: MC_ICONS.boots },
            { id: "minecraft:diamond_boots", name: "Diamond Boots", icon: MC_ICONS.boots },
            { id: "minecraft:iron_boots", name: "Iron Boots", icon: MC_ICONS.boots },
            { id: "minecraft:golden_boots", name: "Golden Boots", icon: MC_ICONS.boots },
            { id: "minecraft:chainmail_boots", name: "Chainmail Boots", icon: MC_ICONS.boots },
            { id: "minecraft:leather_boots", name: "Leather Boots", icon: MC_ICONS.boots }
        ],
        fun: [
            { id: "minecraft:golden_apple", name: "Golden Apple", icon: MC_ICONS.apple_golden },
            { id: "minecraft:enchanted_golden_apple", name: "Enchanted Apple", icon: MC_ICONS.apple_golden },
            { id: "minecraft:cookie", name: "Cookie", icon: MC_ICONS.apple_golden },
            { id: "minecraft:diamond", name: "Diamond Gem", icon: MC_ICONS.diamond },
            { id: "minecraft:emerald", name: "Emerald Gem", icon: MC_ICONS.emerald },
            { id: "minecraft:tnt", name: "TNT Block", icon: MC_ICONS.tnt },
            { id: "minecraft:creeper_spawn_egg", name: "Creeper Egg", icon: MC_ICONS.egg },
            { id: "minecraft:dirt", name: "Dirt Block", icon: MC_ICONS.dirt },
            { id: "minecraft:bedrock", name: "Bedrock", icon: MC_ICONS.bedrock }
        ]
    },

    // 4. Enchantments Definition
    enchantments: [
        { id: "sharpness", name: "Sharpness", max: 5, type: "weapon" },
        { id: "smite", name: "Smite", max: 5, type: "weapon" },
        { id: "fire_aspect", name: "Fire Aspect", max: 2, type: "weapon" },
        { id: "knockback", name: "Knockback", max: 2, type: "weapon" },
        { id: "looting", name: "Looting", max: 3, type: "weapon" },
        
        { id: "protection", name: "Protection", max: 4, type: "armor" },
        { id: "fire_protection", name: "Fire Protection", max: 4, type: "armor" },
        { id: "feather_falling", name: "Feather Falling", max: 4, type: "armor" },
        { id: "blast_protection", name: "Blast Protection", max: 4, type: "armor" },
        { id: "projectile_protection", name: "Projectile Protection", max: 4, type: "armor" },
        { id: "thorns", name: "Thorns", max: 3, type: "armor" },
        { id: "respiration", name: "Respiration", max: 3, type: "armor" },
        
        { id: "efficiency", name: "Efficiency", max: 5, type: "tool" },
        { id: "silk_touch", name: "Silk Touch", max: 1, type: "tool" },
        { id: "fortune", name: "Fortune", max: 3, type: "tool" },
        
        { id: "power", name: "Power", max: 5, type: "bow" },
        { id: "punch", name: "Punch", max: 2, type: "bow" },
        { id: "flame", name: "Flame", max: 1, type: "bow" },
        { id: "infinity", name: "Infinity", max: 1, type: "bow" },
        { id: "multishot", name: "Multishot", max: 1, type: "bow" },
        
        { id: "unbreaking", name: "Unbreaking", max: 3, type: "all" },
        { id: "mending", name: "Mending", max: 1, type: "all" }
    ],

    // 5. 30 Expanded Troll Commands (6 per level, optimized with Passenger Stack limits)
    trolls: [
        // --- LEVEL 1 (Mild Annoyance - Green) ---
        {
            level: 1,
            id: "cave_spook",
            name: "Cave Ambient Spook",
            type: "harmless",
            desc: "Plays spooky ambient cave noises directly to the victim to trigger sudden paranoia.",
            java_modern: "/playsound minecraft:ambient.cave ambient [TARGET] ~ ~ ~ 1 1 1",
            java_legacy: "/playsound minecraft:ambient.cave ambient [TARGET] ~ ~ ~ 1 1 1",
            bedrock: "/playsound ambient.cave [TARGET] ~ ~ ~ 1 1"
        },
        {
            level: 1,
            id: "fake_join",
            name: "Fake User Join Notification",
            type: "harmless",
            desc: "Outputs a yellow system announcement claiming a famous entity logged into the server.",
            java_modern: '/tellraw @a {"text":"Herobrine joined the game","color":"yellow"}',
            java_legacy: '/tellraw @a {"text":"Herobrine joined the game","color":"yellow"}',
            bedrock: '/tellraw @a {"rawtext":[{"text":"§eHerobrine joined the game"}]}'
        },
        {
            level: 1,
            id: "dizzy_spell",
            name: "Dizzy Spell",
            type: "harmless",
            desc: "Applies short Blindness and Nausea effects to disorient the player with zero damage.",
            java_modern: "/effect give [TARGET] minecraft:blindness 6 1\n/effect give [TARGET] minecraft:nausea 8 1",
            java_legacy: "/effect give [TARGET] blindness 6 1\n/effect give [TARGET] nausea 8 1",
            bedrock: "/effect [TARGET] blindness 6 1\n/effect [TARGET] nausea 8 1"
        },
        {
            level: 1,
            id: "fake_msg_spam",
            name: "Butterfingers Speak",
            type: "harmless",
            desc: "Forces the target to drop a funny chat slip-up claiming they accidentally dropped their sandwich.",
            java_modern: "/execute as [TARGET] run me dropped their sandwich in the dirt! ...oops",
            java_legacy: "/execute as [TARGET] run me dropped their sandwich in the dirt! ...oops",
            bedrock: "/execute as [TARGET] run me dropped their sandwich in the dirt! ...oops"
        },
        {
            level: 1,
            id: "inv_clutter",
            name: "Cobblestone Clutter",
            type: "grief",
            desc: "Gives them a full stack of Cobblestone blocks to pack active inventory hotbar spaces.",
            java_modern: "/give [TARGET] minecraft:cobblestone 64",
            java_legacy: "/give [TARGET] cobblestone 64",
            bedrock: "/give [TARGET] cobblestone 64"
        },
        {
            level: 1,
            id: "slowpoke",
            name: "Sluggish Potion",
            type: "grief",
            desc: "Inflicts severe Slowness effect, forcing them to crawl for 10 seconds.",
            java_modern: "/effect give [TARGET] minecraft:slowness 10 5",
            java_legacy: "/effect give [TARGET] slowness 10 5",
            bedrock: "/effect [TARGET] slowness 10 5"
        },

        // --- LEVEL 2 (Minor Sabotage - Gold) ---
        {
            level: 2,
            id: "disco_floor",
            name: "Villager Sparkles",
            type: "harmless",
            desc: "Summons continuous happy green emerald sparkles under their feet.",
            java_modern: "/execute at [TARGET] run particle minecraft:happy_villager ~ ~ ~ 0.5 0.1 0.5 0 25",
            java_legacy: "/execute at [TARGET] run particle happyVillager ~ ~ ~ 0.5 0.1 0.5 0 25",
            bedrock: "/execute at [TARGET] run particle minecraft:villager_happy ~ ~ ~"
        },
        {
            level: 2,
            id: "reverse_speech",
            name: "Reverse Chat Output",
            type: "harmless",
            desc: "Forces the player to output backwards text in public chat, confusing other members.",
            java_modern: "/execute as [TARGET] run say !ti t'nac I ,gugilb gugilb",
            java_legacy: "/execute as [TARGET] run say !ti t'nac I ,gugilb gugilb",
            bedrock: "/execute as [TARGET] run say !ti t'nac I ,gugilb gugilb"
        },
        {
            level: 2,
            id: "levitate",
            name: "Float Away Prank",
            type: "harmless",
            desc: "Gives levitation for 3 seconds followed by slow falling for safety.",
            java_modern: "/effect give [TARGET] minecraft:levitation 3 10\n/effect give [TARGET] minecraft:slow_falling 10 1",
            java_legacy: "/effect give [TARGET] levitation 3 10\n/effect give [TARGET] slow_falling 10 1",
            bedrock: "/effect [TARGET] levitation 3 10\n/effect [TARGET] slow_falling 10 1"
        },
        {
            level: 2,
            id: "ground_gravel",
            name: "Head Gravel Block",
            type: "grief",
            desc: "Places a loose gravel block above their head that drops directly onto them.",
            java_modern: "/execute at [TARGET] run setblock ~ ~2 ~ minecraft:gravel",
            java_legacy: "/execute at [TARGET] run setblock ~ ~2 ~ gravel",
            bedrock: "/execute at [TARGET] run setblock ~ ~2 ~ gravel"
        },
        {
            level: 2,
            id: "butterfingers",
            name: "Poison Potato Hand",
            type: "grief",
            desc: "Swaps their active mainhand weapon with a useless poisonous potato.",
            java_modern: "/item replace entity [TARGET] weapon.mainhand with minecraft:poisonous_potato",
            java_legacy: "/replaceitem entity [TARGET] slot.weapon.mainhand minecraft:poisonous_potato",
            bedrock: "/replaceitem entity [TARGET] slot.weapon.mainhand 0 poisonous_potato"
        },
        {
            level: 2,
            id: "cobweb_trapper",
            name: "Cobweb Stiction",
            type: "grief",
            desc: "Places a sticky Cobweb block directly at their leg level, slowing them to a crawl.",
            java_modern: "/execute at [TARGET] run setblock ~ ~ ~ minecraft:cobweb",
            java_legacy: "/execute at [TARGET] run setblock ~ ~ ~ cobweb",
            bedrock: "/execute at [TARGET] run setblock ~ ~ ~ cobweb"
        },

        // --- LEVEL 3 (Major Griefing - Orange) ---
        {
            level: 3,
            id: "inv_stalker",
            name: "Invisible Hiss Stalker",
            type: "harmless",
            desc: "Summons a fully invisible, silent Creeper that sits right behind them, triggering fake hisses.",
            java_modern: "/summon minecraft:creeper ~ ~ ~ {Silent:1b,active_effects:[{id:'minecraft:invisibility',amplifier:0,duration:-1,show_particles:0b}]}",
            java_legacy: "/summon creeper ~ ~ ~ {Silent:1b,ActiveEffects:[{Id:14,Amplifier:0,Duration:19998,ShowParticles:0b}]}",
            bedrock: "/summon creeper ~ ~ ~ minecraft:become_invisible"
        },
        {
            level: 3,
            id: "size_shifter_small",
            name: "Micro Shrink (0.2x)",
            type: "harmless",
            desc: "Shrinks their character model to 20% normal scale (Requires Java 1.20.5+).",
            java_modern: "/attribute [TARGET] minecraft:generic.scale base set 0.2",
            java_legacy: "/tellraw [TARGET] {\"text\":\"[Scale pranks are only supported on modern Minecraft 1.20.5+]\",\"color\":\"red\"}",
            bedrock: "/playanimation [TARGET] animation.player.sleeping scale 0.2"
        },
        {
            level: 3,
            id: "size_shifter_big",
            name: "Titan Grow (4.0x)",
            type: "harmless",
            desc: "Grows their character model into a massive 4-block tall behemoth (Requires Java 1.20.5+).",
            java_modern: "/attribute [TARGET] minecraft:generic.scale base set 4.0",
            java_legacy: "/tellraw [TARGET] {\"text\":\"[Scale pranks are only supported on modern Minecraft 1.20.5+]\",\"color\":\"red\"}",
            bedrock: "/playanimation [TARGET] animation.player.sleeping scale 4.0"
        },
        {
            level: 3,
            id: "zeus_lightning",
            name: "Zeus's Bolt Strike",
            type: "grief",
            desc: "Strikes an instant lightning bolt directly on their coordinates, setting fires.",
            java_modern: "/execute at [TARGET] run summon minecraft:lightning_bolt ~ ~ ~",
            java_legacy: "/execute at [TARGET] run summon lightning_bolt ~ ~ ~",
            bedrock: "/execute at [TARGET] run summon lightning_bolt ~ ~ ~"
        },
        {
            level: 3,
            id: "water_leak",
            name: "Ceiling Water Leak",
            type: "grief",
            desc: "Places running water above their head, washing away nearby torches and redstones.",
            java_modern: "/execute at [TARGET] run setblock ~ ~2 ~ minecraft:water",
            java_legacy: "/execute at [TARGET] run setblock ~ ~2 ~ water",
            bedrock: "/execute at [TARGET] run setblock ~ ~2 ~ water"
        },
        {
            level: 3,
            id: "obsidian_cage",
            name: "Obsidian Coffin",
            type: "grief",
            desc: "Wraps their coordinates entirely inside an indestructible 3x3 solid Obsidian block shell.",
            java_modern: "/execute at [TARGET] run fill ~-1 ~ ~-1 ~1 ~2 ~1 minecraft:obsidian outline\n/execute at [TARGET] run fill ~ ~ ~ ~ ~1 ~ minecraft:air",
            java_legacy: "/execute at [TARGET] run fill ~-1 ~ ~-1 ~1 ~2 ~1 obsidian outline\n/execute at [TARGET] run fill ~ ~ ~ ~ ~1 ~ air",
            bedrock: "/execute at [TARGET] run fill ~-1 ~ ~-1 ~1 ~2 ~1 obsidian outline\n/execute at [TARGET] run fill ~ ~ ~ ~ ~1 ~ air"
        },

        // --- LEVEL 4 (Ultimate Rage - Deep Red) ---
        {
            level: 4,
            id: "herobrine_spook",
            name: "Herobrine Haunting",
            type: "harmless",
            desc: "Spawns a glowing skull-wearing armor stand, sounds a ghast shriek, and deletes it.",
            java_modern: "/execute at [TARGET] run summon minecraft:armor_stand ~ ~1 ~2 {CustomName:'\"Herobrine\"',CustomNameVisible:1b,Glowing:1b,ArmorItems:[{},{},{},{id:'minecraft:player_head'}]}\n/playsound minecraft:entity.ghast.scream ambient [TARGET] ~ ~ ~ 1 0.5",
            java_legacy: "/execute at [TARGET] run summon armor_stand ~ ~1 ~2 {CustomName:\"Herobrine\",CustomNameVisible:1b,Glowing:1b,ArmorItems:[{},{},{},{id:\"skull\",Damage:3,tag:{SkullOwner:\"Herobrine\"}}]}\n/playsound entity.ghast.scream ambient [TARGET] ~ ~ ~ 1 0.5",
            bedrock: "/execute at [TARGET] run summon armor_stand ~ ~1 ~2 Herobrine\n/playsound mob.ghast.affectionate_scream [TARGET] ~ ~ ~ 1 0.5"
        },
        {
            level: 4,
            id: "fake_diamonds",
            name: "Fake Diamond Broadcaster",
            type: "harmless",
            desc: "Fakes a server-wide system message declaring they got the 'Diamonds!' achievement.",
            java_modern: '/tellraw @a [{"selector":"[TARGET]","color":"white"},{"text":" has made the advancement "},{"text":"[Diamonds!]","color":"green","bold":true}]\n/tellraw [TARGET] {"text":"Pranked! Actually zero diamonds!","color":"red"}',
            java_legacy: '/tellraw @a [{"selector":"[TARGET]","color":"white"},{"text":" has made the advancement "},{"text":"[Diamonds!]","color":"green","bold":true}]\n/tellraw [TARGET] {"text":"Pranked! Actually zero diamonds!","color":"red"}',
            bedrock: '/tellraw @a {"rawtext":[{"selector":"[TARGET]"},{"text":" has made the advancement §a§l[Diamonds!]"}]}\n/tellraw [TARGET] {"rawtext":[{"text":"§cPranked! Actually zero diamonds!"}]}'
        },
        {
            level: 4,
            id: "inverse_gravity",
            name: "Inverse Gravity Chamber",
            type: "harmless",
            desc: "Levitates them 15 blocks in the air, holds them suspended, and ambient bats screech around them.",
            java_modern: "/effect give [TARGET] minecraft:levitation 3 15\n/playsound minecraft:entity.bat.ambient ambient [TARGET] ~ ~ ~ 1 1",
            java_legacy: "/effect give [TARGET] levitation 3 15\n/playsound entity.bat.ambient ambient [TARGET] ~ ~ ~ 1 1",
            bedrock: "/effect [TARGET] levitation 3 15\n/playsound mob.bat.say [TARGET] ~ ~ ~ 1 1"
        },
        {
            level: 4,
            id: "anvil_storm",
            name: "Heavy Anvil Shower",
            type: "grief",
            desc: "Summons 2 heavy falling metal Anvils 15 blocks in the sky above their head to crash down.",
            java_modern: "/execute at [TARGET] run summon minecraft:falling_block ~ ~15 ~ {BlockState:{Name:\"minecraft:anvil\"},Time:1}\n/execute at [TARGET] run summon minecraft:falling_block ~1 ~15 ~ {BlockState:{Name:\"minecraft:anvil\"},Time:1}",
            java_legacy: "/execute at [TARGET] run summon falling_block ~ ~15 ~ {Block:\"anvil\",Time:1}\n/execute at [TARGET] run summon falling_block ~1 ~15 ~ {Block:\"anvil\",Time:1}",
            bedrock: "/execute at [TARGET] run summon falling_block ~ ~15 ~ anvil\n/execute at [TARGET] run summon falling_block ~1 ~15 ~ anvil"
        },
        {
            level: 4,
            id: "lava_bath",
            name: "Lava Footbath",
            type: "grief",
            desc: "Swaps the single block they are standing on into a burning fluid pool of hot Lava.",
            java_modern: "/execute at [TARGET] run setblock ~ ~-1 ~ minecraft:lava",
            java_legacy: "/execute at [TARGET] run setblock ~ ~-1 ~ lava",
            bedrock: "/execute at [TARGET] run setblock ~ ~-1 ~ lava"
        },
        {
            level: 4,
            id: "hotbar_wipe",
            name: "Hotbar Inventory Wipe",
            type: "grief",
            desc: "Clears their active inventory hotbar entirely using the sweeping clear command.",
            java_modern: "/clear [TARGET]",
            java_legacy: "/clear [TARGET]",
            bedrock: "/clear [TARGET]"
        },

        // --- LEVEL 5 (World Shatterer / Server Crash - Obsidian Black) ---
        {
            level: 5,
            id: "kbd_freeze",
            name: "Gravity Freeze Ring",
            type: "harmless",
            desc: "Forces player to continuously teleport to their current spot, completely locking movement.",
            java_modern: "/execute as [TARGET] run tp ~ ~ ~",
            java_legacy: "/execute as [TARGET] run tp ~ ~ ~",
            bedrock: "/execute as [TARGET] run tp ~ ~ ~"
        },
        {
            level: 5,
            id: "fake_admin_ban",
            name: "Fake Admin Ban Screen",
            type: "harmless",
            desc: "Flashes an official-looking kicked system tellraw in public chat while sending a private April Fools message.",
            java_modern: '/tellraw @a {"text":"[System] Connection lost: Kicked by Admin (Violation: FlyHack)","color":"red"}\n/tellraw [TARGET] {"text":"Pranked! You are not banned!","color":"green"}',
            java_legacy: '/tellraw @a {"text":"[System] Connection lost: Kicked by Admin (Violation: FlyHack)","color":"red"}\n/tellraw [TARGET] {"text":"Pranked! You are not banned!","color":"green"}',
            bedrock: '/tellraw @a {"rawtext":[{"text":"§c[System] Connection lost: Kicked by Admin (Violation: FlyHack)"}]}\n/tellraw [TARGET] {"rawtext":[{"text":"§aPranked! You are not banned!"}]}'
        },
        {
            level: 5,
            id: "mob_singularity",
            name: "Chicken Stack Apocalypse",
            type: "grief",
            desc: "Summons a stacked vertical tower of 6 chickens riding each other in a single chat-compatible line.",
            java_modern: "/summon minecraft:chicken ~ ~ ~ {Passengers:[{id:\"minecraft:chicken\",Passengers:[{id:\"minecraft:chicken\",Passengers:[{id:\"minecraft:chicken\",Passengers:[{id:\"minecraft:chicken\",Passengers:[{id:\"minecraft:chicken\"}]}]}]}]}]}",
            java_legacy: "/summon chicken ~ ~ ~ {Passengers:[{id:\"chicken\",Passengers:[{id:\"chicken\",Passengers:[{id:\"chicken\",Passengers:[{id:\"chicken\",Passengers:[{id:\"chicken\"}]}]}]}]}]}",
            bedrock: "/summon chicken ~ ~ ~\n/summon chicken ~ ~ ~\n/summon chicken ~ ~ ~"
        },
        {
            level: 5,
            id: "bedrock_box",
            name: "Bedrock Jail Box",
            type: "grief",
            desc: "Encapsulates the target inside a hollow 3x3 solid Bedrock tomb that cannot be mined.",
            java_modern: "/execute at [TARGET] run fill ~-1 ~ ~-1 ~1 ~2 ~1 minecraft:bedrock outline\n/execute at [TARGET] run fill ~ ~ ~ ~ ~1 ~ minecraft:air",
            java_legacy: "/execute at [TARGET] run fill ~-1 ~ ~-1 ~1 ~2 ~1 bedrock outline\n/execute at [TARGET] run fill ~ ~ ~ ~ ~1 ~ air",
            bedrock: "/execute at [TARGET] run fill ~-1 ~ ~-1 ~1 ~2 ~1 bedrock outline\n/execute at [TARGET] run fill ~ ~ ~ ~ ~1 ~ air"
        },
        {
            level: 5,
            id: "tnt_cluster",
            name: "Nuclear TNT Riding Stack",
            type: "grief",
            desc: "Summons a single-line riding stack of 3 primed TNT blocks that explode instantly in a rapid chain.",
            java_modern: "/summon minecraft:tnt ~ ~3 ~ {Fuse:15,Passengers:[{id:\"minecraft:tnt\",Fuse:15},{id:\"minecraft:tnt\",Fuse:15}]}",
            java_legacy: "/summon tnt ~ ~3 ~ {Fuse:15,Passengers:[{id:\"tnt\",Fuse:15},{id:\"tnt\",Fuse:15}]}",
            bedrock: "/summon tnt ~ ~3 ~"
        },
        {
            level: 5,
            id: "mob_magnet",
            name: "Hostile Mob Magnet",
            type: "grief",
            desc: "Instantly teleports all aggressive zombies, skeletons, and creepers within 100 blocks directly onto them.",
            java_modern: "/execute as [TARGET] run tp @e[type=minecraft:zombie,distance=..100] ~ ~ ~\n/execute as [TARGET] run tp @e[type=minecraft:skeleton,distance=..100] ~ ~ ~",
            java_legacy: "/execute as [TARGET] run tp @e[type=zombie,distance=..100] ~ ~ ~\n/execute as [TARGET] run tp @e[type=skeleton,distance=..100] ~ ~ ~",
            bedrock: "/execute as [TARGET] run tp @e[type=zombie] ~ ~ ~\n/execute as [TARGET] run tp @e[type=skeleton] ~ ~ ~"
        }
    ]
};
