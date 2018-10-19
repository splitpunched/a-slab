var locationInfo = {
	data: function() { return {
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
            locations.fairy = {
                id: 20,
                name: "fairy",
                label: "Fairy",
                img: 'icons/fairy.png',
                tracked: false,
            }
			locations.shrine = {
				id: 21,
				name: "shrine",
				label: "Shrine",
				img: 'icons/mermaid.png',
				tracked: false,
			}
			locations.waterfall = {
				id: 22,
				name: "waterfall",
				label: "Robot",
				img: 'icons/robot.png',
				tracked: false,
			}
			locations.lefein = {
				id: 23,
				name: "lefein",
				label: "Lefein",
				img: 'icons/lupa.png',
				tracked: false,
			}
			locations.sky = {
				id: 24,
				name: "sky",
				label: "Sky",
				img: 'icons/sky.png',
				tracked: false,
			}
		  return locations
		}(),
	}},
	computed: {
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
					if (vm.flags.incentiveOrdeals || !vm.flags.shuffleTreasures) { return true }
					else { return false }
				}(),
			}
			locations.shopItem = { 
				accessible: function() {
					if (!vm.flags.shuffleShops) { return vm.mapAccess.onrac }
					else { return true }
				}(),
				incentive: function() {
					return vm.flags.incentiveFreeNPCs
				}(),
            }
            locations.fairy = {
                incentive: function () {
                    return vm.flags.incentiveFetchNPCs
                }(),
                accessible: function () {
                    if (!vm.itemData.bottle.used) { return false }
                    if (vm.flags.townShuffle) { return true }
                    else { return vm.itemData.airship.tracked }
                }(),
                display: function () {
                    if (vm.flags.incentiveFetchNPCs || !vm.flags.shuffleNPCFetchItems) { return true }
                    else { return false }
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
                    if (vm.flags.townShuffle) { return true }
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
                accessible: function () {
                    if (vm.flags.floorShuffle) { return true }
                    if (!vm.itemData.chime || !vm.itemData.cube) { return false }
                    else { return vm.itemData.airship.tracked }
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
	}
}