const MC_DATA = {
    trolls: [],
    effects: [
        { id: "minecraft:speed", name: "Speed", numeric_id: 1, icon: "🧪" },
        { id: "minecraft:invisibility", name: "Invisibility", numeric_id: 14, icon: "🧪" }
    ]
};
global.MC_DATA = MC_DATA;

// Mock dependencies
const Generator = require('./generator.js');

const testConfigs = [
    {
        targetBase: "@a",
        targetExclude: "konlo",
        targetGamemode: "survival",
        targetTag: "admin",
        anchor: "as_at",
        condType: "if_block",
        blockType: "minecraft:diamond_block",
        blockOffset: "~ ~-1 ~",
        action: "summon",
        actionMob: "minecraft:zombie",
        summonOffset: "~ ~ ~"
    },
    {
        targetBase: "@p",
        anchor: "at",
        condType: "if_entity",
        mobType: "minecraft:creeper",
        distance: "2..10",
        action: "playsound",
        actionSound: "minecraft:entity.creeper.primed",
        soundVolume: 1.0,
        soundPitch: 1.0,
        soundCategory: "master"
    },
    {
        targetBase: "@r",
        anchor: "as",
        condType: "if_score",
        scoreObj: "dummy",
        scoreOp: "matches",
        scoreVal: "5..",
        action: "tellraw",
        tellrawText: "Test",
        tellrawColor: "red"
    },
    {
        targetBase: "@a",
        targetLevelMin: 10,
        targetLevelMax: 50,
        targetSurvivalOnly: true,
        targetLimit: true,
        anchor: "as_at",
        condType: "if_sneaking",
        action: "combust",
        combustDuration: 5
    },
    {
        targetBase: "@a",
        anchor: "as_at",
        condType: "if_items",
        invSlot: "weapon.mainhand",
        invItem: "minecraft:diamond_sword",
        invCount: 2,
        action: "wipe_inv",
        clearItem: "minecraft:diamond_sword"
    }
];

const versions = ["java_modern", "java_legacy", "bedrock"];

const mobConfig = {
    type: "minecraft:zombie",
    name: "Troll Zombie",
    health: "100",
    speed: "2.0",
    silent: true,
    noAI: false,
    glowing: true,
    invulnerable: true,
    noGravity: false,
    fireImmune: true,
    activeEffects: [
        { id: "minecraft:speed", amplifier: 3 },
        { id: "minecraft:invisibility", amplifier: 1 }
    ],
    gear: {
        hand: "minecraft:diamond_sword",
        offhand: "minecraft:shield",
        head: "minecraft:diamond_helmet",
        chest: "none",
        legs: "none",
        feet: "none"
    },
    gearEnch: {
        hand: true,
        offhand: false,
        head: true,
        chest: false,
        legs: false,
        feet: false
    }
};

const itemConfig = {
    id: "minecraft:diamond_sword",
    name: "Ban Hammer",
    lore: "Line 1\nLine 2",
    unbreakable: true,
    hideFlags: false,
    glint: true,
    count: 1,
    enchantments: [
        { id: "sharpness", lvl: 5 },
        { id: "knockback", lvl: 10 }
    ]
};

versions.forEach(v => {
    console.log(`\n=== Testing Version: ${v} ===`);
    
    console.log("\n--- Execute Generator Tests ---");
    testConfigs.forEach((c, idx) => {
        try {
            const cmd = Generator.generateExecute(c, v);
            console.log(`Execute Test ${idx + 1}: ${cmd}`);
        } catch (err) {
            console.error(`❌ Execute Test ${idx + 1} Failed:`, err);
        }
    });

    console.log("\n--- Mob Generator Test ---");
    try {
        const mobCmd = Generator.generateMob(mobConfig, v);
        console.log(`Mob Command:\n${mobCmd}`);
    } catch (err) {
        console.error("❌ Mob Test Failed:", err);
    }

    console.log("\n--- Item Generator Test ---");
    try {
        const itemCmd = Generator.generateItem(itemConfig, v);
        console.log(`Item Command: ${itemCmd}`);
    } catch (err) {
        console.error("❌ Item Test Failed:", err);
    }
});
