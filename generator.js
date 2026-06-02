/* ==========================================================================
   MineCommand Studio - Generator Compiler
   ========================================================================= */

const Generator = {
    // Utility: Parse formatting codes § into raw text, or escape JSON
    escapeString(str) {
        if (!str) return "";
        return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    },

    // Convert Minecraft color codes (e.g., §cText) into simple JSON components for display
    textToJsonComponent(str) {
        if (!str) return '""';
        // If it starts with §, parse colors
        if (str.includes("§")) {
            let parts = [];
            let currentText = "";
            let currentColor = "white";
            let bold = false;
            let italic = false;

            const colorMap = {
                '0': 'black', '1': 'dark_blue', '2': 'dark_green', '3': 'dark_aqua',
                '4': 'dark_red', '5': 'dark_purple', '6': 'gold', '7': 'gray',
                '8': 'dark_gray', '9': 'blue', 'a': 'green', 'b': 'aqua',
                'c': 'red', 'd': 'light_purple', 'e': 'yellow', 'f': 'white'
            };

            for (let i = 0; i < str.length; i++) {
                if (str[i] === '§' && i + 1 < str.length) {
                    if (currentText) {
                        parts.push({ text: currentText, color: currentColor, bold, italic });
                        currentText = "";
                    }
                    const code = str[i + 1].toLowerCase();
                    if (colorMap[code]) {
                        currentColor = colorMap[code];
                        bold = false;
                        italic = false;
                    } else if (code === 'l') {
                        bold = true;
                    } else if (code === 'o') {
                        italic = true;
                    } else if (code === 'r') {
                        currentColor = "white";
                        bold = false;
                        italic = false;
                    }
                    i++; // skip code char
                } else {
                    currentText += str[i];
                }
            }
            if (currentText) {
                parts.push({ text: currentText, color: currentColor, bold, italic });
            }
            return JSON.stringify(parts.length === 1 ? parts[0] : parts);
        }

        return JSON.stringify({ text: str, italic: false });
    },

    // 1. GENERATE CUSTOM ITEM COMMAND (/give)
    generateItem(config, version) {
        const itemId = config.id || "minecraft:diamond_sword";
        const customName = config.name ? config.name.trim() : "";
        const loreLines = config.lore ? config.lore.split("\n").filter(l => l.trim() !== "") : [];
        const isUnbreakable = !!config.unbreakable;
        const hideFlags = !!config.hideFlags;
        const isGlint = !!config.glint;
        const count = parseInt(config.count) || 1;
        const enchantments = config.enchantments || []; // Array of {id, lvl}
        const attributes = config.attributes || {}; // Object: attack_damage, etc.

        // --- MODERN JAVA (1.20.5+) ---
        if (version === "java_modern") {
            let components = [];

            // Custom Name
            if (customName) {
                components.push(`minecraft:custom_name='${this.textToJsonComponent(customName)}'`);
            }

            // Lore
            if (loreLines.length > 0) {
                const jsonLines = loreLines.map(l => `'${this.textToJsonComponent(l)}'`);
                components.push(`minecraft:lore=[${jsonLines.join(",")}]`);
            }

            // Unbreakable
            if (isUnbreakable) {
                components.push(hideFlags ? "minecraft:unbreakable={show_in_tooltip:false}" : "minecraft:unbreakable={}");
            }

            // Glint Override
            if (isGlint) {
                components.push("minecraft:enchantment_glint_override=true");
            }

            // Enchantments
            if (enchantments.length > 0) {
                let levelsObj = [];
                enchantments.forEach(e => {
                    levelsObj.push(`"minecraft:${e.id}":${e.lvl}`);
                });
                components.push(hideFlags 
                    ? `minecraft:enchantments={levels:{${levelsObj.join(",")}},show_in_tooltip:false}`
                    : `minecraft:enchantments={levels:{${levelsObj.join(",")}}}`
                );
            }

            // Attributes
            let attrModifiers = [];
            if (attributes.attack_damage > 0) {
                attrModifiers.push(`{type:"minecraft:generic.attack_damage",amount:${attributes.attack_damage},operation:"add_value",id:"custom_atk",slot:"any"}`);
            }
            if (attributes.attack_speed !== 0) {
                attrModifiers.push(`{type:"minecraft:generic.attack_speed",amount:${attributes.attack_speed},operation:"add_value",id:"custom_speed",slot:"any"}`);
            }
            if (attributes.max_health > 0) {
                attrModifiers.push(`{type:"minecraft:generic.max_health",amount:${attributes.max_health},operation:"add_value",id:"custom_health",slot:"any"}`);
            }
            if (attributes.knockback_resistance > 0) {
                attrModifiers.push(`{type:"minecraft:generic.knockback_resistance",amount:${attributes.knockback_resistance},operation:"add_value",id:"custom_kb",slot:"any"}`);
            }
            if (attributes.movement_speed > 0) {
                attrModifiers.push(`{type:"minecraft:generic.movement_speed",amount:${attributes.movement_speed},operation:"add_value",id:"custom_mv",slot:"any"}`);
            }

            if (attrModifiers.length > 0) {
                components.push(hideFlags
                    ? `minecraft:attribute_modifiers={modifiers:[${attrModifiers.join(",")}],show_in_tooltip:false}`
                    : `minecraft:attribute_modifiers={modifiers:[${attrModifiers.join(",")}]}`
                );
            }

            const compString = components.length > 0 ? `[${components.join(",")}]` : "";
            return `/give @p ${itemId}${compString} ${count}`;
        }

        // --- LEGACY JAVA (1.16 - 1.20.4) ---
        if (version === "java_legacy") {
            let nbtTags = [];
            let displayTags = [];

            // Custom Name
            if (customName) {
                displayTags.push(`Name:'${this.textToJsonComponent(customName)}'`);
            }

            // Lore
            if (loreLines.length > 0) {
                const jsonLines = loreLines.map(l => `'${this.textToJsonComponent(l)}'`);
                displayTags.push(`Lore:[${jsonLines.join(",")}]`);
            }

            if (displayTags.length > 0) {
                nbtTags.push(`display:{${displayTags.join(",")}}`);
            }

            // Unbreakable
            if (isUnbreakable) {
                nbtTags.push("Unbreakable:1b");
            }

            // Glint / Force Glow
            if (isGlint && enchantments.length === 0) {
                nbtTags.push("Enchantments:[{}]");
            }

            // Enchantments
            if (enchantments.length > 0) {
                const enchList = enchantments.map(e => `{id:"minecraft:${e.id}",lvl:${e.lvl}s}`);
                nbtTags.push(`Enchantments:[${enchList.join(",")}]`);
            }

            // Attributes
            let attrList = [];
            if (attributes.attack_damage > 0) {
                attrList.push(`{AttributeName:"generic.attack_damage",Name:"custom_atk",Amount:${attributes.attack_damage},Operation:0,UUID:[I;1,2,3,4]}`);
            }
            if (attributes.attack_speed !== 0) {
                attrList.push(`{AttributeName:"generic.attack_speed",Name:"custom_spd",Amount:${attributes.attack_speed},Operation:0,UUID:[I;5,6,7,8]}`);
            }
            if (attributes.max_health > 0) {
                attrList.push(`{AttributeName:"generic.max_health",Name:"custom_hp",Amount:${attributes.max_health},Operation:0,UUID:[I;9,10,11,12]}`);
            }
            if (attributes.knockback_resistance > 0) {
                attrList.push(`{AttributeName:"generic.knockback_resistance",Name:"custom_kb",Amount:${attributes.knockback_resistance},Operation:0,UUID:[I;13,14,15,16]}`);
            }
            if (attributes.movement_speed > 0) {
                attrList.push(`{AttributeName:"generic.movement_speed",Name:"custom_mv",Amount:${attributes.movement_speed},Operation:0,UUID:[I;17,18,19,20]}`);
            }

            if (attrList.length > 0) {
                nbtTags.push(`AttributeModifiers:[${attrList.join(",")}]`);
            }

            // Hide Flags bitmask
            if (hideFlags) {
                // 1=Enchants, 2=Modifiers, 4=Unbreakable, etc. Set to 127 to hide everything
                nbtTags.push("HideFlags:127");
            }

            const nbtString = nbtTags.length > 0 ? `{${nbtTags.join(",")}}` : "";
            return `/give @p ${itemId}${nbtString} ${count}`;
        }

        // --- BEDROCK EDITION ---
        if (version === "bedrock") {
            // Bedrock `/give` does not support inline NBT tags directly.
            // We output a clean `/give` command followed by `/enchant` calls for convenience.
            let commands = [];
            commands.push(`/give @p ${itemId.replace("minecraft:", "")} ${count}`);
            
            if (enchantments.length > 0) {
                commands.push("# Apply Enchantments (Run while holding item):");
                enchantments.forEach(e => {
                    commands.push(`/enchant @p ${e.id} ${e.lvl}`);
                });
            }

            if (customName || isUnbreakable || loreLines.length > 0 || isGlint) {
                commands.push("\n# NOTE: Custom Name, Lore, Unbreakable NBTs require Anvils or external Loot Tables in Bedrock!");
            }
            
            return commands.join("\n");
        }

        return "";
    },

    // Auxiliary compiler for items in equipment slots
    compileEquipItem(itemId, hasEnchant, version) {
        if (itemId === "none") return null;

        if (version === "java_modern") {
            let comps = [];
            if (hasEnchant) {
                comps.push('minecraft:enchantments={levels:{"minecraft:protection":3}}');
            }
            const compString = comps.length > 0 ? `[${comps.join(",")}]` : "";
            return `{id:"${itemId}",count:1${compString ? `,components:{${comps.join(",")}}` : ""}}`;
        } else {
            // Java Legacy
            let tag = "";
            if (hasEnchant) {
                tag = ',tag:{Enchantments:[{id:"minecraft:protection",lvl:3s}]}';
            }
            return `{id:"${itemId}",Count:1b${tag}}`;
        }
    },

    // 2. GENERATE CUSTOM MOB SUMMON (/summon)
    generateMob(config, version) {
        const mobType = config.type || "minecraft:zombie";
        const customName = config.name ? config.name.trim() : "";
        const maxHealth = parseInt(config.health) || 20;
        const movementSpeed = parseFloat(config.speed) || 1.0;
        const isSilent = !!config.silent;
        const noAI = !!config.noAI;
        const isGlowing = !!config.glowing;
        const isInvulnerable = !!config.invulnerable;
        const noGravity = !!config.noGravity;
        const fireImmune = !!config.fireImmune;
        const activeEffects = config.activeEffects || {};

        // Gear slots
        const gear = config.gear || { hand: "none", offhand: "none", head: "none", chest: "none", legs: "none", feet: "none" };
        const gearEnch = config.gearEnch || {}; // hand, offhand, head, chest, legs, feet: boolean

        // Specials
        const specials = config.specials || {};

        // --- BEDROCK ---
        if (version === "bedrock") {
            const rawName = customName ? `"${this.escapeString(customName)}"` : "";
            return `/summon ${mobType.replace("minecraft:", "")} ~ ~ ~ ${rawName}`;
        }

        // --- JAVA (Legacy & Modern share summon base NBT, but equipment items differ) ---
        let nbt = [];

        // Base tags
        if (customName) {
            nbt.push(`CustomName:'${this.textToJsonComponent(customName)}'`);
            nbt.push("CustomNameVisible:1b");
        }
        if (isSilent) nbt.push("Silent:1b");
        if (noAI) nbt.push("NoAI:1b");
        if (isGlowing) nbt.push("Glowing:1b");
        if (isInvulnerable) nbt.push("Invulnerable:1b");
        if (noGravity) nbt.push("NoGravity:1b");
        if (fireImmune) nbt.push("FireImmune:1b");

        // HP and Attributes
        let attributesList = [];
        if (maxHealth !== 20) {
            nbt.push(`Health:${maxHealth}.0f`);
            const hpAttr = version === "java_modern" ? "minecraft:generic.max_health" : "generic.max_health";
            attributesList.push(`{Name:"${hpAttr}",Base:${maxHealth}.0f}`);
        }
        if (movementSpeed !== 1.0) {
            const speedVal = 0.23 * movementSpeed; // 0.23 is average default speed
            const speedAttr = version === "java_modern" ? "minecraft:generic.movement_speed" : "generic.movement_speed";
            attributesList.push(`{Name:"${speedAttr}",Base:${speedVal.toFixed(3)}f}`);
        }

        if (attributesList.length > 0) {
            nbt.push(`Attributes:[${attributesList.join(",")}]`);
        }

        // Active Potion Effects
        let effectsList = [];
        if (version === "java_modern") {
            if (activeEffects.speed) effectsList.push("{id:\"minecraft:speed\",amplifier:1,duration:20000,show_particles:1b}");
            if (activeEffects.strength) effectsList.push("{id:\"minecraft:strength\",amplifier:1,duration:20000,show_particles:1b}");
            if (activeEffects.invisibility) effectsList.push("{id:\"minecraft:invisibility\",amplifier:0,duration:20000,show_particles:0b}");
            if (activeEffects.resistance) effectsList.push("{id:\"minecraft:resistance\",amplifier:4,duration:20000,show_particles:1b}");
            
            if (effectsList.length > 0) {
                nbt.push(`active_effects:[${effectsList.join(",")}]`);
            }
        } else {
            // Java Legacy
            if (activeEffects.speed) effectsList.push("{Id:1b,Amplifier:1b,Duration:20000}");
            if (activeEffects.strength) effectsList.push("{Id:5b,Amplifier:1b,Duration:20000}");
            if (activeEffects.invisibility) effectsList.push("{Id:14b,Amplifier:0b,Duration:20000,ShowParticles:0b}");
            if (activeEffects.resistance) effectsList.push("{Id:11b,Amplifier:4b,Duration:20000}");
            
            if (effectsList.length > 0) {
                nbt.push(`ActiveEffects:[${effectsList.join(",")}]`);
            }
        }

        // Equipment Lists (ArmorItems & HandItems)
        const compiledHead = this.compileEquipItem(gear.head, !!gearEnch.head, version);
        const compiledChest = this.compileEquipItem(gear.chest, !!gearEnch.chest, version);
        const compiledLegs = this.compileEquipItem(gear.legs, !!gearEnch.legs, version);
        const compiledFeet = this.compileEquipItem(gear.feet, !!gearEnch.feet, version);
        const compiledHand = this.compileEquipItem(gear.hand, !!gearEnch.hand, version);
        const compiledOffhand = this.compileEquipItem(gear.offhand, !!gearEnch.offhand, version);

        if (compiledHead || compiledChest || compiledLegs || compiledFeet) {
            const boots = compiledFeet || "{}";
            const legs = compiledLegs || "{}";
            const chest = compiledChest || "{}";
            const head = compiledHead || "{}";
            nbt.push(`ArmorItems:[${boots},${legs},${chest},${head}]`);
        }

        if (compiledHand || compiledOffhand) {
            const hand = compiledHand || "{}";
            const offhand = compiledOffhand || "{}";
            nbt.push(`HandItems:[${hand},${offhand}]`);
        }

        // Special Entities properties
        if (mobType === "minecraft:creeper") {
            if (specials.creeperPowered) nbt.push("powered:1b");
            if (specials.creeperRadius && specials.creeperRadius !== 3) nbt.push(`ExplosionRadius:${specials.creeperRadius}b`);
            if (specials.creeperFuse && specials.creeperFuse !== 30) nbt.push(`Fuse:${specials.creeperFuse}s`);
        } else if (mobType === "minecraft:slime") {
            if (specials.slimeSize && specials.slimeSize !== 1) nbt.push(`Size:${specials.slimeSize}`);
        } else if (mobType === "minecraft:villager") {
            if (specials.villagerProfession && specials.villagerProfession !== "none") {
                nbt.push(`VillagerData:{profession:"minecraft:${specials.villagerProfession}",level:1,type:"minecraft:plains"}`);
            }
        }

        const nbtString = nbt.length > 0 ? ` {${nbt.join(",")}}` : "";
        return `/summon ${mobType} ~ ~ ~${nbtString}`;
    },

    // 3. GENERATE TROLL MENU COMMANDS
    generateTroll(trollId, targetPlayer, version) {
        const target = targetPlayer ? targetPlayer.trim() : "@p";
        const trollObj = MC_DATA.trolls.find(t => t.id === trollId);
        
        if (!trollObj) return "# Troll Prank not found.";

        let commandTemplate = trollObj.java_modern;
        if (version === "java_legacy") {
            commandTemplate = trollObj.java_legacy;
        } else if (version === "bedrock") {
            commandTemplate = trollObj.bedrock;
        }

        // Multiple commands can be split by newline
        let generated = commandTemplate.replace(/\[TARGET\]/g, target);

        return generated;
    },

    // 4. GENERATE CUSTOM EXECUTE TROLL COMMANDS
    translateSoundToBedrock(soundId) {
        const mapping = {
            "minecraft:entity.creeper.primed": "random.fuse",
            "minecraft:ambient.cave": "ambient.cave",
            "minecraft:block.anvil.land": "random.anvil_land",
            "minecraft:entity.ghast.warn": "mob.ghast.charge",
            "minecraft:entity.lightning_bolt.thunder": "ambient.weather.thunder",
            "minecraft:entity.ender_dragon.death": "mob.enderdragon.death",
            "minecraft:entity.warden.heartbeat": "mob.warden.heartbeat",
            "minecraft:entity.phantom.swoop": "mob.phantom.swoop",
            "minecraft:entity.witch.ambient": "mob.witch.say"
        };
        return mapping[soundId] || "random.click";
    },

    translateParticleToBedrock(particleId) {
        const mapping = {
            "minecraft:portal": "minecraft:portal_particle",
            "minecraft:smoke": "minecraft:basic_smoke_particle",
            "minecraft:flame": "minecraft:basic_flame_particle",
            "minecraft:cloud": "minecraft:cloud_particle",
            "minecraft:sonic_boom": "minecraft:sonic_explosion",
            "minecraft:explosion": "minecraft:huge_explosion_emitter",
            "minecraft:heart": "minecraft:heart_particle",
            "minecraft:electric_spark": "minecraft:sparkler_emitter"
        };
        return mapping[particleId] || "minecraft:portal_particle";
    },

    translateEffectToBedrock(effectId) {
        const clean = effectId.replace("minecraft:", "");
        return clean; // Bedrock matches standard effect names like blindness, slowness, etc.
    },

    colorCodeBedrock(color) {
        const mapping = {
            "white": "§f",
            "red": "§c",
            "yellow": "§e",
            "green": "§a",
            "blue": "§9",
            "purple": "§d",
            "gold": "§6",
            "dark_red": "§4",
            "gray": "§7"
        };
        return mapping[color] || "";
    },

    parseRangeForSelector(rangeStr, isBedrock) {
        const clean = (rangeStr || "").trim();
        if (!clean) return isBedrock ? "r=5" : "distance=..5";
        
        // Match min..max
        const matchMinMax = clean.match(/^(\d+)\.\.(\d+)$/);
        if (matchMinMax) {
            const min = matchMinMax[1];
            const max = matchMinMax[2];
            return isBedrock ? `rm=${min},r=${max}` : `distance=${min}..${max}`;
        }
        
        // Match ..max
        const matchMax = clean.match(/^\.\.(\d+)$/);
        if (matchMax) {
            const max = matchMax[1];
            return isBedrock ? `r=${max}` : `distance=..${max}`;
        }

        // Match min..
        const matchMin = clean.match(/^(\d+)\.\.$/);
        if (matchMin) {
            const min = matchMin[1];
            return isBedrock ? `rm=${min}` : `distance=${min}..`;
        }

        // Simple number
        const matchNum = clean.match(/^(\d+)$/);
        if (matchNum) {
            const num = matchNum[1];
            return isBedrock ? `r=${num}` : `distance=${num}`;
        }

        return isBedrock ? `r=${clean}` : `distance=${clean}`;
    },

    compileSelector(config, version) {
        const base = config.targetBase || "@a";
        let filters = [];

        // Exclude name
        if (config.targetExclude) {
            filters.push(`name=!${config.targetExclude.trim()}`);
        }

        // Gamemode
        if (config.targetGamemode && config.targetGamemode !== "none") {
            if (version === "bedrock") {
                const gmMap = { "survival": "s", "creative": "c", "adventure": "a", "spectator": "sp" };
                const bedrockGm = gmMap[config.targetGamemode] || "s";
                filters.push(`m=${bedrockGm}`);
            } else {
                filters.push(`gamemode=${config.targetGamemode}`);
            }
        }

        // Survival/Adventure Only
        if (config.targetSurvivalOnly) {
            if (version === "bedrock") {
                filters.push("m=!c");
                filters.push("m=!sp");
            } else {
                filters.push("gamemode=!creative");
                filters.push("gamemode=!spectator");
            }
        }

        // Tag
        if (config.targetTag) {
            filters.push(`tag=${config.targetTag.trim()}`);
        }

        // Target Limit
        if (config.targetLimit) {
            if (version === "bedrock") {
                filters.push("c=1");
            } else {
                filters.push("limit=1");
            }
        }

        // XP Level Range
        const hasMin = config.targetLevelMin !== undefined && !isNaN(config.targetLevelMin);
        const hasMax = config.targetLevelMax !== undefined && !isNaN(config.targetLevelMax);
        if (hasMin || hasMax) {
            if (version === "bedrock") {
                if (hasMin) filters.push(`lm=${config.targetLevelMin}`);
                if (hasMax) filters.push(`l=${config.targetLevelMax}`);
            } else {
                const minVal = hasMin ? config.targetLevelMin : "";
                const maxVal = hasMax ? config.targetLevelMax : "";
                filters.push(`level=${minVal}..${maxVal}`);
            }
        }

        // Bedrock location mapping for hasitem condition
        const slotMap = {
            "weapon.mainhand": "slot.weapon.mainhand",
            "weapon.offhand": "slot.weapon.offhand",
            "armor.head": "slot.armor.head",
            "armor.chest": "slot.armor.chest",
            "armor.legs": "slot.armor.legs",
            "armor.feet": "slot.armor.feet"
        };

        if (version === "bedrock" && config.condType === "if_items") {
            const itemRaw = (config.invItem || "minecraft:diamond_sword").replace("minecraft:", "");
            const slotRaw = slotMap[config.invSlot] || "slot.weapon.mainhand";
            const countVal = config.invCount !== undefined ? config.invCount : 1;
            filters.push(`hasitem={item=${itemRaw},location=${slotRaw},quantity=${countVal}..}`);
        }

        return filters.length > 0 ? `${base}[${filters.join(",")}]` : base;
    },

    generateExecute(config, version) {
        // --- 1. COMPILE SELECTOR ---
        const selector = this.compileSelector(config, version);

        // --- 2. COMPILE EXECUTE ANCHOR PREAMBLE ---
        let preamble = "";
        if (version === "bedrock") {
            // Bedrock supports modern execute since 1.19.50+
            if (config.anchor === "at") {
                preamble = `execute at ${selector}`;
            } else if (config.anchor === "as") {
                preamble = `execute as ${selector}`;
            } else if (config.anchor === "as_at") {
                preamble = `execute as ${selector} at @s`;
            }
        } else {
            // Java Modern & Legacy execute
            if (config.anchor === "at") {
                preamble = `execute at ${selector}`;
            } else if (config.anchor === "as") {
                preamble = `execute as ${selector}`;
            } else if (config.anchor === "as_at") {
                preamble = `execute as ${selector} at @s`;
            }
        }

        // --- 3. COMPILE CONDITIONAL CLAUSE ---
        let condition = "";
        const cType = config.condType || "always";

        if (cType === "if_block" || cType === "unless_block") {
            const prefix = cType === "if_block" ? "if" : "unless";
            const offset = config.blockOffset || "~ ~-1 ~";
            const block = config.blockType || "minecraft:lava";
            const blockCompiled = version === "bedrock" ? block.replace("minecraft:", "") : block;
            condition = `${prefix} block ${offset} ${blockCompiled}`;
        } 
        else if (cType === "if_entity" || cType === "unless_entity") {
            const prefix = cType === "if_entity" ? "if" : "unless";
            const mob = config.mobType || "minecraft:creeper";
            const mobCompiled = version === "bedrock" ? mob.replace("minecraft:", "") : mob;
            const distFilter = this.parseRangeForSelector(config.distance, version === "bedrock");
            condition = `${prefix} entity @e[type=${mobCompiled},${distFilter}]`;
        } 
        else if (cType === "if_sneaking") {
            if (version === "bedrock") {
                condition = "positioned ~ ~1.6 ~ unless entity @s[dx=0,dy=0.4,dz=0] positioned ~ ~-1.6 ~";
            } else {
                condition = "if entity @s[pose=sneaking]";
            }
        }
        else if (cType === "if_items") {
            const slot = config.invSlot || "weapon.mainhand";
            const item = config.invItem || "minecraft:diamond_sword";
            const count = config.invCount !== undefined ? config.invCount : 1;
            
            if (version === "java_modern") {
                const countStr = count > 1 ? ` ${count}..` : "";
                condition = `if items entity @s ${slot} ${item}${countStr}`;
            } else if (version === "java_legacy") {
                if (slot === "weapon.mainhand") {
                    condition = `if entity @s[nbt={SelectedItem:{id:"${item}",Count:${count}b}}]`;
                } else {
                    const slotByteMap = {
                        "weapon.offhand": "-106b",
                        "armor.head": "103b",
                        "armor.chest": "102b",
                        "armor.legs": "101b",
                        "armor.feet": "100b"
                    };
                    const slotByte = slotByteMap[slot] || "0b";
                    condition = `if entity @s[nbt={Inventory:[{Slot:${slotByte},id:"${item}",Count:${count}b}]}]`;
                }
            } else if (version === "bedrock") {
                // Handled natively in selector via hasitem
                condition = "";
            }
        }
        else if (cType === "if_dimension") {
            if (version === "bedrock") {
                condition = ""; // Bedrock doesn't have dimension checks natively in execute
            } else {
                condition = `if dimension ${config.dimension || "minecraft:overworld"}`;
            }
        } 
        else if (cType === "if_weather") {
            if (version === "bedrock") {
                condition = ""; // Bedrock doesn't have weather checks natively in execute
            } else {
                condition = `if weather ${config.weather || "rain"}`;
            }
        } 
        else if (cType === "if_score") {
            const obj = config.scoreObj || "dummy";
            const val = config.scoreVal || "1..";
            let opString = `matches ${val}`;
            
            if (config.scoreOp && config.scoreOp !== "matches") {
                if (config.scoreOp === ">=") opString = `matches ${val}..`;
                else if (config.scoreOp === "<=") opString = `matches ..${val}`;
                else if (config.scoreOp === "=") opString = `matches ${val}`;
            }
            condition = `if score @s ${obj} ${opString}`;
        }
        else if (cType === "if_altitude") {
            const minY = config.altMin !== undefined ? config.altMin : 120;
            const dy = config.altHeight !== undefined ? config.altHeight : 50;
            condition = `if entity @s[y=${minY},dy=${dy}]`;
        }

        // --- 4. COMPILE PAYLOAD ACTION ---
        let actionCmd = "";
        const action = config.action || "summon";

        if (action === "summon") {
            const mob = config.actionMob || "minecraft:creeper";
            const offset = config.summonOffset || "~ ~ ~";
            if (version === "java_modern") {
                actionCmd = `summon ${mob} ${offset}`;
            } else {
                actionCmd = `summon ${mob.replace("minecraft:", "")} ${offset}`;
            }
        } 
        else if (action === "playsound") {
            const sound = config.actionSound || "minecraft:entity.creeper.primed";
            const volume = config.soundVolume !== undefined ? config.soundVolume : 1.0;
            const pitch = config.soundPitch !== undefined ? config.soundPitch : 1.0;
            const category = config.soundCategory || "master";

            if (version === "bedrock") {
                const brSound = this.translateSoundToBedrock(sound);
                actionCmd = `playsound ${brSound} @s ~ ~ ~ ${volume} ${pitch}`;
            } else if (version === "java_legacy") {
                actionCmd = `playsound ${sound.replace("minecraft:", "")} ${category} @s ~ ~ ~ ${volume} ${pitch}`;
            } else {
                actionCmd = `playsound ${sound} ${category} @s ~ ~ ~ ${volume} ${pitch}`;
            }
        } 
        else if (action === "particle") {
            const particle = config.actionParticle || "minecraft:portal";
            const speed = config.particleSpeed !== undefined ? config.particleSpeed : 0.1;
            const count = config.particleCount !== undefined ? config.particleCount : 30;
            const offset = config.particleOffset || "~ ~1 ~";

            if (version === "bedrock") {
                const brPart = this.translateParticleToBedrock(particle);
                actionCmd = `particle ${brPart} ${offset}`;
            } else if (version === "java_legacy") {
                actionCmd = `particle ${particle.replace("minecraft:", "")} ${offset} 0.2 0.2 0.2 ${speed} ${count}`;
            } else {
                actionCmd = `particle ${particle} ${offset} 0.2 0.2 0.2 ${speed} ${count}`;
            }
        } 
        else if (action === "effect") {
            const effect = config.actionEffect || "minecraft:blindness";
            const duration = config.effectDuration !== undefined ? config.effectDuration : 10;
            const amp = config.effectAmp !== undefined ? config.effectAmp : 1;
            const hide = !!config.effectHideParticles;

            if (version === "bedrock") {
                const brEffect = this.translateEffectToBedrock(effect);
                actionCmd = `effect @s ${brEffect} ${duration} ${amp} ${hide ? "true" : "false"}`;
            } else if (version === "java_legacy") {
                actionCmd = `effect give @s ${effect.replace("minecraft:", "")} ${duration} ${amp} ${hide ? "true" : "false"}`;
            } else {
                actionCmd = `effect give @s ${effect} ${duration} ${amp} ${hide ? "true" : "false"}`;
            }
        } 
        else if (action === "setblock") {
            const block = config.actionBlockPlace || "minecraft:lava";
            const offset = config.blockPlaceOffset || "~ ~ ~";
            const blockCompiled = version === "bedrock" ? block.replace("minecraft:", "") : block;
            actionCmd = `setblock ${offset} ${blockCompiled}`;
        } 
        else if (action === "tellraw") {
            const txt = config.tellrawText || "A weird chill runs down your spine...";
            const color = config.tellrawColor || "white";

            if (version === "bedrock") {
                const code = this.colorCodeBedrock(color);
                actionCmd = `tellraw @s {"rawtext":[{"text":"${code}${this.escapeString(txt)}"}]}`;
            } else {
                actionCmd = `tellraw @s {"text":"${this.escapeString(txt)}","color":"${color}"}`;
            }
        } 
        else if (action === "combust") {
            if (version === "java_modern") {
                actionCmd = "damage @s 1 minecraft:on_fire";
            } else if (version === "java_legacy") {
                actionCmd = "setblock ~ ~ ~ fire";
            } else if (version === "bedrock") {
                actionCmd = "damage @s 1 fire";
            }
        }
        else if (action === "wipe_inv") {
            const item = config.clearItem || "all";
            if (item === "all") {
                actionCmd = "clear @s";
            } else {
                const compiledItem = version === "bedrock" ? item.replace("minecraft:", "") : item;
                actionCmd = `clear @s ${compiledItem}`;
            }
        }
        else if (action === "custom") {
            let custom = (config.customCmd || "/say Hi!").trim();
            if (!custom.startsWith("/")) {
                custom = "/" + custom;
            }
            // Strip leading / since execute syntax runs command relative
            actionCmd = custom.substring(1);
        }

        // --- 5. COMBINE BLOCKS ---
        let compiled = preamble;
        if (condition) {
            compiled += ` ${condition}`;
        }
        compiled += ` run ${actionCmd}`;

        return compiled;
    }
};

if (typeof module !== 'undefined') {
    module.exports = Generator;
}

