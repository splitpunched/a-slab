var itemInfo = {
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
                used: false,
                target: 'astos',
			}
			items.crystal = {
				id: 3.1,
				name: "crystal",
				label: "Crystal",
				img: 'icons/crystal.png',
				keyItem: true,
                tracked: false,
                used: false,
                target: 'matoya',
			}
			items.herb = {
				id: 3.2,
				name: "herb",
				label: "Herb",
				img: 'icons/herb.png',
				keyItem: true,
                tracked: false,
                used: false,
                target: 'prince',
			}
			items.key = {
				id: 3.3,
				name: "key",
				label: "Key",
				img: 'icons/key.png',
				keyItem: true,
                tracked: false,
                used: false,
			}
			items.tnt = {
				id: 4,
				name: "tnt",
				label: "TNT",
				img: 'icons/tnt.png',
				keyItem: true,
                tracked: false,
                used: false,
                target: 'nerrick',
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
				img: 'icons/ruby.png',
				usedImg: 'icons/titan.png',
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
				consumable: true,
				keyItem: true,
				tracked: false,
				used: false,
				display: true,
				img: 'icons/tail.png',
				usedImg: 'icons/class.png',
			}
			items.bottle = {
				id: 10,
				name: "bottle",
				label: "Bottle",
				consumable: true,
				keyItem: true,
				tracked: false,
				used: false,
				img: 'icons/bottle.png',
				usedImg: 'icons/bottle-empty.png',
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
				consumable: true,
				keyItem: true,
				tracked: false,
				used: false,
				img: 'icons/slab.png',
                usedImg: 'icons/slab-unne.png',
                target: 'unne',
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
                used: false,
                target: 'smith',
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
            items.masmune = {
                id: 14,
                name: "masmune",
                label: "M.Mune",
                img: 'icons/masmune.png',
                keyItem: false,
                tracked: false,
            }
            items.ribbon = {
                id: 15,
                name: "ribbon",
                label: "Ribbon",
                img: 'icons/ribbon.png',
                multiple: true,
                keyItem: false,
                tracked: false,
            }
            items.opalBracelet = {
                id: 14,
                name: "opalBracelet",
                label: "Opal",
                img: 'icons/opalBracelet.png',
                keyItem: false,
                tracked: false,
            }
            items.whiteShirt = {
                id: 15,
                name: "whiteShirt",
                label: "White",
                img: 'icons/whiteShirt.png',
                keyItem: false,
                tracked: false,
            }
            items.powerGauntlet = {
                id: 16,
                name: "powerGauntlet",
                label: "Power",
                img: 'icons/powerGauntlet.png',
                keyItem: false,
                tracked: false,
            }
            items.defense = {
                id: 17,
                name: "defense",
                label: "Defense",
                img: 'icons/defense.png',
                keyItem: false,
                tracked: false,
            }
            items.thorHammer = {
                id: 18,
                name: "thorHammer",
                label: "Thor",
                img: 'icons/thorHammer.png',
                keyItem: false,
                tracked: false,
            }
			return items
		}(),
	}},
	computed: {
		items: function() {
			var vm = this, items = {}
			items.bridge = {
				linked: function() { return vm.linked_npcFreeItems('king') }(),
				locked: function() { return vm.flags.freeBridge }(),
				accessible: function() { return vm.accessible().npcFreeItems('king') }(),
				tracked: function() {
					if (vm.flags.freeBridge) { return true }
					else { return vm.itemData.bridge.tracked }
				}(),
			}
			items.lute = {
				linked: function() { 
					return vm.linked_npcFreeItems('sara') 
				}(),
				// Lute is always incentivized, unless the short temple flag is on,
				// In which case
				incentive: function() { return !vm.flags.shortTemple }(),
				accessible: function() { return vm.itemLogic().npcFreeFloorItems('sara') }(),
				locked: function() { return vm.flags.shortTemple }(),
				tracked: function() {
					if (vm.flags.shortTemple) { return true }
					else { return vm.itemData.lute.tracked }
				}(),
			}
			items.ship = {
				linked: function() { return vm.linked_npcFreeItems('bikke') }(),
				incentive: function() {
					if (!vm.flags.mapOpenProgression) { return true }
					else { return vm.flags.incentiveFetchItems }
				}(),
				accessible: function() { return vm.itemLogic().npcFreeTownItems('bikke') }(),
			}
			items.crown = {
				linked: function() { return vm.linked_shuffleTreasures('marshLocked') }(),
				incentive: function() {
					if (!vm.flags.shuffleFetchItems) { return true }
					else { return vm.flags.incentiveFetchItems }
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
				linked: function() { return vm.logic_noShuffleFetch('matoya') }(),
				incentive: function() {
					if (vm.flags.incentiveFetchItems) { return true }
					else { return false }
				}(),
				prev: function() { return vm.logic_noShuffleFetch('crystal') }(),
				next: function() { return vm.logic_noShuffleFetch('key') }(),
				accessible: function() {
					if (!vm.flags.entranceShuffle && !vm.flags.shuffleFetchItems) { return vm.locations.matoya.accessible }
					else { return true; }
				}(),
				consumable: function() { return vm.flags.shuffleFetchItems }(),
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
				linked: function() { return vm.logic_noShuffleFetch('prince') }(),
				prev: function() { return vm.logic_noShuffleFetch('herb') }(),
				incentive: function() { return vm.flags.incentiveFetchItems }(),
				accessible: function() {
					if (!vm.flags.entranceShuffle && !vm.flags.shuffleFetchItems) { return vm.locations.prince.accessible }
					else { return true }
				}(),
				display: function() {
					if (vm.flags.shuffleFetchItems) { return true }
					else { return vm.itemData.key.tracked }
				}(),
			}
			items.tnt = {
				linked: function() {
					if (!vm.flags.shuffleTreasures) { return 'coneriaLocked' }
					else { return false }
				}(),
				incentive: function() {
					if (vm.flags.incentiveFetchItems) { return true }
					else if (!vm.flags.shuffleFetchItems && !vm.flags.shuffleNPCItems) { return true }
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
				display: function() { return vm.display_shuffleFetchOrNotTracked('canal') }(),
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
				display: function() { return vm.display_shuffleFetchOrTracked('canal') }(),
			}
			items.ruby = {
				linked: function() {
					if (!vm.flags.shuffleTreasures) { return 'earth' }
					else { return false }
				}(),
				incentive: function() {
					if (vm.flags.incentiveFetchItems) { return true }
					else if (!vm.flags.earlySage && !vm.flags.shuffleNPCItems) { return true }
					else { return false }
				}(),
                accessible: function () {
                    if (!vm.itemData.ruby.tracked) {
                        if (vm.flags.shuffleTreasures) { return true }
                        else { return vm.mapAccess.melmond }
                    }
                    else {
                        if (vm.flags.entranceShuffle) { return true }
                        else { return vm.mapAccess.melmond }
                    }
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
                accessible: function () {
                    if (vm.flags.extendedOpenProgression) { return ((vm.itemData.ship.tracked && vm.itemData.canal.tracked) || vm.itemData.canoe.tracked) }
                    else if (vm.flags.mapOpenProgression) { return vm.itemData.canoe.tracked }
                    else { return (vm.itemData.ship.tracked && vm.itemData.canal.tracked && vm.itemData.canoe.tracked) }
                }(),
				locked: function() {
					return vm.flags.freeAirship
				}(),
				display: function() { return (vm.flags.freeAirship || vm.itemData.airship.tracked) }(),
			}
			items.tail = {
				linked: function() {
					if (!vm.flags.shuffleTreasures) { return 'ordeals' }
					else { return false }
				}(),
				incentive: function() { return vm.flags.incentiveTail }(),
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
                linked: function () {
                    if (!vm.flags.shuffleFetchItems) { return 'fairy' }
                    else { return false }
                }(),
				prev: function() {
					if (!vm.flags.shuffleFetchItems) { return 'bottle' }
					else { return false }
				}(),
				accessible: function() {
					if (vm.flags.townShuffle || vm.flags.shuffleFetchItems) { return true }
					else { return vm.itemData.airship.tracked }
				}(),
				display: function() {
					if (vm.flags.shuffleFetchItems || vm.itemData.oxyale.tracked) { return true }
					else { return false }
				}(),
			}
			items.slab = {
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
					if (vm.flags.townShuffle) { return true }
					else { return vm.mapAccess.melmond }
				}(),
				display: function() {
					if (vm.flags.shuffleFetchItems) { return true }
					else { return !vm.itemData.chime.tracked }
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
					if (vm.flags.shuffleFetchItems) { return true }
					if (!vm.itemData.slab.used) { return false }
					if (vm.flags.townShuffle) { return true }
					else { return vm.itemData.airship.tracked }
				}(),
				display: function() {
					if (vm.flags.shuffleFetchItems) { return true }
					else { return vm.itemData.chime.tracked }
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
					if (vm.flags.shuffleFetchItems) { return false }
                    else { return vm.itemData.xcalbur.tracked }
				}(),
            }
            items.ribbon = {
                linked: function () {
                    if (!vm.flags.shuffleTreasures) { return false } // No it's not but holy shit am I too lazy to check where the original three are
                    else { return false }
                }(),
                accessible: function () {
                    if (!vm.flags.shuffleTreasures) { return true } // No it's not but holy shit am I too lazy to check where the original three are
                    else { return true }
                }(),
                display: function () { return (vm.flags.incentiveRibbon || vm.flags.incentiveRibbon2) }(),
                incentive: function() { return (vm.flags.incentiveRibbon || vm.flags.incentiveRibbon2) }(),
            }
            items.masmune = {
                linked: function () {
                    if (!vm.flags.shuffleTreasures) { return false } // I mean technically I guess I could add that one chest in TOFR but fuck you, seriously
                    else { return false }
                }(),
                accessible: function () {
                    if (!vm.flags.shuffleTreasures) { return true } // This should be go mode permissions
                    else { return true }
                }(),
                display: function () { return vm.flags.incentiveMasamune }(),
                incentive: function () { return vm.flags.incentiveMasamune }(),
            }
            items.opalBracelet = {
                linked: function () {
                    if (!vm.flags.shuffleTreasures) { return false } // shit I don't know
                    else { return false }
                }(),
                accessible: function () {
                    if (!vm.flags.shuffleTreasures) { return true } // shit idk
                    else { return true }
                }(),
                display: function () { return vm.flags.incentiveOpalBracelet }(),
                incentive: function () { return vm.flags.incentiveOpalBracelet }(),
            }
            items.whiteShirt = {
                linked: function () {
                    if (!vm.flags.shuffleTreasures) { return false } // I mean technically I guess I could add that one chest in TOFR but fuck you, seriously
                    else { return false }
                }(),
                accessible: function () {
                    if (!vm.flags.shuffleTreasures) { return true } // This should be go mode permissions
                    else { return true }
                }(),
                display: function () { return vm.flags.incentiveDefCastArmor }(),
                incentive: function () { return vm.flags.incentiveDefCastArmor }(),
            }
            items.powerGauntlet = {
                linked: function () {
                    if (!vm.flags.shuffleTreasures) { return false } // I mean technically I guess I could add that one chest in TOFR but fuck you, seriously
                    else { return false }
                }(),
                accessible: function () {
                    if (!vm.flags.shuffleTreasures) { return true } // This should be go mode permissions
                    else { return true }
                }(),
                display: function () { return vm.flags.incentiveOtherCastArmor }(),
                incentive: function () { return vm.flags.incentiveOtherCastArmor }(),
            }
            items.defense = {
                linked: function () {
                    if (!vm.flags.shuffleTreasures) { return false } // I mean technically I guess I could add that one chest in TOFR but fuck you, seriously
                    else { return false }
                }(),
                accessible: function () {
                    if (!vm.flags.shuffleTreasures) { return true } // This should be go mode permissions
                    else { return true }
                }(),
                display: function () { return vm.flags.incentiveDefCastWeapon }(),
                incentive: function () { return vm.flags.incentiveDefCastWeapon }(),
            }
            items.thorHammer = {
                linked: function () {
                    if (!vm.flags.shuffleTreasures) { return false } // I mean technically I guess I could add that one chest in TOFR but fuck you, seriously
                    else { return false }
                }(),
                accessible: function () {
                    if (!vm.flags.shuffleTreasures) { return true } // This should be go mode permissions
                    else { return true }
                }(),
                display: function () { return vm.flags.incentiveOffCastWeapon }(),
            }
			for (i = 0; i < Object.keys(vm.itemData).length; i++) {
				var name = Object.keys(vm.itemData)[i]
				items[name] = Object.assign({}, vm.itemData[name], items[name])
			}
			return items
		},
	},
	methods: {
		accessible: function() {
			var vm = this;
			return {
				npcFreeItems: function(npc) {
					if (vm.flags.shuffleNPCItems) { return true }
					var townNpcs = [ 'bikke', 'sage' ]
					if (townNpcs.indexOf(npc) >= 0 && vm.flags.townShuffle) { return true }
					else if (townNpcs.indexOf(npc) == -1 && vm.flags.entranceShuffle) { return true }
					return vm.locations[npc].accessible
				}
			}
		},
		accessible_npcFreeItems: function(npc) {
			if (npc == 'bikke' && this.flags.townShuffle) { return true }
			if ((npc == 'king' || npc == 'sara') && this.flags.entranceShuffle) { return true }
			if (!this.flags.shuffleNPCItems) { return this.locations[npc].accessible }
			else { return true }
		},
		linked_npcFreeItems: function(npc) {
			if (!this.flags.shuffleNPCItems) { return npc }
			else { return false }
		},
		linked_shuffleTreasures: function(chest) {
			if (!this.flags.shuffleTreasures) { return chest }
			else { return false }
		},
		logic_noShuffleFetch(val) {
			if (!this.flags.shuffleFetchItems) { return val }
			else { return false }
		},
		display_shuffleFetchOrTracked: function(item) {
			if (this.flags.shuffleFetchItems) { return true } 
			else { return this.itemData[item].tracked }
		},
		display_shuffleFetchOrNotTracked: function(item) {
			if (this.flags.shuffleFetchItems) { return true } 
			else { return !this.itemData[item].tracked }
		},
    },
}