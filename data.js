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
    mobs: [
        { id: "minecraft:zombie", name: "Zombie", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:skeleton", name: "Skeleton", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:creeper", name: "Creeper", category: "Hostile", special: "creeper", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:spider", name: "Spider", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:wither_skeleton", name: "Wither Skeleton", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:blaze", name: "Blaze", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:witch", name: "Witch", category: "Hostile", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:enderman", name: "Enderman", category: "Neutral", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:iron_golem", name: "Iron Golem", category: "Utility", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:villager", name: "Villager", category: "Passive", special: "villager", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:pig", name: "Pig", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:cow", name: "Cow", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:chicken", name: "Chicken", category: "Passive", get icon() { return getMobIconPath(this.id); } },
        { id: "minecraft:slime", name: "Slime", category: "Hostile", special: "slime", get icon() { return getMobIconPath(this.id); } }
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
            { id: "minecraft:bow", name: "Bow", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:crossbow", name: "Crossbow", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:trident", name: "Trident", get icon() { return getItemIconPath(this.id); } }
        ],
        helmets: [
            { id: "minecraft:netherite_helmet", name: "Netherite Helmet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_helmet", name: "Diamond Helmet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_helmet", name: "Iron Helmet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_helmet", name: "Golden Helmet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chainmail_helmet", name: "Chainmail Helmet", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:leather_helmet", name: "Leather Cap", get icon() { return getItemIconPath(this.id); } }
        ],
        chestplates: [
            { id: "minecraft:netherite_chestplate", name: "Netherite Chestplate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond_chestplate", name: "Diamond Chestplate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:iron_chestplate", name: "Iron Chestplate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:golden_chestplate", name: "Golden Chestplate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:chainmail_chestplate", name: "Chainmail Chestplate", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:leather_chestplate", name: "Leather Tunics", get icon() { return getItemIconPath(this.id); } }
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
        fun: [
            { id: "minecraft:golden_apple", name: "Golden Apple", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:enchanted_golden_apple", name: "Enchanted Apple", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:cookie", name: "Cookie", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:diamond", name: "Diamond Gem", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:emerald", name: "Emerald Gem", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:tnt", name: "TNT Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:creeper_spawn_egg", name: "Creeper Egg", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:dirt", name: "Dirt Block", get icon() { return getItemIconPath(this.id); } },
            { id: "minecraft:bedrock", name: "Bedrock", get icon() { return getItemIconPath(this.id); } }
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
        }
    ]
};
