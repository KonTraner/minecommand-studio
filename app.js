/* ==========================================================================
   MineCommand Studio - Main Application Controller (Upgraded & Verified)
   ========================================================================== */

let soundFXEnabled = true;
let activeTab = "home-pane";
let currentTrollFilter = "all";
let presets = [];

let activeChainId = null;

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
        runSafe("initCreativeInventory", () => app.initCreativeInventory());
        runSafe("initContainerMaker", () => app.initContainerMaker());
        runSafe("initMobGearEnch", () => app.initMobGearEnch());
        runSafe("initMobGearPresetSelect", () => app.initMobGearPresetSelect());
        runSafe("initExecutePresetSelectors", () => app.initExecutePresetSelectors());
        runSafe("initDocs", () => app.initDocs());
        runSafe("renderDocs", () => app.renderDocs());
        runSafe("registerEventListeners", () => app.registerEventListeners());
        runSafe("updateMountUIState", () => app.updateMountUIState());
        runSafe("switchTab", () => app.switchTab("home-pane", true));
        runSafe("updateTrollGrids", () => app.updateTrollGrids());
        runSafe("updateSpecialMobPanel", () => app.updateSpecialMobPanel());
        runSafe("recalculateCurrentCommand", () => app.recalculateCurrentCommand());
    },

    renderIcon(icon) {
        if (icon && (icon.startsWith('http') || icon.startsWith('data:'))) {
            return `<img src="${icon}" class="mc-dropdown-icon-img" alt="icon" loading="lazy" onerror="this.onerror=null; this.src='https://cdn.jsdelivr.net/gh/Owen1212055/mc-assets@main/item-assets/BARRIER.png';">`;
        }
        return icon || "🟩";
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

        // Manage sidebar buttons
        document.querySelectorAll('.nav-tab').forEach(btn => {
            if (btn.dataset.target === tabId) {
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
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
        if (tabId === "mobs-pane" || tabId === "items-pane" || tabId === "execute-pane") {
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
                        ${eff.icon} ${eff.name}
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
            });

            mobEffectsContainer.addEventListener("input", (e) => {
                if (e.target.classList.contains("mob-eff-slider")) {
                    const id = e.target.dataset.effId;
                    const lbl = document.getElementById(`mob-eff-lbl-${id}`);
                    if (lbl) lbl.textContent = `Level ${e.target.value}`;
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
            "exec-give-preset-val", "exec-give-preset-target", "exec-give-preset-count", "exec-summon-preset-val", "exec-summon-preset-offset"
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
    },

    // 10. Central Command State Synthesizer
    recalculateCurrentCommand() {
        const versionEl = document.getElementById("version-select");
        const targetVersion = versionEl ? versionEl.value : "java_modern";

        if (activeTab === "mobs-pane") {
            const getVal = (id, def = "") => { const el = document.getElementById(id); return el ? el.value : def; };
            const getChecked = (id) => { const el = document.getElementById(id); return el ? el.checked : false; };

            const activeEffects = [];
            document.querySelectorAll("#mob-effects-checklist-container .mob-eff-cb:checked").forEach(cb => {
                const id = cb.dataset.effId;
                const slider = document.querySelector(`.mob-eff-slider[data-eff-id="${id}"]`);
                const amp = slider ? parseInt(slider.value) : 1;
                activeEffects.push({ id: id, amplifier: amp });
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

            // Capture specials
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

            const config = {
                id: getVal("item-type", "minecraft:diamond_sword"),
                name: getVal("item-name"),
                lore: getVal("item-lore"),
                unbreakable: getChecked("item-unbreakable"),
                hideFlags: getChecked("item-hideflags"),
                glint: getChecked("item-glint"),
                count: parseInt(getVal("item-count", "1")) || 1,
                enchantments: selectedEnchs,
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
        }
    },

    // 11. Clipboard Service
    copyToClipboard() {
        app.playClick();
        const box = document.getElementById("command-output-box");
        const command = box.dataset.rawCommand || box.textContent;

        if (!command) return;

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
        const rawCmd = box.dataset.rawCommand || box.textContent;

        let pType = "item";
        let pDetails = "";
        let itemConfig = null;
        let containerConfig = null;

        if (activeTab === "mobs-pane") {
            pType = "mob";
            const customMobName = document.getElementById("mob-name") ? document.getElementById("mob-name").value.trim() : "";
            pDetails = "Mob: " + document.getElementById("mob-type").value.replace("minecraft:", "") + (customMobName ? ` ("${customMobName}")` : "");
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

            itemConfig = {
                id: getVal("item-type", "minecraft:diamond_sword"),
                name: getVal("item-name"),
                lore: getVal("item-lore"),
                unbreakable: getChecked("item-unbreakable"),
                hideFlags: getChecked("item-hideflags"),
                glint: getChecked("item-glint"),
                count: parseInt(getVal("item-count", "1")) || 1,
                enchantments: selectedEnchs,
                attributes: {
                    attack_damage: parseFloat(getVal("attr-attack-damage", "0")) || 0,
                    attack_speed: parseFloat(getVal("attr-attack-speed", "0")) || 0,
                    max_health: parseFloat(getVal("attr-max-health", "0")) || 0,
                    knockback_resistance: parseFloat(getVal("attr-knockback-res", "0")) || 0,
                    movement_speed: parseFloat(getVal("attr-movement-speed", "0")) || 0
                }
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
                icon: "✨",
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
                icon: p.icon || "✨",
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
                        app.containerContents[app.selectedContainerSlot] = {
                            id: selection.id,
                            name: selection.name,
                            icon: selection.icon,
                            isPreset: !!selection.isPreset,
                            presetId: selection.presetId || null,
                            command: selection.command || null,
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
        if (!typeSelect) return;

        const val = typeSelect.value;
        if (defaultRow) defaultRow.style.display = val === "default" ? "block" : "none";
        if (presetRow) presetRow.style.display = val === "preset" ? "block" : "none";
        
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
        } else {
            nameEl.textContent = "Empty Slot";
            idEl.textContent = "none";
            iconEl.innerHTML = "🟩";
            countInput.value = 1;
            countLbl.textContent = "1x";
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
