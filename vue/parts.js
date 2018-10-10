Vue.component('Tracker', {
	props: [ 'orbs', 'items', 'locations', 'flags' ],
	template: `
	<div id="tracker-app" class="panel">
		<GameStateInfo :orbs="orbs" :flags="flags" :items="items" :locations="locations" />
		<ItemInfo :items="items" :flags="flags" />
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
				return (vm.items[item].tracked || vm.items[item].locked)
			}).length
		}
	},
	template: `
	<div id="orbTracker">
		<div id="orb-area">
			<Orb class="item" v-for="orb in orbs"  :orb="orb" :key="orb.name" />
		</div>
		<div id="scaleArea">
			{{keyItemCount}}
		</div>
	</div>
	`,
})

Vue.component('Orb', {
	props: [ 'orb' ],
	template: `
	<div class="noselect" @click="" @contextmenu.prevent="">
		<div class="iconContainer">
			<img class="icon" :src="orb.img" :class="{ dim: !this.orb.tracked }">
		</div>
		<div class="itemLabel">
			{{orb.name}}
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
	},
	methods: {
		triggerItem: function() {
			var self = this.item
			if (this.haveItem) { 
				console.log(`${self.name} is already tracked.`)
				console.log(`Is this item consumable? ${Boolean(self.consumable)}`)
				if (self.consumable) {
					console.log(`${self.name} is consumable. Let's use it.`)
				}
			}
			else { 
				console.log(`You're trying to track ${this.item.name}.`)
			}
		},
	},
	template: `
	<div class="noselect" @click="triggerItem" @contextmenu.prevent="">
		<div class="iconContainer">
			<img class="icon" :src="item.img" :class="{ dim: !this.haveItem, dark: !this.item.accessible }">
		</div>
		<div class="itemLabel">
			{{item.name}}
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
	template: `
	<div id="locationTracker">
        <Location class="item" v-for="location in displayList" :location="location" :key="location.name" />
    </div>
	`,
})

Vue.component('Location', {
	props: [ 'location' ],
	template: `
	<div class="noselect" @click="" @contextmenu.prevent="">
		<div class="iconContainer">
			<img class="icon" :src="location.img" :class="{ dim: !this.location.tracked, dark: !this.location.accessible }">
		</div>
		<div class="itemLabel">
			{{location.name}}
		</div>
	</div>
	`,
})

// Info section
// Contains information for scaling and orb count
/*
Vue.component('Info-Section', {
	props: [ 'orbs', 'tracker', 'items', 'locations' ],
	template: `			
	<div id="orbTracker">
		<div id="orb-area">
			<Orb class="item" v-for="orb in orbs"  :orb="orb" :key="orb.name" :status="tracker.orbs[orb.name]" />
		</div>
		<div id="scaleArea">
		</div>
	</div>
	`,
})

Vue.component('Orb', {
	props: [ 'orb', 'status' ],
	template: `
	<div class="noselect" @click="" @contextmenu.prevent="">
		<div class="iconContainer">
			<img class="icon" :src="orb.img" :class="{ dim: !this.status.tracked }">
		</div>
		<div class="itemLabel">
			{{orb.label}}
		</div>
	</div>
	`,
})


Vue.component('Key-Item-Section', {
	props: [ 'items', 'itemDisplay', 'tracker' ],
	template: `
	<div id="itemTracker">
		<Item class="item" v-for="item in itemList" :item="item" :key="item.name" :status="tracker.items[item.name]" />
	</div>
	`,
  computed: {
		itemList: function() { 
			var arr = [];
			for (i = 0; i < this.itemDisplay.length; i++) {
				arr.push(this.items[this.itemDisplay[i]])
			}
			return arr;
		},
	},
})

Vue.component('Item', {
	props: [ 'item', 'status' ],
	template: `
	<div class="noselect" @click="" @contextmenu.prevent="">
		<div class="iconContainer">
			<img class="icon" :src="item.img" :class="{ dim: !this.status.tracked }">
		</div>
		<div class="itemLabel">
			{{item.label}}
		</div>
	</div>
	`,
})

Vue.component('Location-Section', {
    props: [ 'locations', 'locationDisplay', 'tracker' ],
    template: `
    <div id="locationTracker">
        <Location class="item" v-for="place in locationList" :place="place" :key="place.name" :status="tracker.locations[place.name]" />
    </div>
    `,
	computed: {
		locationList: function() { 
			var arr = [];
			for (i = 0; i < this.locationDisplay.length; i++) {
				arr.push(this.locations[this.locationDisplay[i]])
			}
			return arr;
		},
	},
})

Vue.component('Location', {
	props: [ 'place', 'status' ],
	template: `
	<div class="noselect" @click="" @contextmenu.prevent="">
		<div class="iconContainer">
			<img class="icon" :src="place.img" :class="{ dim: !this.status.tracked }">
		</div>
		<div class="itemLabel">
			{{place.label}}
		</div>
	</div>
	`,
	methods: {
	},
	computed: {
	}
})
*/