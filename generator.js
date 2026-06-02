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
            return `/give @p ${itemId}${compString} 1`;
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
            return `/give @p ${itemId}${nbtString} 1`;
        }

        // --- BEDROCK EDITION ---
        if (version === "bedrock") {
            // Bedrock `/give` does not support inline NBT tags directly.
            // We output a clean `/give` command followed by `/enchant` calls for convenience.
            let commands = [];
            commands.push(`/give @p ${itemId.replace("minecraft:", "")} 1`);
            
            if (enchantments.length > 0) {
                commands.push("# Apply Enchantments (Run while holding item):");
                enchantments.forEach(e => {
                    commands.push(`/enchant @p ${e.id} ${e.lvl}`);
                });
            }

            if (customName || isUnbreakable || loreLines.length > 0) {
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
        return `/summon ${mobType}~ ~ ~${nbtString}`;
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
    }
};
