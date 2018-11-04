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
				useAlternateImage: () => { return false },
			},
		},
		king: {
			namespaced: true,
			state: {
				unid: 1,
				name: "king",
				label: "King",
				image: { default: 'king.png' },
				tracked: false,
			},
			getters: {
				isIncentivized: () => { return false },
				isAccessible: () => { return true },
				isLinked: () => { return false },
				canDisplay: () => { return true },
			},
		},
		sara: {
			namespaced: true,
			state: {
				unid: 2,
				name: "sara",
				label: "Sara",
				image: { default: 'sara.png' },
				tracked: false,
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveFreeNPCs && rootGetters.flagset.shuffleNPCItems },
				isAccessible: (state, getters, rootState, rootGetters) => { return rootState.locations.garland.tracked },
				isLinked: (state, getters, rootState, rootGetters) => { return (!rootGetters.flagset.shuffleNPCItems) },
				canDisplay: () => { return true },
			},
		},
		bikke: {
			namespaced: true,
			state: {
				unid: 3,
				name: "bikke",
				label: "Bikke",
				image: { default: 'bikke.png' },
				tracked: false,
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveFreeNPCs && rootGetters.flagset.shuffleNPCItems },
				isAccessible: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.townShuffle || rootGetters['map/pravoka'] },
				isLinked: () => { return false },
				canDisplay: () => { return true },
			},
		},
		marsh: {
			namespaced: true,
			state: {
				unid: 3,
				name: "marsh",
				label: "Marsh",
				image: { default: 'marsh.png' },
				tracked: false,
			},
			getters: {
				isIncentivized: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.incentiveMarsh },
				isAccessible: (state, getters, rootState, rootGetters) => { return rootGetters.flagset.entranceShuffle || rootGetters.flagset.floorShuffle || rootGetters['map/pravoka'] },
				isLinked: () => { return false },
				canDisplay: () => { return true },
			},
		},
	}
}