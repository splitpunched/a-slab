var itemMix = {
	data: function() { return {
		itemData: function() {
			var items = {}
			items.bridge = {
				id: 0,
				name: "Bridge",
				img: 'icons/bridge.png',
				keyItem: true,
				incentive: false,
				tracked: false,
			}
			items.lute = {
				id: 1,
				name: "Lute",
				img: 'icons/lute.png',
				keyItem: true,
				tracked: false,
			}
			items.ship = {
				id: 2,
				name: "Ship",
				img: 'icons/ship.png',
				keyItem: true,
				tracked: false,
			}
			items.crown = {
				id: 3,
				name: "Crown",
				img: 'icons/crown.png',
				keyItem: true,
				tracked: false,
			}
			items.crystal = {
				id: 3.1,
				name: "Crystal",
				img: 'icons/crystal.png',
				keyItem: true,
				tracked: false,
			}
			items.herb = {
				id: 3.2,
				name: "Herb",
				img: 'icons/herb.png',
				keyItem: true,
				tracked: false,
			}
			items.key = {
				id: 3.3,
				name: "Key",
				img: 'icons/key.png',
				keyItem: true,
				tracked: false,
			}
			items.tnt = {
				id: 4,
				name: "TNT",
				img: 'icons/tnt.png',
				keyItem: true,
				tracked: false,
			}
			items.canal = {
				id: 4.1,
				name: "Canal",
				img: 'icons/canal.png',
				keyItem: true,
				tracked: false,
			}
			items.ruby = {
				id: 5,
				name: "Ruby",
				img: 'icons/ruby.png',
				keyItem: true,
				consumable: true,
				tracked: false,
				used: false,
			},
			items.rod = {
				id: 6,
				name: "Rod",
				img: 'icons/rod.png',
				keyItem: true,
				incentive: true,
				tracked: false,
			}
			items.canoe = {
				id: 7,
				name: "Canoe",
				img: 'icons/canoe.png',
				keyItem: true,
				incentive: true,
				tracked: false,
			}
			items.floater = {
				id: 8,
				name: "Floater",
				img: 'icons/floater.png',
				keyItem: true,
				tracked: false,
			},
			items.airship = {
				id: 8.1,
				name: "Airship",
				img: 'icons/airship.png',
				keyItem: true,
				tracked: false,
			}
			items.tail = {
				id: 9,
				name: "Tail",
				//img: 'icons/tail.png',
				consumable: true,
				keyItem: true,
				tracked: false,
				used: false,
			}
			items.bottle = {
				id: 10,
				name: "Bottle",
				//img: 'icons/bottle.png',
				consumable: true,
				keyItem: true,
				tracked: false,
				used: false,
			}
			items.oxyale = {
				id: 10.1,
				name: "Oxyale",
				img: 'icons/oxyale.png',
				keyItem: true,
				incentive: true,
				tracked: false,
			}
			items.slab = {
				id: 11,
				name: "Slab",
				//img: 'icons/slab.png',
				consumable: true,
				keyItem: true,
				tracked: false,
				used: false,
			}
			items.chime = {
				id: 11.1,
				name: "Chime",
				img: 'icons/chime.png',
				keyItem: true,
				incentive: true,
				tracked: false,
			}
			items.cube = {
				id: 12,
				name: "Cube",
				img: 'icons/cube.png',
				keyItem: true,
				incentive: true,
				tracked: false,
			}
			items.adamant = {
				id: 13,
				name: "Adamant",
				img: 'icons/adamant.png',
				keyItem: true,
				tracked: false,
			}
			items.xcalbur = {
				id: 13.1,
				label: "Excal",
				img: 'icons/xcalbur.png',
				keyItem: false,
				incentive: false,
				tracked: false,
			}
			return items
		}(),
	}},
	computed: {
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
			}
			items.lute = {
				linked: function() {
					if (!vm.flags.shuffleNPCItems) { return 'sara' }
					else { return false }
				}(),
				incentive: function() {
					if (!vm.flags.shortTemple) { return true }
					else { return false }
				}(),
				accessible: function() {
					if (!vm.flags.entranceShuffle && !vm.flags.shuffleNPCItems) { return vm.locations.sara.accessible }
					return true;
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
				},
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
					else { return true; }
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
					else { return true; }
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
					else { return true; }
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
					else { return true; }
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
					if (!vm.flags.entranceShuffle && !vm.flags.shuffleFetchItems) { return vm.locations.coneriaLocked.accessible }
					else { return true; }
				}(),
			}
			items.ruby = {
				img: function() {
					return 'icons/titan.png'
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
					if (!vm.flags.entranceShuffle && !vm.flags.shuffleFetchItems) { return vm.locations.earth.accessible }
					else { return true; }
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
			}
			items.airship = {
				prev: function() {
					if (vm.flags.freeAirship) { return false }
					else { return 'floater' }
				}(),
				accessible: function() {
					return true;
				}(),
			}
			items.tail = {
				img: function() {
					return 'icons/tail.png'
					// 'icons/class.png',
				}(),
				linked: function() {
					if (!vm.flags.shuffleTreasures) { return 'ordeals' }
					else { return false }
				}(),
				accessible: function() {
					if (!vm.flags.entranceShuffle && !vm.flags.shuffleTreasures) { return vm.locations.ordeals.accessible }
					else { return true; }
				}(),
			}
			items.bottle = {
				img: function() {
					return 'icons/bottle.png'
					// 'icons/class.png',
				}(),
				linked: function() {
					if (!vm.flags.shuffleFetch) { return 'shopItem' }
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
			}
			items.oxyale = {
				prev: function() {
					if (!vm.flags.shuffleFetchItems) { return 'bottle' }
					else { return false }
				}(),
				accessible: function() {
					return true;
				}(),
			}
			items.slab = {
				img: function() {
					return 'icons/slab.png'
					// 'icons/slab-unne.png',
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
					return true;
				}(),
			}
			items.chime = {
				linked: function() {
					if (!vm.flags.shuffleTreasures) { return 'lefein' }
					else { return false }
				}(),
				prev: function() {
					if (!vm.flags.shuffleFetchItems) { return 'slab' }
					else { return false }
				}(),
				accessible: function() {
					return true;
				}(),
			}
			items.cube = {
				linked: function() {
					if (!vm.flags.shuffleNPCItems) { return 'waterfall' }
					else { return false }
				}(),
				accessible: function() {
					return true;
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
					return true;
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
					return true;
				}(),
			}
			
			for (i = 0; i > Object.keys(this.itemData); i++) {
				var name = Object.keys(this.itemData)[i]
				Object.assign(this.items[name], this.itemdata[name])
			}
			return items; 
		}
    }
}