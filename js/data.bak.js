var mix = {
	data: function() { return {
		itemData: function() {
			var items = {}
			items.bridge = {
				id: 0,
				name: "bridge",
				label: "Bridge",
				img: 'icons/bridge.png',
				keyItem: true,
				incentive: false,
				tracked: false,
				display: true,
			}
			items.lute = {
				id: 1,
				name: "lute",
				label: "Lute",
				img: 'icons/lute.png',
				keyItem: true,
				tracked: false,
				display: true,
			}
			items.ship = {
				id: 2,
				name: "ship",
				label: "Ship",
				img: 'icons/ship.png',
				keyItem: true,
				tracked: false,
				display: true,
			}
			items.crown = {
				id: 3,
				name: "crown",
				label: "Crown",
				img: 'icons/crown.png',
				keyItem: true,
				tracked: false,
			}
			items.crystal = {
				id: 3.1,
				name: "crystal",
				label: "Crystal",
				img: 'icons/crystal.png',
				keyItem: true,
				tracked: false,
			}
			items.herb = {
				id: 3.2,
				name: "herb",
				label: "Herb",
				img: 'icons/herb.png',
				keyItem: true,
				tracked: false,
			}
			items.key = {
				id: 3.3,
				name: "key",
				label: "Key",
				img: 'icons/key.png',
				keyItem: true,
				tracked: false,
			}
			items.tnt = {
				id: 4,
				name: "tnt",
				label: "TNT",
				img: 'icons/tnt.png',
				keyItem: true,
				tracked: false,
			}
			items.canal = {
				id: 4.1,
				name: "canal",
				label: "Canal",
				img: 'icons/canal.png',
				keyItem: true,
				tracked: false,
			}
			items.ruby = {
				id: 5,
				name: "ruby",
				label: "Ruby",
				keyItem: true,
				consumable: true,
				tracked: false,
				used: false,
				display: true,
			},
			items.rod = {
				id: 6,
				name: "rod",
				label: "Rod",
				img: 'icons/rod.png',
				keyItem: true,
				incentive: true,
				tracked: false,
				display: true,
			}
			items.canoe = {
				id: 7,
				name: "canoe",
				label: "Canoe",
				img: 'icons/canoe.png',
				keyItem: true,
				incentive: true,
				tracked: false,
				display: true,
			}
			items.floater = {
				id: 8,
				name: "floater",
				label: "Floater",
				img: 'icons/floater.png',
				keyItem: true,
				tracked: false,
			},
			items.airship = {
				id: 8.1,
				name: "airship",
				label: "Airship",
				img: 'icons/airship.png',
				keyItem: true,
				tracked: false,
			}
			items.tail = {
				id: 9,
				name: "tail",
				label: "Tail",
				//img: 'icons/tail.png',
				consumable: true,
				keyItem: true,
				tracked: false,
				used: false,
				display: true,
			}
			items.bottle = {
				id: 10,
				name: "bottle",
				label: "Bottle",
				consumable: true,
				keyItem: true,
				tracked: false,
				used: false,
			}
			items.oxyale = {
				id: 10.1,
				name: "oxyale",
				label: "Oxyale",
				img: 'icons/oxyale.png',
				keyItem: true,
				incentive: true,
				tracked: false,
			}
			items.slab = {
				id: 11,
				name: "slab",
				label: "Slab",
				//img: 'icons/slab.png',
				consumable: true,
				keyItem: true,
				tracked: false,
				used: false,
			}
			items.chime = {
				id: 11.1,
				name: "chime",
				label: "Chime",
				img: 'icons/chime.png',
				keyItem: true,
				incentive: true,
				tracked: false,
			}
			items.cube = {
				id: 12,
				name: "cube",
				label: "Cube",
				img: 'icons/cube.png',
				keyItem: true,
				incentive: true,
				tracked: false,
				display: true,
			}
			items.adamant = {
				id: 13,
				name: "adamant",
				label: "Adamant",
				img: 'icons/adamant.png',
				keyItem: true,
				tracked: false,
			}
			items.xcalbur = {
				id: 13.1,
				name: "xcalbur",
				label: "Excal",
				img: 'icons/xcalbur.png',
				keyItem: false,
				incentive: false,
				tracked: false,
			}
			return items
		}(),
		locationData: function() {
			var locations = {}
			locations.garland = {
				id: 0,
				name: "garland",
				label: "Garland",
				incentive: false,
				accessible: true,
				tracked: false,
				display: true,
			}
			locations.king = {
				id: 1,
				name: "king",
				label: "King",
				img: 'icons/king.png',
				accessible: true,
				tracked: false,
			}
			locations.sara = {
				id: 2,
				name: "sara",
				label: "Sara",
				img: 'icons/sara.png',
				tracked: false,
			}
			locations.bikke = {
				id: 3,
				name: "bikke",
				label: "Bikke",
				img: 'icons/bikke.png',
				tracked: false,
			}
			locations.marsh = {
				id: 4,
				name: "marsh",
				label: "Marsh",
				img: 'icons/marsh.png',
				tracked: false,
			}
			locations.marshLocked = {
				id: 5,
				name: "marshLocked",
				label: "Marsh",
				img: 'icons/marshLocked.png',
				tracked: false,
			}
			locations.astos = {
				id: 6,
				name: "astos",
				label: "Astos",
				img: 'icons/astos.png',
				tracked: false,
			}
			locations.matoya = {
				id: 7,
				name: "matoya",
				label: "Matoya",
				img: 'icons/matoya.png',
				tracked: false,
			}
			locations.prince = {
				id: 8,
				name: "prince",
				label: "Prince",
				img: 'icons/prince.png',
				tracked: false,
			}
			locations.coneriaLocked = {
				id: 9,
				name: "coneriaLocked",
				label: "Coneria",
				img: 'icons/coneriaLocked.png',
				tracked: false,
			}
			locations.nerrick = {
				id: 10,
				name: "nerrick",
				label: "Nerrick",
				img: 'icons/nerrick.png',
				tracked: false,
			}
			locations.smith = {
				id: 11,
				name: "smith",
				label: "Smith",
				img: 'icons/smith.png',
				tracked: false,
			}
			locations.earth = {
				id: 12,
				name: "earth",
				label: "Earth",
				img: 'icons/vampire.png',
				tracked: false,
				type: 'chest',
			}
			locations.sarda = {
				id: 14,
				name: "sarda",
				label: "Sarda",
				img: 'icons/sarda.png',
				tracked: false,
				type: 'free',
			}
			locations.sage = {
				id: 15,
				name: "sage",
				label: "Sage",
				img: 'icons/sage.png',
				tracked: false,
			}
			locations.volcano = {
				id: 16,
				name: "volcano",
				label: "Volcano",
				img: 'icons/redD.png',
				tracked: false,
			}
			locations.iceCave = {
				id: 17,
				name: "iceCave",
				label: "Ice",
				img: 'icons/eye.png',
				tracked: false,
			}
			locations.ordeals = {
				id: 18,
				name: "ordeals",
				label: "Ordeals",
				img: 'icons/zombieD.png',
				tracked: false,
			}
			locations.shopItem = {
				id: 19,
				name: "shopItem",
				label: "Shop",
				img: 'icons/shop.png',
				display: true,
				tracked: false,
			}
			locations.shrine = {
				id: 20,
				name: "shrine",
				label: "Shrine",
				img: 'icons/mermaid.png',
				tracked: false,
			}
			locations.waterfall = {
				id: 21,
				name: "waterfall",
				label: "Robot",
				img: 'icons/robot.png',
				tracked: false,
			}
			locations.lefein = {
				id: 22,
				name: "lefein",
				label: "Lefein",
				img: 'icons/lupa.png',
				tracked: false,
			}
			locations.sky = {
				id: 23,
				name: "sky",
				label: "Sky",
				img: 'icons/sky.png',
				tracked: false,
			}
		  return locations
		}(),
		orbData: function() {
			var orbs = {}
			orbs.earth = { 
				id: 0, 
				label: "Earth", 
				img: 'icons/earthOrb.png', 
				tracked: false,
			}
			orbs.fire = { 
				id: 1, 
				label: "Fire", 
				img: 'icons/fireOrb.png', 
				tracked: false,
			}
			orbs.water = { 
				id: 2, 
				label: "Water", 
				img: 'icons/waterOrb.png', 
				tracked: false,
			}
			orbs.air = { 
				id: 3, 
				label: "Air", 
				img: 'icons/airOrb.png', 
				tracked: false,
			}
			return orbs
		}(),
		flagRules: function() {
			var flags = [
				// ITEMS = 0;
				{
					1: { name: 'shuffleShops', type: 'bool' },
					2: { name: 'shuffleTreasures', type: 'bool' },
					4: { name: 'shuffleNPCItems', type: 'bool' },
					8: { name: 'shuffleFetchItems',	type: 'bool' },
					16: { name: 'randomWares', type: 'bool' },
					32: { name: 'randomLoot', type: 'bool' },
				},
				// ALT_GAME_MODE = 1;
				{
					1: { name: 'shardHunt', type: 'bool' },
					2: { name: 'extraShards', type: 'bool' },
					4: { name: 'transformFinalFormation', type: 'bool' },
					8: { name: 'chaosRush', type: 'bool' },
					16: { name: 'shortTemple', type: 'bool' },
					32: { name: 'preserveFiendRefights', type: 'bool' },
				},
				// MAGIC = 2;
				{
					1: { name: 'magicShops', type: 'bool' },
					2: { name: 'magicLevels', type: 'bool' },
					4: { name: 'magicPermissions', type: 'bool' },
					8: { name: 'itemMagic', type: 'bool' },
				},
				// ENCOUNTERS = 3;
				{
					1: { name: 'rng', type: 'bool' },
					2: { name: 'enemyFormationsFrequency', type: 'bool' },
					4: { name: 'enemyFormationsUnrunnable', type: 'bool' },
					8: { name: 'enemyFormationsSurprise', type: 'bool' },
					16: { name: 'enemyTrapTiles', type: 'bool' },
					32: { name: 'randomTrapFormations', type: 'bool' },
				},
				// BATTLES = 4;
				{
					1: { name: 'enemyScripts', type: 'bool' },
					2: { name: 'enemySkillsSpells', type: 'bool' },
					4: { name: 'enemyStatusAttacks', type: 'bool' },
					8: { name: 'allowUnsafePirates', type: 'bool' },
				},
				// STANDARD_MAPS = 5;
				{
					3: { name: 'warMechMode', type: 'warMech' },
					4: { name: 'ordealsPillars', type: 'bool' },
					8: { name: 'skyCastle4F', type: 'bool' },
					16: { name: 'titansTrove', type: 'bool', },
					32: { name: 'confusedOldMen', type: 'bool' },
				},
				// OVERWORLD_MAPS = 6;
				{
					1: { name: 'mapOpenProgression', type: 'bool' },
					2: { name: 'entranceShuffle', type: 'bool' },
					4: { name: 'townShuffle', type: 'bool' },
					8: { name: 'floorShuffle', type: 'bool' },
					16: { name: 'allowDeepCastles', type: 'bool' },
					32: { name: 'extendedOpenProgression', type: 'bool' },
				},
				// INCENTIVES_MAIN = 7;
				{
					1: { name: 'incentiveFreeNPCs', type: 'bool' },
					2: { name: 'incentiveFetchNPCs', type: 'bool' },
					4: { name: 'incentiveTail', type: 'bool' },
					8: { name: 'incentiveFetchItems', type: 'bool' },
				},
				// INCENTIVES_CHESTS1 = 8;
				{
					1: { name: 'incentiveMarsh', type: 'bool' },
					2: { name: 'incentiveEarth', type: 'bool' },
					4: { name: 'incentiveVolcano', type: 'bool' },
					8: { name: 'incentiveIceCave', type: 'bool' },
					16: { name: 'incentiveOrdeals', type: 'bool' },
					32: { name: 'incentiveSeaShrine', type: 'bool' },
				},
				// INCENTIVE_CHESTS2 = 9;
				{
					1: { name: 'incentiveConeria', type: 'bool' },
					2: { name: 'incentiveMarshLocked', type: 'bool' },
					4: { name: 'incentiveSkyPalace', type: 'bool' },
				},
				// INCENTIVE_ITEMS1 = 10;
				{
					1: { name: 'incentiveMasamune', type: 'bool' },
					2: { name: 'incentiveOpalBracelet', type: 'bool' },
					4: { name: 'incentiveRibbon', type: 'bool' },
					8: { name: 'incentiveRibbon2', type: 'bool' },
					16: { name: 'incentive65k', type: 'bool' },
					32: { name: 'incentiveBad', type: 'bool' },
				},
				// INCENTIVE_ITEMS2 = 11;
				{
					1: { name: 'incentiveDefCastArmor', type: 'bool' },
					2: { name: 'incentiveOffCastArmor', type: 'bool' },
					4: { name: 'incentiveOtherCastArmor', type: 'bool' },
					8: { name: 'incentiveDefCastWeapon', type: 'bool' },
					16: { name: 'incentiveOffCastWeapon', type: 'bool' },
					32: { name: 'incentiveOtherCastWeapon', type: 'bool' },
				},
				// ITEM_REQUIREMENTS = 12;
				{
					1: { name: 'earlySarda', type: 'bool' },
					2: { name: 'earlySage', type: 'bool' },
					4: { name: 'crownlessOrdeals', type: 'bool' },
					8: { name: 'onlyRequireGameIsBeatable', type: 'bool' },
				},
				// FILTHY_CASUALS = 13;
				{
					1: { name: 'freeBridge', type: 'bool' },
					2: { name: 'freeAirship', type: 'bool' },
					4: { name: 'freeOrbs', type: 'bool' },
					8: { name: 'enableCritDisplay', type: 'bool' },
					32: { name: 'easyMode', type: 'bool' },
				},
				// CONVENIENCES = 14;
				{
					1: { name: 'speedHacks', type: 'bool' },
					2: { name: 'noPartyShuffle', type: 'bool' },
					4: { name: 'dash', type: 'bool' },
					8: { name: 'buyTen', type: 'bool' },
					16: { name: 'identifyTreasures', type: 'bool' },
					32: { name: 'waitWhenUnrunnable', type: 'bool' },
				},
				// BUG_FIXES = 15;
				{
					1: { name: 'houseMPRestore', type: 'bool' },
					2: { name: 'weaponStats', type: 'bool' },
					4: { name: 'chanceToRun', type: 'bool' },
					8: { name: 'spellBugs', type: 'bool' },
					16: { name: 'blackBeltAbsorb', type: 'bool' },
				},
				// ENEMY_BUG_FIXES = 16;
				{
					1: { name: 'enemyStatusAttackBug', type: 'bool' },
					2: { name: 'enemySpellsTargetingAllies', type: 'bool' },
					4: { name: 'enemyElementalResistBug', type: 'bool' },
					8: { name: 'fisherPriceTurnOrder', type: 'bool' },
				},
				// SCALE = 17;
				{
					1: { name: 'startingGold', type: 'bool' },
					2: { name: 'wrapStatOverflow', type: 'bool' },
					4: { name: 'wrapPriceOverflow', type: 'bool' },
				},
				// ENEMY_SCALE_FACTOR = 18;
				{ 
					0: { name: 'enemyScaleFactor', 'multiplier': 0.1, type: 'int' }
				},
				// PRICE_SCALE_FACTOR = 19;
				{ 
					0: { name: 'priceScaleFactor', 'multiplier': 0.1, type: 'int' }
				},
				// EXP_MULTIPLIER = 20;
				{ 
					0: { name: 'expMultiplier', 'multiplier': 0.1, type: 'int' }
				},
				// EXP_BONUS = 21;
				{ 
					0: { name: 'expBonus', 'multiplier': 10, type: 'int' }
				},
				// ENCOUNTER_RATE = 22;
				{ 
					0: { name: 'encounterRate', 'multiplier': 1, type: 'int' }
				},
				// FORCED_PARTY_MEMBERS = 23;
				{ 
					0: { name: 'forcedParty', 'multiplier': 1, type: 'int' }
				},
				// PROGRESSIVE_SCALE = 24
				{
					0: { name: 'progressiveScale', type: 'progScale' }
				},
			  // DUNGEON_ENCOUNTER_RATE = 22;
				{ 
					0: { name: 'dungeonEncounterRate', 'multiplier': 1, type: 'int' }
				},
			  // BOSS_SCALE_FACTOR = 26
				{ 
					0: { name: 'bossScaleFactor', 'multiplier': 0.1, type: 'int' }
				},
			]
			return flags
		}(),
		base64String: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-!",
	}},
	computed: {
		flags: function() { 
			var flags = {}, encoded = this.flagset
			for (i = 0; i < this.flagRules.length; i++) {
				var flagChar = encoded.charAt(i)
				var count = this.base64String.indexOf(flagChar)
				var flagGroup = Object.keys(this.flagRules[i]).sort(function(a, b) { return b - a });
				for (j = 0; j < flagGroup.length; j++) {
					var bit = flagGroup[j], flag = this.flagRules[i][bit]
					if (flag.type == 'bool') { 
						if (bit > count) { flags[flag.name] = false }
						else { 
							count = (count - bit)
							flags[flag.name] = true
							}
						}
					else if (flag.type == 'int') {
						flags[flag.name] = (count * flag.multiplier)
					}
				}
			}
			return flags;
		},
		items: function() {
			var vm = this, items = {}
			items.bridge = {
				linked: function() {
					if (!vm.flags.shuffleNPCItems) { return 'king' }
					else { return false }
				}(),
				locked: function() {
					if (vm.flags.freeBridge) { return true }
					else { return false }
				}(),
				accessible: function() {
					if (!vm.flags.entranceShuffle && !vm.flags.shuffleNPCItems) { return vm.locations.king.accessible }
					return true;
				}(),
				tracked: function() {
					if (vm.flags.freeBridge) { return true }
					else { return vm.itemData.bridge.tracked }
				}(),
			}
			items.lute = {
				linked: function() {
					if (!vm.flags.shuffleNPCItems) { return 'sara' }
					else { return false }
				}(),
				incentive: function() {
					return !vm.flags.shortTemple
				}(),
				accessible: function() {
					if (!vm.flags.entranceShuffle && !vm.flags.shuffleNPCItems) { return vm.locations.sara.accessible }
					return true
				}(),
				locked: function() {
					return vm.flags.shortTemple
				}(),
			}
			items.ship = {
				linked: function() {
					if (!vm.flags.shuffleNPCItems) { return 'bikke' }
					else { return false }
				}(),
				incentive: function() {
					if (!vm.flags.mapOpenProgression || vm.flags.incentiveFetchItems) { return true }
					else { return false }
				}(),
				accessible: function() {
					if (!vm.flags.townShuffle && !vm.flags.shuffleNPCItems) { return vm.locations.bikke.accessible }
					else { return true }
				}(),
			}
			items.crown = {
				linked: function() {
					if (vm.flags.shuffleTreasures) { return 'marshLocked' }
					else { return false }
				}(),
				incentive: function() {
					if (!vm.flags.shuffleFetchItems || vm.flags.incentiveFetchItems) { return true }
					else { return false }
				}(),
				next: function() {
					if (!vm.flags.shuffleFetchItems) { return 'crystal' }
					else { return false }
				}(),
				accessible: function() {
					if (!vm.flags.entranceShuffle && !vm.flags.shuffleTreasures) { return vm.locations.marshLocked.accessible }
					else { return true }
				}(),
				consumable: function() {
					if (vm.flags.shuffleFetchItems) { return true }
					else { return false }
				}(),
				usable: function() {
					if (vm.flags.entranceShuffle) { return true }
					else { return vm.mapAccess.elfland } 
				}(),
				display: function() {
					if (vm.flags.shuffleFetchItems) { return true }
					if (vm.itemData.crystal.tracked) { return false }
					else { return true }
				}(),
			}
			items.crystal = {
				linked: function() {
					if (!vm.flags.shuffleFetchItems) { return 'astos' }
					else { return false }
				}(),
				incentive: function() {
					if (vm.flags.incentiveFetchItems) { return true }
					else { return false }
				}(),
				prev: function() {
					if (!vm.flags.shuffleFetchItems) { return 'crown' }
					else { return false }
				}(),
				next: function() {
					if (!vm.flags.shuffleFetchItems) { return 'herb' }
					else { return false }
				}(),
				accessible: function() {
					if (!vm.flags.entranceShuffle && !vm.flags.shuffleFetchItems) { return vm.locations.astos.accessible }
					else { return true }
				}(),
				consumable: function() {
					if (vm.flags.shuffleFetchItems) { return true }
					else { return false }
				}(),
				usable: function() {
					if (vm.flags.entranceShuffle) { return true }
					else { return vm.mapAccess.pravoka } 
				}(),
				display: function() {
					if (vm.flags.shuffleFetchItems) { return true }
					if (!vm.itemData.crystal.tracked || vm.itemData.herb.tracked) { return false }
					else { return true }
				}(),
			}
			items.herb = {
				linked: function() {
					if (!vm.flags.shuffleFetchItems) { return 'matoya' }
					else { return false }
				}(),
				incentive: function() {
					if (vm.flags.incentiveFetchItems) { return true }
					else { return false }
				}(),
				prev: function() {
					if (!vm.flags.shuffleFetchItems) { return 'crystal' }
					else { return false }
				}(),
				next: function() {
					if (!vm.flags.shuffleFetchItems) { return 'key' }
					else { return false }
				}(),
				accessible: function() {
					if (!vm.flags.entranceShuffle && !vm.flags.shuffleFetchItems) { return vm.locations.matoya.accessible }
					else { return true; }
				}(),
				consumable: function() {
					if (vm.flags.shuffleFetchItems) { return true }
					else { return false }
				}(),
				usable: function() {
					if (vm.flags.entranceShuffle) { return true }
					else { return vm.mapAccess.elfland } 
				}(),
				display: function() {
					if (vm.flags.shuffleFetchItems) { return true }
					if (!vm.itemData.herb.tracked || vm.itemData.key.tracked) { return false }
					else { return true }
				}(),
			}
			items.key = {
				linked: function() {
					if (!vm.flags.shuffleFetchItems) { return 'prince' }
					else { return false }
				}(),
				prev: function() {
					if (!vm.flags.shuffleFetchItems) { return 'herb' }
					else { return false }
				}(),
				accessible: function() {
					if (!vm.flags.entranceShuffle && !vm.flags.shuffleFetchItems) { return vm.locations.prince.accessible }
					else { return true }
				}(),
				display: function() {
					if (vm.flags.shuffleFetchItems || vm.itemData.key.tracked) { return true }
					else { return false }
				}(),
			}
			items.tnt = {
				linked: function() {
					if (!vm.flags.shuffleTreasures) { return 'coneriaLocked' }
					else { return false }
				}(),
				incentive: function() {
					if (vm.flags.incentiveFetchItems) { return true }
					else if (!vm.flags.shuffleFetchItems || shuffleNPCItems) { return true }
					else { return false }
				}(),
				next: function() {
					if (!vm.flags.shuffleFetchItems) { return 'canal' }
					else { return false }
				}(),
				accessible: function() {
					if (!vm.flags.entranceShuffle && !vm.flags.shuffleTreasures) { return vm.locations.coneriaLocked.accessible }
					else { return true }
				}(),
				consumable: function() {
					if (vm.flags.shuffleFetchItems) { return true }
					else { return false }
				}(),
				usable: function() {
					if (vm.flags.entranceShuffle) { return true }
					else { return vm.mapAccess.dwarves } 
				}(),
				display: function() {
					if (vm.flags.shuffleFetchItems || !vm.itemData.canal.tracked) { return true }
					else { return false }
				}(),
			}
			items.canal = {
				linked: function() {
					if (!vm.flags.shuffleFetchItems) { return 'nerrick' }
					else { return false }
				}(),
				incentive: function() {
					if (!vm.flags.shuffleNPCItems || vm.flags.incentiveFetchItems) { return true }
					else { return false }
				}(),
				prev: function() {
					if (!vm.flags.shuffleFetchItems) { return 'tnt' }
					else { return false }
				}(),
				accessible: function() {
					if (!vm.flags.entranceShuffle && !vm.flags.shuffleFetchItems) { return vm.mapAccess.dwarves }
					else { return true }
				}(),
				display: function() {
					if (vm.flags.shuffleFetchItems || vm.itemData.canal.tracked) { return true }
					else { return false }
				}(),
			}
			items.ruby = {
				img: function() {
					if (!vm.itemData.ruby.used) { return 'icons/ruby.png' }
					else { return 'icons/titan.png' }
				}(),
				linked: function() {
					if (!vm.flags.shuffleTreasures) { return 'earth' }
					else { return false }
				}(),
				incentive: function() {
					if (vm.flags.incentiveFetchItems) { return true }
					else if (!vm.flags.earlySage && !vm.flags.shuffleNPCItems) { return true }
					else { return false }
				}(),
				accessible: function() {
					if (!vm.flags.shuffleTreasures) { return vm.locations.earth.accessible }
					else { return true; }
				}(),
				usable: function() {
					if (vm.flags.entranceShuffle) { return true }
					else { return vm.mapAccess.melmond } 
				}(),
			}
			items.rod = {
				linked: function() {
					if (!vm.flags.shuffleNPCItems) { return 'sarda' }
					else { return false }
				}(),
				accessible: function() {
					if (!vm.flags.entranceShuffle && !vm.flags.shuffleNPCItems) { return vm.locations.sarda.accessible }
					else { return true; }
				}(),
			}
			items.canoe = {
				linked: function() {
					if (!vm.flags.shuffleNPCItems) { return 'sage' }
					else { return false }
				}(),
				accessible: function() {
					if (!vm.flags.townShuffle && !vm.flags.shuffleNPCItems) { return vm.locations.sage.accessible }
					else { return true; }
				}(),
			}
			items.floater = {
				linked: function() {
					if (!vm.flags.shuffleTreasures) { return 'iceCave' }
					else { return false }
				}(),
				incentive: function() {
					if (!vm.flags.freeAirship) { return true }
					else { return false }
				}(),
				next: function() {
					if (!vm.flags.freeAirship) { return 'airship' }
					else { return false }
				}(),
				accessible: function() {
					if (!vm.flags.entranceShuffle && !vm.flags.shuffleTreasures) { return vm.locations.iceCave.accessible }
					else { return true; }
				}(),
				display: function() {
					if (vm.flags.freeAirship || !vm.itemData.airship.tracked) { return true }
					else { return false }
				}(),
			}
			items.airship = {
				prev: function() {
					if (vm.flags.freeAirship) { return false }
					else { return 'floater' }
				}(),
				accessible: function() {
					return true;
				}(),
				locked: function() {
					return vm.flags.freeAirship
				}(),
				display: function() {
					if (vm.flags.freeAirship || vm.itemData.airship.tracked) { return true }
					else { return false }
				}(),
			}
			items.tail = {
				img: function() {
					if (!vm.itemData.tail.used) { return 'icons/tail.png' }
					else { return 'icons/class.png' }
				}(),
				linked: function() {
					if (!vm.flags.shuffleTreasures) { return 'ordeals' }
					else { return false }
				}(),
				accessible: function() {
					if (!vm.itemData.tail.tracked) { 
						if (!vm.flags.entranceShuffle && !vm.flags.shuffleTreasures) { return vm.locations.ordeals.accessible }
						else { return true; }
					}
					else {
						if (!vm.flags.entranceShuffle) { return vm.itemData.airship.tracked }
						else { return true }
					}
				}(),
			}
			items.bottle = {
				img: function() {
					if (!vm.itemData.bottle.used) { return 'icons/bottle.png' }
					else { return 'icons/bottle-empty.png' }
				}(),
				linked: function() {
					if (!vm.flags.shuffleNPCItems) { return 'shopItem' }
					else { return false }
				}(),
				incentive: function() {
					if (!vm.flags.shuffleFetchItems || vm.flags.incentiveFetchItems) { return true }
					else { return false }
				}(),
				next: function() {
					if (!vm.flags.shuffleFetchItems) { return 'oxyale' }
					else { return false }
				}(),
				accessible: function() {
					if (!vm.flags.shuffleShops && !vm.flags.shuffleNPCItems) { return vm.locations.shopItem.accessible }
					else { return true }
				}(),
				usable: true,
				display: function() {
					if (vm.flags.shuffleFetchItems || !vm.itemData.oxyale.tracked) { return true }
					else { return false }
				}(),
			}
			items.oxyale = {
				prev: function() {
					if (!vm.flags.shuffleFetchItems) { return 'bottle' }
					else { return false }
				}(),
				accessible: function() {
					if (vm.flags.entranceShuffle || vm.flags.townShuffle) { return true }
					else { return vm.itemData.airship.tracked }
				}(),
				display: function() {
					if (vm.flags.shuffleFetchItems || vm.itemData.oxyale.tracked) { return true }
					else { return false }
				}(),
			}
			items.slab = {
				img: function() {
					if (!vm.itemData.slab.used) { return 'icons/slab.png' }
					else { return 'icons/slab-unne.png' }
				}(),
				linked: function() {
					if (!vm.flags.shuffleTreasures) { return 'shrine' }
					else { return false }
				}(),
				incentive: function() {
					if (!vm.flags.shuffleFetchItems || vm.flags.incentiveFetchItems) { return true }
					else { return false }
				}(),
				next: function() {
					if (!vm.flags.shuffleFetchItems) { return 'chime' }
					else { return false }
				}(),
				accessible: function() {
					if (!vm.itemData.slab.tracked) {
						if (vm.flags.shuffleTreasures) { return true }
						if (!vm.itemData.oxyale.tracked) { return false }
						else { return vm.mapAccess.onrac }
					}
					else {
						if (vm.flags.townShuffle) { return true }
						else { return vm.mapAccess.melmond }
					}
				}(),
				usable: function() {
					if (vm.flags.entranceShuffle || vm.flags.townShuffle) { return true }
					else { return vm.mapAccess.melmond }
				}(),
				display: function() {
					if (vm.flags.shuffleFetchItems || !vm.itemData.chime.tracked) { return true }
					else { return false }
				}(),
			}
			items.chime = {
				linked: function() {
					if (!vm.flags.shuffleFetchItems) { return 'lefein' }
					else { return false }
				}(),
				prev: function() {
					if (!vm.flags.shuffleFetchItems) { return 'slab' }
					else { return false }
				}(),
				accessible: function() {
					if (!vm.itemData.slab.used) { return false }
					if (vm.flags.entranceShuffle || vm.flags.townShuffle) { return true }
					else { return vm.itemData.airship.tracked }
				}(),
				display: function() {
					if (vm.flags.shuffleFetchItems || vm.itemData.chime.tracked) { return true }
					else { return false }
				}(),
			}
			items.cube = {
				linked: function() {
					if (!vm.flags.shuffleNPCItems) { return 'waterfall' }
					else { return false }
				}(),
				accessible: function() {
					if (vm.flags.entranceShuffle || vm.flags.shuffleNPCItems) { return true }
					else { return vm.locations.waterfall.accessible }
				}(),
			}
			items.adamant = {
				linked: function() {
					if (!vm.flags.shuffleTreasures) { return 'sky' }
					else { return false }
				}(),
				next: function() {
					if (!vm.flags.shuffleFetchItems) { return 'xcalbur' }
					else { return false }
				}(),
				accessible: function() {
					if (vm.flags.entranceShuffle || vm.flags.shuffleTreasures) { return true }
					if (!vm.itemData.chime.tracked) { return false }
					else { return vm.mapAccess.mirage }
				}(),
				consumable: function() {
					if (vm.flags.shuffleFetchItems) { return true }
					else { return false; }
				}(),
				usable: function() {
					if (vm.flags.entranceShuffle) { return true }
					else { return vm.mapAccess.dwarves }
				}(),
				display: function() {
					if (vm.flags.shuffleFetchItems || !vm.itemData.xcalbur.tracked) { return true }
					else { return false }
				}(),
			}
			items.xcalbur = {
				linked: function() {
					if (!vm.flags.shuffleFetchItems) { return 'smith' }
					else { return false }
				}(),
				prev: function() {
					if (!vm.flags.shuffleFetchItems) { return 'adamant' }
					else { return false }
				}(),
				accessible: function() {
					if (vm.flags.shuffleFetchItems) { return true }
					else { return vm.mapAccess.dwarves }
				}(),
				display: function() {
					if (vm.flags.shuffleFetchItems || vm.itemData.xcalbur.tracked) { return true }
					else { return false }
				}(),
			}
			for (i = 0; i < Object.keys(vm.itemData).length; i++) {
				var name = Object.keys(vm.itemData)[i]
				items[name] = Object.assign({}, vm.itemData[name], items[name])
			}
			return items
		},
		locations: function() {
			var vm = this, locations = {}
			locations.garland = {
				img: function() {
					if (!vm.locationData.garland.tracked) { return 'icons/garland.png' }
					else { return 'icons/garland-2.png' }
				}(),
			}
			locations.king = {
				incentive: function() {
					return vm.flags.incentiveFreeNPCs
				}(),
				display: function() {
					if (vm.flags.incentiveFreeNPCs || !vm.flags.shuffleNPCItems) { return true }
					else { return false }
				}(),
			}
			locations.sara = {
				incentive: function() {
					return vm.flags.incentiveFreeNPCs
				}(),
				accessible: function() {
					if (!vm.locationData.garland.tracked) { return false }
					else { return true }
				}(),
				display: function() {
					if (vm.flags.incentiveFreeNPCs || !vm.flags.shuffleNPCItems) { return true }
					else { return false }
				}(),
			}
			locations.bikke = {
				incentive: function() {
					return vm.flags.incentiveFreeNPCs
				}(),
				accessible: function() {
					return vm.mapAccess.pravoka
				}(),
				display: function() {
					if (vm.flags.incentiveFreeNPCs || !vm.flags.shuffleNPCItems) { return true }
					else { return false }
				}(),
			}
			locations.marsh = {
				incentive: function() {
					return vm.flags.incentiveMarsh
				}(),
				accessible: function() {
					return vm.mapAccess.elfland
				}(),
				display: function() {
					if (vm.flags.incentiveMarsh || !vm.flags.shuffleTreasures) { return true }
					else { return false }
				}(),
			}
			locations.marshLocked = {
				incentive: function() {
					return vm.flags.incentiveMarshLocked
				}(),
				accessible: function() {
					if (!vm.itemData.key.tracked) { return false }
					return vm.mapAccess.elfland
				}(),
				display: function() {
					if (vm.flags.incentiveMarshLocked) { return true }
					else { return false }
				}(),
			}
			locations.astos = {
				incentive: function() {
					return vm.flags.incentiveFetchNPCs
				}(),
				accessible: function() {
					if (!vm.itemData.crown.tracked) { return false }
					if (!vm.flags.entranceShuffle) { return vm.mapAccess.elfland }
					return true;
				}(),
				display: function() {
					if (vm.flags.incentiveFetchNPCs || !vm.flags.shuffleNPCFetchItems) { return true }
					else { return false }
				}(),
			}
			locations.matoya = {
				incentive: function() {
					return vm.flags.incentiveFetchNPCs
				}(),
				accessible: function() {
					if (!vm.itemData.crystal.tracked) { return false }
					if (!vm.flags.entranceShuffle) { return vm.mapAccess.pravoka }
					return true;
				}(),
				display: function() {
					if (vm.flags.incentiveFetchNPCs || !vm.flags.shuffleNPCFetchItems) { return true }
					else { return false }
				}(),
			}
			locations.prince = {
				incentive: function() {
					return vm.flags.incentiveFetchNPCs
				}(),
				accessible: function() {
					if (!vm.itemData.herb.tracked) { return false }
					if (!vm.flags.entranceShuffle) { return vm.mapAccess.elfland }
					return true;
				}(),
				display: function() {
					if (vm.flags.incentiveFetchNPCs || !vm.flags.shuffleNPCFetchItems) { return true }
					else { return false }
				}(),
			}
			locations.coneriaLocked = {
				accessible: function() {
					if (!vm.itemData.key.tracked) { return false }
					return true;
				}(),
				incentive: function() {
					return vm.flags.incentiveConeria
				}(),
				display: function() {
					if (vm.flags.incentiveConeria || !vm.flags.shuffleTreasures) { return true }
					else { return false }
				}(),
			}
			locations.nerrick = {
				accessible: function() {
					if (!vm.itemData.tnt.tracked) { return false }
					return vm.mapAccess.dwarves
				}(),
				incentive: function() {
					return vm.flags.incentiveFetchNPCs
				}(),
				display: function() {
					if (vm.flags.incentiveFetchNPCs || !vm.flags.shuffleNPCFetchItems) { return true }
					else { return false }
				}(),
			}
			locations.smith = {
				accessible: function() {
					if (!vm.itemData.adamant.tracked) { return false }
					return vm.mapAccess.dwarves
				}(),
				incentive: function() {
					return vm.flags.incentiveFetchNPCs
				}(),
				display: function() {
					if (vm.flags.incentiveFetchNPCs || !vm.flags.shuffleNPCFetchItems) { return true }
					else { return false }
				}(),
			}
			locations.earth = {
				accessible: function() {
					if (vm.flags.entranceShuffle) { return true }
					return vm.mapAccess.melmond
				}(),
				incentive: function() {
					return vm.flags.incentiveEarth
				}(),
				display: function() {
					if (vm.flags.incentiveEarth || !vm.flags.shuffleTreasures) { return true }
					else { return false }
				}(),
			}
			locations.sarda = {
				accessible: function() {
					if (!vm.flags.earlySarda && !vm.locationData.earth.tracked) { return false }
					if (vm.flags.entranceShuffle) { return true }
					if ((vm.itemData.ship.tracked && vm.itemData.canal.tracked && vm.itemData.ruby.tracked) || vm.itemData.airship.tracked) { return true }
					else { return false }
				}(),
				incentive: function() {
					return vm.flags.incentiveFreeNPCs
				}(),
				display: function() {
					if (vm.flags.incentiveFreeNPCs || !vm.flags.shuffleNPCItems) { return true }
					else { return false }
				}(),
			}
			locations.sage = {
				accessible: function() {
					if (!vm.flags.earlySage && !vm.orbs.earth.tracked) { return false }
					if (vm.flags.entranceShuffle) { return true }
					return vm.mapAccess.crescent
				}(),
				incentive: function() {
					return vm.flags.incentiveFreeNPCs
				}(),
				display: function() {
					if (vm.flags.incentiveFreeNPCs || !vm.flags.shuffleNPCItems) { return true }
					else { return false }
				}(),
			}
			locations.volcano = {
				accessible: function() {
					if (vm.flags.entranceShuffle) { return true }
					return vm.mapAccess.volcano
				}(),
				incentive: function() {
					return vm.flags.incentiveVolcano
				}(),
				display: function() {
					if (vm.flags.incentiveVolcano) { return true }
					else { return false }
				}(),
			}
			locations.iceCave = {
				accessible: function() {
					if (vm.flags.entranceShuffle) { return true }
					return vm.mapAccess.volcano
				}(),
				incentive: function() {
					return vm.flags.incentiveIceCave
				}(),
				display: function() {
					if (vm.flags.incentiveIceCave || !vm.flags.shuffleTreasures) { return true }
					else { return false }
				}(),
			}
			locations.ordeals = {
				accessible: function() {
					if (vm.flags.entranceShuffle) { return true }
					return vm.mapAccess.ordeals
				}(),
				incentive: function() {
					return vm.flags.incentiveOrdeals
				}(),
				display: function() {
					if (vm.flags.incentiveIceCave || !vm.flags.shuffleTreasures) { return true }
					else { return false }
				}
			}
			locations.shopItem = { 
				accessible: function() {
					if (!vm.flags.shuffleShops) { return vm.mapAccess.onrac }
					else { return true }
				}(),
			}
			locations.shrine = {
				accessible: function() {
					if (!vm.flags.entranceShuffle && !vm.itemData.oxyale.tracked) { return false }
					return vm.mapAccess.onrac
				}(),
				incentive: function() {
					return vm.flags.incentiveSeaShrine
				}(),
				display: function() {
					if (vm.flags.incentiveSeaShrine || !vm.flags.shuffleTreasures) { return true }
					else { return false }
				}(),
			}
			locations.waterfall = {
				accessible: function() {
					if (!vm.flags.entranceShuffle && !vm.itemData.canoe.tracked) { return false }
					else { return vm.mapAccess.onrac }
				}(),
				incentive: function() {
					return vm.flags.incentiveFreeNPCs
				}(),
				display: function() {
					if (vm.flags.incentiveFreeNPCs || !vm.flags.shuffleNPCItems) { return true }
					else { return false }
				}(),
			}
			locations.lefein = {
				incentive: function() {
					return vm.flags.incentiveFetchNPCs
				}(),
				accessible: function() {
					if (!vm.itemData.slab.used) { return false }
					else { return vm.itemData.airship.tracked }
				}(),
				display: function() {
					if (vm.flags.incentiveFetchNPCs || !vm.flags.shuffleNPCFetchItems) { return true }
					else { return false }
				}(),
			}
			locations.sky = {
				incentive: function() {
					return vm.flags.incentiveSkyPalace
				}(),
				display: function() {
					if (vm.flags.incentiveSkyPalace || !vm.flags.shuffleTreasures) { return true }
					else { return false }
				}(),
			}
			for (i = 0; i < Object.keys(vm.locationData).length; i++) {
				var name = Object.keys(vm.locationData)[i]
				locations[name] = Object.assign(locations[name], vm.locationData[name])
			}
			return locations
		},
		mapAccess: function() {
			var access = {}, vm = this;
			var canCross = function() {
				if (vm.itemData.bridge.tracked || vm.flags.freeBridge) { return true }
				else { return false }
			}()
			var canFly = function() {
				if (vm.itemData.airship.tracked || vm.flags.freeAirship) { return true }
				else { return false }
			}()
			var canSailSea = function() {
				return vm.itemData.ship.tracked
			}()
			var canSailOcean = function() {
				if (vm.itemData.ship.tracked && vm.itemData.canal.tracked) { return true }
				else { return false }
			}()
			var canRow = function() {
				return vm.itemData.canoe.tracked
			}()
			
			access.pravoka = function() {
				if (vm.flags.mapOpenProgression) { return (canRow || canSailSea || canCross || vm.itemData.airship.tracked) }
				return (canSailSea || canCross || canFly)
			}()
			access.dwarves = function() {
				if (vm.flags.mapOpenProgression) { return true; }
				return (canSailSea || canFly)
			}()
			access.elfland = function() {
				if (vm.flags.extendedOpenProgression) { return true; }
				if (vm.flags.mapOpenProgression) { return (canRow || canSailSea || canFly) }
				return (canSailSea || canFly)
			}()
			access.melmond = function() {
				return (canSailOcean || canFly)
			}()
			access.crescent = function() {
				if (vm.flags.mapOpenProgression) { return (canRow || canSailOcean || canFly) }
				return (canSailOcean || canFly)
			}()
			access.volcano = function() {
				if (vm.flags.mapOpenProgression) { return (canRow || canSailOcean || canFly) }
				return ((canSailOcean && canRow) || canFly)
			}()
			access.ordeals = function() {
				return ((canSailOcean && canRow) || canFly)
			}()
			access.onrac = function() {
				if (vm.flags.mapOpenProgression) { return (canSailOcean || (canRow && canFly)) }
				return (canRow && canFly)
			}()
			access.mirage = function() {
				if (vm.flags.mapOpenProgression) { return (canSailOcean || canFly) }
				return canFly
			}()
			return access;
		},
		orbs: function() {
			var vm = this, orbs = {}
			orbs.earth = {
				accessible: function() {
					return true
				}()
			}
			orbs.fire = {
				accessible: function() {
					return true
				}()
			}
			orbs.water = {
				accessible: function() {
					return true
				}()
			}
			orbs.air = {
				accessible: function() {
					return true
				}()
			}
			for (i = 0; i < Object.keys(vm.orbData).length; i++) {
				var name = Object.keys(vm.orbData)[i]
				orbs[name] = Object.assign(orbs[name], vm.orbData[name])
			}
			return orbs
		}
    }
}