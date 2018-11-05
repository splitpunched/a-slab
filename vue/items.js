Vue.component('Item', {
    props: ["name", "label", "image", "keyItem", "placement", "tracked", "used", "questChain", "settings", "unid"],
    computed: {
        imgPath: function () { return `icons/${this.settings.icons}` },
        icon: function () { if (!this.used || !this.image.used) { return this.image.default } else { return this.image.used } },
        locked: function () { return this.$store.getters[`items/${this.name}/isLocked`] },
        accessible: function () { return this.$store.getters[`items/${this.name}/isAccessible`] },
        status: function () {
            if (this.used) { return 'used' }
            else if (this.tracked || this.locked) { return 'tracked' }
            else if (this.accessible) { return 'untracked' }
            else { return 'impossible' }
        },
    },
    methods: {
        clickItem: function () {
            var self = this;
            console.log(`${this.name}: ${this.status}`)
            if (this.status == 'impossible') { return }
            if (this.status == 'untracked') {
                store.commit('items/trackItem', { name: this.name })
                // Check to see if there's a linked location here... if there is then do the thing.
            }
        },
    },
    template: `
	<div :id="name" class="noselect entity" @click="clickItem" @contextmenu.prevent="">
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