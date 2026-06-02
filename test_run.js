const MC_DATA = {
    trolls: []
};

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

versions.forEach(v => {
    console.log(`\n=== Testing Version: ${v} ===`);
    testConfigs.forEach((c, idx) => {
        try {
            const cmd = Generator.generateExecute(c, v);
            console.log(`Test ${idx + 1}: ${cmd}`);
        } catch (err) {
            console.error(`❌ Test ${idx + 1} Failed:`, err);
        }
    });
});
