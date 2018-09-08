Vue.component('Item', {
	props: [ 'obj', 'status' ],
	template: `
		<div class="noselect" @click="track" @contextmenu.prevent="undo">
			<div class="iconContainer">
				<img class="icon" :src="image" :class="{ dim: !status.tracked }">
			</div>
			<div class="itemLabel">
				{{obj.label}}
			</div>
		</div>
	`,
	methods: {
		track: function() {
			if (this.obj.locked) { return; }
			if (!this.status.tracked) {
				this.$emit('track-item', this.obj.name)
				return
			}
			if (this.status.tracked && !this.status.delivered && this.obj.consumable) {
				this.$emit('deliver-item', this.obj.name)
				return
			}
			if (this.status.tracked && this.obj.next) {
				this.$emit('goto-next-item', { name: this.obj.name, next: this.obj.next })
				this.$emit('track-item', this.obj.next)
				return
			}
		},
		undo: function() {
			if (this.obj.locked) { return; }
			if (this.status.tracked && this.obj.prev) {
				this.$emit('undo-item', this.obj.name)
				this.$emit('goto-prev-item', { name: this.obj.name, prev: this.obj.prev })
				return
			}
			if (this.status.tracked && this.status.delivered && this.obj.consumable) {
				this.$emit('undeliver-item', this.obj.name)
				return
			}
			if (this.status.tracked) {
				this.$emit('undo-item', this.obj.name)
				return
			}
		}
	},
	computed: {
		image: function() {
			if (this.status.delivered && this.obj.consumable && this.obj.usedImg) { return this.obj.usedImg };
			return this.obj.img;
		}
	}
})

Vue.component('Divider', {
	template: `<div class="divider">
	</div>
	`
})