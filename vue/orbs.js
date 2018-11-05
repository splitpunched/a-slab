Vue.component('OrbTracker', {

})

Vue.component('Orb', {
    props: ["name", "label", "image", "tracked", "settings"],
    computed: {
        imgPath: function () { return `icons/${this.settings.icons}` },
        icon: function () { if (!this.tracked) { return this.image.untracked } else { return this.image.default } },
        accessible: function () { return this.$store.getters[`orbs/${this.name}/isAccessible`] },
        status: function () {
            if (this.tracked) { return null }
            else if (this.accessible) { return 'untracked' }
            else { return 'impossible' }
        },
    },
    template: `
	<div :id="name" class="noselect entity" @click="" @contextmenu.prevent="">
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