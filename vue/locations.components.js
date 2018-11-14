Vue.component('LocationTracker', {
	computed: {
		...Vuex.mapState([ 'locations', 'settings', ]),
		...Vuex.mapGetters({ 'looseItems': 'locations/looseItems' }),
        displayLocations: function () {
            var vm = this, arr = []
            var list = Object.keys(this.locations).filter(function (loc) { return vm.$store.getters[`locations/${loc}/canDisplay`] == true })
            for (i = 0; i < list.length; i++) { arr.push(vm.$store.state.locations[list[i]]) }
            return arr
        },
		
	},
	template: `
	<div id="locationTracker">
		<Location v-for="location in displayLocations" :key="location.name" :settings="settings" v-bind="location" />
		<LooseItem v-if="this.looseItems.max > 0" />
	</div>
	`
})

Vue.component('Location', {
    props: ["name", "label", "image", "placement", "tracked", "settings", "activates"],
    computed: {
        imgPath: function () { return `icons/${this.settings.icons}` },
        icon: function () {
			if (this.$store.getters[`locations/${this.name}/useAlternateImage`]) { return this.image.alternate }
			else { return this.image.default }
		},
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

Vue.component('LooseItem', {
	data: function() { 
		return { 
			count: 0,
		}
	},
	computed: {
		imgPath: function () { return `icons/${this.settings.icons}` },
        icon: function () { return 'extra.png' },
		...Vuex.mapState([ 'settings', ]),
		...Vuex.mapGetters({ 'extra': 'locations/looseItems' }),
		display: function() {
			if (this.extra.min > 0 && this.count <= this.extra.min) { return this.count + "/" + this.extra.min }
			if (this.extra.min > 0 && this.count > this.extra.min) { return this.count + "/" + this.extra.max }
			return this.count
		},
		overlayClasses: function() {
			return {
				required: (this.count == this.extra.min && this.count < this.extra.max),
				over: (this.count > this.extra.min && this.count < this.extra.max),
				maxed: (this.count == this.extra.max),
			}
		},
	},
	methods: {
		increment: function() {
			if (this.count < this.extra.max) { this.count++ }
		},
		decrement: function() {
			if (this.count > 0) { this.count-- }
		},
		resetCount: function() { this.count = 0 }
	},
	mounted: function() {
		this.$root.$on('reset', this.resetCount);
	},
	template: `
	<div class="noselect entity" @click="increment" @contextmenu.prevent="decrement">
		<div class="iconContainer">
			<img class="icon" :src="imgPath + '/locations/' + icon" :class="{ untracked: (this.count < this.extra.min), moderate: (this.count < this.extra.min && this.count > 0) }">
			<div class="iconOverlay">
				<div class="overlay" :class="overlayClasses">{{display}}</div>
			</div>
		</div>
		<div class="itemLabel">
			<div class="labelContainer">
				<a>Extra</a>
			</div>
		</div>
	</div>
	`,
})