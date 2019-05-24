Vue.component('OrbTracker', {
	computed: {
		...Vuex.mapState([ 'orbs', 'settings', ]),
	},
	template: `
	<div id="orb-area">
		<Orb v-for="orb in orbs" :key="orb.name" :settings="settings" v-bind="orb" />
	</div>
	`
})

Vue.component('ShardTracker', {
	data: function() {
		return {
			count: 0,
		}
	},
	computed: {
		...Vuex.mapState([ 'settings' ]),
		imgPath: function () { return `icons/${this.settings.icons}` },
		extraShards: function () { return this.$store.getters.flagset.extraShards },
		maxShards: function() { if (this.extraShards) { return 30 } else { return 16 } },
		emptyShards: function() { return this.maxShards - this.count },
	},
	mounted: function() {
		this.$root.$on('reset', this.resetCount)
	},
	methods: {
		increment: function() {
			if (this.count < this.maxShards) { this.count++ }
		},
		decrement: function() {
			if (this.count > 0) { this.count-- }
		},
		resetCount: function() { 
			this.count = 0
		},
	},
	template: `
	<div id="shard-area" @click="increment" @contextmenu.prevent="decrement">
		<div id="shard-tracker" :class="{ extra: extraShards }">
			<div v-for="n in count" class="shard-container"><img class="shard" :src="imgPath + '/orbs/shard.png'"></div>
			<div v-for="n in emptyShards" class="shard-container"><img class="shard" :src="imgPath + '/orbs/unlitShard.png'"></div>
		</div>
		<div id="shard-text">
			<a>{{count}}/{{maxShards}}</a>
		</div>
	</div>
	`
})

Vue.component('Shard', {
	computed: {
		...Vuex.mapState([ 'settings' ]),
		imgPath: function () { return `icons/${this.settings.icons}` },
	},
	template: `
	`
})

Vue.component('Orb', {
    props: ["name", "label", "image", "tracked", "settings"],
    computed: {
        imgPath: function () { return `icons/${this.settings.icons}` },
        icon: function () { if (!this.tracked) { return this.image.untracked } else { return this.image.default } },
        accessible: function () { return this.$store.getters[`orbs/${this.name}/isAccessible`] },
        status: function () {
            if (this.tracked) { return 'tracked' }
            else if (this.accessible) { return 'untracked' }
            else { return 'impossible' }
        },
        letter: function () {
            return this.name.charAt(0).toUpperCase()
        }
    },
	methods: {
        click: function () {
            var self = this;
            if (this.status == 'untracked') { store.commit('orbs/track', { name: this.name }) }
        },
        rclick: function () {
            var self = this;
            if (this.status == 'tracked') { store.commit('orbs/untrack', { name: this.name }) }
        }
    },
    template: `
	<div :id="name" class="noselect entity orb" @click="click" @contextmenu.prevent="rclick">
		<div class="iconContainer">
			<img class="icon" :src="imgPath + '/orbs/' + icon" :class="status">
			<div class="iconOverlay">
			</div>
		</div>
		<div class="itemLabel">
			<div class="labelContainer">
				<a>{{label}}</a>
			</div>
		</div>
	</div>
	`,
})