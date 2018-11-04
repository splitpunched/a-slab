const logic = {
	modules: {
		access: {
			namespaced: true,
			getters: {
				canFly: (state, getters, rootState, rootGetters) => { return rootState.items.airship.tracked || rootGetters.flagset.freeAirship },
				canRow: (state, getters, rootState, rootGetters) => { return rootState.items.canoe.tracked },
				canCross: (state, getters, rootState, rootGetters) => { return rootState.items.bridge.tracked || rootGetters.flagset.freeBridge },
				canSailSea: (state, getters, rootState, rootGetters) => { return rootState.items.ship.tracked },
				canSailOcean: (state, getters, rootState, rootGetters) => { return rootState.items.ship.tracked && rootState.items.canal.tracked },
			}
		},
		map: {
			namespaced: true,
			getters: {
				pravoka: (state, getters, rootState, rootGetters) => { 
					var flagset = rootGetters.flagset
					if (flagset.mapOpenProgression && rootGetters['access/canRow']) { return true }
					else { return (rootGetters['access/canSailSea'] || rootGetters['access/canCross'] || rootGetters['access/canFly']) }
				},
				elfland: (state, getters, rootState, rootGetters) => { 
					var flagset = rootGetters.flagset
					if (flagset.extendedOpenProgression) { return true }
					else if (flagset.mapOpenProgression && rootGetters['access/canRow']) { return true }
					else { return (rootGetters['access/canSailSea'] || rootGetters['access/canFly']) }
				},
				melmond: (state, getters, rootState, rootGetters) => { 
					var flagset = rootGetters.flagset
					return (rootGetters['access/canSailSea'] || rootGetters['access/canFly'])
				},
				crescent: (state, getters, rootState, rootGetters) => { 
					var flagset = rootGetters.flagset
					if (flagset.mapOpenProgression && rootGetters['access/canRow']) { return true }
					else { return (rootGetters['access/canSailOcean'] || rootGetters['access/canFly']) }
				},
				volcano: (state, getters, rootState, rootGetters) => { 
					var flagset = rootGetters.flagset
					if (flagset.mapOpenProgression && rootGetters['access/canRow']) { return true }
					else { return ((rootGetters['access/canSailOcean'] && rootGetters['access/canRow']) || rootGetters['access/canFly']) }
				},
				ordeals: (state, getters, rootState, rootGetters) => { 
					var flagset = rootGetters.flagset
					if (!rootGetters['access/canRow']) { return false }
					else { return (rootGetters['access/canSailOcean'] || rootGetters['access/canFly']) }
				},
				onrac: (state, getters, rootState, rootGetters) => { 
					var flagset = rootGetters.flagset
					if (flagset.mapOpenProgression && rootGetters['access/canSailOcean']) { return true }
					else { return (rootGetters['access/canRow'] || rootGetters['access/canFly']) }
				},
				mirage: (state, getters, rootState, rootGetters) => { 
					var flagset = rootGetters.flagset
					if (flagset.mapOpenProgression && rootGetters['access/canSailOcean']) { return true }
					else { return rootGetters['access/canFly'] }
				}
			},
		},
	},
}