const orbs = {
    namespaced: true,
    modules: {
        earth: {
            namespaced: true,
            state: {
                unid: 0,
                name: "earth",
                label: "Earth",
                image: { default: 'earth.png', untracked: 'unlit.png' },
                tracked: false,
            },
            getters: {
                isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.floorShuffle || (rootState.items.rod.tracked && (rootGetters.flagset.entranceShuffle || rootGetters['map/melmond'])))}
            }
        },
        fire: {
            namespaced: true,
            state: {
                unid: 1,
                name: "fire",
                label: "Fire",
                image: { default: 'fire.png', untracked: 'unlit.png' },
                tracked: false,
            },
            getters: {
                isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.floorShuffle || rootGetters.flagset.entranceShuffle || rootGetters['map/volcano'])}
            }
        },
        water: {
            namespaced: true,
            state: {
                unid: 2,
                name: "water",
                label: "Water",
                image: { default: 'water.png', untracked: 'unlit.png' },
                tracked: false,
            },
            getters: {
                isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.floorShuffle || rootGetters.flagset.entranceShuffle || (rootGetters['map/onrac'] && rootState.items.oxyale.tracked)) }
            }
        },
        air: {
            namespaced: true,
            state: {
                unid: 3,
                name: "air",
                label: "Air",
                image: { default: 'air.png', untracked: 'unlit.png' },
                tracked: false,
            },
            getters: {
                isAccessible: (state, getters, rootState, rootGetters) => { return (rootGetters.flagset.floorShuffle || (rootState.items.cube.tracked && (rootGetters.flagset.entranceShuffle || (rootState.items.chime.tracked && rootGetters['map/mirage'])))) }
            }
        },
    }
}