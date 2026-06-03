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
    },
    {
        targetBase: "@p",
        anchor: "at",
        condType: "none",
        action: "effect",
        actionEffect: "minecraft:speed",
        effectDuration: 9999999,
        effectAmp: 300,
        effectHideParticles: true
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

const containerConfig = {
    type: "minecraft:shulker_box",
    title: "Legendary Loot Box",
    contents: {
        0: {
            id: "minecraft:diamond_sword",
            count: 1,
            isPreset: true,
            command: "/give @p minecraft:diamond_sword[minecraft:custom_name='{\"text\":\"Excalibur\"}',minecraft:enchantments={levels:{\"minecraft:sharpness\":5}}] 1"
        },
        1: {
            id: "minecraft:zombie_spawn_egg",
            count: 1,
            isPreset: true,
            command: "/give @p minecraft:zombie_spawn_egg[minecraft:entity_data={id:\"minecraft:zombie\",CustomName:'{\"text\":\"Troll King\"}',Health:100f}] 1"
        },
        4: {
            id: "minecraft:gold_block",
            count: 64,
            isPreset: false
        }
    }
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

    console.log("\n--- Container Generator Test ---");
    try {
        const containerCmd = Generator.generateContainer(containerConfig, v);
        console.log(`Container Command:\n${containerCmd}`);
    } catch (err) {
        console.error("❌ Container Test Failed:", err);
    }
});

// === NEW EXTENDED PRESETS COMPILER TESTS ===
console.log("\n==========================================");
console.log("=== RUNNING EXTENDED PRESETS TESTS ===");
console.log("==========================================");

const extendedMobConfig = {
    type: "minecraft:skeleton",
    name: "Gear Preset Skeleton",
    gear: {
        hand: "/give @p minecraft:diamond_sword[minecraft:custom_name='{\"text\":\"Excalibur\"}',minecraft:enchantments={levels:{\"minecraft:sharpness\":5}}] 1",
        offhand: "/setblock ~ ~ ~ chest 0 destroy {CustomName:\"Loot Chest\",Items:[{Slot:0b,id:\"minecraft:gold_ingot\",Count:10b}]}",
        head: "minecraft:iron_helmet",
        chest: "none",
        legs: "none",
        feet: "none"
    },
    gearEnch: {
        hand: true, // Should merge enchantments!
        offhand: false,
        head: false,
        chest: false,
        legs: false,
        feet: false
    }
};

const execGivePreset = {
    targetBase: "@a",
    anchor: "as_at",
    condType: "none",
    action: "give_preset",
    givePresetCmd: "/give @p minecraft:shulker_box[minecraft:custom_name='{\"text\":\"Boss Box\"}'] 1",
    givePresetTarget: "@p",
    givePresetCount: 5
};

const execSummonPreset = {
    targetBase: "@a",
    anchor: "at",
    condType: "none",
    action: "summon_preset",
    summonPresetCmd: "/summon minecraft:creeper ~ ~-1 ~ {powered:1b}",
    summonPresetOffset: "~ ~2 ~"
};

versions.forEach(v => {
    console.log(`\n--- Extended Presets (Version: ${v}) ---`);
    try {
        const mobCmd = Generator.generateMob(extendedMobConfig, v);
        console.log(`Mob presets summon command:\n${mobCmd}`);
    } catch (err) {
        console.error("❌ Extended Mob Test Failed:", err);
    }

    try {
        const giveCmd = Generator.generateExecute(execGivePreset, v);
        console.log(`Execute Give Preset command: ${giveCmd}`);
    } catch (err) {
        console.error("❌ Execute Give Preset Test Failed:", err);
    }

    try {
        const summonCmd = Generator.generateExecute(execSummonPreset, v);
        console.log(`Execute Summon Preset command: ${summonCmd}`);
    } catch (err) {
        console.error("❌ Execute Summon Preset Test Failed:", err);
    }
});

// === NEW CONTAINER LOOT TABLE COMPILER TESTS ===
console.log("\n==========================================");
console.log("=== RUNNING CONTAINER LOOT TABLE TESTS ===");
console.log("==========================================");

const lootTableContainerConfig = {
    type: "minecraft:chest",
    title: "Structure Loot Chest",
    lootTable: "minecraft:chests/simple_dungeon",
    contents: {
        0: { id: "minecraft:stone", count: 64 } // should be ignored when loot table is specified
    }
};

versions.forEach(v => {
    console.log(`\n--- Container Loot Table (Version: ${v}) ---`);
    try {
        const cmd = Generator.generateContainer(lootTableContainerConfig, v);
        console.log(`Loot Table Container Command:\n${cmd}`);
    } catch (err) {
        console.error("❌ Container Loot Table Test Failed:", err);
    }
});

// === NEW SCALE, STEP HEIGHT & MOUNT TESTS ===
console.log("\n==========================================");
console.log("=== RUNNING SCALE, STEP HEIGHT & MOUNT TESTS ===");
console.log("==========================================");

const scaleStepMobConfig = {
    type: "minecraft:zombie",
    name: "Giant Climber",
    health: "20",
    speed: "1.0",
    scale: "2.5",
    stepHeight: "2.0",
    mountType: "none"
};

const defaultMountMobConfig = {
    type: "minecraft:creeper",
    name: "Riding Creeper",
    health: "20",
    speed: "1.0",
    scale: "1.0",
    stepHeight: "0.6",
    mountType: "default",
    mountMob: "minecraft:chicken"
};

const presetMountMobConfig = {
    type: "minecraft:skeleton",
    name: "Riding Skeleton",
    health: "20",
    speed: "1.0",
    scale: "1.0",
    stepHeight: "0.6",
    mountType: "preset",
    mountPresetCmd: "/summon minecraft:spider ~ ~ ~ {Health:30.0f,Passengers:[{id:\"minecraft:cave_spider\"}]}"
};

versions.forEach(v => {
    console.log(`\n--- Scale & Step Height & Mount (Version: ${v}) ---`);
    try {
        const cmd1 = Generator.generateMob(scaleStepMobConfig, v);
        console.log(`Scale/Step Height Mob:\n${cmd1}`);
    } catch (err) {
        console.error("❌ Scale/Step Mob Test Failed:", err);
    }

    try {
        const cmd2 = Generator.generateMob(defaultMountMobConfig, v);
        console.log(`Default Mount Mob:\n${cmd2}`);
    } catch (err) {
        console.error("❌ Default Mount Mob Test Failed:", err);
    }

    try {
        const cmd3 = Generator.generateMob(presetMountMobConfig, v);
        console.log(`Preset Mount Mob:\n${cmd3}`);
    } catch (err) {
        console.error("❌ Preset Mount Mob Test Failed:", err);
    }
});

// === CUSTOM POTION & ACTIVE EFFECT DURATION TESTS ===
console.log("\n==========================================");
console.log("=== RUNNING POTION & MOB EFFECT DURATION TESTS ===");
console.log("==========================================");

const potionTestConfig = {
    id: "minecraft:splash_potion",
    name: "§dSplash Potion of Ultimate Rage",
    color: "#ff0055",
    effects: [
        { id: "minecraft:speed", amplifier: 3, duration: 60, infinite: false },
        { id: "minecraft:strength", amplifier: 5, duration: 120, infinite: true }
    ]
};

const mobDurationConfig = {
    type: "minecraft:zombie",
    name: "Zombie with Custom Effects",
    health: "20",
    speed: "1.0",
    activeEffects: [
        { id: "minecraft:speed", amplifier: 2, duration: 30, infinite: false },
        { id: "minecraft:invisibility", amplifier: 1, duration: 0, infinite: true }
    ]
};

versions.forEach(v => {
    console.log(`\n--- Potion & Mob Effect Durations (Version: ${v}) ---`);
    try {
        const cmd = Generator.generatePotion(potionTestConfig, v);
        console.log(`Custom Potion Command:\n${cmd}`);
    } catch (err) {
        console.error("❌ Custom Potion Test Failed:", err);
    }

    try {
        const cmd = Generator.generateMob(mobDurationConfig, v);
        console.log(`Mob with custom effect durations:\n${cmd}`);
    } catch (err) {
        console.error("❌ Mob Durations Test Failed:", err);
    }
});

// === NEW EXECUTE BUILDER CUSTOM MOB SELECTOR, GIVE STANDARD ITEM, AND HIDDEN PARTICLES TESTS ===
console.log("\n==========================================");
console.log("=== RUNNING PARTICLES, CUSTOM MOB SELECTORS & GIVE ITEM TESTS ===");
console.log("==========================================");

const hiddenParticlesMobConfig = {
    type: "minecraft:creeper",
    name: "Silent Exploder",
    health: "20",
    speed: "1.2",
    activeEffects: [
        { id: "minecraft:speed", amplifier: 3, duration: 60, infinite: false, hideParticles: true },
        { id: "minecraft:invisibility", amplifier: 1, duration: 0, infinite: true, hideParticles: true }
    ]
};

const execCustomMobSelectorConfig = {
    targetBase: "custom_mob",
    targetCustomMobType: "minecraft:zombie",
    targetCustomMobName: "Troll King",
    targetExclude: "konlo",
    targetTag: "boss",
    anchor: "as_at",
    condType: "none",
    action: "give_item",
    giveItem: "minecraft:netherite_axe",
    giveItemTarget: "@s",
    giveItemCount: 1
};

versions.forEach(v => {
    console.log(`\n--- Particles & Custom Mob Selectors (Version: ${v}) ---`);
    try {
        const cmd1 = Generator.generateMob(hiddenParticlesMobConfig, v);
        console.log(`Mob with hidden particles active effects:\n${cmd1}`);
    } catch (err) {
        console.error("❌ Mob Hidden Particles Test Failed:", err);
    }

    try {
        const cmd2 = Generator.generateExecute(execCustomMobSelectorConfig, v);
        console.log(`Execute with custom mob base selector and give_item action:\n${cmd2}`);
    } catch (err) {
        console.error("❌ Execute Custom Mob Selector/Give Item Test Failed:", err);
    }
});

