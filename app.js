/* ==========================================================================
   MineCommand Studio - Main Application Controller (Upgraded & Verified)
   ========================================================================== */

let soundFXEnabled = true;
let activeTab = "home-pane";
let currentTrollFilter = "all";
let presets = [];

let activeChainId = null;

const BANNER_COLORS = [
    { id: "white", name: "White", code: 15, emoji: "⚪" },
    { id: "orange", name: "Orange", code: 14, emoji: "🟠" },
    { id: "magenta", name: "Magenta", code: 13, emoji: "🌸" },
    { id: "light_blue", name: "Light Blue", code: 12, emoji: "🐟" },
    { id: "yellow", name: "Yellow", code: 11, emoji: "🟡" },
    { id: "lime", name: "Lime", code: 10, emoji: "🟢" },
    { id: "pink", name: "Pink", code: 9, emoji: "🌸" },
    { id: "gray", name: "Gray", code: 8, emoji: "🔘" },
    { id: "light_gray", name: "Light Gray", code: 7, emoji: "🔘" },
    { id: "cyan", name: "Cyan", code: 6, emoji: "🐳" },
    { id: "purple", name: "Purple", code: 5, emoji: "🟣" },
    { id: "blue", name: "Blue", code: 4, emoji: "🔵" },
    { id: "brown", name: "Brown", code: 3, emoji: "🟤" },
    { id: "green", name: "Green", code: 2, emoji: "🟢" },
    { id: "red", name: "Red", code: 1, emoji: "🔴" },
    { id: "black", name: "Black", code: 0, emoji: "⚫" }
];

const BANNER_PATTERNS = [
    { id: "minecraft:stripe_top", name: "Stripe Top (Chief)", code: "ts" },
    { id: "minecraft:stripe_bottom", name: "Stripe Bottom (Base)", code: "bs" },
    { id: "minecraft:stripe_left", name: "Stripe Left (Pale Dexter)", code: "ls" },
    { id: "minecraft:stripe_right", name: "Stripe Right (Pale Sinister)", code: "rs" },
    { id: "minecraft:stripe_center", name: "Stripe Center (Pale)", code: "ms" },
    { id: "minecraft:stripe_middle", name: "Stripe Middle (Fess)", code: "cs" },
    { id: "minecraft:stripe_downright", name: "Stripe Down Right (Bend)", code: "drs" },
    { id: "minecraft:stripe_downleft", name: "Stripe Down Left (Bend Sinister)", code: "dls" },
    { id: "minecraft:small_stripes", name: "Small Stripes (Pily)", code: "ss" },
    { id: "minecraft:cross", name: "Cross (Saltire)", code: "cr" },
    { id: "minecraft:straight_cross", name: "Straight Cross", code: "sc" },
    { id: "minecraft:triangle_bottom", name: "Triangle Bottom (Chevron)", code: "bt" },
    { id: "minecraft:triangle_top", name: "Triangle Top (Inverted Chevron)", code: "tt" },
    { id: "minecraft:triangles_bottom", name: "Triangles Bottom (Base Indented)", code: "bts" },
    { id: "minecraft:triangles_top", name: "Triangles Top (Chief Indented)", code: "tts" },
    { id: "minecraft:diagonal_left", name: "Diagonal Left (Per Bend Sinister)", code: "ld" },
    { id: "minecraft:diagonal_right", name: "Diagonal Right (Per Bend)", code: "rd" },
    { id: "minecraft:diagonal_up_left", name: "Diagonal Up Left (Per Bend Inverted)", code: "lud" },
    { id: "minecraft:diagonal_up_right", name: "Diagonal Up Right (Per Bend Sinister Inverted)", code: "rud" },
    { id: "minecraft:square_bottom_left", name: "Square Bottom Left (Base Dexter Canton)", code: "bl" },
    { id: "minecraft:square_bottom_right", name: "Square Bottom Right (Base Sinister Canton)", code: "br" },
    { id: "minecraft:square_top_left", name: "Square Top Left (Chief Dexter Canton)", code: "tl" },
    { id: "minecraft:square_top_right", name: "Square Top Right (Chief Sinister Canton)", code: "tr" },
    { id: "minecraft:circle", name: "Circle (Roundel)", code: "mc" },
    { id: "minecraft:rhombus", name: "Rhombus (Lozenge)", code: "mr" },
    { id: "minecraft:half_vertical", name: "Half Vertical (Per Pale)", code: "vh" },
    { id: "minecraft:half_horizontal", name: "Half Horizontal (Per Fess)", code: "hh" },
    { id: "minecraft:half_vertical_right", name: "Half Vertical Right (Per Pale Inverted)", code: "vhr" },
    { id: "minecraft:half_horizontal_bottom", name: "Half Horizontal Bottom (Per Fess Inverted)", code: "hhr" },
    { id: "minecraft:border", name: "Border (Bordure)", code: "bo" },
    { id: "minecraft:curly_border", name: "Border Indented (Bordure Indented)", code: "cbo" },
    { id: "minecraft:brick", name: "Bricks (Field Masoned)", code: "bri" },
    { id: "minecraft:gradient", name: "Gradient", code: "gra" },
    { id: "minecraft:gradient_up", name: "Gradient Up (Inverted Gradient)", code: "gru" },
    { id: "minecraft:creeper", name: "Creeper Charge", code: "cre" },
    { id: "minecraft:skull", name: "Skull Charge", code: "sku" },
    { id: "minecraft:flower", name: "Flower Charge", code: "flo" },
    { id: "minecraft:mojang", name: "Thing (Mojang Logo)", code: "moj" },
    { id: "minecraft:globe", name: "Globe", code: "glb" },
    { id: "minecraft:piglin", name: "Snout (Piglin Snout)", code: "pig" },
    { id: "minecraft:flow", name: "Flow", code: "flw" },
    { id: "minecraft:guster", name: "Guster", code: "gus" }
];

const app = {
    // Safety Event Binders
    safeBind(id, event, callback) {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener(event, callback);
        }
    },

    safeBindAll(selector, event, callback) {
        document.querySelectorAll(selector).forEach(el => {
            el.addEventListener(event, callback);
        });
    },

    init() {
        const runSafe = (name, fn) => {
            try {
                fn();
            } catch (err) {
                console.error(`Error during init [${name}]:`, err);
            }
        };

        runSafe("loadPresetsFromStorage", () => app.loadPresetsFromStorage());
        runSafe("initAllCustomDropdowns", () => app.initAllCustomDropdowns());
        runSafe("hydrateEnchantments", () => app.hydrateEnchantments());
        runSafe("hydrateMobEffects", () => app.hydrateMobEffects());
        runSafe("hydratePotionEffects", () => app.hydratePotionEffects());
        runSafe("initCreativeInventory", () => app.initCreativeInventory());
        runSafe("initContainerMaker", () => app.initContainerMaker());
        runSafe("initMobGearEnch", () => app.initMobGearEnch());
        runSafe("initMobGearPresetSelect", () => app.initMobGearPresetSelect());
        runSafe("initExecutePresetSelectors", () => app.initExecutePresetSelectors());
        runSafe("initBannerMaker", () => app.initBannerMaker());
        runSafe("initDocs", () => app.initDocs());
        runSafe("renderDocs", () => app.renderDocs());
        runSafe("registerEventListeners", () => app.registerEventListeners());
        runSafe("updateMountUIState", () => app.updateMountUIState());
        runSafe("switchTab", () => app.switchTab("home-pane", true));
        runSafe("updateTrollGrids", () => app.updateTrollGrids());
        runSafe("updateSpecialMobPanel", () => app.updateSpecialMobPanel());
        runSafe("recalculateCurrentCommand", () => app.recalculateCurrentCommand());

        document.addEventListener("click", () => {
            document.querySelectorAll(".pattern-dropdown-list").forEach(dl => {
                dl.style.display = "none";
            });
        });
    },

    renderIcon(icon) {
        if (icon && (icon.startsWith('http') || icon.startsWith('data:'))) {
            return `<img src="${icon}" class="mc-dropdown-icon-img" alt="icon" loading="lazy" onerror="this.onerror=null; this.src='https://cdn.jsdelivr.net/gh/Owen1212055/mc-assets@main/item-assets/BARRIER.png';">`;
        }
        return icon || "🟩";
    },

    getEnchantmentIcon(type, id) {
        if (id && (id.includes('curse') || id.includes('vanishing') || id.includes('binding'))) {
            return 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/item/enchanted_book.png';
        }
        switch (type) {
            case 'weapon':
            case 'sword':
                return 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/item/diamond_sword.png';
            case 'armor':
                return 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/item/diamond_chestplate.png';
            case 'helm':
            case 'helmet':
                return 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/item/diamond_helmet.png';
            case 'chestplate':
                return 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/item/diamond_chestplate.png';
            case 'leggings':
                return 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/item/diamond_leggings.png';
            case 'boots':
                return 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/item/diamond_boots.png';
            case 'digger':
            case 'tool':
                return 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/item/diamond_pickaxe.png';
            case 'bow':
                return 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/item/bow_standby.png';
            case 'crossbow':
                return 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/item/crossbow_standby.png';
            case 'trident':
                return 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/item/trident.png';
            case 'fishing_rod':
                return 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/item/fishing_rod_cast.png';
            case 'wearable':
            case 'elytra':
                return 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/item/elytra.png';
            case 'vanilla':
            case 'breakables':
            default:
                return 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/item/enchanted_book.png';
        }
    },

    getParticleIcon(particleId) {
        const cleanId = particleId.replace("minecraft:", "");
        if (cleanId.includes("angry_villager")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/angry.png";
        if (cleanId.includes("happy_villager")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/glint.png";
        if (cleanId.includes("heart")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/heart.png";
        if (cleanId.includes("note")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/note.png";
        if (cleanId.includes("bubble")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/bubble.png";
        if (cleanId.includes("crit")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/crit.png";
        if (cleanId.includes("damage")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/heart.png";
        if (cleanId.includes("flame")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/flame.png";
        if (cleanId.includes("lava")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/lava.png";
        if (cleanId.includes("nautilus")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/nautilus.png";
        if (cleanId.includes("portal")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/generic_5.png";
        if (cleanId.includes("sculk")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/block/sculk.png";
        if (cleanId.includes("smoke")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/generic_0.png";
        if (cleanId.includes("soul")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/soul_0.png";
        if (cleanId.includes("spit")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/generic_0.png";
        if (cleanId.includes("witch")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/spell_0.png";
        if (cleanId.includes("explosion")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/explosion_0.png";
        if (cleanId.includes("dripping_water") || cleanId.includes("falling_water") || cleanId.includes("splash")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/splash_0.png";
        if (cleanId.includes("dripping_lava") || cleanId.includes("falling_lava")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/lava.png";
        if (cleanId.includes("dust") || cleanId.includes("effect")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/generic_2.png";
        if (cleanId.includes("enchanted_hit")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/enchanted_hit.png";
        if (cleanId.includes("enchant")) return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/sga_a.png";
        return "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.2/assets/minecraft/textures/particle/generic_0.png";
    },

    // 2. Programmatic Sound FX Synthesis (Web Audio API)
    playClick() {
        if (!soundFXEnabled) return;
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            
            // Low transient thud (wood sound impact)
            const osc1 = ctx.createOscillator();
            const gain1 = ctx.createGain();
            osc1.type = 'triangle';
            osc1.frequency.setValueAtTime(140, ctx.currentTime);
            osc1.frequency.exponentialRampToValueAtTime(15, ctx.currentTime + 0.06);
            gain1.gain.setValueAtTime(0.25, ctx.currentTime);
            gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.06);
            osc1.connect(gain1);
            gain1.connect(ctx.destination);
            osc1.start();
            osc1.stop(ctx.currentTime + 0.06);

            // High wooden snap/click
            const osc2 = ctx.createOscillator();
            const gain2 = ctx.createGain();
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(1900, ctx.currentTime);
            osc2.frequency.exponentialRampToValueAtTime(350, ctx.currentTime + 0.025);
            gain2.gain.setValueAtTime(0.12, ctx.currentTime);
            gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.025);
            osc2.connect(gain2);
            gain2.connect(ctx.destination);
            osc2.start();
            osc2.stop(ctx.currentTime + 0.025);
        } catch (e) {
            console.warn("Audio Context blocked or not supported on this device.", e);
        }
    },

    // 3. Tab Navigation & Routing
    switchTab(tabId, silent = false) {
        activeTab = tabId;
        if (!silent) app.playClick();

        // Collapse mobile menu if open
        const sidebar = document.querySelector(".mc-sidebar");
        const mobileTrigger = document.getElementById("mobile-nav-trigger");
        if (sidebar) {
            sidebar.classList.remove("open");
        }
        if (mobileTrigger) {
            mobileTrigger.setAttribute("aria-expanded", "false");
        }

        // Manage sidebar buttons
        document.querySelectorAll('.nav-tab').forEach(btn => {
            if (btn.dataset.target === tabId) {
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
                
                // Update mobile trigger button text and icon
                if (mobileTrigger) {
                    const iconSpan = btn.querySelector(".nav-icon");
                    const textSpan = btn.querySelector(".nav-text");
                    const triggerIcon = mobileTrigger.querySelector(".trigger-icon");
                    const triggerText = mobileTrigger.querySelector(".trigger-text");
                    if (triggerIcon && iconSpan) triggerIcon.textContent = iconSpan.textContent;
                    if (triggerText && textSpan) triggerText.textContent = textSpan.textContent;
                }
            } else {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            }
        });

        // Manage content panes visibility
        document.querySelectorAll('.pane').forEach(pane => {
            if (pane.id === tabId) {
                pane.classList.add('active');
                pane.setAttribute('aria-hidden', 'false');
            } else {
                pane.classList.remove('active');
                pane.setAttribute('aria-hidden', 'true');
            }
        });

        // Hide/Show Save Presets widget in sticky command box
        const presetWidget = document.getElementById("preset-save-widget");
        if (tabId === "mobs-pane" || tabId === "items-pane" || tabId === "execute-pane" || tabId === "potions-pane" || tabId === "banners-pane") {
            presetWidget.style.display = "flex";
        } else {
            presetWidget.style.display = "none";
        }

        // Reset Console states when leaving Troll Pane
        if (tabId !== "trolls-pane") {
            document.getElementById("single-command-widget").style.display = "flex";
            const modal = document.getElementById("chain-modal-overlay");
            if (modal) {
                modal.classList.remove("show");
                modal.style.display = "none";
            }
            activeChainId = null;
        }

        if (tabId === "items-pane") {
            app.populateItemContainerPresets();
        }

        app.recalculateCurrentCommand();
    },

    // ==========================================================================
    // 4. Custom Visual Dropdowns Architecture (Hydration & Event Maps)
    // ==========================================================================
    initAllCustomDropdowns() {
        // Dropdown 1: Mob Type Select
        app.buildCustomDropdown(
            "dropdown-mob-type",
            MC_DATA.mobs,
            "minecraft:zombie",
            () => {
                app.updateSpecialMobPanel();
                app.recalculateCurrentCommand();
            }
        );

        // Dropdown for Mob Mount Default Select
        app.buildCustomDropdown(
            "dropdown-mob-mount-default",
            MC_DATA.mobs,
            "minecraft:chicken",
            () => app.recalculateCurrentCommand()
        );

        // Dropdown 2: Item Smith select
        const itemCategories = {
            "Weapons & Ranged": MC_DATA.items.weapons,
            "Helmets": MC_DATA.items.helmets,
            "Chestplates": MC_DATA.items.chestplates,
            "Leggings": MC_DATA.items.leggings,
            "Boots": MC_DATA.items.boots,
            "Tools": MC_DATA.items.tools,
            "Blocks": MC_DATA.items.blocks,
            "Misc & Materials": MC_DATA.items.misc
        };

        app.buildGroupedCustomDropdown(
            "dropdown-item-type",
            itemCategories,
            "minecraft:diamond_sword",
            () => app.recalculateCurrentCommand()
        );

        // Dropdowns 3-8: Mob Equipment Slots
        const handSlots = {
            "Weapons": MC_DATA.items.weapons,
            "Tools": MC_DATA.items.tools,
            "Blocks": MC_DATA.items.blocks,
            "Misc": MC_DATA.items.misc
        };

        const armorSlots = {
            "dropdown-eq-head": { label: "Helmets", list: MC_DATA.items.helmets },
            "dropdown-eq-chest": { label: "Chestplates", list: MC_DATA.items.chestplates },
            "dropdown-eq-legs": { label: "Leggings", list: MC_DATA.items.leggings },
            "dropdown-eq-feet": { label: "Boots", list: MC_DATA.items.boots }
        };

        // Hydrate Hands Slots
        app.buildGroupedCustomDropdown("dropdown-eq-hand", handSlots, "none", () => app.recalculateCurrentCommand(), true);
        app.buildGroupedCustomDropdown("dropdown-eq-offhand", handSlots, "none", () => app.recalculateCurrentCommand(), true);

        // Hydrate Armor Slots
        for (const [dropId, data] of Object.entries(armorSlots)) {
            const groups = {};
            groups[data.label] = data.list;
            groups["Blocks"] = MC_DATA.items.blocks;
            groups["Misc"] = MC_DATA.items.misc;
            app.buildGroupedCustomDropdown(dropId, groups, "none", () => app.recalculateCurrentCommand(), true);
        }

        // Hydrate Execute Builder Dropdowns
        app.buildCustomDropdown("dropdown-exec-block", MC_DATA.execute_blocks, "minecraft:lava", () => app.recalculateCurrentCommand());
        app.buildCustomDropdown("dropdown-exec-mob", MC_DATA.mobs, "minecraft:creeper", () => app.recalculateCurrentCommand());
        app.buildCustomDropdown("dropdown-exec-mob-summon", MC_DATA.mobs, "minecraft:creeper", () => app.recalculateCurrentCommand());
        app.buildCustomDropdown("dropdown-exec-sound", MC_DATA.execute_sounds, "minecraft:entity.creeper.primed", () => app.recalculateCurrentCommand());
        app.buildCustomDropdown("dropdown-exec-particle", MC_DATA.execute_particles, "minecraft:portal", () => app.recalculateCurrentCommand());
        app.buildCustomDropdown("dropdown-exec-effect", MC_DATA.execute_effects, "minecraft:blindness", () => app.recalculateCurrentCommand());
        app.buildCustomDropdown("dropdown-exec-block-place", MC_DATA.execute_blocks, "minecraft:lava", () => app.recalculateCurrentCommand());
        
        // Dynamic Slot dropdown
        app.buildCustomDropdown("dropdown-exec-inv-slot", MC_DATA.execute_slots, "weapon.mainhand", () => app.recalculateCurrentCommand());
        // Dynamic Inventory Item dropdown
        app.buildCustomDropdown("dropdown-exec-inv-item", MC_DATA.execute_items, "minecraft:diamond_sword", () => app.recalculateCurrentCommand());
        // Dynamic Clear Item dropdown
        const clearOptions = [{ id: "all", name: "Clear Entire Inventory (All)", icon: "❌" }].concat(MC_DATA.execute_items);
        app.buildCustomDropdown("dropdown-exec-clear-item", clearOptions, "all", () => app.recalculateCurrentCommand());

        // Give Standard Item dropdown
        app.buildCustomDropdown("dropdown-exec-item-give", MC_DATA.all_items, "minecraft:diamond_sword", () => app.recalculateCurrentCommand());

        // Setup global listener to close dropdowns when clicking outside
        document.addEventListener("click", (e) => {
            if (!e.target.closest(".mc-custom-dropdown")) {
                document.querySelectorAll(".mc-custom-dropdown").forEach(d => d.classList.remove("open"));
            }
        });
    },

    // Build flat searchable dropdown (e.g. Mobs)
    buildCustomDropdown(dropdownId, list, defaultValue, onSelectCallback) {
        const wrapper = document.getElementById(dropdownId);
        if (!wrapper) return;
        const trigger = wrapper.querySelector(".dropdown-trigger");
        const optionsBox = wrapper.querySelector(".dropdown-options");
        const searchInput = wrapper.querySelector(".dropdown-search");

        // Clear choices
        optionsBox.innerHTML = "";

        list.forEach(item => {
            const option = document.createElement("div");
            option.className = "dropdown-option";
            option.dataset.value = item.id;
            option.innerHTML = `
                <span class="option-icon">${app.renderIcon(item.icon)}</span>
                <span class="dropdown-option-text">${item.name}</span>
            `;
            
            option.addEventListener("click", (e) => {
                e.stopPropagation();
                app.selectCustomDropdownOption(dropdownId, item.id, item.name, app.renderIcon(item.icon));
                wrapper.classList.remove("open");
                if (onSelectCallback) onSelectCallback();
            });

            optionsBox.appendChild(option);
        });

        // Setup default trigger
        const defaultItem = list.find(it => it.id === defaultValue);
        if (defaultItem) {
            app.selectCustomDropdownOption(dropdownId, defaultValue, defaultItem.name, app.renderIcon(defaultItem.icon));
        }

        // Toggle Open/Close click
        trigger.addEventListener("click", (e) => {
            e.stopPropagation();
            app.playClick();
            // Close other dropdowns first
            document.querySelectorAll(".mc-custom-dropdown").forEach(d => {
                if (d.id !== dropdownId) d.classList.remove("open");
            });
            wrapper.classList.toggle("open");
            if (wrapper.classList.contains("open")) {
                searchInput.value = "";
                searchInput.focus();
                // Reset hidden searches
                optionsBox.querySelectorAll(".dropdown-option").forEach(o => o.style.display = "flex");
            }
        });

        // Filter search input events
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            optionsBox.querySelectorAll(".dropdown-option").forEach(opt => {
                const text = opt.querySelector(".dropdown-option-text").textContent.toLowerCase();
                const val = opt.dataset.value.toLowerCase();
                if (text.includes(query) || val.includes(query)) {
                    opt.style.display = "flex";
                } else {
                    opt.style.display = "none";
                }
            });
        });

        // Prevent dropdown close when clicking search input
        searchInput.addEventListener("click", (e) => e.stopPropagation());
    },

    // Build categorized grouped dropdowns (e.g. Items, equipment slots)
    buildGroupedCustomDropdown(dropdownId, groups, defaultValue, onSelectCallback, includeEmpty = false) {
        const wrapper = document.getElementById(dropdownId);
        if (!wrapper) return;
        const trigger = wrapper.querySelector(".dropdown-trigger");
        const optionsBox = wrapper.querySelector(".dropdown-options");
        const searchInput = wrapper.querySelector(".dropdown-search");

        // Clear choices
        optionsBox.innerHTML = "";

        // Attach optional Empty/None slot
        if (includeEmpty) {
            const option = document.createElement("div");
            option.className = "dropdown-option";
            option.dataset.value = "none";
            option.innerHTML = `
                <span class="option-icon">❌</span>
                <span class="dropdown-option-text">Empty Slot</span>
            `;
            option.addEventListener("click", (e) => {
                e.stopPropagation();
                app.selectCustomDropdownOption(dropdownId, "none", "Empty Slot", "❌");
                wrapper.classList.remove("open");
                if (onSelectCallback) onSelectCallback();
            });
            optionsBox.appendChild(option);
        }

        // Hydrate groups
        for (const [grpName, list] of Object.entries(groups)) {
            const title = document.createElement("div");
            title.className = "dropdown-optgroup-title";
            title.textContent = grpName;
            optionsBox.appendChild(title);

            list.forEach(item => {
                const option = document.createElement("div");
                option.className = "dropdown-option";
                option.dataset.value = item.id;
                option.innerHTML = `
                    <span class="option-icon">${app.renderIcon(item.icon)}</span>
                    <span class="dropdown-option-text">${item.name}</span>
                `;
                
                option.addEventListener("click", (e) => {
                    e.stopPropagation();
                    app.selectCustomDropdownOption(dropdownId, item.id, item.name, app.renderIcon(item.icon));
                    wrapper.classList.remove("open");
                    if (onSelectCallback) onSelectCallback();
                });

                optionsBox.appendChild(option);
            });
        }

        // Setup default selection trigger
        if (defaultValue === "none") {
            app.selectCustomDropdownOption(dropdownId, "none", "Empty Slot", "❌");
        } else {
            // Find in deep lists
            let defaultItem = null;
            for (const list of Object.values(groups)) {
                const found = list.find(it => it.id === defaultValue);
                if (found) {
                    defaultItem = found;
                    break;
                }
            }
            if (defaultItem) {
                app.selectCustomDropdownOption(dropdownId, defaultValue, defaultItem.name, app.renderIcon(defaultItem.icon));
            }
        }

        // Toggle clicks
        trigger.addEventListener("click", (e) => {
            e.stopPropagation();
            app.playClick();
            document.querySelectorAll(".mc-custom-dropdown").forEach(d => {
                if (d.id !== dropdownId) d.classList.remove("open");
            });
            wrapper.classList.toggle("open");
            if (wrapper.classList.contains("open")) {
                searchInput.value = "";
                searchInput.focus();
                optionsBox.querySelectorAll(".dropdown-option").forEach(o => o.style.display = "flex");
            }
        });

        // Filter search input
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            optionsBox.querySelectorAll(".dropdown-option").forEach(opt => {
                const text = opt.querySelector(".dropdown-option-text").textContent.toLowerCase();
                const val = opt.dataset.value.toLowerCase();
                if (text.includes(query) || val.includes(query)) {
                    opt.style.display = "flex";
                } else {
                    opt.style.display = "none";
                }
            });
        });

        searchInput.addEventListener("click", (e) => e.stopPropagation());
    },

    // Set value and trigger labels programmatically
    selectCustomDropdownOption(dropdownId, val, label, iconHtml) {
        const wrapper = document.getElementById(dropdownId);
        if (!wrapper) return;
        const hiddenInput = wrapper.querySelector("input[type='hidden']");
        const triggerIcon = wrapper.querySelector(".dropdown-trigger-icon");
        const triggerText = wrapper.querySelector(".dropdown-trigger-text");

        if (hiddenInput) hiddenInput.value = val;
        if (triggerIcon) triggerIcon.innerHTML = iconHtml || "";
        if (triggerText) triggerText.textContent = label || "";

        // Toggle active states in options list
        const optionsBox = wrapper.querySelector(".dropdown-options");
        if (optionsBox) {
            optionsBox.querySelectorAll(".dropdown-option").forEach(opt => {
                if (opt.dataset.value === val) {
                    opt.classList.add("active");
                } else {
                    opt.classList.remove("active");
                }
            });
        }
    },

    // Helper: Select option by Value lookup (useful for preset loads)
    selectDropdownByValue(dropdownId, targetVal) {
        const wrapper = document.getElementById(dropdownId);
        if (!wrapper) return;
        const optionsBox = wrapper.querySelector(".dropdown-options");
        if (!optionsBox) return;
        const option = optionsBox.querySelector(`.dropdown-option[data-value="${targetVal}"]`);
        
        if (option) {
            const iconEl = option.querySelector(".option-icon");
            const textEl = option.querySelector(".dropdown-option-text");
            const iconHtml = iconEl ? iconEl.innerHTML : "";
            const name = textEl ? textEl.textContent : "";
            app.selectCustomDropdownOption(dropdownId, targetVal, name, iconHtml);
        } else if (targetVal === "none") {
            app.selectCustomDropdownOption(dropdownId, "none", "Empty Slot", "❌");
        }
    },

    // 5. Enchantment Checkbox Hydration & Sliders
    hydrateEnchantments() {
        const container = document.getElementById("enchantments-checklist-container");
        container.innerHTML = "";

        MC_DATA.enchantments.forEach(e => {
            const div = document.createElement("div");
            div.className = "enchant-item";
            div.dataset.type = e.type;
            div.dataset.name = e.name.toLowerCase();

            div.innerHTML = `
                <div class="enchant-row-top">
                    <label class="mc-checkbox-label">
                        <input type="checkbox" class="ench-cb" data-ench-id="${e.id}">
                        <span class="mc-checkbox"></span>
                        ${e.name}
                    </label>
                </div>
                <div class="enchant-row-bottom" id="ench-slider-row-${e.id}">
                    <div class="slider-group">
                        <div class="slider-header">
                            <label>Enchantment Level</label>
                            <span id="ench-lbl-${e.id}">Level 1</span>
                        </div>
                        <input type="range" class="ench-slider" data-ench-id="${e.id}" min="1" max="255" value="1">
                    </div>
                </div>
            `;
            container.appendChild(div);
        });
    },

    hydrateMobEffects() {
        const container = document.getElementById("mob-effects-checklist-container");
        if (!container) return;
        container.innerHTML = "";

        MC_DATA.effects.forEach(eff => {
            const div = document.createElement("div");
            div.className = "enchant-item";
            div.dataset.name = eff.name.toLowerCase();

            div.innerHTML = `
                <div class="enchant-row-top">
                    <label class="mc-checkbox-label">
                        <input type="checkbox" class="mob-eff-cb" data-eff-id="${eff.id}">
                        <span class="mc-checkbox"></span>
                        ${app.renderIcon(eff.icon)}
                        <span>${eff.name}</span>
                    </label>
                </div>
                <div class="enchant-row-bottom" id="mob-eff-slider-row-${eff.id}">
                    <div class="slider-group">
                        <div class="slider-header">
                            <label>Effect Amplifier</label>
                            <span id="mob-eff-lbl-${eff.id}">Level 1</span>
                        </div>
                        <input type="range" class="mob-eff-slider" data-eff-id="${eff.id}" min="1" max="255" value="1">
                    </div>
                    <div class="slider-group" style="margin-top: 8px;">
                        <div class="slider-header">
                            <label>Duration (seconds)</label>
                            <span id="mob-eff-dur-lbl-${eff.id}">Infinite</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <input type="range" class="mob-eff-dur-slider" data-eff-id="${eff.id}" min="1" max="1000" value="60" disabled style="flex: 1;">
                            <div style="display: flex; flex-direction: column; gap: 4px; align-items: flex-start; flex-shrink: 0;">
                                <label class="mc-checkbox-label" style="font-size: 11px; white-space: nowrap;">
                                    <input type="checkbox" class="mob-eff-infinite-cb" data-eff-id="${eff.id}" checked>
                                    <span class="mc-checkbox" style="width: 14px; height: 14px;"></span> Infinite
                                </label>
                                <label class="mc-checkbox-label" style="font-size: 11px; white-space: nowrap;">
                                    <input type="checkbox" class="mob-eff-hide-particles-cb" data-eff-id="${eff.id}">
                                    <span class="mc-checkbox" style="width: 14px; height: 14px;"></span> Hide Particles
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(div);
        });
    },

    hydratePotionEffects() {
        const container = document.getElementById("potion-effects-checklist-container");
        if (!container) return;
        container.innerHTML = "";

        MC_DATA.effects.forEach(eff => {
            const div = document.createElement("div");
            div.className = "enchant-item";
            div.dataset.name = eff.name.toLowerCase();

            div.innerHTML = `
                <div class="enchant-row-top">
                    <label class="mc-checkbox-label">
                        <input type="checkbox" class="pot-eff-cb" data-eff-id="${eff.id}">
                        <span class="mc-checkbox"></span>
                        ${app.renderIcon(eff.icon)}
                        <span>${eff.name}</span>
                    </label>
                </div>
                <div class="enchant-row-bottom" id="pot-eff-slider-row-${eff.id}">
                    <div class="slider-group">
                        <div class="slider-header">
                            <label>Effect Amplifier</label>
                            <span id="pot-eff-lbl-${eff.id}">Level 1</span>
                        </div>
                        <input type="range" class="pot-eff-slider" data-eff-id="${eff.id}" min="1" max="255" value="1">
                    </div>
                    <div class="slider-group" style="margin-top: 8px;">
                        <div class="slider-header">
                            <label>Duration (seconds)</label>
                            <span id="pot-eff-dur-lbl-${eff.id}">60s</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <input type="range" class="pot-eff-dur-slider" data-eff-id="${eff.id}" min="1" max="1200" value="60" style="flex: 1;">
                            <label class="mc-checkbox-label" style="font-size: 11px; white-space: nowrap; flex-shrink: 0;">
                                <input type="checkbox" class="pot-eff-infinite-cb" data-eff-id="${eff.id}">
                                <span class="mc-checkbox" style="width: 14px; height: 14px;"></span> Infinite
                            </label>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(div);
        });
    },

    activeCreativeTab: "weapons",

    initCreativeInventory() {
        const btnOpen = document.getElementById("btn-open-creative-inventory");
        const modal = document.getElementById("creative-inventory-modal");
        const btnClose = document.getElementById("btn-close-creative-modal");
        const searchInput = document.getElementById("creative-modal-search");

        if (!btnOpen || !modal) return;

        btnOpen.addEventListener("click", () => {
            app.playClick();
            app.creativeCallback = (item) => {
                app.selectDropdownByValue("dropdown-item-type", item.id);
                app.recalculateCurrentCommand();
            };
            modal.style.display = "flex";
            modal.offsetHeight; // force layout reflow
            modal.classList.add("show");
            app.renderCreativeTabs();
            app.renderCreativeGrid();
            if (searchInput) {
                searchInput.value = "";
                searchInput.focus();
            }
        });

        const closeCreativeModal = () => {
            app.playClick();
            modal.classList.remove("show");
            setTimeout(() => {
                modal.style.display = "none";
            }, 250);
        };

        if (btnClose) {
            btnClose.addEventListener("click", closeCreativeModal);
        }

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeCreativeModal();
            }
        });

        if (searchInput) {
            searchInput.addEventListener("input", () => {
                app.renderCreativeGrid();
            });
        }
    },

    renderCreativeTabs() {
        const tabsContainer = document.getElementById("creative-modal-tabs");
        if (!tabsContainer) return;
        tabsContainer.innerHTML = "";

        const categories = [
            { id: "weapons", name: "Weapons" },
            { id: "helmets", name: "Helmets" },
            { id: "chestplates", name: "Chestplates" },
            { id: "leggings", name: "Leggings" },
            { id: "boots", name: "Boots" },
            { id: "tools", name: "Tools" },
            { id: "blocks", name: "Blocks" },
            { id: "misc", name: "Misc" },
            { id: "presets", name: "Saved Items" },
            { id: "containers", name: "Saved Containers" },
            { id: "presets_mobs", name: "Saved Mobs" }
        ];

        categories.forEach(cat => {
            const btn = document.createElement("button");
            btn.className = `creative-tab ${app.activeCreativeTab === cat.id ? "active" : ""}`;
            btn.type = "button";
            btn.textContent = cat.name;
            btn.addEventListener("click", () => {
                app.playClick();
                app.activeCreativeTab = cat.id;
                app.renderCreativeTabs();
                app.renderCreativeGrid();
            });
            tabsContainer.appendChild(btn);
        });
    },

    renderCreativeGrid() {
        const grid = document.getElementById("creative-modal-grid");
        const searchInput = document.getElementById("creative-modal-search");
        if (!grid) return;
        grid.innerHTML = "";

        const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

        if (app.activeCreativeTab === "presets" || app.activeCreativeTab === "containers" || app.activeCreativeTab === "presets_mobs") {
            let list = [];
            let noPresetsMsg = "";
            if (app.activeCreativeTab === "presets") {
                list = presets.filter(p => p.type === "item");
                noPresetsMsg = "No custom items saved. Build an item and click 'Save Preset' in the Custom Items tab!";
            } else if (app.activeCreativeTab === "containers") {
                list = presets.filter(p => p.type === "container");
                noPresetsMsg = "No custom containers saved. Build a container and click 'Save Preset' in the Containers tab!";
            } else {
                list = presets.filter(p => p.type === "mob");
                noPresetsMsg = "No custom mobs saved. Build a mob and click 'Save Preset' in the Custom Mobs tab!";
            }

            if (list.length === 0) {
                grid.innerHTML = `<div class="no-presets-msg col-span-2" style="border: none; padding: 20px; font-size: 14px;">${noPresetsMsg}</div>`;
                return;
            }

            list.forEach(p => {
                let itemId = "minecraft:stone";
                let iconPath = "🟩";
                let prefixLabel = "★ Item Preset: ";

                if (p.type === "item") {
                    itemId = app.getItemIdFromCommand(p.command);
                    iconPath = getItemIconPath(itemId);
                    prefixLabel = "★ Item Preset: ";
                } else if (p.type === "container") {
                    itemId = p.containerConfig ? p.containerConfig.type : "minecraft:chest";
                    iconPath = getItemIconPath(itemId);
                    prefixLabel = "★ Container Preset: ";
                } else if (p.type === "mob") {
                    const mobName = p.details.split(": ")[1]?.split(" ")[0] || "zombie";
                    itemId = "minecraft:" + mobName;
                    iconPath = getMobIconPath(itemId);
                    prefixLabel = "★ Mob Preset: ";
                }

                if (query && !p.name.toLowerCase().includes(query) && !itemId.toLowerCase().includes(query)) {
                    return;
                }

                const cell = document.createElement("div");
                cell.className = "creative-item-cell preset-cell";
                cell.innerHTML = `
                    ${app.renderIcon(iconPath)}
                    <div class="creative-tooltip">${prefixLabel}${p.name} (${itemId.replace("minecraft:", "")})</div>
                `;

                cell.addEventListener("click", () => {
                    app.playClick();
                    if (app.creativeCallback) {
                        app.creativeCallback({
                            id: itemId,
                            name: p.name,
                            icon: iconPath,
                            isPreset: true,
                            presetId: p.id,
                            command: p.command,
                            itemConfig: p.itemConfig || null,
                            containerConfig: p.containerConfig || null
                        });
                    } else {
                        app.selectDropdownByValue("dropdown-item-type", itemId);
                        app.recalculateCurrentCommand();
                    }
                    const creativeModal = document.getElementById("creative-inventory-modal");
                    if (creativeModal) {
                        creativeModal.classList.remove("show");
                        setTimeout(() => {
                            creativeModal.style.display = "none";
                        }, 250);
                    }
                });
                grid.appendChild(cell);
            });
            return;
        }

        const list = MC_DATA.items[app.activeCreativeTab] || [];

        list.forEach(item => {
            if (query && !item.name.toLowerCase().includes(query) && !item.id.toLowerCase().includes(query)) {
                return;
            }

            const cell = document.createElement("div");
            cell.className = "creative-item-cell";
            cell.innerHTML = `
                ${app.renderIcon(item.icon)}
                <div class="creative-tooltip">${item.name}</div>
            `;

            cell.addEventListener("click", () => {
                app.playClick();
                if (app.creativeCallback) {
                    app.creativeCallback(item);
                } else {
                    app.selectDropdownByValue("dropdown-item-type", item.id);
                    app.recalculateCurrentCommand();
                }
                const creativeModal = document.getElementById("creative-inventory-modal");
                if (creativeModal) {
                    creativeModal.classList.remove("show");
                    setTimeout(() => {
                        creativeModal.style.display = "none";
                    }, 250);
                }
            });

            grid.appendChild(cell);
        });
    },

    // 6. Show / Hide Specials based on mob selected
    updateSpecialMobPanel() {
        const mob = document.getElementById("mob-type").value;
        const panel = document.getElementById("special-mob-panel");
        const grid = document.getElementById("special-options-grid");
        
        grid.innerHTML = "";
        
        if (mob === "minecraft:creeper") {
            panel.style.display = "block";
            grid.innerHTML = `
                <div class="checkbox-grid">
                    <label class="mc-checkbox-label">
                        <input type="checkbox" id="spec-creeper-powered">
                        <span class="mc-checkbox"></span>
                        Charged Creeper
                    </label>
                </div>
                <div class="input-field slider-group">
                    <div class="slider-header">
                        <label for="spec-creeper-radius">Explosion Radius</label>
                        <span id="spec-creeper-radius-lbl">3 Blocks</span>
                    </div>
                    <input type="range" id="spec-creeper-radius" min="1" max="50" value="3">
                </div>
                <div class="input-field slider-group">
                    <div class="slider-header">
                        <label for="spec-creeper-fuse">Fuse Delay (Ticks)</label>
                        <span id="spec-creeper-fuse-lbl">30 Ticks</span>
                    </div>
                    <input type="range" id="spec-creeper-fuse" min="0" max="300" step="5" value="30">
                </div>
            `;
            
            document.getElementById("spec-creeper-radius").addEventListener("input", (e) => {
                document.getElementById("spec-creeper-radius-lbl").textContent = `${e.target.value} Blocks`;
                app.recalculateCurrentCommand();
            });
            document.getElementById("spec-creeper-fuse").addEventListener("input", (e) => {
                document.getElementById("spec-creeper-fuse-lbl").textContent = `${e.target.value} Ticks`;
                app.recalculateCurrentCommand();
            });
            document.getElementById("spec-creeper-powered").addEventListener("change", () => app.recalculateCurrentCommand());

        } else if (mob === "minecraft:slime") {
            panel.style.display = "block";
            grid.innerHTML = `
                <div class="input-field col-span-2 slider-group">
                    <div class="slider-header">
                        <label for="spec-slime-size">Slime/Magma Cube Size</label>
                        <span id="spec-slime-size-lbl">Size 1</span>
                    </div>
                    <input type="range" id="spec-slime-size" min="1" max="100" value="1">
                </div>
            `;
            
            document.getElementById("spec-slime-size").addEventListener("input", (e) => {
                document.getElementById("spec-slime-size-lbl").textContent = `Size ${e.target.value}`;
                app.recalculateCurrentCommand();
            });

        } else if (mob === "minecraft:villager") {
            panel.style.display = "block";
            grid.innerHTML = `
                <div class="input-field">
                    <label for="spec-villager-profession">Villager Profession</label>
                    <div class="mc-select-wrapper">
                        <select id="spec-villager-profession">
                            <option value="none" selected>Unemployed / Nitwit</option>
                            <option value="farmer">Farmer</option>
                            <option value="librarian">Librarian</option>
                            <option value="armorer">Armorer</option>
                            <option value="weaponsmith">Weaponsmith</option>
                            <option value="toolsmith">Toolsmith</option>
                            <option value="cleric">Cleric</option>
                            <option value="fletcher">Fletcher</option>
                        </select>
                    </div>
                </div>
            `;
            document.getElementById("spec-villager-profession").addEventListener("change", () => app.recalculateCurrentCommand());
        } else {
            panel.style.display = "none";
        }
    },

    // ==========================================================================
    // 7. Unified 5-Tier Troll Screen Grid Renderer
    // ==========================================================================
    updateTrollGrids() {
        const levels = [1, 2, 3, 4, 5];

        levels.forEach(level => {
            const grid = document.getElementById(`troll-grid-l${level}`);
            if (!grid) return;
            grid.innerHTML = "";

            // Filter trolls by current level and category toggles
            const trolls = MC_DATA.trolls.filter(t => {
                const matchesLevel = t.level === level;
                const matchesFilter = currentTrollFilter === "all" || t.type === currentTrollFilter;
                return matchesLevel && matchesFilter;
            });

            if (trolls.length === 0) {
                grid.innerHTML = `<div class="no-presets-msg col-span-2">No matching troll cards found.</div>`;
                return;
            }

            trolls.forEach(t => {
                const card = document.createElement("div");
                card.className = "troll-card";
                card.dataset.trollId = t.id;

                const badgeText = t.type === "harmless" ? "🎈 Harmless" : "🔥 Grief-y";
                const badgeClass = t.type === "harmless" ? "harmless" : "grief";

                const requiresCmd = t.requires_command_block || false;
                const cmdClass = requiresCmd ? "req-cb" : "chat-ok";
                const cmdLabel = requiresCmd ? "⚙️ CMD Block" : "💬 Chat";

                card.innerHTML = `
                    <div class="card-badges">
                        <span class="troll-badge ${badgeClass}">${badgeText}</span>
                        <span class="cmd-badge ${cmdClass}">${cmdLabel}</span>
                    </div>
                    <h4>${t.name}</h4>
                    <p>${t.desc}</p>
                    <div class="troll-action-row">
                        <button class="mc-btn green-btn sm-btn">Load Prank</button>
                    </div>
                `;

                // Load Troll command on card click dynamically
                card.addEventListener("click", () => {
                    app.playClick();
                    const activeTarget = document.getElementById("troll-target").value || "@p";
                    const currentVersion = document.getElementById("version-select").value; // Dynamic read!
                    const cmd = Generator.generateTroll(t.id, activeTarget, currentVersion);
                    
                    app.displayCommand(cmd);
                });

                grid.appendChild(card);
            });
        });

        app.updateChainTrolls();
    },

    // 7.5. Command Block Chains Grid Hydration & Interaction
    updateChainTrolls() {
        const container = document.getElementById("troll-grid-chains");
        if (!container) return;
        container.innerHTML = "";

        // Hydrate the multi-block chains
        MC_DATA.trolls_chains.forEach(chain => {
            const card = document.createElement("div");
            card.className = "troll-card";
            card.dataset.chainId = chain.id;

            card.innerHTML = `
                <span class="troll-badge harmless" style="background-color: rgba(106, 13, 173, 0.15); border-color: #9c36f5; color: #a96efc;">⛓️ Chain</span>
                <h4>${chain.name}</h4>
                <p>${chain.desc}</p>
                <div class="troll-action-row">
                    <button class="mc-btn green-btn sm-btn">Load Chain</button>
                </div>
            `;

            // Load Chain on card click
            card.addEventListener("click", () => {
                app.playClick();
                app.loadChainTroll(chain.id);
            });

            container.appendChild(card);
        });
    },

    loadChainTroll(chainId) {
        const chain = MC_DATA.trolls_chains.find(c => c.id === chainId);
        if (!chain) return;

        activeChainId = chainId;

        // Open the Modal guide with smooth animations
        const modal = document.getElementById("chain-modal-overlay");
        modal.style.display = "flex";
        modal.offsetHeight; // force layout reflow
        modal.classList.add("show");

        // Hydrate the visual diagram dynamically
        const diagramBox = document.querySelector(".command-block-diagram");
        if (diagramBox) {
            diagramBox.innerHTML = "";
            chain.blocks.forEach((block, idx) => {
                if (idx > 0) {
                    const arrow = document.createElement("div");
                    arrow.className = "cb-arrow";
                    arrow.textContent = "▶";
                    diagramBox.appendChild(arrow);
                }
                
                const node = document.createElement("div");
                const isRepeater = block.type.toLowerCase() === "repeat";
                node.className = `cb-node ${isRepeater ? 'cb-node-repeater' : 'cb-node-chain'}`;
                
                const isCond = block.cond.toLowerCase() === "conditional";
                const condColor = isCond ? "color: var(--color-diamond-light);" : "color: #cccccc;";
                
                node.innerHTML = `
                    <span class="cb-face">${isRepeater ? 'R' : 'C'}</span>
                    <div class="cb-details">
                        <span class="cb-type">${block.type.toUpperCase()}</span>
                        <span class="cb-cond" style="${condColor}">${block.cond}</span>
                    </div>
                `;
                diagramBox.appendChild(node);
            });
        }

        // Hydrate step stack
        const stepsContainer = document.getElementById("chain-commands-container");
        if (!stepsContainer) return;
        stepsContainer.innerHTML = "";

        const targetVictim = document.getElementById("troll-target").value || "@p";

        chain.blocks.forEach((block, idx) => {
            const stepRow = document.createElement("div");
            stepRow.className = "chain-step-row";

            // Compile command with safety tokenization substitution
            const compiledCommand = block.cmd.replace(/\[TARGET\]/g, targetVictim);

            stepRow.innerHTML = `
                <div class="chain-step-num">${block.step}</div>
                <div class="chain-step-details">
                    <span class="chain-step-blocktype">${block.type.toUpperCase()}</span>
                    <span class="chain-step-blockmode">${block.cond} / ${block.active}</span>
                </div>
                <div class="chain-step-code-box">
                    <pre class="command-code">${app.highlightSyntax(compiledCommand)}</pre>
                </div>
                <button class="mc-btn gold-btn sm-btn">Copy [B${block.step}]</button>
            `;

            // Setup step-specific copy listener
            const copyBtn = stepRow.querySelector("button");
            copyBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                app.playClick();

                navigator.clipboard.writeText(compiledCommand).then(() => {
                    const toast = document.getElementById("toast");
                    toast.textContent = `Block ${block.step} Command Copied!`;
                    toast.classList.add("show");
                    setTimeout(() => {
                        toast.classList.remove("show");
                    }, 2000);
                }).catch(err => {
                    console.error("Copy failed", err);
                    alert("Copy code: " + compiledCommand);
                });
            });

            stepsContainer.appendChild(stepRow);
        });
    },

    updateActiveChainIfOpen() {
        if (activeChainId) {
            // Re-render without scrolling or focus change to avoid disrupting user experience
            const chain = MC_DATA.trolls_chains.find(c => c.id === activeChainId);
            if (!chain) return;

            const stepsContainer = document.getElementById("chain-commands-container");
            if (!stepsContainer) return;
            
            const targetVictim = document.getElementById("troll-target").value || "@p";

            stepsContainer.querySelectorAll(".chain-step-row").forEach((stepRow, idx) => {
                const block = chain.blocks[idx];
                const compiledCommand = block.cmd.replace(/\[TARGET\]/g, targetVictim);
                const codeBox = stepRow.querySelector(".chain-step-code-box pre");
                if (codeBox) {
                    codeBox.innerHTML = app.highlightSyntax(compiledCommand);
                }
                
                // Re-bind the copy listener
                const copyBtn = stepRow.querySelector("button");
                const newCopyBtn = copyBtn.cloneNode(true);
                copyBtn.parentNode.replaceChild(newCopyBtn, copyBtn);
                
                newCopyBtn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    app.playClick();

                    navigator.clipboard.writeText(compiledCommand).then(() => {
                        const toast = document.getElementById("toast");
                        toast.textContent = `Block ${block.step} Command Copied!`;
                        toast.classList.add("show");
                        setTimeout(() => {
                            toast.classList.remove("show");
                        }, 2000);
                    }).catch(err => {
                        console.error("Copy failed", err);
                        alert("Copy code: " + compiledCommand);
                    });
                });
            });
        }
    },

    // 8. Register DOM Event Handlers
    registerEventListeners() {
        // Mobile Sidebar Navigation Dropdown Trigger
        const mobileTrigger = document.getElementById("mobile-nav-trigger");
        const sidebar = document.querySelector(".mc-sidebar");
        if (mobileTrigger && sidebar) {
            mobileTrigger.addEventListener("click", (e) => {
                e.stopPropagation();
                const isOpen = sidebar.classList.toggle("open");
                mobileTrigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
            });
            // Close sidebar when clicking outside
            document.addEventListener("click", () => {
                sidebar.classList.remove("open");
                mobileTrigger.setAttribute("aria-expanded", "false");
            });
        }

        // Tab routing clicks
        app.safeBindAll('.nav-tab', 'click', (e) => {
            const target = e.currentTarget.dataset.target;
            app.switchTab(target);
        });

        // BIND CUSTOM 3D SEGMENTED TARGET VERSION PICKER
        app.safeBindAll("#version-picker .segment", "click", (e) => {
            app.playClick();
            document.querySelectorAll("#version-picker .segment").forEach(b => b.classList.remove("active"));
            e.currentTarget.classList.add("active");
            
            const selectEl = document.getElementById("version-select");
            if (selectEl) selectEl.value = e.currentTarget.dataset.value;
            app.recalculateCurrentCommand();
            
            if (activeTab === "trolls-pane") {
                app.updateTrollGrids();
                app.updateActiveChainIfOpen();
            }
        });

        // Sound FX toggle
        const soundBtn = document.getElementById("sound-toggle");
        if (soundBtn) {
            soundBtn.addEventListener("click", () => {
                soundFXEnabled = !soundFXEnabled;
                if (soundFXEnabled) {
                    soundBtn.classList.remove("secondary-btn");
                    soundBtn.classList.add("mc-btn-square");
                    soundBtn.innerHTML = `
                        <svg class="icon" viewBox="0 0 24 24" width="20" height="20">
                            <path fill="currentColor" d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.77 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/>
                        </svg>
                    `;
                    app.playClick();
                } else {
                    soundBtn.classList.add("secondary-btn");
                    soundBtn.innerHTML = `
                        <svg class="icon" viewBox="0 0 24 24" width="20" height="20">
                            <path fill="currentColor" d="M3.27,1.44L2,2.72L5.28,6H3V12H7L12,17V9.73L16.73,14.46C15.93,15.09 15,15.58 14,15.89V17.95C15.53,17.5 16.92,16.65 18.06,15.5L20.28,17.72L21.56,16.44L3.27,1.44M12,4L9.91,6.09L12,8.18V4M19,12C19,13.68 18.42,15.23 17.5,16.47L18.97,17.94C20.24,16.25 21,14.21 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.48,12.43 16.5,12.22 16.5,12Z"/>
                        </svg>
                    `;
                }
            });
        }

        // --- MOB STUDIO EVENTS ---
        app.safeBind("mob-name", "input", () => app.recalculateCurrentCommand());
        
        // HP slider
        const hpSlider = document.getElementById("mob-health");
        if (hpSlider) {
            hpSlider.addEventListener("input", (e) => {
                const valEl = document.getElementById("mob-health-val");
                if (valEl) valEl.textContent = `${e.target.value} HP`;
                app.recalculateCurrentCommand();
            });
        }
        
        // Speed slider
        const speedSlider = document.getElementById("mob-speed");
        if (speedSlider) {
            speedSlider.addEventListener("input", (e) => {
                const valEl = document.getElementById("mob-speed-val");
                if (valEl) valEl.textContent = `${e.target.value}x`;
                app.recalculateCurrentCommand();
            });
        }

        // Scale slider
        const scaleSlider = document.getElementById("mob-scale");
        if (scaleSlider) {
            scaleSlider.addEventListener("input", (e) => {
                const valEl = document.getElementById("mob-scale-val");
                if (valEl) valEl.textContent = `${e.target.value}x`;
                app.recalculateCurrentCommand();
            });
        }

        // Step height slider
        const stepSlider = document.getElementById("mob-step-height");
        if (stepSlider) {
            stepSlider.addEventListener("input", (e) => {
                const valEl = document.getElementById("mob-step-height-val");
                if (valEl) valEl.textContent = `${e.target.value} blocks`;
                app.recalculateCurrentCommand();
            });
        }

        // Mount type dropdown change listener
        const mountTypeSelect = document.getElementById("mob-mount-type");
        if (mountTypeSelect) {
            mountTypeSelect.addEventListener("change", () => {
                app.updateMountUIState();
                app.recalculateCurrentCommand();
            });
        }

        // Mount preset change listener
        const mountPresetSelect = document.getElementById("mob-mount-preset");
        if (mountPresetSelect) {
            mountPresetSelect.addEventListener("change", () => {
                app.recalculateCurrentCommand();
            });
        }

        // Mob Checkboxes
        app.safeBind("mob-silent", "change", () => app.recalculateCurrentCommand());
        app.safeBind("mob-noai", "change", () => app.recalculateCurrentCommand());
        app.safeBind("mob-glowing", "change", () => app.recalculateCurrentCommand());
        app.safeBind("mob-invulnerable", "change", () => app.recalculateCurrentCommand());
        app.safeBind("mob-nogravity", "change", () => app.recalculateCurrentCommand());
        app.safeBind("mob-fireimmune", "change", () => app.recalculateCurrentCommand());
        app.safeBind("mob-isbaby", "change", () => app.recalculateCurrentCommand());
        app.safeBind("mob-mount-baby", "change", () => app.recalculateCurrentCommand());

        // Mob Active Effects Checkboxes
        app.safeBind("mob-eff-speed", "change", () => app.recalculateCurrentCommand());
        app.safeBind("mob-eff-strength", "change", () => app.recalculateCurrentCommand());
        app.safeBind("mob-eff-invisibility", "change", () => app.recalculateCurrentCommand());
        app.safeBind("mob-eff-resistance", "change", () => app.recalculateCurrentCommand());
        
        // Equipment checkboxes
        app.safeBindAll(".slot-ench-toggle", "change", () => {
            app.playClick();
            app.recalculateCurrentCommand();
        });

        // --- ITEM STUDIO EVENTS ---
        app.safeBind("item-name", "input", () => app.recalculateCurrentCommand());
        app.safeBind("item-lore", "input", () => app.recalculateCurrentCommand());
        app.safeBind("item-unbreakable", "change", () => app.recalculateCurrentCommand());
        app.safeBind("item-hideflags", "change", () => app.recalculateCurrentCommand());
        app.safeBind("item-glint", "change", () => app.recalculateCurrentCommand());

        // Stack count slider
        const countSlider = document.getElementById("item-count");
        if (countSlider) {
            countSlider.addEventListener("input", (e) => {
                const valEl = document.getElementById("item-count-val");
                if (valEl) valEl.textContent = `${e.target.value} ${e.target.value == 1 ? 'Item' : 'Items'}`;
                app.recalculateCurrentCommand();
            });
        }

        // Attached container preset events
        const containerPresetSelect = document.getElementById("item-container-preset");
        const editContainerBtn = document.getElementById("btn-edit-item-container");
        if (containerPresetSelect) {
            containerPresetSelect.addEventListener("change", () => {
                if (containerPresetSelect.value && containerPresetSelect.value !== "none") {
                    if (editContainerBtn) editContainerBtn.style.display = "block";
                } else {
                    if (editContainerBtn) editContainerBtn.style.display = "none";
                }
                app.recalculateCurrentCommand();
            });
        }
        if (editContainerBtn) {
            editContainerBtn.addEventListener("click", () => {
                const val = containerPresetSelect ? containerPresetSelect.value : "none";
                if (val && val !== "none") {
                    app.loadPreset(val);
                }
            });
        }

        // Enchant checklist handlers
        const enchantContainer = document.getElementById("enchantments-checklist-container");
        if (enchantContainer) {
            enchantContainer.addEventListener("change", (e) => {
                if (e.target.classList.contains("ench-cb")) {
                    app.playClick();
                    const id = e.target.dataset.enchId;
                    const row = document.getElementById(`ench-slider-row-${id}`);
                    if (row) {
                        if (e.target.checked) {
                            row.classList.add("show");
                        } else {
                            row.classList.remove("show");
                        }
                    }
                    app.recalculateCurrentCommand();
                }
            });

            enchantContainer.addEventListener("input", (e) => {
                if (e.target.classList.contains("ench-slider")) {
                    const id = e.target.dataset.enchId;
                    const lbl = document.getElementById(`ench-lbl-${id}`);
                    if (lbl) lbl.textContent = `Level ${e.target.value}`;
                    app.recalculateCurrentCommand();
                }
            });
        }

        // Mob effects checklist handlers
        const mobEffectsContainer = document.getElementById("mob-effects-checklist-container");
        if (mobEffectsContainer) {
            mobEffectsContainer.addEventListener("change", (e) => {
                if (e.target.classList.contains("mob-eff-cb")) {
                    app.playClick();
                    const id = e.target.dataset.effId;
                    const row = document.getElementById(`mob-eff-slider-row-${id}`);
                    if (row) {
                        if (e.target.checked) {
                            row.classList.add("show");
                        } else {
                            row.classList.remove("show");
                        }
                    }
                    app.recalculateCurrentCommand();
                }
                if (e.target.classList.contains("mob-eff-infinite-cb")) {
                    app.playClick();
                    const id = e.target.dataset.effId;
                    const slider = document.querySelector(`.mob-eff-dur-slider[data-eff-id="${id}"]`);
                    const lbl = document.getElementById(`mob-eff-dur-lbl-${id}`);
                    if (slider) {
                        slider.disabled = e.target.checked;
                    }
                    if (lbl) {
                        lbl.textContent = e.target.checked ? "Infinite" : (slider ? `${slider.value}s` : "60s");
                    }
                    app.recalculateCurrentCommand();
                }
                if (e.target.classList.contains("mob-eff-hide-particles-cb")) {
                    app.playClick();
                    app.recalculateCurrentCommand();
                }
            });

            mobEffectsContainer.addEventListener("input", (e) => {
                if (e.target.classList.contains("mob-eff-slider")) {
                    const id = e.target.dataset.effId;
                    const lbl = document.getElementById(`mob-eff-lbl-${id}`);
                    if (lbl) lbl.textContent = `Level ${e.target.value}`;
                    app.recalculateCurrentCommand();
                }
                if (e.target.classList.contains("mob-eff-dur-slider")) {
                    const id = e.target.dataset.effId;
                    const lbl = document.getElementById(`mob-eff-dur-lbl-${id}`);
                    if (lbl) lbl.textContent = `${e.target.value}s`;
                    app.recalculateCurrentCommand();
                }
            });
        }

        // Search enchants filter
        app.safeBind("enchant-search", "input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            document.querySelectorAll("#enchantments-checklist-container .enchant-item").forEach(item => {
                const name = item.dataset.name;
                if (name && name.includes(query)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });

        // Stat attributes modifiers
        app.safeBindAll(".attr-input-group input", "input", () => app.recalculateCurrentCommand());

        // --- TROLL MENU EVENTS ---
        app.safeBindAll(".filter-tab", "click", (e) => {
            app.playClick();
            document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
            e.currentTarget.classList.add("active");
            currentTrollFilter = e.currentTarget.dataset.filter;
            app.updateTrollGrids();
        });

        app.safeBind("troll-target", "input", () => {
            app.updateTrollGrids();
            app.updateActiveChainIfOpen();
        });

        // 3D Command Block Chain Setup Modal Close Handlers
        const chainModal = document.getElementById("chain-modal-overlay");
        const closeChainModalFn = () => {
            app.playClick();
            if (chainModal) {
                chainModal.classList.remove("show");
                setTimeout(() => {
                    chainModal.style.display = "none";
                }, 250);
            }
            activeChainId = null;
        };

        app.safeBind("btn-close-chain-modal", "click", closeChainModalFn);
        app.safeBind("btn-close-chain-modal-bottom", "click", closeChainModalFn);
        if (chainModal) {
            chainModal.addEventListener("click", (e) => {
                if (e.target === chainModal) closeChainModalFn();
            });
        }

        // --- EXECUTE BUILDER EVENTS ---
        // Conditional block toggling
        const condSelect = document.getElementById("exec-cond-type");
        if (condSelect) {
            condSelect.addEventListener("change", (e) => {
                app.playClick();
                const type = e.target.value;
                document.querySelectorAll(".exec-conditional-group").forEach(group => {
                    group.style.display = "none";
                });
                if (type === "if_block" || type === "unless_block") {
                    const blockGroup = document.getElementById("exec-cond-field-block");
                    if (blockGroup) blockGroup.style.display = "flex";
                } else if (type === "if_entity" || type === "unless_entity") {
                    const proxGroup = document.getElementById("exec-cond-field-proximity");
                    if (proxGroup) proxGroup.style.display = "flex";
                } else if (type === "if_items") {
                    const itemsGroup = document.getElementById("exec-cond-field-items");
                    if (itemsGroup) itemsGroup.style.display = "flex";
                } else if (type === "if_dimension") {
                    const dimGroup = document.getElementById("exec-cond-field-dimension");
                    if (dimGroup) dimGroup.style.display = "flex";
                } else if (type === "if_weather") {
                    const weatherGroup = document.getElementById("exec-cond-field-weather");
                    if (weatherGroup) weatherGroup.style.display = "flex";
                } else if (type === "if_score") {
                    const scoreGroup = document.getElementById("exec-cond-field-score");
                    if (scoreGroup) scoreGroup.style.display = "flex";
                } else if (type === "if_altitude") {
                    const altGroup = document.getElementById("exec-cond-field-altitude");
                    if (altGroup) altGroup.style.display = "flex";
                }
                app.recalculateCurrentCommand();
            });
        }

        // Action parameter toggling
        const actionSelect = document.getElementById("exec-action");
        if (actionSelect) {
            actionSelect.addEventListener("change", (e) => {
                app.playClick();
                const action = e.target.value;
                document.querySelectorAll(".exec-action-group").forEach(group => {
                    group.style.display = "none";
                });
                const paramGroup = document.getElementById(`exec-action-param-${action}`);
                if (paramGroup) paramGroup.style.display = "flex";
                app.recalculateCurrentCommand();
            });
        }

        // Base selector custom mob param toggling
        const targetBaseSelect = document.getElementById("exec-target-base");
        if (targetBaseSelect) {
            targetBaseSelect.addEventListener("change", (e) => {
                app.playClick();
                const customMobParam = document.getElementById("exec-target-custom-mob-param");
                if (customMobParam) {
                    if (e.target.value === "custom_mob") {
                        customMobParam.style.display = "flex";
                    } else {
                        customMobParam.style.display = "none";
                    }
                }
                app.recalculateCurrentCommand();
            });
        }

        // General execute pane inputs
        const execInputs = [
            "exec-target-base", "exec-target-exclude", "exec-target-gamemode", "exec-target-tag", "exec-anchor",
            "exec-target-level-min", "exec-target-level-max", "exec-target-survival-only", "exec-target-limit",
            "exec-block-offset", "exec-prox-distance", "exec-dimension", "exec-weather",
            "exec-score-obj", "exec-score-op", "exec-score-val", "exec-alt-min", "exec-alt-height",
            "exec-inv-count", "exec-combust-duration",
            "exec-summon-offset", "exec-sound-volume", "exec-sound-pitch", "exec-sound-category",
            "exec-particle-count", "exec-particle-speed", "exec-particle-offset",
            "exec-effect-duration", "exec-effect-amp", "exec-effect-hide-particles",
            "exec-block-place-offset", "exec-tellraw-text", "exec-tellraw-color", "exec-custom-cmd",
            "exec-give-preset-val", "exec-give-preset-target", "exec-give-preset-count", "exec-summon-preset-val", "exec-summon-preset-offset",
            "exec-item-give", "exec-item-give-target", "exec-item-give-count",
            "exec-target-custom-mob-type", "exec-target-custom-mob-preset-name"
        ];
        execInputs.forEach(id => {
            app.safeBind(id, "input", () => app.recalculateCurrentCommand());
            app.safeBind(id, "change", () => app.recalculateCurrentCommand());
        });

        // --- PRESET ACTIONS ---
        app.safeBind("btn-save-preset", "click", () => app.saveCurrentPreset());
        app.safeBind("btn-import-preset", "click", () => app.importPreset());
        app.safeBind("btn-clear-share", "click", () => {
            app.playClick();
            const shareArea = document.getElementById("preset-json-area");
            if (shareArea) shareArea.value = "";
        });
        app.safeBind("btn-copy-command", "click", () => app.copyToClipboard());

        // Mobile console collapse/expand toggle
        const consoleHeader = document.querySelector(".console-header");
        if (consoleHeader) {
            consoleHeader.addEventListener("click", (e) => {
                if (window.innerWidth <= 900) {
                    // Check if clicked element was not the input, button or an active selector inside
                    if (e.target.tagName !== "INPUT" && e.target.tagName !== "BUTTON" && !e.target.closest("button")) {
                        const panel = document.querySelector(".mc-console-panel");
                        if (panel) {
                            panel.classList.toggle("expanded");
                            app.playClick();
                        }
                    }
                }
            });
        }

        // Potion Maker Settings Events
        app.safeBind("potion-base-type", "change", () => app.recalculateCurrentCommand());
        app.safeBind("potion-name", "input", () => app.recalculateCurrentCommand());
        app.safeBind("potion-color-picker", "input", (e) => {
            const hex = e.target.value;
            const hexInput = document.getElementById("potion-color-hex");
            if (hexInput) hexInput.value = hex;
            app.recalculateCurrentCommand();
        });
        app.safeBind("potion-color-hex", "input", (e) => {
            let val = e.target.value;
            if (val && !val.startsWith("#")) val = "#" + val;
            const picker = document.getElementById("potion-color-picker");
            if (picker && /^#[0-9A-Fa-f]{6}$/.test(val)) {
                picker.value = val;
            }
            app.recalculateCurrentCommand();
        });

        // Potion Maker Search Effects
        app.safeBind("potion-effect-search", "input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            document.querySelectorAll("#potion-effects-checklist-container .enchant-item").forEach(item => {
                const name = item.dataset.name;
                if (name && name.includes(query)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });

        // Potion Maker Checklist Event Delegation
        const potionEffectsContainer = document.getElementById("potion-effects-checklist-container");
        if (potionEffectsContainer) {
            potionEffectsContainer.addEventListener("change", (e) => {
                if (e.target.classList.contains("pot-eff-cb")) {
                    app.playClick();
                    const id = e.target.dataset.effId;
                    const row = document.getElementById(`pot-eff-slider-row-${id}`);
                    if (row) {
                        if (e.target.checked) {
                            row.classList.add("show");
                        } else {
                            row.classList.remove("show");
                        }
                    }
                    app.recalculateCurrentCommand();
                }
                if (e.target.classList.contains("pot-eff-infinite-cb")) {
                    app.playClick();
                    const id = e.target.dataset.effId;
                    const slider = document.querySelector(`.pot-eff-dur-slider[data-eff-id="${id}"]`);
                    const lbl = document.getElementById(`pot-eff-dur-lbl-${id}`);
                    if (slider) {
                        slider.disabled = e.target.checked;
                    }
                    if (lbl) {
                        lbl.textContent = e.target.checked ? "Infinite" : (slider ? `${slider.value}s` : "60s");
                    }
                    app.recalculateCurrentCommand();
                }
            });

            potionEffectsContainer.addEventListener("input", (e) => {
                if (e.target.classList.contains("pot-eff-slider")) {
                    const id = e.target.dataset.effId;
                    const lbl = document.getElementById(`pot-eff-lbl-${id}`);
                    if (lbl) lbl.textContent = `Level ${e.target.value}`;
                    app.recalculateCurrentCommand();
                }
                if (e.target.classList.contains("pot-eff-dur-slider")) {
                    const id = e.target.dataset.effId;
                    const lbl = document.getElementById(`pot-eff-dur-lbl-${id}`);
                    if (lbl) lbl.textContent = `${e.target.value}s`;
                    app.recalculateCurrentCommand();
                }
            });
        }
    },

    // ==========================================================================
    // 9. Safe Tokenizer-based Syntax Highlighter (Fail-safe verified)
    // ==========================================================================
    highlightSyntax(cmd) {
        if (!cmd) return "";

        // Fail-safe regex matches commands, selectors, comments, NBT, strings, words, whitespace, or ANY single character (.)
        const tokenRegex = /(\/\w+|@[pabr](?:\[[^\]]+\])?|#.*|'[^']*'|"[^"]*"|[\{\}\[\]\:\,\=]|[a-zA-Z0-9_\-\.\$§\w]+|\s+|.)/g;
        
        const lines = cmd.split('\n');
        
        const highlightedLines = lines.map(line => {
            const tokens = line.match(tokenRegex);
            if (!tokens) return line;

            return tokens.map(token => {
                let escaped = token.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

                // 1. Comments
                if (escaped.startsWith('#')) {
                    return `<span style="color: #6c757d; font-style: italic;">${escaped}</span>`;
                }
                // 2. Slash Commands
                if (escaped.startsWith('/')) {
                    return `<span class="hl-cmd">${escaped}</span>`;
                }
                // 3. Selectors (@p, @a, @r)
                if (escaped.startsWith('@')) {
                    return `<span class="hl-sel">${escaped}</span>`;
                }
                // 4. Structural NBT elements ({ } [ ] : , =)
                if (['{', '}', '[', ']', ':', ',', '='].includes(escaped)) {
                    return `<span class="hl-nbt">${escaped}</span>`;
                }
                // 5. String Literals
                if ((escaped.startsWith("'") && escaped.endsWith("'")) || (escaped.startsWith('"') && escaped.endsWith('"'))) {
                    return `<span class="hl-str">${escaped}</span>`;
                }
                // 6. Highlight Entity names inside string
                if (app.isMobToken(escaped)) {
                    return `<span class="hl-ent">${escaped}</span>`;
                }
                // 7. Highlight Item names inside string
                if (app.isItemToken(escaped)) {
                    return `<span class="hl-itm">${escaped}</span>`;
                }

                // Default plain token
                return escaped;
            }).join('');
        });

        return highlightedLines.join('\n');
    },

    isMobToken(token) {
        const clean = token.toLowerCase();
        return MC_DATA.mobs.some(m => m.id === clean || m.id.replace("minecraft:", "") === clean);
    },

    isItemToken(token) {
        const clean = token.toLowerCase();
        for (const list of Object.values(MC_DATA.items)) {
            if (list.some(it => it.id === clean || it.id.replace("minecraft:", "") === clean)) {
                return true;
            }
        }
        return false;
    },

    // Display command in box
    displayCommand(cmd) {
        const box = document.getElementById("command-output-box");
        box.innerHTML = app.highlightSyntax(cmd);
        box.dataset.rawCommand = cmd;

        const counter = document.getElementById("console-char-counter");
        if (counter) {
            const len = cmd.length;
            if (len > 32767) {
                counter.textContent = `(${len.toLocaleString()} / 32,767 chars) ⚠️ EXCEEDS LIMIT!`;
                counter.style.color = "#ff4500";
                counter.style.fontWeight = "bold";
            } else {
                counter.textContent = `(${len.toLocaleString()} chars)`;
                counter.style.color = "#888";
                counter.style.fontWeight = "normal";
            }
        }
    },

    readMobConfig() {
        const getVal = (id, def = "") => { const el = document.getElementById(id); return el ? el.value : def; };
        const getChecked = (id) => { const el = document.getElementById(id); return el ? el.checked : false; };

        const activeEffects = [];
        document.querySelectorAll("#mob-effects-checklist-container .mob-eff-cb:checked").forEach(cb => {
            const id = cb.dataset.effId;
            const slider = document.querySelector(`.mob-eff-slider[data-eff-id="${id}"]`);
            const durSlider = document.querySelector(`.mob-eff-dur-slider[data-eff-id="${id}"]`);
            const infiniteCb = document.querySelector(`.mob-eff-infinite-cb[data-eff-id="${id}"]`);
            const hideParticlesCb = document.querySelector(`.mob-eff-hide-particles-cb[data-eff-id="${id}"]`);
            
            const amp = slider ? parseInt(slider.value) : 1;
            const infinite = infiniteCb ? infiniteCb.checked : true;
            const duration = durSlider ? parseInt(durSlider.value) : 60;
            const hideParticles = hideParticlesCb ? hideParticlesCb.checked : false;
            activeEffects.push({ id: id, amplifier: amp, infinite: infinite, duration: duration, hideParticles: hideParticles });
        });

        let mountPresetCmd = "";
        const presetId = getVal("mob-mount-preset", "");
        if (presetId) {
            const foundPreset = presets.find(p => p.id === presetId);
            if (foundPreset) {
                mountPresetCmd = foundPreset.command;
            }
        }

        const config = {
            type: getVal("mob-type", "minecraft:zombie"),
            name: getVal("mob-name"),
            health: getVal("mob-health", "20"),
            speed: getVal("mob-speed", "1.0"),
            scale: getVal("mob-scale", "1.0"),
            stepHeight: getVal("mob-step-height", "0.6"),
            mountType: getVal("mob-mount-type", "none"),
            mountMob: getVal("mob-mount-default", "minecraft:chicken"),
            mountPresetId: presetId,
            mountPresetCmd: mountPresetCmd,
            isBaby: getChecked("mob-isbaby"),
            mountIsBaby: getChecked("mob-mount-baby"),
            silent: getChecked("mob-silent"),
            noAI: getChecked("mob-noai"),
            glowing: getChecked("mob-glowing"),
            invulnerable: getChecked("mob-invulnerable"),
            noGravity: getChecked("mob-nogravity"),
            fireImmune: getChecked("mob-fireimmune"),
            activeEffects: activeEffects,
            gear: {
                hand: getVal("eq-hand", "none"),
                offhand: getVal("eq-offhand", "none"),
                head: getVal("eq-head", "none"),
                chest: getVal("eq-chest", "none"),
                legs: getVal("eq-legs", "none"),
                feet: getVal("eq-feet", "none")
            },
            gearEnch: {
                hand: getChecked("eq-hand-ench") ? (app.mobEquipEnchants.hand && app.mobEquipEnchants.hand.length > 0 ? app.mobEquipEnchants.hand : true) : [],
                offhand: getChecked("eq-offhand-ench") ? (app.mobEquipEnchants.offhand && app.mobEquipEnchants.offhand.length > 0 ? app.mobEquipEnchants.offhand : true) : [],
                head: getChecked("eq-head-ench") ? (app.mobEquipEnchants.head && app.mobEquipEnchants.head.length > 0 ? app.mobEquipEnchants.head : true) : [],
                chest: getChecked("eq-chest-ench") ? (app.mobEquipEnchants.chest && app.mobEquipEnchants.chest.length > 0 ? app.mobEquipEnchants.chest : true) : [],
                legs: getChecked("eq-legs-ench") ? (app.mobEquipEnchants.legs && app.mobEquipEnchants.legs.length > 0 ? app.mobEquipEnchants.legs : true) : [],
                feet: getChecked("eq-feet-ench") ? (app.mobEquipEnchants.feet && app.mobEquipEnchants.feet.length > 0 ? app.mobEquipEnchants.feet : true) : []
            },
            specials: {}
        };

        if (config.type === "minecraft:creeper") {
            const powered = document.getElementById("spec-creeper-powered");
            const rad = document.getElementById("spec-creeper-radius");
            const fuse = document.getElementById("spec-creeper-fuse");
            config.specials.creeperPowered = powered ? powered.checked : false;
            config.specials.creeperRadius = rad ? parseInt(rad.value) : 3;
            config.specials.creeperFuse = fuse ? parseInt(fuse.value) : 30;
        } else if (config.type === "minecraft:slime") {
            const size = document.getElementById("spec-slime-size");
            config.specials.slimeSize = size ? parseInt(size.value) : 1;
        } else if (config.type === "minecraft:villager") {
            const prof = document.getElementById("spec-villager-profession");
            config.specials.villagerProfession = prof ? prof.value : "none";
        }

        return config;
    },

    populateItemContainerPresets() {
        const select = document.getElementById("item-container-preset");
        const editBtn = document.getElementById("btn-edit-item-container");
        if (!select) return;

        const currentVal = select.value;
        const containerPresets = presets.filter(p => p.type === "container");

        // Keep the first option
        select.innerHTML = '<option value="none">-- None (Plain Item) --</option>';
        containerPresets.forEach(p => {
            const opt = document.createElement("option");
            opt.value = p.id;
            opt.textContent = p.name;
            select.appendChild(opt);
        });

        // Restore selected value if it still exists
        const exists = containerPresets.some(p => p.id === currentVal);
        if (exists) {
            select.value = currentVal;
            if (editBtn) editBtn.style.display = "block";
        } else {
            select.value = "none";
            if (editBtn) editBtn.style.display = "none";
        }
    },

    // 10. Central Command State Synthesizer
    recalculateCurrentCommand() {
        const versionEl = document.getElementById("version-select");
        const targetVersion = versionEl ? versionEl.value : "java_modern";

        if (activeTab === "mobs-pane") {
            const config = app.readMobConfig();
            const cmd = Generator.generateMob(config, targetVersion);
            app.displayCommand(cmd);

        } else if (activeTab === "items-pane") {
            const getVal = (id, def = "") => { const el = document.getElementById(id); return el ? el.value : def; };
            const getChecked = (id) => { const el = document.getElementById(id); return el ? el.checked : false; };

            // Read active enchants
            let selectedEnchs = [];
            document.querySelectorAll(".ench-cb:checked").forEach(cb => {
                const id = cb.dataset.enchId;
                const slider = document.querySelector(`.ench-slider[data-ench-id="${id}"]`);
                const lvl = slider ? (parseInt(slider.value) || 1) : 1;
                selectedEnchs.push({ id, lvl });
            });

            const attachedContainerId = getVal("item-container-preset", "none");
            let containerConfig = null;
            if (attachedContainerId !== "none") {
                const foundContainer = presets.find(p => p.id === attachedContainerId);
                if (foundContainer) {
                    containerConfig = foundContainer.containerConfig;
                }
            }

            const config = {
                id: getVal("item-type", "minecraft:diamond_sword"),
                name: getVal("item-name"),
                lore: getVal("item-lore"),
                unbreakable: getChecked("item-unbreakable"),
                hideFlags: getChecked("item-hideflags"),
                glint: getChecked("item-glint"),
                count: parseInt(getVal("item-count", "1")) || 1,
                enchantments: selectedEnchs,
                containerConfig: containerConfig,
                attachedContainerId: attachedContainerId,
                attributes: {
                    attack_damage: parseFloat(getVal("attr-attack-damage", "0")) || 0,
                    attack_speed: parseFloat(getVal("attr-attack-speed", "0")) || 0,
                    max_health: parseFloat(getVal("attr-max-health", "0")) || 0,
                    knockback_resistance: parseFloat(getVal("attr-knockback-res", "0")) || 0,
                    movement_speed: parseFloat(getVal("attr-movement-speed", "0")) || 0
                }
            };

            const cmd = Generator.generateItem(config, targetVersion);
            app.displayCommand(cmd);
        } else if (activeTab === "execute-pane") {
            const getVal = (id, def = "") => { const el = document.getElementById(id); return el ? el.value : def; };
            const getChecked = (id) => { const el = document.getElementById(id); return el ? el.checked : false; };

            const config = {
                targetBase: getVal("exec-target-base", "@a"),
                targetExclude: getVal("exec-target-exclude"),
                targetGamemode: getVal("exec-target-gamemode"),
                targetTag: getVal("exec-target-tag"),
                targetLevelMin: getVal("exec-target-level-min") !== "" ? parseInt(getVal("exec-target-level-min")) : undefined,
                targetLevelMax: getVal("exec-target-level-max") !== "" ? parseInt(getVal("exec-target-level-max")) : undefined,
                targetSurvivalOnly: getChecked("exec-target-survival-only"),
                targetLimit: getChecked("exec-target-limit"),
                targetCustomMobType: getVal("exec-target-custom-mob-type"),
                targetCustomMobName: getVal("exec-target-custom-mob-preset-name"),
                anchor: getVal("exec-anchor", "at"),
                condType: getVal("exec-cond-type", "always"),
                blockType: getVal("exec-block", "minecraft:lava"),
                blockOffset: getVal("exec-block-offset", "~ ~-1 ~"),
                mobType: getVal("exec-mob", "minecraft:creeper"),
                distance: getVal("exec-prox-distance", "..5"),
                invSlot: getVal("exec-inv-slot", "weapon.mainhand"),
                invItem: getVal("exec-inv-item", "minecraft:diamond_sword"),
                invCount: parseInt(getVal("exec-inv-count", "1")) || 1,
                dimension: getVal("exec-dimension", "minecraft:overworld"),
                weather: getVal("exec-weather", "rain"),
                scoreObj: getVal("exec-score-obj", "dummy"),
                scoreOp: getVal("exec-score-op", "matches"),
                scoreVal: getVal("exec-score-val", "1.."),
                altMin: parseInt(getVal("exec-alt-min", "120")),
                altHeight: parseInt(getVal("exec-alt-height", "50")),
                action: getVal("exec-action", "summon"),
                actionMob: getVal("exec-mob-summon", "minecraft:creeper"),
                summonOffset: getVal("exec-summon-offset", "~ ~ ~"),
                givePresetCmd: getVal("exec-give-preset-val"),
                givePresetTarget: getVal("exec-give-preset-target", "@s"),
                givePresetCount: parseInt(getVal("exec-give-preset-count", "1")) || 1,
                giveItem: getVal("exec-item-give", "minecraft:diamond_sword"),
                giveItemTarget: getVal("exec-item-give-target", "@s"),
                giveItemCount: parseInt(getVal("exec-item-give-count", "1")) || 1,
                summonPresetCmd: getVal("exec-summon-preset-val"),
                summonPresetOffset: getVal("exec-summon-preset-offset", "~ ~ ~"),
                actionSound: getVal("exec-sound", "minecraft:entity.creeper.primed"),
                soundVolume: parseFloat(getVal("exec-sound-volume", "1.0")),
                soundPitch: parseFloat(getVal("exec-sound-pitch", "1.0")),
                soundCategory: getVal("exec-sound-category", "master"),
                actionParticle: getVal("exec-particle", "minecraft:portal"),
                particleCount: parseInt(getVal("exec-particle-count", "30")),
                particleSpeed: parseFloat(getVal("exec-particle-speed", "0.1")),
                particleOffset: getVal("exec-particle-offset", "~ ~1 ~"),
                actionEffect: getVal("exec-effect", "minecraft:blindness"),
                effectDuration: parseInt(getVal("exec-effect-duration", "10")),
                effectAmp: parseInt(getVal("exec-effect-amp", "1")),
                effectHideParticles: getChecked("exec-effect-hide-particles"),
                actionBlockPlace: getVal("exec-block-place", "minecraft:lava"),
                blockPlaceOffset: getVal("exec-block-place-offset", "~ ~ ~"),
                tellrawText: getVal("exec-tellraw-text"),
                tellrawColor: getVal("exec-tellraw-color", "white"),
                combustDuration: parseInt(getVal("exec-combust-duration", "5")) || 5,
                clearItem: getVal("exec-clear-item", "all"),
                customCmd: getVal("exec-custom-cmd")
            };

            // Update Live Selector Preview Box
            if (typeof Generator !== "undefined" && typeof Generator.compileSelector === "function") {
                const liveSelector = Generator.compileSelector(config, targetVersion);
                const liveSelectorEl = document.getElementById("live-selector-preview");
                if (liveSelectorEl) {
                    liveSelectorEl.textContent = liveSelector;
                }
            }

            const cmd = Generator.generateExecute(config, targetVersion);
            app.displayCommand(cmd);
        } else if (activeTab === "containers-pane") {
            const getVal = (id, def = "") => { const el = document.getElementById(id); return el ? el.value : def; };
            const config = {
                type: getVal("container-type", "minecraft:chest"),
                title: getVal("container-title"),
                lootTable: getVal("container-loot-table", "none"),
                contents: app.containerContents
            };
            const cmd = Generator.generateContainer(config, targetVersion);
            app.displayCommand(cmd);
        } else if (activeTab === "potions-pane") {
            const getVal = (id, def = "") => { const el = document.getElementById(id); return el ? el.value : def; };
            
            let activePotionEffects = [];
            document.querySelectorAll("#potion-effects-checklist-container .pot-eff-cb:checked").forEach(cb => {
                const id = cb.dataset.effId;
                const slider = document.querySelector(`.pot-eff-slider[data-eff-id="${id}"]`);
                const durSlider = document.querySelector(`.pot-eff-dur-slider[data-eff-id="${id}"]`);
                const infiniteCb = document.querySelector(`.pot-eff-infinite-cb[data-eff-id="${id}"]`);
                
                const amp = slider ? parseInt(slider.value) : 1;
                const infinite = infiniteCb ? infiniteCb.checked : false;
                const duration = durSlider ? parseInt(durSlider.value) : 60;
                activePotionEffects.push({ id: id, amplifier: amp, infinite: infinite, duration: duration });
            });

            const config = {
                id: getVal("potion-base-type", "minecraft:potion"),
                name: getVal("potion-name"),
                color: getVal("potion-color-hex", "#3498db"),
                effects: activePotionEffects
            };

            const cmd = Generator.generatePotion(config, targetVersion);
            app.displayCommand(cmd);
        } else if (activeTab === "banners-pane") {
            const getVal = (id, def = "") => { const el = document.getElementById(id); return el ? el.value : def; };
            const isShield = document.getElementById("banner-mode-shield") ? document.getElementById("banner-mode-shield").checked : false;
            
            const config = {
                mode: isShield ? "shield" : "banner",
                baseColor: getVal("banner-base-color", "white"),
                name: getVal("banner-name"),
                patterns: app.collectBannerPatterns()
            };

            const cmd = isShield 
                ? Generator.generateShield(config, targetVersion)
                : Generator.generateBanner(config, targetVersion);
            app.displayCommand(cmd);
        }
    },

    // 11. Clipboard Service
    copyToClipboard() {
        app.playClick();
        const box = document.getElementById("command-output-box");
        const command = box.dataset.rawCommand || box.textContent;

        if (!command) return;

        // Check if command is too long for chat console (256 for Java, 512 for Bedrock)
        const targetVersion = document.getElementById("version-select") ? document.getElementById("version-select").value : "java_modern";
        const limit = targetVersion.startsWith("java") ? 256 : 512;

        if (command.length > limit) {
            app.showCommandBlockWarning(command, limit);
        } else {
            app.executeCopy(command);
        }
    },

    showCommandBlockWarning(command, limit) {
        const overlay = document.getElementById("command-block-warning-overlay");
        const lenEl = document.getElementById("warning-cmd-len");
        const limitEl = document.getElementById("warning-cmd-limit");
        
        if (lenEl) lenEl.textContent = command.length;
        if (limitEl) limitEl.textContent = limit;

        if (overlay) {
            overlay.style.display = "flex";
            overlay.offsetHeight; // force layout reflow
            overlay.classList.add("show");
        }

        const btnCopy = document.getElementById("btn-warning-copy-anyway");
        const btnCancel = document.getElementById("btn-warning-cancel");
        const btnCloseHeader = document.getElementById("btn-close-cmd-warning");

        const closeHandler = () => {
            app.playClick();
            app.closeCommandBlockWarning();
            cleanListeners();
        };

        const copyHandler = () => {
            app.playClick();
            app.closeCommandBlockWarning();
            app.executeCopy(command);
            cleanListeners();
        };

        const cleanListeners = () => {
            btnCopy.removeEventListener("click", copyHandler);
            btnCancel.removeEventListener("click", closeHandler);
            if (btnCloseHeader) btnCloseHeader.removeEventListener("click", closeHandler);
        };

        if (btnCopy) btnCopy.addEventListener("click", copyHandler);
        if (btnCancel) btnCancel.addEventListener("click", closeHandler);
        if (btnCloseHeader) btnCloseHeader.addEventListener("click", closeHandler);
    },

    closeCommandBlockWarning() {
        const overlay = document.getElementById("command-block-warning-overlay");
        if (overlay) {
            overlay.classList.remove("show");
            setTimeout(() => {
                if (!overlay.classList.contains("show")) {
                    overlay.style.display = "none";
                }
            }, 250);
        }
    },

    executeCopy(command) {
        navigator.clipboard.writeText(command).then(() => {
            const toast = document.getElementById("toast");
            toast.textContent = "Copied to Clipboard!";
            toast.classList.add("show");
            
            setTimeout(() => {
                toast.classList.remove("show");
            }, 2000);
        }).catch(err => {
            console.error("Clipboard error", err);
            alert("Fallback copy: " + command);
        });
    },

    // 12. LocalStorage Presets manager
    loadPresetsFromStorage() {
        try {
            const raw = localStorage.getItem("mc_presets");
            if (raw) {
                presets = JSON.parse(raw);
            }
        } catch (e) {
            console.error("Failed to load presets", e);
        }
        app.updatePresetsUI();
    },

    savePresetsToStorage() {
        try {
            localStorage.setItem("mc_presets", JSON.stringify(presets));
        } catch (e) {
            console.error("Failed to save presets", e);
        }
        app.updatePresetsUI();
    },

    saveCurrentPreset() {
        app.playClick();
        const nameInput = document.getElementById("save-preset-name");
        const presetName = nameInput.value.trim();

        if (!presetName) {
            alert("Please enter a name for your preset first!");
            return;
        }

        const box = document.getElementById("command-output-box");
        let rawCmd = box.dataset.rawCommand || box.textContent;

        let pType = "item";
        let pDetails = "";
        let itemConfig = null;
        let containerConfig = null;
        let mobConfig = null;

        if (activeTab === "mobs-pane") {
            pType = "mob";
            const customMobName = document.getElementById("mob-name") ? document.getElementById("mob-name").value.trim() : "";
            pDetails = "Mob: " + document.getElementById("mob-type").value.replace("minecraft:", "") + (customMobName ? ` ("${customMobName}")` : "");
            mobConfig = app.readMobConfig();
        } else if (activeTab === "items-pane") {
            pType = "item";
            const customItemName = document.getElementById("item-name") ? document.getElementById("item-name").value.trim() : "";
            pDetails = "Item: " + document.getElementById("item-type").value.replace("minecraft:", "") + (customItemName ? ` ("${customItemName}")` : "");
            
            const getVal = (id, def = "") => { const el = document.getElementById(id); return el ? el.value : def; };
            const getChecked = (id) => { const el = document.getElementById(id); return el ? el.checked : false; };

            let selectedEnchs = [];
            document.querySelectorAll(".ench-cb:checked").forEach(cb => {
                const id = cb.dataset.enchId;
                const slider = document.querySelector(`.ench-slider[data-ench-id="${id}"]`);
                const lvl = slider ? (parseInt(slider.value) || 1) : 1;
                selectedEnchs.push({ id, lvl });
            });

            const attachedContainerId = getVal("item-container-preset", "none");
            let itemContainerConfig = null;
            if (attachedContainerId !== "none") {
                const foundContainer = presets.find(p => p.id === attachedContainerId);
                if (foundContainer) {
                    itemContainerConfig = foundContainer.containerConfig;
                }
            }

            itemConfig = {
                id: getVal("item-type", "minecraft:diamond_sword"),
                name: getVal("item-name"),
                lore: getVal("item-lore"),
                unbreakable: getChecked("item-unbreakable"),
                hideFlags: getChecked("item-hideflags"),
                glint: getChecked("item-glint"),
                count: parseInt(getVal("item-count", "1")) || 1,
                enchantments: selectedEnchs,
                containerConfig: itemContainerConfig,
                attachedContainerId: attachedContainerId,
                attributes: {
                    attack_damage: parseFloat(getVal("attr-attack-damage", "0")) || 0,
                    attack_speed: parseFloat(getVal("attr-attack-speed", "0")) || 0,
                    max_health: parseFloat(getVal("attr-max-health", "0")) || 0,
                    knockback_resistance: parseFloat(getVal("attr-knockback-res", "0")) || 0,
                    movement_speed: parseFloat(getVal("attr-movement-speed", "0")) || 0
                }
            };
        } else if (activeTab === "potions-pane") {
            pType = "item";
            const customPotionName = document.getElementById("potion-name") ? document.getElementById("potion-name").value.trim() : "";
            const potionBase = document.getElementById("potion-base-type") ? document.getElementById("potion-base-type").value : "minecraft:potion";
            pDetails = "Potion: " + potionBase.replace("minecraft:", "") + (customPotionName ? ` ("${customPotionName}")` : "");

            let activePotionEffects = [];
            document.querySelectorAll("#potion-effects-checklist-container .pot-eff-cb:checked").forEach(cb => {
                const id = cb.dataset.effId;
                const slider = document.querySelector(`.pot-eff-slider[data-eff-id="${id}"]`);
                const durSlider = document.querySelector(`.pot-eff-dur-slider[data-eff-id="${id}"]`);
                const infiniteCb = document.querySelector(`.pot-eff-infinite-cb[data-eff-id="${id}"]`);
                
                const amp = slider ? parseInt(slider.value) : 1;
                const infinite = infiniteCb ? infiniteCb.checked : false;
                const duration = durSlider ? parseInt(durSlider.value) : 60;
                activePotionEffects.push({ id: id, amplifier: amp, infinite: infinite, duration: duration });
            });

            const potionConfig = {
                id: potionBase,
                name: customPotionName,
                color: document.getElementById("potion-color-hex") ? document.getElementById("potion-color-hex").value : "#3498db",
                effects: activePotionEffects
            };

            const modernCmd = Generator.generatePotion(potionConfig, "java_modern");
            rawCmd = modernCmd;

            itemConfig = {
                id: potionBase,
                name: customPotionName || "Custom Potion",
                count: 1,
                command: modernCmd,
                potionConfig: potionConfig
            };
        } else if (activeTab === "banners-pane") {
            pType = "item";
            const isShield = document.getElementById("banner-mode-shield") ? document.getElementById("banner-mode-shield").checked : false;
            const baseColor = document.getElementById("banner-base-color") ? document.getElementById("banner-base-color").value : "white";
            const customName = document.getElementById("banner-name") ? document.getElementById("banner-name").value.trim() : "";
            
            pDetails = (isShield ? "Shield: " : "Banner: ") + baseColor + (customName ? ` ("${customName}")` : "");
            
            const patterns = app.collectBannerPatterns();
            const bannerConfig = {
                mode: isShield ? "shield" : "banner",
                baseColor: baseColor,
                name: customName,
                patterns: patterns
            };

            const modernCmd = isShield 
                ? Generator.generateShield(bannerConfig, "java_modern")
                : Generator.generateBanner(bannerConfig, "java_modern");
            rawCmd = modernCmd;

            itemConfig = {
                id: isShield ? "minecraft:shield" : `minecraft:${baseColor}_banner`,
                name: customName || (isShield ? "Custom Shield" : "Custom Banner"),
                count: 1,
                command: modernCmd,
                bannerConfig: bannerConfig
            };
        } else if (activeTab === "containers-pane") {
            pType = "container";
            const customContainerName = document.getElementById("container-title") ? document.getElementById("container-title").value.trim() : "";
            pDetails = "Container: " + document.getElementById("container-type").value.replace("minecraft:", "") + (customContainerName ? ` ("${customContainerName}")` : "");
            
            containerConfig = {
                type: document.getElementById("container-type").value,
                title: document.getElementById("container-title").value,
                lootTable: document.getElementById("container-loot-table") ? document.getElementById("container-loot-table").value : "none",
                contents: JSON.parse(JSON.stringify(app.containerContents || {}))
            };
        } else if (activeTab === "execute-pane") {
            pType = "execute";
            pDetails = "Execute: " + document.getElementById("exec-action").value;
        }

        const presetObj = {
            id: Date.now().toString(),
            name: presetName,
            type: pType,
            command: rawCmd,
            details: pDetails
        };
        if (itemConfig) {
            presetObj.itemConfig = itemConfig;
        }
        if (containerConfig) {
            presetObj.containerConfig = containerConfig;
        }
        if (mobConfig) {
            presetObj.mobConfig = mobConfig;
        }
        presets.push(presetObj);
        app.savePresetsToStorage();
        nameInput.value = "";
        
        const toast = document.getElementById("toast");
        toast.textContent = "Preset Saved Successfully!";
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2000);
    },

    deletePreset(id) {
        app.playClick();
        presets = presets.filter(p => p.id !== id);
        app.savePresetsToStorage();
    },

    setCustomDropdownValue(dropdownId, value, isGrouped = false, groupsObj = null) {
        if (value === "none" || !value) {
            app.selectCustomDropdownOption(dropdownId, "none", "Empty Slot", "❌");
            return;
        }
        if (isGrouped && groupsObj) {
            let foundItem = null;
            for (const list of Object.values(groupsObj)) {
                const found = list.find(it => it.id === value);
                if (found) {
                    foundItem = found;
                    break;
                }
            }
            if (foundItem) {
                app.selectCustomDropdownOption(dropdownId, value, foundItem.name, app.renderIcon(foundItem.icon));
            } else {
                if (value.includes("give @p ") || value.startsWith("give ") || value.startsWith("/")) {
                    const foundP = presets.find(p => p.command === value);
                    if (foundP) {
                        app.selectCustomDropdownOption(dropdownId, value, `★ ${foundP.name}`, "★");
                    } else {
                        app.selectCustomDropdownOption(dropdownId, value, "Custom Item", "★");
                    }
                } else {
                    const name = value.replace("minecraft:", "").replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
                    app.selectCustomDropdownOption(dropdownId, value, name, "🟩");
                }
            }
        } else {
            let foundItem = MC_DATA.mobs.find(it => it.id === value);
            if (!foundItem) {
                foundItem = MC_DATA.all_items.find(it => it.id === value);
            }
            if (!foundItem) {
                for (const list of Object.values(MC_DATA.items)) {
                    if (Array.isArray(list)) {
                        const found = list.find(it => it.id === value);
                        if (found) { foundItem = found; break; }
                    }
                }
            }
            if (foundItem) {
                app.selectCustomDropdownOption(dropdownId, value, foundItem.name, app.renderIcon(foundItem.icon));
            } else {
                const name = value.replace("minecraft:", "").replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
                app.selectCustomDropdownOption(dropdownId, value, name, "🟩");
            }
        }
    },

    loadPreset(id) {
        app.playClick();
        const p = presets.find(p => p.id === id);
        if (!p) return;

        if (p.type === "container" && p.containerConfig) {
            app.switchTab("containers-pane");
            const typeSel = document.getElementById("container-type");
            const titleInput = document.getElementById("container-title");
            const lootSel = document.getElementById("container-loot-table");
            if (typeSel) typeSel.value = p.containerConfig.type;
            if (titleInput) titleInput.value = p.containerConfig.title || "";
            if (lootSel) lootSel.value = p.containerConfig.lootTable || "none";
            app.containerContents = JSON.parse(JSON.stringify(p.containerConfig.contents || {}));
            app.renderContainerGrid();
            app.updateSlotEditorUI();
            app.updateLootTableUIState();
            app.recalculateCurrentCommand();
        } else if (p.type === "item" && p.itemConfig && p.itemConfig.potionConfig) {
            app.switchTab("potions-pane");
            const conf = p.itemConfig.potionConfig;
            
            const baseTypeSel = document.getElementById("potion-base-type");
            const nameInput = document.getElementById("potion-name");
            const colorPicker = document.getElementById("potion-color-picker");
            const colorHex = document.getElementById("potion-color-hex");

            if (baseTypeSel) baseTypeSel.value = conf.id || "minecraft:potion";
            if (nameInput) nameInput.value = conf.name || "";
            if (colorPicker) colorPicker.value = conf.color || "#3498db";
            if (colorHex) colorHex.value = conf.color || "#3498db";

            // Reset checklist first
            document.querySelectorAll("#potion-effects-checklist-container .pot-eff-cb").forEach(cb => {
                cb.checked = false;
                const id = cb.dataset.effId;
                const row = document.getElementById(`pot-eff-slider-row-${id}`);
                if (row) row.classList.remove("show");
            });

            // Set checklist values
            if (Array.isArray(conf.effects)) {
                conf.effects.forEach(eff => {
                    const cb = document.querySelector(`#potion-effects-checklist-container .pot-eff-cb[data-eff-id="${eff.id}"]`);
                    if (cb) {
                        cb.checked = true;
                        const row = document.getElementById(`pot-eff-slider-row-${eff.id}`);
                        if (row) row.classList.add("show");

                        const ampSlider = document.querySelector(`.pot-eff-slider[data-eff-id="${eff.id}"]`);
                        if (ampSlider) {
                            ampSlider.value = eff.amplifier || 1;
                            const lbl = document.getElementById(`pot-eff-lbl-${eff.id}`);
                            if (lbl) lbl.textContent = `Level ${eff.amplifier || 1}`;
                        }

                        const durSlider = document.querySelector(`.pot-eff-dur-slider[data-eff-id="${eff.id}"]`);
                        const infiniteCb = document.querySelector(`.pot-eff-infinite-cb[data-eff-id="${eff.id}"]`);
                        const durLbl = document.getElementById(`pot-eff-dur-lbl-${eff.id}`);

                        if (infiniteCb) infiniteCb.checked = !!eff.infinite;
                        if (durSlider) {
                            durSlider.value = eff.duration || 60;
                            durSlider.disabled = !!eff.infinite;
                        }
                        if (durLbl) {
                            durLbl.textContent = eff.infinite ? "Infinite" : `${eff.duration || 60}s`;
                        }
                    }
                });
            }

            app.recalculateCurrentCommand();
        } else if (p.type === "item" && p.itemConfig && p.itemConfig.bannerConfig) {
            app.switchTab("banners-pane");
            const conf = p.itemConfig.bannerConfig;
            
            const baseColorSel = document.getElementById("banner-base-color");
            const nameInput = document.getElementById("banner-name");
            const modeBanner = document.getElementById("banner-mode-banner");
            const modeShield = document.getElementById("banner-mode-shield");

            if (baseColorSel) baseColorSel.value = conf.baseColor || "white";
            if (nameInput) nameInput.value = conf.name || "";
            if (conf.mode === "shield") {
                if (modeShield) modeShield.checked = true;
            } else {
                if (modeBanner) modeBanner.checked = true;
            }

            app.hydrateBannerPatternLayers(conf.patterns || []);
            app.recalculateCurrentCommand();
        } else if (p.type === "item" && p.itemConfig) {
            // Standard Custom Item
            app.switchTab("items-pane");
            
            // 1. Select the item base type
            const itemId = p.itemConfig.id || "minecraft:diamond_sword";
            const itemCategories = {
                "Weapons & Ranged": MC_DATA.items.weapons,
                "Helmets": MC_DATA.items.helmets,
                "Chestplates": MC_DATA.items.chestplates,
                "Leggings": MC_DATA.items.leggings,
                "Boots": MC_DATA.items.boots,
                "Tools": MC_DATA.items.tools,
                "Blocks": MC_DATA.items.blocks,
                "Misc & Materials": MC_DATA.items.misc
            };
            app.setCustomDropdownValue("dropdown-item-type", itemId, true, itemCategories);

            // 2. Set Custom Item Name
            const nameInput = document.getElementById("item-name");
            if (nameInput) nameInput.value = p.itemConfig.name || "";

            // 3. Set Lore
            const loreInput = document.getElementById("item-lore");
            if (loreInput) loreInput.value = p.itemConfig.lore || "";

            // 4. Set Stack Count
            const countSlider = document.getElementById("item-count");
            if (countSlider) {
                countSlider.value = p.itemConfig.count || 1;
                const valEl = document.getElementById("item-count-val");
                if (valEl) valEl.textContent = `${countSlider.value} ${countSlider.value == 1 ? 'Item' : 'Items'}`;
            }

            // 5. Set checkboxes
            const unbreakable = document.getElementById("item-unbreakable");
            if (unbreakable) unbreakable.checked = !!p.itemConfig.unbreakable;
            const hideflags = document.getElementById("item-hideflags");
            if (hideflags) hideflags.checked = !!p.itemConfig.hideFlags;
            const glint = document.getElementById("item-glint");
            if (glint) glint.checked = !!p.itemConfig.glint;

            // 6. Set Enchantments list
            document.querySelectorAll(".ench-cb").forEach(cb => {
                cb.checked = false;
                const id = cb.dataset.enchId;
                const row = document.getElementById(`ench-slider-row-${id}`);
                if (row) row.classList.remove("show");
            });

            if (Array.isArray(p.itemConfig.enchantments)) {
                p.itemConfig.enchantments.forEach(ench => {
                    const cb = document.querySelector(`.ench-cb[data-ench-id="${ench.id}"]`);
                    if (cb) {
                        cb.checked = true;
                        const row = document.getElementById(`ench-slider-row-${ench.id}`);
                        if (row) row.classList.add("show");
                        const slider = document.querySelector(`.ench-slider[data-ench-id="${ench.id}"]`);
                        if (slider) {
                            slider.value = ench.lvl || 1;
                            const lbl = document.getElementById(`ench-lbl-${ench.id}`);
                            if (lbl) lbl.textContent = `Level ${ench.lvl || 1}`;
                        }
                    }
                });
            }

            // 7. Set Container Preset dropdown
            app.populateItemContainerPresets();
            const containerPresetSelect = document.getElementById("item-container-preset");
            const attachedContainerId = p.itemConfig.attachedContainerId || "none";
            if (containerPresetSelect) {
                containerPresetSelect.value = attachedContainerId;
                const editBtn = document.getElementById("btn-edit-item-container");
                if (editBtn) {
                    editBtn.style.display = (attachedContainerId !== "none") ? "block" : "none";
                }
            }

            // 8. Set Stat Modifiers (Attributes)
            const attrs = p.itemConfig.attributes || {};
            const attrDamage = document.getElementById("attr-attack-damage");
            if (attrDamage) attrDamage.value = attrs.attack_damage !== undefined ? attrs.attack_damage : 0;
            const attrSpeed = document.getElementById("attr-attack-speed");
            if (attrSpeed) attrSpeed.value = attrs.attack_speed !== undefined ? attrs.attack_speed : 0;
            const attrHealth = document.getElementById("attr-max-health");
            if (attrHealth) attrHealth.value = attrs.max_health !== undefined ? attrs.max_health : 0;
            const attrKB = document.getElementById("attr-knockback-res");
            if (attrKB) attrKB.value = attrs.knockback_resistance !== undefined ? attrs.knockback_resistance : 0;
            const attrMove = document.getElementById("attr-movement-speed");
            if (attrMove) attrMove.value = attrs.movement_speed !== undefined ? attrs.movement_speed : 0;

            app.recalculateCurrentCommand();
        } else if (p.type === "mob" && p.mobConfig) {
            // Custom Mob
            app.switchTab("mobs-pane");

            // 1. Base properties
            const mobType = p.mobConfig.type || "minecraft:zombie";
            app.setCustomDropdownValue("dropdown-mob-type", mobType);
            app.updateSpecialMobPanel();

            const nameInput = document.getElementById("mob-name");
            if (nameInput) nameInput.value = p.mobConfig.name || "";

            // 2. Health and other stats
            const hp = document.getElementById("mob-health");
            if (hp) {
                hp.value = p.mobConfig.health || 20;
                const hpVal = document.getElementById("mob-health-val");
                if (hpVal) hpVal.textContent = `${hp.value} HP`;
            }
            const speed = document.getElementById("mob-speed");
            if (speed) {
                speed.value = p.mobConfig.speed || 1.0;
                const speedVal = document.getElementById("mob-speed-val");
                if (speedVal) speedVal.textContent = `${parseFloat(speed.value).toFixed(1)}x`;
            }
            const scale = document.getElementById("mob-scale");
            if (scale) {
                scale.value = p.mobConfig.scale || 1.0;
                const scaleVal = document.getElementById("mob-scale-val");
                if (scaleVal) scaleVal.textContent = `${parseFloat(scale.value).toFixed(1)}x`;
            }
            const step = document.getElementById("mob-step-height");
            if (step) {
                step.value = p.mobConfig.stepHeight || 0.6;
                const stepVal = document.getElementById("mob-step-height-val");
                if (stepVal) stepVal.textContent = `${parseFloat(step.value).toFixed(1)} blocks`;
            }

            // Checkboxes
            const silent = document.getElementById("mob-silent");
            if (silent) silent.checked = !!p.mobConfig.silent;
            const noai = document.getElementById("mob-noai");
            if (noai) noai.checked = !!p.mobConfig.noAI;
            const glowing = document.getElementById("mob-glowing");
            if (glowing) glowing.checked = !!p.mobConfig.glowing;
            const invulnerable = document.getElementById("mob-invulnerable");
            if (invulnerable) invulnerable.checked = !!p.mobConfig.invulnerable;
            const nogravity = document.getElementById("mob-nogravity");
            if (nogravity) nogravity.checked = !!p.mobConfig.noGravity;
            const fireimmune = document.getElementById("mob-fireimmune");
            if (fireimmune) fireimmune.checked = !!p.mobConfig.fireImmune;
            const isbaby = document.getElementById("mob-isbaby");
            if (isbaby) isbaby.checked = !!p.mobConfig.isBaby;

            // 3. Potion effects checklist
            document.querySelectorAll("#mob-effects-checklist-container .mob-eff-cb").forEach(cb => {
                cb.checked = false;
                const id = cb.dataset.effId;
                const row = document.getElementById(`mob-eff-slider-row-${id}`);
                if (row) row.classList.remove("show");
            });

            if (Array.isArray(p.mobConfig.activeEffects)) {
                p.mobConfig.activeEffects.forEach(eff => {
                    const cb = document.querySelector(`#mob-effects-checklist-container .mob-eff-cb[data-eff-id="${eff.id}"]`);
                    if (cb) {
                        cb.checked = true;
                        const row = document.getElementById(`mob-eff-slider-row-${eff.id}`);
                        if (row) row.classList.add("show");
                        
                        const ampSlider = document.querySelector(`.mob-eff-slider[data-eff-id="${eff.id}"]`);
                        if (ampSlider) {
                            ampSlider.value = eff.amplifier || 1;
                            const lbl = document.getElementById(`mob-eff-lbl-${eff.id}`);
                            if (lbl) lbl.textContent = `Level ${eff.amplifier || 1}`;
                        }
                        
                        const durSlider = document.querySelector(`.mob-eff-dur-slider[data-eff-id="${eff.id}"]`);
                        const infiniteCb = document.querySelector(`.mob-eff-infinite-cb[data-eff-id="${eff.id}"]`);
                        const durLbl = document.getElementById(`mob-eff-dur-lbl-${eff.id}`);
                        
                        if (infiniteCb) infiniteCb.checked = !!eff.infinite;
                        if (durSlider) {
                            durSlider.value = eff.duration || 60;
                            durSlider.disabled = !!eff.infinite;
                        }
                        if (durLbl) {
                            durLbl.textContent = eff.infinite ? "Infinite" : `${eff.duration || 60}s`;
                        }
                        
                        const hideParticlesCb = document.querySelector(`.mob-eff-hide-particles-cb[data-eff-id="${eff.id}"]`);
                        if (hideParticlesCb) hideParticlesCb.checked = !!eff.hideParticles;
                    }
                });
            }

            // 4. Riding mount properties
            const mountTypeSelect = document.getElementById("mob-mount-type");
            if (mountTypeSelect) {
                mountTypeSelect.value = p.mobConfig.mountType || "none";
                app.updateMountUIState();
                
                if (p.mobConfig.mountType === "default") {
                    app.setCustomDropdownValue("dropdown-mob-mount-default", p.mobConfig.mountMob || "minecraft:chicken");
                    const mountBabyCb = document.getElementById("mob-mount-baby");
                    if (mountBabyCb) mountBabyCb.checked = !!p.mobConfig.mountIsBaby;
                } else if (p.mobConfig.mountType === "preset") {
                    const mountPresetSelect = document.getElementById("mob-mount-preset");
                    if (mountPresetSelect) {
                        mountPresetSelect.value = p.mobConfig.mountPresetId || "";
                    }
                }
            }

            // 5. Equipment slots
            const handSlots = {
                "Weapons": MC_DATA.items.weapons,
                "Tools": MC_DATA.items.tools,
                "Blocks": MC_DATA.items.blocks,
                "Misc": MC_DATA.items.misc
            };
            const armorSlots = {
                "head": { label: "Helmets", list: MC_DATA.items.helmets },
                "chest": { label: "Chestplates", list: MC_DATA.items.chestplates },
                "legs": { label: "Leggings", list: MC_DATA.items.leggings },
                "feet": { label: "Boots", list: MC_DATA.items.boots }
            };

            if (p.mobConfig.gear) {
                app.setCustomDropdownValue("dropdown-eq-hand", p.mobConfig.gear.hand || "none", true, handSlots);
                app.setCustomDropdownValue("dropdown-eq-offhand", p.mobConfig.gear.offhand || "none", true, handSlots);

                for (const [slot, data] of Object.entries(armorSlots)) {
                    const groups = {};
                    groups[data.label] = data.list;
                    groups["Blocks"] = MC_DATA.items.blocks;
                    groups["Misc"] = MC_DATA.items.misc;
                    app.setCustomDropdownValue(`dropdown-eq-${slot}`, p.mobConfig.gear[slot] || "none", true, groups);
                }
            }

            // 6. Gear enchantments
            const eqSlots = ["hand", "offhand", "head", "chest", "legs", "feet"];
            eqSlots.forEach(slot => {
                const cb = document.getElementById(`eq-${slot}-ench`);
                const val = p.mobConfig.gearEnch ? p.mobConfig.gearEnch[slot] : [];
                if (Array.isArray(val) && val.length > 0) {
                    if (cb) cb.checked = true;
                    app.mobEquipEnchants[slot] = val;
                } else if (val === true) {
                    if (cb) cb.checked = true;
                    app.mobEquipEnchants[slot] = [];
                } else {
                    if (cb) cb.checked = false;
                    app.mobEquipEnchants[slot] = [];
                }
            });

            // 7. Specials (Creeper powered, slime size, villager profession)
            if (p.mobConfig.specials) {
                if (p.mobConfig.type === "minecraft:creeper") {
                    const powered = document.getElementById("spec-creeper-powered");
                    if (powered) powered.checked = !!p.mobConfig.specials.creeperPowered;
                    const rad = document.getElementById("spec-creeper-radius");
                    if (rad) {
                        rad.value = p.mobConfig.specials.creeperRadius !== undefined ? p.mobConfig.specials.creeperRadius : 3;
                        const radLbl = document.getElementById("spec-creeper-radius-lbl");
                        if (radLbl) radLbl.textContent = `${rad.value} Blocks`;
                    }
                    const fuse = document.getElementById("spec-creeper-fuse");
                    if (fuse) {
                        fuse.value = p.mobConfig.specials.creeperFuse !== undefined ? p.mobConfig.specials.creeperFuse : 30;
                        const fuseLbl = document.getElementById("spec-creeper-fuse-lbl");
                        if (fuseLbl) fuseLbl.textContent = `${fuse.value} Ticks`;
                    }
                } else if (p.mobConfig.type === "minecraft:slime") {
                    const size = document.getElementById("spec-slime-size");
                    if (size) {
                        size.value = p.mobConfig.specials.slimeSize !== undefined ? p.mobConfig.specials.slimeSize : 1;
                        const sizeLbl = document.getElementById("spec-slime-size-lbl");
                        if (sizeLbl) sizeLbl.textContent = `Size ${size.value}`;
                    }
                } else if (p.mobConfig.type === "minecraft:villager") {
                    const prof = document.getElementById("spec-villager-profession");
                    if (prof) prof.value = p.mobConfig.specials.villagerProfession || "none";
                }
            }

            app.recalculateCurrentCommand();
        } else {
            app.displayCommand(p.command);
        }
        
        // Push notification toast
        const toast = document.getElementById("toast");
        toast.textContent = "Preset Loaded into Console!";
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2000);
    },

    exportPreset(id) {
        app.playClick();
        const p = presets.find(p => p.id === id);
        if (!p) return;

        const shareArea = document.getElementById("preset-json-area");
        shareArea.value = JSON.stringify(p, null, 2);
        
        shareArea.scrollIntoView({ behavior: 'smooth' });
        shareArea.select();
    },

    importPreset() {
        app.playClick();
        const area = document.getElementById("preset-json-area");
        const jsonStr = area.value.trim();

        if (!jsonStr) {
            alert("Please paste your preset JSON first!");
            return;
        }

        try {
            const p = JSON.parse(jsonStr);
            if (!p.name || !p.command || !p.type) {
                throw new Error("Invalid preset fields");
            }
            
            p.id = Date.now().toString();
            presets.push(p);
            app.savePresetsToStorage();
            area.value = "";
            
            alert(`Preset "${p.name}" imported successfully! Check "My Presets".`);
        } catch (e) {
            alert("Error: Invalid Preset JSON. Make sure you copy/paste the entire string code!");
            console.error(e);
        }
    },

    updatePresetsUI() {
        app.populateItemContainerPresets();
        const container = document.getElementById("presets-list-container");
        if (!container) return;
        container.innerHTML = "";

        if (presets.length === 0) {
            container.innerHTML = `<div class="no-presets-msg">No custom presets saved yet. Build a mob or item and hit "Save Preset" below!</div>`;
            return;
        }

        presets.forEach(p => {
            const card = document.createElement("div");
            card.className = "preset-card";

            let badgeText = "⚔️ Item";
            if (p.type === "mob") badgeText = "🧟 Mob";
            else if (p.type === "container") badgeText = "📦 Container";
            else if (p.type === "execute") badgeText = "⚙️ Exec";

            card.innerHTML = `
                <div class="preset-card-header">
                    <span class="preset-title">${p.name}</span>
                    <span class="preset-badge">${badgeText}</span>
                </div>
                <div class="preset-desc">${p.details}</div>
                <div class="preset-btns-row">
                    <button class="mc-btn green-btn sm-btn" onclick="app.loadPreset('${p.id}')">Load</button>
                    <button class="mc-btn gold-btn sm-btn" onclick="app.exportPreset('${p.id}')">Export</button>
                    <button class="mc-btn secondary-btn sm-btn" onclick="app.deletePreset('${p.id}')">Delete</button>
                </div>
            `;
            container.appendChild(card);
        });
        app.populateMountPresets();
    },

    // 13. Copy Text Helper
    copyText(text, label = "Copied to Clipboard!") {
        app.playClick();
        navigator.clipboard.writeText(text).then(() => {
            const toast = document.getElementById("toast");
            if (toast) {
                toast.textContent = label;
                toast.classList.add("show");
                setTimeout(() => {
                    toast.classList.remove("show");
                }, 1500);
            }
        }).catch(err => {
            console.error("Clipboard copy error:", err);
        });
    },

    activeDocsTab: "enchantments",

    initDocs() {
        const searchInput = document.getElementById("docs-search");
        if (searchInput) {
            searchInput.addEventListener("input", () => {
                app.renderDocs();
            });
        }

        const tabs = document.querySelectorAll("#docs-modal-tabs .docs-tab");
        tabs.forEach(tab => {
            tab.addEventListener("click", (e) => {
                app.playClick();
                tabs.forEach(t => t.classList.remove("active"));
                e.currentTarget.classList.add("active");
                app.activeDocsTab = e.currentTarget.dataset.cat;
                app.renderDocs();
            });
        });
    },

    renderDocs() {
        const grid = document.getElementById("docs-grid-container");
        const searchInput = document.getElementById("docs-search");
        if (!grid) return;
        grid.innerHTML = "";

        const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
        const tab = app.activeDocsTab;

        // Custom descriptions mappings
        const enchDescs = {
            protection: "Reduces overall damage taken from all sources by 4% per level.",
            fire_protection: "Reduces fire damage and burn duration.",
            feather_falling: "Reduces fall damage by 12% per level (caps at IV).",
            blast_protection: "Reduces blast damage and knockback.",
            projectile_protection: "Reduces damage from arrows, tridents, and fireballs.",
            respiration: "Extends underwater breathing time and improves vision.",
            aqua_affinity: "Removes the mining speed penalty when underwater.",
            thorns: "Chance to damage attackers at the cost of durability.",
            depth_strider: "Increases underwater movement speed.",
            frost_walker: "Turns water under feet into temporary ice.",
            soul_speed: "Increases movement speed on soul sand and soul soil.",
            swift_sneak: "Increases sneaking movement speed.",
            sharpness: "Increases melee weapon damage (+0.5 per level).",
            smite: "Increases damage dealt to undead mobs (zombies, skeletons, etc.).",
            bane_of_arthropods: "Increases damage to spiders, cave spiders, bees, and silverfish.",
            knockback: "Knocks back targets when struck.",
            fire_aspect: "Sets targets on fire for several seconds.",
            looting: "Increases the amount and rarity of drops from mobs.",
            sweeping: "Increases sweeping attack damage (Java only).",
            efficiency: "Increases block mining speed.",
            silk_touch: "Blocks mined drop themselves instead of items.",
            unbreaking: "Gives a chance to not consume durability when used.",
            fortune: "Chance to multiply block drops (coal, diamonds, etc.).",
            power: "Increases bow damage.",
            punch: "Increases bow knockback.",
            flame: "Sets bow arrows on fire.",
            infinity: "Allows shooting unlimited arrows with at least one in inventory.",
            luck_of_the_sea: "Increases chance of catching treasure when fishing.",
            lure: "Decreases hook wait time when fishing.",
            loyalty: "Trident returns to the player after being thrown.",
            impaling: "Deals extra damage to aquatic mobs.",
            riptide: "Launches the player forward when thrown in water/rain.",
            channeling: "Summons a lightning bolt on targets when thrown during a storm.",
            multishot: "Shoots 3 projectiles for the cost of 1.",
            quick_charge: "Reduces crossbow reload duration.",
            piercing: "Crossbow arrows pierce through multiple targets.",
            mending: "Consumes XP to repair item durability.",
            binding_curse: "Prevents removing the item from armor slots once equipped.",
            vanishing_curse: "Item vanishes completely upon player death."
        };

        const effectDescs = {
            "minecraft:speed": "Increases movement speed by 20% per level.",
            "minecraft:slowness": "Decreases movement speed by 15% per level.",
            "minecraft:haste": "Increases mining speed and attack speed by 20% per level.",
            "minecraft:mining_fatigue": "Decreases mining and attack speed.",
            "minecraft:strength": "Increases melee damage by 3 per level (1.5 hearts).",
            "minecraft:instant_health": "Heals 4 HP (2 hearts) per level instantly. Damages undead.",
            "minecraft:instant_damage": "Deals 6 HP (3 hearts) damage instantly. Heals undead.",
            "minecraft:jump_boost": "Increases jump height and reduces fall damage.",
            "minecraft:nausea": "Wobbles and distorts the player camera.",
            "minecraft:regeneration": "Restores health over time.",
            "minecraft:resistance": "Reduces incoming damage by 20% per level.",
            "minecraft:fire_resistance": "Protects completely against fire, lava, and magma.",
            "minecraft:water_breathing": "Allows breathing underwater without drowning.",
            "minecraft:invisibility": "Hides the player model (armor and hand items remain visible).",
            "minecraft:blindness": "Limits vision distance and disables sprinting.",
            "minecraft:night_vision": "Illuminates all dark areas.",
            "minecraft:hunger": "Depletes the hunger bar rapidly.",
            "minecraft:weakness": "Reduces melee attack damage by 4 per level.",
            "minecraft:poison": "Deals damage over time down to 1 HP.",
            "minecraft:wither": "Deals damage over time; can kill the player.",
            "minecraft:health_boost": "Adds extra temporary heart containers.",
            "minecraft:absorption": "Adds golden hearts that absorb damage and do not regenerate.",
            "minecraft:saturation": "Restores hunger and saturation.",
            "minecraft:glowing": "Outlines the entity silhouette through blocks.",
            "minecraft:levitation": "Causes the entity to float upwards.",
            "minecraft:luck": "Increases attributes when opening loot chests.",
            "minecraft:bad_luck": "Decreases loot luck.",
            "minecraft:slow_falling": "Slowing fall rate and negates fall damage completely.",
            "minecraft:conduit_power": "Grants water breathing, night vision, and mining speed underwater.",
            "minecraft:dolphins_grace": "Increases swim speed when swimming near dolphins.",
            "minecraft:bad_omen": "Triggers a village raid when entering a village.",
            "minecraft:hero_of_the_village": "Discounts item prices from villagers.",
            "minecraft:darkness": "Fades vision to black rhythmically."
        };

        let itemsList = [];

        if (tab === "enchantments") {
            itemsList = MC_DATA.enchantments.map(e => ({
                id: e.id,
                name: e.name,
                icon: app.getEnchantmentIcon(e.type, e.id),
                desc: enchDescs[e.id] || "Vanilla Minecraft enchantment.",
                meta: `Max Level: ${e.max} | Type: ${e.type.toUpperCase()}`
            }));
        } else if (tab === "effects") {
            itemsList = MC_DATA.effects.map(e => ({
                id: e.id,
                name: e.name,
                icon: e.icon || "🧪",
                desc: effectDescs[e.id] || "Vanilla Minecraft status effect.",
                meta: `Effect ID: ${e.id}`
            }));
        } else if (tab === "mobs") {
            itemsList = MC_DATA.mobs.map(m => ({
                id: m.id,
                name: m.name,
                icon: m.icon,
                desc: `Spawnable entity category: ${m.category}. Can be summoned using commands.`,
                meta: `Entity ID: ${m.id}`
            }));
        } else if (tab === "particles") {
            itemsList = MC_DATA.particles.map(p => ({
                id: p.id,
                name: p.name,
                icon: app.getParticleIcon(p.id),
                desc: "In-game particle effect used for ambient/visual command block designs.",
                meta: `Particle ID: ${p.id}`
            }));
        } else if (tab === "items") {
            itemsList = MC_DATA.all_items.map(i => ({
                id: i.id,
                name: i.name,
                icon: i.icon,
                desc: "Block or Item asset ID. Useful for /give, /setblock, or execute checks.",
                meta: `ID: ${i.id}`
            }));
        } else if (tab === "sounds") {
            itemsList = (MC_DATA.sounds || []).map(s => ({
                id: s.id,
                name: s.name,
                icon: s.icon || "🔊",
                desc: "Vanilla sound event ID. Can be played using the /playsound command.",
                meta: `Sound Event ID: ${s.id}`
            }));
        } else if (tab === "biomes") {
            itemsList = (MC_DATA.biomes || []).map(b => ({
                id: b.id,
                name: b.name,
                icon: b.icon || "🏔️",
                desc: b.desc || "Vanilla biome type.",
                meta: `Biome Resource Key: ${b.id}`
            }));
        } else if (tab === "structures") {
            itemsList = (MC_DATA.structures || []).map(s => ({
                id: s.id,
                name: s.name,
                icon: s.icon || "🏰",
                desc: s.desc || "In-game generation structure.",
                meta: `Structure Resource Key: ${s.id}`
            }));
        } else if (tab === "commands") {
            itemsList = (MC_DATA.commands || []).map(c => ({
                id: c.id,
                name: c.name,
                icon: c.icon || "📜",
                desc: c.desc || "Vanilla chat command.",
                meta: `Syntax: ${c.meta || c.id}`
            }));
        } else if (tab === "loot_tables") {
            const chests = (MC_DATA.loot_tables.chests || []).map(lt => ({
                id: lt.id,
                name: lt.name,
                icon: "https://cdn.jsdelivr.net/gh/Owen1212055/mc-assets@main/item-assets/CHEST.png",
                desc: "Chest loot table from structures or dungeons.",
                meta: `Category: Chest Loot | ID: ${lt.id}`
            }));
            const villages = (MC_DATA.loot_tables.villages || []).map(lt => ({
                id: lt.id,
                name: lt.name,
                icon: "https://cdn.jsdelivr.net/gh/Owen1212055/mc-assets@main/item-assets/EMERALD.png",
                desc: "Village house loot chest table.",
                meta: `Category: Village | ID: ${lt.id}`
            }));
            const gameplay = (MC_DATA.loot_tables.gameplay || []).map(lt => ({
                id: lt.id,
                name: lt.name,
                icon: "https://cdn.jsdelivr.net/gh/Owen1212055/mc-assets@main/item-assets/FISHING_ROD.png",
                desc: "Gameplay interaction loot table (e.g. fishing, bartering).",
                meta: `Category: Gameplay | ID: ${lt.id}`
            }));
            itemsList = [...chests, ...villages, ...gameplay];
        } else if (tab === "mob_drops") {
            itemsList = (MC_DATA.loot_tables.entities || []).map(lt => {
                const mobId = lt.id.replace("entities/", "");
                let iconUrl = "https://cdn.jsdelivr.net/gh/Owen1212055/mc-assets@main/item-assets/ROTTEN_FLESH.png";
                if (typeof getMobIconPath === "function") {
                    iconUrl = getMobIconPath(mobId);
                }
                return {
                    id: lt.id,
                    name: lt.name,
                    icon: iconUrl,
                    desc: "Entity mob drop loot table. Controls items dropped upon mob death.",
                    meta: `Category: Mob Drops | ID: ${lt.id}`
                };
            });
        }

        itemsList.forEach(item => {
            if (query && !item.name.toLowerCase().includes(query) && !item.id.toLowerCase().includes(query)) {
                return;
            }

            const card = document.createElement("div");
            card.className = "docs-card";
            card.innerHTML = `
                <div class="docs-card-icon">${app.renderIcon(item.icon)}</div>
                <div class="docs-card-info">
                    <div class="docs-card-name">${item.name}</div>
                    <div class="docs-card-id">${item.id}</div>
                    <div class="docs-card-desc">${item.desc}</div>
                    <div class="docs-card-meta">${item.meta}</div>
                </div>
            `;

            card.addEventListener("click", () => {
                app.copyText(item.id, `Copied ID: ${item.id}`);
            });

            grid.appendChild(card);
        });
    },

    containerContents: {},
    selectedContainerSlot: 0,
    mobEquipEnchants: {
        hand: [],
        offhand: [],
        head: [],
        chest: [],
        legs: [],
        feet: []
    },
    activeGearEnchSlot: null,
    creativeCallback: null,

    getItemIdFromCommand(cmd) {
        if (!cmd) return "minecraft:stone";
        let temp = cmd.trim();
        if (temp.startsWith("/")) {
            const parts = temp.split(/\s+/);
            if (parts.length >= 3) {
                let idPart = parts[2];
                const idx = idPart.search(/[{[()]/);
                if (idx !== -1) {
                    idPart = idPart.substring(0, idx);
                }
                if (!idPart.includes(":")) {
                    idPart = "minecraft:" + idPart;
                }
                return idPart;
            }
        }
        return "minecraft:stone";
    },

    initContainerMaker() {
        const typeSelect = document.getElementById("container-type");
        const titleInput = document.getElementById("container-title");
        const clearAllBtn = document.getElementById("btn-container-clear-all");
        const lootTableSelect = document.getElementById("container-loot-table");
        
        const countInput = document.getElementById("slot-item-count-input");
        const countLbl = document.getElementById("slot-item-count-lbl");
        const btnChooseItem = document.getElementById("btn-slot-choose-item");
        const btnClearSlot = document.getElementById("btn-slot-clear");
        const btnFillAll = document.getElementById("btn-container-fill-all");
        const btnFillEmpty = document.getElementById("btn-container-fill-empty");

        if (lootTableSelect) {
            lootTableSelect.innerHTML = '<option value="none">-- None (Use Custom Slot Grid) --</option>';

            const chestGroup = document.createElement("optgroup");
            chestGroup.label = "Chest Loot (Dungeons & Structures)";
            (MC_DATA.loot_tables.chests || []).forEach(lt => {
                const opt = document.createElement("option");
                opt.value = lt.id;
                opt.textContent = lt.name;
                chestGroup.appendChild(opt);
            });
            lootTableSelect.appendChild(chestGroup);

            const villageGroup = document.createElement("optgroup");
            villageGroup.label = "Village Chests";
            (MC_DATA.loot_tables.villages || []).forEach(lt => {
                const opt = document.createElement("option");
                opt.value = lt.id;
                opt.textContent = lt.name;
                villageGroup.appendChild(opt);
            });
            lootTableSelect.appendChild(villageGroup);

            const gameplayGroup = document.createElement("optgroup");
            gameplayGroup.label = "Gameplay Loot";
            (MC_DATA.loot_tables.gameplay || []).forEach(lt => {
                const opt = document.createElement("option");
                opt.value = lt.id;
                opt.textContent = lt.name;
                gameplayGroup.appendChild(opt);
            });
            lootTableSelect.appendChild(gameplayGroup);

            const mobGroup = document.createElement("optgroup");
            mobGroup.label = "Mob Drops (Entities)";
            (MC_DATA.loot_tables.entities || []).forEach(lt => {
                const opt = document.createElement("option");
                opt.value = lt.id;
                opt.textContent = lt.name;
                mobGroup.appendChild(opt);
            });
            lootTableSelect.appendChild(mobGroup);

            lootTableSelect.addEventListener("change", () => {
                app.playClick();
                app.updateLootTableUIState();
                app.recalculateCurrentCommand();
            });
        }

        if (typeSelect) {
            typeSelect.addEventListener("change", () => {
                app.playClick();
                const maxSlots = app.getContainerMaxSlots(typeSelect.value);
                if (app.selectedContainerSlot >= maxSlots) {
                    app.selectedContainerSlot = 0;
                }
                app.renderContainerGrid();
                app.updateSlotEditorUI();
                app.recalculateCurrentCommand();
            });
        }

        if (titleInput) {
            titleInput.addEventListener("input", () => {
                app.recalculateCurrentCommand();
            });
        }

        if (clearAllBtn) {
            clearAllBtn.addEventListener("click", () => {
                app.playClick();
                if (confirm("Are you sure you want to clear all slots in this container?")) {
                    app.containerContents = {};
                    app.selectedContainerSlot = 0;
                    app.renderContainerGrid();
                    app.updateSlotEditorUI();
                    app.recalculateCurrentCommand();
                }
            });
        }

        if (countInput) {
            countInput.addEventListener("input", (e) => {
                const val = parseInt(e.target.value) || 1;
                if (countLbl) countLbl.textContent = val + "x";
                
                const item = app.containerContents[app.selectedContainerSlot];
                if (item) {
                    item.count = val;
                    app.renderContainerGrid();
                    app.recalculateCurrentCommand();
                }
            });
        }

        if (btnChooseItem) {
            btnChooseItem.addEventListener("click", () => {
                app.playClick();
                const modal = document.getElementById("creative-inventory-modal");
                if (modal) {
                    modal.style.display = "flex";
                    modal.offsetHeight;
                    modal.classList.add("show");
                    
                    app.activeCreativeTab = "weapons";
                    
                    app.creativeCallback = (selection) => {
                        const count = parseInt(document.getElementById("slot-item-count-input").value) || 1;
                        
                        let itemId = selection.id;
                        let itemName = selection.name;
                        let itemIcon = selection.icon;
                        let itemCommand = selection.command;

                        // Check if this is a custom mob preset (starts with /summon or summon)
                        const isMobPreset = selection.command && (selection.command.startsWith("/summon") || selection.command.startsWith("summon"));
                        if (isMobPreset) {
                            if (!itemId.endsWith("_spawn_egg")) {
                                itemId = itemId + "_spawn_egg";
                            }
                            itemName = itemName + " Spawn Egg";
                            itemIcon = getItemIconPath(itemId);
                            
                            const braceIdx = selection.command.indexOf("{");
                            let nbt = "";
                            if (braceIdx !== -1) {
                                nbt = selection.command.substring(braceIdx);
                            }
                            
                            const entityId = selection.id;
                            let innerNbt = `id:"${entityId}"`;
                            if (nbt) {
                                const cleanNbt = nbt.trim().slice(1, -1).trim();
                                if (cleanNbt) {
                                    innerNbt += "," + cleanNbt;
                                }
                            }
                            itemCommand = `/give @p ${itemId}[minecraft:entity_data={${innerNbt}}] 1`;
                        }

                        app.containerContents[app.selectedContainerSlot] = {
                            id: itemId,
                            name: itemName,
                            icon: itemIcon,
                            isPreset: !!selection.isPreset,
                            presetId: selection.presetId || null,
                            command: itemCommand || null,
                            itemConfig: selection.itemConfig || null,
                            count: count
                        };
                        app.renderContainerGrid();
                        app.updateSlotEditorUI();
                        app.recalculateCurrentCommand();
                    };

                    app.renderCreativeTabs();
                    app.renderCreativeGrid();
                    const searchInput = document.getElementById("creative-modal-search");
                    if (searchInput) {
                        searchInput.value = "";
                        searchInput.focus();
                    }
                }
            });
        }

        if (btnClearSlot) {
            btnClearSlot.addEventListener("click", () => {
                app.playClick();
                delete app.containerContents[app.selectedContainerSlot];
                app.renderContainerGrid();
                app.updateSlotEditorUI();
                app.recalculateCurrentCommand();
            });
        }

        if (btnFillAll) {
            btnFillAll.addEventListener("click", () => {
                app.playClick();
                const item = app.containerContents[app.selectedContainerSlot];
                if (!item) {
                    alert("Please select a slot and configure an item first!");
                    return;
                }
                if (confirm(`Fill all slots with ${item.name} x${item.count}?`)) {
                    const maxSlots = app.getContainerMaxSlots(document.getElementById("container-type").value);
                    for (let i = 0; i < maxSlots; i++) {
                        app.containerContents[i] = JSON.parse(JSON.stringify(item));
                    }
                    app.renderContainerGrid();
                    app.recalculateCurrentCommand();
                }
            });
        }

        if (btnFillEmpty) {
            btnFillEmpty.addEventListener("click", () => {
                app.playClick();
                const item = app.containerContents[app.selectedContainerSlot];
                if (!item) {
                    alert("Please select a slot and configure an item first!");
                    return;
                }
                const maxSlots = app.getContainerMaxSlots(document.getElementById("container-type").value);
                let filledAny = false;
                for (let i = 0; i < maxSlots; i++) {
                    if (!app.containerContents[i]) {
                        app.containerContents[i] = JSON.parse(JSON.stringify(item));
                        filledAny = true;
                    }
                }
                if (filledAny) {
                    app.renderContainerGrid();
                    app.recalculateCurrentCommand();
                } else {
                    alert("No empty slots to fill!");
                }
            });
        }

        const btnSlotEditPreset = document.getElementById("btn-slot-edit-preset");
        if (btnSlotEditPreset) {
            btnSlotEditPreset.addEventListener("click", () => {
                app.playClick();
                const item = app.containerContents[app.selectedContainerSlot];
                if (item && item.isPreset && item.presetId) {
                    app.loadPreset(item.presetId);
                }
            });
        }

        app.renderContainerGrid();
        app.updateSlotEditorUI();
        app.updateLootTableUIState();
    },

    getContainerMaxSlots(type) {
        if (type.includes("dispenser") || type.includes("dropper")) return 9;
        if (type.includes("hopper")) return 5;
        return 27;
    },

    updateLootTableUIState() {
        const lootTableSelect = document.getElementById("container-loot-table");
        const grid = document.getElementById("container-grid");
        const overlay = document.getElementById("container-grid-overlay");
        
        if (!lootTableSelect) return;
        const isActive = lootTableSelect.value !== "none";
        
        if (grid) {
            if (isActive) {
                grid.classList.add("disabled-grid");
            } else {
                grid.classList.remove("disabled-grid");
            }
        }
        
        if (overlay) {
            overlay.style.display = isActive ? "flex" : "none";
        }
        
        const slotEditorInfo = document.getElementById("slot-editor-info");
        const slotEditorControls = document.getElementById("slot-editor-controls");
        
        if (isActive) {
            if (slotEditorInfo) {
                slotEditorInfo.textContent = "⚠️ Slot editor disabled because a pre-loaded Loot Table is selected.";
                slotEditorInfo.style.display = "block";
            }
            if (slotEditorControls) {
                slotEditorControls.style.display = "none";
            }
        } else {
            app.updateSlotEditorUI();
        }
    },

    updateMountUIState() {
        const typeSelect = document.getElementById("mob-mount-type");
        const defaultRow = document.getElementById("mob-mount-default-row");
        const presetRow = document.getElementById("mob-mount-preset-row");
        const optionsRow = document.getElementById("mob-mount-options-row");
        if (!typeSelect) return;

        const val = typeSelect.value;
        if (defaultRow) defaultRow.style.display = val === "default" ? "block" : "none";
        if (presetRow) presetRow.style.display = val === "preset" ? "block" : "none";
        if (optionsRow) optionsRow.style.display = val === "default" ? "block" : "none";
        
        if (val === "preset") {
            app.populateMountPresets();
        }
    },

    populateMountPresets() {
        const select = document.getElementById("mob-mount-preset");
        if (!select) return;
        
        const mobPresets = presets.filter(p => p.type === "mob");
        
        select.innerHTML = "";
        if (mobPresets.length === 0) {
            select.innerHTML = '<option value="">-- No Saved Mob Presets Found --</option>';
        } else {
            mobPresets.forEach(p => {
                const opt = document.createElement("option");
                opt.value = p.id;
                opt.textContent = p.name;
                select.appendChild(opt);
            });
        }
    },

    renderContainerGrid() {
        const grid = document.getElementById("container-grid");
        const typeSelect = document.getElementById("container-type");
        if (!grid || !typeSelect) return;

        const type = typeSelect.value;
        const maxSlots = app.getContainerMaxSlots(type);

        if (maxSlots === 9) {
            grid.style.gridTemplateColumns = "repeat(3, 48px)";
        } else if (maxSlots === 5) {
            grid.style.gridTemplateColumns = "repeat(5, 48px)";
        } else {
            grid.style.gridTemplateColumns = "repeat(9, 48px)";
        }

        grid.innerHTML = "";

        for (let i = 0; i < maxSlots; i++) {
            const slotEl = document.createElement("div");
            slotEl.className = `container-slot ${app.selectedContainerSlot === i ? "selected" : ""}`;
            slotEl.dataset.slot = i;

            const item = app.containerContents[i];
            if (item) {
                slotEl.innerHTML = `
                    <div class="slot-item-icon">${app.renderIcon(item.icon)}</div>
                    <div class="slot-item-count">${item.count > 1 ? item.count : ""}</div>
                    <div class="slot-number">${i}</div>
                    <div class="creative-tooltip">${item.isPreset ? '★ Preset: ' : ''}${item.name}</div>
                `;
            } else {
                slotEl.innerHTML = `
                    <div class="slot-number">${i}</div>
                `;
            }

            slotEl.addEventListener("click", () => {
                app.playClick();
                app.selectedContainerSlot = i;
                
                document.querySelectorAll(".container-slot").forEach(el => el.classList.remove("selected"));
                slotEl.classList.add("selected");

                app.updateSlotEditorUI();
            });

            grid.appendChild(slotEl);
        }
    },

    updateSlotEditorUI() {
        const info = document.getElementById("slot-editor-info");
        const controls = document.getElementById("slot-editor-controls");
        const nameEl = document.getElementById("slot-editor-item-name");
        const idEl = document.getElementById("slot-editor-item-id");
        const iconEl = document.getElementById("slot-editor-icon-preview");
        const countInput = document.getElementById("slot-item-count-input");
        const countLbl = document.getElementById("slot-item-count-lbl");
        const btnSlotEditPreset = document.getElementById("btn-slot-edit-preset");

        if (!info || !controls) return;

        info.textContent = `Selected Slot: #${app.selectedContainerSlot}`;
        controls.style.display = "flex";

        const item = app.containerContents[app.selectedContainerSlot];
        if (item) {
            nameEl.textContent = (item.isPreset ? "★ " : "") + item.name;
            idEl.textContent = item.id;
            iconEl.innerHTML = app.renderIcon(item.icon);
            countInput.value = item.count;
            countLbl.textContent = item.count + "x";
            if (btnSlotEditPreset) {
                btnSlotEditPreset.style.display = (item.isPreset && item.presetId) ? "block" : "none";
            }
        } else {
            nameEl.textContent = "Empty Slot";
            idEl.textContent = "none";
            iconEl.innerHTML = "🟩";
            countInput.value = 1;
            countLbl.textContent = "1x";
            if (btnSlotEditPreset) {
                btnSlotEditPreset.style.display = "none";
            }
        }
    },

    bannerPatterns: [],

    initBannerMaker() {
        app.safeBind("banner-base-color", "change", () => {
            app.updateBannerPreview();
            app.recalculateCurrentCommand();
        });
        
        app.safeBind("banner-name", "input", () => app.recalculateCurrentCommand());

        const modeBanner = document.getElementById("banner-mode-banner");
        const modeShield = document.getElementById("banner-mode-shield");
        
        if (modeBanner) {
            modeBanner.addEventListener("change", () => {
                app.updateBannerPreview();
                app.recalculateCurrentCommand();
            });
        }
        if (modeShield) {
            modeShield.addEventListener("change", () => {
                app.updateBannerPreview();
                app.recalculateCurrentCommand();
            });
        }

        app.safeBind("btn-banner-add-layer", "click", () => {
            app.playClick();
            app.addPatternLayer();
        });

        // Initialize with 0 layers or update preview
        app.updateBannerPreview();
    },

    addPatternLayer(patternId = "minecraft:stripe_top", colorId = "red") {
        if (app.bannerPatterns.length >= 16) {
            alert("Banners are limited to a maximum of 16 pattern layers!");
            return;
        }
        app.bannerPatterns.push({ pattern: patternId, color: colorId });
        app.renderBannerLayers();
        app.updateBannerPreview();
        app.recalculateCurrentCommand();
    },

    deletePatternLayer(index) {
        app.bannerPatterns.splice(index, 1);
        app.renderBannerLayers();
        app.updateBannerPreview();
        app.recalculateCurrentCommand();
    },

    movePatternLayer(index, direction) {
        const targetIdx = index + direction;
        if (targetIdx < 0 || targetIdx >= app.bannerPatterns.length) return;
        
        // Swap elements
        const temp = app.bannerPatterns[index];
        app.bannerPatterns[index] = app.bannerPatterns[targetIdx];
        app.bannerPatterns[targetIdx] = temp;
        
        app.renderBannerLayers();
        app.updateBannerPreview();
        app.recalculateCurrentCommand();
    },

    hydrateBannerPatternLayers(patternsList) {
        app.bannerPatterns = JSON.parse(JSON.stringify(patternsList || []));
        app.renderBannerLayers();
        app.updateBannerPreview();
    },

    drawPatternSVG(patternId, color, baseColor, contextId) {
        const id = `${patternId}-${contextId}`.replace(/:/g, "-");
        switch (patternId) {
            case "minecraft:stripe_top":
                return `<rect x="25" y="30" width="100" height="80" fill="${color}"/>`;
            case "minecraft:stripe_bottom":
                return `<rect x="25" y="190" width="100" height="80" fill="${color}"/>`;
            case "minecraft:stripe_left":
                return `<rect x="25" y="30" width="33.3" height="240" fill="${color}"/>`;
            case "minecraft:stripe_right":
                return `<rect x="91.7" y="30" width="33.3" height="240" fill="${color}"/>`;
            case "minecraft:stripe_center":
                return `<rect x="58.3" y="30" width="33.3" height="240" fill="${color}"/>`;
            case "minecraft:stripe_middle":
                return `<rect x="25" y="110" width="100" height="80" fill="${color}"/>`;
            case "minecraft:stripe_downright":
                return `<polygon points="25,30 50,30 125,210 125,270 100,270 25,90" fill="${color}"/>`;
            case "minecraft:stripe_downleft":
                return `<polygon points="125,30 100,30 25,210 25,270 50,270 125,90" fill="${color}"/>`;
            case "minecraft:small_stripes":
                return `<g fill="${color}"><rect x="25" y="30" width="12.5" height="240"/><rect x="50" y="30" width="12.5" height="240"/><rect x="75" y="30" width="12.5" height="240"/><rect x="100" y="30" width="12.5" height="240"/></g>`;
            case "minecraft:cross":
                return `<g fill="${color}"><polygon points="25,30 50,30 125,210 125,270 100,270 25,90"/><polygon points="125,30 100,30 25,210 25,270 50,270 125,90"/></g>`;
            case "minecraft:straight_cross":
                return `<g fill="${color}"><rect x="58.3" y="30" width="33.3" height="240"/><rect x="25" y="110" width="100" height="80"/></g>`;
            case "minecraft:triangle_bottom":
                return `<polygon points="25,270 75,120 125,270" fill="${color}"/>`;
            case "minecraft:triangle_top":
                return `<polygon points="25,30 75,180 125,30" fill="${color}"/>`;
            case "minecraft:triangles_bottom":
                return `<polygon points="25,270 25,230 37.5,270 50,230 62.5,270 75,230 87.5,270 100,230 112.5,270 125,230 125,270" fill="${color}"/>`;
            case "minecraft:triangles_top":
                return `<polygon points="25,30 25,70 37.5,30 50,70 62.5,30 75,70 87.5,30 100,70 112.5,30 125,70 125,30" fill="${color}"/>`;
            case "minecraft:diagonal_left":
                return `<polygon points="25,30 125,30 125,270" fill="${color}"/>`;
            case "minecraft:diagonal_right":
                return `<polygon points="25,30 125,30 25,270" fill="${color}"/>`;
            case "minecraft:diagonal_up_left":
                return `<polygon points="125,30 125,270 25,270" fill="${color}"/>`;
            case "minecraft:diagonal_up_right":
                return `<polygon points="25,30 125,270 25,270" fill="${color}"/>`;
            case "minecraft:square_bottom_left":
                return `<rect x="25" y="150" width="50" height="120" fill="${color}"/>`;
            case "minecraft:square_bottom_right":
                return `<rect x="75" y="150" width="50" height="120" fill="${color}"/>`;
            case "minecraft:square_top_left":
                return `<rect x="25" y="30" width="50" height="120" fill="${color}"/>`;
            case "minecraft:square_top_right":
                return `<rect x="75" y="30" width="50" height="120" fill="${color}"/>`;
            case "minecraft:circle":
                return `<circle cx="75" cy="150" r="30" fill="${color}"/>`;
            case "minecraft:rhombus":
                return `<polygon points="75,90 115,150 75,210 35,150" fill="${color}"/>`;
            case "minecraft:half_vertical":
                return `<rect x="25" y="30" width="50" height="240" fill="${color}"/>`;
            case "minecraft:half_horizontal":
                return `<rect x="25" y="30" width="100" height="120" fill="${color}"/>`;
            case "minecraft:half_vertical_right":
                return `<rect x="75" y="30" width="50" height="240" fill="${color}"/>`;
            case "minecraft:half_horizontal_bottom":
                return `<rect x="25" y="150" width="100" height="120" fill="${color}"/>`;
            case "minecraft:border":
                return `<rect x="25" y="30" width="100" height="240" fill="none" stroke="${color}" stroke-width="12"/>`;
            case "minecraft:curly_border":
                return `<rect x="25" y="30" width="100" height="240" fill="none" stroke="${color}" stroke-dasharray="10,6" stroke-width="12"/>`;
            case "minecraft:brick":
                return `
                    <g stroke="${color}" stroke-width="2" opacity="0.8">
                        <line x1="25" y1="60" x2="125" y2="60"/>
                        <line x1="25" y1="90" x2="125" y2="90"/>
                        <line x1="25" y1="120" x2="125" y2="120"/>
                        <line x1="25" y1="150" x2="125" y2="150"/>
                        <line x1="25" y1="180" x2="125" y2="180"/>
                        <line x1="25" y1="210" x2="125" y2="210"/>
                        <line x1="25" y1="240" x2="125" y2="240"/>
                        <line x1="50" y1="30" x2="50" y2="60"/><line x1="100" y1="30" x2="100" y2="60"/>
                        <line x1="75" y1="60" x2="75" y2="90"/>
                        <line x1="50" y1="90" x2="50" y2="120"/><line x1="100" y1="90" x2="100" y2="120"/>
                        <line x1="75" y1="120" x2="75" y2="150"/>
                        <line x1="50" y1="150" x2="50" y2="180"/><line x1="100" y1="150" x2="100" y2="180"/>
                        <line x1="75" y1="180" x2="75" y2="210"/>
                        <line x1="50" y1="210" x2="50" y2="240"/><line x1="100" y1="210" x2="100" y2="240"/>
                        <line x1="75" y1="240" x2="75" y2="270"/>
                    </g>
                `;
            case "minecraft:gradient":
                return `
                    <defs>
                        <linearGradient id="grad-top-down-${id}" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="${color}" stop-opacity="1"/>
                            <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
                        </linearGradient>
                    </defs>
                    <rect x="25" y="30" width="100" height="240" fill="url(#grad-top-down-${id})"/>
                `;
            case "minecraft:gradient_up":
                return `
                    <defs>
                        <linearGradient id="grad-bottom-up-${id}" x1="0%" y1="100%" x2="0%" y2="0%">
                            <stop offset="0%" stop-color="${color}" stop-opacity="1"/>
                            <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
                        </linearGradient>
                    </defs>
                    <rect x="25" y="30" width="100" height="240" fill="url(#grad-bottom-up-${id})"/>
                `;
            case "minecraft:creeper":
                return `
                    <g fill="${color}">
                        <rect x="55" y="115" width="12" height="12"/>
                        <rect x="83" y="115" width="12" height="12"/>
                        <rect x="67" y="127" width="16" height="20"/>
                        <rect x="59" y="137" width="8" height="24"/>
                        <rect x="83" y="137" width="8" height="24"/>
                    </g>
                `;
            case "minecraft:skull":
                return `
                    <g fill="${color}">
                        <circle cx="75" cy="130" r="16"/>
                        <rect x="67" y="142" width="16" height="10" rx="2"/>
                        <line x1="45" y1="110" x2="105" y2="170" stroke="${color}" stroke-width="6" stroke-linecap="round"/>
                        <circle cx="45" cy="110" r="6"/>
                        <circle cx="105" cy="170" r="6"/>
                        <line x1="105" y1="110" x2="45" y2="170" stroke="${color}" stroke-width="6" stroke-linecap="round"/>
                        <circle cx="105" cy="110" r="6"/>
                        <circle cx="45" cy="170" r="6"/>
                    </g>
                    <g fill="${baseColor}">
                        <circle cx="69" cy="128" r="4"/>
                        <circle cx="81" cy="128" r="4"/>
                        <path d="M 72,138 L 75,134 L 78,138 Z"/>
                    </g>
                `;
            case "minecraft:flower":
                return `
                    <g fill="${color}">
                        <circle cx="75" cy="150" r="8"/>
                        <circle cx="75" cy="136" r="6"/>
                        <circle cx="75" cy="164" r="6"/>
                        <circle cx="61" cy="150" r="6"/>
                        <circle cx="89" cy="150" r="6"/>
                        <circle cx="65" cy="140" r="5"/>
                        <circle cx="85" cy="140" r="5"/>
                        <circle cx="65" cy="160" r="5"/>
                        <circle cx="85" cy="160" r="5"/>
                    </g>
                `;
            case "minecraft:mojang":
                return `
                    <path d="M 60,135 C 60,125 70,120 75,120 C 85,120 90,125 90,135 C 90,145 80,148 78,150 L 78,162 L 72,162 L 72,148 C 65,148 60,145 60,135 Z" fill="${color}"/>
                    <circle cx="82" cy="132" r="3" fill="${baseColor}"/>
                `;
            case "minecraft:globe":
                return `
                    <g stroke="${color}" stroke-width="3" fill="none">
                        <circle cx="75" cy="150" r="24"/>
                        <line x1="51" y1="150" x2="99" y2="150"/>
                        <line x1="75" y1="126" x2="75" y2="174"/>
                        <path d="M 60,132 Q 75,140 90,132"/>
                        <path d="M 60,168 Q 75,160 90,168"/>
                    </g>
                `;
            case "minecraft:piglin":
                return `
                    <g fill="${color}">
                        <rect x="55" y="135" width="40" height="24" rx="4"/>
                    </g>
                    <g fill="${baseColor}">
                        <rect x="62" y="141" width="6" height="12" rx="1"/>
                        <rect x="82" y="141" width="6" height="12" rx="1"/>
                    </g>
                `;
            case "minecraft:flow":
                return `<path d="M 50,150 C 50,120 70,120 75,130 C 80,140 70,160 75,170 C 80,180 100,180 100,150" stroke="${color}" stroke-width="8" fill="none" stroke-linecap="round"/>`;
            case "minecraft:guster":
                return `<path d="M 45,140 Q 75,120 95,140 T 75,170 T 55,150" stroke="${color}" stroke-width="8" fill="none" stroke-linecap="round"/>`;
            default:
                return "";
        }
    },

    getMiniPatternSVG(patternId, colorName, baseColorName) {
        const colorMap = {
            white: "#ffffff", orange: "#f9801d", magenta: "#c900c9", light_blue: "#3db2ff",
            yellow: "#fed83d", lime: "#80c71f", pink: "#f38caa", gray: "#474f52",
            light_gray: "#9d9d97", cyan: "#169c9c", purple: "#8932b8", blue: "#3c44aa",
            brown: "#835432", green: "#5e7c16", red: "#b02e26", black: "#1d1d21"
        };
        const colHex = colorMap[colorName] || "#b02e26";
        const baseHex = colorMap[baseColorName] || "#ffffff";
        const patternElements = app.drawPatternSVG(patternId, colHex, baseHex, "mini");
        
        return `
            <svg viewBox="25 30 100 240" width="100%" height="100%" style="display: block;">
                <rect x="25" y="30" width="100" height="240" fill="${baseHex}"/>
                ${patternElements}
            </svg>
        `;
    },

    renderBannerLayers() {
        const container = document.getElementById("banner-layers-container");
        if (!container) return;
        container.innerHTML = "";

        if (app.bannerPatterns.length === 0) {
            container.innerHTML = '<div style="color: #666; font-style: italic; text-align: center; padding: 12px;">No pattern layers added yet. Click "Add Layer" to begin!</div>';
            return;
        }

        app.bannerPatterns.forEach((layer, idx) => {
            const row = document.createElement("div");
            row.className = "banner-layer-row";
            row.dataset.index = idx;

            // Find current pattern details
            const currentPat = BANNER_PATTERNS.find(p => p.id === layer.pattern) || BANNER_PATTERNS[0];
            const currentPatternName = currentPat.name.split(" (")[0];
            const miniSVG = app.getMiniPatternSVG(layer.pattern, "red", "white");

            // Generate Custom Dropdown items
            let dropdownItems = "";
            BANNER_PATTERNS.forEach(p => {
                const isSelected = p.id === layer.pattern;
                const itemSVG = app.getMiniPatternSVG(p.id, "red", "white");
                dropdownItems += `
                    <div class="pattern-dropdown-item ${isSelected ? 'selected' : ''}" data-value="${p.id}" style="display: flex; align-items: center; justify-content: space-between; padding: 6px 10px; cursor: pointer; border-bottom: 1px solid #222; font-family: 'VT323', monospace; font-size: 16px; color: #ccc;">
                        <span>${p.name.split(" (")[0]}</span>
                        <div style="width: 16px; height: 26px; border: 1px solid #444; background: #fff; border-radius: 1px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            ${itemSVG}
                        </div>
                    </div>
                `;
            });

            // Generate Color select options
            let colorOptions = "";
            BANNER_COLORS.forEach(c => {
                const selected = c.id === layer.color ? "selected" : "";
                colorOptions += `<option value="${c.id}" ${selected}>${c.emoji} ${c.name}</option>`;
            });

            row.innerHTML = `
                <span class="layer-number">#${idx + 1}</span>
                <div class="banner-pattern-picker-wrapper">
                    <button type="button" class="mc-btn pattern-picker-trigger" style="width: 100%; display: flex; align-items: center; justify-content: space-between; text-align: left; padding: 6px 10px; font-family: 'VT323', monospace; font-size: 16px;">
                        <span class="picker-current-text">${currentPatternName}</span>
                        <div class="picker-preview-mini" style="width: 16px; height: 26px; border: 1px solid #444; border-radius: 1px; overflow: hidden; background: #fff; display: flex; align-items: center; justify-content: center;">
                            ${miniSVG}
                        </div>
                    </button>
                    <div class="pattern-dropdown-list" style="display: none;">
                        ${dropdownItems}
                    </div>
                </div>
                <select class="banner-pattern-color" style="flex: 1; margin-left: 8px;">
                    ${colorOptions}
                </select>
                <div class="layer-actions" style="margin-left: auto;">
                    <button type="button" class="mc-btn icon-btn btn-layer-up" style="padding: 4px 8px; font-size: 11px;">▲</button>
                    <button type="button" class="mc-btn icon-btn btn-layer-down" style="padding: 4px 8px; font-size: 11px;">▼</button>
                    <button type="button" class="mc-btn red-btn icon-btn btn-layer-delete" style="padding: 4px 8px; font-size: 11px; margin-left: 4px;">❌</button>
                </div>
            `;

            // Dropdown List toggle listener
            const trigger = row.querySelector(".pattern-picker-trigger");
            const dropdownList = row.querySelector(".pattern-dropdown-list");
            
            trigger.addEventListener("click", (e) => {
                e.stopPropagation();
                // Close all other dropdown lists
                document.querySelectorAll(".pattern-dropdown-list").forEach(list => {
                    if (list !== dropdownList) {
                        list.style.display = "none";
                    }
                });
                const isHidden = dropdownList.style.display === "none";
                dropdownList.style.display = isHidden ? "block" : "none";
            });

            // Handle custom dropdown item click
            row.querySelectorAll(".pattern-dropdown-item").forEach(item => {
                item.addEventListener("click", () => {
                    const selectedVal = item.dataset.value;
                    app.bannerPatterns[idx].pattern = selectedVal;
                    app.renderBannerLayers();
                    app.updateBannerPreview();
                    app.recalculateCurrentCommand();
                });
            });

            // Add other event listeners
            const colorSelect = row.querySelector(".banner-pattern-color");
            const btnUp = row.querySelector(".btn-layer-up");
            const btnDown = row.querySelector(".btn-layer-down");
            const btnDelete = row.querySelector(".btn-layer-delete");

            colorSelect.addEventListener("change", (e) => {
                app.bannerPatterns[idx].color = e.target.value;
                app.renderBannerLayers();
                app.updateBannerPreview();
                app.recalculateCurrentCommand();
            });

            btnUp.addEventListener("click", () => {
                app.playClick();
                app.movePatternLayer(idx, -1);
            });

            btnDown.addEventListener("click", () => {
                app.playClick();
                app.movePatternLayer(idx, 1);
            });

            btnDelete.addEventListener("click", () => {
                app.playClick();
                app.deletePatternLayer(idx);
            });

            container.appendChild(row);
        });
    },

    collectBannerPatterns() {
        return JSON.parse(JSON.stringify(app.bannerPatterns));
    },

    updateBannerPreview() {
        const isShield = document.getElementById("banner-mode-shield") ? document.getElementById("banner-mode-shield").checked : false;
        const baseColor = document.getElementById("banner-base-color") ? document.getElementById("banner-base-color").value : "white";
        
        const previewBase = document.getElementById("banner-visual-base");
        const descDiv = document.getElementById("banner-patterns-description");

        const colorMap = {
            white: "#ffffff", orange: "#f9801d", magenta: "#c900c9", light_blue: "#3db2ff",
            yellow: "#fed83d", lime: "#80c71f", pink: "#f38caa", gray: "#474f52",
            light_gray: "#9d9d97", cyan: "#169c9c", purple: "#8932b8", blue: "#3c44aa",
            brown: "#835432", green: "#5e7c16", red: "#b02e26", black: "#1d1d21"
        };

        if (previewBase) {
            const baseColorHex = colorMap[baseColor] || "#ffffff";
            const modeLabelHTML = `<span id="banner-mode-label" style="position: absolute; top: -14px; font-size: 11px; background: ${isShield ? '#ffd700' : '#00cdcd'}; color: #000; padding: 1px 6px; border-radius: 4px; font-family: 'VT323', monospace; text-transform: uppercase; z-index: 10;">${isShield ? 'SHIELD' : 'BANNER'}</span>`;
            
            // Build dynamic pattern layers SVG elements
            let layersSvg = "";
            app.bannerPatterns.forEach((layer, layerIdx) => {
                const layerColorHex = colorMap[layer.color] || "#b02e26";
                layersSvg += app.drawPatternSVG(layer.pattern, layerColorHex, baseColorHex, `main-${layerIdx}`);
            });
            
            let svgContent = "";
            if (isShield) {
                // Shield canvas layout
                svgContent = `
                    <svg viewBox="0 0 150 300" width="100%" height="100%" style="display: block; width: 100%; height: 100%;">
                        <defs>
                            <clipPath id="shield-clip">
                                <path d="M 75,30 L 125,30 L 125,120 Q 125,210 75,270 Q 25,210 25,120 L 25,30 Z"/>
                            </clipPath>
                        </defs>
                        <!-- Wood backplate backing -->
                        <path d="M 75,30 L 125,30 L 125,120 Q 125,210 75,270 Q 25,210 25,120 L 25,30 Z" fill="#2c2c2e" stroke="#101012" stroke-width="4"/>
                        <!-- Clipped base shield and patterns -->
                        <g clip-path="url(#shield-clip)">
                            <path d="M 75,30 L 125,30 L 125,120 Q 125,210 75,270 Q 25,210 25,120 L 25,30 Z" fill="${baseColorHex}"/>
                            ${layersSvg}
                        </g>
                        <!-- Grey metal rim -->
                        <path d="M 75,30 L 125,30 L 125,120 Q 125,210 75,270 Q 25,210 25,120 L 25,30 Z" fill="none" stroke="#7f7f7f" stroke-width="6"/>
                    </svg>
                `;
            } else {
                // Banner canvas layout
                svgContent = `
                    <svg viewBox="0 0 150 300" width="100%" height="100%" style="display: block; width: 100%; height: 100%;">
                        <defs>
                            <clipPath id="banner-clip">
                                <rect x="30" y="24" width="90" height="240" rx="2"/>
                            </clipPath>
                        </defs>
                        <!-- Hanger Stand Bar -->
                        <rect x="15" y="16" width="120" height="8" fill="#5c4033" rx="2"/>
                        <!-- Hanger rope/string -->
                        <path d="M 75,6 L 15,16 Q 75,16 135,16 Z" fill="none" stroke="#333" stroke-width="2"/>
                        <!-- Clipped banner base and patterns -->
                        <g clip-path="url(#banner-clip)">
                            <rect x="30" y="24" width="90" height="240" fill="${baseColorHex}"/>
                            ${layersSvg}
                        </g>
                        <!-- Thin black border contour -->
                        <rect x="30" y="24" width="90" height="240" fill="none" stroke="#222" stroke-width="2" rx="2"/>
                    </svg>
                `;
            }
            
            previewBase.innerHTML = modeLabelHTML + svgContent;
            previewBase.style.backgroundColor = "transparent";
            previewBase.style.border = "none";
            previewBase.style.boxShadow = "none";
        }

        const colorName = baseColor.replace("_", " ");
        const baseColorDisplay = colorName.charAt(0).toUpperCase() + colorName.slice(1);

        if (descDiv) {
            if (app.bannerPatterns.length === 0) {
                descDiv.textContent = `A clean ${baseColorDisplay} ${isShield ? "shield" : "banner"} with no patterns applied.`;
            } else {
                const descriptions = app.bannerPatterns.map(layer => {
                    const pName = BANNER_PATTERNS.find(p => p.id === layer.pattern)?.name.split(" (")[0] || "Pattern";
                    const cName = layer.color.replace("_", " ");
                    const cDisplay = cName.charAt(0).toUpperCase() + cName.slice(1);
                    return `${cDisplay} ${pName}`;
                });
                descDiv.textContent = `${baseColorDisplay} ${isShield ? "shield" : "banner"} layered with: ${descriptions.join(", ")}.`;
            }
        }
    },

    initMobGearEnch() {
        const btnSave = document.getElementById("btn-save-mob-gear-ench");
        const btnClose = document.getElementById("btn-close-mob-gear-ench-modal");
        const searchInput = document.getElementById("mob-gear-ench-search");

        document.querySelectorAll(".btn-slot-ench-edit").forEach(btn => {
            btn.addEventListener("click", () => {
                app.playClick();
                app.openMobGearEnchModal(btn.dataset.slot);
            });
        });

        if (btnClose) {
            btnClose.addEventListener("click", () => {
                app.playClick();
                app.closeMobGearEnchModal();
            });
        }

        if (btnSave) {
            btnSave.addEventListener("click", () => {
                app.playClick();
                app.saveMobGearEnchants();
            });
        }

        if (searchInput) {
            searchInput.addEventListener("input", () => {
                app.filterMobGearEnchants();
            });
        }

        const listContainer = document.getElementById("mob-gear-ench-list");
        if (listContainer) {
            listContainer.addEventListener("change", (e) => {
                if (e.target.classList.contains("gear-ench-cb")) {
                    app.playClick();
                    const id = e.target.dataset.enchId;
                    const row = document.getElementById(`gear-ench-slider-row-${id}`);
                    if (row) {
                        if (e.target.checked) {
                            row.classList.add("show");
                        } else {
                            row.classList.remove("show");
                        }
                    }
                }
            });

            listContainer.addEventListener("input", (e) => {
                if (e.target.classList.contains("gear-ench-slider")) {
                    const id = e.target.dataset.enchId;
                    const lbl = document.getElementById(`gear-ench-lbl-${id}`);
                    if (lbl) lbl.textContent = `Level ${e.target.value}`;
                }
            });
        }
    },

    initMobGearPresetSelect() {
        document.querySelectorAll(".btn-slot-preset-select").forEach(btn => {
            btn.addEventListener("click", () => {
                app.playClick();
                const slot = btn.dataset.slot;
                const modal = document.getElementById("creative-inventory-modal");
                if (!modal) return;

                app.creativeCallback = (selection) => {
                    const dropdownId = `dropdown-eq-${slot}`;
                    const command = selection.command || `give @p ${selection.id} 1`;
                    const label = selection.isPreset ? `★ ${selection.name}` : selection.name;
                    app.selectCustomDropdownOption(dropdownId, command, label, app.renderIcon(selection.icon));
                    app.recalculateCurrentCommand();
                };

                modal.style.display = "flex";
                modal.offsetHeight;
                modal.classList.add("show");
                
                app.activeCreativeTab = "presets";
                app.renderCreativeTabs();
                app.renderCreativeGrid();
                
                const searchInput = document.getElementById("creative-modal-search");
                if (searchInput) {
                    searchInput.value = "";
                    searchInput.focus();
                }
            });
        });
    },

    initExecutePresetSelectors() {
        const btnGive = document.getElementById("btn-exec-give-preset-browse");
        const btnSummon = document.getElementById("btn-exec-summon-preset-browse");
        const modal = document.getElementById("creative-inventory-modal");

        if (btnGive && modal) {
            btnGive.addEventListener("click", () => {
                app.playClick();
                app.creativeCallback = (selection) => {
                    const presetNameInput = document.getElementById("exec-give-preset-name");
                    const presetValInput = document.getElementById("exec-give-preset-val");
                    if (presetNameInput) presetNameInput.value = selection.name;
                    if (presetValInput) presetValInput.value = selection.command || `give @p ${selection.id} 1`;
                    app.recalculateCurrentCommand();
                };
                modal.style.display = "flex";
                modal.offsetHeight;
                modal.classList.add("show");
                app.activeCreativeTab = "presets";
                app.renderCreativeTabs();
                app.renderCreativeGrid();
            });
        }

        if (btnSummon && modal) {
            btnSummon.addEventListener("click", () => {
                app.playClick();
                app.creativeCallback = (selection) => {
                    const presetNameInput = document.getElementById("exec-summon-preset-name");
                    const presetValInput = document.getElementById("exec-summon-preset-val");
                    if (presetNameInput) presetNameInput.value = selection.name;
                    if (presetValInput) presetValInput.value = selection.command || `summon ${selection.id} ~ ~ ~`;
                    app.recalculateCurrentCommand();
                };
                modal.style.display = "flex";
                modal.offsetHeight;
                modal.classList.add("show");
                app.activeCreativeTab = "presets_mobs";
                app.renderCreativeTabs();
                app.renderCreativeGrid();
            });
        }

        const btnTargetCustomMob = document.getElementById("btn-exec-target-custom-mob-browse");
        if (btnTargetCustomMob && modal) {
            btnTargetCustomMob.addEventListener("click", () => {
                app.playClick();
                app.creativeCallback = (selection) => {
                    let mobName = "";
                    if (selection.command) {
                        const customNameMatch = selection.command.match(/CustomName:\s*['"](.*?)['"]/);
                        if (customNameMatch) {
                            const jsonStr = customNameMatch[1];
                            try {
                                const parsedJson = JSON.parse(jsonStr);
                                mobName = parsedJson.text || mobName;
                            } catch (e) {
                                mobName = jsonStr;
                            }
                        }
                    }
                    if (!mobName) {
                        mobName = selection.name;
                    }
                    
                    const nameInput = document.getElementById("exec-target-custom-mob-name");
                    const typeInput = document.getElementById("exec-target-custom-mob-type");
                    const presetNameInput = document.getElementById("exec-target-custom-mob-preset-name");
                    
                    if (nameInput) nameInput.value = `${selection.name} (${selection.id.replace("minecraft:", "")})`;
                    if (typeInput) typeInput.value = selection.id;
                    if (presetNameInput) presetNameInput.value = mobName;
                    
                    app.recalculateCurrentCommand();
                };
                modal.style.display = "flex";
                modal.offsetHeight;
                modal.classList.add("show");
                app.activeCreativeTab = "presets_mobs";
                app.renderCreativeTabs();
                app.renderCreativeGrid();
            });
        }
    },

    openMobGearEnchModal(slot) {
        app.activeGearEnchSlot = slot;
        const modal = document.getElementById("mob-gear-ench-modal");
        const title = document.getElementById("mob-gear-ench-modal-title");
        const searchInput = document.getElementById("mob-gear-ench-search");

        const slotLabels = {
            hand: "Main Hand ⚔️",
            offhand: "Off Hand 🛡️",
            head: "Head 🪖",
            chest: "Chest 👕",
            legs: "Legs 👖",
            feet: "Feet 🥾"
        };

        if (title) {
            title.textContent = `Edit Enchantments for ${slotLabels[slot] || slot}`;
        }
        if (searchInput) {
            searchInput.value = "";
        }

        app.renderMobGearEnchList(slot);

        if (modal) {
            modal.style.display = "flex";
            modal.offsetHeight;
            modal.classList.add("show");
        }
    },

    closeMobGearEnchModal() {
        const modal = document.getElementById("mob-gear-ench-modal");
        if (modal) {
            modal.classList.remove("show");
            setTimeout(() => {
                modal.style.display = "none";
            }, 250);
        }
        app.activeGearEnchSlot = null;
    },

    renderMobGearEnchList(slot) {
        const container = document.getElementById("mob-gear-ench-list");
        if (!container) return;
        container.innerHTML = "";

        const savedEnchs = app.mobEquipEnchants[slot] || [];

        MC_DATA.enchantments.forEach(e => {
            const saved = savedEnchs.find(s => s.id === e.id);
            const isChecked = !!saved;
            const lvl = saved ? saved.lvl : 1;

            const div = document.createElement("div");
            div.className = "enchant-item";
            div.dataset.name = e.name.toLowerCase();

            div.innerHTML = `
                <div class="enchant-row-top">
                    <label class="mc-checkbox-label">
                        <input type="checkbox" class="gear-ench-cb" data-ench-id="${e.id}" ${isChecked ? "checked" : ""}>
                        <span class="mc-checkbox"></span>
                        ${e.name}
                    </label>
                </div>
                <div class="enchant-row-bottom ${isChecked ? "show" : ""}" id="gear-ench-slider-row-${e.id}">
                    <div class="slider-group">
                        <div class="slider-header">
                            <label>Enchantment Level</label>
                            <span id="gear-ench-lbl-${e.id}">Level ${lvl}</span>
                        </div>
                        <input type="range" class="gear-ench-slider" data-ench-id="${e.id}" min="1" max="255" value="${lvl}">
                    </div>
                </div>
            `;
            container.appendChild(div);
        });
    },

    filterMobGearEnchants() {
        const query = document.getElementById("mob-gear-ench-search").value.toLowerCase().trim();
        document.querySelectorAll("#mob-gear-ench-list .enchant-item").forEach(item => {
            const name = item.dataset.name;
            if (!query || name.includes(query)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    },

    saveMobGearEnchants() {
        const slot = app.activeGearEnchSlot;
        if (!slot) return;

        let selected = [];
        document.querySelectorAll("#mob-gear-ench-list .gear-ench-cb:checked").forEach(cb => {
            const id = cb.dataset.enchId;
            const slider = document.querySelector(`#mob-gear-ench-list .gear-ench-slider[data-ench-id="${id}"]`);
            const lvl = slider ? (parseInt(slider.value) || 1) : 1;
            selected.push({ id, lvl });
        });

        app.mobEquipEnchants[slot] = selected;

        const checkbox = document.getElementById(`eq-${slot}-ench`);
        if (checkbox) {
            checkbox.checked = selected.length > 0;
        }

        app.closeMobGearEnchModal();
        app.recalculateCurrentCommand();
    },
};

window.addEventListener("DOMContentLoaded", () => {
    app.init();
});

// Expose app globally to support inline HTML event handlers (e.g. preset cards load/delete)
window.app = app;
