Vue.component('ItemTracker', {
	computed: {
		items: function() { return this.$store.state.items },
		settings: function() { return this.$store.state.settings },
		displayItems: function() {
			var vm = this, arr = []
			var list = Object.keys(this.items).filter(function(item) { return vm.$store.getters[`items/${item}/canDisplay`] == true })
			for (i = 0; i < list.length; i++) { arr.push(vm.$store.state.items[list[i]]) }
			return arr
        },
	},
	template: `
	<div id="itemTracker">
		<Item v-for="item in displayItems" :key="item.name" :settings="settings" v-bind="item" />
	</div>
	`
})

Vue.component('Item', {
    props: ["name", "label", "image", "keyItem", "placement", "target", "tracked", "used", "questChain", "settings", "unid", "activated", "activator"],
    computed: {
        imgPath: function () { return `icons/${this.settings.icons}` },
        icon: function () { return (this.image[this.status] || this.image.default) },
        locked: function () { return this.$store.getters[`items/${this.name}/isLocked`] },
		usable: function () { return (!this.used && this.$store.getters[`items/${this.name}/isUsable`]) },
        accessible: function () { return this.$store.getters[`items/${this.name}/isAccessible`] },
		canActivate: function() { return (this.name == "slab" || this.name == "bottle") && this.tracked && !this.activated && this.$store.getters[`items/${this.name}/canActivate`] },
		itemChain: function() { 
			if (!this.questChain) { return null }
			else if (this.$store.getters.flagset.shuffleFetchItems) { return (this.questChain.shuffleFetchItems || this.questChain.default) }
			else { return this.questChain.default || null }
		},
		nextItem: function () { 
			if (!this.linked && !this.itemChain) { return false }
			else { return this.itemChain[this.itemChain.indexOf(this.name)+1] || null }
		},
		linked: function () { 
			if (!this.$store.getters[`items/${this.name}/isLinked`]) { return false }
			else { return this.placement.name }
		},
        status: function () {
            if (this.used) { return 'used' }
			else if (this.activated) { return 'activated' }
            else if (this.tracked || this.locked) { return 'tracked' }
            else if (this.accessible) { return 'untracked' }
            else { return 'impossible' }
        },
    },
    methods: {
        click: function () {
            var self = this;
            if (this.status == 'impossible' || this.locked) { return }
            if (this.status == 'untracked') {
                store.commit('items/track', { name: this.name })
                if (this.linked) { store.commit('locations/track', { name: this.linked }) }
				return;
            }
			if (this.status == 'tracked' || this.status == 'activated') {
				if (!this.usable && !this.canActivate) { return }
				if (this.canActivate) { 
					console.log(`${this.name}: activating`)
					store.commit('items/activate', { name: this.name })
					if (this.activator) { store.commit('locations/track', { name: this.activator }) }
					// At some point we need the 'trigger Dr. Unne' thing here.
					return;
				}
				else { 
					if (this.nextItem) {
						console.log(`${this.name}: tracking next item in chain, ${this.nextItem}`)
						store.commit('items/track', { name: this.nextItem }) 
						console.log(`${this.nextItem}: tracking`)
					}
					else { 
						store.commit('items/use', { name: this.name }) 
						console.log(`${this.name}: using`)
					}
					if (this.target) {
						console.log(`${this.name}: handed in item to ${this.target.name}`)
						console.log(`${this.target.name}: tracking`)
						store.commit('locations/track', { name: this.target.name }) 
					}
				}
			}
        },
		//
		rclick: function() {
			var self = this;
			if (this.status == ('impossible' || 'untracked') || this.locked) { return }
			if (this.status == 'used') { 
				store.commit('items/unuse', { name: this.name })
				return 
			}
			if (this.status == 'activated') { 
				store.commit('items/deactivate', { name: this.name })
				if (this.activator) { store.commit('locations/untrack', { name: this.activator }) }
			}
			if (this.status == 'tracked') { 
				store.commit('items/untrack', { name: this.name })
				if (this.linked) { store.commit('locations/untrack', { name: this.linked }) }
				return
			}
		}
    },
    template: `
	<div :id="name" class="noselect entity" @click="click" @contextmenu.prevent="rclick">
		<div class="iconContainer">
			<img class="icon" :src="imgPath + '/items/' + icon" :class="status">
			<div class="iconOverlay">
				<img class="overlay" :src="imgPath + '/status/flagLocked.png'" v-if="locked">
				<img class="overlay" :src="imgPath + '/status/arrow.png'" v-if="usable || canActivate">
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