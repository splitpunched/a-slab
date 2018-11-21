const locations = {
	namespaced: true,
	modules: {
		garland: {
			namespaced: true,
			state: {
				unid: 0,
				name: "garland",
				label: "Garland",
				image: { default: 'garland.png', alternate: 'garland-alt.png' },
				tracked: false,
			},
			getters: {
				isIncentivized: () => { return false },
				isAccessible: () => { return true },
				isLinked: () => { return false },
				canDisplay: () => { return true },
				useAlternateImage: (state, getters, rootState, rootGetters) => { return rootState.locations.garland.tracked },
			},
		},
		king: {
			namespaced: true,
			state: {
				unid: 1,
				name: "king",
				label: "King",
                image: { default: 'king.png' },
                placement: { type: 'freeNPC', name: 'bridge', },
				tracked: false,
			},
			getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters['incentive/freeNPCs'] },
				isAccessible: () => { return true },
                isLinked: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.shuffleNPCItems && !rootGetters.flagset.freeBridge) },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
			},
		},
		sara: {
			namespaced: true,
			state: {
				unid: 2,
				name: "sara",
				label: "Sara",
                image: { default: 'sara.png' },
                placement: { type: 'freeNPC', name: 'lute', },
				tracked: false,
			},
			getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters['incentive/freeNPCs'] },
				isAccessible: (state, getters, rootState, rootGetters) => { return rootState.locations.garland.tracked },
				isLinked: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.shuffleNPCItems) },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
			},
		},
		bikke: {
			namespaced: true,
			state: {
				unid: 3,
				name: "bikke",
				label: "Bikke",
                image: { default: 'bikke.png' },
                placement: { type: 'freeNPC', name: 'ship', },
				tracked: false,
			},
			getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters['incentive/freeNPCs'] },
				isAccessible: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.townShuffle || rootGetters['map/pravoka'] },
                isLinked: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.shuffleNPCItems) },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
			},
		},
        marsh: {
            namespaced: true,
            state: {
                unid: 3,
                name: "marsh",
                label: "Marsh",
                image: { default: 'marsh.png' },
                placement: { type: 'treasure', name: 'crown', },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveMarsh },
                isAccessible: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.entranceShuffle || rootGetters.flagset.floorShuffle || rootGetters['map/elfland'] },
                isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleTreasures },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
            },
        },
        marshLocked: {
            namespaced: true,
            state: {
                unid: 4,
                name: "marshLocked",
                label: "Marsh",
                image: { default: 'marshLocked.png' },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveMarshLocked },
                isAccessible: (state, getters, rootState, rootGetters) => { return (rootState.items.key.tracked && (rootGetters.flagset.entranceShuffle || rootGetters.flagset.floorShuffle || rootGetters['map/elfland'])) },
                isLinked: () => { return false },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
            },
        },
        astos: {
            namespaced: true,
            state: {
                unid: 5,
                name: "astos",
                label: "Astos",
                image: { default: 'astos.png' },
                placement: { type: 'fetchNPC', name: 'crystal', },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveFetchNPCs },
                isAccessible: (state, getters, rootState, rootGetters) => { return (rootState.items.crown.tracked && (rootGetters.flagset.entranceShuffle || rootGetters.flagset.floorShuffle || rootGetters['map/elfland'])) },
                isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleFetchItems },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
            },
        },
        matoya: {
            namespaced: true,
            state: {
                unid: 6,
                name: "matoya",
                label: "Matoya",
                image: { default: 'matoya.png' },
                placement: { type: 'fetchNPC', name: 'herb', },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveFetchNPCs },
                isAccessible: (state, getters, rootState, rootGetters) => { return (rootState.items.crystal.tracked && (rootGetters.flagset.entranceShuffle || rootGetters.flagset.floorShuffle || rootGetters['map/pravoka'])) },
                isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleFetchItems },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
            },
        },
        prince: {
            namespaced: true,
            state: {
                unid: 7,
                name: "prince",
                label: "Prince",
                image: { default: 'prince.png' },
                placement: { type: 'fetchNPC', name: 'key', },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveFetchNPCs },
                isAccessible: (state, getters, rootState, rootGetters) => { return (rootState.items.herb.tracked && (rootGetters.flagset.entranceShuffle || rootGetters.flagset.floorShuffle || rootGetters['map/elfland'])) },
                isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleFetchItems },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
            },
        },
        coneriaLocked: {
            namespaced: true,
            state: {
                unid: 8,
                name: "coneriaLocked",
                label: "Coneria",
                image: { default: 'coneriaLocked.png' },
                placement: { type: 'treasure', name: 'tnt', },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveConeria },
                isAccessible: (state, getters, rootState, rootGetters) => { return rootState.items.key.tracked },
                isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleTreasures },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
            },
        },
        nerrick: {
            namespaced: true,
            state: {
                unid: 9,
                name: "nerrick",
                label: "Nerrick",
                image: { default: 'nerrick.png' },
                placement: { type: 'fetchNPC', name: 'canal', },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveConeria },
                isAccessible: (state, getters, rootState, rootGetters) => { return rootState.items.tnt.tracked && rootGetters['map/dwarves'] },
                isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleFetchItems },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
            },
        },
        smith: {
            namespaced: true,
            state: {
                unid: 10,
                name: "smith",
                label: "Smith",
                image: { default: 'smith.png' },
                placement: { type: 'fetchNPC', name: 'xcalbur', },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveFetchNPCs },
                isAccessible: (state, getters, rootState, rootGetters) => { return rootState.items.adamant.tracked && rootGetters['map/dwarves'] },
                isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleFetchItems },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
            },
        },
        earth: {
            namespaced: true,
            state: {
                unid: 11,
                name: "earth",
                label: "Earth",
                image: { default: 'earth.png' },
                placement: { type: 'treasure', name: 'ruby', },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveEarth },
                isAccessible: (state, getters, rootState, rootGetters) => { return rootGetters['map/melmond'] },
                isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleTreasures },
                canDisplay: (state, getters, rootState, rootGetters) => { return getters.isLinked || getters.isIncentivized || !rootGetters.flagset.earlySarda },
            },
        },
        unne: {
            namespaced: true,
            state: {
                unid: 12,
                name: "unne",
                label: "Unne",
                image: { default: 'unne.png' },
				activates: 'slab',
                tracked: false,
            },
            getters: {
                isIncentivized: () => { return false },
                isAccessible: (state, getters, rootState, rootGetters) => { return rootState.items.slab.tracked && rootGetters['map/melmond'] },
                isLinked: () => { return false },
                canDisplay: () => { return true },
            },
        },
        sarda: {
            namespaced: true,
            state: {
                unid: 13,
                name: "sarda",
                label: "Sarda",
                image: { default: 'sarda.png' },
                placement: { type: 'freeNPC', name: 'rod' },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveFreeNPCs && rootGetters.flagset.shuffleNPCItems },
                isAccessible: (state, getters, rootState, rootGetters) => { return ((rootGetters.flagset.earlySarda || rootState.locations.earth.tracked) && rootGetters['map/sarda']) },
                isLinked: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.shuffleNPCItems) },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
            },
        },
        sage: {
            namespaced: true,
            state: {
                unid: 14,
                name: "sage",
                label: "Sage",
                image: { default: 'sage.png', alternate: 'sage-alt.png' },
                placement: { type: 'freeNPC', name: 'canoe' },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveFreeNPCs && rootGetters.flagset.shuffleNPCItems },
                isAccessible: (state, getters, rootState, rootGetters) => { return ((rootGetters.flagset.earlySage || rootState.orbs.earth.tracked) && rootGetters['map/crescent']) },
                isLinked: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.shuffleNPCItems) },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
				useAlternateImage: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.confusedOldMen },
            },
        },
        volcano: {
            namespaced: true,
            state: {
                unid: 15,
                name: "volcano",
                label: "Volcano",
                image: { default: 'redD.png' },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveVolcano },
                isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.entranceShuffle || rootGetters.flagset.floorShuffle || rootGetters['map/volcano']) },
                isLinked: () => { return false },
                canDisplay: (state, getters) => { return getters.isIncentivized },
            },
        },
        iceCave: {
            namespaced: true,
            state: {
                unid: 16,
                name: "iceCave",
                label: "Ice",
                image: { default: 'iceCave.png' },
                placement: { type: 'treasure', name: 'floater' },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveIceCave || rootGetters.flagset.shuffleTreasures },
                isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.entranceShuffle || rootGetters.flagset.floorShuffle || rootGetters['map/volcano']) },
                isLinked: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.shuffleTreasures) },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
            },
        },
        ordeals: {
            namespaced: true,
            state: {
                unid: 17,
                name: "ordeals",
                label: "Ordeals",
                image: { default: 'ordeals.png' },
                placement: { type: 'treasure', name: 'tail' },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveOrdeals || rootGetters.flagset.shuffleTreasures },
                isAccessible: (state, getters, rootState, rootGetters) => { return ((rootGetters.flagset.crownlessOrdeals || rootState.items.crown.tracked) && rootGetters['map/ordeals']) },
                isLinked: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.shuffleNPCItems) },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
            },
        },
        shopItem: {
            namespaced: true,
            state: {
                unid: 18,
                name: "shopItem",
                label: "Shop",
                image: { default: 'shopItem.png' },
                placement: { type: 'shop', name: 'bottle' },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveFreeNPCs },
                isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.shuffleShops || rootGetters['map/onrac']) },
                isLinked: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.shuffleFreeNPCs },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
            },
        },
        fairy: {
            namespaced: true,
            state: {
                unid: 19,
                name: "fairy",
                label: "Fairy",
                image: { default: 'fairy.png' },
                placement: { type: 'fetchNPC', name: 'oxyale' },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveFetchNPCs },
                isAccessible: (state, getters, rootState, rootGetters) => { return (rootState.items.bottle.activated && (rootGetters.flagset.townShuffle || rootGetters['access/canFly'])) },
                isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleFetchItems },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
            },
        },
        seaShrine: {
            namespaced: true,
            state: {
                unid: 19,
                name: "seaShrine",
                label: "Sea",
                image: { default: 'seaShrine.png' },
                placement: { type: 'treasure', item: 'slab' },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveFetchNPCs },
                isAccessible: (state, getters, rootState, rootGetters) => { return ((rootGetters.flagset.entranceShuffle || rootGetters.flagset.floorShuffle) ||(rootState.items.oxyale.tracked && rootGetters['map/onrac'])) },
                isLinked: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.shuffleTreasures) },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
            },
        },
        waterfall: {
            namespaced: true,
            state: {
                unid: 20,
                name: "waterfall",
                label: "Robot",
                image: { default: 'waterfall.png' },
                placement: { type: 'freeNPC', name: 'cube' },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveFreeNPCs && rootGetters.flagset.shuffleNPCItems },
                isAccessible: (state, getters, rootState, rootGetters) => { return ((rootGetters.flagset.entranceShuffle || rootGetters.flagset.floorShuffle) || (rootState.items.canoe.tracked && rootGetters['map/onrac'])) },
                isLinked: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.shuffleNPCItems) },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
            },
        },
        lefein: {
            namespaced: true,
            state: {
                unid: 21,
                name: "lefein",
                label: "Lefein",
                image: { default: 'lefein.png' },
                placement: { type: 'fetchNPC', name: 'chime' },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveFetchNPCs },
                isAccessible: (state, getters, rootState, rootGetters) => { return rootState.items.slab.activated && rootGetters[`access/canFly`] },
                isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleFetchItems },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
            },
        },
        skyPalace: {
            namespaced: true,
            state: {
                unid: 22,
                name: "skyPalace",
                label: "Sky",
                image: { default: 'skyPalace.png' },
                placement: { type: 'treasure', name: 'adamant' },
                tracked: false,
            },
            getters: {
                isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveSkyPalace },
                isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.floorShuffle || (rootState.items.cube.tracked && (rootGetters.flagset.entranceShuffle || (rootState.items.chime.tracked && rootGetters['map/mirage'])))) },
                isLinked: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.shuffleTreasures) },
                canDisplay: (state, getters) => { return getters.isLinked || getters.isIncentivized },
            },
        },
	},
	getters: {
		incentives: (state, getters, rootState, rootGetters) => {
			return Object.keys(rootState.locations).filter(location => {
				return (rootGetters[`locations/${location}/isIncentivized`] && !rootGetters[`locations/${location}/isLinked`])
			})
		},
		looseItems: (state, getters, rootState, rootGetters) => {
			var obj = {}, diff = (rootGetters[`items/incentives`].length - rootGetters[`locations/incentives`].length)
			obj.min = Math.max(diff, 0)
			if (!rootGetters.flagset.mapOpenProgression || rootGetters.flagset.incentiveFetchItems) { obj.max = Math.max(diff+1, 0) }
			else { obj.max = Math.max(diff+2, 0) }
			return obj
		},
	},
	mutations: {
        track(state, payload) {
            state[payload.name].tracked = true
        },
		untrack(state, payload) {
            state[payload.name].tracked = false
        },
    },
}
