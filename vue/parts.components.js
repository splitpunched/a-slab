Vue.component('InfoTracker', {
	template: `
	<div id="infoTracker">
		<OrbTracker />
		<InformationBox />
	</div>
	`,
})

Vue.component('InformationBox', {
	computed: {
		...Vuex.mapState([ 'locations', 'orbs', 'settings', 'items' ]),
		...Vuex.mapGetters({ flagset: 'flagset' }),
		keyItemCount: function() {
			return Object.keys(this.items).filter(item => this.items[item].keyItem && (this.items[item].tracked || this.$store.getters[`items/${item}/isLocked`])).length
		},
		keyItemDisplay: function() {
			if (this.keyItemCount == 1) { return '1 key item' }
			else { return `${this.keyItemCount} key items` }
		},
		expDisplay: function () { 
			var multiplier = this.$store.getters.flagset.expMultiplier
			var flat = this.$store.getters.flagset.expBonus
			var scale = this.$store.getters.flagset.progressiveScale
            if (scale.type == 'progressive') {
                multiplier = (this.$store.getters.flagset.expMultiplier * (1 + (this.keyItemCount * scale.bonus)))
                flat = (this.$store.getters.flagset.expBonus * (1 + (this.keyItemCount * scale.bonus)))
            } else if (scale.type == 'total') { // it's not progressive, just count items
				if (this.keyItemCount >= scale.count) {
					multiplier = (this.$store.getters.flagset.expMultiplier * scale.bonus)
					flat = (this.$store.getters.flagset.expBonus * scale.bonus)
				}
            }
            if (flat == 0) { return `${multiplier.toFixed(2)}x` }
            else { return `${multiplier.toFixed(2)}x + ${Math.round(flat)}` }
		},
	},
	template: `
	<div id="scaleArea">
		<div class="subscale"><a style="word-spacing: -6pt">{{expDisplay}}</a></div>
		<div class="subscale"><a>{{keyItemCount}}</a><img class="glyph" src="glyphs/key.png"></div>
	</div>
	`,
})

Vue.component('FlagsetInput', {
    data: function () {
        return {
            flagset: '',
        }
    },
	mounted: function() {
		this.flagset = this.$store.state.flags.string
	},
	methods: {
		reset: function() {
            store.commit('set', this.flagset)
            store.commit('reset')
		}
	},
    template: `
	<div id="options">
		<input type="text" v-model="flagset">
		<button type="button" v-on:click="reset">Reset</button>
	</div>
	`
})