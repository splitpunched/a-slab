Vue.component('Tracker', {
	props: [ 'orbs', 'items', 'locations', 'flags' ],
	computed: {
		incentives: function() {
			var incentives = {}
			incentives.items = Object.keys(vm.items).filter(function(item) {
				return (vm.items[item].incentive == true && vm.items[item].linked == false)
			})
			incentives.locations = Object.keys(vm.locations).filter(function(loc) {
				return vm.locations[loc].incentive == true
			})
			return incentives
		},
	},
	template: `
	<div id="tracker-app" class="panel">
		<GameStateInfo :orbs="orbs" :flags="flags" :items="items" :locations="locations" />
		<div class="divider" />
		<ItemInfo :items="items" :flags="flags" />
		<div class="divider" />
		<LocationInfo :locations="locations" :flags="flags" />
	</div>
	`,
})

Vue.component('GameStateInfo', {
	props: [ 'orbs', 'flags', 'items', 'locations' ],
	data: function() { return {
		test: "test",
	}},
	computed: {
		keyItemCount: function() {
			var vm = this;
			return Object.keys(this.items).filter(function(item) {
				return ((vm.items[item].tracked || vm.items[item].locked) && vm.items[item].keyItem)
			}).length
		},
		keyItemDisplay: function() {
			var vm = this;
			var keyText = function() {
				if (vm.keyItemCount == 1) { return 'key item' }
				else { return 'key items' }
			}()
			return `${this.keyItemCount} ${keyText}`
        },
        expDisplay: function () {
            var vm = this, scale = vm.flags.progressiveScale, multiplier = vm.flags.expMultipler, flat = vm.flags.expBonus
            if (scale.type == 'progressive') {
                multiplier = (vm.flags.expMultiplier * (1 + (this.keyItemCount * scale.bonus)))
                flat = (vm.flags.expBonus * (1 + (this.keyItemCount * scale.bonus)))
            } else if (scale.type == 'total') { // it's not progressive, just count items
				if (this.keyItemCount >= scale.count) {
					multiplier = (vm.flags.expMultiplier * scale.bonus)
					flat = (vm.flags.expBonus * scale.bonus)
				}
            }
            if (flat == 0) { return `${multiplier.toFixed(2)}x` }
            else { return `${multiplier.toFixed(2)}x + ${Math.round(flat)}` }
        }
	},
	methods: {
		trackOrb: function(orb) {
			console.log(orb)
			this.$root.orbData[orb.name].tracked = true
		},
		detrackOrb: function(orb) {
			this.$root.orbData[orb.name].tracked = false
		},
	},
	mounted: function() {
		this.$root.$on('track-orb', this.trackOrb);
		this.$root.$on('detrack-orb', this.detrackOrb);
	},
	template: `
	<div id="orbTracker">
		<div id="orb-area">
			<Orb class="item" v-for="orb in orbs"  :orb="orb" :key="orb.name" />
		</div>
		<div id="scaleArea">
			<div class="subscale"><a style="word-spacing: -6pt">{{expDisplay}}</a></div>
			<div class="subscale"><a>{{keyItemDisplay}}</a></div>
		</div>
	</div>
	`,
})

Vue.component('Orb', {
	props: [ 'orb' ],
	methods: {
		lightOrb: function() {
			var self = this.orb
			if (!self.accessible || self.tracked) { return }
			else { this.$root.$emit('track-orb', self) }
		},
		dimOrb: function() {
			var self = this.orb
			if (!self.tracked) { return }
			else { this.$root.$emit('detrack-orb', self) }
		},
	},
	template: `
	<div class="noselect" @click="lightOrb" @contextmenu.prevent="dimOrb">
		<div class="iconContainer">
			<img class="icon" :src="orb.img" :class="{ dim: !this.orb.tracked, dark: !this.orb.accessible }">
		</div>
		<div class="itemLabel">
			{{orb.label}}
		</div>
	</div>
	`,
})

Vue.component('ItemInfo', {
	props: [ 'items', 'flags' ],
	computed: {
		displayList: function() {
			var vm = this, arr = []
			var list = Object.keys(vm.items).filter(function(item) {
				return vm.items[item].display == true
			})
			for (i = 0; i < list.length; i++) {
				arr.push(vm.items[list[i]])
			}
			return arr
		}
	},
	methods: {
		trackItem: function(item) {
			this.$root.itemData[item.name].tracked = true
		},
		useItem: function(item) {
			this.$root.itemData[item.name].used = true
		},
		detrackItem: function(item) {
			this.$root.itemData[item.name].tracked = false
		},
		unuseItem: function(item) {
			this.$root.itemData[item.name].used = false
		},
	},
	mounted: function() {
		this.$root.$on('track-item', this.trackItem);
		this.$root.$on('use-item', this.useItem);
		this.$root.$on('detrack-item', this.detrackItem);
		this.$root.$on('unuse-item', this.unuseItem);
	},
	template: `
	<div id="itemTracker">
		<Item class="item" v-for="item in displayList" :item="item" :key="item.name" />
	</div>
	`,
})

Vue.component('Item', {
	props: [ 'item' ],
	computed: {
		haveItem: function() {
			if (this.item.tracked || this.item.locked) { return true }
			else { return false }
		},
		canGetNext: function() {
			var self = this.item
			if (!self.tracked) { return false }
			if (!self.next && !self.consumable) { return false }
			if (self.tracked && self.consumable && !self.used) { return self.accessible }
			if (self.next) { return this.$root.items[self.next].accessible }
		},
		noAccess: function() {
			if (!this.item.tracked && !this.item.accessible) { return true }
			else { return false }
		},
		image: function() {
			var self = this.item
			if (self.used && self.usedImg) { return self.usedImg }
			else { return self.img }
		},
	},
	methods: {
		triggerItem: function() {
			var self = this.item
			if (!this.item.accessible) { 
				return 
			}
			if (!this.haveItem) { 
				this.$root.$emit('track-item', self)
				return;
			}
			else { 
				if (self.consumable && !self.used) {
					this.triggerItemUse()
					return
				}
				if (self.next) {
					var nextItem = this.$root.items[self.next]
					if (this.$root.items[self.next].accessible) {
						this.$root.$emit('track-item', nextItem)
						if (nextItem.linked) {
							var linkedLocation = this.$root.locations[nextItem.linked]
							this.$root.$emit('track-location', linkedLocation)
						}
						return;
					} else {
						console.log(`${self.next} can't be accessed yet.`)
					}
				}
			}
		},
		triggerItemUse: function() {
			var self = this.item
			this.$root.$emit('use-item', self)
		},
		cancelItem: function() {
			var self = this.item
			if (!this.haveItem) { 
				return;
			}
			if (self.consumable && self.used) {
				this.$root.$emit('unuse-item', self)
				return
			}
			else {
				this.$root.$emit('detrack-item', self)
				if (self.linked) {  
					var linked = this.$root.locations[self.linked]
					this.$root.$emit('detrack-location', linked)
				}
			}
		}
	},
	template: `
	<div class="noselect" @click="triggerItem" @contextmenu.prevent="cancelItem">
		<div class="iconContainer">
			<img class="icon" :src="image" :class="{ dim: !this.haveItem, dark: noAccess }">
			<div class="iconOverlay">
				<img class="overlay" src="icons/status/arrow.png" v-if="canGetNext">
				<img class="overlay" src="icons/status/flagLocked.png" v-if="item.locked">
			</div>
		</div>
		<div class="itemLabel">
			<div class="labelContainer">
				<a>{{item.label}}</a>
				<div class="strike" v-if="item.used"/>
			</div>
		</div>
	</div>
	`,
})

//

Vue.component('LocationInfo', {
	props: [ 'locations', 'flags' ],
	computed: {
		displayList: function() {
			var vm = this, arr = []
			var list = Object.keys(vm.locations).filter(function(loc) {
				return vm.locations[loc].display == true
			})
			for (i = 0; i < list.length; i++) {
				arr.push(vm.locations[list[i]])
			}
			return arr
		}
	},
	methods: {
		trackLocation: function(location) {
			this.$root.locationData[location.name].tracked = true
		},
		detrackLocation: function(location) {
			this.$root.locationData[location.name].tracked = false
		},
	},
	mounted: function() {
		this.$root.$on('track-location', this.trackLocation);
		this.$root.$on('detrack-location', this.detrackLocation);
	},
	template: `
	<div id="locationTracker">
        <Location class="item" v-for="location in displayList" :location="location" :key="location.name" />
    </div>
	`,
})

Vue.component('Location', {
	props: [ 'location' ],
	template: `
	<div class="noselect" @click="triggerLocation" @contextmenu.prevent="cancelLocation">
		<div class="iconContainer">
			<img class="icon" :src="location.img" :class="{ dim: !this.location.tracked, dark: !this.location.accessible }">
			<div class="iconOverlay">
				<!--<img class="overlay" src="icons/status/locked.png" v-if="noToggle">-->
			</div>
		</div>
		<div class="itemLabel">
			{{location.label}}
		</div>
	</div>
	`,
	methods: {
		triggerLocation: function() {
			var self = this.location, vm = this
			if (!self.accessible) { return }
			this.$root.$emit('track-location', self)
			if (this.linkedItem) {
				var linked = vm.$root.items[this.linkedItem]
				vm.$root.$emit('track-item', linked)
			}
		},
		cancelLocation: function() {
			var self = this.location
			if (!this.linkedItem) { 
				this.$root.$emit('detrack-location', self)
				return
			}
			if (!this.noToggle) {
				var linked = this.$root.items[this.linkedItem]
				this.$root.$emit('detrack-location', self)
				this.$root.$emit('detrack-item', linked)
				return
			}
		}
	},
	computed: {
		linkedItem: function() {
			var self = this.location, vm = this
			var arr = Object.keys(this.$root.items).filter(function(item) { 
				return vm.$root.items[item].linked == self.name 
			})
			if (arr.length == 0) { return false }
			else { return arr[0] }
		},
		noToggle: function() {
			if (!this.linkedItem) { return false }
			var linked = this.$root.items[this.linkedItem]
			if (!this.$root.itemData[linked.next]) { return false }
			return this.$root.itemData[linked.next].tracked
		}
	}
})

Vue.component('Options', {
    data: function () {
        return {
            flagtext: "",
        }
    },
    mounted: function () {
        this.flagtext = this.$root.flagset
    },
	methods: {
		resetFlags: function() {
			var vm = this.$root
			if (this.flagtext.length !== 27) { return }
			vm.flagset = this.flagtext
			for (i = 0; i < Object.keys(vm.itemData).length; i++) {
				var item = Object.keys(vm.itemData)[i]
				vm.itemData[item].tracked = false
				vm.itemData[item].used = false
			}
			for (i = 0; i < Object.keys(vm.locationData).length; i++) {
				var place = Object.keys(vm.locationData)[i]
				vm.locationData[place].tracked = false
			}
			for (i = 0; i < Object.keys(vm.orbData).length; i++) {
				var orb = Object.keys(vm.orbData)[i]
				vm.orbData[orb].tracked = false
			}
		},
	},
	template: `
	<div id="options">
		<input type="text" v-model="flagtext">
		<button type="button" v-on:click="resetFlags">Reset</button>
	</div>
	`
})