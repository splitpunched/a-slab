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
    },
	methods: {
        click: function () {
            var self = this;
            if (this.status == 'untracked') { store.commit('orbs/track', { name: this.name }) }
        },
    },
    template: `
	<div :id="name" class="noselect entity orb" @click="click" @contextmenu.prevent="">
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