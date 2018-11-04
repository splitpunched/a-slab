Vue.component('Item', {
	props: [ "name", "label", "image", "keyItem", "placement", "tracked", "used", "questChain", "settings", "unid" ],
	computed: {
		imgPath: function() { return `icons/${this.settings.icons}` },
		icon: function() { if (!this.used || !this.image.used) { return this.image.default } else { return this.image.used } },
		locked: function() { return this.$store.getters[`items/${this.name}/isLocked`] },
		accessible: function() { return this.$store.getters[`items/${this.name}/isAccessible`] },
		status: function() { 
			if (this.used) { return 'used' }
			else if (this.tracked || this.locked) { return null }
			else if (this.accessible) { return 'untracked' }
			else { return 'impossible' }
		},
	},
	methods: {
	},
	template: `
	<div :id="name" class="noselect entity" @click="" @contextmenu.prevent="">
		<div class="iconContainer">
			<img class="icon" :src="imgPath + '/items/' + icon" :class="status">
			<div class="iconOverlay">
				<img class="overlay" :src="imgPath + '/status/flagLocked.png'" v-if="locked">
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

Vue.component('Location', {
	props: ["name", "label", "image", "placement", "tracked", "settings"],
	computed: {
		imgPath: function() { return `icons/${this.settings.icons}` },
		icon: function() { return this.image.default },
		accessible: function() { return this.$store.getters[`locations/${this.name}/isAccessible`] },
		status: function() { 
			if (this.tracked) { return null }
			else if (this.accessible) { return 'untracked' }
			else { return 'impossible' }
		},
	},
	template: `
	<div :id="name" class="noselect entity" @click="" @contextmenu.prevent="">
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