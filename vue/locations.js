Vue.component('Location', {
    props: ["name", "label", "image", "placement", "tracked", "settings"],
    computed: {
        imgPath: function () { return `icons/${this.settings.icons}` },
        icon: function () { return this.image.default },
        accessible: function () { return this.$store.getters[`locations/${this.name}/isAccessible`] },
        status: function () {
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