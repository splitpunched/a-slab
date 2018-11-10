Vue.component('LocationTracker', {
	props:  [ 'locations', 'settings' ],
	computed: {
        displayLocations: function () {
            var vm = this, arr = []
            var list = Object.keys(this.locations).filter(function (loc) { return vm.$store.getters[`locations/${loc}/canDisplay`] == true })
            for (i = 0; i < list.length; i++) { arr.push(vm.$store.state.locations[list[i]]) }
            return arr
        }
	},
	template: `
	<div id="locationTracker">
		<Location v-for="location in displayLocations" :key="location.name" :settings="settings" v-bind="location" />
	</div>
	`
})

Vue.component('Location', {
    props: ["name", "label", "image", "placement", "tracked", "settings", "activates"],
    computed: {
        imgPath: function () { return `icons/${this.settings.icons}` },
        icon: function () { return this.image.default },
        accessible: function () { return this.$store.getters[`locations/${this.name}/isAccessible`] },
		linked: function () { 
			if (!this.$store.getters[`locations/${this.name}/isLinked`]) { return false }
			else { return this.placement.name }
		},
        status: function () {
            if (this.tracked) { return 'tracked' }
            else if (this.accessible) { return 'untracked' }
            else { return 'impossible' }
        },
    },
	methods: {
        click: function () {
            var self = this;
            if (this.status == 'impossible') { return }
            if (this.status == 'untracked') {
                store.commit('locations/track', { name: this.name })
				if (this.activates) { store.commit('items/activate', { name: this.activates} ) }
                if (this.linked) { store.commit('items/track', { name: this.linked }) }
				return
            }
        },
		rclick: function() {
			var self = this;
			if (this.status == ('impossible' || 'untracked')) { return }
			if (this.status == 'tracked') {
				store.commit('locations/untrack', { name: this.name })
				if (this.activates) { store.commit('items/deactivate', { name: this.activates} ) }
				if (this.linked) { store.commit('items/untrack', { name: this.linked }) }
			}
		}
    },
    template: `
	<div :id="name" class="noselect entity" @click="click" @contextmenu.prevent="rclick">
		<div class="iconContainer">
			<img class="icon" :src="imgPath + '/locations/' + icon" :class="status">
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