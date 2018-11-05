Vue.component('FlagsetInput', {
    props: ['string'],
    data: function () {
        return {
            flagset: this.string,
        }
    },
    template: `
	<div id="options">
		<input type="text" v-model="flagset">
		<button type="button" v-on:click="">Reset</button>
	</div>
	`
})