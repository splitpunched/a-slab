const items = {
	namespaced: true,
	modules: {
		bridge: {
			namespaced: true,
			state: {
				unid: 0,
				name: "bridge",
				label: "Bridge",
				image: { default: 'bridge.png' },
				keyItem: true,
				placement: { type: 'freeNPC', name: 'king', },
				tracked: false,
				used: false,
				questChain: null,
			},
			getters: {
				isIncentivized: () => { return false },
				isConsumable: () => { return false },
				canDisplay: () => { return true },
				isUsable: () => { return false },
				isLinked: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.shuffleNPCItems || !rootGetters.flagset.freeBridge) },
				isLocked: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.freeBridge },
				isAccessible: (state, getters, rootState, rootGetters) => { return true }
			},
		},
		lute: {
			namespaced: true,
			state: {
				unid: 1,
				name: "lute",
				label: "Lute",
				image: { default: 'lute.png', used: null, },
				keyItem: true,
				placement: { type: 'freeNPC', name: 'sara', },
				tracked: false,
				used: false,
				questChain: null,
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.shortTemple) },
				isConsumable: () => { return false },
				canDisplay: () => { return true },
				isUsable: () => { return false },
				isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleNPCItems },
				isLocked: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.shortTemple },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		ship: {
			namespaced: true,
			state: {
				unid: 2,
				name: "ship",
				label: "Ship",
				image: { default: 'ship.png', used: null, },
				keyItem: true,
				placement: { type: 'freeNPC', name: 'bikke', },
				tracked: false,
				used: false,
				questChain: null,
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.mapOpenProgression || rootGetters.flagset.shuffleFetchItems },
				isConsumable: () => { return false },
				canDisplay: () => { return true },
				isUsable: () => { return false },
				isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleNPCItems },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		crown: {
			namespaced: true,
			state: {
				unid: 3,
				name: "crown",
				label: "Crown",
				image: { default: 'crown.png', used: null, },
				keyItem: true,
				placement: { type: 'treasure', name: 'marsh', },
				target: { type: 'fetchNPC', name: 'astos' },
				tracked: false,
				used: false,
				questChain: { default: [ 'crown', 'crystal', 'herb', 'key' ], shuffleFetchItems: null }
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.shuffleFetchItems || rootGetters.flagset.incentiveFetchItems) },
				isConsumable: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.shuffleFetchItems },
				canDisplay: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.shuffleFetchItems || !rootState.items.crystal.tracked) },
				isUsable: (state, getters, rootState, rootGetters) => { return (state.tracked && rootGetters[`locations/${state.target.name}/isAccessible`]) },
				isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleTreasures },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		crystal: {
			namespaced: true,
			state: {
				unid: 3.1,
				name: "crystal",
				label: "Crystal",
				image: { default: 'crystal.png', used: null, },
				keyItem: true,
				placement: { type: 'fetchNPC', name: 'astos', },
				target: { type: 'fetchNPC', name: 'matoya' },
				tracked: false,
				used: false,
				questChain: { default: [ 'crown', 'crystal', 'herb', 'key' ], shuffleFetchItems: null }
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveFetchItems },
				isConsumable: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.shuffleFetchItems },
				canDisplay: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.shuffleFetchItems || (rootState.items.crystal.tracked && !rootState.items.herb.tracked)) },
				isUsable: (state, getters, rootState, rootGetters) => { return (state.tracked && rootGetters[`locations/${state.target.name}/isAccessible`]) },
				isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleFetchItems },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		herb: {
			namespaced: true,
			state: {
				unid: 3.2,
				name: "herb",
				label: "Herb",
				image: { default: 'herb.png', used: null, },
				keyItem: true,
				placement: { type: 'fetchNPC', name: 'matoya', },
				target: { type: 'fetchNPC', name: 'prince' },
				tracked: false,
				used: false,
				questChain: { default: [ 'crown', 'crystal', 'herb', 'key' ], shuffleFetchItems: null }
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveFetchItems },
				canDisplay: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.shuffleFetchItems || (rootState.items.herb.tracked && !rootState.items.key.tracked)) },
				isConsumable: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.shuffleFetchItems },
				isUsable: (state, getters, rootState, rootGetters) => { return (state.tracked && rootGetters[`locations/${state.target.name}/isAccessible`]) },
				isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleFetchItems },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		key: {
			namespaced: true,
			state: {
				unid: 3.3,
				name: "key",
				label: "Key",
				image: { default: 'key.png', used: null, },
				keyItem: true,
				placement: { type: 'fetchNPC', name: 'prince', },
				tracked: false,
				used: false,
				questChain: { default: [ 'crown', 'crystal', 'herb', 'key' ], shuffleFetchItems: null }
			},
			getters: {
				isIncentivized: () => { return true },
				canDisplay: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.shuffleFetchItems || rootState.items.key.tracked) },
				isConsumable: () => { return false },
				isUsable: () => { return false },
				isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleFetchItems },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		tnt: {
			namespaced: true,
			state: {
				unid: 4,
				name: "tnt",
				label: "TNT",
				image: { default: 'tnt.png', used: null, },
				keyItem: true,
				placement: { type: 'treasure', name: 'coneriaLocked', },
				target: { type: 'fetchNPC', name: 'nerrick' },
				tracked: false,
				used: false,
				questChain: { default: [ 'tnt', 'canal' ], shuffleFetchItems: null, freeCanal: null }
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.shuffleNPCItems && !rootGetters.flagset.shuffleFetchItems) || rootGetters.flagset.incentiveFetchItems },
				canDisplay: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.shuffleFetchItems || !rootState.items.canal.tracked) },
				isConsumable: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.shuffleFetchItems || rootGetters.flagset.freeCanal },
				isUsable: (state, getters, rootState, rootGetters) => { return (state.tracked && rootGetters[`locations/${state.target.name}/isAccessible`]) },
				isLinked: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.shuffleTreasures || !rootGetters.flagset.freeCanal) },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		canal: {
			namespaced: true,
			state: {
				unid: 4.1,
				name: "canal",
				label: "Canal",
				image: { default: 'canal.png', used: null, },
				keyItem: true,
				placement: { type: 'fetchNPC', name: 'nerrick', },
				tracked: false,
				used: false,
				questChain: { default: [ 'tnt', 'canal' ], shuffleFetchItems: null }
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.shuffleNPCItems || rootGetters.flagset.incentiveFetchItems) },
				canDisplay: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.shuffleFetchItems || rootState.items.canal.tracked || rootGetters.flagset.freeCanal) },
				isConsumable: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.shuffleFetchItems },
				isUsable: () => { return false },
				isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleFetchItems },
                isLocked: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.freeCanal },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		ruby: {
			namespaced: true,
			state: {
				unid: 5,
				name: "ruby",
				label: "Ruby",
				image: { default: 'ruby.png', used: 'ruby-used.png', },
				keyItem: true,
				placement: { type: 'treasure', name: 'earth', },
				tracked: false,
				used: false,
				questChain: null
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.earlySage && !rootGetters.flagset.shuffleNPCItems) || rootGetters.flagset.incentiveFetchItems },
				canDisplay: () => { return true }, // I need to figure out the best way to handle this.
				isConsumable: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.shuffleFetchItems },
				isUsable: (state, getters, rootState, rootGetters) => { return (state.tracked && !state.used && rootGetters['map/melmond']) },
				isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleTreasures },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		rod: {
			namespaced: true,
			state: {
				unid: 6,
				name: "rod",
				label: "Rod",
				image: { default: 'rod.png', used: null, },
				keyItem: true,
				placement: { type: 'freeNPC', name: 'sarda', },
				tracked: false,
				used: false,
				questChain: null
			},
			getters: {
				isIncentivized: () => { return true },
				canDisplay: () => { return true }, // I need to figure out the best way to handle this.
				isConsumable: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.shuffleFetchItems },
				isUsable: () => { return false },
				isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleNPCItems },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		canoe: {
			namespaced: true,
			state: {
				unid: 7,
				name: "canoe",
				label: "Canoe",
				image: { default: 'canoe.png', used: null, },
				keyItem: true,
				placement: { type: 'freeNPC', name: 'sage', },
				tracked: false,
				used: false,
				questChain: null
			},
			getters: {
				isIncentivized: () => { return true },
				canDisplay: () => { return true }, // I need to figure out the best way to handle this.
				isConsumable: () => { return false },
				isUsable: () => { return false },
				isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleNPCItems },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		floater: {
			namespaced: true,
			state: {
				unid: 8,
				name: "floater",
				label: "Floater",
				image: { default: 'floater.png', used: null, },
				keyItem: true,
				placement: { type: 'treasure', name: 'iceCave', },
				tracked: false,
				used: false,
				questChain: { default: [ 'floater', 'airship' ], }
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.freeAirship) },
				canDisplay: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.freeAirship || !rootState.items.airship.tracked) },
				isConsumable: () => { return false },
				isUsable: (state, getters, rootState, rootGetters) => { return (state.tracked && !state.used && rootGetters['access/canRow'] && (rootGetters['access/canSailOcean'] || rootGetters.flagset.extendedOpenProgression)) },
				isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleTreasures },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		airship: {
			namespaced: true,
			state: {
				unid: 8.1,
				name: "airship",
				label: "Airship",
				image: { default: 'airship.png', used: null, },
				keyItem: true,
				placement: false,
				tracked: false,
				used: false,
				questChain: { default: [ 'floater', 'airship' ], }
			},
			getters: {
				isIncentivized: () => { return false },
				canDisplay: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.freeAirship || rootState.items.airship.tracked) },
				isConsumable: () => { return false },
				isUsable: () => { return false },
				isLinked: () => { return false },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		tail: {
			namespaced: true,
			state: {
				unid: 9,
				name: "tail",
				label: "Tail",
				image: { default: 'tail.png', used: 'tail-used.png', },
				keyItem: true,
				placement: { type: 'treasure', name: 'ordeals', },
				tracked: false,
				used: false,
				questChain: null,
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveTail },
				canDisplay: () => { return true },
				isConsumable: () => { return true },
				isUsable: (state, getters, rootState, rootGetters) => { return state.tracked && rootGetters[`access/canFly`] },
				isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleTreasures },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		bottle: {
			namespaced: true,
			state: {
				unid: 10,
				name: "bottle",
				label: "Bottle",
				image: { default: 'bottle.png', activated: 'bottle-activated.png', used: 'bottle-activated.png', },
				keyItem: true,
				placement: { type: 'shop', name: 'shopItem', },
				target: { type: 'fetchNPC', name: 'fairy', },
				tracked: false,
				used: false,
				activated: false,
				questChain: { default: [ 'bottle', 'oxyale' ], shuffleFetchItems: null },
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveFetchItems || !rootGetters.flagset.shuffleFetchItems },
				canDisplay: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.shuffleFetchItems || !rootState.items.oxyale.tracked) },
				isConsumable: () => { return true },
				isUsable: (state, getters, rootState, rootGetters) => { return state.activated && (rootGetters.flagset.townShuffle || rootGetters[`access/canFly`]) },
				isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleNPCItems },
				canActivate: () => { return true },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		oxyale: {
			namespaced: true,
			state: {
				unid: 10.1,
				name: "oxyale",
				label: "Oxyale",
				image: { default: 'oxyale.png', used: null, },
				keyItem: true,
				placement: { type: 'fetchNPC', name: 'fairy', },
				tracked: false,
				used: false,
				questChain: { default: [ 'bottle', 'oxyale' ], shuffleFetchItems: null },
			},
			getters: {
				isIncentivized: () => { return true },
				canDisplay: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.shuffleFetchItems || rootState.items.oxyale.tracked) },
				isConsumable: () => { return true },
				isUsable: () => { return false },
				isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleFetchItems },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		slab: {
			namespaced: true,
			state: {
				unid: 11,
				name: "slab",
				label: "Slab",
				image: { default: 'slab.png', activated: 'slab-activated.png', used: 'slab-activated.png', },
				keyItem: true,
				placement: { type: 'treasure', name: 'seaShrine', },
				target: { type: 'fetchNPC', name: 'lefein', },
                tracked: false,
                activated: false,
				activator: 'unne',
				used: false,
				questChain: { default: [ 'slab', 'chime' ], shuffleFetchItems: null },
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveFetchItems || !rootGetters.flagset.shuffleFetchItems },
				canDisplay: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.shuffleFetchItems || !rootState.items.chime.tracked) },
				canActivate: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.townShuffle || rootGetters['map/melmond']) },
				isConsumable: () => { return true },
				isUsable: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.townShuffle || rootGetters[`access/canFly`]) },
				isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleTreasures },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		chime: {
			namespaced: true,
			state: {
				unid: 11.2,
				name: "chime",
				label: "Chime",
				image: { default: 'chime.png', used: null },
				keyItem: true,
				placement: { type: 'fetchNPC', name: 'lefein', },
				tracked: false,
				used: false,
				questChain: { default: [ 'slab', 'chime' ], shuffleFetchItems: null },
			},
			getters: {
				isIncentivized: () => { return true },
				canDisplay: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.shuffleFetchItems || rootState.items.chime.tracked) },
				isConsumable: () => { return false },
				isUsable: () => { return false },
				isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleFetchItems },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		cube: {
			namespaced: true,
			state: {
				unid: 12,
				name: "cube",
				label: "Cube",
				image: { default: 'cube.png', used: null },
				keyItem: true,
				placement: { type: 'freeNPC', name: 'waterfall', },
				tracked: false,
				used: false,
				questChain: null
			},
			getters: {
				isIncentivized: () => { return true },
				canDisplay: () => { return true }, // I need to figure out the best way to handle this.
				isConsumable: () => { return true },
				isUsable: () => { return false },
				isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleNPCItems },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		adamant: {
			namespaced: true,
			state: {
				unid: 13,
				name: "adamant",
				label: "Adamant",
				image: { default: 'adamant.png', used: null },
				keyItem: true,
				placement: { type: 'treasure', name: 'skyPalace', },
				target: { type: 'fetchNPC', name: 'smith' },
				tracked: false,
				used: false,
				questChain: { default: [ 'adamant', 'xcalbur' ],  shuffleFetchItems: null },
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveFetchItems },
				canDisplay: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.shuffleFetchItems || !rootState.items.xcalbur.tracked) },
				isConsumable: () => { return true },
				isUsable: (state, getters, rootState, rootGetters) => { return state.tracked && rootGetters['map/dwarves'] },
				isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleTreasures },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		xcalbur: {
			namespaced: true,
			state: {
				unid: 13.1,
				name: "xcalbur",
				label: "Excal",
				image: { default: 'xcalbur.png', used: null },
				keyItem: false,
				placement: { type: 'fetchNPC', name: 'smith', },
				tracked: false,
				used: false,
				questChain: { default: [ 'adamant', 'xcalbur' ], shuffleFetchItems: null },
			},
			getters: {
				isIncentivized: () => { return false },
				canDisplay: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.shuffleFetchItems && rootState.items.xcalbur.tracked) },
				isConsumable: () => { return true },
				isUsable: () => { return false },
				isLinked: (state, getters, rootState, rootGetters) => { return !rootGetters.flagset.shuffleFetchNPCs },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters[`locations/${state.placement.name}/isAccessible`] || !getters.isLinked) }
			},
		},
		masmune: {
			namespaced: true,
			state: {
				unid: 14,
				name: "masmune",
				label: "Masa",
				image: { default: 'masmune.png', used: null },
				keyItem: false,
				placement: null,
				tracked: false,
				used: false,
				questChain: null
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveMasamune },
				canDisplay: (state, getters, rootState, rootGetters) => { return getters.isIncentivized },
				isConsumable: () => { return false },
				isUsable: () => { return false },
				isLinked: () => { return false },
				isLocked: () => { return false },
				isAccessible: (state, getters, rootState, rootGetters) => { return true }
			},
		},
		ribbon: {
			namespaced: true,
			state: {
				unid: 15,
				name: "ribbon",
				label: "Ribbon",
				image: { default: 'ribbon.png', used: null },
				keyItem: false,
				placement: null,
				tracked: false,
				used: false,
				questChain: null
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveRibbon },
				canDisplay: (state, getters, rootState, rootGetters) => { return getters.isIncentivized },
				isConsumable: () => { return false },
				isUsable: () => { return false },
				isLinked: () => { return false },
				isLocked: () => { return false },
				isAccessible: () => { return true },
			},
		},
		opalBracelet: {
			namespaced: true,
			state: {
				unid: 16,
				name: "opalBracelet",
				label: "Opal",
				image: { default: 'opalBracelet.png', used: null },
				keyItem: false,
				placement: null,
				tracked: false,
				used: false,
				questChain: null
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveOpalBracelet },
				canDisplay: (state, getters, rootState, rootGetters) => { return getters.isIncentivized },
				isConsumable: () => { return false },
				isUsable: () => { return false },
				isLinked: () => { return false },
				isLocked: () => { return false },
				isAccessible: () => { return true },
			},
		},
		whiteShirt: {
			namespaced: true,
			state: {
				unid: 17,
				name: "whiteShirt",
				label: "White",
				image: { default: 'whiteShirt.png', used: null },
				keyItem: false,
				placement: null,
				tracked: false,
				used: false,
				questChain: null
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveDefCastArmor },
				canDisplay: (state, getters, rootState, rootGetters) => { return getters.isIncentivized },
				isConsumable: () => { return false },
				isUsable: () => { return false },
				isLinked: () => { return false },
				isLocked: () => { return false },
				isAccessible: () => { return true },
			},
		},
		powerGauntlet: {
			namespaced: true,
			state: {
				unid: 18,
				name: "powerGauntlet",
				label: "Power",
				image: { default: 'powerGauntlet.png', used: null },
				keyItem: false,
				placement: null,
				tracked: false,
				used: false,
				questChain: null
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveOtherCastArmor },
				canDisplay: (state, getters, rootState, rootGetters) => { return getters.isIncentivized },
				isConsumable: () => { return false },
				isUsable: () => { return false },
				isLinked: () => { return false },
				isLocked: () => { return false },
				isAccessible: () => { return true },
			},
		},
		defense: {
			namespaced: true,
			state: {
				unid: 19,
				name: "defense",
				label: "Defense",
				image: { default: 'defense.png', used: null },
				keyItem: false,
				placement: null,
				tracked: false,
				used: false,
				questChain: null
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveDefCastWeapon },
				canDisplay: (state, getters, rootState, rootGetters) => { return getters.isIncentivized },
				isConsumable: () => { return false },
				isUsable: () => { return false },
				isLinked: () => { return false },
				isLocked: () => { return false },
				isAccessible: () => { return true },
			},
		},
		thorHammer: {
			namespaced: true,
			state: {
				unid: 20,
				name: "thorHammer",
				label: "Thor",
				image: { default: 'thorHammer.png', used: null },
				keyItem: false,
				placement: null,
				tracked: false,
				used: false,
				questChain: null
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveOffCastWeapon },
				canDisplay: (state, getters, rootState, rootGetters) => { return getters.isIncentivized },
				isConsumable: () => { return false },
				isUsable: () => { return false },
				isLinked: () => { return false },
				isLocked: () => { return false },
				isAccessible: () => { return true },
			},
		},
    },
	getters: {
		incentives: (state, getters, rootState, rootGetters) => {
			return Object.keys(rootState.items).filter(item => {
				return (rootGetters[`items/${item}/isIncentivized`] && !rootGetters[`items/${item}/isLinked`])
			})
		},
		junkCount: (state, getters, rootState, rootGetters) => {
			return Math.max(0, (rootGetters[`locations/incentives`].length - rootGetters[`items/incentives`].length))
		},
	},
    mutations: {
        track(state, payload) {
            state[payload.name].tracked = true
        },
		activate(state, payload) {
            state[payload.name].activated = true
        },
		use(state, payload) {
            state[payload.name].used = true
        },
		untrack(state, payload) {
            state[payload.name].tracked = false
        },
		deactivate(state, payload) {
            state[payload.name].activated = false
        },
		unuse(state, payload) {
            state[payload.name].used = false
        },
    },
}
