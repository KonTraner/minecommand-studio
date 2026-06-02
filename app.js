/* ==========================================================================
   MineCommand Studio - Main Application Controller (Updated)
   ========================================================================== */

let soundFXEnabled = true;
let activeTab = "home-pane";
let currentTrollFilter = "all";
let presets = [];

const app = {
    // 1. Initializer Hook
    init() {
        this.loadPresetsFromStorage();
        this.initAllCustomDropdowns();
        this.hydrateEnchantments();
        this.registerEventListeners();
        this.switchTab("home-pane");
        this.updateTrollGrids();
        this.updateSpecialMobPanel();
        this.recalculateCurrentCommand();
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
    switchTab(tabId) {
        activeTab = tabId;
        this.playClick();

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
        if (tabId === "mobs-pane" || tabId === "items-pane") {
            presetWidget.style.display = "flex";
        } else {
            presetWidget.style.display = "none";
        }

        this.recalculateCurrentCommand();
    },

    // ==========================================================================
    // 4. Custom Visual Dropdowns Architecture (Hydration & Event Maps)
    // ==========================================================================
    initAllCustomDropdowns() {
        // Dropdown 1: Mob Type Select
        this.buildCustomDropdown(
            "dropdown-mob-type",
            MC_DATA.mobs,
            "minecraft:zombie",
            () => {
                this.updateSpecialMobPanel();
                this.recalculateCurrentCommand();
            }
        );

        // Dropdown 2: Item Smith select
        const allItemsList = [];
        const itemCategories = {
            "Weapons & Ranged": MC_DATA.items.weapons,
            "Helmets": MC_DATA.items.helmets,
            "Chestplates": MC_DATA.items.chestplates,
            "Leggings": MC_DATA.items.leggings,
            "Boots": MC_DATA.items.boots,
            "Fun & Blocks": MC_DATA.items.fun
        };

        this.buildGroupedCustomDropdown(
            "dropdown-item-type",
            itemCategories,
            "minecraft:diamond_sword",
            () => this.recalculateCurrentCommand()
        );

        // Dropdowns 3-8: Mob Equipment Slots
        const handSlots = {
            "Weapons": MC_DATA.items.weapons,
            "Blocks & Fun": MC_DATA.items.fun
        };

        const armorSlots = {
            "dropdown-eq-head": { label: "Helmets", list: MC_DATA.items.helmets },
            "dropdown-eq-chest": { label: "Chestplates", list: MC_DATA.items.chestplates },
            "dropdown-eq-legs": { label: "Leggings", list: MC_DATA.items.leggings },
            "dropdown-eq-feet": { label: "Boots", list: MC_DATA.items.boots }
        };

        // Hydrate Hands Slots
        this.buildGroupedCustomDropdown("dropdown-eq-hand", handSlots, "none", () => this.recalculateCurrentCommand(), true);
        this.buildGroupedCustomDropdown("dropdown-eq-offhand", handSlots, "none", () => this.recalculateCurrentCommand(), true);

        // Hydrate Armor Slots
        for (const [dropId, data] of Object.entries(armorSlots)) {
            const groups = {};
            groups[data.label] = data.list;
            groups["Blocks & Fun"] = MC_DATA.items.fun;
            this.buildGroupedCustomDropdown(dropId, groups, "none", () => this.recalculateCurrentCommand(), true);
        }

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
        const trigger = wrapper.querySelector(".dropdown-trigger");
        const optionsBox = wrapper.querySelector(".dropdown-options");
        const searchInput = wrapper.querySelector(".dropdown-search");
        const hiddenInput = wrapper.querySelector("input[type='hidden']");

        // Clear choices
        optionsBox.innerHTML = "";

        // Hydrate options
        list.forEach(item => {
            const option = document.createElement("div");
            option.className = "dropdown-option";
            option.dataset.value = item.id;
            option.innerHTML = `
                <span class="option-icon">${item.icon || "🟩"}</span>
                <span class="dropdown-option-text">${item.name}</span>
            `;
            
            option.addEventListener("click", (e) => {
                e.stopPropagation();
                this.selectCustomDropdownOption(dropdownId, item.id, item.name, item.icon || "🟩");
                wrapper.classList.remove("open");
                if (onSelectCallback) onSelectCallback();
            });

            optionsBox.appendChild(option);
        });

        // Setup default trigger
        const defaultItem = list.find(it => it.id === defaultValue);
        if (defaultItem) {
            this.selectCustomDropdownOption(dropdownId, defaultValue, defaultItem.name, defaultItem.icon || "🟩");
        }

        // Toggle Open/Close click
        trigger.addEventListener("click", (e) => {
            e.stopPropagation();
            this.playClick();
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
        const trigger = wrapper.querySelector(".dropdown-trigger");
        const optionsBox = wrapper.querySelector(".dropdown-options");
        const searchInput = wrapper.querySelector(".dropdown-search");
        const hiddenInput = wrapper.querySelector("input[type='hidden']");

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
                this.selectCustomDropdownOption(dropdownId, "none", "Empty Slot", "❌");
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
                    <span class="option-icon">${item.icon || "⬜"}</span>
                    <span class="dropdown-option-text">${item.name}</span>
                `;
                
                option.addEventListener("click", (e) => {
                    e.stopPropagation();
                    this.selectCustomDropdownOption(dropdownId, item.id, item.name, item.icon || "⬜");
                    wrapper.classList.remove("open");
                    if (onSelectCallback) onSelectCallback();
                });

                optionsBox.appendChild(option);
            });
        }

        // Setup default selection trigger
        if (defaultValue === "none") {
            this.selectCustomDropdownOption(dropdownId, "none", "Empty Slot", "❌");
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
                this.selectCustomDropdownOption(dropdownId, defaultValue, defaultItem.name, defaultItem.icon || "⬜");
            }
        }

        // Toggle clicks
        trigger.addEventListener("click", (e) => {
            e.stopPropagation();
            this.playClick();
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
        const hiddenInput = wrapper.querySelector("input[type='hidden']");
        const triggerIcon = wrapper.querySelector(".dropdown-trigger-icon");
        const triggerText = wrapper.querySelector(".dropdown-trigger-text");

        hiddenInput.value = val;
        triggerIcon.innerHTML = iconHtml;
        triggerText.textContent = label;

        // Toggle active states in options list
        const optionsBox = wrapper.querySelector(".dropdown-options");
        optionsBox.querySelectorAll(".dropdown-option").forEach(opt => {
            if (opt.dataset.value === val) {
                opt.classList.add("active");
            } else {
                opt.classList.remove("active");
            }
        });
    },

    // Helper: Select option by Value lookup (useful for preset loads)
    selectDropdownByValue(dropdownId, targetVal) {
        const wrapper = document.getElementById(dropdownId);
        const optionsBox = wrapper.querySelector(".dropdown-options");
        const option = optionsBox.querySelector(`.dropdown-option[data-value="${targetVal}"]`);
        
        if (option) {
            const iconHtml = option.querySelector(".option-icon").innerHTML;
            const name = option.querySelector(".dropdown-option-text").textContent;
            this.selectCustomDropdownOption(dropdownId, targetVal, name, iconHtml);
        } else if (targetVal === "none") {
            this.selectCustomDropdownOption(dropdownId, "none", "Empty Slot", "❌");
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
                this.recalculateCurrentCommand();
            });
            document.getElementById("spec-creeper-fuse").addEventListener("input", (e) => {
                document.getElementById("spec-creeper-fuse-lbl").textContent = `${e.target.value} Ticks`;
                this.recalculateCurrentCommand();
            });
            document.getElementById("spec-creeper-powered").addEventListener("change", () => this.recalculateCurrentCommand());

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
                this.recalculateCurrentCommand();
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
            document.getElementById("spec-villager-profession").addEventListener("change", () => this.recalculateCurrentCommand());
        } else {
            panel.style.display = "none";
        }
    },

    // ==========================================================================
    // 7. Unified 5-Tier Troll Screen Grid Renderer
    // ==========================================================================
    updateTrollGrids() {
        const levels = [1, 2, 3, 4, 5];
        const targetVal = document.getElementById("troll-target").value || "@p";
        const activeVersion = document.getElementById("version-select").value;

        levels.forEach(level => {
            const grid = document.getElementById(`troll-grid-l${level}`);
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

                card.innerHTML = `
                    <span class="troll-badge ${badgeClass}">${badgeText}</span>
                    <h4>${t.name}</h4>
                    <p>${t.desc}</p>
                    <div class="troll-action-row">
                        <button class="mc-btn green-btn sm-btn">Load Prank</button>
                    </div>
                `;

                // Load Troll command on card click
                card.addEventListener("click", () => {
                    this.playClick();
                    const activeTarget = document.getElementById("troll-target").value || "@p";
                    const cmd = Generator.generateTroll(t.id, activeTarget, activeVersion);
                    
                    this.displayCommand(cmd);
                });

                grid.appendChild(card);
            });
        });
    },

    // 8. Register DOM Event Handlers
    registerEventListeners() {
        // Tab routing clicks
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const target = e.currentTarget.dataset.target;
                this.switchTab(target);
            });
        });

        // BIND CUSTOM 3D SEGMENTED TARGET VERSION PICKER
        document.querySelectorAll("#version-picker .segment").forEach(btn => {
            btn.addEventListener("click", (e) => {
                this.playClick();
                document.querySelectorAll("#version-picker .segment").forEach(b => b.classList.remove("active"));
                e.currentTarget.classList.add("active");
                
                // Write value to hidden field
                document.getElementById("version-select").value = e.currentTarget.dataset.value;
                this.recalculateCurrentCommand();
                
                if (activeTab === "trolls-pane") {
                    this.updateTrollGrids();
                }
            });
        });

        // Sound FX toggle
        const soundBtn = document.getElementById("sound-toggle");
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
                this.playClick();
            } else {
                soundBtn.classList.add("secondary-btn");
                soundBtn.innerHTML = `
                    <svg class="icon" viewBox="0 0 24 24" width="20" height="20">
                        <path fill="currentColor" d="M3.27,1.44L2,2.72L5.28,6H3V12H7L12,17V9.73L16.73,14.46C15.93,15.09 15,15.58 14,15.89V17.95C15.53,17.5 16.92,16.65 18.06,15.5L20.28,17.72L21.56,16.44L3.27,1.44M12,4L9.91,6.09L12,8.18V4M19,12C19,13.68 18.42,15.23 17.5,16.47L18.97,17.94C20.24,16.25 21,14.21 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.48,12.43 16.5,12.22 16.5,12Z"/>
                    </svg>
                `;
            }
        });

        // --- MOB STUDIO EVENTS ---
        document.getElementById("mob-name").addEventListener("input", () => this.recalculateCurrentCommand());
        
        // HP slider
        const hpSlider = document.getElementById("mob-health");
        hpSlider.addEventListener("input", (e) => {
            document.getElementById("mob-health-val").textContent = `${e.target.value} HP`;
            this.recalculateCurrentCommand();
        });
        
        // Speed slider
        const speedSlider = document.getElementById("mob-speed");
        speedSlider.addEventListener("input", (e) => {
            document.getElementById("mob-speed-val").textContent = `${e.target.value}x`;
            this.recalculateCurrentCommand();
        });

        // Mob Checkboxes
        document.getElementById("mob-silent").addEventListener("change", () => this.recalculateCurrentCommand());
        document.getElementById("mob-noai").addEventListener("change", () => this.recalculateCurrentCommand());
        document.getElementById("mob-glowing").addEventListener("change", () => this.recalculateCurrentCommand());
        document.getElementById("mob-invulnerable").addEventListener("change", () => this.recalculateCurrentCommand());
        
        // Equipment checkboxes
        document.querySelectorAll(".slot-ench-toggle").forEach(el => {
            el.addEventListener("change", () => {
                this.playClick();
                this.recalculateCurrentCommand();
            });
        });

        // --- ITEM STUDIO EVENTS ---
        document.getElementById("item-name").addEventListener("input", () => this.recalculateCurrentCommand());
        document.getElementById("item-lore").addEventListener("input", () => this.recalculateCurrentCommand());
        document.getElementById("item-unbreakable").addEventListener("change", () => this.recalculateCurrentCommand());
        document.getElementById("item-hideflags").addEventListener("change", () => this.recalculateCurrentCommand());

        // Enchant checklist handlers
        const container = document.getElementById("enchantments-checklist-container");
        container.addEventListener("change", (e) => {
            if (e.target.classList.contains("ench-cb")) {
                this.playClick();
                const id = e.target.dataset.enchId;
                const row = document.getElementById(`ench-slider-row-${id}`);
                if (e.target.checked) {
                    row.classList.add("show");
                } else {
                    row.classList.remove("show");
                }
                this.recalculateCurrentCommand();
            }
        });

        container.addEventListener("input", (e) => {
            if (e.target.classList.contains("ench-slider")) {
                const id = e.target.dataset.enchId;
                document.getElementById(`ench-lbl-${id}`).textContent = `Level ${e.target.value}`;
                this.recalculateCurrentCommand();
            }
        });

        // Search enchants filter
        document.getElementById("enchant-search").addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            document.querySelectorAll(".enchant-item").forEach(item => {
                const name = item.dataset.name;
                if (name.includes(query)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });

        // Stat attributes modifiers
        document.querySelectorAll(".attr-input-group input").forEach(input => {
            input.addEventListener("input", () => this.recalculateCurrentCommand());
        });

        // --- TROLL MENU EVENTS ---
        document.querySelectorAll(".filter-tab").forEach(tab => {
            tab.addEventListener("click", (e) => {
                this.playClick();
                document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
                e.currentTarget.classList.add("active");
                currentTrollFilter = e.currentTarget.dataset.filter;
                this.updateTrollGrids();
            });
        });

        document.getElementById("troll-target").addEventListener("input", () => {
            this.updateTrollGrids();
        });

        // --- PRESET ACTIONS ---
        document.getElementById("btn-save-preset").addEventListener("click", () => {
            this.saveCurrentPreset();
        });

        document.getElementById("btn-import-preset").addEventListener("click", () => {
            this.importPreset();
        });

        document.getElementById("btn-clear-share").addEventListener("click", () => {
            this.playClick();
            document.getElementById("preset-json-area").value = "";
        });

        document.getElementById("btn-copy-command").addEventListener("click", () => {
            this.copyToClipboard();
        });
    },

    // ==========================================================================
    // 9. Safe Tokenizer-based Syntax Highlighter (Resolves Attribute Bug)
    // ==========================================================================
    highlightSyntax(cmd) {
        if (!cmd) return "";

        // Clean/Robust Tokenizer: splits comments, slash commands, selectors, numbers, NBT nodes
        const tokenRegex = /(\/\w+|@[pabr](?:\[[^\]]+\])?|#.*|[\{\}\[\]\:\,\=]|[a-zA-Z0-9_\-\.\$§\w]+|\s+)/g;
        
        const lines = cmd.split('\n');
        
        const highlightedLines = lines.map(line => {
            const tokens = line.match(tokenRegex);
            if (!tokens) return line;

            return tokens.map(token => {
                // Escape brackets to prevent HTML injections
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
                // 5. Highlight Entity names inside string
                if (this.isMobToken(escaped)) {
                    return `<span class="hl-ent">${escaped}</span>`;
                }
                // 6. Highlight Item names inside string
                if (this.isItemToken(escaped)) {
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
        box.innerHTML = this.highlightSyntax(cmd);
        box.dataset.rawCommand = cmd;
    },

    // 10. Central Command State Synthesizer
    recalculateCurrentCommand() {
        const targetVersion = document.getElementById("version-select").value;

        if (activeTab === "mobs-pane") {
            const config = {
                type: document.getElementById("mob-type").value,
                name: document.getElementById("mob-name").value,
                health: document.getElementById("mob-health").value,
                speed: document.getElementById("mob-speed").value,
                silent: document.getElementById("mob-silent").checked,
                noAI: document.getElementById("mob-noai").checked,
                glowing: document.getElementById("mob-glowing").checked,
                invulnerable: document.getElementById("mob-invulnerable").checked,
                gear: {
                    hand: document.getElementById("eq-hand").value,
                    offhand: document.getElementById("eq-offhand").value,
                    head: document.getElementById("eq-head").value,
                    chest: document.getElementById("eq-chest").value,
                    legs: document.getElementById("eq-legs").value,
                    feet: document.getElementById("eq-feet").value
                },
                gearEnch: {
                    hand: document.getElementById("eq-hand-ench").checked,
                    offhand: document.getElementById("eq-offhand-ench").checked,
                    head: document.getElementById("eq-head-ench").checked,
                    chest: document.getElementById("eq-chest-ench").checked,
                    legs: document.getElementById("eq-legs-ench").checked,
                    feet: document.getElementById("eq-feet-ench").checked
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
            this.displayCommand(cmd);

        } else if (activeTab === "items-pane") {
            // Read active enchants
            let selectedEnchs = [];
            document.querySelectorAll(".ench-cb:checked").forEach(cb => {
                const id = cb.dataset.enchId;
                const lvl = parseInt(document.querySelector(`.ench-slider[data-ench-id="${id}"]`).value) || 1;
                selectedEnchs.push({ id, lvl });
            });

            const config = {
                id: document.getElementById("item-type").value,
                name: document.getElementById("item-name").value,
                lore: document.getElementById("item-lore").value,
                unbreakable: document.getElementById("item-unbreakable").checked,
                hideFlags: document.getElementById("item-hideflags").checked,
                enchantments: selectedEnchs,
                attributes: {
                    attack_damage: parseFloat(document.getElementById("attr-attack-damage").value) || 0,
                    attack_speed: parseFloat(document.getElementById("attr-attack-speed").value) || 0,
                    max_health: parseFloat(document.getElementById("attr-max-health").value) || 0,
                    knockback_resistance: parseFloat(document.getElementById("attr-knockback-res").value) || 0,
                    movement_speed: parseFloat(document.getElementById("attr-movement-speed").value) || 0
                }
            };

            const cmd = Generator.generateItem(config, targetVersion);
            this.displayCommand(cmd);
        }
    },

    // 11. Clipboard Service
    copyToClipboard() {
        this.playClick();
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
        this.updatePresetsUI();
    },

    savePresetsToStorage() {
        try {
            localStorage.setItem("mc_presets", JSON.stringify(presets));
        } catch (e) {
            console.error("Failed to save presets", e);
        }
        this.updatePresetsUI();
    },

    saveCurrentPreset() {
        this.playClick();
        const nameInput = document.getElementById("save-preset-name");
        const presetName = nameInput.value.trim();

        if (!presetName) {
            alert("Please enter a name for your preset first!");
            return;
        }

        const box = document.getElementById("command-output-box");
        const rawCmd = box.dataset.rawCommand || box.textContent;

        const presetObj = {
            id: Date.now().toString(),
            name: presetName,
            type: activeTab === "mobs-pane" ? "mob" : "item",
            command: rawCmd,
            details: activeTab === "mobs-pane" 
                ? "Mob: " + document.getElementById("mob-type").value.replace("minecraft:", "")
                : "Item: " + document.getElementById("item-type").value.replace("minecraft:", "")
        };

        presets.push(presetObj);
        this.savePresetsToStorage();
        nameInput.value = "";
        
        const toast = document.getElementById("toast");
        toast.textContent = "Preset Saved Successfully!";
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2000);
    },

    deletePreset(id) {
        this.playClick();
        presets = presets.filter(p => p.id !== id);
        this.savePresetsToStorage();
    },

    loadPreset(id) {
        this.playClick();
        const p = presets.find(p => p.id === id);
        if (!p) return;

        this.displayCommand(p.command);
        
        // Push notification toast
        const toast = document.getElementById("toast");
        toast.textContent = "Preset Loaded into Console!";
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2000);
    },

    exportPreset(id) {
        this.playClick();
        const p = presets.find(p => p.id === id);
        if (!p) return;

        const shareArea = document.getElementById("preset-json-area");
        shareArea.value = JSON.stringify(p, null, 2);
        
        shareArea.scrollIntoView({ behavior: 'smooth' });
        shareArea.select();
    },

    importPreset() {
        this.playClick();
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
            this.savePresetsToStorage();
            area.value = "";
            
            alert(`Preset "${p.name}" imported successfully! Check "My Presets".`);
        } catch (e) {
            alert("Error: Invalid Preset JSON. Make sure you copy/paste the entire string code!");
            console.error(e);
        }
    },

    updatePresetsUI() {
        const container = document.getElementById("presets-list-container");
        container.innerHTML = "";

        if (presets.length === 0) {
            container.innerHTML = `<div class="no-presets-msg">No custom presets saved yet. Build a mob or item and hit "Save Preset" below!</div>`;
            return;
        }

        presets.forEach(p => {
            const card = document.createElement("div");
            card.className = "preset-card";

            const badgeText = p.type === "mob" ? "🧟 Mob" : "⚔️ Item";

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
    }
};

window.addEventListener("DOMContentLoaded", () => {
    app.init();
});
