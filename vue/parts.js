// Info section
// Contains information for scaling and orb count
Vue.component('Info-Section', {
	props: [ 'orbs', 'flags', 'tracker', 'items' ],
	template: `			
	<div id="orbTracker">
		<div id="orb-area">
			<Orb class="item" v-for="orb in orbs"  :orb="orb" :key="orb.name" :status="tracker[orb.name]" />
		</div>
		<div id="scaleArea">
			<span id="scaling">{{scale}}x</span>
			<span id="counting">{{keyItemDisplay}}</span>
		</div>
	</div>
	`,
	computed: {
		keyItemDisplay: function() {
			if (this.keyItemCount == 1) { return `${this.keyItemCount} key item` }
			else return `${this.keyItemCount} key items`
		},
		keyItemCount: function() {
			keyItems = Object.keys(items).filter(function(key) { return items[key].keyItem && tracker[items[key].name].tracked })
			return keyItems.length;
		},
		scale: function() { return (this.flags.expMultiplier * (1 + (this.keyItemCount * .05))).toFixed(2) },
	},
	methods: {
		trackOrb: function(name) { tracker[name].tracked = true; },
		undoOrb: function(name) { tracker[name].tracked = false; },
	},
	mounted: function() {
		this.$root.$on('track-orb', this.trackOrb)
		this.$root.$on('undo-orb', this.undoOrb)
	}
})

Vue.component('Orb', {
	props: [ 'orb', 'status' ],
	template: `
	<div class="noselect" @click="track" @contextmenu.prevent="undo">
		<div class="iconContainer">
			<img class="icon" :src="orb.img" :class="{ dim: !status.tracked }">
		</div>
		<div class="itemLabel">
			{{orb.label}}
		</div>
	</div>
	`,
	methods: {
		track: function() { if (!this.status.tracked) { this.$root.$emit('track-orb', this.orb.name) } },
		undo: function() { if (this.status.tracked) { this.$root.$emit('undo-orb', this.orb.name) } }
	},
	computed: {
	},
})

// Key item section - contains key items/quest items/etc.
// Should probably include something so that this can contain other incentives that aren't typically
// 'key items', such as Masamune, etc. 

Vue.component('Key-Item-Section', {
	props: [ 'items', 'flags', 'itemList', 'tracker' ],
	template: `
	<div id="itemTracker">
		<Item class="item" v-for="item in itemList" :item="item" :key="item.name" :status="tracker[item.name]" />
	</div>
	`,
	methods: {
        trackItem: function (name) {
            tracker[name].tracked = true;
            if (items[name].linked) { this.$root.$emit('track-linked-location', items[name].linked) }
        },
        deliverItem: function (name) { tracker[name].delivered = true; },

        trackLinkedItem: function (name) {
            if (tracker[items[name].prev].tracked && !tracker[name].tracked) { this.$root.$emit('goto-next-item', { name: items[name].prev, next: name }) }
            tracker[name].tracked = true;
        },
		
		// There has to be a better way to code this than what I'm doing now...
		gotoNextItem: function(data) {
			var myNum = itemList.indexOf(itemList.filter(function(item) { return item.name == data.name })[0])
			itemList.splice(myNum, 1, items[data.next])
			this.$root.$emit('track-item', data.next)
		},
        undoItem: function (name) {
            tracker[name].tracked = false
            if (items[name].linked) { this.$root.$emit('undo-linked-location', items[name].linked) }
        },
        returnItem: function(name) { tracker[name].delivered = false },
        // arghhh
        gotoPrevItem: function(data) {
          this.$root.$emit('undo-item', data.name)
          var myNum = itemList.indexOf(itemList.filter(function(item) { return item.name == data.name })[0])
          itemList.splice(myNum, 1, items[data.prev])
        },
	},
	mounted: function() {
        this.$root.$on('track-item', this.trackItem)
        this.$root.$on('track-linked-item', this.trackLinkedItem)
	    this.$root.$on('deliver-item', this.deliverItem)
	    this.$root.$on('goto-next-item', this.gotoNextItem)
        this.$root.$on('goto-prev-item', this.gotoPrevItem)
        this.$root.$on('undo-item', this.undoItem)
        this.$root.$on('return-item', this.returnItem)
	},
})

Vue.component('Item', {
	props: [ 'item', 'status' ],
	template: `
	<div class="noselect" @click="track" @contextmenu.prevent="undo">
		<div class="iconContainer">
			<img class="icon" :src="image" :class="{ dim: !status.tracked }">
		</div>
		<div class="itemLabel">
			{{item.label}}
		</div>
	</div>
	`,
	methods: {
		track: function() {
			// If this item is locked (i.e. free bridge/airship) you shouldn't be able to touch it - it's enabled by default.
			if (this.item.locked) { return; }
			
			// If the item isn't tracked, track it.
			if (!this.status.tracked) {
				this.$root.$emit('track-item', this.item.name)
				return
			}
			
			// If this item _is_ tracked but is something that can be consumed, use it.
			if (this.isDeliverable) {
				this.$root.$emit('deliver-item', this.item.name)
				return
			}
			
			// If this item _is_ tracked and there is another item that is to be delivered. This can apply even if the item has been delivered.
			// Being delivered takes priority over next item.
			if (this.nextItemReady) {
				this.$root.$emit('goto-next-item', { name: this.item.name, next: this.item.next })
				return
			}
		},
		undo: function() {
			// If this item is locked (i.e. free bridge/airship) you shouldn't be able to touch it - it's enabled by default.
			if (this.item.locked) { return; }
			
			// Go back in an item chain.
			if (this.prevItemExists) {
				this.$root.$emit('goto-prev-item', { name: this.item.name, prev: this.item.prev })
				return
			}
			
			// Un-deliver an item.
			if (this.wasDelivered) {
				this.$root.$emit('return-item', this.item.name)
				return
			}
			
			if (this.status.tracked) {
				this.$root.$emit('undo-item', this.item.name)
			}
		}
	},
	computed: {
		image: function() {
			if (this.status.delivered && this.item.consumable && this.item.usedImg) { return this.item.usedImg }
			else return this.item.img
		},
		isDeliverable: function() { return (this.status.tracked && this.item.consumable && !this.status.delivered) },
		wasDelivered: function() { return (this.status.tracked && this.item.consumable && this.status.delivered) },
		nextItemReady: function() { return (this.status.tracked && this.item.next) },
		prevItemExists: function() { return (this.status.tracked && this.item.prev) },
	}
})

Vue.component('Location-Section', {
    props: [ 'locations', 'flags', 'locationList', 'tracker' ],
    template: `
    <div id="locationTracker">
        <Location class="item" v-for="place in locationList" :place="place" :key="place.name" :status="tracker[place.name]" />
    </div>
    `,
    methods: {
        trackLocation: function (name) {
            tracker[name].tracked = true;
            var linked = Object.keys(items).filter(function (key) { return items[key].linked == name })
            if (linked.length > 0) { this.$root.$emit('track-linked-item', linked[0]) }
        },
        trackLinkedLocation: function (name) { tracker[name].tracked = true; },
        undoLocation: function (name) { tracker[name].tracked = false },
        undoLinkedLocation: function (name) { tracker[name].tracked = false },
    },
    mounted: function() {
        this.$root.$on('track-location', this.trackLocation)
        this.$root.$on('track-linked-location', this.trackLinkedLocation)
        this.$root.$on('undo-location', this.undoLocation)
        this.$root.$on('undo-linked-location', this.undoLinkedLocation)
    },
})

Vue.component('Location', {
	props: [ 'place', 'status' ],
	template: `
	<div class="noselect" @click="track" @contextmenu.prevent="undo">
		<div class="iconContainer">
			<img class="icon" :src="place.img" :class="{ dim: !status.tracked }">
		</div>
		<div class="itemLabel">
			{{place.label}}
		</div>
	</div>
	`,
	methods: {
		track: function() {
			if (this.place.locked) { return; }
			if (!this.status.tracked) { this.$root.$emit('track-location', this.place.name) }
		},
		undo: function() {
			if (this.place.locked) { return; }
			if (this.status.tracked) { this.$root.$emit('undo-location', this.place.name) }
		}
	},
	computed: {
	}
})
